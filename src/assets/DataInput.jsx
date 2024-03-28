import React from 'react'
import { BudgetContext } from '../App'
import { useContext } from 'react'

const DataInput = () => {

  const { state, setState, setTotal } = useContext(BudgetContext)

  let item = ""
  let cost;

  function clickhandler() {
    setState([...state, { item, cost }])
    setTotal((prev) => {
      return prev - cost
    })
  }

  return (
    <div className='datainput'>
      <h1>Add Expenses</h1>
      <div className='input'>
        <input onChange={(e) => {
          item = e.target.value
        }} type="text" placeholder='Enter Item' />
        <input
          onChange={(e) => {
            cost = e.target.value
          }} type="number" name="" id="" placeholder='Enter Amount' />
      </div>
      <button onClick={clickhandler}>SAVE</button>
    </div>
  )
}

export default DataInput
