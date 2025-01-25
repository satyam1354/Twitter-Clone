import React from 'react';
import LeftSidebar from './LeftSidebar';
import Feed from './Feed';
import RightSidebar from './RightSidebar';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import useOtherUsers from '../hooks/useOtherUsers';


const Home = () => {
     //custom hook
    const {user, otherUsers} = useSelector(store=>store.id)
     useOtherUsers(user?._id)
     
    return(
        <div className='flex justify-between w-[80%] mx-auto'>
             <LeftSidebar />
             <Outlet/>  
               {/* //instead of body c, render children conditionaly*/}
             <RightSidebar otherUsers = {otherUsers}/>
        </div>
       
    )
}
export default Home;