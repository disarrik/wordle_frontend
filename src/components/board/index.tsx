import * as React from "react";
import "./styles.scss";

import Row from "./row";

import { IBoard } from "../../types/board";

interface IProps {
  board: IBoard;
  updateGuess: (s: string[]) => void;
  submitGuess: () => void;
}

const Board = ({
  board: { guesses, currentGuess },
  updateGuess,
  submitGuess,
}: IProps) => {
  return (
    <div className="board">
      {guesses.map((guess, i) => (
        <Row
          key={i}
          guess={guess}
          updateGuess={updateGuess}
          submitGuess={submitGuess}
          isActive={currentGuess == i}
        />
      ))}
    </div>
  );
};

export default Board;
