import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Minilogo from "../../assets/minilogo.png"
import { goToLoginPage } from '../../routes/coordinator'
import { ButtonEnter, Container } from './styled'

const Header = () => {
  const navigate = useNavigate()
  const location = useLocation();
  const isHomePage = location.pathname === "/feed"

  return (
    <Container>
      <div> 
        <img src={Minilogo} alt="logotipo pequeno" />
        {isHomePage ? (
          <ButtonEnter onClick={() => goToLoginPage(navigate)}>Logout</ButtonEnter>
        ) : (
          <ButtonEnter onClick={() => goToLoginPage(navigate)}>Entrar</ButtonEnter>
        )}
      </div>
    </Container>
  )
}

export default Header
