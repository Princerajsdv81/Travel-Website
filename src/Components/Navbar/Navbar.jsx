import React ,{ useState } from 'react'
import { MdTravelExplore } from "react-icons/md";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";

 
const Navbar = () => {
   const [active,setActive]=useState(false)

   //funtion for toggle navbar
   const toggleNav = () => {
      setActive(true);
    };

    //function to remove navBar
    const removeNavbar=()=>{
      setActive(false)
    }

  return (
    <section className='fixed   top-0 left-0 w-full px-6 md:px-6 py-4 md:py-6 shadow-gray-500 shadow-sm bg-white z-50'>
    <header className='relative flex items-center justify-between h-[4rem]  bg-gray-100 shadow-gray-500 shadow-md'>
      <div className='flex items-center '>
        <MdTravelExplore className='cursor-pointer text-2xl md:text-3xl text-blue-300' />
        <h1 className='font-extrabold text-xl md:text-2xl ml-2'>Travel.</h1>
        </div>
        <div className="flex items-center">
        <TbGridDots className='text-3xl text-blue-300 cursor-pointer hover:bg-slate-500 md:hidden' onClick={toggleNav} />
        </div>
     
   
      

      <div className={`fixed md:static top-0 right-0 md:flex md:items-center md:justify-between w-full md:w-auto h-screen md:h-auto    bg-gray-100 transition-transform duration-300 ease-in-out ${active ? 'translate-x-0' : 'translate-x-full md:translate-x-0'}`}>
        <ul className="flex flex-col md:flex-row justify-center items-center md:w-auto mt-16 md:mt-0 space-y-4 md:space-y-0 md:space-x-6 ">
          <li className='cursor-pointer hover:bg-slate-200 rounded-full px-3 py-1 md:px-0 md:py-0'>
            <a href='#' className='text-black'>Home</a>
          </li>
          <li className='cursor-pointer hover:bg-slate-200 rounded-full px-3 py-1 md:px-0 md:py-0'>
            <a href='#' className='text-black'>Packages</a>
          </li>
          <li className='cursor-pointer hover:bg-slate-200 rounded-full px-3 py-1 md:px-0 md:py-0'>
            <a href='#' className='text-black'>Shop</a>
          </li>
          <li className='cursor-pointer hover:bg-slate-200 rounded-full px-3 py-1 md:px-0 md:py-0'>
            <a href='#' className='text-black'>About</a>
          </li>
          <li className='cursor-pointer hover:bg-slate-200 rounded-full px-3 py-1 md:px-0 md:py-0'>
            <a href='#' className='text-black'>Pages</a>
          </li>
          <li className='cursor-pointer hover:bg-slate-200 rounded-full px-3 py-1 md:px-0 md:py-0'>
            <a href='#' className='text-black'>News</a>
          </li>
          <li className='cursor-pointer hover:bg-slate-200 rounded-full px-3 py-1 md:px-0 md:py-0'>
            <a href='#' className='text-black'>Contact</a>
          </li>
          <button className='bg-blue-300 rounded-full px-3 py-1  md:px-3 md:py-1 cursor-pointer border-none font-semibold text-white'>
            <a href='#'>BOOK NOW</a>
          </button>
        </ul>
      
        <div className='absolute top-4 right-4 md:hidden' onClick={removeNavbar}>
          <AiFillCloseCircle className='text-blue-300 text-3xl  cursor-pointer' />
        </div>
      </div>
      </header>
     
  </section>








    // Navbar
  
//     <section className='fixed  top-0 left-0  w-full  px-16 py-6  shadow-gray-500 shadow-sm bg-white z-50'>
//      <header className=' relative flex items-center justify-between bg-white  shadow-gray-500 shadow-md'>
//         <div className=' left-[10%] top-[4rem] '>
//            <a href='#' className='flex items-center space-x-1'>
//            <MdTravelExplore className='cursor-pointer size-8 text-blue-300' />
//            <h1 className='font-extrabold text-[2rem] '>Travel.</h1>
//            </a>
//         </div>

//     <div className={`absolute bg-white h-max w-[30%] rounded-[1rem] top-[6rem] left-[70%] mt-[2rem] z-50 shadow-gray-500 shadow-2xl transition-transform duration-300 ease-in-out ${
//             active ? 'translate-y-0' : 'translate-y-[-200%]'
//           }`}
//         >
//    <ul className="flex flex-col justify-center items-center w-[100%] m-auto px-[.5rem] font-semibold ">
//     <li className='px-[.5rem] py-2 cursor-pointer hover:bg-slate-100 rounded-[2rem]'>
//        <a href='#' className='px-[.5rem] text-black size-[.9rem]  ' ></a> Home
//        </li>
//     <li className='px-[.5rem] py-2  cursor-pointer  hover:bg-slate-100 rounded-[2rem]'>
//     <a href='#' className='px-[.5rem] text-black size-[.9rem]  '></a>Packages
//     </li>
//     <li className='px-[.5rem] py-2 cursor-pointer  hover:bg-slate-100 rounded-[2rem]'>
//     <a href='#' className='px-[.5rem] text-black size-[.9rem] ' ></a>Shop
//     </li>
//     <li className='px-[.5rem] py-2 cursor-pointer  hover:bg-slate-100 rounded-[2rem]'>
//     <a href='#' className='px-[.5rem] text-black size-[.9rem] '></a>About
//     </li>
//     <li className='px-[.5rem] p-3 cursor-pointer  hover:bg-slate-100 rounded-[2rem]'>
//     <a href='#' className='px-[.5rem] text-black size-[.9rem] '></a>Pages
//     </li>
//     <li className='px-[.5rem] py-2 cursor-pointer  hover:bg-slate-100 rounded-[2rem]'>
//     <a href='#' className='px-[.5rem] text-black size-[.9rem] '></a>News
//     </li>
//     <li className='px-[.5rem] py-2 cursor-pointer  hover:bg-slate-100 rounded-[2rem]'>
//     <a href='#' className='px-[.5rem] text-black size-[.9rem] '></a>Contact
//     </li>

//     <button className='bg-blue-300 rounded-[3rem] px-[.7rem] py-[1rem] cursor-pointer border-none font-semibold mt-[.5rem] mb-[1rem] text-white '>
//      <a href='#' className=' '></a>BOOK NOW
//      </button>
//    </ul>

// <div className='absolute top-[1rem] right-3'  onClick={removeNavbar} >
// <AiFillCloseCircle  className='text-blue-300  font-[2rem] cursor-pointer  size-8 ' />
// </div>
//     </div>

//      <div className=" flex items-center place-content-end w-[100%] top-[4rem]s" >
//      <TbGridDots  className='font-[2rem] text-blue-300 cursor-pointer hover:bg-slate-500 size-8' onClick={toggleNav}/>

//      </div>
//      </header>

//     </section>
  )
}

export default Navbar