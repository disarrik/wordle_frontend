import React from "react";
import "./styles.scss";

import Box from "./box";

import { IGuess } from "../../../types/board";

interface IProps {
  guess: IGuess;
  updateGuess: (newGuess: string[]) => void;
  isActive: boolean;
}

const Row = ({ guess, updateGuess, isActive }: IProps) => {
  return (
    <div className="row">
      {isActive && (
        <input
          type="text"
          maxLength={5}
          spellCheck="false"
          value={guess.value.join("")}
          onChange={(e) => updateGuess(e.target.value.split(""))}
        />
      )}
      {guess.value.map((letter, i) => (
        <Box
          key={i}
          letter={letter}
          status={
            guess.correct.includes(i)
              ? "CORRECT"
              : guess.exists.includes(i)
              ? "EXISTS"
              : "INCORRECT"
          }
        />
      ))}
    </div>
  );
};

export default Row;
