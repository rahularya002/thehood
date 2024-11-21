import { Flame, Home, Rss, Telescope, TrendingUp } from "lucide-react"
import * as Separator from "@radix-ui/react-separator";

function Sidebar(){
    return(
        <div className="h-[93vh] border-r border-gray-300 w-72">
            <div className="p-6">
                <div className="px-4 py-2 flex items-center gap-2 hover:bg-gray-100 active:bg-gray-300  rounded-lg cursor-pointer mb-1">
                    <Home />
                    <h1 className="text-sm font-semibold">Home</h1>
                </div>
                <div className="px-4 py-2 flex items-center gap-2 hover:bg-gray-100 rounded-lg cursor-pointer mb-1">
                    <TrendingUp />
                    <h1 className="text-sm font-semibold">Popular</h1>
                </div>
                <div className="px-4 py-2 flex items-center gap-2 hover:bg-gray-100 rounded-lg cursor-pointer mb-1">
                    <Telescope />
                    <h1 className="text-sm font-semibold">Explore</h1>
                </div>
                <Separator.Root className="my-[15px] bg-gray-300 data-[orientation=horizontal]:h-px data-[orientation=vertical]:h-full data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-px" />
                
                <h1 className="text-sm px-2 text-gray-500 mb-2">Custom Feeds</h1>
                <div className="px-4 py-2 flex items-center gap-2 group hover:bg-gray-100 rounded-lg cursor-pointer mb-1">
                    <Rss size={20}/> 
                    <h1 className="text-sm font-medium"> Feed 1</h1>
                </div>
                <div className="px-4 py-2 flex items-center gap-2 group hover:bg-gray-100 rounded-lg cursor-pointer mb-1">
                    <Rss size={20}/> 
                    <h1 className="text-sm font-medium"> Feed 2</h1>
                </div>
                <div className="px-4 py-2 flex items-center gap-2 group hover:bg-gray-100 rounded-lg cursor-pointer mb-1">
                    <Rss size={20}/> 
                    <h1 className="text-sm font-medium"> Feed 3</h1>
                </div>

                <Separator.Root className="my-[15px] bg-gray-300 data-[orientation=horizontal]:h-px data-[orientation=vertical]:h-full data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-px" />
                
                <h1 className="text-sm px-2 text-gray-500 mb-2">The HooD</h1>
                <div className="px-4 py-2 flex items-center justify-between gap-2 group hover:bg-gray-100 rounded-lg cursor-pointer mb-1">
                    <div className="flex items-center gap-2">
                        <div className="rounded-full w-7 h-7 bg-black"></div>
                        <h1 className="text-sm font-medium"> Grove Street</h1>
                    </div>
                    <Flame />
                </div>
                <div className="px-4 py-2 flex items-center justify-between gap-2 group hover:bg-gray-100 rounded-lg cursor-pointer mb-1">
                    <div className="flex items-center gap-2">
                        <div className="rounded-full w-7 h-7 bg-black"></div>
                        <h1 className="text-sm font-medium"> Ballas</h1>
                    </div>
                    <Flame />
                </div>
                <div className="px-4 py-2 flex items-center justify-between gap-2 group hover:bg-gray-100 rounded-lg cursor-pointer mb-1">
                    <div className="flex items-center gap-2">
                        <div className="rounded-full w-7 h-7 bg-black"></div>
                        <h1 className="text-sm font-medium"> Greybeards</h1>
                    </div>
                    <Flame />
                </div>
                <div className="px-4 py-2 flex items-center justify-between gap-2 group hover:bg-gray-100 rounded-lg cursor-pointer mb-1">
                    <div className="flex items-center gap-2">
                        <div className="rounded-full w-7 h-7 bg-black"></div>
                        <h1 className="text-sm font-medium"> Dragonborns</h1>
                    </div>
                    <Flame />
                </div>

                <Separator.Root className="my-[15px] bg-gray-300 data-[orientation=horizontal]:h-px data-[orientation=vertical]:h-full data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-px" />
            </div>
        </div>
    )
}

export default Sidebar