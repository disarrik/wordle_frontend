import { IBoard } from "../types/board";
import {
  UPDATE_CURRENT_GUESS,
  SET_CURRENT_GUESS_COUNTER,
  SET_GAME_OVER,
  INITIALISE_BOARD,
} from "./board.actions";

interface IAction {
  type: string;
  payload: any;
}

export const initialState: IBoard = {
  guesses: [
    { value: ["", "", "", "", ""], correct: [], exists: [] },
    { value: ["", "", "", "", ""], correct: [], exists: [] },
    { value: ["", "", "", "", ""], correct: [], exists: [] },
    { value: ["", "", "", "", ""], correct: [], exists: [] },
    { value: ["", "", "", "", ""], correct: [], exists: [] },
  ],
  currentGuess: 0,
  gameStatus: "PLAYING",
};

export function reducer(state: IBoard, action: IAction): IBoard {
  switch (action.type) {
    case INITIALISE_BOARD:
      const newGuesses = action.payload.guesses;
      for (let i = newGuesses.length; i < 5; i++) {
        newGuesses.push({
          value: ["", "", "", "", ""],
          correct: [],
          exists: [],
        });
      }

      return {
        ...state,
        gameStatus: action.payload.gameStatus,
        currentGuess: 5 - action.payload.lives,
        guesses: newGuesses,
      };
    case UPDATE_CURRENT_GUESS:
      return {
        ...state,
        guesses: state.guesses.map((guess, i) =>
          i === state.currentGuess ? { ...guess, ...action.payload } : guess
        ),
      };
    case SET_CURRENT_GUESS_COUNTER:
      return {
        ...state,
        currentGuess: action.payload,
      };
    case SET_GAME_OVER:
      return {
        ...state,
        gameStatus: action.payload,
      };
    default:
      throw new Error(`${action.type} action type does not exist.`);
  }
}
