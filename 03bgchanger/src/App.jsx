import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive");
  return (
    <div className="outerDiv" style={{ backgroundColor: color }}>
      <div className="innerDiv">
        <button
          style={{ backgroundColor: "red" }}
          onClick={() => setColor("red")}
        >
          red
        </button>
        <button
          style={{ backgroundColor: "blue" }}
          onClick={() => setColor("blue")}
        >
          blue
        </button>
        <button
          style={{ backgroundColor: "pink" }}
          onClick={() => setColor("pink")}
        >
          pink
        </button>
      </div>
    </div>
  );
}

export default App;
