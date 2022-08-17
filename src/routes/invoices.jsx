import { Link } from 'react-router-dom'

import { getPosts }from '../data'

export default function Posts() {
  let invoices = getPosts()
  return (
    <h1 >
      Invoices
      {invoices.map(invoice => {
        return (
          <Link
            to={`/invoices/${invoice.id}`}
            key={invoice.number}
          >
            {invoice.name}
          </Link>
        )
      })}
    </h1>
  )
}