import React from "react";
import "./index.css";
import { useState, useEffect } from "react";
import { jsx } from "react/jsx-runtime";

// {/* <style>
//     body {
//   background-color: black;
// }
// h2 {
//   color: white;
//   text-align: center;
//   margin-top: 20px;
// }
// .rectangle {
//   /* display: flex;
//   align-items: center;
//   justify-content: center; */
//   margin: 20px auto;
//   height: 400px;
//   width: 200px;
//   border: 2px solid black;
//   background-color: rgb(57, 56, 56);
//   border-radius: 10px;
//   box-shadow: 0 0 30px 10px black;
// }

// .circle {
//   width: 100px;
//   height: 100px;
//   /* border: 2px solid black; */
//   border-radius: 50%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   margin: 20px auto;
//   transition: box-shadow 0.3s, border 0.3s;
// }
// .circle.active {
//   box-shadow: 0 0 30px 10px currentLight, 0 0 40px 20px currentLight;

//   transition: box-shadow 0.3s, border 0.3s;
// } */}

// </style>
export function TrafficlightSimulator() {
  const [currentLight, setCurrentLight] = useState("red");

  useEffect(() => {
    const i = setInterval(() => {
      setCurrentLight((p) => {
        if (p === "red") return "green";
        if (p === "green") return "yellow";
        return "red";
      });
    }, 3000);
    return () => clearInterval(i);
  }, [currentLight]);

  return (
    <>
      {" "}
      <h2>Traffic light simulator</h2>
      <div className="rectangle">
        <div
          className={`circle${currentLight === "red" ? " active" : ""}`}
          currentLight="red"
          id="red"
          style={{ backgroundColor: currentLight === "red" ? "red" : "gray" }}
        >
          red1
        </div>
        <div
          className={`circle${currentLight === "green" ? " active" : ""}`}
          currentLight="red"
          id="green"
          style={{
            backgroundColor: currentLight === "green" ? "green" : "gray",
          }}
        >
          green
        </div>
        <div
          className={`circle${currentLight === "yellow" ? " active" : ""}`}
          currentLight="red"
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
