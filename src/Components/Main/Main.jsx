import React ,{useEffect} from 'react'
import { GrLocation } from "react-icons/gr";
import { HiOutlineClipboardCheck } from "react-icons/hi";
// import images from '../../assets/images'; //to keep code clean and concise
import boraBora from '../../assets/Bora Bora.jpg'
import machuPicchu from '../../assets/Machu Picchu.jpg'
import greatBarrierReef from '../../assets/Great Barrier Reef.jpg'
import cappadocia from '../../assets/Cappadocia.jpg'
import guanajuato from '../../assets/Guanajuato.jpg'
import cinqueTerre from '../../assets/Cinque terre.jpg'
import ankorWat from '../../assets/Angkor Wat.jpg'
import tajMahal from '../../assets/Taj Mahal.jpg'
import baliIsland from '../../assets/Bali Island.jpg'
import Aos from 'aos';
import "aos/dist/aos.css";

const Data=[
  {
    id:1,
    imgSrc:boraBora,
    destTitle:'Bora Bora',
    location:'New Zealand',
    fees:'$700',
    discription:`Bora Bora is located in the South Pacific roughly halfway between Australia and Chile. It’s the jewel in the crown of French Polynesia.
    Bathed in the warm waters of the South Pacific and world renowned for the beauty of its mountain scenery.`
  },
  {
    id:2,
    imgSrc:machuPicchu,
    destTitle:'Machu Picchu',
    location:'Peru',
    // grade:'CULTURAL RELAX',
    fees:'$600',
    discription:`Machu Picchu is an Incan citadel set high in the Andes Mountains in Peru, above the Urubamba River valley. Built in the 15th century and later abandoned,it’s renowned for its  dry-stone walls that fuse huge blocks without the use of mortar.`
  },
  {
    id: 3,
    imgSrc: greatBarrierReef,
    destTitle: 'Great Barrier Reef',
    location: 'Australia',
    fees: '$500',
    discription: `The Great Barrier Reef is a site of remarkable variety and beauty on the north-east coast of Australia. It contains the world’s largest collection of coral reefs, with 400 types of coral, 1,500 species of fish and 4,000 types of mollusc.`
  },
  {
    id: 4,
    imgSrc: cappadocia,
    destTitle: 'Cappadocia',
    location: 'Turkey',
    fees: '$450',
    discription: `Cappadocia is a region in central Turkey, standing as a testament to nature’s artistic prowess and human ingenuity. Its surreal landscape, sculpted over millennia by volcanic eruptions and erosion, is a spectacle unlike any other.`
  },
  {
    id: 5,
    imgSrc: guanajuato,
    destTitle: 'Guanajuato',
    location: 'Mexico',
    fees: '$400',
    discription: `Guanajuato is a city in central Mexico. It's known for its silver mining.The Ruta de Aventura connects ghost towns and abandoned mines with natural areas for hiking, mountain biking and ATV as well as other extreme sports  such as paragliding. `
  },
  {
    id: 6,
    imgSrc: cinqueTerre,
    destTitle: 'Cinque Terre',
    location: 'Italy',
    fees: '$350',
    discription: `The Cinque Terre are a coastal area of Italy. It lies in the west of La Spezia Province, and comprises five villages. The villages are all surrounded by vineyards and offer stunning views of the Ligurian Sea. They also offer the best sunset views.`
  },
  {
    id: 7,
    imgSrc: ankorWat,
    destTitle: 'Angkor Wat',
    location: 'Cambodia',
    fees: '$300',
    discription: `Angkor Wat is a Hindu-Buddhist temple complex in Cambodia. Located on a site measuring 162.6 hectares within the ancient Khmer capital city of Angkor, it is considered the largest religious structure in  Guinness World Records.`
  },
  {
    id: 8,
    imgSrc: tajMahal,
    destTitle: 'Taj Mahal',
    location: 'India',
    fees: '$200',
    discription: `The Taj Mahal is an ivory-white marble mausoleum on the right bank of the river Yamuna in Agra, Uttar Pradesh, India. It was commissioned in 1631 by the fifth Mughal emperor, Shah Jahan to house the tomb of his beloved wife, Mumtaz Mahal.`
  },
  {
    id: 9,
    imgSrc: baliIsland,
    destTitle: 'Bali Island',
    location: 'Indonesia',
    fees: '$150',
    discription: `Bali is a province of Indonesia and the westernmost of the Lesser Sunda Islands. Bali is home to some of the most beautiful beaches in the world. The iconic Kuta beach is famous for its stunning sunsets.They have many historic temples and rice fields. `
  }

];
const Main = () => {
//lets create a hook to add scroll animation
useEffect(() =>{
  Aos.init({duration:2000})
    },[])

  return (
    <>
      {/* For most Visited distinations */}

      <section data-Aos="fade-up" className="bg-slate-100 ">
        <div >
          <h1 data-Aos="fade-right" className='font-bold text-[1.5rem] px-[1rem] md:px-[10rem] py-[1rem] text-center md:text-left'>Most visited <span className='underline decoration-blue-400 '>destinations</span></h1>
        </div>
        {/* For multiple cards  - flex-wrap to wrap card below one another*/}
        <div className='flex flex-wrap  justify-start  items-stretch border border-black h-auto w-full px-[1rem] md:px-[6rem]  py-[2rem] space-x-0 md:space-x-2' >
          
        {/* code more concise and efficient, you can use the map function to iterate over the Data array and generate the cards dynamically  */}
        {Data.map((item)=>(
                 
                 
 // Item Width: Each item is given a width of 30% to fit three items per row. thats why i used basis
            <div key={item.id}
             className='w-full md:w-[30%] h-[50%]   border-gray-500 border-[2px] rounded-xl space-x-4  bg-slate-200 mt-0 mb-4 p-5 '>
          <img src={item.imgSrc} alt={item.destTitle} className='h-[200px] md:h-[37.3vh] w-full rounded-lg'/>
              <h1 className='font-semibold text-center md:text-left'>{item.destTitle}</h1>
              <div className='flex justify-center md:justify-start flex-row '>
                <GrLocation className='text-black mt-1' />
                <span className='mx-1 font-light'>{item.location}</span>
              </div>
              {/* Flexbox for horizontal alignment */}
              <div className='flex items-center justify-center  border-t-2 border-gray-200  border-b-2 '>
                <div >
                <h1>CULTURAL</h1>
                <h1>RELAX</h1> 
                </div>
                <button className='border rounded-xl bg-blue-400'>INC+</button>
                <span className='ml-auto text-[1.3rem] font-bold'>{item.fees}</span>
               
              </div>
              <div className="text-center md:text-left px-2">
                <p>{item.discription}
                </p>
                <button className='relative bg-blue-500 w-[6rem] h-[2rem] rounded-2xl  mt-6 mb-2'>Details
                <HiOutlineClipboardCheck className='absolute text-black my-[-1.2rem] mx-1 left-[4.4rem]'/>
                </button>
              </div>
            </div>

        )) }
        </div>
       </section>
       </>

      )





{/*Old way of code -----------------------------------------------------------------------------------------------------
          {/* First card */}
          {/* 
          <div className='flex flex-row space-x-4'>

            <div className='h-[60%] w-[60%] border border-red-600 space-x-2 '>
              <img src={Data[0].imgSrc} alt={Data[0].destTitle} className='h-[37.3vh] w-full'/>
              <h1 className='font-semibold'>{Data[0].destTitle}</h1>
              <div className='flex flex-row'>
                <GrLocation className='text-black mt-1' />
                <span className='mx-1 font-light'>{Data[0].location}</span>
              </div>

              <div className='border-t-2 border-gray-200  border-b-2 '>
                <h1>CULTURAL<br />RELAX <button className='border rounded-xl bg-blue-400 '>INC+ </button>
                <span className='mx-[6rem] text-[1.3rem] font-bold'>{Data[0].fees}</span>
                </h1>
              </div>
                          */}

              {/* for detail about the visiting place */}
               {/*
              <div>
                <p>{Data[0].discription}
                </p>
                <button className='bg-blue-500 w-[6rem] h-[2rem] rounded-2xl  mt-6 mb-2'>Details</button>
              </div>


            </div>

            {/* for second card */}
             {/*
            <div className='h-[60%] w-[60%] border border-red-600 space-x-2 '>
              <img src={Data[1].imgSrc} alt={Data[1].destTitle} className='h-[37.3vh] w-full' />
              <h1 className='font-semibold'>{Data[1].destTitle}</h1>
              <div className='flex flex-row'>
                <GrLocation className='text-black mt-1' />
                <span className='mx-1 font-light'>{Data[1].location}</span>
              </div>

              <div className='border-t-2 border-gray-200  border-b-2 '>
                <h1>CULTURAL<br />RELAX <button className='border rounded-xl bg-blue-400 '>INC+</button>
                <span className='mx-[6rem] text-[1.3rem] font-bold'>{Data[1].fees}</span>
                </h1>
              </div>


              {/* for detail about the visiting place */}
               {/*
              <div>
                <p>{Data[1].discription}
                </p>
                <button className='bg-blue-500 w-[6rem] h-[2rem] rounded-2xl  mt-6 mb-2'>Details</button>
              </div>


            </div>
            {/* for third card */}
             {/*
            <div className='h-[60%] w-[60%] border border-red-600 space-x-2 '>
          <img src={Data[2].imgSrc} alt=  {Data[2].destTitle} className='h-[37.3vh] w-full'/>
              <h1 className='font-semibold'>{Data[2].destTitle} </h1>
              <div className='flex flex-row'>
                <GrLocation className='text-black mt-1' />
                <span className='mx-1 font-light'>{Data[2].location}</span>
              </div>

              <div className='border-t-2 border-gray-200  border-b-2 '>
                <h1>CULTURAL<br />RELAX <button className='border rounded-xl bg-blue-400 '>INC+</button>
                <span className='mx-[6rem] text-[1.3rem] font-bold'>{Data[2].fees}</span>
                </h1>
              </div>


              {/* for detail about the visiting place */}
               {/*
              <div>
                <p>{Data[2].discription}
                </p>
                <button className='bg-blue-500 w-[6rem] h-[2rem] rounded-2xl  mt-6 mb-2'>Details</button>
              </div>


            </div>
          </div>

          <div className='flex flex-row space-x-4'>
            {/* for fourth card */}
             {/*
            <div className='h-[60%] w-[60%] border border-red-600 space-x-2 mt-4'>
              <img src={cappadocia} alt="Cappadocia" className='h-[37.3vh] w-full' />
              <h1 className='font-semibold'>Cappadocia</h1>
              <div className='flex flex-row'>
                <GrLocation className='text-black mt-1' />
                <span className='mx-1 font-light'>Turkey</span>
              </div>

              <div className='border-t-2 border-gray-200  border-b-2 '>
                <h1>CULTURAL<br />RELAX <button className='border rounded-xl bg-blue-400 '>INC+</button>
                <span className='mx-[6rem] text-[1.3rem] font-bold'>{Data[4].fees}</span>
                </h1>
              </div>


              {/* for detail about the visiting place */}
               {/*
              <div>
                <p>{Data[4].discription}
                </p>
                <button className='bg-blue-500 w-[6rem] h-[2rem] rounded-2xl  mt-6 mb-2'>Details</button>
              </div>
            </div>

            {/* for fifth card */}
             {/*
            <div className='h-[60%] w-[60%] border border-red-600 space-x-2 mt-4'>
              <img src={guanajuato} alt="Guanajuato" className='h-[37.3vh] w-full' />
              <h1 className='font-semibold'>Guanajuato</h1>
              <div className='flex flex-row'>
                <GrLocation className='text-black mt-1' />
                <span className='mx-1 font-light'>Maxico</span>
              </div>

              <div className='border-t-2 border-gray-200  border-b-2 '>
                <h1>CULTURAL<br />RELAX <button className='border rounded-xl bg-blue-400 '>INC+</button>
                <span className='mx-[6rem] text-[1.3rem] font-bold'></span>
                </h1>
              </div>


              {/* for detail about the visiting place */}
               {/*
              <div>
                <p>Guanajuato is a city in central Mexico. It's known for its silver mining history and colonial architecture. Its network of narrow streets, alleyways and tunnels is typified by the Callejón del Beso (Alley of the Kiss), so named because the balconies are close enough for a couple to reach across and kiss.
                </p>
                <button className='bg-blue-500 w-[6rem] h-[2rem] rounded-2xl  mt-6 mb-2'>Details</button>
              </div>
            </div>


            {/* for sixth card */}
             {/*
            <div className='h-[60%] w-[60%] border border-red-600 space-x-2 mt-4'>
              <img src={cinqueTerre} alt="Cinque terre" className='h-[37.3vh] w-full' />
              <h1 className='font-semibold'>Cinque Terre</h1>
              <div className='flex flex-row'>
                <GrLocation className='text-black mt-1' />
                <span className='mx-1 font-light'>Maxico</span>
              </div>

              <div className='border-t-2 border-gray-200  border-b-2 '>
                <h1>CULTURAL<br />RELAX <button className='border rounded-xl bg-blue-400 '>INC+</button>
                {/* <span className='mx-[6rem] text-[1.3rem] font-bold'>{Data[6].fees}</span> */}
                 {/*
                </h1>
              </div>


              {/* for detail about the visiting place */}
               {/*
              <div>
                <p>The Cinque Terre are a coastal area within Liguria, in the northwest of Italy. It lies in the west of La Spezia Province, and comprises five villages.The villages are all surrounded by vineyards and offer stunning views of the Ligurian Sea. They also offer the best sunset views!
                </p>
                <button className='bg-blue-500 w-[6rem] h-[2rem] rounded-2xl  mt-6 mb-2'>Details</button>
              </div>
            </div>
          </div>


          <div className='flex flex-row space-x-4'>
            {/* for 7th card */}
             {/*
            <div className='h-[60%] w-[60%] border border-red-600 space-x-2 mt-4'>
              <img src={ankorWat} alt="Angkor Wat" className='h-[37.3vh] w-full'/>
              <h1 className='font-semibold'>Angkor Wat</h1>
              <div className='flex flex-row'>
                <GrLocation className='text-black mt-1' />
                <span className='mx-1 font-light'>Cambodia</span>
              </div>

              <div className='border-t-2 border-gray-200  border-b-2 '>
                <h1>CULTURAL<br />RELAX <button className='border rounded-xl bg-blue-400 '>INC+</button>
                {/* <span className='mx-[6rem] text-[1.3rem] font-bold'>{Data[7].fees}</span> */}
                 {/*
                </h1>
              </div>


              {/* for detail about the visiting place */}
               {/*
              <div>
                <p>Angkor Wat is a Hindu-Buddhist temple complex in Cambodia. Located on a site measuring 162.6 hectares within the ancient Khmer capital city of Angkor, it is considered as the largest religious structure in the world by Guinness World Records.
                </p>
                <button className='bg-blue-500 w-[6rem] h-[2rem] rounded-2xl  mt-6 mb-2'>Details</button>
              </div>
            </div>

            {/* for 8th card */}
             {/*
            <div className='h-[60%] w-[60%] border border-red-600 space-x-2 mt-4'>
              <img src={tajMahal} alt="Taj Mahal" className='h-[37.3vh] w-full'/>
              <h1 className='font-semibold'>Taj Mahal</h1>
              <div className='flex flex-row'>
                <GrLocation className='text-black mt-1' />
                <span className='mx-1 font-light'>India</span>
              </div>

              <div className='border-t-2 border-gray-200  border-b-2 '>
                <h1>CULTURAL<br />RELAX <button className='border rounded-xl bg-blue-400 '>INC+</button>
                {/* <span className='mx-[6rem] text-[1.3rem] font-bold'>{Data[8].fees}</span> */}
                 {/*
                </h1>
              </div>


              {/* for detail about the visiting place */}
               {/*
              <div>
                <p>The Taj Mahal is an ivory-white marble mausoleum on the right bank of the river Yamuna in Agra, Uttar Pradesh, India. It was commissioned in 1631 by the fifth Mughal emperor, Shah Jahan to house the tomb of his beloved wife, Mumtaz Mahal.
                </p>
                <button className='bg-blue-500 w-[6rem] h-[2rem] rounded-2xl  mt-6 mb-2'>Details</button>
              </div>
            </div>
            {/* for 9th card */}
             {/*
            <div className='h-[60%] w-[60%] border border-red-600 space-x-2 mt-4'>
              <img src={baliIsland} alt="Bali Island" className='h-[37.3vh] w-full'/>
              <h1 className='font-semibold'>Bali Island</h1>
              <div className='flex flex-row'>
                <GrLocation className='text-black mt-1' />
                <span className='mx-1 font-light'>Indonesia</span>
              </div>
              <div className='border-t-2 border-gray-200  border-b-2 '>
                <h1>CULTURAL<br />RELAX <button className='border rounded-xl bg-blue-400 '>INC+</button>
                {/* <span className='mx-[6rem] text-[1.3rem] font-bold'>{Data[9].fees}</span> */}
                 {/*
                </h1>
              </div>
              {/* for detail about the visiting place */}
               {/*
              <div>
                <p>Bali is a province of Indonesia and the westernmost of the Lesser Sunda Islands.Bali is home to some of the most beautiful beaches in the world. The iconic Kuta beach is famous for its stunning sunsets and vibrant nightlife.
                </p>
                <button className='bg-blue-500 w-[6rem] h-[2rem] rounded-2xl  mt-6 mb-2'>Details</button>
              </div>
            </div>
                        

          </div>

        </div>

      </section>
      
    </>
    
  )*/}
}

export default Main