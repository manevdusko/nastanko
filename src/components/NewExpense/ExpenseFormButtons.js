import "./ExpenseFormButtons.css";
const ExpenseFormButtons = (props) => {
  const openForm = () => props.setIsFormClosed(false);
  const closeForm = () => props.setIsFormClosed(true);

  return props.isFormClosed ? (
    <div className="new-expense__actions_center_container">
      <div className="new-expense__actions">
        <button onClick={openForm}>Add New Expense</button>
      </div>
    </div>
  ) : (
    <div className="new-expense__actions_container">
      <div className="new-expense__actions">
        <button onClick={closeForm}>Cancel</button>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </div>
  );
};

export default ExpenseFormButtons;
