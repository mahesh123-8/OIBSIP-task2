import React from "react";
import AppDesign from '../../assets/app-design.png';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import {Link} from 'react-scroll';


const Skill = () => {
  return (
    <section  id='skill' className="overflow-hidden w-screen max-w-[65rem] flex flex-col items-center justify-center text-center mx-auto my-0">
      <span className="text-[30px] font-semibold pt-11">What I Do</span>
      <span className=" text-sm font-bold max-w-[51rem] px-8 py-0" >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
        nesciunt, debitis minus nam  Lorem ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, reiciendis?dolor sit amet consectetur adipisicing elit. Iure, quod!maxime qui pariatur sequi nihil? Quia, iure.
      </span>
      <div className="m-[1.5rem] w-[100vw] max-w-[80%] text-left ">
        <div className="flex m-[1rem] px-[1.5rem] py-[2rem] rounded-lg bg-black" id="skillBar">
          <img src={UIDesign} alt="UIdesign" className="object-cover h-[3rem] w-48px mr-[2rem]" id="skillBarImg"/>
          <div className="text-2xl font-semibold" id="skillheading">
            <h2>UI/UX Design</h2>
            <p className="text-[0.90rem]  font-medium ">Lorem,it amet consectetur adipisicing elit. Nisi, necessitatibus?</p>
          </div>
        </div>

        <div className=" flex m-[1rem] px-[1.5rem] py-[2rem] rounded-lg bg-black" id="skillBar">
          <img src={WebDesign} alt="WebDesign" className="object-cover h-[3rem] w-48px mr-[2rem]" id="skillBarImg" />
          <div className="text-2xl font-semibold " id="skillheading">
            <h2>WebDesign</h2>
            <p className="text-[0.90rem] font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, quam!</p>
          </div>
        </div>

        <div className="flex m-[1rem] px-[1.5rem] py-[2rem] rounded-lg bg-black " id="skillBar">
          <img src={AppDesign} alt="AppDesign" className="object-cover h-[3rem] w-48px mr-[2rem]" id="skillBarImg" />
          <div className="text-2xl font-semibold" id="skillheading">
            <h2>AppDesign</h2>
            <p className="text-[0.90rem] font-medium">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, assumenda!</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skill;
