import { useReducer, useEffect } from "react";

import { initialState, reducer } from "../reducers/board.reducer";
import { fetchPlayerData, postGuess } from "../services/wordApi";
import { UPDATE_CURRENT_GUESS, UPDATE_BOARD, ADD_LETTER } from "../reducers/board.actions";

export const useBoard = () => {
  const WORD_LENGTH: number = 5;
  const [board, boardDispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const initialiseBoard = async () => {
      const res = await fetchPlayerData();
      boardDispatch({ type: UPDATE_BOARD, payload: res });
    };

    initialiseBoard();
  }, []);

  const updateGuess = (newGuess: string[]) => {
    if (!validUpdate(newGuess)) {
      return;
    }

    for (let i = newGuess.length; i < WORD_LENGTH; i++) {
      newGuess.push("");
    }

    boardDispatch({
      type: UPDATE_CURRENT_GUESS,
      payload: { value: newGuess },
    });
  };

  const submitGuess = async () => {
    const guess = board.guesses[board.currentGuess].value;

    if (!validSubmission(guess)) {
      return;
    }

    const res = await postGuess(guess.join(""));
    boardDispatch({ type: UPDATE_BOARD, payload: res });
  };

  const addLetter = (char: string) => {
    boardDispatch({ type: ADD_LETTER, payload: char });
  }

  const validUpdate = (guess: string[]) => {
    return guess.length <= WORD_LENGTH && !guess.includes(" ");
  };

  const validSubmission = (guess: string[]) => {
    return (
      guess.length == WORD_LENGTH && !guess.includes(" ") && !guess.includes("")
    );
  };

  return {
    board,
    updateGuess,
    submitGuess,
    addLetter,
  } as const;
};
