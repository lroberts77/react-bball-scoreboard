import { useState } from "react";
import { ScoreContext } from "../../Context/Context";
import AdjustScoreA from "./AdjustScoreA/AdjustScoreA";
import AdjustScoreB from "./AdjustScoreB/AdjustScoreB";
import ScoreBoard from "./ScoreBoard/ScoreBoard";
import "./Scores.css";

const Scores = () => {
  const [scoresTeamA, setScoresTeamA] = useState(0);
  const [scoresTeamB, setScoresTeamB] = useState(0);

  return (
    <ScoreContext.Provider
      value={{ scoresTeamA, setScoresTeamA, scoresTeamB, setScoresTeamB }}
    >
      <div className="scores">
        <div className="adjust-team-a-col">
          <AdjustScoreA />
        </div>
        <div className="scoreboard">
          <ScoreBoard />
        </div>
        <div className="adjust-team-b-col">
          <AdjustScoreB />
        </div>
      </div>
    </ScoreContext.Provider>
  );
};

export default Scores;
