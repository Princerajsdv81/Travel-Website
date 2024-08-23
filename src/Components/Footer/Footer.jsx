import React ,{useEffect} from 'react'

import video from "../../assets/Footer.mp4";
import { MdTravelExplore } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaTripadvisor } from "react-icons/fa";
import { BiCopyright } from 'react-icons/bi';
import { FiSend } from 'react-icons/fi';
import Aos from 'aos';
import "aos/dist/aos.css";
const Footer = () => {

  //lets create a hook to add scroll animation
useEffect(() =>{
  Aos.init({duration:2000})
    },[])
  return (
    <>
    <footer className='relative'>
      <video src={video} typeof='video/mp4' autoPlay loop muted className=' w-full h-auto z-5 object-cover'></video>
      <div className="absolute top-0 left-0 w-full h-full flex  flex-col justify-center items-center z-50 text-white" data-Aos="fade-up">
      <small className="mb-4 text-4xl font-bold">KEEP IN TOUCH</small>
     <div className="flex flex-row justify-center items-center font-semibold space-x-6 ">
      <h2 className='text text-[2rem] mb-3'>Travel with us</h2>
      <div className='gap-[1rem] flex  flex-row'>
      
      <input  type='text' name="email" placeholder='Enter email address' className='text-center border rounded-lg bottom-1 opacity-.5 outline-slate-400'></input>
      
      <button className='relative bg-blue-400 border rounded-[2rem] p-2 w-[8rem]'>SEND
      <FiSend className='absolute text-white my-[-1.2rem]  right-[1rem]'/>
      
      </button>
      
      </div>
     </div>
 {/* About us */}
 
 <section className='w-[90%] h-auto bg-white rounded-[2rem] text-black' >
 <MdTravelExplore className=' absolute cursor-pointer size-8 text-blue-300 my-[2.6rem] mx-5' />
<h1 className=' mx-[4rem] mt-[2rem] font-bold text-[2rem]'> Travel.</h1>

<div className='h-auto w-[50%] mx-6' data-Aos="fade-up">
  <p>Join us on a journey of discovery and adventure. Whether you're a seasoned traveler or embarking on your first trip, <i>INCREDIBLETOURS</i> is here to make your travel dreams a reality. Start exploring today and create memories that will last a lifetime.

<br/><br/>
Happy travels,
<br/>
The <i>INCREDIBLETOURS</i> Team</p>
<div className='flex flex-row space-x-3 mt-1' >
<FaTwitter  className='size-[1.5rem] hover:text-blue-500'/>
<FaYoutube className='size-[1.5rem] hover:text-blue-500'/>
<AiFillInstagram className='size-[1.5rem] hover:text-blue-500'/>
<FaTripadvisor className='size-[1.5rem] hover:text-blue-500'/>
</div>
</div>




 <section className='absolute  w-[40%] h-[10]  text-black font-semibold bg-red-500  left-[55%] '>
 <div className=' flex justify-between  absolute bottom-6'data-Aos="fade-up" >
 <div>
  <h1 className='mx-2 font-bold'>OUR AGENCY</h1>
  {/* If we want to add something before */}
 
   <ul className=" mt-3 m-2 space-y-3 ">
    <li className="before:content-['>'] hover:text-blue-500">Services</li>
    <li className="before:content-['>'] hover:text-blue-500">Insurance</li>
    <li className="before:content-['>'] hover:text-blue-500">Agency</li>
    <li className="before:content-['>'] hover:text-blue-500">Tourism</li>
    <li className="before:content-['>'] hover:text-blue-500">Payment</li>

   </ul>
   </div>
   <div>
  <h1 className='mx-2 font-bold'>PARTNER</h1>
  <ul className="  mt-3 m-2 space-y-3">
    <li className="before:content-['>'] hover:text-blue-500">Booking</li>
    <li className="before:content-['>'] hover:text-blue-500">RentalCar</li>
    <li className="before:content-['>']  hover:text-blue-500">HostelWorld</li>
    <li className="before:content-['>'] hover:text-blue-500">Trivago</li>
    <li className="before:content-['>'] hover:text-blue-500">TripAdvisor</li>

   </ul>
</div>

   <div >
  <h1 className='mx-2 font-bold'>LAST MINUTE</h1>
  <ul className=" mt-3 m-2 space-y-3 ">
    <li className="before:content-['>']  hover:text-blue-500 ">London</li>
    <li className="before:content-['>']  hover:text-blue-500">California</li>
    <li className="before:content-['>'] hover:text-blue-500">Indonesia</li>
    <li className="before:content-['>'] hover:text-blue-500">Europe</li>
    <li className="before:content-['>'] hover:text-blue-500">Oceania</li>

   </ul>
</div>

</div>

 </section>
 
 <div className='relative flex items-center w-full h-[2rem] bg-blue-300 mt-8 rounded-b-[2rem]'>
  <h1 className='m-6 p-1 font-bold text-white'>BEST TRAVEL WEBSITE THEME</h1>

{/* when we will use h1 then the icon automatic get to next line .so to prevent this we use span .since it is inline element */}
  <div className='absolute right-10 flex items-center'>
                <span className='text-white font-bold'>COPYRIGHTS RESERVED</span>
                <BiCopyright className='ml-1 text-white' />
              
 </div>
 </div>
     </section>
     </div>
     </footer>
    </>
  )
}

export default Footer