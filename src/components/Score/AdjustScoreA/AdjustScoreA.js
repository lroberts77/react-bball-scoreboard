import React, { useContext } from 'react'
import { ScoreContext } from '../../../Context/Context'
import './AdjustScoreA.css'

const AdjustScoreA = () => {

  let { scoresTeamA, setScoresTeamA } = useContext(ScoreContext)

  return (
    <>
          <button id="increment-btnb" onClick={() => setScoresTeamA( scoresTeamA => scoresTeamA + 1 )}>+1</button>
          <button id="increment3-btnb" onClick={() => setScoresTeamA( scoresTeamA => scoresTeamA + 3 )}>+3</button>
          <button id="decrement-btnb" onClick={() => scoresTeamA <= 0 ? scoresTeamA => scoresTeamA = 0 : setScoresTeamA( scoresTeamA => scoresTeamA - 1 )}>-1</button>
          <button id="reset-btnb" onClick={() => setScoresTeamA( scoresTeamA => scoresTeamA = 0 )}>Reset</button> 
    </>
  )
}

export default AdjustScoreA