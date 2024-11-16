import React from 'react';
import LeftSidebar from './LeftSidebar';
import Feed from './Feed';
import RightSidebar from './RightSidebar';
import { Outlet } from 'react-router-dom';
import useGetProfile from '../hooks/useGetProfile';
import { useSelector } from 'react-redux';

const Home = () => {
    // const {user } = useSelector(store=> store.user)

    // custom hoooks
    // useGetProfile(user._id);
    return(
        <div className='flex justify-between w-[80%] mx-auto'>
             <LeftSidebar />
             <Outlet/>
             <RightSidebar/>
        </div>
       
    )
}
export default Home;