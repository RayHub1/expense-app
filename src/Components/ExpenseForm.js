import React, { useState } from "react";

function ExpenseForm(props) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="flex flex-wrap lg:flex-row flex-col justify-around p-5" >
        <div className=" flex flex-col">
          <label className="lg:text-2xl text-md font-bold">Title</label>
          <input
            type="text"
            className="h-10  lg:w-60 rounded-sm focus:outline-none px-2 py-1"
            onChange={titleChangeHandler}
            value={enteredTitle}
          />
        </div>
        <div className=" flex flex-col">
          <label className="lg:text-2xl text-md font-bold">Amount</label>
          <input
            type="number"
            className="h-10 lg:w-60 rounded-sm focus:outline-none px-2 py-1"
            onChange={amountChangeHandler}
            min="0"
            step="0.01"
            value={enteredAmount}
          />
        </div>
        <div className=" flex flex-col">
          <label className="lg:text-2xl text-md font-bold">Date</label>
          <input
            type="date"
            min="2019-12-3"
            className="h-10 lg:w-60 rounded-sm focus:outline-none px-2 py-1"
            onChange={dateChangeHandler}
            value={enteredDate}
          />
        </div>
        <div className=" flex justify-center items-center	space-x-5">
        <button
          className="bg-purple-800 h-10  w-28 text-white mt-8 rounded p-1"
          onClick={props.onCancel}
        >
          Cancel
        </button>
        <button
          type="submit"
          className="bg-purple-800 h-10 w-28 text-white mt-8 rounded p-1"
        >
          Add Expense
        </button>
      </div>
      </div>
       
    </form>
  );
}

export default ExpenseForm;
