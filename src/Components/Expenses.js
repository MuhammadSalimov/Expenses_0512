import React, { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpensFilter from "./ExpensFilter/ExpensFilter";
const Expenses = (props) => {
  const [filter, setFilter] = useState(2021);

  const ChangeYil = (yil) => {
    setFilter(yil);
  };

  const NewFilterdata = props.Mal.filter((item) => {
    return item.vaqt.getFullYear() === filter;
  });

  return (
    <Card className="expenses">
      <ExpensFilter Change={ChangeYil} />

      {NewFilterdata.length === 0 ? (
        <h1 style={{ textAlign: "center", color: "white" }}>
          Malumot Topilmadi
        </h1>
      ) : (
        NewFilterdata.map((item) => {
          return (
            <ExpenseItem
              key={item.name}
              name={item.name}
              price={item.price}
              DATE={item.vaqt}
            />
          );
        })
      )}
    </Card>
  );
};

export default Expenses;
