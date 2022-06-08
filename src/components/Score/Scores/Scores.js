import { ScoreContext } from '../../../Context/Context'
import  './scores.css'


const Scores = () => {
  return (
    <ScoreContext.Provider>
    <div className='score'>Scores</div>
    </ScoreContext.Provider>
  )
}

export default Scores