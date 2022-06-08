import "./App.css";
import Scores from "./components/Score/Scores";
import Timer from "./components/Timer/Timer";

function App() {
  return (
    <div className="App">
      <Timer />
      <Scores />
    </div>
  );
}

export default App;
