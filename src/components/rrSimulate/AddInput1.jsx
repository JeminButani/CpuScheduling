import React, { useState } from "react";

const AddInput1 = ({ addInput }) => {
  const [arrT, setArrT] = useState("");
  const [burT, setBurT] = useState("");
//   const [prio, setPrio] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!arrT || !burT) {
      alert("Arrival Time or Burst Time cannot be empty!");
    } else {
      addInput(arrT, burT);
      setArrT("");
      setBurT("");
    //   setPrio("");
    }
  };
  return (
    <div className="container my-3">
      <h3
        className="text-center"
        style={{ marginBottom: "10px", fontSize: "200%" }}
      >
        Add Process Data
      </h3>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label
            htmlFor="Arrival Time"
            className="form-label"
            style={{ fontSize: "150%" }}
          >
            Arrival Time
          </label>
          <input
            type="number"
            min="0"
            step="1"
            value={arrT}
            onChange={(e) => {
              setArrT(e.target.value);
            }}
            className="form-control"
            id="arrT"
          ></input>
        </div>
        <div className="mb-3">
          <label
            htmlFor="Burst Time"
            className="form-label"
            style={{ fontSize: "150%" }}
          >
            Burst Time
          </label>
          <input
            type="number"
            min="1"
            step="1"
            value={burT}
            onChange={(e) => {
              setBurT(e.target.value);
            }}
            className="form-control"
            id="desc"
          ></input>
        </div>
        {/* <div className="mb-3">
          <label
            htmlFor="Priority"
            className="form-label"
            style={{ fontSize: "150%" }}
          >
            Priority
          </label>
          <input
            type="number"
            min="1"
            step="1"
            value={prio}
            onChange={(e) => {
              setPrio(e.target.value);
            }}
            className="form-control"
            id="desc"
          ></input>
        </div> */}

        <button
          type="submit"
          className="btn-sm btn-success "
          style={{ fontSize: "150%" }}
        >
          Add Value
        </button>
      </form>
      <button
        style={{ fontSize: "150%", marginTop: "2%" }}
        className="btn-sm btn-danger"
        onClick={() => window.location.reload(true)}
      >
        Reset
      </button>
    </div>
  );
};

export default AddInput1;