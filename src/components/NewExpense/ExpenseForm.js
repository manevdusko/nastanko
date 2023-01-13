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
  const citiez = [
    "Берово",
    "Битола",
    "Богданци",
    "Валандово",
    "Велес",
    "Виница",
    "Гевгелија",
    "Гостивар",
    "Дебар",
    "Делчево",
    "Демир Капија",
    "Демир Хисар",
    "Кавадарци",
    "Кичево",
    "Кочани",
    "Кратово",
    "Крива Паланка",
    "Крушево",
    "Куманово",
    "Македонска Каменица",
    "Македонски Брод",
    "Неготино",
    "Охрид",
    "Пехчево",
    "Прилеп",
    "Пробиштип",
    "Радовиш",
    "Ресен",
    "Свети Николе",
    "Скопје",
    "Струга",
    "Струмица",
    "Тетово",
    "Штип",
  ];
  return (
    <form onSubmit={submitHandler}>
      {!isFormClosed && (
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Наслов</label>
            <input
              type="text"
              value={enteredTitle}
              onChange={titleChangeHadler}
            />
          </div>
          <div className="new-expense__control">
            <label>Град</label>
            <select value={props.select} onChange={amoutChangeHadler}>
              {citiez.map((c) => (
                <option value="c">{c}</option>
              ))}
            </select>
          </div>
          <div className="new-expense__control">
            <label>Датум</label>
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
