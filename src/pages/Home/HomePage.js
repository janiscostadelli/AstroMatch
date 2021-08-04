import React from "react";
import HomeCard from "../../components/HomeCard";
import OutlinedButton from "../../components/OutlinedButton";
import { MainContainter, MatchsButton } from "./styled";
import { useHistory } from "react-router-dom";

const HomePage = () => {
  const history = useHistory();

  return (
    <MainContainter>
      <MatchsButton>
        <OutlinedButton
          onClick={() => history.push("/matches")}
          title="Matchs"
        />
      </MatchsButton>
      <HomeCard />
    </MainContainter>
  );
};
export default HomePage;
