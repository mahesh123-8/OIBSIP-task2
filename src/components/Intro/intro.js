import React, { useRef } from "react";
import Example from '../../assets/pdfs/Cv.PDF';
import { ReactTyped } from "react-typed";
import { Link } from "react-scroll";
import contactImg from "../../assets/cell.png";
import btnImg from "../../assets/hireme.png";
import bg from "../../assets/character1.png";
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
    <section id="intro" className="flex flex-col items-center justify-center bg-blue-900 lg:flex-row mt-9 lg:h-screen">
     <div className="p-8 text-center lg:w-1/2 lg:text-left">
  <span className="hello">Hello,</span>
  <span className="introText">
    <ReactTyped
      strings={[
        "<span style='font-size: 1.5rem; color: black;' >I'm Mahesh</span> <br /> Frontend Developer"
      ]}
      typeSpeed={130}
      showCursor={false}
      // Add the html prop to enable HTML rendering
      html={true}
    />
  </span>

        <p className="text-lg font-semibold tracking-wide">
          Passionate web developer <br /> skilled in HTML5, CSS3, and JavaScript, <br /> committed to crafting engaging <br /> and interactive user experiences <br /> Continuously exploring the realms of web <br /> technologies and expanding my skill set with <br /> a focus on responsive design
        </p>
        <div className="w-[400px] flex flex-row">
          <button onClick={handleClick} className="h-[50px] w-[120px] mx-auto text-sm ml-[1px] mt-7 cursor-progress border border-yellow-300 rounded-lg hover:bg-green-800 hover:duration-700 lg:ml-0 justify-center mx-auto ">
            Download CV
          </button>
        </div>
      </div>

      <div className="p-8 lg:w-1/2 "  >
        <img
          src={bg}
          alt="Character"
          className="w-[400px] h-[400px] mx-auto mt-7 lg:mt-0"
          
        />
      </div>
    </section>
  );
};

export default Intro;
