import * as React from "react";
import "./styles.css";

import Box from "./box";

const Row = () => {
  return (
    <div className="row">
      <input type="text" maxLength={5} spellCheck="false" />
      <Box letter="p" status="CORRECT" />
    </div>
  );
};

export default Row;
