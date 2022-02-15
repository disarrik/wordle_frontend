import React from "react";
import "./styles.scss";

type Status = "CORRECT" | "EXISTS" | "INCORRECT";

interface IProps {
  letter: string;
  status: Status;
}

const Box = ({ letter, status }: IProps) => {
  return <h3 className={`box--${status.toLowerCase()}`}>{letter}</h3>;
};

export default Box;
