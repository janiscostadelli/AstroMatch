import React from "react";
import { MainContainer, Title, Subtitle, Content } from "./styled";
import Button from '../../components/Button'
import { useHistory } from "react-router";

const InitialPage = () => {
  const history = useHistory();

  return(
    <MainContainer>
      <Content>
        <Title>Astromatch</Title>
        <Subtitle>Encontre seu par perfeito para casar e ter filhos</Subtitle>
        <Button right onClick={()=>{history.push("/home")}}/>
      </Content>
    </MainContainer>
  );
};
export default InitialPage;
