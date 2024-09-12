import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    // <React.Fragment>
    <Typewriter
      options={{
        strings: [
          "Frontend Developer",
          "UI/UX Developer",
          "HTML Developer",
          "Open Source Contributor",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
    // </React.Fragment>
  );
}

export default Type;
