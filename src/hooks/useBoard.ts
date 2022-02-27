import { useReducer, useEffect } from "react";

import { initialState, reducer } from "../reducers/board.reducer";
import { fetchPlayerData, postGuess } from "../services/wordApi";
import {
  UPDATE_CURRENT_GUESS,
  SET_CURRENT_GUESS_COUNTER,
  SET_GAME_OVER,
  INITIALISE_BOARD,
} from "../reducers/board.actions";

export const useBoard = () => {
  const WORD_LENGTH: number = 5;
  const [board, boardDispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const initialiseBoard = async () => {
      const res = await fetchPlayerData();
      boardDispatch({ type: INITIALISE_BOARD, payload: res });
    };

    initialiseBoard();
  }, []);

  const updateGuess = (newGuess: string[]) => {
    if (!validGuess(newGuess)) {
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

    if (!validGuess(guess)) {
      return;
    }

    const res = await postGuess(guess.join(""));
    boardDispatch({
      type: UPDATE_CURRENT_GUESS,
      payload: res.guesses.slice(-1)[0],
    });

    if (res.gameStatus == "PLAYING") {
      boardDispatch({
        type: SET_CURRENT_GUESS_COUNTER,
        payload: 5 - res.lives,
      });
    }

    boardDispatch({ type: SET_GAME_OVER, payload: res.gameStatus });
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
