import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import tailwind from "../../assets/Tailwind CSS.png";
import css from "../../assets/css-3.png";
import html from "../../assets/html-5.png";
import js from "../../assets/js.png";
import react from "../../assets/react.png";
const Skillsss = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="w-full mx-auto">
      <h1 className="mx-auto text-4xl font-bold text-center underline">
        My Skills
      </h1>
      <Slider {...sliderSettings}>
        <div className="flex flex-col items-center bg-white  md:w-[300px] rounded-full shadow-lg shadow-blue-900 mx-2 my-2 sm:ml-4 sm:mt-4 h-[300px] mr-4 gap-5 hover:opacity-75 hover:scale-105 transition-transform duration-300">
          <img
            src={html}
            alt="Round Image 1"
            className="w-24 h-24 mt-4 rounded-md ml-[115px] "
          />
          <p className="mt-4 text-sm text-center">
            HTML5 is the latest version of the HyperText Markup Language,
            introducing semantic <br /> elements, multimedia support. It
            facilitates the development of modern, responsive web applications
            with improved <br /> offline capabilities.
          </p>
        </div>

        <div className="flex flex-col items-center  shadow-lg shadow-blue-900  bg-white sm:w-full  md:w-[300px] rounded-full mx-2 my-2 sm:mt-4 h-[300px] hover:opacity-75 hover:scale-105 transition-transform duration-300">
          <img
            src={css}
            alt="Round Image 2"
            className="w-24 h-24 mt-4 ml-[115px] rounded-md"
          />
          <p className="mt-4 text-sm text-center ">
            CSS3, or Cascading Style Sheets level 3, is the latest iteration of
            the styling language for web development. It introduces advanced
            styling features such as transitions, animations, <br /> gradients,
            shadows, and flexible box <br /> and grid layout systems.
          </p>
        </div>

        <div className="flex flex-col items-center bg-white sm:w-full  md:w-[300px] shadow-lg shadow-blue-900 h-[300px] rounded-full mx-2 my-2 sm:mr-4 sm:mt-4 hover:opacity-75 hover:scale-105 transition-transform duration-300">
          <img
            src={js}
            alt="Round Image 3"
            className="w-24 h-24 mt-4 ml-[115px] rounded-md"
          />
          <p className="mt-4 text-sm text-center">
            JavaScript is a versatile, high-level programming language primarily
            used for front-end web development. It enables dynamic content,
            interactivity, and manipulation of the Document Object Model (DOM){" "}
            <br />
            in browsers.
          </p>
        </div>

        <div className="flex flex-col items-center bg-white sm:w-full  md:w-[300px] shadow-lg shadow-blue-900 rounded-full mx-2 h-[300px] my-2 sm:mr-4 sm:mt-4 hover:opacity-75 hover:scale-105 transition-transform duration-300">
          <img
            src={tailwind}
            alt="Round Image 3"
            className="w-24 h-24 ml-[115px] mt-4 rounded-md"
          />
          <p className="mt-4 text-sm text-center ">
            it is a utility-first CSS framework that simplifies and speeds up
            the process of styling web applications by providing a set of
            pre-defined utility classes. Tailwind allows for rapid development <br />
            with a highly customizable.
          </p>
        </div>
        <div className="flex flex-col items-center shadow-lg shadow-blue-900 bg-white sm:w-full md:w-[300px]  rounded-full mx-2 h-[300px] my-2 sm:mr-4 sm:mt-4 hover:opacity-75 hover:scale-105 transition-transform duration-300">
          <img
            src={react}
            alt="Round Image 3"
            className="w-24 h-24 ml-[115px] mt-4 rounded-md"
          />
          <p className="mt-4 text-sm text-center ">
            React is a JavaScript library for building user interfaces,
            developed by Facebook. It enables developers to create interactive
            and efficient UI components through a declarative and <br />{" "}
            component-based approach.
          </p>
        </div>
      </Slider>
    </section>
  );
};

export default Skillsss;
