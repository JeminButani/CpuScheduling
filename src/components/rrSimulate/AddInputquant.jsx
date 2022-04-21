import React, { useState } from "react";

const AddInputquant = ({ AddInputquant }) => {
  const [timequantum, setTimequantum] = useState("");
  const submit = (e) => {
    e.preventDefault();
    if (!timequantum) {
      alert("Time Quantum value must be filled!");
    } else {
      AddInputquant(timequantum);
      setTimequantum("");
      //   setPrio("");
    }
  };
  return (
    <div className="container my-3">
      {" "}
      <form onSubmit={submit}>
        <div className="mb-3">
          <label
            htmlFor="Arrival Time"
            className="form-label"
            style={{ fontSize: "150%" }}
          >
            Time Quantum
          </label>
          <input
            type="number"
            min="1"
            step="1"
            value={timequantum}
            onChange={(e) => {
              setTimequantum(e.target.value);
            }}
            className="form-control"
            id="qt"
          ></input>
        </div>

        <button
          type="submit"
          className="btn-sm btn-success "
          style={{ fontSize: "150%" }}
        >
          Add Value
        </button>
      </form>
    </div>
  );
};

export default AddInputquant;
