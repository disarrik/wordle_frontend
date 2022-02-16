import { useState } from "react";

const WORD_LENGTH: number = 5;

export const useGuess = () => {
  const [guess, setGuess] = useState(["", "", "", "", ""]);

  const updateGuess = (newGuess: string) => {
    if (!validGuess(newGuess)) {
      return;
    }

    const guessArr = newGuess.split("");
    for (let i = guessArr.length; i < WORD_LENGTH; i++) {
      guessArr.push("");
    }

    setGuess(guessArr);
  };

  const validGuess = (guess: string) => {
    return guess.length <= WORD_LENGTH && !guess.includes(" ");
  };

  return [guess, updateGuess] as const;
};
