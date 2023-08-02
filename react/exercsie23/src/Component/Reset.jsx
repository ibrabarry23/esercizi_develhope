import React from "react";

const Reset = ({ onReset }) => {
  const handleClick = () => {
    if (typeof onReset === "function") {
      onReset();
    }
  };

  return (
    <button type="button" onClick={handleClick}>
      Reset
    </button>
  );
};

export default Reset;
