import React, { useEffect, useState } from "react";
import Adobe from "../../assets/adobe.png";
import FacebookIcon from "../../assets/facebook-icon.png";
import Facebook from "../../assets/facebook.png";
import InstagramIcon from "../../assets/instagram.png";
import Microsoft from "../../assets/microsoft.png";
import TwitterIcon from "../../assets/twitter.png";
import Walmart from "../../assets/walmart.png";
import YoutubeIcon from "../../assets/youtube.png";
import Icon from "../../assets/comp.png";
import { data } from "autoprefixer";
import AOS from "aos";
import "aos/dist/aos.css";

const Client = () => {

  useEffect(()=>{
   AOS.init({
    offset:200,
    duration: 300,
   });
  },[
    ]);
   


  
const [user,setUser]= useState(
  {
    Name: '', Email: '',Number: '',message:''
  } 
)
let name,value
console.log(user);
const data =(e)=>{
  
name =e.target.name;
value = e.target.value;
setUser({...user, [name]:value});

}

const getdata= async (e) =>{
  const { Name, Email,Number,message} = user;
  e.preventDefault();
  const options={
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      Name, Email,Number,message
    })
  }
  const res= await fetch('https://portfolio-31fda-default-rtdb.firebaseio.com/UserData.json'
  ,options)
  console.log(res);
  if(res){
    alert("Message Sent")
  }else{
    alert("Error Occured")
  }

}
  return (
    <section
      id="client"
      className="min-h-[calc(100vh-4rem)]   w-full max-w-[60rem] flex flex-col items-center mt-1 mx-auto my-0 text-center px-4 py-[1rem] justify-center"
    >
      <div>
        <img src={Icon} alt="" className="h-[130px]" data-aos="fade-down"/>
      </div>
      <div>
        <h2 className="mx-0 my-4  text-[2rem] font-bold underline text-green-300 " data-aos="fade-down">My Clients</h2>
        <span className="text-[300] text-md font-light m-2 flex " data-aos="fade-down">
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
            data-aos="fade-down"
         />
          <img
            src={Adobe}
            alt=""
            className="transition-transform duration-300 shadow-md clientimg shadow-yellow-300 hover:opacity-75 hover:scale-105"
            data-aos="fade-down"
          />
          <img
            src={Microsoft}
            alt=""
            className="transition-transform duration-300 shadow-md clientimg shadow-yellow-300 hover:opacity-75 hover:scale-105"
            data-aos="fade-down"
         />
          <img
            src={Facebook}
            alt=""
            className="transition-transform duration-300 shadow-md clientimg shadow-yellow-300 hover:opacity-75 hover:scale-105"
            data-aos="fade-down"
          />
        </div>
      </div>

      <div>
        <h2
          id="contactUs"
          className="mx-0 my-4  mt-[100px] text-[2rem] font-bold underline  text-green-300"
          data-aos="fade-down"
       >
          Contact Me
        </h2>
        {/* <span className="text-[300] text-md font-light m-2 flex text-center items-center justify-center "  data-aos="fade-down">
          Don't Worry Your data is totally safe and secure for lifetime as per
          our policies..
        </span> */}

        
        <form className="m-[1rem]  flex flex-col items-center justify-center w-[90vw] max-w-[60rem]" id="contactform"  data-aos="fade-down">
          <input
            type="text"
            className=" max-w-[40rem] bg-white w-full rounded-lg m-[0.5rem] text-black px-[1rem] border border-yellow-200 py-[0.5rem]"
            placeholder="Your Name"
            name="Name"
            value={user.Name}
            required
            onChange={data}
           
          />
          <input
            type="email"
            className="max-w-[40rem]  disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none bg-white 
            invalid:border-pink-500 invalid:text-pink-600
            focus:invalid:border-pink-500 focus:invalid:ring-pink-500 text-black  bg-whie w-full rounded-lg m-[0.5rem] border border-yellow-200 px-[1rem] py-[0.5rem]"
            placeholder="Your Email Address"
            name="Email"
            value={user.Email}
            required
            onChange={data}
          />
          <input
            type="number"
            className=" max-w-[40rem] bg-white text-black border border-yellow-200 bg-white w-full rounded-lg m-[0.5rem] px-[1rem] py-[0.5rem] text-black"
            placeholder="Your Mobile Number"
            name="Number"
            value={user.Number}
            required
            onChange={data}
          />
          <textarea
            name="message"
            className="max-w-[40rem] bg-white w-full border text-black border-yellow-200 rounded-lg m-[0.5rem] px-[1rem] py-[0.5rem]"
            rows="6"
            placeholder="Your Message"
           value={user.message}
           required
           onChange={data}
          ></textarea>

          <button
            className="px-[2rem] mx-auto py-[0.5rem] font-semibold border-none rounded-full bg-gray-400 mt-4  hover:bg-green-300 hover:duration-700"
            id="btn"
            value="send"
          type="submit"
          onClick={getdata}
          >
            {" "}
            Submit{" "}
          </button>
         
        
        </form>
      </div>
    </section>
    
  );
};

export default Client;
