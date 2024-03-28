import React, { useState } from 'react'
import { BudgetContext } from '../App'
import { useContext } from 'react'


const Budget = () => {

  const { state, total } = useContext(BudgetContext)

  return (
    <div className='budget'>
      <h3>Budget : Rs 2000</h3>
      <h3>Budget Remaining : {state.length === 0 ? 2000 : total
      }</h3>
      <h3>Spent so far : {2000 - total}</h3>
    </div>
  )
}

export default Budget
