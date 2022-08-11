import { Link, Outlet } from 'react-router-dom'
//Outlet: this defines the area where the "output" of any nested routes (which we defined in index.js) will be displayed. 

export default function App() {
  return (
    <div>
      <h1>Bookkeeper!</h1>
      <nav >
        <Link to="/invoices" >Invoices</Link>
        <Link to="/expenses" >Expenses</Link>
      </nav>
      <Outlet />
    </div>
  );
}

//testing commit stats