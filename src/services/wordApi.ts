import axios from "axios";

import { IGuess } from "../types/board";

interface IWordApi {
  gameStatus: string;
  guessIsCorrect: boolean;
  guesses: IGuess[];
  lives: number;
}

export const postGuess = async (guess: string): Promise<IWordApi> => {
  console.log(`Submitting guess: ${guess}`);

  try {
    const res = await axios.post("/api/submitGuess", {
      guess,
    });
    return toInterface(res.data);
  } catch (e) {
    console.log(e);
  }
};

const toInterface = (obj: any): IWordApi => {
  return {
    gameStatus: obj["game-status"],
    guessIsCorrect: obj["guess-is-correct"],
    lives: obj["lives"],
    guesses: obj["guesses"].map((guess: any) => ({
      value: guess["guess"].split(""),
      correct: guess["correct"],
      exists: guess["exists"],
    })),
  };
};
