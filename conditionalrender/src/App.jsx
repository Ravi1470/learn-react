import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [bg, setbg] = useState("white");

  const bdchange = () => {
    bg === "white" ? setbg("black") : setbg("white");
  };
  return (
    <div style={{ backgroundColor: bg, height: "100vh" }}>
      <button onClick={bdchange}> change</button>
    </div>
  );
};

export default App;
