import ExpenseForm from "./ExpenseForm";
import { useState } from "react";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [showNewExpenseForm, setShowNewExpenseForm] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: new Date().getTime().toString(),
    };
    console.log(expenseData);
    props.onAddNewExpense(expenseData);
    setShowNewExpenseForm(false);
  };
  const onCancelHandler = () => {
    setShowNewExpenseForm(false);
  };

  if (showNewExpenseForm) {
    return (
      <div className="new-expense">
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={onCancelHandler}
        />
      </div>
    );
  } else {
    return (
      <div className="new-expense">
        <button
          className="new-expense__btn"
          onClick={() => setShowNewExpenseForm(true)}
        >
          {" "}
          Add new Expense{" "}
        </button>
      </div>
    );
  }
};
export default NewExpense;
