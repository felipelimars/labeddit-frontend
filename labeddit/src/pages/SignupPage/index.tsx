import Header from "../../components/Header";
import Blackbar from '../../assets/blackbar.png'
import { Blackbarfooter, ButtonSignup, Container, ContainerSpanCheck, Contract, FormContainer, InputEmailSignup, InputPasswordSignup, InputUsername, LoadingGifSignup, Polite, SpanCheck, SpanRules, WelcomeMessage } from "./styled";
import { useSignupForm } from "../../hooks/useSignupForm";
import { ErrorEmailMessage, ErrorPasswordMessage, LoadingGif } from "../LoginPage/styled";
import Loading from "../../assets/loading-gif.gif"
const SignupPage = () => {
  const { form, errors, onChangeForm, signup, loading } = useSignupForm();

  return (
    <>
        <Header />
        <Container>
          <WelcomeMessage>Olá, boas vindas ao LabEddit ;)</WelcomeMessage>
          <FormContainer onSubmit={signup}>
            <InputUsername
              placeholder="Apelido" 
              type="text"
              name="username"
              value={form.username}
              onChange={onChangeForm}
            />
            {errors.username && <ErrorEmailMessage>{errors.username}</ErrorEmailMessage>}
            <InputEmailSignup 
              placeholder="Email" 
              name="email"
              onChange={onChangeForm}
              value={form.email}
            />
            {errors.email && <ErrorEmailMessage>{errors.email}</ErrorEmailMessage>}
            <InputPasswordSignup 
              id="senha" 
              placeholder="Senha" 
              type="password"
              name="password"
              onChange={onChangeForm}
              value={form.password}
            />
            {errors.password && <ErrorPasswordMessage>{errors.password}</ErrorPasswordMessage>}
            {errors.acceptEmail && <ErrorEmailMessage>{errors.acceptEmail}</ErrorEmailMessage>}
            <SpanRules>Ao continuar, você concorda com o nosso <Contract>Contrato de usuário</Contract> e nossa <Polite>Política de Privacidade</Polite></SpanRules>
            <ContainerSpanCheck>
              <input 
                type="checkbox" 
                name="acceptEmail"
                onChange={onChangeForm}
                value={form.acceptEmail as any}
              />
              <SpanCheck>Eu concordo em receber emails sobre coisas legais no Labeddit</SpanCheck>
            </ContainerSpanCheck>
            {loading ? (
          <LoadingGifSignup src={Loading} alt="Carregando..." />
        ) : (
          <ButtonSignup type="submit">Cadastrar</ButtonSignup>
        )}
          </FormContainer>
          <Blackbarfooter src={Blackbar} alt="blackbar"/>
        </Container>
    </>
  );
};

export default SignupPage;
