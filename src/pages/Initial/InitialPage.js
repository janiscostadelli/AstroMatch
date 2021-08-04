import React from "react";
import { MainContainer, Title, Subtitle, Content } from "./styled";
import ArrowButton from '../../components/ArrowButton'
import { useHistory } from "react-router";

const InitialPage = () => {
  const history = useHistory();

  return(
    <MainContainer>
      <Content>
        <Title>Astromatch</Title>
        <Subtitle>Encontre seu par perfeito pra uns dates</Subtitle>
        <ArrowButton right onClick={()=>{history.push("/home")}}/>
      </Content>
    </MainContainer>
  );
};
export default InitialPage;
