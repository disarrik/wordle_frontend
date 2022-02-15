import * as React from "react";
import "./styles.scss";

// Components
import Header from "./header";
import Body from "./body";

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Body />
    </React.Fragment>
  );
};

export default App;
