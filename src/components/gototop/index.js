import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FaArrowUp } from "react-icons/fa";
import './style.css'
import { isVisible } from "@testing-library/user-event/dist/utils";

const Gototop = () => {
  const [isVisible, setIsVisible]= useState(false);
  const gotobtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    
  };
const listenToScroll =()=>{

  
  let heightToHidden=250;
  const winScroll=document.body.scrollTop||document.documentElement.scrollTop;
  if(winScroll>heightToHidden){
    setIsVisible(true);
  }else{
    setIsVisible(false)
  }
};

useEffect(() => {
   window.addEventListener('scroll',listenToScroll)
   return()=>window.removeEventListener("scroll",listenToScroll )
 }, [])
 
  
  return (
    <Wrapper>
      {isVisible && (
      <div className="top-btn" onClick={gotobtn}>
     <FaArrowUp className="top-btn--icon"/>
    
      </div>
)}
    </Wrapper>
      );
};
const Wrapper = styled.section`
display:flex;
justify-content:center;
align-items:center;

.top-btn{
  font-size:2.4rem;
  width:6rem;
  height:6rem
  color:#000096;

  border-radius:50%;
  position:fixed;
bottom:5rem;
right:2rem;
z-index:999;
display:flex;
justify-content:center;
align-items:center;
cursor:pointer;

&--icon{
  animation:gototop 1.2s linear infinite alternate-reverse;
}
@keyframes gototop{
  0%{
    transform: translateY(-0.5rem)
  }
  100%{
    transform:translateY(1rem);
  }
}
  
}



`;

export default Gototop;
