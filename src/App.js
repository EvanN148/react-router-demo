
import React from 'react'
import { Link, Outlet } from 'react-router-dom'
//Outlet: this defines the area where the "output" of any nested routes (which we defined in index.js) will be displayed.

export default function App(props) {
  return (
    <div>
      {props.auth ? ( <div ><h1 >tinypost</h1><a href="https://tinypost.app" >Logout</a></div> ) : ( <h1 >tinypost</h1> ) }
      <Outlet />
    </div>
  );
}