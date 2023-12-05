import React from 'react'
import "./ExpenseDate.css"
const ExpenseDate = (props) => {
    const Time = props.Vaqt1
    const Yil = Time.getFullYear()
    const Kun = Time.getDate()
    const Month = Time.toLocaleString('en-US',{month:'long'})
  return (
    <div className='expense-date'>
        <div className='expense-date__month' >{Month}</div>
                <div className='expense-date__year'>{Yil}</div>
                <div className='expense-date__day'>{Kun}</div>
    </div>
  )
}

export default ExpenseDate