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
  }, [currentLight]);

  return (
    <>
      <div className="recatangle">
        <div
          className="circle"
          id="red"
          style={{ backgroundColor: currentLight === "red" ? "red" : "gray" }}
        >
          red
        </div>
        <div
          className="circle"
          id="green"
          style={{
            backgroundColor: currentLight === "green" ? "green" : "gray",
          }}
        >
          green
        </div>
        <div
          className="circle"
          id="yellow"
          style={{
            backgroundColor: currentLight === "yellow" ? "yellow" : "gray",
          }}
        >
          yellow
        </div>
      </div>
    </>
  );
}
