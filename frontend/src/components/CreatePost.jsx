import React from 'react'
import Avatar from 'react-avatar'
import { FaImages } from "react-icons/fa6";


const CreatePost = () => {
    return (
        <div className='w-[100%]'>
            <div>
                <div className='flex items-center justify-evenly border border-grey-200'>
                    <div className='cursor-pointer hover:bg-green-200 w-full text-center px-4 py-3'>
                        <h1 className='font-bold text-gray-600 text-lg'>For You</h1>
                    </div>
                    <div className='cursor-pointer hover:bg-green-200 w-full text-center px-4 py-3 '>
                        <h1 className='font-bold text-gray-600 text-lg'>Following</h1>
                    </div>
                </div>
                <div >
                    <div className='flex items-center p-4'>
                        <div>
                          <Avatar src="https://wallpaperaccess.com/full/3264020.jpg" size="40" round={true} />
                        </div>
                        <input className='w-full outline-none border-none text-xl ml-2'  type="text" placeholder="what is happening??"/>
                    </div>
                    <div className='flex items-center justify-between p-4 border-b border-gray-300' >
                        <div>
                        <FaImages  size="24px"/>
                        </div>
                        <button className='bg-[#1D9BF0] text-lg text-white px-4 py-1 border-none rounded-full'>Post</button>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default CreatePost