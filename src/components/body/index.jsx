import React from "react";
import "./styles.css";

import Board from "../board";
import Keyboard from "../keyboard";

const Body = () => {
  return (
    <div className="body">
      <Board />
      <Keyboard />
    </div>
  );
};

export default Body;
