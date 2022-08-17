import React from 'react'
import { Link } from 'react-router-dom'
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
// import getInvoices from '../data'

// let posts = getPosts()

export default function Posts(props) {
  let posts = props.posts
  return (
    <div >
      {posts.map(post => {
        return (
          <div >
            {/* <Link to={`/posts/${post.id}`} key={post.id}>{post.id}</Link> */}
            <p >{post.subject}</p>
            <p >{post.message}</p>
            <p >{post.image}</p>
          </div>
        )
      })}
    </div>
  )
}