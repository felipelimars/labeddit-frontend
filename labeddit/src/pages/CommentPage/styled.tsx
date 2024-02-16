import styled from "styled-components"

export const Container = styled.div`
width: 100vw;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`
export const FormContainer = styled.form`
width: 658px;
display: flex;
flex-direction: column;
align-items: center;
@media (max-width: 428px) {
    width: 360px;
  }
`
export const CardContainer = styled.div`
margin-top: 20px;
`
export const OrangeLine = styled.img`
width: 658px;
margin-top: 20px;
margin-bottom: 30px;
transform: rotate(-0.32deg);
@media (max-width: 428px) {
width: 358px;
  }
`
export const ErrorCommentMessage = styled.p`
font-size: 10px;
color: red;
align-self: flex-start;
font-family: 'Noto Sans', sans-serif;
margin-left: 10px;
`