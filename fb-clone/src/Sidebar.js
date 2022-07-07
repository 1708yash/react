import React from 'react'
import './Css/Sidebar.css'
import Sidebaroptions from './Sidebaroptions'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
function Sidebar() {
  return (
    <div className='sidebar'>
          <Sidebaroptions src='https://images.unsplash.com/photo-1599475735868-a8924c458792?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGFuZHNvbWUlMjBib3l8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60' title='Yash Tomar'/>
          <Sidebaroptions src='https://static.xx.fbcdn.net/rsrc.php/v3/yZ/r/i7hepQ2OeZg.png'  title='Covid-19 Information Cneter' />
          <Sidebaroptions src='https://static.xx.fbcdn.net/rsrc.php/v3/yx/r/-XF4FQcre_i.png' title='Friends' />
          <Sidebaroptions src='https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/mk4dH3FK0jT.png' title='Groups' />
          <Sidebaroptions src='https://static.xx.fbcdn.net/rsrc.php/v3/yG/r/A1HlI2LVo58.png' title='Watch' />
          <Sidebaroptions src='https://static.xx.fbcdn.net/rsrc.php/v3/yd/r/9-o1e6LN_TX.png' title='Events' />
          <Sidebaroptions Icon={ExpandMoreIcon} title='See More' />
    </div>
  )
}

export default Sidebar