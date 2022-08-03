import * as React from 'react'
import { Link } from 'gatsby'
import logoGif from '../images/recess-chrome-v2-optimized.gif'
import backgroundImage from '../images/background.jpg'

import '../css/font.css'
import '../css/reset.css'
import '../css/styles.css'
import '../css/work-menu.css'


const IndexPage = () => {
  return (
    <div className="background-image-container">
      <img className="background-image" src={backgroundImage} alt="Background Image" />
      <div className="grid">
        <div className="grid-item grid-item--width4 grid-item--1" />
        <div className="grid-item grid-item--2 grid-item--width6">
          <Link to="/" >
            <img className="logo" src={logoGif} alt="Logo" />
          </Link>
        </div>
        <div className="grid-item grid-item--3 grid-item--width6 " />
        <div className="grid-item grid-item--4 grid-item--width24">Recess Studios is a Full Service Marketing Agency &amp;
          Production
          Studio based in New York, Los Angeles, &amp; Portland.</div>
        <div className="grid-item grid-item--5 grid-item--width4 " />
        <div className="grid-item grid-item--6 grid-item--width5">
          {/* <Link to="/work" className="underline-link" title="Work">OUR WORK</Link> */}
        </div>
        <div className="grid-item grid-item--7 grid-item--width20 " />
        <div className="grid-item grid-item--8 grid-item--width11">
          FOR BUSINESS INQUIRIES
          <br></br>
          <a className="underline-link" href="mailto:321@recessworld.com" title="mailto:321@recessworld.com" target="_blank" rel="noreferrer noopener">321@RECESSWORLD.COM</a>
          <br></br>
          <br></br>
          <Link to="/careers" className="underline-link">CAREER OPPORTUNITIES</Link>
        </div>

        <div className="grid-item grid-item-9 grid-item--width4 " />
        <div className="grid-item grid-item--10 grid-item--width6">
          <a className="underline-link" href="https://www.instagram.com/recess.studios/" target="_blank">@RECESS.STUDIOS</a>
        </div>
        <div className="grid-item grid-item--11 grid-item--width10 " />
      </div>
    </div>
  );
}

export default IndexPage

