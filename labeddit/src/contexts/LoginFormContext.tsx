import { createContext, ReactNode, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../services/authService';
import { TLogin, TLoginFormContext } from '../types/form';

export const LoginFormContext = createContext<TLoginFormContext | undefined>(undefined);
export const LoginFormProvider: React.FC<{ children: ReactNode }> = ({ children }) => {

  const navigate = useNavigate();
  const [form, setForm] = useState<TLogin>({ email: '', password: '' });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [loading, setLoading] = useState(false); 

  const validateEmail = (value: string): string | undefined => {
    const emailRegex = /^[a-zA-Z0-9_\-]+@[a-zA-Z0-9_\-]+\.[A-Za-z]+$/;
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
    if (!value) {
      return 'Por favor, digite sua senha.';
    }
    if (!passwordRegex.test(value)) {
      return 'Email ou senha inválidos.';
    }
    return undefined;
  };

  const onChangeForm = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
    setErrors({ ...errors, [name]: '' });
  };
  
  const validateForm = (): boolean => {
    const emailError = validateEmail(form.email);
    const passwordError = validatePassword(form.password);

    setErrors({
      email: emailError || '',
      password: passwordError || '',
    });

    return !emailError && !passwordError;
  };

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
  
    try {
      setLoading(true); 
      if (validateForm()) {
        await login(form, navigate);
      }
    } catch (error) {
      console.error('Erro ao fazer login:', error);
    } finally {
      setLoading(false); 
    }
  };
  
  
  const data = { form, errors, onChangeForm, login: handleLogin, loading };

  return (
    <LoginFormContext.Provider value={data}>
      {children}
    </LoginFormContext.Provider>
  );
};


