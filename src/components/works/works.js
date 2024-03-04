import React, { useEffect } from "react";
import Portfolio1 from "../../assets/hospital management.jpeg";
import Portfolio2 from "../../assets/grocery.jpeg";
import Portfolio3 from "../../assets/ecommer.jpeg";
import AOS from "aos";
import "aos/dist/aos.css";
const Poster = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 300,
    });
  }, []);
  return (
    <section
      id="works"
      className="min-h-[calc(100vh-4rem)] w-full max-w-[60rem] flex flex-wrap items-center mt-2 mx-auto my-0 text-center px-4 py-[1rem] justify-center"
    >
      <h2 className="mx-0 my-4  text-[3rem] font-bold underline text-green-300" data-aos="fade-down">
        My Work
      </h2>
      <span className="text-[300] text-lg text-bold font-light m-2 flex text-balance  hover:text-balance ">
        Developed innovative web solutions with a focus on user experience and
        responsive design. 💻 Leveraged HTML5, CSS3, and JavaScript to craft
        engaging interfaces.
      </span>

      <div
        className="flex  justify-center items-center w-[60rem] rounded-lg shadow-blue-900 shadow-lg mt-4 max-w-[65rem] flex-wrap"
        id="workImg"
      >
        <div className="relative flex items-center justify-center">
          <a
            href="https://github.com/mahesh123-8/project-udaan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={Portfolio1}
              alt=""
              className="object-cover h-[9rem] w-[15rem] m-[0.5rem]  hover:opacity-75 hover:scale-105 transition-transform duration-300 rounded-md"
              data-aos="flip-right"
            />
          </a>
        </div>

        <div className="relative flex items-center justify-center">
          <a
            href="https://github.com/mahesh123-8/grocery_e_comm"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={Portfolio2}
              alt=""
              className="object-cover h-[9rem] w-[15rem] m-[0.5rem]   rounded-md   hover:opacity-75 hover:scale-105 transition-transform duration-300"
              data-aos="flip-up"
            />
          </a>
        </div>

        <div className="relative flex items-center justify-center">
          <a
            href="https://github.com/mahesh123-8/project-udaan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={Portfolio3}
              alt=""
              className="object-cover h-[9rem] w-[15rem]  m-[0.5rem] rounded-md  hover:opacity-75 hover:scale-105 transition-transform duration-700"
              data-aos="flip-left"
            />
          </a>
        </div>
      </div>

      <button
        className="px-[2rem] py-[0.5rem] font-semibold border-none rounded-md    bg-blue-300 text-black mt-4 hover:bg-blue-700 hover:duration-700"
        id="btn"
        value="send"
      >
        {" "}
        See More..{" "}
      </button>
    </section>
  );
};

export default Poster;
