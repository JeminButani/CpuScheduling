import React from "react";
import _InputItem from "./_InputItem";

const _Input = ({ inputs, onDelete }) => {
  return (
    <div className="container">
      <h3
        className="mb-20 text-center"
        style={{ marginBottom: "20px", fontSize: "200%" }}
      >
        PS Simulate input Table
      </h3>

      {inputs.length === 0
        ? "Please Enter Data"
        : inputs.map((input) => {
            return (
              <_InputItem input={input} key={input.sno} onDelete={onDelete} />
            );
          })}
    </div>
  );
};

export default _Input;
