import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";

function NewExpenses(props) {
  const [displayForm, setDisplayForm] = useState(false);
  const displayButtonHandler = () => {
    setDisplayForm(true);
  };
  const removeFormHandler = () => {
    setDisplayForm(false);
  };
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    setDisplayForm(false);
    props.expenseFormData(expenseData);
  };
  return (
    <div className="lg:w-1/2 w-80  bg-blue-500 rounded flex items-center justify-center mt-20">
      {!displayForm && (
        <button
          onClick={displayButtonHandler}
          className="bg-purple-800  my-5 lg:mx-64 text-sm text-white  rounded p-3"
        >
          Add New Expenses
        </button>
      )}
      {displayForm && (
        <ExpenseForm
          onCancel={removeFormHandler}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      )}
    </div>
  );
}

export default NewExpenses;
