import React, { useContext } from 'react'
import { ScoreContext } from '../../../Context/Context'
import './AdjustScoreB.css'

const AdjustScoreB = () => {

  let { scoresTeamB, setScoresTeamB } = useContext(ScoreContext)

  return (
    <>
          <button id="increment-btnb" onClick={() => setScoresTeamB( scoresTeamB => scoresTeamB + 1 )}>+1</button>
          <button id="increment3-btnb" onClick={() => setScoresTeamB( scoresTeamB => scoresTeamB + 3 )}>+3</button>
          <button id="decrement-btnb" onClick={() => scoresTeamB <= 0 ? scoresTeamB => scoresTeamB = 0 : setScoresTeamB( scoresTeamB => scoresTeamB - 1 )}>-1</button>
          <button id="reset-btnb" onClick={() => setScoresTeamB( scoresTeamB => scoresTeamB = 0 )}>Reset</button>    
    </>
  )
}

export default AdjustScoreB