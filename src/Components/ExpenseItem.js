import React from 'react'
import ExpenseDate from './ExpenseDate'
import "./ExpenseItem.css"
const ExpenseItem = (props) => {
  return (
    <div className='expense-item'>
        <div className='expense-item__price'>
            <div className='expense-date' >
              <ExpenseDate Vaqt1={props.DATE} />
            </div>
        </div>
        <div className='expense-item__description'>
                <h2> {props.name} </h2>
                <div className='expense-item__price'>
                    {props.price} $
                </div>
            </div>
    </div>
  )
}

export default ExpenseItem