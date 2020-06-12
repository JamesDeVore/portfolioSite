import React, { useState } from "react";

export default function TimeSelector({ timeFrame, setTimeFrame }) {
  let options = ["Past Day", "Past Week", "All Time"];
  return (
    <div class="form-group">
      {/* <label for="exampleSelect1"></label> */}
      <select
        onChange={(e) => {
          console.log(e.target.value);
          setTimeFrame(e.target.value);
        }}
        className="form-control"
        id="exampleSelect1"
      >
        {options.map((element, index) => (
          <option selected={timeFrame === index} value={index}>
            {element}
          </option>
        ))}
      </select>
    </div>
  );
}
