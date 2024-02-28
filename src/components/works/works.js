import React from "react";
import Portfolio1 from "../../assets/hospital management.jpeg";
import Portfolio2 from "../../assets/grocery.jpeg";
import Portfolio3 from "../../assets/ecommer.jpeg";

const Poster = () => {
  return (
    <section
      id="works"
      className="min-h-[calc(100vh-4rem)] w-full max-w-[60rem] flex flex-col items-center mt-2 mx-auto my-0 text-center px-4 py-[1rem] justify-center"
    >
      <h2 className="mx-0 my-4  text-[3rem] font-bold underline">
        My Portfolio
      </h2>
      <span className="text-[300] text-md font-light m-2 flex text-balance  hover:text-balance ">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos nesciunt
        quo vero fugiat blanditiis <br /> aliquid corrupti necessitatibus nulla.
        Quia sed aspernatur modi error repellendus libero excepturi ullam velit
        consectetur.
      </span>

      <div
        className="flex justify-center items-center w-full rounded-lg shadow-blue-900 shadow-lg mt-4 max-w-[65rem] flex-wrap"
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
              className="object-cover h-[20rem] border-8 border-black  m-[0.5rem] hover:opacity-75 hover:scale-105 transition-transform duration-300 rounded-l-full"
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
              className="object-cover h-[20rem] m-[0.5rem]  border-8 border-black   rounded-r-full hover:opacity-75 hover:scale-105 transition-transform duration-300"
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
              className="object-cover h-[20rem] m-[0.5rem] rounded-md  border-8 border-black rounded-b-full  hover:opacity-75 hover:scale-105 transition-transform duration-300"
            />
          </a>
        </div>
      </div>

      <button
        className="px-[2rem] py-[0.5rem] font-semibold border-none rounded-full    bg-green-300 text-black mt-4 hover:bg-red-400 hover:duration-700"
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
