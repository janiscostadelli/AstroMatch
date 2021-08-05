import React from "react";
import styled from "styled-components";
import { primaryColor } from "../constants/colors";

const OutlinedButton = (props) => {
  return (
    <MainContainer onClick={props.onClick}>
      {props.title}
    </MainContainer>
  );
};

const MainContainer = styled.button`
  background-color: ${primaryColor};
  padding: 10px 15px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 3px;
  font-size: 20px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
  :hover {
    cursor: pointer;
  }
`;

export default OutlinedButton;
