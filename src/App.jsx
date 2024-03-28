import { createContext, useState } from 'react'
import DataInput from './assets/DataInput'
import Expense from './assets/Expense'
import Budget from './assets/Budget'
import './App.css'


export const BudgetContext = createContext();

function App() {

  const [state, setState] = useState([])
  const [total, setTotal] = useState(2000)

  return (
    <main>
      <h1>My Budget Planner</h1>
      <BudgetContext.Provider value={{ state, setState, total, setTotal }}>
        <Budget />
        <Expense />
        <DataInput />
      </BudgetContext.Provider>
    </main>
  )
}

export default App
