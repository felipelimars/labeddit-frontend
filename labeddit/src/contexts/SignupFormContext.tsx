import React, { createContext, useContext, ReactNode, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SignupForm } from "../types/form";
import { signup } from "../services/authService";

interface SignupFormContextProps {
  form: SignupForm;
  onChangeForm: (event: React.ChangeEvent<HTMLInputElement>) => void;
  signup: (event: React.FormEvent) => void;
}

export const SignupFormContext = createContext<SignupFormContextProps | undefined>(undefined);

export const SignupFormProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const navigate = useNavigate();
  const [form, setForm] = useState<SignupForm>({ username: "", email: "", password: "", acceptEmail: false});

  const onChangeForm = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target as HTMLInputElement;
    setForm({ ...form, [name]: value});
  };

  const handleSignup = async (event: React.FormEvent) => {
    event.preventDefault();
    await signup(form, navigate);
  };

  const data = { form, onChangeForm, signup: handleSignup };

  return <SignupFormContext.Provider value={data}>{children}</SignupFormContext.Provider>;
};

