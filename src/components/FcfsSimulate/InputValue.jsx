import React from "react";
import InputItem from "./InputItem";

const Input = ({ inputs, onDelete }) => {
  return (
    <div className="container">
      <h3
        className="mb-20 text-center"
        style={{ marginBottom: "10px", fontSize: "200%" }}
      >
        FCFS Simulate input Table
      </h3>

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
