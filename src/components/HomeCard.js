import React, { useState, useEffect } from "react";
import BrokenHeart from "../assets/BrokenHeart.png";
import MatchButton from "../assets/MatchButton.png";
import styled from "styled-components";
import { primaryColor } from "../constants/colors";
import { choosePerson, getProfile } from "../services/API.js";

const MainContainer = styled.div`
  position: relative;
  height: 75vh;
  width: 35vw;
  padding: 10px;
  padding-bottom: 50px;
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
  justify-content: center;
  align-items: center;
  width: 250px;
`;

const Title = styled.h2`
  color: rgba(0, 0, 0, 0.8);
  font-size: 30px;
  font-weight: 500;
  align-self: start;
`;

const Subtitle = styled.p`
  color: rgba(0, 0, 0, 0.8);
  font-size: 20px;
  font-weight: 500;
  width: 250px;
  word-wrap: break-word;
`;

const ButtonsContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 200px;
  bottom: 10px;
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
  max-width: 100%;
  max-height: 300px;
  border-radius: 10px;
`;

const LoadingText = styled.p`
  color: rgba(0, 0, 0, 0.7);
  @media (max-width: 600px) {
    color: white;
  }
`;

const HomeCard = () => {
  const [profile, setProfile] = useState({
    id: "",
    name: "",
    age: 0,
    photo: "",
    bio: "",
  });

  useEffect(() => {
    getProfile().then((res) => {
      setProfile(res);
    });
  }, []);

  return (
    <MainContainer>
      {profile && !profile.id ? (
        <LoadingText>carregando</LoadingText>
      ) : profile === null ? (
        <LoadingText>Você já viu todos os perfis! Tente resetar os matches</LoadingText>
      ) : (
        <SubContainer>
          <ProfileImg src={profile.photo} />
          <Title>
            {profile.name}, {profile.age}
          </Title>
          <Subtitle>{profile.bio}</Subtitle>
        </SubContainer>
      )}

      <ButtonsContainer>
        <Button
          onClick={() => {
            if(profile === null){
              return alert("Tente resetar na página de matches")
            }
            choosePerson(profile.id, false);
            getProfile().then((res) => {
              setProfile(res);
            });
          }}
          src={BrokenHeart}
        />
        <Button
          onClick={() => {
            if(profile === null){
              return alert("tente resetar na página de matches")
            }
            choosePerson(profile.id, true);
            getProfile().then((res) => {
              setProfile(res);
            });
          }}
          src={MatchButton}
        />
      </ButtonsContainer>
    </MainContainer>
  );
};

export default HomeCard;
