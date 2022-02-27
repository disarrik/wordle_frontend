export interface IGuess {
  value: string[];
  correct: number[];
  exists: number[];
}

export interface IBoard {
  guesses: IGuess[];
  currentGuess: number;
  gameStatus: string;
}
