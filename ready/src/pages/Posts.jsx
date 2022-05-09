import React from 'react'
import {posts} from "../Data"
import '../Posts.css'

function Posts() {
    const post=posts[2]
  return (
    <div className='posts'>
        <img src={post.img} alt='' className='postimg'/>
       <h1 className='postitle'>{post.title}</h1>
       <p className='postdesc'>{post.desc}</p>
       <p className='postLongDesc'>{post.longDesc}</p>
    </div>
  )
}

export default Posts