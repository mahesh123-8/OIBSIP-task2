import React,{useEffect} from "react";
import About from "../../assets/abt2.png";
import "./service.css";
import AOS from "aos";
import "aos/dist/aos.css";
const Aboutnew = () => {
    useEffect(() => {
        AOS.init({
          offset: 200,
          duration: 100,
        });
      }, [
      ]);
  return (
    <section className="flex flex-col items-center justify-center bg-blue-900 mt-9 lg:flex-row lg:h-screen" id="Aboutus">
      <div className="p-8 lg:w-1/2">
        <img
          src={About}
          alt="About Me"
          className="w-[400px] h-[400px]"
          id="pic"
          data-aos="fade-left"
        
        />
      </div>

      <div className="p-8 text-center lg:w-1/2 lg:text-left">
        <h2 className="mt-3 mb-8 text-4xl font-bold lg:text-4xl" data-aos="fade-up">About Me</h2>
        <p className="text-lg text-white lg:text-2xl " data-aos="fade-down">
          Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Repellendus in ut necessitatibus totam non, vero
          quidem sequi quas voluptatibus qui incidunt aut cum, sunt error ab
          nesciunt veritatis sapiente amet., consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
    </section>
  );
};

export default Aboutnew;
