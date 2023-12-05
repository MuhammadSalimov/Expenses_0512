import React from 'react'
import "./ExpensFilter.css"
const ExpensFilter = (props) => {
    const getYil  =(e)=> {
        props.Change(+e.target.value)
    }
  return (
    <div className='expenses-filter'>
        <div className='expenses-filter__control'>
            <label htmlFor='filter'> Filter </label>
            <select onChange={getYil} id='filter'>
                <option value={2019}>2019</option>
                <option value={2020}>2020</option>
                <option value={2021}>2021</option>
                <option value={2022}>2022</option>
                <option value={2023}>2023</option>
            </select>
        </div>
    </div>
  )
}

export default ExpensFilter