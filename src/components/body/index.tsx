import React, { useReducer } from "react";
import "./styles.scss";

import axios from "axios";

import Board from "../board";
import Keyboard from "../keyboard";

import { initialState, reducer } from "../../reducers/board.reducer";

const Body = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = async (guess: string) => {
    // const res = await axios.post("/api/submitGuess", {
    //   guess,
    // });
    // console.log(res.data);
  };

  return (
    <div className="body">
      <Board />
      <button type="submit" onClick={() => handleSubmit("owlsf")}>
        Submit Guess
      </button>
      <Keyboard />
    </div>
  );
};

export default Body;
