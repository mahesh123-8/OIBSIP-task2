import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import tailwind from "../../assets/Tailwind CSS.png";
import css from "../../assets/css-3.png";
import html from "../../assets/html-5.png";
import js from "../../assets/js.png";
import react from "../../assets/react.png";
import './style.css'
const Skillsss = () => {
 
  return (
    <section className="w-full mx-auto">
      <h1 className="text-4xl font-bold text-center underline ">
        My Skills
      </h1>
      <div className="grid grid-cols-1 gap-5 mx-auto md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 w-[900px] mt-8 " id="new">
    <div className="flex flex-col items-center my-2 font-bold transition-transform duration-300 bg-blue-900 rounded-md shadow-lg hover:opacity-75 hover:scale-105" >
      <img src={html} alt="Round Image 1" className="w-24 h-24 mt-4 rounded-md" />
      <p className="mt-4 text-sm text-center text-white">
            HTML5 is the latest version of the HyperText Markup Language,
            introducing semantic  elements, multimedia support. It
            facilitates the development of modern, responsive web applications
            with improved offline capabilities.
          </p>
          <button className="h-[40px] mt-[70px]  font-bold mb-3 text-black bg-white rounded-md w-[120px] text-sm " type="btn" id="btn1">Read More..</button>
        </div>

        <div className="flex flex-col items-center my-2 font-bold transition-transform duration-300 bg-blue-900 rounded-md shadow-lg hover:opacity-75 hover:scale-105">          <img
            src={css}
            alt="Round Image 2"
            className="w-24 h-24 mt-4 rounded-md"
          />
          <p className="mt-4 text-sm text-center text-white ">
            CSS3, or Cascading Style Sheets level 3, is the latest iteration of
            the styling language for web development. It introduces advanced
            styling features such as transitions, animations,  gradients,
            shadows, and flexible box  and grid layout systems.
          </p>
          <button className="h-[40px] mt-[50px]  font-bold  mb-3 text-black bg-white rounded-md w-[120px] text-sm " type="btn" id="btn1">Read More..</button>

        </div>

        <div className="flex flex-col items-center my-2 font-bold transition-transform duration-300 bg-blue-900 rounded-md shadow-lg hover:opacity-75 hover:scale-105">          <img
            src={js}
            alt="Round Image 3"
            className="w-24 h-24 mt-4 rounded-md"
          />
          <p className="mt-4 text-sm text-center text-white">
            JavaScript is a versatile, high-level programming language primarily
            used for front-end web development. It enables dynamic content,
            interactivity, and manipulation of the Document Object Model (DOM){" "}
            <br />
            in browsers.
          </p>
          <button className="h-[40px] mt-[50px]   font-bold mb-3 text-black bg-white rounded-md w-[120px] text-sm " type="btn" id="btn1">Read More..</button>

        </div>

        <div className="flex flex-col items-center my-2 font-bold transition-transform duration-300 bg-blue-900 rounded-md shadow-lg hover:opacity-75 hover:scale-105"> 
                 <img
            src={tailwind}
            alt="Round Image 3"
            className="w-24 h-24 mt-4 rounded-md"
          />
          <p className="mt-4 text-sm text-center text-white ">
            it is a utility-first CSS framework that simplifies and speeds up
            the process of styling web applications by providing a set of
            pre-defined utility classes. Tailwind allows for rapid development <br />
            with a highly customizable.
          </p>
          <button className="h-[40px] mt-[40px]  font-bold mb-3 text-black bg-white rounded-md w-[120px] text-sm " type="btn" id="btn1">Read More..</button>

        </div>
        <div className="flex flex-col items-center my-2 font-bold transition-transform duration-300 bg-blue-900 rounded-md shadow-lg hover:opacity-75 hover:scale-105"> 
                 <img
            src={react}
            alt="Round Image 3"
            className="w-24 h-24 mt-4 rounded-md "
          />
          <p className="mt-4 text-sm text-center text-white">
            React is a JavaScript library for building user interfaces,
            developed by Facebook. It enables developers to create interactive
            and efficient UI components through a declarative and <br />{" "}
            component-based approach.
          </p>
          <button className="h-[40px] mt-[40px] font-bold mb-3 text-black bg-white rounded-md w-[120px] text-sm " type="btn" id="btn1">Read More..</button>

        </div>
        </div>
    </section>
  );
};

export default Skillsss;
