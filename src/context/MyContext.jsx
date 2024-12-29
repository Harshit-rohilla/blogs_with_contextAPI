import { createContext,useState } from "react";


const MyContext=createContext()
export default MyContext

export function MyContextProvider({children}){
    const[loading,setLoading]=useState(false)
    const[currentPage,changeCurrentPage]=useState(1)
    const[totalPage,setTotalPage]=useState(null)
    const [data,setData]=useState([])
    async function apiCall(currentPage=1){
        setLoading(true);
        try{
            let res=await fetch(`https://codehelp-apis.vercel.app/api/get-blogs?page=${currentPage}`)
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
    
    const value={loading,setLoading,currentPage,changeCurrentPage,apiCall,totalPage,data}
    return(
        <MyContext.Provider value={value}>
            {children}
        </MyContext.Provider>
    )

}