import React from 'react';
import './App.css';
import ComponentsRoutes from './ComponentRoutes';

import { useState } from 'react';

function App() {

    const [username, setUsername] = useState('')
    const [usernameError, setUsernameError] = useState('')
    const [password, setPassword] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [login, setLoginin]=useState(false)
    const getUsername=localStorage.getItem("username")
    const getPassword=localStorage.getItem("password")
    const handleUsernameChange=(e)=>{
      setUsernameError('');
      setUsername(e.target.value);
    }
    const handlePasswordChange=(e)=>{
      setPasswordError('');
      setPassword(e.target.value);
    }
    
    const handleFormSubmit=(e)=>{
      e.preventDefault();

      if(username!==''){
         if(username ==='techsupport'){
            setUsernameError('')
            if(password==='1234'){
              setLoginin('open')
              localStorage.setItem("username","techsupport")
              localStorage.setItem("password","1234")
            }else{
              setPasswordError('Invalid Password')
            }
         }else{
          setUsernameError('Invalid Username')
         }

      }else{
        setUsernameError('Username Required');
      }
      if(password!==''){

      }else{
        setPasswordError('Password Required');
      }
    }
  return (

  
    <div>
 
            {getUsername&&getPassword? <ComponentsRoutes/>:
       
     <div className="login-layout">
      <div className="login-container">
    <div className="client-info">
      <h4></h4>
    </div>
    <div className="login-form">
      <h4>Please Enter Your Information</h4>
      <form action="/Account/logon?ReturnUrl=%2F" method="post" onSubmit={handleFormSubmit}>
      {usernameError&&<div className='error-msg'>{usernameError}</div>}
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text"
              ><i className="ace-icon fa fa-user"></i
            ></span>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            onChange={handleUsernameChange}
            name="Username"
          
          />
        </div>
        {passwordError&&<div className='error-msg'>{passwordError}</div>}
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text"
              ><i className="ace-icon fa fa-lock"></i
            ></span>
          </div>
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            onChange={handlePasswordChange}
            name="Password"
          />
        </div>
      
        <div className="form-group">
          <div className="custom-control custom-switch">
            <input
              type="checkbox"
              className="custom-control-input"
              id="RememberMe"
              name="RememberMe"
              checked=""
              value="true"
           
            />
            <label className="custom-control-label" for="RememberMe" >
            Remember Me
            </label>
          </div>
        </div>
        <div className="login-message"></div>
        <div className="submit-wrapper">
          <button type="submit" className="btn btn-hilighted">
            <i className="ace-icon fa fa-key"></i>
            <span>Login</span>
          </button>
        </div>
        <input
          data-val="true"
          data-val-required="The ReturnUrl field is required."
          id="ReturnUrl"
          name="ReturnUrl"
          type="hidden"
          value="/"
        /><input
          name="__RequestVerificationToken"
          type="hidden"
          value="CfDJ8Gw4EJhP_tFBqoXBSpM7LZ3jO87lr5yBia2BwYzlLFGWVPOkHaZXz3bv4_ZNEY0We6e9qlgDKVLOm9fohpQgkWtH1kP8Bgkn9f4sHxsSvKNW2qsJinwhidrAEtepVoeDIBcJu1Yi7bsM9vA8Zl_ofIY"
        />
      </form>
      
    </div>
    <div className="login-footer">
      <img
        src="//admango.cdn.mangomolo.com/analytics/mangopulse/images/logo/small.png"
      />
      Powered By Mangopulse
    </div>
  </div>
    </div>
            
            }
     

    </div>

  );
}

export default App;
