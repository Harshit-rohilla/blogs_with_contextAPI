import { useContext } from "react"
import MyContext from "../context/MyContext"
import {useSearchParams } from "react-router-dom"

function Footer(){
    const [searchParam,setSearchParams]=useSearchParams()
    const{totalPage,apiCall}=useContext(MyContext)
    function prevClick(){
        const page=searchParam.get('page')??1
        const toSet=Number(page)-1
        if(Number(page)>1){
            setSearchParams({page:`${toSet}`})
        }
    }
    function nextClick(){
        const page=searchParam.get('page')??1
        const toSet=Number(page)+1
        if(Number(page)<totalPage){
            setSearchParams({page:`${toSet}`})
        }
    }
    return(
        <>
        <div className="footer w-full py-2 flex justify-evenly border border-t-gray-300">
                <div>
                    <button onClick={prevClick} className="py-1 px-3 border border-black mr-2">Previous</button>
                    <button onClick={nextClick} className="py-1 px-3 border border-black ml-2">Next</button>
                </div>
                <div>Page {searchParam.get('page')?Number(searchParam.get('page')):1} of {totalPage}</div>
            </div>
        </>
    )
}
export default Footer