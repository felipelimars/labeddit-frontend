import axios from 'axios';
import BASE_URL from '../constants/BASE_URL';
import { useLoginForm } from '../hooks/useLoginForm';
import { goToFeedPage } from '../routes/coordinator';
import { TLogin, TSignup } from '../types/form';

export const login = async (form: TLogin, navigate: any): Promise<void> => {
  try {
    const body = {
      email: form.email,
      password: form.password,
    };

    const res = await axios.post(`${BASE_URL}/users/login`, body);
    window.localStorage.setItem('token-labeddit', res.data.token);
    goToFeedPage(navigate);
  } catch (error) {
    alert("Email não cadastrado!");
    throw error;
  }
};

export const signup = async (form: TSignup, navigate: any): Promise<void> => {
  try {
    const body = {
      username: form.username,
      email: form.email,
      password: form.password,
    };

    const res = await axios.post(`${BASE_URL}/users/signup`, body);
    window.localStorage.setItem('token-labeddit', res.data.token);
    goToFeedPage(navigate);
  } catch (error) {
    console.error('Error during signup:', error);
    throw error;
  }
};

