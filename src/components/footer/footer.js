import React from 'react'
import YoutubeIcon from "../../assets/youtube.png";
import TwitterIcon from "../../assets/twitter.png";
import InstagramIcon from "../../assets/instagram.png";
import FacebookIcon from "../../assets/facebook-icon.png";



const Footer = () => {
  return (
   <footer className='flex justify-center text-sm font-bold bg-orange-300 text-end item-center '>
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
    {/* <p className='mt-2'>Copyright &#169; 2023 Hyphen. All right received.
    </p> */}
   </footer>
  )
}

export default Footer;