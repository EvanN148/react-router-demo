import { Link } from 'react-router-dom'

import { getInvoices }from '../data'

export default function Invoices() {
  let invoices = getInvoices()
  return (
    <h1 >
      Invoices
      {invoices.map(invoice => {
        return (
          <Link 
            to={`/invoices/${invoice.number}`}
            key={invoice.number}
          >
            {invoice.name}
          </Link>
        )
      })}
    </h1>
  )
}