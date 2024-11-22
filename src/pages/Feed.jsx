import Sidebar from "../components/Sidebar";
import Post from "../components/ui/Post";

export default function Feed(){
    return(
        <div className="flex gap-4">
            <Sidebar />
            <div className="mx-auto">
                <Post 
                    subtitle="testpost"
                    timeline="test"
                    maintitle="Test Post"
                    img="./Head.png" 
                />
            </div>
            
        </div>
    )
}

