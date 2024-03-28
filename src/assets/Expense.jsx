import React from 'react'
import { BudgetContext } from '../App'
import { useContext } from 'react'

const Expense = () => {

  const { state } = useContext(BudgetContext)

  return (
    <div className='expense'>
    <h1>Expenses</h1>
      {
        state.length === 0 ? "Add Data..." :
          state.map((e) => {
            return (
              <>
                <div style={{display : "flex",gap : "2rem"}}>
                  <p>{e.item}</p>
                  <p>{e.cost}</p>
                </div>
              </>
            )
          })}

    </div>
  )
}

export default Expense
