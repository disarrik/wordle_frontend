import * as React from "react";
import { IBoard } from "../../types/board";
import "./styles.scss";

interface IProps {
  board: IBoard;
}

const Keyboard = ({ board: { discoveredLetters } }: IProps) => {
  const keyboardLetters = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    ["Z", "X", "C", "V", "B", "N", "M"],
  ];

  const renderKeyboardRow = (row: string[]) => {
    return (
      <div className="keyboard-row">
        {row.map((letter) => (
          <kbd
            className={`keyboard-key${
              discoveredLetters.correct.includes(letter.toLowerCase())
                ? "--correct"
                : discoveredLetters.exists.includes(letter.toLowerCase())
                ? "--exists"
                : discoveredLetters.incorrect.includes(letter.toLowerCase())
                ? "--incorrect"
                : ""
            }`}
          >
            {letter}
          </kbd>
        ))}
      </div>
    );
  };

  return (
    <div className="keyboard">
      {keyboardLetters.map((row) => renderKeyboardRow(row))}
    </div>
  );
};

export default Keyboard;
