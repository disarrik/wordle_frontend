import axios from "axios";

import { IGuess } from "../types/board";

interface IWordApi {
  gameStatus: string;
  guessIsCorrect: boolean;
  guesses: IGuess[];
  lives: number;
  discoveredLetters: {
    correct: string[];
    incorrect: string[];
    exists: string[];
  };
}

export const fetchPlayerData = async (): Promise<IWordApi> => {
  console.log("Fetching player stats");

  try {
    const res = await axios.get("/api/getStats");
    return toInterface(res.data);
  } catch (e) {
    console.log(`An error occurred fetching player stats: ${e}`);
  }
};

export const postGuess = async (guess: string): Promise<IWordApi> => {
  console.log(`Submitting guess: ${guess}`);

  try {
    const res = await axios.post("/api/submitGuess", {
      guess,
      //todo user_id, chat_id
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
    discoveredLetters: obj["discovered-letters"],
  };
};
