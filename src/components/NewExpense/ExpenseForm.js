import React, { useState } from "react";
import ExpenseFormButtons from "./ExpenseFormButtons";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmout, setEnteredAmout] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHadler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const amoutChangeHadler = (event) => {
    setEnteredAmout(event.target.value);
  };
  const dateChangeHadler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmout,
      date: new Date(enteredDate),
    };
    setEnteredTitle("");
    setEnteredAmout("");
    setEnteredDate("");
    props.onSaveExpenseData(expenseData);
  };

  const [isFormClosed, setIsFormClosed] = useState(true);

  return (
    <form onSubmit={submitHandler}>
      {!isFormClosed && (
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              type="text"
              value={enteredTitle}
              onChange={titleChangeHadler}
            />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              value={enteredAmout}
              onChange={amoutChangeHadler}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              min="2019-01-01"
              max="2022-12-31"
              value={enteredDate}
              onChange={dateChangeHadler}
            />
          </div>
        </div>
      )}
      <ExpenseFormButtons
        setIsFormClosed={setIsFormClosed}
        isFormClosed={isFormClosed}
      />
    </form>
  );
};

export default ExpenseForm;
