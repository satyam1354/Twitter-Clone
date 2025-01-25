import React from 'react'
import { FaHome } from "react-icons/fa";
import { FaHashtag } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { BsBookmarksFill } from "react-icons/bs";
import { IoLogOut } from "react-icons/io5";
import { SiGooglemessages } from "react-icons/si";
import {Link, useParams} from "react-router-dom"
import { useSelector } from 'react-redux';



const LeftSidebar = () => {
 // const {id} = useParams()
  const {user} = useSelector(store=>store.id)
  
  return (
    <div className='w-[20%]'>
      <div>
        <div >
          <img className='ml-5 ' width={"45px"} src="https://toppng.com/uploads/preview/twitter-logo-png-photo-116617240253ywzn3usl6.png" alt="twitter-logo" />
        </div>
        <div className='m-4'>
          <Link to="/" className='flex items-center my-2 px-4 py-2 hover:bg-green-200 hover:cursor-pointer  rounded-full'>
            <div>
              <FaHome size="24px" />
            </div>
            <h1 className="font-bold text-lg ml-2" >Home</h1>
          </Link>
          <div className='flex items-center my-2 px-4 py-2 hover:bg-green-200 hover:cursor-pointer  rounded-full'>
            <div>
            <FaHashtag  size="24px"  />
            </div>
            <h1 className="font-bold text-lg ml-2" >Explore</h1>
          </div>
          <div className='flex items-center my-2 px-4 py-2 hover:bg-green-200 hover:cursor-pointer  rounded-full'>
            <div>
              <IoIosNotifications size="24px" />
            </div>
            <h1 className="font-bold text-lg ml-2" >Notifications</h1>
          </div>
          <div className='flex items-center my-2 px-4 py-2 hover:bg-green-200 hover:cursor-pointer  rounded-full'>
            <div>
              <SiGooglemessages size="24px" />
            </div>
            <h1 className="font-bold text-lg ml-2" >Messages</h1>
          </div>
          <Link to={`/profile/${user?._id}`} className='flex items-center my-2 px-4 py-2 hover:bg-green-200 hover:cursor-pointer  rounded-full'>
            <div>
              <FaUser size="24px" />
            </div>
            <h1 className="font-bold text-lg ml-2" >Profile</h1>
          </Link>
          <div className='flex items-center my-2 px-4 py-2 hover:bg-green-200 hover:cursor-pointer  rounded-full'>
            <div>
              <BsBookmarksFill size="24px" />
            </div>
            <h1 className="font-bold text-lg ml-2" >Bookmarks</h1>
          </div>
          <div className='flex items-center my-2 px-4 py-2 hover:bg-green-200 hover:cursor-pointer  rounded-full'>
            <div>
              <IoLogOut size="24px" />
            </div>
            <h1 className="font-bold text-lg ml-2" >Logout</h1>
          </div>
          <button className='px-4 py-2 border-none text-mg bg-[#1D9BF0] w-full rounded-full text-white font-bold  '>Post</button>
        </div>
      </div>
    </div>
  )
}
export default LeftSidebar;
