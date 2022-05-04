import { IBoard, IGuess } from "../types/board";
import {
  UPDATE_CURRENT_GUESS,
  UPDATE_BOARD,
  SUBMIT_GUESS,
  ADD_LETTER
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
  discoveredLetters: {
    correct: [],
    incorrect: [],
    exists: [],
  },
};

export function reducer(state: IBoard, action: IAction): IBoard {
  switch (action.type) {
    case ADD_LETTER:
      const currentGuess = state.guesses[state.currentGuess].value;
      let index = 0;
      while (currentGuess[index] !== "" && index != 5) {
        index++;
      }
      if (index < 5) {
        state.guesses[state.currentGuess].value[index] = action.payload.toLowerCase();
      }
      return {
        ...state
      }
    case UPDATE_BOARD:
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
        discoveredLetters: action.payload.discoveredLetters,
      };
    case UPDATE_CURRENT_GUESS:
      return {
        ...state,
        guesses: state.guesses.map((guess, i) =>
          i === state.currentGuess ? { ...guess, ...action.payload } : guess
        ),
      };
    default:
      throw new Error(`${action.type} action type does not exist.`);
  }
}
