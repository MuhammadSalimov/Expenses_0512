import React, { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const ChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const ChangeAmount = (e) => {
    setAmount(e.target.value);
  };

  const ChangeDate = (e) => {
    setDate(e.target.value);
  };

  const SubmitForm = (e) => {
    e.preventDefault();
 
    if(!(title.trim().length>0 && amount.trim().length>0 && date.trim().length>0)){ 
        return
    }

        const NewArray = {
        name:title ,
        price:amount,
        vaqt: new Date(date)
      }


      props.Poyezd(NewArray)
      setTitle("")
      setAmount("")
      setDate("")
    e.target.reset()
  };

  return (
    <form onSubmit={SubmitForm} className="new-expense__controls">
      <div className="new-expense__control">
        <label htmlFor="title">Title</label>
        <input
          onChange={ChangeTitle}
          type="text"
          placeholder="Title"
          id="title"
        />
      </div>

      <div className="new-expense__control">
        <label htmlFor="amount">Amount</label>
        <input
          onChange={ChangeAmount}
          type="number"
          placeholder="Amount"
          id="amount"
        />
      </div>

      <div className="new-expense__control">
        <label htmlFor="date">Date</label>
        <input onChange={ChangeDate} type="date" placeholder="Date" id="date" />
      </div>

      <div
        style={{ width: "100%", textAlign: "right" }}
        className="new-expense__control"
      >
        <button onClick={props.ShowFFF}>Close</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
