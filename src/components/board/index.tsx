import * as React from "react";
import "./styles.scss";

import Row from "./row";

import { IBoard } from "../../types/board";

interface IProps {
  board: IBoard;
  updateGuess: (s: string[]) => void;
}

const Board = ({ board: { guesses, currentGuess }, updateGuess }: IProps) => {
  return (
    <div className="board">
      {guesses.map((guess, i) => (
        <Row
          guess={guess}
          updateGuess={updateGuess}
          isActive={currentGuess == i}
        />
      ))}
    </div>
  );
};

export default Board;
