import { useContext, useEffect, useState } from "react"
import {useLocation} from "react-router-dom"
import Header from "./Header"
import {useNavigate} from "react-router-dom"
import{Link} from "react-router-dom"
import Blog from"./Blog"
import Loader from "./Loader"
import MyContext from "../context/MyContext"

function BlogPage(){
    const{loading,setLoading}=useContext(MyContext)
    const navigate=useNavigate()
    const[singleData,setSingleData]=useState(null)
    const[relatedData,setRelatedData]=useState(null)
    const location=useLocation()
    async function apiCallForBlog(){
        setLoading(true)
        const blogId=location.pathname.split('/').at(-1)
        const url=`https://codehelp-apis.vercel.app/api/get-blog?blogId=${blogId}`
        try{
            const res=await fetch(url)
            const res2=await res.json()
            setSingleData(res2.blog)
            setRelatedData(res2.relatedBlogs)
            setLoading(false)
        }
        catch(error){
            console.log(error)
            setLoading(false)
        }
    }
    useEffect(()=>{
        if(location.pathname.includes('blogs')){
            apiCallForBlog()
        }
    },[location.pathname])
    return(
        <>
        <Header/>
        {loading?(<Loader/>):(
            <div>
                {singleData?(
        <div className="wrapper items-center flex flex-col w-full">
            
            <div className='flex w-[600px] gap-1 mt-4'>
                <button className='px-4 font-normal py-1 border border-slate-800 text-base rounded-md' onClick={()=>{navigate('/')}}>Back</button>
            </div>
            <div className="w-[600px]">
                <h1 className="text-lg font-semibold mb-2"><Link to={`/blogs/${singleData.id}`} className="font-semibold text-blue-800">{singleData.title}</Link></h1>
                <h1 className="text-sm">By {singleData.author} on <Link to={`/categories/${singleData.category.replaceAll(' ','-')}`} className="text-blue-500 decoration-blue-500 underline font-semibold">{singleData.category}</Link></h1>
                <h1 className="text-sm mb-2">Posted on {singleData.date}</h1>
                <p className="text-base mb-2">{singleData.content}</p>
                <div className="flex gap-x-2 underline font-semibold decoration-blue-500">{(singleData.tags).map((value,index)=>(<span key={index} className="text-sm text-blue-500"><Link to={`/tags/${value.replaceAll(' ','-')}`}>{value}</Link></span>))}</div>
            </div>    
        </div>
        ):('')}
        {relatedData?(
            <div className="items-center flex flex-col w-full">
                <h1 className="font-semibold text-xl mt-4">Related Blogs</h1>
                
                <div className="flex-1 py-4 flex flex-col items-center gap-y-6 overflow-y-auto scrollbar-hide">
                {relatedData?.map((obj)=>(<Blog key={obj.id} obj={obj}/>))}
                </div>
            </div>
        ):("")}
            </div>
        )}
        </>
    )
}
export default BlogPage