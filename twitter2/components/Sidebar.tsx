import React from 'react'
import {
BellIcon,
HashtagIcon,
BookmarkIcon,
CollectionIcon,
DotsCircleHorizontalIcon,
MailIcon,
UserIcon,
HomeIcon,
} from "@heroicons/react/outline"
import SidebarRow from './SidebarRow'
function Sidebar() {
  return (
    <div>
          <img className='h-10 w-10' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY0llnBzKhyWfsOpcu9Ti2FbE7AmOwFyn7Dw&usqp=CAU' alt='twitter logo'/>

          <SidebarRow Icon={HomeIcon} title="Home"/>
          <SidebarRow Icon={HashtagIcon} title="Explore" />
          <SidebarRow Icon={BellIcon} title="Notification" />
          <SidebarRow Icon={MailIcon} title="Messages" />
          <SidebarRow Icon={BookmarkIcon} title="Bookmarks" />
          <SidebarRow Icon={CollectionIcon} title="Lists" />
          
    </div>
  )
}

export default Sidebar