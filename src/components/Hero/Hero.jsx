import React from "react";
import "./Hero.css";
import profile_img from "../../assets/raushan1.png";

const Hero = () => {
  return (
    <div className="hero">
      <img src={profile_img} alt="" />
      <h1>
        <span>I'm Raushan Kumar,</span> frontend developer based in India
      </h1>
      <p>
        I am a frontend developer from India with 3 years of experiance with
        skills specialised in HTML, CSS, JavaScript, React and Tailwind
      </p>
      <div className="hero-action">
        <div className="hero-connect">Connect with me</div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  );
};

export default Hero;
