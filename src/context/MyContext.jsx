import { createContext,useState } from "react";


const MyContext=createContext()
export default MyContext

export function MyContextProvider({children}){
    
    const[loading,setLoading]=useState(false)
    const[totalPage,setTotalPage]=useState(null)
    const [data,setData]=useState([])
    async function apiCall(page=1, tag=null, category=null){
        setLoading(true);
        let url=`https://codehelp-apis.vercel.app/api/get-blogs?page=${page}`
        if(tag){
            url+=`&tag=${tag}`
        }
        if(category){
            url+=`&category=${category}`
        }
        
        try{
            let res=await fetch(url)
            let result=await res.json()
            setData(result)
            setLoading(false)
            setTotalPage(result.totalPages)
        }
        catch(error){
            console.log(error)
            setLoading(false)
        }
    }
    
    const value={loading,setLoading,apiCall,totalPage,data}
    return(
        <MyContext.Provider value={value}>
            {children}
        </MyContext.Provider>
    )

}