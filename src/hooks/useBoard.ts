import { useReducer } from "react";

import { initialState, reducer } from "../reducers/board.reducer";

const WORD_LENGTH: number = 5;

// TODO: Consider renaming to useBoard and return the board instead of the current guess.
export const useBoard = () => {
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

  return {
    board,
    updateGuess,
  } as const;
};

const validGuess = (guess: string) => {
  return guess.length <= WORD_LENGTH && !guess.includes(" ");
};
