import { useContext, useEffect } from "react"
import Header from "./component/Header"
import Footer from "./component/Footer"
import Blogs from "./component/Blogs"
import MyContext from "./context/MyContext"
import Loader from "./component/Loader"
function App(){
    const{apiCall,loading}=useContext(MyContext)
    useEffect(()=>{
        apiCall();
    },[])
    return(
        <>
        <div className="wrapper flex flex-col h-screen w-full">
        <Header/>
        {loading?(<Loader/>):(<Blogs/>)}
        <Footer/>
        </div>
        
        </>
    )
}
export default App