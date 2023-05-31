import React from 'react';
import './Location2.css';
import blood from './images/location5.jpg';

function Location2(props) {

  
    return (
      <div>
      <div className="stepindicators">
    <div className="steps">
      <div className="stepnumber01">1</div>
      <div className="steptext01">Step 1</div>
    </div>
    <div className="stepsline"></div>
    <div className="steps">
      <div className="stepnumber02">2</div>
      <div className="steptext02">Step 2</div>
    </div>
  </div>  

        <h1 className="heading01">The location you have selected is </h1><p className="districtprops">{props.disrtict} </p>
        <div className="containerlocation2">

<div className='para'>

      <p className='one'><i class="fas fa-building locationicon"></i>Name of Blood Bank<span className="textbox1">blah blah</span></p>
     
      <p className='two'><i class="fas fa-map-marker-alt locationicon"></i>District<span className="textbox2">blah blah</span></p>
      
      <p className='three'><i class="fas fa-home locationicon"></i>Address <span className="textbox3">blah blah</span></p>
     
      <p className='four'><i class="fas fa-phone locationicon"></i>Telephone <span className="textbox4">222222222222222222222222222222222222222</span></p>
      </div>

  
     
          <a href="/location1">
          <button className="backbutton">BACK</button>
          </a>
        </div>
        </div>

     
    );
  }
  export default Location2;

  //<img src={blood} className='bloodtube1' />