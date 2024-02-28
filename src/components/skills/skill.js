import React from "react";
import AppDesign from "../../assets/app-design.png";
import UIDesign from "../../assets/ui-design.png";
import WebDesign from "../../assets/website-design.png";
import { Link } from "react-scroll";

const Skill = () => {
  return (
    <section
      id="skill"
      className="overflow-hidden w-screen max-w-[65rem] flex flex-col items-center justify-center text-center mx-auto my-0"
    >
      <span className="text-[30px] font-semibold pt-11 underline">
        What I Do
      </span>
      <span className=" text-sm font-bold max-w-[51rem] px-8 py-0">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
        nesciunt, debitis minus nam Lorem ipsum Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Dicta, reiciendis?dolor sit amet
        consectetur adipisicing elit. Iure, quod!maxime qui pariatur sequi
        nihil? Quia, iure.
      </span>
      <div className="m-[1.5rem] w-[100vw] max-w-[80%] text-left shadow-lg shadow-blue-900 rounded-lg ">
        <div
          className="flex m-[1rem] px-[1.5rem] py-[2rem] rounded-lg shadow-lg shadow-black bg-white"
          id="skillBar"
        >
          <img
            src={UIDesign}
            alt="UIdesign"
            className="object-cover h-[3rem] w-48px mr-[2rem] shadow-sm shadow-black rounded-lg"
            id="skillBarImg"
          />
          <div className="text-2xl font-semibold" id="skillheading">
            <h2 className="text-black">UI/UX Design</h2>
            <p className="text-[0.90rem]  font-medium text-black">
             
UI/UX design focuses on enhancing user satisfaction and interaction with a digital product. User Interface (UI) design involves crafting visually appealing and intuitive interfaces, incorporating elements like buttons and menus. User Experience (UX) design, on the other hand, ensures a seamless and enjoyable overall interaction by considering factors such as usability, accessibility, and user flow. 
            </p>
          </div>
        </div>

        <div
          className=" flex m-[1rem] px-[1.5rem] py-[2rem] rounded-lg shadow-lg shadow-black bg-white"
          id="skillBar"
        >
          <img
            src={WebDesign}
            alt="WebDesign"
            className="object-cover h-[3rem] w-48px mr-[2rem]  shadow-sm shadow-black rounded-lg "
            id="skillBarImg"
          />
          <div className="text-2xl font-semibold " id="skillheading">
            <h2 className="text-black">WebDesign</h2>
            <p className="text-[0.90rem] font-medium text-black">
            Web design encompasses the creation and arrangement of visual elements, layout, and structure to craft engaging and user-friendly websites. It involves the use of graphic design principles, typography, and color schemes to create aesthetically pleasing and cohesive digital experiences. 
            </p>
          </div>
        </div>

        <div
          className="flex m-[1rem] px-[1.5rem] py-[2rem] rounded-lg shadow-lg shadow-black bg-white "
          id="skillBar"
        >
          <img
            src={AppDesign}
            alt="AppDesign"
            className="object-cover h-[3rem] w-48px mr-[2rem]  shadow-sm shadow-black rounded-lg"
            id="skillBarImg"
          />
          <div className="text-2xl font-semibold " id="skillheading">
            <h2 className="text-black">AppDesign</h2>
            <p className="text-[0.90rem] font-medium text-black">
            App design involves the strategic planning and creation of user interfaces for mobile applications, ensuring a seamless and enjoyable user experience. Designers focus on visual elements, navigation, and user interactions to make apps intuitive and aesthetically pleasing. 
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
