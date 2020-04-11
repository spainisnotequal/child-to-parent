import React from "react";

const Button = (props) => {
  function handleChange(event) {
    // values to update the "words" state of the parent
    const newWords = [...props.words, "four", "five"];
    // call the parent's call-back function
    props.onClick(newWords);
  }
  return (
    <button words={props.words} onClick={handleChange}>
      Change parent state
    </button>
  );
};

export default Button;
