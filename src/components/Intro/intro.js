import React, { useRef } from "react";
import Example from '../../assets/pdfs/Cv.PDF';
import { ReactTyped } from "react-typed";
import { Link } from "react-scroll";
import contactImg from "../../assets/cell.png";
import btnImg from "../../assets/hireme.png";
import bg from "../../assets/mesh.jpg";
import "./intro.css";

const Intro = () => {
  const anchorRef = useRef(null);
  const handleClick = (e) => {
    e.preventDefault();
    const link = document.createElement('a');
    link.href=Example;
    link.download='Example.pdf';
    link.click();
  }
  return (
    <section id="intro" className="relative">
      
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          <ReactTyped strings={["I'm <span className=' introName'>Mahesh</span> <br /> Frontend Developer"]} typeSpeed={40} loop />
        </span>
        <p className="text-lg font-semibold tracking-wide">
        "I am a passionate and results-driven professional with a background in [IT/BCA]. <br /> Known for my [HTMl CSS js Reactjs], I thrive in dynamic environments and excel <br /> in [Grocery Website]. With a commitment to continuous learning, <br /> I am always seeking new opportunities to expand my knowledge and contribute <br /> to innovative projects." 
        </p>
        {/* <button onClick={handleClick} className="h-[50px] mx-auto text-sm  mt-7 w-[10rem] cursor-progress border border-yellow-300 bg-blue-500 rounded-lg  hover:bg-green-800 hover:duration-700">
      Download CV
    </button> */}
    <div className=" w-[400px] flex flex-row ">
        <button onClick={handleClick} className="h-[50px] mx-auto text-sm ml-4  mt-7 w-[10rem] cursor-progress border border-yellow-300 bg-blue-500 rounded-lg  hover:bg-green-800 hover:duration-700">
      Download CV
    </button>
    <button onClick={handleClick} className="h-[50px] mx-auto text-sm ml-4  mt-7 w-[10rem] cursor-progress border border-yellow-300 bg-blue-500 rounded-lg  hover:bg-green-800 hover:duration-700">
      Hire Me
    </button>
   </div>
   </div>

      <img
        src={bg}
        alt=""
        id="img-intro"
        className="absolute top-[-1rem] right-0 mr-[200px] flex z-[-2] h-[400px] rounded-b-full shadow-2xl shadow-black hover:opacity-75 hover:scale-105 transition-transform duration-300 "
      />
      
    

    </section>
  );
};

export default Intro;
