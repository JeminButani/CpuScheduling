import React from "react";
import InputItem1 from "./InputItem1";

const Input1 = ({ inputs, onDelete }) => {
  return (
    <div className="container">
      <h3
        className="mb-20 text-center"
        style={{ marginBottom: "20px", fontSize: "200%" }}
      >
        RR Simulate input Table
      </h3>

      {inputs.length === 0
        ? "Please Enter Data"
        : inputs.map((input) => {
            return (
              <InputItem1 input={input} key={input.sno} onDelete={onDelete} />
            );
          })}
    </div>
  );
};

export default Input1;
