import { useState } from "react";
import "./App.css";
import Card from "./components/Card.jsx";

function App() {
  const [count, setCount] = useState(0);
  /* One */
  // const myObj = {
  //   id: 1,
  //   name: "nitin",
  // };

  return (
    <>
      <h1 className="app-heading">Tailwind Test</h1>
      {/* One  */}
      {/* <Card name="nitin" channel={myObj} /> */}
      {/* Two */}
      {/* <Card username="Nitin" /> */}

      {/* three */}
      {/* <Card username="nitin" price={999} /> */}
      {/* <Card username="nitin" price={999} /> */}

      {/* four */}

      {/* <Card username="nitin" /> */}
      {/* <Card username="nitin" /> */}
    </>
  );
}

export default App;
