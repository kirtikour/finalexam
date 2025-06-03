import React from "react";
import { useState, useEffect } from "react";
import "./index.css";
export function TrafficlightSimulator() {
  const [currentLight, setCurrentLight] = React.useState("red");
  useEffect(() => {
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
      <div className="rectangle">
        <div
          className={`circle${currentLight === "red" ? " active" : ""}`}
          id="red"
          style={{ backgroundColor: currentLight === "red" ? "red" : "gray" }}
        >
          red
        </div>
        <div
          className={`circle${currentLight === "green" ? " active" : ""}`}
          id="green"
          style={{
            backgroundColor: currentLight === "green" ? "green" : "gray",
          }}
        >
          green
        </div>
        <div
          className={`circle${currentLight === "yellow" ? " active" : ""}`}
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
