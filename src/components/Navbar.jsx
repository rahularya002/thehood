import { Link } from 'react-router-dom'

function Navbar(){
    return (
        <div className="flex items-center justify-around h-16 border-b border-black sticky z-100">
            <div>
                <Link to="/">
                    <img src="" alt="Logo" />
                </Link>
            </div>
            <div >
                <ul className="flex gap-6 items-center ">

                    {/* <li className="text-sm cursor-pointer">
                        <Link to="/About"> Our Story</Link>
                    </li> */}

                    <li className="text-sm cursor-pointer">
                        <Link to="/Login"> Post</Link>
                    </li>

                    <li className="text-sm cursor-pointer">
                        <Link to="/Login"> Sign in</Link>
                    </li>

                    <button className="px-4 text-sm bg-black text-white rounded-full py-2">Get Started</button>
                </ul>
            </div>
        </div>
    )
}

export default Navbar