import React from  'react'

export default function Invoices(props) {
  return (
    <h1 >
      Invoices
      {props.data.map(point => {
        return (
          <div >{point}</div>
        )
      })}
    </h1>
  )
}