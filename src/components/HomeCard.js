import React from "react";
import Luffy from "../assets/Luffy.jpg";
import BrokenHeart from "../assets/BrokenHeart.png";
import MatchButton from "../assets/MatchButton.png";
import styled from "styled-components";
import { primaryColor } from "../constants/colors";

const MainContainer = styled.div`
  height: 75vh;
  width: 35vw;
  padding: 50px 10px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3);

  @media (max-width: 600px) {
    background-color: transparent;
    box-shadow: none;
  }
`;

const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  width: 250px;
`;

const Title = styled.h2`
  color: rgba(0, 0, 0, 0.8);
  font-size: 40px;
  font-weight: 500;
`;

const Subtitle = styled.p`
  color: rgba(0, 0, 0, 0.8);
  font-size: 20px;
  font-weight: 500;
  width: 250px;
  height: 150px;
  word-wrap: break-word;
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 200px;
`;

const Button = styled.img`
  height: 60px;
  width: 60px;
  border-radius: 40px;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.3);
  transition: 500ms;
  border: 1px solid transparent;
  :hover {
    cursor: pointer;
    border: 1px solid ${primaryColor};
    box-shadow: none;
  }
`;

const ProfileImg = styled.img`
  width: 100%;
  border-radius: 10px;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);
`;

const HomeCard = () => {
  return (
    <MainContainer>
      <SubContainer>
        <ProfileImg img src={Luffy} />
        <Title>Luffy, 19</Title>
        <Subtitle>eu vou ser o rei dos piratas!</Subtitle>
      </SubContainer>
      <ButtonsContainer>
        <Button src={BrokenHeart} />
        <Button src={MatchButton} />
      </ButtonsContainer>
    </MainContainer>
  );
};

export default HomeCard;
