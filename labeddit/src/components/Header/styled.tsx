import styled from "styled-components";
import { IoCloseOutline } from "react-icons/io5";

export const Container = styled.div`
  width: 100vw;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(237, 237, 237);
  padding: 0 20px;
  position: relative; 
`;

export const ButtonEnter = styled.span`
  color: blue;
  position: absolute;
  padding-right: 20px;
  margin-top: 8px;
  right: 1%;
  font-size: 15px;
  font-family: "noto-sans", sans-serif;
  font-weight: bold;
  color: #4088CB;
  cursor: pointer;
`;

export const CloseButton = styled(IoCloseOutline)`
  margin-top: 5px;
  margin-left: 5px;
  font-size: 30px;
  color: #A3A3A3;
  position: absolute;
  cursor: pointer;
  left: 1%;
`;

