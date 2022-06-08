import { useState } from "react";
import { TimerContext } from "../../Context/Context";
import Clock from "./Clock/Clock";
import DecreaseTime from "./DecreaseTime/DecreaseTime";
import IncreaseTime from "./IncreaseTime/IncreaseTime";
import "./Timer.css";

const Timer = () => {

  const [seconds, setseconds] = useState(0);
  const [minutes, setminutes] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  return (
    <TimerContext.Provider value={{seconds, setseconds, minutes, setminutes, isRunning, setIsRunning}}>
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
    </TimerContext.Provider>
  );
};

export default Timer;
