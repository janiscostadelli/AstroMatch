import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import MatchCards from "../../components/MatchCards";
import ArrowButton from "../../components/ArrowButton";
import OutlinedButton from "../../components/OutlinedButton";
import { Footer, Header, MainContainer, Title } from "./styled";
import { clear, getMatches } from "../../services/API";

const MatchPage = () => {
  const [matches, setMatches] = useState([]);
  useEffect(() => {
    getMatches().then((res) => {
      setMatches(res);
    });
  }, []);

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
      <MatchCards matches={matches} />
      <Footer>
        <OutlinedButton onClick={clear} title="Resetar" />
      </Footer>
    </MainContainer>
  );
};
export default MatchPage;
