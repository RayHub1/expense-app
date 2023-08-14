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
    <form>
      <div className="grid grid-cols-2 p-5 gap-2" onSubmit={submitHandler}>
        <div className=" flex flex-col">
          <label className="text-2xl font-bold">Title</label>
          <input
            type="text"
            className="lg:h-10 lg:w-60 rounded-sm"
            onChange={titleChangeHandler}
            value={enteredTitle}
          />
        </div>
        <div className=" flex flex-col">
          <label className="text-2xl font-bold">Amount</label>
          <input
            type="number"
            className="lg:h-10 lgw-60 rounded-sm"
            onChange={amountChangeHandler}
            min="0"
            step="0.01"
            value={enteredAmount}
          />
        </div>
        <div className=" flex flex-col">
          <label className="text-2xl font-bold">date</label>
          <input
            type="date"
            min="2019-12-3"
            className="lg:h-10 lg:w-60 rounded-sm"
            onChange={dateChangeHandler}
            value={enteredDate}
          />
        </div>
      </div>
      <div className="flex justify-center items-center space-x-10 my-3	">
        <button
          className="bg-purple-800 lg:h-10 lg:w-1/5 w-28 text-white mt-8 rounded p-1"
          onClick={props.onCancel}
        >
          Cancel
        </button>
        <button
          type="submit"
          className="bg-purple-800 lg:h-10 lg:w-1/5 w-28 text-white mt-8 rounded p-1"
        >
          Add Expense
        </button>
      </div>
    </form>
  );
}

export default ExpenseForm;
