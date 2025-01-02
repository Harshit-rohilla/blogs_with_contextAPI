import Header from './Header'
import Footer from './Footer'
import Blogs from "./Blogs"
import Loader from './Loader'
import { useNavigate, useLocation } from 'react-router-dom'
import { useContext } from 'react'
import MyContext from '../context/MyContext'
function TagPage(){
    const{loading}=useContext(MyContext)
    const navigate=useNavigate();
    const location=useLocation();
    return(
        <>
        <div className="wrapper items-center flex flex-col h-screen w-full">
            <Header/>
            <div className='flex w-[600px] gap-1 mt-4'>
                <button className='px-4 font-normal py-1 border border-slate-800 text-base rounded-md' onClick={()=>{navigate('/')}}>Back</button>
                <span className='font-semibold text-lg'>Blogs Tagged #{location.pathname.split('/').at(-1).replaceAll('-',' ')}</span>
            </div>
            {loading?(<Loader/>):(<Blogs/>)}
            <Footer/>
        </div>
        </>
    )
}
export default TagPage