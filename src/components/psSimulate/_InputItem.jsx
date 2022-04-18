import React from "react";

const _InputItem = ({ input, onDelete }) => {
  return (
    <div>
      <table class="table-dark table-striped table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">Process ID</th>
            <th scope="col">Arrival Time</th>
            <th scope="col">Burst Time</th>
            <th scope="col">Prioriry</th>

            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{input.sno}</td>
            <td>{input.arrT}</td>
            <td>{input.burT}</td>
            <td>{input.prio}</td>
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
    </div>
  );
};

export default _InputItem;
