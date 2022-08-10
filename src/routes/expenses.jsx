import React from  'react'

export default function Expenses(props) {
  return (
    <h1 >
      Expenses
      {props.data.map(point => {
        return (
          <div >{point}</div>
        )
      })}
    </h1>
  )
}