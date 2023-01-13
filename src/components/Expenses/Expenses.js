import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import ExpenseChart from "./ExpensesChart";

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("");
  const filteredData = props.expenses.filter(
    (expense) => expense.date.getFullYear().toString() === selectedYear
  );
  const expenseFilterChanged = (year) => {
    setSelectedYear(year);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={selectedYear}
          onExpenseFilterChange={expenseFilterChanged}
        />
        <ExpenseChart expenses={filteredData} />
        <ExpensesList items={filteredData} />
      </Card>
    </div>
  );
};

export default Expenses;
