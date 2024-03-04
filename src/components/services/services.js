import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import About from "../../assets/abt2.png";
import "./service.css";
const Aboutnew = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 100,
    });
  }, []);
  return (
    <section
      className="flex flex-col items-center justify-center bg-blue-900 mt-9 lg:flex-row "
      id="Aboutus"
    >
      <div className="p-8 lg:w-1/2">
        <img
          src={About}
          alt="About Me"
          className="lg:w-[400px] lg:h-[400px] w-[200px] h-[200px]"
          id="pic"
          data-aos="fade-left"
        />
      </div>

      <div className="p-8 text-center lg:w-1/2 lg:text-left">
        <h2
          className="mt-3 mb-8 text-4xl font-extrabold text-green-300 underline lg:text-4xl"
          data-aos="fade-up"
        >
          About Me
        </h2>
        <p className="text-lg font-semibold text-white lg:text-lg" data-aos="fade-down">
          My proficiency in HTML, CSS, and JavaScript forms the cornerstone of
          my technical skill set, while my hands-on experience with Tailwind and
          React reflects my commitment to embracing modern web development
          practices. These technologies empower me to create visually appealing
          and responsive user interfaces, ensuring an enhanced user
          experience.Beyond technical expertise, I bring a collaborative and
          adaptable mindset to team environments. Whether working on individual
          projects or contributing to group efforts, I thrive on communication
          and teamwork, valuing diverse perspectives that foster innovation.
        </p>
      </div>
    </section>
  );
};

export default Aboutnew;
