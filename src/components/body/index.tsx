import React, { useReducer } from "react";
import "./styles.scss";

import Board from "../board";
import Keyboard from "../keyboard";

import { useBoard } from "../../hooks/useBoard";

const Body = () => {
  const { board, submitGuess, updateGuess } = useBoard();

  return (
    <div className="body">
      <Board board={board} updateGuess={updateGuess} />
      {board.gameStatus == "PLAYING" && (
        <button type="submit" onClick={() => submitGuess()}>
          Submit Guess
        </button>
      )}
      <Keyboard />
    </div>
  );
};

export default Body;
