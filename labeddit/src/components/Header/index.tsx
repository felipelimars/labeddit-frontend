import React from 'react'
import Minilogo from "../../assets/minilogo.png"
import { ButtonContinue } from '../../pages/LoginPage/styled'
import { ButtonEnter, Container, Minilogotipo } from './styled'

const Header = () => {
  return (
    <Container>
        <img src={Minilogo} alt="logotipo pequeno"/>
        <ButtonEnter>Entrar</ButtonEnter>
    </Container>
  )
}

export default Header