import React from "react";

function ExpenseDate(props) {
  const month = props.date.toLocaleString("en-Us", { month: "long" });
  const day = props.date.toLocaleString("en-Us", { day: "2-digit" });
  const year = props.date.getFullYear();
  return (
    <div>
      <div
        className="bg-black text-white flex flex-col items-center rounded px-5 py-2
      
      border-2 border-white lg:ml-8 mr-8 text-sm"
      >
        <div>{month}</div>
        <div>{year}</div>
        <div className="font-bold">{day}</div>
      </div>
    </div>
  );
}

export default ExpenseDate;
