import styled from "styled-components";
import { primaryColor, secondaryColor } from "../../constants/colors.js";

export const MainContainer = styled.div`
  background-image: linear-gradient(${primaryColor}, ${secondaryColor});
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const Title = styled.h1`
font-size: 70px;
font-weight: 200;
`;

export const Subtitle = styled.h2`
font-size: 30px;
font-weight: 200;
margin-bottom: 20px;
`;
