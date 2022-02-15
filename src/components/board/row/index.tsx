import React, { useState } from "react";
import "./styles.scss";

import Box from "./box";

const Row = () => {
  const [guess, setGuess] = useState<string>();

  const updateGuess = (newGuess: string) => {
    if (newGuess.length > 5) {
      return;
    }
    setGuess(newGuess);
  };

  return (
    <div className="row">
      <input
        type="text"
        maxLength={5}
        spellCheck="false"
        onChange={(e) => updateGuess(e.target.value)}
      />
      <Box letter="p" status="CORRECT" />
    </div>
  );
};

export default Row;
