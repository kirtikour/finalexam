import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { TrafficlightSimulator } from "./TrafficlightSimulator";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <TrafficlightSimulator />
    </>
  );
}

export default App;
