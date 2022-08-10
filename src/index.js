import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Expenses from './routes/expenses'
import Invoices from './routes/invoices'

const data = {
  exp: ['expense data here'],
  inv: ['invoice data here']
}

const root = ReactDOM.createRoot(
  document.getElementById("root")
)

root.render(
  <BrowserRouter>
    <App />
    <Routes >
      <Route path='/' element={<App />} />
      <Route path='expenses' element={<Expenses data={data.exp} />} />
      <Route path='invoices' element={<Invoices data={data.inv} />} />
    </Routes>
  </BrowserRouter>
)