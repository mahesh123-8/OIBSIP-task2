import React from 'react'
import Portfolio1 from '../../assets/portfolio-1.png'
import Portfolio2 from '../../assets/portfolio-2.png'
import Portfolio3 from '../../assets/portfolio-3.png'
import Portfolio4 from '../../assets/portfolio-4.png'
import Portfolio5 from '../../assets/portfolio-5.png'
import Portfolio6 from '../../assets/portfolio-6.png'
import {Link} from 'react-scroll';



const poster = () => {
  return (

   
<section id='works'className='min-h-[calc(100vh-4rem)] w-full max-w-[60rem] flex flex-col items-center mt-2 mx-auto my-0 text-center px-4 py-[1rem] justify-center'>
  
  
<h2 className='mx-0 my-4  text-[3rem] font-bold'>My Porfolio</h2>
<span className='text-[300] text-md font-light m-2 flex '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos nesciunt quo vero fugiat blanditiis <br /> aliquid corrupti necessitatibus nulla. Quia sed aspernatur modi error repellendus libero excepturi ullam velit consectetur.</span>

<div className=" flex  justify-center items-center w-full mt-4 max-w-[65rem] flex-wrap" id='workImg'>
    <img src={Portfolio1} alt="" className='object-cover h-[20rem] m-[0.5rem] hover:opacity-75 hover:scale-105 transition-transform duration-300   ' />

    <img src={Portfolio2} alt="" className="object-cover h-[20rem] m-[0.5rem] hover:opacity-75 hover:scale-105 transition-transform duration-300 "/>
    <img src={Portfolio3} alt="" className="object-cover h-[20rem] m-[0.5rem] hover:opacity-75 hover:scale-105 transition-transform duration-300  "/>
    <img src={Portfolio4} alt="" className="object-cover h-[20rem] m-[0.5rem] hover:opacity-75 hover:scale-105 transition-transform duration-300"/>
    <img src={Portfolio5} alt="" className="object-cover h-[20rem] m-[0.5rem] hover:opacity-75 hover:scale-105 transition-transform duration-300 "/>
    <img src={Portfolio6} alt="" className="object-cover h-[20rem] m-[0.5rem] hover:opacity-75 hover:scale-105 transition-transform duration-300 "/>

</div>
<button className='px-[2rem] py-[0.5rem] font-semibold border-none rounded-full bg-white text-black mt-4  hover:bg-blue-400 hover:duration-700' id='btn' value='send'> See More.. </button>


</section>

)

}

export default poster;