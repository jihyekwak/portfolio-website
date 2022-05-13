import React from 'react';
import Typed from 'react-typed';
import Me from '../../header-image2.jpg'

const Header = () => {
  return (
    <div className="header-wrap">
        <div className="header-main-info">
            <h5>Hello, My name is</h5>
            <h1><strong>Jihye Kwak</strong></h1>
            <h1><strong>I am a web developer</strong></h1>
            <h5>I'm a full-stack developer based in San Francisco Bay Area</h5>
            {/* <Typed
                className="typed-text"
                strings={["Web Design", "Frontend Developer", "Backend Deveploper"]}
                typeSpeed={40}
                backSpeed={60}
                loop
            /> */}
            <a href="#" className="contact-btn">Contact Me</a>
        </div>
    </div>
  )
}

export default Header