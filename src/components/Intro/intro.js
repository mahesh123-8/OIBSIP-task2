import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect, useRef } from "react";
import bg from "../../assets/character1.png";
import Example from "../../assets/pdfs/Cv.PDF";
import "./intro.css";
const Intro = () => {
  const anchorRef = useRef(null);
  const handleClick = (e) => {
    e.preventDefault();
    const link = document.createElement("a");
    link.href = Example;
    link.download = "Example.pdf";
    link.click();
  };

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 300,
    });
  }, []);

  return (
    <section
      id="intro"
      className="flex flex-col items-center justify-center bg-blue-900 lg:flex-row mt-9 lg:h-screen"
    >
      <div
        className="p-8 text-center lg:mt-8 lg:w-1/2 lg:text-left"
        data-aos="fade-down"
      >
        <span className="flex text-5xl font-extrabold text-center ml-[8rem] lg:font-extrabold lg:text-6xl lg:ml-[0] text-green-30 md:ml-[0]">
          Hello,
        </span>
        <span className="flex flex-row ml-[6rem] text-3xl font-extrabold  text-green-300 lg:ml-[0] lg:text-6xl md:ml-[0]">
          I'm Mahesh
        </span>{" "}
        <span className="flex  ml-8 text-3xl font-extrabold  text-center text-green-300 lg:ml-[0] lg:text-6xl md:ml-[0]">
          Frontend Developer
        </span>
        <p className="flex  mx-auto lg:text-lg font-semibold tracking-wide md:mr-[]">
          Passionate web developer skilled in <br /> HTML5, CSS3, and
          JavaScript, committed to crafting engaging and interactive user
          experiences Continuously exploring the realms <br /> of web technologies and
          expanding my skill set <br /> with a focus on responsive design.
        </p>
        <div className="w-[400px] flex flex-row">
          <button
            onClick={handleClick}
            className="h-[50px] w-[120px] mx-auto text-sm lg:ml-[1px] mt-7 cursor-progress border border-yellow-300 rounded-lg hover:bg-green-800 hover:duration-700 lg:ml-0 justify-center mx-auto "
          id="btn"
          >
            Download CV
          </button>
        </div>
      </div>

      <div className="p-8 lg:w-1/2 " id="hero3">
        <img
          src={bg}
          alt="Character"
          className="w-[400px] h-[400px] mx-auto mt-7 lg:mt-0"
          data-aos="fade-left"
        />
      </div>
    </section>
  );
};

export default Intro;
