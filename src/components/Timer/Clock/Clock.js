import { useState, useEffect } from "react";

const Clock = () => {
  let [seconds, setseconds] = useState(10);
  let [minutes, setminutes] = useState(2);
  const [isRunning, setIsRunning] = useState(false);

  // minutes does not below 0 if it does minutes gets reset to 0
  if (minutes < 0) {
    setminutes((minutes = 0));
  }
  // if the seconds are less than 10 add a 0 before seconds else display seconds
  seconds = seconds < 10 ? "0" + seconds : seconds;
  // if seconds go above 59 then +1 minute and set seconds as seconds % 10
  if (seconds > "59") {
    setseconds((seconds = seconds % 10));
    setminutes(minutes + 1);
  }
  // if timer is running and seconds go below 0 and minutes are more than 0, set seconds to 59 and -1 from minutes
  if (isRunning && seconds < "00" && minutes !== 0) {
    setseconds((seconds = 59));
    setminutes(minutes - 1);
  }
  // if timer is not running and seconds go below 00 and minutes are above 0 set seconds to 50 and -1 from minutes
  if (isRunning === false && seconds < "00" && minutes !== 0) {
    setseconds((seconds = 50));
    setminutes(minutes - 1);
  }
  // if the timer reaches 0 the timer stops by setting minutes and seconds to 0 and setting isRunning to false
  if (minutes === 0 && seconds < "00") {
    setseconds((seconds = 0));
    setminutes((minutes = 0));
    setIsRunning(false);
  }

  // if timer is running set interval to -1 from seconds every second else clear interval
  useEffect(() => {
    if (isRunning) {
      let id = window.setInterval(() => {
        setseconds((seconds) => seconds - 1);
      }, 1000);
      return () => window.clearInterval(id);
    }
    return undefined;
  }, [isRunning]);

  return (
    <>
      <div>
        <span id="min" className="minutes">
          {minutes}
        </span>
        :
        <span id="sec" className="seconds">
          {seconds}
        </span>
      </div>
      <div className="buttons">
        {isRunning ? (
          <button
            id="start-stop"
            onClick={() => {
              setIsRunning(false);
            }}
          >
            Stop
          </button>
        ) : (
          <button id="start-stop" onClick={() => setIsRunning(true)}>
            Start
          </button>
        )}
        <button
          id="reset-timer"
          onClick={() => {
            setseconds((seconds = 0));
            setminutes((minutes = 0));
            setIsRunning(false);
          }}
        >
          Reset
        </button>
      </div>
    </>
  );
};

export default Clock;
