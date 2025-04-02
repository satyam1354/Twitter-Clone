import React from 'react';
import Avatar from 'react-avatar';
import { FaRegComment } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import axios from 'axios';
import { TWEET_API_END_POINT, timeSince } from '../utils/constant';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast'
import { getRefresh } from '../redux/tweetSlice';


const Tweet = ({tweet}) => {
    //console.log(tweet)
    const {user} = useSelector(store=> store.user)
    const dispatch = useDispatch()
    const likeOrDislikeHandler = async(id)=>{
        console.log('ello')
        try {
            const res = await axios.put(`${TWEET_API_END_POINT}/like/${id}`, {id:user?._id},
                {withCredentials: true}
             );
             console.log("like res",res)
             dispatch(getRefresh());
             if(res.data.success){
                toast.success(res.data.message)
             }
        } catch (error) {
            toast.error(error.response.data.message || "can't update like , network error")
            console.log(error)
        }
    }
    const deleteTweetHandler =async(id)=>{
        console.log('deleteed')
        try {
            axios.defaults.withCredentials = true
            const res = await axios.delete(`${TWEET_API_END_POINT}/delete/${id}`);
            console.log(res)
            dispatch(getRefresh())
            if(res.data.success){
                toast.success(res.data.message)
            }
        } catch (error) {
            toast.error(error.response.data.message)
        }
    }
    return (
        <div className='border-b border-gray-200'>
            <div>
                <div className='flex p-4 '>
                    <Avatar src="https://wallpaperaccess.com/full/3264020.jpg" size="40" round={true} />
                    <div className='ml-2 w-full'>
                        <div className='flex items-center'> 
                            <h1 className='font-bold '>{tweet?.userDetails[0]?.name}</h1>
                            <p className='text-gray-500 text-sm ml-1'>{`@${tweet?.userDetails[0]?.username}  ${timeSince(tweet?.createdAt)}`} </p>
                        </div>
                        <div className=''>
                            <p>{tweet?.description}</p>
                        </div>
                        <div className='flex align-items justify-between my-3'>
                            <div className='flex items-center'>
                                <div className='p-2 hover:bg-green-200 rounded-full cursor-pointer'>
                                    <FaRegComment size="20px" />
                                </div>
                                <p className='hover:text-green-400' >0</p>
                            </div>
                            <div className='flex items-center'>
                                <div onClick={()=>likeOrDislikeHandler(tweet?._id)} className='p-2 hover:bg-pink-200 rounded-full cursor-pointer'>
                                    <CiHeart size="24px" />
                                </div>
                                <p>{tweet?.like?.length}</p>
                            </div>
                            <div className='flex items-center '>
                                <div className='p-1 hover:bg-blue-200 rounded-full cursor-pointer'>
                                    <CiBookmark size="24px" /> 
                                </div>
                                <p>0</p>
                            </div>
                            {  user?._id===tweet?.userId && (
                                <div className='flex items-center '>
                                <div onClick={()=>deleteTweetHandler(tweet?._id)} className='p-1 hover:bg-red-400 rounded-full cursor-pointer'>
                                    <MdDeleteOutline size="24px" /> 
                                </div>
                            </div>
                            )}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Tweet;