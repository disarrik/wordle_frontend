import * as React from "react";
import "./styles.scss";

import Row from "./row";

import { useBoard } from "../../hooks/useBoard";

const Board = () => {
  const { board, updateGuess } = useBoard();

  return (
    <div className="board">
      {board.guesses.map((guess, i) => (
        <Row
          guess={guess}
          updateGuess={updateGuess}
          isActive={board.currentGuess == i}
        />
      ))}
    </div>
  );
};

export default Board;
