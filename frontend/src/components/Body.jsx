import React from "react";
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from "./Login";
import Home from './Home'
import Profile from "./Profile";
import Feed from "./Feed";

const Body = () => {
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Home/>,
            children: [
                {
                    path: "/",
                    element: <Feed/>
                },
                {
                    path: "/profile",
                    element: <Profile/>
                }
            ]
        },
        {
            path: "/login",
            element: <Login />
        },
        {
            path: "/Profile",
            element: <Profile />
        }
    ])
    return (
        <div>
            <RouterProvider router={appRouter} />
        </div>
    )
}
export default Body;