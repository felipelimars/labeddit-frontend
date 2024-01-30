import React from 'react'
import Logo from '../../assets/logo.png'
import Orangeline from '../../assets/orangeline.png'
import Blackbar from '../../assets/blackbar.png'
import { BlackBar, ButtonContinue, ButtonCreateAccount, Container, FormContainer, InputEmail, InputPassword, LogoLabenu, OrangeLine, Slogan } from './styled'

const LoginPage = () => {
  return (
        <Container>
            <LogoLabenu src={Logo} alt="Logo Labenu"/>
            <Slogan>O projeto de rede social da Labenu</Slogan>
            <FormContainer>
            <InputEmail placeholder='E-mail' required type="email"></InputEmail>
            <InputPassword placeholder='Senha' required type="password"></InputPassword>
            <ButtonContinue>Continuar</ButtonContinue>
            </FormContainer>
            <OrangeLine src={Orangeline} alt="Orange line"/>
            <ButtonCreateAccount>Crie uma conta!</ButtonCreateAccount>
            <BlackBar src={Blackbar} alt="Black bar style"/>
        </Container>
  )
}

export default LoginPage

