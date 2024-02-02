import Header from "../../components/Header";
import Blackbar from '../../assets/blackbar.png'
import { Blackbarfooter, ButtonSignup, Container, ContainerSpanCheck, Contract, FormContainer, InputEmailSignup, InputPasswordSignup, InputUsername, Polite, SpanCheck, SpanRules, WelcomeMessage } from "./styled";
import { useSignupForm } from "../../hooks/useSignupForm";

const SignupPage = () => {
  const { form, onChangeForm, signup } = useSignupForm();

  return (
    <>
        <Header />
        <Container>
          <WelcomeMessage>Olá, boas vindas ao LabEddit ;)</WelcomeMessage>
          <FormContainer onSubmit={signup}>
            <InputUsername
            placeholder="Apelido" 
            required
            type="text"
            name="username"
            value={form.username}
            onChange={onChangeForm}
            ></InputUsername>
            <InputEmailSignup 
            placeholder="Email" 
            required 
            type="email"
            name="email"
            onChange={onChangeForm}
            value={form.email}
            >
            </InputEmailSignup>
            <InputPasswordSignup 
            id="senha" 
            placeholder="Senha" 
            required 
            type="password"
            name="password"
            onChange={onChangeForm}
            value={form.password}
            ></InputPasswordSignup>
            <SpanRules>Ao continuar, você concorda com o nosso <Contract>Contrato de usuário</Contract> e nossa <Polite>Política de Privacidade</Polite></SpanRules>
            <ContainerSpanCheck>
            <input 
            type="checkbox" 
            name="acceptEmail"
            onChange={onChangeForm}
            value={form.acceptEmail as any}
            required
            />
            <SpanCheck>Eu concordo em receber emails sobre coisas legais no Labeddit</SpanCheck>
            </ContainerSpanCheck>
            <ButtonSignup type="submit">Cadastrar</ButtonSignup>
          </FormContainer>
          <Blackbarfooter src={Blackbar} alt="blackbar"/>
        </Container>
    </>
    
  );
};

export default SignupPage;
