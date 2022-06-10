import React, { useState } from "react";
let styleBlack = {
  backgroundColor: "black",
};
let styleWhite = {
  backgroundColor: "white",
};
function App(props) {
  const [heading, setHeading] = useState("Hello");
  const [mouse, setMouse] = useState();
  function updateOnClick() {
    setHeading("Submitted");
  }
  function updateOnMouseOver(e) {
    setMouse(styleBlack);
  }
  function updateOnMouseOut() {
    setMouse(styleWhite);
  }
  return (
    <div className="container">
      <h1>{heading}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={mouse}
        onClick={updateOnClick}
        onMouseOver={updateOnMouseOver}
        onMouseOut={updateOnMouseOut}
      >
        Submit
      </button>
    </div>
  );
}

export default App;

// This can also be done by just giving boolean value to the heading and applying diffrent function on different state of
//  mouseOver or mouseOut based on that boolean. the function assigned to the mouseover or mouseout can be used to change the boolean value.
// please refer to the react by angeela if needed video 425 time 10:00 min.
