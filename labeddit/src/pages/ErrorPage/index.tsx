import React from 'react'
import Header from '../../components/Header'
import { ButtonContinue, OrangeLine } from '../LoginPage/styled'
import { Container, ErrorMessage } from './styled'

const ErroPage = () => {
  return (
    <div>
        <Header/>
      <Container>
        <ErrorMessage>
        Ops, página não encontrada ;(
        </ErrorMessage>
      </Container>
    </div>
  )
}

export default ErroPage
