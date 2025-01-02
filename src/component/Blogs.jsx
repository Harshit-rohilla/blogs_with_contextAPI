import Blog from "./Blog"
import MyContext from "../context/MyContext";
import {useContext} from "react"
        
function Blogs(){
    const{data}=useContext(MyContext)
    if (!data?.posts) return null;
    return(
        <>
        <div className="flex-1 py-4 flex flex-col items-center gap-y-6 overflow-y-auto scrollbar-hide">
            {(data.posts).map((obj)=>(<Blog key={obj.id} obj={obj}/>))}
        </div>
        </>
    )
}
export default Blogs
