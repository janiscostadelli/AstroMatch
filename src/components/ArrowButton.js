import React from 'react';
import styled from 'styled-components';
import ButtonIMG from '../assets/Button.png';

const MainContainer = styled.img`
  transform: rotate(${props => props.right ? "180deg" : "0deg"});
  height: 50px;
  transition: 500ms;
  border-radius: 50px;
  :hover{
    box-shadow:  ${props => props.right ? "-2px -4px 8px rgba(0,0,0,0.3)" : "2px 4px 8px rgba(0,0,0,0.3)"};
    cursor: pointer;
  }
`

const ArrowButton = (props) => {
  return (
    <MainContainer onClick={props.onClick} right={props.right} src={ButtonIMG}/>
  );
}
export default ArrowButton;