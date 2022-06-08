import React, { useContext } from 'react'
import { ScoreContext } from '../../../Context/Context'
import './AdjustScoreA.css'

const AdjustScoreA = () => {

  let { scoresTeamA, setScoresTeamA, scoresTeamB, setScoresTeamB } = useContext(ScoreContext)

  return (
    <div className='scoreA'>AdjustScoreA</div>
  )
}

export default AdjustScoreA