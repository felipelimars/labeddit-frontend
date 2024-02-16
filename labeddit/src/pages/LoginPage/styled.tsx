import styled from 'styled-components';

export const Container = styled.div`
width: 100vw;
height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: white;
overflow: auto;
`
export const LogoLabenu = styled.img`
width: 130px;
height: 130px;
margin-top: 70px;
@media (max-width: 428px) {
 width: 145px;
 height: 145px;
 margin-top: 140px;
  }
`
export const Slogan = styled.div`
width: 240px;
color: #333333;
font-family: 'IBM Plex Sans', sans-serif;
font-size: 15px;
`
export const FormContainer = styled.form`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
margin-top: 110px;
overflow: auto;
`
export const OrangeLine = styled.img`
width: 358px;
margin-top: 15px;
margin-bottom: 15px;
height: 1px;
transform: rotate(-0.32deg);
`
export const InputEmail = styled.input`
width: 360px;
height: 50px;
border-radius: 2px;
border: 1px solid #CCCCCC;
padding: 10px;
font-size: 15px;
font-family: 'Noto Sans', sans-serif;
`
export const InputPassword = styled.input`
width: 360px;
height: 50px;
border-radius: 2px;
border: 1px solid #CCCCCC;
padding: 10px;
margin-top: 10px;
font-size: 15px;
font-family: 'Noto Sans', sans-serif;
`
export const ButtonContinue = styled.button`
width: 360px;
height: 50px;
border: none; 
margin-top: 60px;
border-radius: 20px;
background: linear-gradient(to left, rgb(249, 173, 83), rgb(255, 104, 134));
color: #fff;
font-weight: bold;
font-size: 17px;
font-family: 'Noto Sans', sans-serif;
cursor: pointer;
    &:hover{
        background: #FE7E03;
        transition: ease-in-out; 0.3s;
    }
`;
export const ButtonCreateAccount = styled.button`
width: 360px;
height: 50px;
background-color: #fff;
border: solid #FE7E03; 
margin-bottom: 80px;
border-radius: 20px;
color: #FE7E03;
font-weight: bold;
font-size: 17px;
font-family: 'Noto Sans', sans-serif;
cursor: pointer;
 &:hover{
    background-color: #FE7E03;
    color: #fff;
    transition: ease-in-out 0.3s;
}
`;
export const BlackBar = styled.img`
width: 134px;
height: 5px;
margin-bottom: 10px;
display: none;
@media (max-width: 428px) {
    margin-top: 120px;
    display: block;
  }
`;

export const ErrorEmailMessage = styled.p`
font-size: 10px;
color: red;
align-self: flex-start;
margin-left: 10px;
font-family: 'Noto Sans', sans-serif;
`
export const ErrorPasswordMessage = styled.p`
font-size: 10px;
color: red;
align-self: flex-start;
margin-left: 10px;
font-family: 'Noto Sans', sans-serif;
width: 340px;
`
export const LoadingGif = styled.img`
margin-top: 10px;
width: 30px;
height: 30px;
`;