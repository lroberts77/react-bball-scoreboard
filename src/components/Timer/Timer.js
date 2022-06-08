import { useState } from "react";
import { TimerContext } from "../../Context/Context";
import Clock from "./Clock/Clock";
import DecreaseTime from "./DecreaseTime/DecreaseTime";
import IncreaseTime from "./IncreaseTime/IncreaseTime";
import "./Timer.css";

const Timer = () => {

  let [seconds, setseconds] = useState(10);
  let [minutes, setminutes] = useState(2);
  const [isRunning, setIsRunning] = useState(false);

  return (
    <TimerContext.Provider value={{seconds, setseconds ,minutes, setminutes, isRunning, setIsRunning}}>
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
