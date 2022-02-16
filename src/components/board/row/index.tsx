import React, { ChangeEvent, useState } from "react";
import "./styles.scss";

import Box from "./box";

import { useGuess } from "../../../hooks/useGuess";

const Row = () => {
  const [guess, setGuess] = useGuess();

  return (
    <div className="row">
      <input
        type="text"
        maxLength={5}
        spellCheck="false"
        value={guess.join("")}
        onChange={(e) => setGuess(e.target.value)}
      />
      {guess.map((letter) => (
        <Box letter={letter} status="CORRECT" />
      ))}
    </div>
  );
};

export default Row;
