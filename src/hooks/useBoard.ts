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

  const updateGuess = (newGuess: string) => {
    if (!validGuess(newGuess)) {
      return;
    }

    const guessArr = newGuess.split("");
    for (let i = guessArr.length; i < WORD_LENGTH; i++) {
      guessArr.push("");
    }

    boardDispatch({ type: "UPDATE_GUESS", payload: { value: guessArr } });
  };

  const submitGuess = async (guess: string) => {
    if (!validGuess(guess)) {
      return;
    }

    const res = await postGuess(guess);
    boardDispatch({
      type: "UPDATE_GUESS",
      payload: res.guesses.slice(-1)[0],
    });
    boardDispatch({ type: "INCREMENT_CURRENT_GUESS" });
  };

  const validGuess = (guess: string) => {
    return guess.length <= WORD_LENGTH && !guess.includes(" ");
  };

  return {
    board,
    updateGuess,
    submitGuess,
  } as const;
};
