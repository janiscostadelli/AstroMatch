import styled from "styled-components";
import { primaryColor, secondaryColor } from "../../constants/colors";

export const MainContainer = styled.div`
  background-image: linear-gradient(${primaryColor}, ${secondaryColor});
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.div`
  font-size: 50px;
  @media (max-width: 600px) {
    font-size: 40px;
  }
`;

export const Header = styled.div`
  width: 80vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px;
`;

export const Footer = styled.div`
  height: 60px;
`;
