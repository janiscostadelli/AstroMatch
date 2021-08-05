import React from "react";
import { useHistory } from "react-router";
import MatchCards from "../../components/MatchCards";
import ArrowButton from "../../components/ArrowButton";
import OutlinedButton from "../../components/OutlinedButton";
import { Footer, Header, MainContainer, Title } from "./styled";

const MatchPage = () => {
  const history = useHistory();

  return (
    <MainContainer>
      <Header>
        <Title>Matches</Title>
        <ArrowButton
          onClick={() => {
            history.push("/home");
          }}
        />
      </Header>
      <MatchCards />
      <Footer>
        <OutlinedButton title="Resetar" />
      </Footer>
    </MainContainer>
  );
};
export default MatchPage;
