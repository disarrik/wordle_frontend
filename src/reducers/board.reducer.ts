import { IBoard } from "../types/board";

interface IAction {
  type: string;
  payload?: any;
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
    case "UPDATE_GUESS":
      return {
        ...state,
        guesses: state.guesses.map((guess, i) =>
          i === state.currentGuess ? { ...guess, ...action.payload } : guess
        ),
      };
    case "INCREMENT_CURRENT_GUESS":
      return {
        ...state,
        currentGuess: state.currentGuess + 1,
      };
    case "SET_GAME_OVER":
      return {
        ...state,
        gameStatus: action.payload,
      };
    default:
      throw new Error(`${action.type} action type does not exist.`);
  }
}
