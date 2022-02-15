import React from "react";
import "./styles.scss";

type Status = "CORRECT" | "EXISTS" | "INCORRECT";

interface IProps {
  letter: string;
  status: Status;
}

const statusColours = new Map<Status, string>([
  ["CORRECT", "green"],
  ["INCORRECT", "transparent"],
  ["EXISTS", "orange"],
]);

const Box = ({ letter, status }: IProps) => {
  return (
    <h3
      className="box"
      style={{
        backgroundColor: statusColours.get(status),
      }}
    >
      {letter}
    </h3>
  );
};

export default Box;
