import styled from "styled-components";
import { primaryColor, secondaryColor } from "../../constants/colors";

export const MainContainter = styled.div`
  background-image: linear-gradient(${primaryColor}, ${secondaryColor});
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position:relative;
  flex-direction: column;
`;

export const MatchsButton = styled.div`
position: absolute;
right: 20px;
top: 15px;
@media (max-width: 600px){
  position: relative;
  right: 0px;
  top: 0px;
  margin-bottom: -25px;
}
`
