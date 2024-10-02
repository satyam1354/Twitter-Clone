import React from 'react';
import Avatar from 'react-avatar';
import { FaRegComment } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";


const Tweet = () => {
    return (
        <div className='border-b border-gray-200'>
            <div>
                <div className='flex p-4 '>
                    <Avatar src="https://wallpaperaccess.com/full/3264020.jpg" size="40" round={true} />
                    <div className='ml-2 w-full'>
                        <div className='flex items-center'>
                            <h1 className='font-bold '>Shamb sinha</h1>
                            <p className='text-gray-500 text-sm ml-1'>@korean  .1m</p>
                        </div>
                        <div className=''>
                            <p>Hello developers lets connect together</p>
                        </div>
                        <div className='flex align-items justify-between my-3'>
                            <div className='flex items-center'>
                                <div className='p-2 hover:bg-green-200 rounded-full cursor-pointer'>
                                    <FaRegComment size="20px" />
                                </div>
                                <p className='hover:text-green-400' >0</p>
                            </div>
                            <div className='flex items-center'>
                                <div className='p-2 hover:bg-pink-200 rounded-full cursor-pointer'>
                                    <CiHeart size="24px" />
                                </div>
                                <p>0</p>
                            </div>
                            <div className='flex items-center '>
                                <div className='p-1 hover:bg-blue-200 rounded-full cursor-pointer'>
                                    <CiBookmark size="24px" /> 
                                </div>
                                <p>0</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Tweet;