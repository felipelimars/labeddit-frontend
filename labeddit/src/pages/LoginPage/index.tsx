// LoginPage.jsx
import React from 'react';
import Logo from '../../assets/logo.png';
import Orangeline from '../../assets/orangeline.png';
import Blackbar from '../../assets/blackbar.png';
import { BlackBar, ButtonContinue, ButtonCreateAccount, Container, FormContainer, InputEmail, InputPassword, LogoLabenu, OrangeLine, Slogan } from './styled';
import { goToSignupPage } from '../../routes/coordinator';
import { useLoginForm } from '../../hooks/useLoginForm';
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {
  const { form, onChangeForm, login } = useLoginForm();
  const navigate = useNavigate()
  return (
    <Container>
      <LogoLabenu src={Logo} alt="Logo Labenu" />
      <Slogan>O projeto de rede social da Labenu</Slogan>
      <FormContainer onSubmit={login}>
        <InputEmail
          placeholder='E-mail'
          required
          type="email"
          name="email"
          onChange={onChangeForm}
          value={form.email}
        ></InputEmail>
        <InputPassword
          placeholder="Senha"
          name="password"
          required
          type="password"
          onChange={onChangeForm}
          value={form.password}
        ></InputPassword>
        <ButtonContinue>Continuar</ButtonContinue>
      </FormContainer>
      <OrangeLine src={Orangeline} alt="Orange line" />
      <ButtonCreateAccount  onClick={() => goToSignupPage(navigate)}>Crie uma conta!</ButtonCreateAccount>
      <BlackBar src={Blackbar} alt="Black bar style" />
    </Container>
  );
};

export default LoginPage;


