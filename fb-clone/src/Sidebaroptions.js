import { Avatar } from '@mui/material'
import React from 'react'
import './Css/Sidebaroptions.css'
import './Css/Sidebar.css'
function Sidebaroptions({src,title,Icon}) {
  return (
    <div className='sidebarRow'>
        {src && <Avatar src={src}/>}
        {Icon && <Icon/>}
        <p>{title}</p>

    </div>
  )
}

export default Sidebaroptions