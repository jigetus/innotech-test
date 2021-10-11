import React from "react";
import { useState } from "react";
const Pagination = (props) => {
  return (
    <div>
      <h2
        onClick={() => {
          props.handleOffset("backward");
        }}
      >
        Prev
      </h2>
      <h2
        onClick={() => {
          props.handleOffset("forward");
        }}
      >
        Next
      </h2>
      <select
        defaultValue={props.amount}
        onChange={(ev) => props.handleAmount(ev.target.value)}
      >
        <option value={10}>10</option>
        <option value={20}>20</option>
        <option value={30}>30</option>
        <option value={40}>40</option>
      </select>
    </div>
  );
};
export default Pagination;
