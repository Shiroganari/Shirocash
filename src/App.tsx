import Home from "@/pages/Home";
import Expenses from "@/pages/Expenses";
import ExpensesMonth from "@/pages/ExpensesMonth";
import ExpensesYear from "@/pages/ExpensesYear";
import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/home' element={<Home />} />
      <Route path='/expenses' element={<Expenses />} />
      <Route path='/expenses/month/:id' element={<ExpensesMonth />} />
      <Route path='/expenses/year/:id' element={<ExpensesYear />} />
    </Routes>
  )
}

export default App;
