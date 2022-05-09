import React from 'react'
import '../Card.css';
function Card({post}) {
  return (
    <div className='card'>
   <span className='title'>{post.title}</span>
   <img src={post.img} alt='title ' className='img'/>
   <p className='desc'>{post.desc}</p>
   <button className='cardButton'>Read More</button>
    </div>
  )
}

export default Card