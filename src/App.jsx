import { useContext, useEffect } from "react"
import MyContext from "./context/MyContext"
import {Routes, Route} from "react-router-dom"
import BlogPage from "./component/BlogPage"
import TagPage from "./component/TagPage"
import CategoryPage from "./component/CategoryPage"
import Home from "./component/Home"
import {useLocation, useSearchParams} from 'react-router-dom' 

function App(){
    const location=useLocation()
    const [searchParam,setSearchParam]=useSearchParams()
    const{apiCall}=useContext(MyContext)
    useEffect(()=>{
        let page=Number(searchParam.get("page"))
        
        if(location.pathname.includes('tags')){
            const tag=location.pathname.split('/').at(-1).replaceAll('-',' ')
            // console.log(tag)
            apiCall(page,tag,null)
            
        }
        else if(location.pathname.includes('categories')){
            const category=location.pathname.split('/').at(-1).replaceAll('-',' ')
            apiCall(page,null,category)
        }
        else{
            apiCall(page,null,null)
        }
    },[location.pathname,location.search])
    return(
        <>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/blogs/:id" element={<BlogPage/>}/>
            <Route path="/tags/:tag" element={<TagPage/>}/>
            <Route path="/categories/:category" element={<CategoryPage/>}/>
        </Routes>
        
        </>
    )
}
export default App