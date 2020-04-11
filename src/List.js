import React from "react";

const List = (props) => {
  const listOfWords = props.words.map((word) => <li key={word}>{word}</li>);
  return <ul>{listOfWords}</ul>;
};

export default List;
