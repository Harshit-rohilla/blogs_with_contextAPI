import { Link } from "react-router-dom"

function Blog({obj}){
    
    
    
    return(
        <>
        <div className="w-[600px]">
            <h1 className="text-lg font-semibold mb-2"><Link to={`/blogs/${obj.id}`} className="font-semibold text-blue-800">{obj.title}</Link></h1>
            <h1 className="text-sm">By {obj.author} on <Link to={`/categories/${obj.category.replaceAll(' ','-')}`} className="text-blue-500 decoration-blue-500 underline font-semibold">{obj.category}</Link></h1>
            <h1 className="text-sm mb-2">Posted on {obj.date}</h1>
            <p className="text-base mb-2">{obj.content}</p>
            <div className="flex gap-x-2 underline font-semibold decoration-blue-500">{(obj.tags).map((value,index)=>(<span key={index} className="text-sm text-blue-500"><Link to={`/tags/${value.replaceAll(' ','-')}`}>{value}</Link></span>))}</div>
        </div>
        </>
    )
}
export default Blog