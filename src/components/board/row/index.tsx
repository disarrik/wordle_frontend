import React, { useState } from "react";
import "./styles.scss";

import Box from "./box";

const Row = () => {
  const [guess, setGuess] = useState(["", "", "", "", ""]);

  const updateGuess = (newGuess: string) => {
    if (newGuess.length > 5) {
      return;
    }

    const guessArr = newGuess.split("");
    setGuess(guessArr);
  };

  return (
    <div className="row">
      <input
        type="text"
        maxLength={5}
        spellCheck="false"
        onChange={(e) => updateGuess(e.target.value)}
      />
      {guess.map((letter) => (
        <Box letter={letter} status="CORRECT" />
      ))}
    </div>
  );
};

export default Row;
