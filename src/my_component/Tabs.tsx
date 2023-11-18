import React from 'react';
import {useState} from "react";
import '../css/style.css';
import image from '../img/main-logo.png';
import dasmaLogo from '../img/dasma-logo.png';

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
          {/* Topbar */}
          <div className="top-bar-leftLogin">
            <img src={image} className="logo" alt="Image" />
            <select name="" className='position-drp'>
              <option value="">Admin</option>
              <option value="">Staff</option>
            </select>
          </div>

          <div className="login-form-container">
            <div className="header">
              <img src={dasmaLogo} alt="" className='dasmaLogo' />
              <h2>BARANGAY DATU ESMAEL</h2>
              <p>Health Center Record Management</p>
            </div>

            <div className="body">
              <div className="sign-google">
                <p>Log in with Google</p>
              </div>
              <hr className='lineDiv'/>
              <div className="input-label">
                <label htmlFor="Email">Email</label>
                <input type="text" className='inputField' />
              </div>

              <div className="input-label">
                <label htmlFor="Password">Password</label>
                <input type="password" className='inputField' />
                <div className="check-url">
                  <label><input type="checkbox" />Remember Me</label>
                  <a href="#">Forgot Password</a>
                </div>
              </div>
              
              <button className='btnLogin'>Log In</button>
              <label className='noAccount'>Don't have an account yet? <a href="#">Sign Up</a></label>
            </div>
          </div>
        </div>

        {/* Right Container */}
        <div className="login-right"></div>
      </div>
    </>
  )
}

export default Tabs