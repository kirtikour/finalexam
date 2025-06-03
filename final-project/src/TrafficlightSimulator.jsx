import React from "react";
import "./index.css";
export function TrafficlightSimulator() {
  const [currentLight, setCurrentLight] = React.useState("red");
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLight((prev) => {
        if (prev === "red") return "green";
        if (prev === "green") return "yellow";
        return "red";
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="recatangle">
        <div className="circle" id="red">
          red
        </div>
        <div className="circle" id="green">
          green
        </div>
        <div className="circle" id="yellow">
          yellow
        </div>
      </div>
    </>
  );
}
