import React, { useState } from "react";
const Login = () => {
    const [isLogin, setIsLogin] = useState(true)

    const loginSignupHandler = ()=>{
          setIsLogin(!isLogin)
    } 

    return (
        <div className="w-screen h-screen flex items-center justify-center">
            <div className="flex items-center justify-evenly w-[80%]">
                <div >
                    <img className='ml-5 ' width={"300px"} src="https://toppng.com/uploads/preview/twitter-logo-png-photo-116617240253ywzn3usl6.png" alt="twitter-logo" />
                </div>
                <div>
                    <div className="my-5">
                        <h1 className="font-bold text-6xl">Happening now!</h1>
                    </div>
                    <h1 className="mt-4 mb-2 text-2xl font-bold">{isLogin ? "Login" : "Signup" }</h1>
                    <form className="flex flex-col w-[55%]">
                        {
                            !isLogin && (<>
                                <input type="text" placeholder="Name" className="outline-blue-500 border border-gray-800 rounded-full px-3 py-2 my-1 font-semibold" />
                                <input type="text" placeholder="Username" className="outline-blue-500 border border-gray-800 rounded-full px-3 py-2  my-1 font-semibold" />
                            </>
                            )
                        }
                        <input type="email" placeholder="Email" className="outline-blue-500 border border-gray-800 rounded-full px-3 py-2 my-1 font-semibold" />
                        <input type="password" placeholder="Password" className="outline-blue-500 border border-gray-800 rounded-full px-3 py-2  my-1 font-semibold" />
                        <button className="bg-[#1D9BF0] my-4 py-2 text-lg text-white  border-none rounded-full">{isLogin ? "Login" : "CreateAccount" } </button>
                        <h1>{isLogin ? "Do not have an account?" : "Already have an account?"} <span onClick={loginSignupHandler} className="font-bold text-blue-600 cursor-pointer">{isLogin ? "Signup" : "Login"}</span></h1>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Login;