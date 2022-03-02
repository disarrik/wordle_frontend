export interface IGuess {
  value: string[];
  correct: number[];
  exists: number[];
}

export interface IBoard {
  guesses: IGuess[];
  currentGuess: number;
  gameStatus: string;
  discoveredLetters: {
    incorrect: string[];
    correct: string[];
    exists: string[];
  };
}
