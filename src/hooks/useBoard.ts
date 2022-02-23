import { useReducer } from "react";

import { initialState, reducer } from "../reducers/board.reducer";
import { postGuess } from "../services/wordApi";
import { IGuess } from "../types/board";

/*
 * Responsible for validating board changes before dispatching actions.
 */
export const useBoard = () => {
  const WORD_LENGTH: number = 5;
  const [board, boardDispatch] = useReducer(reducer, initialState);

  const updateGuess = (newGuess: string[]) => {
    if (!validGuess(newGuess)) {
      return;
    }

    for (let i = newGuess.length; i < WORD_LENGTH; i++) {
      newGuess.push("");
    }

    boardDispatch({ type: "UPDATE_GUESS", payload: { value: newGuess } });
  };

  const submitGuess = async () => {
    const guess = board.guesses[board.currentGuess].value;

    if (!validGuess(guess)) {
      return;
    }

    const res = await postGuess(guess.join(""));
    boardDispatch({
      type: "UPDATE_GUESS",
      payload: res.guesses.slice(-1)[0],
    });

    if (res.gameStatus == "PLAYING") {
      boardDispatch({ type: "INCREMENT_CURRENT_GUESS" });
    }

    boardDispatch({ type: "SET_GAME_OVER", payload: res.gameStatus });
  };

  const validGuess = (guess: string[]) => {
    return guess.length <= WORD_LENGTH && !guess.includes(" ");
  };

  return {
    board,
    updateGuess,
    submitGuess,
  } as const;
};
