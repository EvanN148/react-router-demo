import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Posts from './routes/Posts.jsx'
// import Post from './routes/Post'
import Login from './routes/Login.jsx'
// import Expenses from './routes/expenses'
// import Invoices from './routes/invoices'

let posts = [
  {
    id: 1,
    subject: 'test subject 1',
    message: 'test message 1',
    image: 'this isnt actually an image'
  },
  {
    id: 2,
    subject: 'test subject 2',
    message: 'test message 2',
    image: 'this isnt actually an image'
  }
]
let auth = true;
// let post = false;

// function setPost(id) {
//   post = posts[id - 1];
// }

const root = ReactDOM.createRoot(
  document.getElementById("root")
)


root.render(
  <BrowserRouter >
    <Routes >
      <Route path='/' element={<App auth={auth} />} >
        <Route path='/' element={auth ? <Posts posts={posts} /> : <Login />} />
        {/* <Route path={`/posts/${post}`} element={<Post post={post} />} /> */}
      </Route>
    </Routes>
  </BrowserRouter >




  // <BrowserRouter>
  //   <Routes >
  //     <Route path='/' element={<App />} >
  //       <Route path='expenses' element={<Expenses data={data.exp} />} />
  //       <Route path='invoices' element={<Invoices data={data.inv} />} />
  //     </Route>
  //   </Routes>
  // </BrowserRouter>
)