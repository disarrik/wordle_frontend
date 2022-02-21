import React from "react";
import "./styles.scss";

import Box from "./box";

import { useGuess } from "../../../hooks/useGuess";

const Row = () => {
  const { guess, updateGuess } = useGuess();
  console.log(guess);
  return (
    <div className="row">
      <input
        type="text"
        maxLength={5}
        spellCheck="false"
        value={guess.value.join("")}
        onChange={(e) => updateGuess(e.target.value)}
      />
      {guess.value.map((letter) => (
        <Box letter={letter} status="CORRECT" />
      ))}
    </div>
  );
};

export default Row;
