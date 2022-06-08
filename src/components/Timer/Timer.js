import Clock from "./Clock/Clock";
import DecreaseTime from "./DecreaseTime/DecreaseTime";
import IncreaseTime from "./IncreaseTime/IncreaseTime";
import "./Timer.css";

const Timer = () => {
  return (
    <div className="timer">
      <div className="col-1">
      <Clock />
      </div>
      <div className="col-2">
        <IncreaseTime />
      </div>
      <div className="col-3">
        <DecreaseTime />
      </div>
    </div>
  );
};

export default Timer;
