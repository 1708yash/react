import { Avatar } from '@mui/material'
import React from 'react'
import VideoCallIcon from '@mui/icons-material/VideoCall';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import './Css/Messafesender.css'
function Messagesender() {
    return (
        <div className='message'>
            <div className='message__top'>
                <Avatar />
                <form >
                    <input type='text' placeholder="What's on your mind" />
                </form>
            </div>
            <div className='message__bottom'>
                <div className='messangeoption'>
                    <VideoCallIcon style={{color:'red'}} fontSize='large'/>
                    <p>Live Video</p>
                </div>
                <div className='messangeoption'>
                    <PhotoLibraryIcon style={{ color: "lightgreen" }} fontSize='large' />
                    <p>Photo/Video</p>
                </div>
                <div className='messangeoption'>
                    <InsertEmoticonIcon style={{ color: '#ffb100' }} fontSize='large' />
                    <p>Feeling/Activity</p>
                </div>
            </div>
        </div>
    )
}

export default Messagesender