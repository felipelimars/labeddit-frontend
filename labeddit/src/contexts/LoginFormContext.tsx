import React, { createContext, ReactNode, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../services/authService';
import { LoginForm } from '../types/form';

interface LoginFormContextProps {
  form: LoginForm;
  onChangeForm: (event: React.ChangeEvent<HTMLInputElement>) => void;
  login: (event: React.FormEvent) => void;
}

export const LoginFormContext = createContext<LoginFormContextProps | undefined>(undefined);

export const LoginFormProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const navigate = useNavigate();
  const [form, setForm] = useState<LoginForm>({ email: '', password: '' });

  const onChangeForm = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    await login(form, navigate);
  };

  const data = { form, onChangeForm, login: handleLogin };

  return (
    <LoginFormContext.Provider value={data}>
      {children}
    </LoginFormContext.Provider>
  );
};




