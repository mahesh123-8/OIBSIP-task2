import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect, useRef } from "react";
import bg from "../../assets/character1.png";
import Example from "../../assets/pdfs/Cv.PDF";
import "./intro.css";
import git from "../../assets/git.png";
import insta from "../../assets/insta.png";
import email from "../../assets/email.png";
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
        className="p-8 text-center lg:mt-8 lg:w-1/2 lg:text-left "
        data-aos="fade-down"
        id="repeat"
      >
        <span className="flex text-3xl font-extrabold text-center ml-[10rem] lg:font-extrabold lg:text-6xl lg:ml-[0] md:ml-[0] ">
          Hello,
        </span>
        <span className="flex flex-row ml-[8rem] text-2xl font-extrabold  text-green-300 lg:ml-[0] lg:text-6xl md:ml-[0]">
          I'm Mahesh
        </span>{" "}
        <span className="flex flex-row ml-[5rem] text-2xl font-extrabold  text-green-300 lg:ml-[0] lg:text-5xl md:ml-[0] ">
         Frontend Developer
        </span>
        
        <div className="">
        <p className=" text-lg font-bold p-[3rem]  lg:p-[0] ">
      BCA graduate from Silver Oak  University with
      a CGPA of 8.80. Passionate about web development, I have honed my skills in
      HTML, CSS, JavaScript, Tailwind, and React. My commitment to continuous
      learning drives me to stay updated with industry trends, ensuring I
      deliver high-quality solutions. Excited to contribute my expertise to
      dynamic projects and  collaborate with like-minded professionals.
    </p>
    {/* <p className="text-lg text-white lg:text-2xl " data-aos="fade-down">
          My proficiency in HTML, CSS, and JavaScript forms the cornerstone of
          my technical skill set, while my hands-on experience with Tailwind and
          React reflects my commitment to embracing modern web development
          practices. These technologies empower me to create visually appealing
          and responsive user interfaces, ensuring an enhanced user
          experience.Beyond technical expertise, I bring a collaborative and
          adaptable mindset to team environments. Whether working on individual
          projects or contributing to group efforts, I thrive on communication
          and teamwork, valuing diverse perspectives that foster innovation.
        </p> */}
    </div>
        <div className="w-[400px] flex flex-row">
          <button
            onClick={handleClick}
            className="h-[50px] w-[120px]  mx-auto text-sm lg:ml-[1px] lg:mt-7 mt-4 cursor-progress border border-yellow-300 rounded-lg hover:bg-green-800 hover:duration-700 lg:ml-0 justify-center mx-auto "
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

      <div></div>
    </section>
  );
};

export default Intro;
