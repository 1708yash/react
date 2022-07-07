import React from 'react'
import Storyreel from './Storyreel'
import './Css/Feed.css'
import Messagesender from './Messagesender'
import Post from './Post'
function Feed() {
  return (
    <div className='feed'>
    <Storyreel/>
    <Messagesender/> 
    <Post/>    
    </div>
  )
}

export default Feed