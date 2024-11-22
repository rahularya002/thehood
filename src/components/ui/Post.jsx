import { Ellipsis, Flame } from "lucide-react";
import * as Separator from "@radix-ui/react-separator";
import { useState } from "react";

function Post(props){
    const [islit, setIslit] = useState(false)

    function handleAura(){
        setIslit
    }

    return(
        <div className="rounded-lg border border-gray-300 px-5 w-[450px] max-w-md">
            <div className="flex m-2 items-center justify-between py-4">
                <div className="flex gap-3 items-center"> 
                    <div className="rounded-full size-8 bg-black"></div>
                    <h1 className="text-gray-400 text-sm">{props.subtitle}</h1>
                    <h3 className="text-gray-400 text-sm">{props.timeline}</h3>
                </div>
                <Ellipsis />
            </div>
            <Separator.Root className="my-[15px] bg-gray-300 data-[orientation=horizontal]:h-px data-[orientation=vertical]:h-full data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-px" />
            <h1 className="text-md font-semibold text-blk">{props.maintitle}</h1>
            <div className="border rounded-md border-gray-300"><img  src={props.img} alt="" width={300} /></div>
            <Separator.Root className="my-[15px] bg-gray-300 data-[orientation=horizontal]:h-px data-[orientation=vertical]:h-full data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-px" />
            <div className="flex gap-2 justify-even pb-5">
                <div className="w-full cursor-pointer">
                    <Flame className="mx-auto"/>
                </div>
                <div className="w-full cursor-pointer">
                    <Flame className="mx-auto"/>
                </div>
            </div>
        </div>
    )
}

export default Post