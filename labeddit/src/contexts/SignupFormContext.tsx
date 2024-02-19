import { createContext, ReactNode, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signup } from '../services/authService';
import { TSignup, tSignupFormContext } from '../types/form';

export const SignupFormContext = createContext<tSignupFormContext | undefined>(undefined);
export const SignupFormProvider: React.FC<{ children: ReactNode }> = ({ children }) => {

  const navigate = useNavigate();
  const [form, setForm] = useState<TSignup>({ username: '', email: '', password: '', acceptEmail: false });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [loading, setLoading] = useState(false);

  const validateUsername = (value: string): string | undefined => {
    if (!value) {
      return 'Por favor, digite seu apelido.';
    }
  
    if (!/^[a-zA-Z]{3,}$/.test(value)) {
      return 'O apelido deve conter no mínimo 3 letras e apenas caracteres alfabéticos.';
    }
  
    return undefined;
  };
  
  const validateEmail = (value: string): string | undefined => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,4}$/;
  
    if (!value) {
      return 'Por favor, digite seu email.';
    }
  
    if (!emailRegex.test(value)) {
      return 'Por favor, digite um email válido.';
    }
  
    return undefined;
  };
  
  const validatePassword = (value: string): string | undefined => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
  
    if (!value.trim()) {
      return 'Por favor, digite sua senha.';
    }
  
    if (!passwordRegex.test(value)) {
      return 'Senha inválida. Sua senha deve conter pelo menos 6 caracteres, incluindo letras e números.';
    }
  
    return undefined; 
  };
  
  const onChangeForm = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = event.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: type === 'checkbox' ? checked : value,
    }));
    setErrors({ ...errors, [name]: '' });
  };

  const validateForm = (): boolean => {
    const usernameError = validateUsername(form.username);
    const emailError = validateEmail(form.email);
    const passwordError = validatePassword(form.password);
    const acceptEmailError = !form.acceptEmail ? 'Por favor, aceite os emails do Labeddit.' : '';

    setErrors({
      username: usernameError || '',
      email: emailError || '',
      password: passwordError || '',
      acceptEmail: acceptEmailError || ''
    });

    return !usernameError && !emailError && !passwordError && !acceptEmailError;
  };

  const handleSignup = async (event: React.FormEvent) => {
    event.preventDefault();
    
    try {
      setLoading(true);
      if (validateForm()) {
        await signup(form, navigate);
      }
    } catch (error) {
      setErrors({ email: 'Email já cadastrado, por favor, escolha outro email.' });
    } finally {
      setLoading(false);
    }
  };
  

  const data = { form, errors, setErrors, onChangeForm, signup: handleSignup, loading };

  return (
    <SignupFormContext.Provider value={data}>
      {children}
    </SignupFormContext.Provider>
  );
};
