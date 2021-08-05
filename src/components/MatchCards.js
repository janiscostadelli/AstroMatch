import React from "react";
import styled from "styled-components";

const MatchCards = (props) => {
  return (
    <MainContainer>
      {
        props.matches &&
        props.matches.map((match) => {
          return (
            <Card key={match.id}>
              <ProfileImg src={match.photo} />
              <Title>{match.name}</Title>
            </Card>
          );
        })}
    </MainContainer>
  );
};

export default MatchCards;

const MainContainer = styled.div`
  width: 70vw;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  gap: 25px;
  padding: 25px;
  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 10px;
  }
`;

const Card = styled.div`
  background-color: white;
  width: 200px;
  height: 60px;
  border-radius: 10px;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0px 15px;
`;

const Title = styled.p`
  color: rgba(0, 0, 0, 0.7);
`;

const ProfileImg = styled.img`
  height: 45px;
  width: 45px;
  border-radius: 50px;
`;
