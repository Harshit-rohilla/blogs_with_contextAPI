import { useContext } from "react"
import MyContext from "../context/MyContext"

function Footer(){
    const{currentPage,totalPage,changeCurrentPage,apiCall}=useContext(MyContext)
    function prevClick(){
        changeCurrentPage((prev)=>{if(prev>1){return prev-1}else{return prev}})
        apiCall(currentPage)
    }
    function nextClick(){
        changeCurrentPage((prev)=>{if(prev<6){return prev+1}else{return prev}})
        apiCall(currentPage)
    }
    return(
        <>
        <div className="footer w-full py-2 flex justify-evenly border border-t-gray-300">
                <div>
                    <button onClick={prevClick} className="py-1 px-3 border border-black mr-2">Previous</button>
                    <button onClick={nextClick} className="py-1 px-3 border border-black ml-2">Next</button>
                </div>
                <div>Page {currentPage} of {totalPage}</div>
            </div>
        </>
    )
}
export default Footer