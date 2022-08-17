import { Link } from 'react-router-dom'
import getPosts from '../data.js'

const posts = getPosts()

export default function Stream() {
  return (
    <div >
      {posts.map(post => {
        return (
          <div >
            <p >{post.id}</p>
            <p >{post.subject}</p>
            <p >{post.message}</p>
            <p >{post.image}</p>
            <Link  to={`/posts/${posts.id}`} ></Link>
          </div>
        )
      })}
    </div>
  )
}