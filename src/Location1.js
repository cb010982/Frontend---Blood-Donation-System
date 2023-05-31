import React, { useState } from 'react';
import './Location1.css';
import Navigation from "./Navigation";
import Dropdown from './Dropdown';
import location from './images/location1.jpg';

function Location1() {


  return (
    <div>
    <Navigation user="donor"/>
    <div className="containerlocation">
    <div className="stepindicator">
  <div className="step">
    <div className="stepnumber1">2</div>
    <div className="steptext1">Step 2</div>
  </div>
  <div className="stepline"></div>
  <div className="step">
    <div className="stepnumber2">1</div>
    <div className="steptext2">Step 1</div>
  </div>
</div>

    
    <img src={location} className='location1' />
      <h1 className="heading1">Find the nearest blood bank</h1>
      <br/>
      <h3 className="heading2">Select the nearest district to your location</h3>
      <div className='dropdown1'>
        <Dropdown dropdown='districtdropdown'/>
        </div>
        <span className="custom-arrow"></span>
        <a href="/location2">
        <button className="nextbutton">NEXT</button>
        </a>
      </div>
    </div>
    
  
   
  );
}

export default Location1;
