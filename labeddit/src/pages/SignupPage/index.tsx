import React from "react";
import Header from "../../components/Header";
import Blackbar from '../../assets/blackbar.png'
import { Blackbarfooter, ButtonSignup, Container, ContainerSpanCheck, Contract, FormContainer, InputEmailSignup, InputNickname, InputPasswordSignup, Polite, SpanCheck, SpanRules, WelcomeMessage } from "./styled";

const SignupPage = () => {
  return (
    <>
        <Header />
        <Container>
          <WelcomeMessage>Olá, boas vindas ao LabEddit ;)</WelcomeMessage>
          <FormContainer>
            <InputNickname placeholder="Apelido" required></InputNickname>
            <InputEmailSignup id="email" placeholder="Email" required type="email"></InputEmailSignup>
            <InputPasswordSignup id="senha" placeholder="Senha" required type="password"></InputPasswordSignup>
            <SpanRules>Ao continuar, você concorda com o nosso <Contract>Contrato de usuário</Contract> e nossa <Polite>Política de Privacidade</Polite></SpanRules>
            <ContainerSpanCheck>
              <input type="checkbox" id="receber-emails" />
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
