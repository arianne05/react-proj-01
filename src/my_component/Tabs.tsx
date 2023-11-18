import React from 'react';
import {useState} from "react";
import '../css/style.css';
import image from '../img/main-logo.png';

const Tabs = () => {
  const [toggleState, setToggleState] = useState(1);

  const toogleTab = (index: number) => {
    console.log(index);
    setToggleState(index);
  }

  return (
    <>
      {/* <button onClick={() => toogleTab(1)}>Tab1</button>
      <button onClick={() => toogleTab(2)}>Tab2</button>
      <button onClick={() => toogleTab(3)}>Tab3</button>

      {toggleState === 1 && <div>Content for Tab 1</div>}
      {toggleState === 2 && <div>Content for Tab 2</div>}
      {toggleState === 3 && <div>Content for Tab 3</div>} */}

      <div className="login-main">
        {/* Left Container */}
        <div className="login-left">
          <div className="top-bar-leftLogin">
            <img src={image} className="logo" alt="Image" />
            <select name="" className='position-drp'>
              <option value="">Admin</option>
              <option value="">Staff</option>
            </select>
          </div>
        </div>

        {/* Right Container */}
        <div className="login-right"></div>
      </div>
    </>
  )
}

export default Tabs