import "./App.css";
import Scores from "./components/Score/Scores/Scores";
import Timer from "./components/Timer/Timer";
import { TimerContext } from "./Context/Context";

function App() {
  return (
    <div className="App">
      <TimerContext.Provider>
        <Timer />
      </TimerContext.Provider>
      <Scores />
    </div>
  );
}

export default App;
