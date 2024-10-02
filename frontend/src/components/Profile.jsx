import React from "react";
import { IoMdArrowBack } from "react-icons/io";
import {Link} from 'react-router-dom'
import Avatar from "react-avatar";

const Profile = () => {
    return (
        <div className="w-[50%] border-l border-r border-gray-300">
            <div>
                <div className="flex items-center py-2 ">
                    <Link to="/" className="p-2 rounded-full hover:bg-gray-200 hover:cursor-pointer">
                        <IoMdArrowBack size="24px" />
                    </Link> 
                    <div className="ml-2">
                        <h1  className="font-bold text-lg">Satyam</h1>
                        <p  className="text-gray-500 text-sm">99999 posts</p>
                    </div>
                </div> 

                <img src="https://pbs.twimg.com/profile_banners/1140684578304081921/1720812417/1080x360" alt="banner image" />
                <div className="absolute top-52 ml-2 border-4 border-white rounded-full"> 
                <Avatar src="https://wallpaperaccess.com/full/3264020.jpg" size="120" round={true} />
                </div>
                <div className="text-right m-4">
                    <button className="px-4 py-1 font-bold hover:bg-gray-200 rounded-full border border-gray-400 cursor:pointer">Edit Profile</button>
                </div>
                <div className="m-4">
                    <h1 className="font-bold text-xl">ssatyam</h1>
                    <p>@samchoudhary</p>
                </div>
                <div className="m-4 text-sm">
                    <p>exploring the endless possiblities of universe. i am in a mood to go to other planets to esplore the universe</p>
                </div>
            </div>
        </div>
    )
}
export default Profile;