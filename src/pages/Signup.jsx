import { FaGoogle, FaFacebookF, FaApple } from "react-icons/fa";
import * as Separator from "@radix-ui/react-separator";

function Signup (){

    function handleChange(){
        
    }

    return(
        <div className="h-screen bg-skin  flex items-center justify-center flex-col">
            <form onSubmit={handleChange} className=" mx-auto bg-white border border-gray-200 rounded-lg shadow-md drop-shadow-md">
                <div className="w-full px-10 py-6">
                    <h1 className=" font-bold text-3xl py-2 underline">Hey! Welcome</h1>
                    <h3 className="max-w-72 text-sm font-semibold text-gray-500 py-2">Welcome to the Hood! start posting and show off you Aura🔥</h3>
                </div>
                
                
                <div className=" w-full px-10 py-4">
                    <div className="my-4 text-center w-full">
                        <label htmlFor="Email"></label>
                        <input type="email" placeholder="Email Address" className="h-10  border-b border-blk outline-none px-2 min-w-72 placeholder:text-blk" />
                    </div>  
                    <div className="my-4 text-center">
                        <input type="password" placeholder="Password" className="h-10  outline-none border-b border-blk px-2 min-w-72 placeholder:text-blk" />
                    </div>

                    <div className="my-2 text-center w-full">
                        <button className="min-w-72 bg-blk text-skin border border-blk px-8 py-2 rounded-md mx-auto hover:bg-white hover:text-blk hover:transition duration-300 font-semibold">Login</button>
                    </div>
                    <div className="flex">
                    <Separator.Root className="my-[15px] bg-gray-300 data-[orientation=horizontal]:h-px data-[orientation=vertical]:h-full data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-px" />
                    <h1 className="px-4">or</h1>
                    <Separator.Root className="my-[15px] bg-gray-300 data-[orientation=horizontal]:h-px data-[orientation=vertical]:h-full data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-px" />
                    </div>
                    
                    <div className="flex items-center justify-evenly my-4">
                        <div className="border border-gray-300 py-3 px-8 rounded-md cursor-pointer shadow-sm hover:shadow-lg transition duration-200 "><FaGoogle size={15} /></div>
                        <div className="border border-gray-300 py-3 px-8 rounded-md cursor-pointer shadow-sm hover:shadow-lg transition duration-200 "><FaFacebookF size={15}/></div>
                        <div className="border border-gray-300 py-3 px-8 rounded-md cursor-pointer shadow-sm hover:shadow-lg transition duration-200 "><FaApple size={15} /></div>
                    </div>
                    
                    <div className="text-center my-4">
                        <h1 className="text-sm font-normal text-gray-500">Not in the hood yet ? <a href="#" className="underline text-blk">signup</a> here</h1>
                    </div>
                        

                </div>

            </form>
        </div>
    )
}

export default Signup