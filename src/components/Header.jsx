import React, { useRef, useEffect } from "react";
import { init } from "ityped";

const Header = () => {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Full-Stack Web Developer", "Content Creator"],
    });
  }, []);

  return (
    <div className="heading" id="#intro">
      <div className="heading__left-side">
        <div className="heading__img-container">
          <img
            src="https://res.cloudinary.com/imagesforapi/image/upload/v1635353453/portfolio_resume/PNG_image_pk0mgc.png"
            alt="profile"
            className="left_img"
          />
        </div>
      </div>
      <div className="heading__right-side">
        <div className="heading__right-img">
          <img
            src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=764&q=80"
            alt="laptop"
            className="right-img"
          />
        </div>
        <div className="heading__right-text">
          <h3>Hello, Welcome to my Portfolio</h3>
          <span className="intro-span">
            My name is <h2>Gustavo Salas</h2>
          </span>
          <p>
            I am a <span className="r-span" ref={textRef}></span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
