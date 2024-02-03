import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Minilogo from "../../assets/minilogo.png"
import { goToLoginPage } from '../../routes/coordinator'
import { ButtonEnter, Container } from './styled'

const Header = () => {
  const navigate = useNavigate()
  const location = useLocation();
  const isHomePage = location.pathname === "/home"

  return (
    <Container>
      {isHomePage ? (
        <ButtonEnter onClick={() => goToLoginPage(navigate)}>Logout</ButtonEnter>
      ) : (
        <>
          <img src={Minilogo} alt="logotipo pequeno" />
          <ButtonEnter onClick={() => goToLoginPage(navigate)}>
            Entrar
          </ButtonEnter>
        </>
      )}
    </Container>
  )
}

export default Header
