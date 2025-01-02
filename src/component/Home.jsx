import Header from "./Header"
import Loader from "./Loader"
import Footer from "./Footer"
import Blogs from "./Blogs"
import { useContext } from "react"
import MyContext from "../context/MyContext"
function Home(){
    const{loading}=useContext(MyContext)
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
export default Home