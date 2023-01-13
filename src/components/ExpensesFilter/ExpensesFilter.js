import React from "react";

import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  const dateChangeHandler = (event) => {
    props.onExpenseFilterChange(event.target.value);
  };

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
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Избери град</label>
        <select value={props.select} onChange={dateChangeHandler}>
          {citiez.map((c) => (
            <option value="c">{c}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
