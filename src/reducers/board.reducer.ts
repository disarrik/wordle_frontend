interface IAction {
  type: string;
  payload: IGuess;
}

interface IGuess {
  value: string[];
  correct?: number[];
  exists?: number[];
  submitted?: boolean;
}

interface IBoard {
  guesses: IGuess[];
  currentGuess: number;
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
