import React, { useRef } from "react";
import Adobe from "../../assets/adobe.png";
import FacebookIcon from "../../assets/facebook-icon.png";
import Facebook from "../../assets/facebook.png";
import InstagramIcon from "../../assets/instagram.png";
import Microsoft from "../../assets/microsoft.png";
import TwitterIcon from "../../assets/twitter.png";
import Walmart from "../../assets/walmart.png";
import YoutubeIcon from "../../assets/youtube.png";
import Icon from "../../assets/comp.png";
import Example from '../../assets/pdfs/Cv.PDF';

const Client = () => {
  const anchorRef = useRef(null);
  const handleClick = (e) => {
    e.preventDefault();
    const link = document.createElement('a');
    link.href=Example;
    link.download='Example.pdf';
    link.click();
  }
  return (
    <section
      id="client"
      className="min-h-[calc(100vh-4rem)]   w-full max-w-[60rem] flex flex-col items-center mt-1 mx-auto my-0 text-center px-4 py-[1rem] justify-center"
    >
      <div>
        <img src={Icon} alt="" className="h-[130px]" />
      </div>
      <div>
        <h2 className="mx-0 my-4  text-[2rem] font-bold">My Clients</h2>
        <span className="text-[300] text-md font-light m-2 flex ">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos nesciunt
          quo vero fugiat blanditiis <br /> aliquid corrupti necessitatibus
          nulla. Quia sed aspernatur modi error repellendus libero excepturi
          ullam velit consectetur.
        </span>
        <div className="flex grid flex-auto grid-cols-4 gap-3 mt-3">
          <img
            src={Walmart}
            alt=""
            className="transition-transform duration-300 shadow-md clientimg shadow-yellow-300 hover:opacity-75 hover:scale-105"
          />
          <img
            src={Adobe}
            alt=""
            className="transition-transform duration-300 shadow-md clientimg shadow-yellow-300 hover:opacity-75 hover:scale-105"
          />
          <img
            src={Microsoft}
            alt=""
            className="transition-transform duration-300 shadow-md clientimg shadow-yellow-300 hover:opacity-75 hover:scale-105"
          />
          <img
            src={Facebook}
            alt=""
            className="transition-transform duration-300 shadow-md clientimg shadow-yellow-300 hover:opacity-75 hover:scale-105"
          />
        </div>
      </div>

      <div>
        <h2
          id="contactUs"
          className="mx-0 my-4  mt-[100px] text-[2rem] font-bold"
        >
          Contact Us
        </h2>
        <span className="text-[300] text-md font-light m-2 flex text-center items-center justify-center ">
          Don't Worry Your data is totally safe and secure for lifetime as per
          our policies..
        </span>
        <form className="m-[1rem]  flex flex-col items-center justify-center w-[90vw] max-w-[60rem]">
          <input
            type="text"
            className=" max-w-[40rem] bg-gray-900 w-full rounded-lg m-[0.5rem] px-[1rem] border border-yellow-200 py-[0.5rem]"
            placeholder="Your Name"
          />
          <input
            type="email"
            className="max-w-[40rem]  bg-gray-900 w-full rounded-lg m-[0.5rem] border border-yellow-200 px-[1rem] py-[0.5rem]"
            placeholder="Your Email Address"
          />
          <input
            type="number"
            className=" max-w-[40rem] bg-gray-900 border border-yellow-200 w-full rounded-lg m-[0.5rem] px-[1rem] py-[0.5rem]"
            placeholder="Your Mobile Number"
          />
          <textarea
            name="message"
            className="max-w-[40rem] bg-gray-900 w-full border border-yellow-200 rounded-lg m-[0.5rem] px-[1rem] py-[0.5rem]"
            rows="6"
            placeholder="Your Message"
          ></textarea>

          <button
            className="px-[2rem] mx-auto py-[0.5rem] font-semibold border-none rounded-full bg-white text-black mt-4  hover:bg-blue-400 hover:duration-700"
            id="btn"
            value="send"
          >
            {" "}
            Submit{" "}
          </button>
          <div>
    <button onClick={handleClick} className="h-10 mx-auto mt-5 w-[15rem] border border-yellow-300 bg-red-600 rounded-lg font-thick hover:bg-green-800 hover:duration-700">
      Download CV
    </button>
</div>
          <div className="flex flex-wrap ">
            <img
              src={FacebookIcon}
              alt="FaceBook"
              className="object-cover h-[3rem] w-[3rem] mx-[0.75rem] my-0 mt-4 hover:opacity-75 hover:scale-105 transition-transform duration-300"
            />
            <img
              src={TwitterIcon}
              alt="Twitter"
              className="object-cover h-[3rem] w-[3rem] mx-[0.75rem] my-0 mt-4 hover:opacity-75 hover:scale-105 transition-transform duration-300"
            />
            <img
              src={YoutubeIcon}
              alt="Youtube"
              className="object-cover h-[3rem] w-[3rem] mx-[0.75rem] my-0 mt-4 hover:opacity-75 hover:scale-105 transition-transform duration-300"
            />
            <img
              src={InstagramIcon}
              alt="Instagram"
              className="object-cover h-[3rem] w-[3rem] mx-[0.75rem] my-0 mt-4 hover:opacity-75 hover:scale-105 transition-transform duration-300"
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Client;
