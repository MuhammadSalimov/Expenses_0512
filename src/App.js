import React, { useState } from "react";
import Expenses from "./Components/Expenses";
import Card from "./UI/Card";
import NewExpense from "./Components/NewExpense/NewExpense";
import "./App.css"

const ARR = [
  {
    name:"BMW" ,
    price:450000,
    vaqt: new Date("06-08-2022")
  },
  {
    name:"Malibu" ,
    price:30000,
    vaqt: new Date("05-05-2020")
  },
  {
    name:"BYD" ,
    price:500000,
    vaqt: new Date("01-01-2019")
  },
  {
    name:"Ferrari" ,
    price:80000,
    vaqt: new Date("01-04-2021")
  }
]

function App() {

  const [state , setState] = useState(ARR)

  const GetData = (element)=>{ 
    setState((item)=>[
      ...item,
      element
    ])
  }

  return (
    <Card>
      <NewExpense Afrosiyob={GetData} />
      <Expenses Mal={state} />
    </Card>
  );
}

export default App;
