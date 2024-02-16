import styled from "styled-components"

export const Container = styled.div`
width: 100vw;
height: calc(100vh - 60px);
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
position: relative;
@media (max-width: 428px) {
    position: relative;
}`

export const WelcomeMessage = styled.h1`
font-family: 'IBM Plex Sans', sans-serif;
width: 360px;
height: 86px;
font-size: 33px;
margin-top: 2vh;
position: absolute;
top: 7%;
@media (max-width: 428px) {
    margin-top: 40px;
}
`

export const Blackbarfooter = styled.img`
width: 134px;
height: 5px;
margin-bottom: 110px;
margin-top: 8vh;
display: none;
@media (max-width: 428px) {
    display: block;
    position: absolute;
    bottom: -11.5%;
}
`

export const FormContainer = styled.form`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
overflow: hidden;
position: absolute;
bottom: 5%;
@media (max-width: 428px) {
    margin-top: 20px;
    position: absolute;
    bottom: 10%;
}
`
export const InputUsername = styled.input`
width: 360px;
height: 50px;
border-radius: 2px;
border: 1px solid #CCCCCC;
padding: 10px;
font-size: 15px;
font-family: 'Noto Sans', sans-serif;
margin-top: 10px;
`
export const InputEmailSignup = styled.input`
width: 360px;
height: 50px;
border-radius: 2px;
border: 1px solid #CCCCCC;
padding: 10px;
font-size: 15px;
font-family: 'Noto Sans', sans-serif;
margin-top: 10px;
`
export const InputPasswordSignup = styled.input`
width: 360px;
height: 50px;
border-radius: 2px;
border: 1px solid #CCCCCC;
padding: 10px;
font-size: 15px;
font-family: 'Noto Sans', sans-serif;
margin-top: 10px;
`
export const SpanRules = styled.span`
width: 360px;
font-size: 14px;
font-family: 'Noto Sans', sans-serif;
margin-top: 5vh;
@media (max-width: 428px) {
    margin-top: 75px;
}
`
export const Contract = styled.span`
width: 360px;
font-size: 14px;
font-family: 'Noto Sans', sans-serif;
margin-top: 5vh;
cursor: pointer;
color: #4088CB;
`
export const Polite = styled.span`
width: 360px;
font-size: 14px;
font-family: 'Noto Sans', sans-serif;
margin-top: 5vh;
cursor: pointer;
color: #4088CB;
`

export const SpanCheck = styled.span`
font-size: 14px;
font-family: 'Noto Sans', sans-serif;
padding-left: 10px;
`;

export const ContainerSpanCheck = styled.div`
width: 360px;
margin-top: 10px;
display: flex;
`
export const ButtonSignup = styled.button`
width: 360px;
height: 50px;
border: none; 
border-radius: 20px;
background: linear-gradient(to left, rgb(249, 173, 83), rgb(255, 104, 134));
color: #fff;
font-weight: bold;
font-size: 17px;
font-family: 'Noto Sans', sans-serif;
margin-top: 50px;
cursor: pointer;
    &:hover{
        background: #FE7E03;
        transition: ease-in-out; 0.3s;
    }
    @media (max-width: 428px) {
    margin-top: 30px;
}
`;

export const ErrorCheckboxMessage = styled.p`
font-size: 10px;
color: red;
align-self: flex-start;
margin-left: 10px;
font-family: 'Noto Sans', sans-serif;
`
export const LoadingGifSignup = styled.img`
margin-top: 20px;
width: 30px;
height: 30px;
`;