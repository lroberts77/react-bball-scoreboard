import "./DecreaseTime.css";

const DecreaseTime = () => {
  return (
    <div className="dec-time-col">
      {" "}
      <button
        id="timerMinus10s"
        onClick={() => setseconds((seconds) => seconds - 10)}
      >
        -10s
      </button>
      <button
        id="timerMinus1min"
        onClick={() => setminutes((minutes) => minutes - 1)}
      >
        -1 min
      </button>
    </div>
  );
};

export default DecreaseTime;
