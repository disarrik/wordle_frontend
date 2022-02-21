import { IGuess, IBoard } from "../types/board";

interface IAction {
  type: string;
  payload: IGuess;
}

export const initialState: IBoard = {
  guesses: [
    { value: ["", "", "", "", ""] },
    { value: ["", "", "", "", ""] },
    { value: ["", "", "", "", ""] },
    { value: ["", "", "", "", ""] },
    { value: ["", "", "", "", ""] },
  ],
  currentGuess: 0,
};

export function reducer(state: IBoard, action: IAction): IBoard {
  switch (action.type) {
    case "UPDATE_GUESS":
      return {
        ...state,
        guesses: state.guesses.map((guess, i) =>
          i === state.currentGuess ? action.payload : guess
        ),
      };
  }
}
