import React, { useContext } from 'react'
import { ScoreContext } from '../../../Context/Context'
import './ScoreBoard.css'

const ScoreBoard = () => {

  let { scoresTeamA, scoresTeamB } = useContext(ScoreContext)

  return (
    <div className='scoreBoard'>
      <div>{scoresTeamA}</div>
      <div>-</div>
      <div>{scoresTeamB}</div>
    </div>
  )
}

export default ScoreBoard