import React from "react";
import ExpenseDate from "./ExpenseDate";

function ExpenseItems(props) {
  return (
    <div className="bg-gray-500 mt-5 p-3 rounded-lg flex justify-between items-center">
      <div className="flex lg:w-1/7 justify-between  items-center text-left">
        <ExpenseDate date={props.date} />
        <div className="mr-10">
          <h1 className=" text-white lg:text-2xl font-bold text-left">
            {props.title}
          </h1>
        </div>
      </div>
      <div className="">
        <div
          className="lg:py-3 lg:px-10 py-1 px-2 bg-purple-800 rounded-lg
           text-white lg:text-lg text-sm font-bold border-2
           border-white"
        >
          ${props.amount}
        </div>
      </div>
    </div>
  );
}

export default ExpenseItems;
