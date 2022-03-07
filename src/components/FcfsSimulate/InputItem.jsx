import React from "react";

const InputItem = ({ input, onDelete }) => {
  return (
    <div>
      <table class="table-dark table-striped table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">Process ID</th>
            <th scope="col">Arrival Time</th>
            <th scope="col">Burst Time</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{input.sno}</td>
            <td>{input.arrT}</td>
            <td>{input.burT}</td>
            <td>
              <button
                className="btn-sm btn-danger"
                onClick={() => {
                  onDelete(input);
                }}
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      {/* <h4>{input.arrT}</h4>
      <p>{input.burT}</p>
      <button
        className="btn-sm btn-danger"
        onClick={() => {
          onDelete(input);
        }}
      >
        Delete
      </button>
      <hr></hr> */}
    </div>
  );
};

export default InputItem;
