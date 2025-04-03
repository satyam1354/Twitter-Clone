import React, { useEffect } from 'react';
import LeftSidebar from './LeftSidebar';
import Feed from './Feed';
import RightSidebar from './RightSidebar';
import { Outlet, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import useOtherUsers from '../hooks/useOtherUsers';
import useGetProfile from '../hooks/useGetProfile';
import useGetMyTweets from '../hooks/useGetMyTweets';


const Home = () => {

  const { user, profile, otherUsers } = useSelector(store => store.user)
  //  console.log("useers and otherusers")
  // console.log("user",  user)
  // console.log("profile", profile)
  // console.log("otherUsers home page",otherUsers)
  const navigate = useNavigate()

  useEffect(() => {
    if (!user) {
      navigate("/login")
    }
  }, [])

/// custom hooks
  useOtherUsers(user?._id)
  //useGetProfile(user?._id)
  useGetMyTweets(user?._id)


  return (
    <div className='flex justify-between w-[80%] mx-auto'>
      <LeftSidebar  />
      <Outlet />
      {/* //instead of body c, render children conditionaly*/}
      <RightSidebar otherUsers={otherUsers}/>
    </div>

  )
}
export default Home;