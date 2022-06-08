import { useState } from "react";
import { ScoreContext } from "../../Context/Context";
import AdjustScoreA from "./AdjustScoreA/AdjustScoreA";
import AdjustScoreB from "./AdjustScoreB/AdjustScoreB";
import ScoreBoard from "./ScoreBoard/ScoreBoard";
import "./scores.css";

const Scores = () => {
  const [scoresTeamA, setScoresTeamA] = useState(0);
  const [scoresTeamB, setScoresTeamB] = useState(0);

  return (
    <ScoreContext.Provider
      value={{ scoresTeamA, setScoresTeamA, scoresTeamB, setScoresTeamB }}
    >
      <AdjustScoreA />
      <ScoreBoard />
      <AdjustScoreB />
    </ScoreContext.Provider>
  );
};

export default Scores;
