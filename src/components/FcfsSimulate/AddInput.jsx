import React, { useState } from "react";
import { useMediaQuery } from "@chakra-ui/react";
// import {
//   Box,
//   Heading,
//   Button,
//   SimpleGrid,
//   Text,
//   Input,
//   VStack,
//   HStack,
//   Spacer,
// } from "@chakra-ui/react";

const AddInput = ({ addInput }) => {
  const [isLargerThan1280] = useMediaQuery("(min-width: 900px)");

  const [arrT, setArrT] = useState("");
  const [burT, setBurT] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!arrT || !burT) {
      alert("Arrival Time or Burst Time cannot be empty!");
    } else {
      addInput(arrT, burT);
      setArrT("");
      setBurT("");
    }
  };
  return (
    <div className="container my-3">
      <h3
        className="text-center"
        style={{ marginBottom: "10px", fontSize: "200%" }}
      >
        Add Data
      </h3>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="Arrival Time" className="form-label">
            Arrival Time
          </label>
          <input
            type="number"
            value={arrT}
            onChange={(e) => {
              setArrT(e.target.value);
            }}
            className="form-control"
            id="arrT"
          ></input>
        </div>
        <div className="mb-3">
          <label htmlFor="Burst Time" className="form-label">
            Burst Time
          </label>
          <input
            type="number"
            value={burT}
            onChange={(e) => {
              setBurT(e.target.value);
            }}
            className="form-control"
            id="desc"
          ></input>
        </div>
        <div class="text-center">
          <button type="submit" className="btn-sm btn-success  ">
            Add Vlaue
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddInput;
