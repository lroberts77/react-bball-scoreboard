import "./IncreaseTime.css";
import { useContext } from "react";
import { TimerContext } from "../../../Context/Context";

const IncreaseTime = () => {

  let {setseconds, setminutes} = useContext(TimerContext)

  return (
    <div className="inc-time-col">
      <button
        id="timerPlus10s"
        onClick={() => setseconds(seconds => seconds + 10)}
      >
        +10s
      </button>
      <button
        id="timerPlus1min"
        onClick={() => setminutes(minutes => minutes + 1)}
      >
        +1 min
      </button>
    </div>
  );
};

export default IncreaseTime;
