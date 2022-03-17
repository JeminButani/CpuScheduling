import React from "react";
import InputItem from "./InputItem";

const Input = ({ inputs, onDelete }) => {
  return (
    <div className="container">
      {inputs.length === 0
        ? "Please Enter Data"
        : inputs.map((input) => {
            return (
              <InputItem input={input} key={input.sno} onDelete={onDelete} />
            );
          })}
    </div>
  );
};

export default Input;
