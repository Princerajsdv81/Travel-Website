import React ,{useEffect} from 'react'
import video from '../../assets/Background.mp4'; 
import { GrLocation } from "react-icons/gr";
import { HiFilter } from "react-icons/hi";
import { FiFacebook } from "react-icons/fi";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaTripadvisor } from "react-icons/fa";
import { BsListTask } from "react-icons/bs";
import { TbApps } from "react-icons/tb";
import Aos from 'aos';
import "aos/dist/aos.css";
const Home = () => {

  //lets create a hook to add scroll animation
  useEffect(() =>{
Aos.init({duration:2000})
  },[])
  return (
    <>
    
    <section className='relative flex  items-center justify-center m-auto mt-24 w-full h-screen' >
      <div className=' absolute h-auto w-full top-0 bottom-0  inset-0 bg-black mix-blend-hard-light opacity-25 z-5 '></div>
      <video src={video} typeof='video/mp4' autoPlay loop muted  className='absolute  top-0 bottom-0 object-cover w-full h-screen'></video>

      <div className= 'flex flex-col  items-stretch justify-center gap-6 w-full h-max px-4 md:px-10  py-[1.5rem] z-10'>
        <div className='font-serif text-center md:text-left'>
          <span className='text-2xl md:text-3xl text-white font-bold uppercase' data-Aos="fade-up">
            Our Packages
          </span>
          <h1 className='text-4xl md:text-5xl text-white font-extrabold'  data-Aos="fade-up">Search Your <span style={{ textDecorationColor: 'lightblue', textDecorationLine: 'underline' }}>Holiday</span></h1>
        </div>
        <div className=' relative flex flex-col md:flex-row justify-center items-center bg-white w-full md:w-auto h-auto  px-4  md:px-8 py-6 rounded-xl gap-6 '  data-Aos="fade-up">
          <div className='relative flex flex-col items-start justify-center'>
            <search>
            <label htmlFor="city" className='block mb-1 text-lg font-medium text-gray-700 '>Search your destination: </label><br/>
            <div className='relative w-full md:w-auto  '>
            <GrLocation className='absolute  left-3 top-1/2  transform -translate-y-1/2 text-black' />
            <input className='block h-10   w-full md:w-auto pl-10 pr-3 py-3 border-2 outline-none  border-gray-700 rounded-lg shadow-sm  focus:ring focus:ring-blue-400 focus:border-blue-500 bg-slate-100' type="text"
                   placeholder="Enter name here...."  /> 
                   </div>
                   </search>
              </div>
          <div className='relative flex flex-col items-start justify-center mt-0'>
            <label htmlFor="date" className='block mb-1 text-lg font-medium text-gray-700'>Select your date: </label><br/>
           
            <input className='block h-10 w-full md:w-auto pl-10 pr-3 py-3 border-2 outline-none  border-gray-700 rounded-lg shadow-sm  focus:ring focus:ring-blue-400 focus:border-blue-500 bg-slate-100' type="date"
                   placeholder="dd/mm/yyyy" /> 
              </div>         
          <div className='relative flex flex-col items-start justify-center mt-0'>
            <label htmlFor="price" className='block mb-1 text-lg font-medium text-gray-700 '>Max price: <span className='text-black font-semibold pb-[10px] m-12'>$5000</span></label>
             
            <input className='block h-10 w-full   md:w-[300px]  pl-10 pr-3 py-3 border-2 outline-none    border-gray-700 rounded-lg shadow-sm  focus:ring focus:ring-blue-400 focus:border-blue-500 bg-slate-100' type="range"
               min="1000" max="5000"/> 
             </div>
            

              <div className='absolute w-max bottom-[-4rem] flex items-center gap-4 px-[6px] py-[1.5rem] justify-center '>
              <HiFilter className='absolute left-5 size-5  top-1/2  transform -translate-y-1/2 text-black '/>
              <span className='bg-blue-400 rounded-3xl m-2 p-3 px-8 hover:bg-green-400'>MORE FILTERS</span>
              </div>
        </div>
        <div className="flex justify-between w-[100%]"  data-Aos="fade-up">
          <div className="flex flex-row space-x-2"  data-Aos="fade-up">
          <FiFacebook className ='size-8  mx-0 my-5 text-white font-semibold hover:bg-blue-500'/>
          <AiOutlineInstagram className ='size-8  mx-0 my-5 text-white font-semibold hover:bg-blue-500'/>
          <FaTripadvisor className ='size-8  mx-0 my-5 text-white font-semibold hover:bg-blue-500'/>
          </div>
          <div className='flex flex-row ' data-Aos="fade-up">
          <BsListTask className ='size-8  mx-0 my-5 text-white font-semibold hover:bg-blue-500 ml-2'/>
          <TbApps className ='size-8  mx-0 my-5 text-white font-semibold hover:bg-blue-500 ml-2'/>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Home