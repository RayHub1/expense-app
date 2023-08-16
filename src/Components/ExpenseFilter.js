import React from "react";

function ExpenseFilter(props) {
  const selectDropdownHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };
  return (
    <div>
      <div>
        <label className="text-white capitalize">Filter by year</label>
        <select
          className="float-right h-8 w-20 text-md"
          value={props.defaultYear}
          onChange={selectDropdownHandler}
        >
          <option value="2025">2025</option>
          <option value="2024">2024</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
        </select>
      </div>
    </div>
  );
}

export default ExpenseFilter;
