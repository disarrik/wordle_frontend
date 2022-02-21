export interface IGuess {
  value: string[];
  correct?: number[];
  exists?: number[];
  submitted?: boolean;
}

export interface IBoard {
  guesses: IGuess[];
  currentGuess: number;
}
