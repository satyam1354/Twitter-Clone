import React from "react";
import { Link } from 'react-router-dom'
import { CiSearch } from "react-icons/ci";
import Avatar from 'react-avatar'
import { useSelector } from "react-redux";


const RightSidebar = () => {
    const { otherUsers } = useSelector(store => store.user)
    // console.log("otherUserss", otherUsers)
    return (
        <div className="w-[20%]">
            <div className=" flex items-center p-2 bg-gray-100 rounded-full outline-none">
                <CiSearch size="20px" />
                <input type="text" className="bg-transparent outline-none px-2" placeholder="Search " />
            </div>
            <div className="p-4 bg-gray-100 rounded-2xl my-4">
                <h1 className="font-bold text-lg">whom to Follow</h1>
                {
                    otherUsers?.map(user => {
                        return (
                            <div key={user?._id} className="flex items-center justify-between my-3">
                                <div className="flex">
                                    <div>
                                        <Avatar src="https://wallpaperaccess.com/full/3264020.jpg" size="40" round={true} />
                                    </div>
                                    <div className="ml-2">
                                        <h1 className="font-bold">{user?.name}</h1>
                                        <p className="text-sm">{`@${user?.username}`}</p>
                                    </div>

                                </div>
                                <div>
                                    <Link to={`/profile/${user?._id}`}>
                                        <button className="px-4 py-1 bg-black text-white rounded-full">Profile</button>
                                    </Link>
                                </div>
                            </div>
                        )
                    })
                }

                <div className="flex items-center justify-between my-3">
                    <div className="flex">
                        <div>
                            <Avatar src="https://wallpaperaccess.com/full/3264020.jpg" size="40" round={true} />
                        </div>
                        <div className="ml-2">
                            <h1 className="font-bold">sample</h1>
                            <p className="text-sm">@satya sample</p>
                        </div>

                    </div>
                    <div>
                        <button className="px-4 py-1 bg-black text-white rounded-full">sampleP</button>
                    </div>
                </div>


            </div>


        </div>
    )
}

export default RightSidebar;