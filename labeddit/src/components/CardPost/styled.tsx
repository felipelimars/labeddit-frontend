import styled from "styled-components"
import { PiArrowFatDownThin } from "react-icons/pi";
import { GoComment } from "react-icons/go";

export const Container = styled.div`
width: 360px;
height: 83.5%;
border-radius: 12px;
border: 1px solid #E0E0E0;
background-color: #FBFBFB;
display: flex;
flex-direction: column;
font-family: 'IBM Plex Sans', sans-serif;
font-weight: 400;
line-height: 23px;
margin-bottom: 10px;
`

export const CommentContent = styled.p`
font-family: 'IBM Plex Sans', sans-serif;
font-size: 18px;
font-weight: 400;
line-height: 23px;
padding: 10px;
max-width: 360px;
overflow-wrap: break-word;
height: inhereit;
`
export const ContainerButtonsLike = styled.div`
border-radius: 28px;
border: 1px solid #ECECEC;
width: 98px;
height: 27.89px;
display: flex;
justify-content: space-between;
align-items: center;
padding: 1vh;
font-family: 'IBM Plex Sans', sans-serif;
font-size: 10px;
font-weight: 700;
line-height: 12px;
text-align: center;
color: #6F6F6F;
`
export const ContainerButtons = styled.div`
display: flex;
margin-left: 5px;
margin-bottom: 5px;
`
export const LikeStyled = styled(PiArrowFatDownThin)`
font-size: 19.67px;
transform: rotate(180deg);
color: #6F6F6F;
`
export const DislikeStyled = styled(PiArrowFatDownThin)`
font-size: 19.67px;
color: #6F6F6F;
`
export const CommentStyled = styled(GoComment)`
font-size: 17px;
color: #6F6F6F;
`
export const LikeButton = styled.button`
border: none;
background-color: transparent;
width: 19.72px;
height: 19.72px;
cursor: pointer;
transition: transform 0.2s ease-in-out;
  
  &:active {
    transform: translateY(-5px);
  }
`
export const DislikeButton = styled.button`
border: none;
background-color: transparent;
width: 19.72px;
height: 19.72px;
cursor: pointer;
transition: transform 0.2s ease-in-out;
  
  &:active {
    transform: translateY(5px);
  }
`
export const CommentButton = styled.button`
border: none;
background-color: transparent;
width: 19.72px;
height: 19.72px;
cursor: pointer;
transition: transform 0.2s ease-in-out;
  
  &:active {
    transform: translateY(-5px);
  }
`
export const ContainerComment = styled.div`
border-radius: 28px;
border: 1px solid #ECECEC;
width: 60px;
height: 27.89px;
display: flex;
justify-content: space-between;
align-items: center;
padding: 5px;
font-family: 'IBM Plex Sans', sans-serif;
font-size: 10px;
font-weight: 700;
line-height: 12px;
text-align: center;
color: #6F6F6F;
padding: 10px;
margin-left: 10px;
`

export const CommentNumber = styled.span`
font-family: 'IBM Plex Sans', sans-serif;
font-size: 10px;
padding-bottom: 2px;
font-weight: 400;
line-height: 12px;
text-align: center;
`
export const CommentedBy = styled.span`
font-family: IBM Plex Sans;
font-size: 12px;
font-weight: 400;
line-height: 16px;
text-align: center;
color: #6F6F6F;
margin-left: 10px;
margin-right: 5px;
`
export const Username = styled.span`
font-family: IBM Plex Sans;
font-size: 12px;
font-weight: 400;
line-height: 16px;
text-align: center;
color: #6F6F6F;
`
