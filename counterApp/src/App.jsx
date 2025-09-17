import React, { useState } from "react";

const App = () => {
  const [data, setData] = useState(0);

  const increment = () => {
    setData(data + 1);
    console.log(data);
  };
  const decrement = () => {
    if (data > 0) {
      setData(data - 1);
      console.log(data);
    }
  };
  const reset = () => {
    setData(0);
  };
  return (
    <div>
      <h1>{data}</h1>
      <button
        className="inc"
        onClick={increment}>
        +1
      </button>
      <button
        className="reset"
        onClick={reset}>
        reset
      </button>
      <button
        className="dec"
        onClick={decrement}>
        -1
      </button>
    </div>
  );
};

export default App;
