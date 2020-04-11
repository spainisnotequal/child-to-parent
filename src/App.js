import React, { useState } from "react";
import Button from "./Button";
import List from "./List";

function App() {
  const [words, setWords] = useState(["uno", "dos", "tres"]);
  return (
    <div className="App">
      <h2>Hello, World!</h2>
      <Button />
      <List words={words} />
    </div>
  );
}

export default App;
