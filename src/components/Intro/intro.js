import React from 'react';
import './intro.css';
import bg from '../../assets/mesh.jpg';
import {Link} from 'react-scroll';
import btnImg from '../../assets/hireme.png'; 
import contactImg from '../../assets/cell.png'

const Intro = () => {
  return (
   <section id="intro" >
<div className="introContent">
  <span className='hello'>Hello,</span>
  <span className="introText">I'm
  <span className="introName"> Mahesh</span><br/> Frontend Developer 
  </span>
<p className='introPara'>hello i'm junior frontend developer who have some techni <br /> Lorem, asnseq paerat deleniti nostrum soluta harum?..</p>
<div className='h-[100px] mx- rounded-full'>
  <img src={contactImg} alt="" className='h-[200px] rounded-b-full   ' />
</div>
<Link>
 
<button className='flex items-center  mr-2 bg-white rounded-md h-7 ml-[61px]'>
    <img src={btnImg} alt='hire me' className='object-cover w-4 h-4 mx-1' />
    <span className='text-sm font-light text-black bg-white rounded-full hover:bg-green-500'>Hire Me</span>
  </button></Link>



</div>

<img src={bg} alt="" className='absolute top-[-1rem] right-0 mr-[200px] flex z-[-2] h-[400px] rounded-b-full shadow-lg shadow-purple-500 hover:opacity-75 hover:scale-105 transition-transform duration-300' />
 


   </section>
   
  )
}

export default Intro;
