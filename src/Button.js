import React from "react";

const Button = (props) => {
  const handleOnClick = () => console.log("Button pressed.");
  return <button onClick={handleOnClick}>Change parent state</button>;
};

export default Button;
