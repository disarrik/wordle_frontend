import React, { useEffect } from "react";
import "./styles.scss";

import Board from "../board";
import Keyboard from "../keyboard";

import { useBoard } from "../../hooks/useBoard";

const Body = () => {
  const { board, submitGuess, updateGuess, addLetter } = useBoard();

  useEffect(() => {
    if (board.gameStatus === "WON") {
      alert("Congratulations! You won!");
    } else if (board.gameStatus === "LOST") {
      alert("Sorry, you lost. Out of lives...");
    }
  }, [board.gameStatus]);

  return (
    <div className="body">
      <Board
        board={board}
        updateGuess={updateGuess}
        submitGuess={submitGuess}
      />
      {board.gameStatus == "PLAYING" && (
        <button type="submit" onClick={() => submitGuess()}>
          Submit Guess
        </button>
      )}
      <Keyboard board={board} addLetter={addLetter}/>
    </div>
  );
};

export default Body;
