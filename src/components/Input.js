import React from "react";

const Input = ({ setsuggestions, changehandler, text }) => {
  return (
    <input
      onChange={(e) => changehandler(e.target.value)}
      value={text}
      type="text"
      className="col-md-12 input"
      style={{ marginTop: 10 }}
      onBlur={() => {
        setTimeout(() => {
          setsuggestions([]);
        }, 1000);
      }}
      placeholder="type something here and we will perform an auto suggestion from our list"
    />
  );
};

export default Input;
