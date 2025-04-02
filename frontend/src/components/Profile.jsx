import React from "react";
import { IoMdArrowBack } from "react-icons/io";
import { Link, useParams } from 'react-router-dom'
import Avatar from "react-avatar";
import useGetProfile from '../hooks/useGetProfile';
import { useDispatch, useSelector } from 'react-redux';
import axios from "axios";
import { TWEET_API_END_POINT, USER_API_END_POINT } from "../utils/constant";
import toast from "react-hot-toast";
import { getRefresh } from "../redux/tweetSlice";

const Profile = () => {

    // custom hoooks
    const { user, profile , } = useSelector(store => store.user)
    // console.log("profiles")
    // console.log("profile", profile)
    // console.log("user", user) 

    const { id } = useParams()
    //useGetProfile(id);
const dispatch = useDispatch();

    const followUnfollowHandler = async (id) => {
        if (user.following.includes(id)) {
            //unfollow
            try {
                axios.defaults.withCredentials = true;
                const res = await axios.post(`${USER_API_END_POINT}/unfollow/${id}`, { id: user?._id })
                console.log(res)
                dispatch(followingUpdate(id))
                dispatch(getRefresh())
                toast.success(res?.data?.message)
            } catch (error) {
                toast.error(error.response.data.message)
            }
        } else {
            ///follow
            try {
                axios.defaults.withCredentials = true
                const res = await axios.post(`${USER_API_END_POINT}/follow/${id}`, { id: user?._id })
                console.log(res)
                dispatch(followingUpdate(id))
                dispatch(getRefresh())
                toast.success(res?.data?.message)
            } catch (error) {
                toast.error(error.response.data.message)
            }
        }
    }

    return (
        <div className="w-[50%] border-l border-r border-gray-300">
            <div>
                <div className="flex items-center py-2 ">
                    <Link to="/" className="p-2 rounded-full hover:bg-gray-200 hover:cursor-pointer">
                        <IoMdArrowBack size="24px" />
                    </Link>
                    <div className="ml-2">
                        <h1 className="font-bold text-lg">{profile?.name}</h1>
                        <p className="text-gray-500 text-sm">99999 posts</p>
                    </div>
                </div>

                <img src="https://pbs.twimg.com/profile_banners/1140684578304081921/1720812417/1080x360" alt="banner image" />
                <div className="absolute top-52 ml-2 border-4 border-white rounded-full">
                    <Avatar src="https://wallpaperaccess.com/full/3264020.jpg" size="120" round={true} />
                </div>
                <div className="text-right m-4">
                    {
                        user?._id === profile?._id ? (
                            <button className="px-4 py-1 font-bold hover:bg-gray-200 rounded-full border border-gray-400 cursor:pointer">Edit Profile</button>
                        ) : (
                            <button onClick={followUnfollowHandler} className="px-4 py-1 font-bold text-white rounded-full border bg-black  cursor:pointer">{user.following.includes(id) ? "Following" : "Follow"}</button>
                        )}
                </div>
                <div className="m-4">
                    <h1 className="font-bold text-xl">{profile?.name}</h1>
                    <p>{`@${profile?.username}`}</p>
                </div>
                <div className="m-4 text-sm">
                    <p>exploring the endless possiblities of universe. i am in a mood to go to other planets to esplore the universe</p>
                </div>
            </div>
        </div>
    )
}
export default Profile;