import React from 'react'
import './Css/Post.css'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import PublicIcon from '@mui/icons-material/Public';
import { Avatar } from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ShareIcon from '@mui/icons-material/Share';
function Post() {
  return (
    <div className='post'>
      <div className='post__top'>
        <div className='post__topleft'>
          <Avatar />
          <div className='post__info'>
            <h4>Yash Tomar</h4>
            <p>12:21 <PublicIcon/></p>
          </div>
        </div>
        <div className='post__topright'>
          <MoreHorizIcon />
        </div>
      </div>
      <div className='post__middle'>
        <p>thisis messge</p>
        <img src='https://images.unsplash.com/photo-1536152470836-b943b246224c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=60' alt='//' />
      </div>
      <div className='post__bottom'>
        <div className='post__bottomoption'>
          <ThumbUpIcon /><p>Like</p>
          <ChatBubbleOutlineIcon /><p>Comment</p>
          <ShareIcon /><p>Share</p>
        </div>
      </div>
    </div>
  )
}

export default Post