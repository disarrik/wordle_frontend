import * as React from "react";
import "./styles.css";

type Status = "CORRECT" | "EXISTS" | "INCORRECT";

interface IProps {
  letter: string;
  status: Status;
}

const Box = ({ letter, status }: IProps) => {
  return <h3 className="box">{letter}</h3>;
};

export default Box;
