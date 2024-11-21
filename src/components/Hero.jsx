function Hero (){
    return(
        <div className="flex items-center justify-center h-[80vh]">
            <div className="">
                <h1 className="text-8xl font-semibold ">Human <br/> yapping & brain-rot</h1>
                <p className="text-2xl font-medium my-16 ">A place to yapp, talk shit, and enhance your talent of trolling </p>
                <button className=" px-10 bg-black text-white py-3 border border-black rounded-full hover:text-black hover:border-black hover:border hover:bg-skin text-lg font-semibold hover:transition-all duration-300">Start posting</button>
            </div>
            <div>
                <div className="w-[600px]"> <img src="/Head.png" alt="emoji" /></div>
            </div>
        </div>
    )
}

export default Hero