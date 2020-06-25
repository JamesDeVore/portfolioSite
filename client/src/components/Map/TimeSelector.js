import React, { useState } from "react";

export default function TimeSelector({ timeFrame, setTimeFrame }) {
  let options = ["All Time","Past Week","Past Day"];
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
