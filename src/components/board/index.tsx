import * as React from "react";
import "./styles.scss";

import Row from "./row";

import { useBoard } from "../../hooks/useBoard";

const Board = () => {
  const { board, updateGuess } = useBoard();

  return (
    <div className="board">
      {board.guesses.map((guess) => (
        <Row guess={guess} updateGuess={updateGuess} isActive={true} />
      ))}
    </div>
  );
};

export default Board;
