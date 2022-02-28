import React from "react";
import "./styles.scss";

import Box from "./box";

import { IGuess } from "../../../types/board";

interface IProps {
  guess: IGuess;
  updateGuess: (newGuess: string[]) => void;
  submitGuess: () => void;
  isActive: boolean;
}

const Row = ({ guess, updateGuess, submitGuess, isActive }: IProps) => {
  return (
    <div className="row">
      {isActive && (
        <input
          type="text"
          autoFocus={true}
          maxLength={5}
          spellCheck="false"
          value={guess.value.join("")}
          onChange={(e) => updateGuess(e.target.value.split(""))}
          onKeyPress={(e) => e.code == "Enter" && submitGuess()}
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
