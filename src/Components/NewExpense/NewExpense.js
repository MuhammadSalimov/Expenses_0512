import React, { useState } from 'react'
import "./NewExpense.css"
import ExpenseForm from './ExpenseForm'
const NewExpense = (props) => {

    const GetArray = (item)=>{
        props.Afrosiyob(item)
    }
    
    const [shown , setShown] = useState(false)

    const showForm = ()=>{
        setShown(!shown)
    }

  return (
    <div className='new-expense'>
        {
            shown? <ExpenseForm ShowFFF={showForm}  Poyezd={GetArray} /> :<button onClick={showForm}>Add Expense</button>
        }
    </div>
  )
}

export default NewExpense