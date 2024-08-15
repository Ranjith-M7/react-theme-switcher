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

          <h1>
            “In any war, there are calms between storms. There will be days when
            we lose faith. Days when our allies turn against us...but the day
            will never come that we forsake this planet and its people.” ―
            Optimus Prime
          </h1>
        </div>
      </section>
    </>
  );
}

export default Main;
