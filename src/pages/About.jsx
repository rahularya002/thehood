import { MoveRight } from "lucide-react"
import Condition from "../components/Condition"

function About(){
    return(
        <>
            <Condition />
            <div className="bg-blk">
                <div className="flex items-center justify-start h-full px-10 w-full">
                    <div className=" w-[650px] h-auto">
                        <h1 className="text-8xl font-semibold text-skin my-4">Everyone has Yapping to do </h1>
                        <p className="text-skin text-xl my-16 font-medium">Medium is a home for human stories and ideas. Here, anyone can share knowledge and wisdom with the world—without having to build a mailing list or a following first. The internet is noisy and chaotic; Medium is quiet yet full of insight. It’s simple, beautiful, collaborative, and helps you find the right readers for whatever you have to say.</p>
                        <span className="text-skin text-3xl font-medium"> Ultimately, our goal is to deepen our collective understanding of the world through the power of writing.</span>
                        <p className="text-skin text-xl my-16 font-medium">We believe that what you read and write matters. Words can divide or empower us, inspire or discourage us. In a world where the most sensational and surface-level stories often win, we’re building a system that rewards depth, nuance, and time well spent. A space for thoughtful conversation more than drive-by takes, and substance over packaging.</p>
                        <p className="text-skin text-xl my-16 font-medium">Over 100 million people connect and share their wisdom on Medium every month. They’re software developers, amateur novelists, product designers, CEOs, and anyone burning with a story they need to get out into the world. They write about what they’re working on, what’s keeping them up at night, what they’ve lived through, and what they’ve learned that the rest of us might want to know too.</p>
                        <p className="text-skin text-xl my-16 font-medium">Instead of selling ads or selling your data, we’re supported by a growing community of over a million Medium members who believe in our mission. If you’re new here, start reading. Dive deeper into whatever matters to you. Find a post that helps you learn something new, or reconsider something familiar—and then write your story.</p>
                    </div>
                </div>
                <div className="flex items-center h-52 px-10 justify-between border-t border-b border-skin hover:bg-skin group transition duration-150 cursor-pointer">
                    <h1 className="text-6xl text-skin font-semibold group-hover:text-blk">Start Yapping</h1>
                    <MoveRight size={64} color="#f7f4ed" className="group-hover:stroke-blk"/>
                </div>
                <div className="flex items-center h-52 px-10 justify-between border-t border-b border-skin hover:bg-skin group transition duration-150 cursor-pointer">
                    <h1 className="text-6xl text-skin font-semibold group-hover:text-blk">Start Talk-shitting</h1>
                    <MoveRight size={64} color="#f7f4ed" className="group-hover:stroke-blk"/>
                </div>
                <div className="flex items-center h-52 px-10 justify-between border-t border-b border-skin hover:bg-skin group transition duration-150 cursor-pointer">
                    <h1 className="text-6xl text-skin font-semibold group-hover:text-blk">Become a Troll 🦍</h1>
                    <MoveRight size={64} color="#f7f4ed" className="group-hover:stroke-blk"/>
                </div>
            
            </div>
        </>
    )
}

export default About