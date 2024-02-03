import Logo from '../../assets/logo.png';
import Orangeline from '../../assets/orangeline.png';
import Blackbar from '../../assets/blackbar.png';
import { BlackBar, ButtonContinue, ButtonCreateAccount, Container, ErrorEmailMessage, ErrorPasswordMessage, FormContainer, InputEmail, InputPassword, LoadingGif, LogoLabenu, OrangeLine, Slogan } from './styled';
import { goToSignupPage } from '../../routes/coordinator';
import { useLoginForm } from '../../hooks/useLoginForm';
import { useNavigate } from 'react-router-dom'
import Loading from "../../assets/loading-gif.gif"

const LoginPage = () => {
  const { form, errors, onChangeForm, login, loading } = useLoginForm();
  const navigate = useNavigate();
  return (
    <Container>
      <LogoLabenu src={Logo} alt="Logo Labenu" />
      <Slogan>O projeto de rede social da Labenu</Slogan>
      <FormContainer onSubmit={login}>
        <InputEmail
          placeholder='E-mail'
          name="email"
          onChange={onChangeForm}
          value={form.email}
        />
        {errors.email && <ErrorEmailMessage>{errors.email}</ErrorEmailMessage>}
        <InputPassword
          placeholder="Senha"
          name="password"
          onChange={onChangeForm}
          value={form.password}
          type="password"
        />
        {errors.password && <ErrorPasswordMessage>{errors.password}</ErrorPasswordMessage>}
        {loading ? (
          <LoadingGif src={Loading} alt="Carregando..." />
        ) : (
          <ButtonContinue type="submit">Continuar</ButtonContinue>
        )}      
      </FormContainer>
      <OrangeLine src={Orangeline} alt="Orange line" />
      <ButtonCreateAccount onClick={() => goToSignupPage(navigate)}>Crie uma conta!</ButtonCreateAccount>
      <BlackBar src={Blackbar} alt="Black bar style" />
    </Container>
  );
};

export default LoginPage;

