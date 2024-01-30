import styled from "styled-components";

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

export const Minilogotipo = styled.img`
  width: 35px;
  height: 35px;
`;

export const ButtonEnter = styled.span`
  color: blue;
  position: absolute;
  padding-right: 20px;
  right: 1%;
  font-size: 18px;
  font-family: "noto-sans", sans-serif;
  font-weight: bold;
  color: #4088CB;
  cursor: pointer;
`;
