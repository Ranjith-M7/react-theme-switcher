import React, { useState } from "react";
import "./style.css";

function Main() {
  const [backgroundColor, setBackgroundColor] = useState("white");
  const [textColor, setTextColor] = useState("black");

  function handleClick() {
    setBackgroundColor(backgroundColor === "white" ? "black" : "white");
    setTextColor(textColor === "black" ? "white" : "black");
  }

  return (
    <>
      <section
        style={{
          backgroundColor: backgroundColor,
          color: textColor,
        }}
      >
        <div className="container">
          <button
            style={{ color: textColor, border: `2px solid ${textColor}` }}
            onClick={handleClick}
          >
            {backgroundColor === "white" ? "White Theme" : "Black Theme"}
          </button>

          <h1 className="title">Optimus Prime {`>`} Quotes</h1>
          <div className="content">
            <h1>
              “In any war, there are calms between storms. There will be days
              when we lose faith. Days when our allies turn against us...but the
              day will never come that we forsake this planet and its people.” ―
              Optimus Prime
            </h1>
            <h1>
              “Freedom is the right of all sentient beings.” ― Optimus Prime
            </h1>
            <h1>"We must have courage. We can't ignore the danger. We must conquer it.” ― Optimus Prime</h1>
            <h1>
              “There's a thine line between being a hero and being a memory.” ―
              Optimus Prime
            </h1>
            <h1>"I am Optimus Prime, leader of the autobots.” ―
            Optimus Prime</h1>
          </div>
        </div>
      </section>
    </>
  );
}

export default Main;
