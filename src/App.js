import React, { useState } from "react";
import Button from "./Button";
import List from "./List";

function App() {
  const [words, setWords] = useState(["one", "two", "three"]);
  function handleChange(newWords) {
    setWords(newWords);
  }
  return (
    <div className="App">
      <h2>Hello, World!</h2>
      <Button words={words} onClick={handleChange} />
      <List words={words} />
    </div>
  );
}

export default App;
