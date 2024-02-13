import styled from "styled-components"

export const Container = styled.div`
width: 100vw;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
background-color: #ffffff;
`

export const CardContainer = styled.div`
display: flex;
flex-direction: column-reverse;
`
export const FormContainer = styled.form`
width: 360px;
display: flex;
flex-direction: column;
align-items: center;
`

export const ButtonPost = styled.button`
width: 360px;
height: 50px;
border: none; 
border-radius: 12px;
background: linear-gradient(to left, rgb(249, 173, 83), rgb(255, 104, 134));
color: #fff;
font-weight: bold;
font-size: 17px;
font-family: 'Noto Sans', sans-serif;
margin-top: 10px;
cursor: pointer;
    &:hover{
        background: #FE7E03;
        transition: ease-in-out; 0.3s;
    }
`;

export const TextArea = styled.input`
width: 360px;
height: 131px;
padding-bottom: 80px;
padding-left: 15px;
margin-top: 20px;
border-radius: 12px;
font-family: 'IBM Plex Sans', sans-serif;
font-size: 18px;
border: none;
background-color: #EDEDED;
overflow-wrap: break-word;
`
export const OrangeLine = styled.img`
width: 358px;
margin-top: 30px;
margin-bottom: 30px;
`