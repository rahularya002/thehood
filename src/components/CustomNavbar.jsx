function CustomNavbar(){
    return(
        <div className="w-full px-6 h-20 flex items-center justify-between border-b border-skin bg-blk ">
            <div>
                <img src="" alt="Logo" />
            </div>
            <div className="flex gap-4">
                <button className="rounded-full px-4 py-2 border border-skin text-sm text-skin">Sign in</button>
                <button className="rounded-full px-4 py-2 bg-skin text-blk text-sm ">Sign up</button>
            </div>
        </div>
    )
}

export default CustomNavbar