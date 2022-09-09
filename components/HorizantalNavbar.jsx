
import React, { useState, useEffect } from 'react';
import image2 from "../components/images/question.png"
import {Link} from "react-router-dom";
import image1 from "../components/images/dxm.png";
import image3 from "../components/images/admin.png"
import image4 from "../components/images/social.png"
import image5 from "../components/images/community.png"
import image6 from "../components/images/analytics.png"
import image7 from "../components/images/assets.png"
import image8 from "../components/images/flix.png"
import image9 from "../components/images/audience.png"
import image10 from "../components/images/campaign.png"
import image11 from "../components/images/target.png"
import { constants, horizantalnavbar } from '../dummydata';
import {
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
} from "reactstrap";

const HorizantalNavbar = () => {
 

  
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  


  
  return (
   <>
   {horizantalnavbar.map((val) => (
    <div className="navbar fixed-top" id="navbar">
        <div
          className="navbar-container"
          id="navbar-container"
          style={{ textAlign: "center" }}
        >
          <span
            id="headerloader"
            className="headericon"
            style={{
              display: " none",
              height: 33 + "px",
              marginTop: 7 + "px",
              width: 33 + "px",
            }}
          >
            <i className=" fa fa-spinner fa-spin bigger-250 white"></i>
          </span>

          <div className="navbar-header product-wrapper pull-right">
            <a href="/">
              <img
                src={val.userExperience}
                alt="Experience Manager"
                className="product-logo"

              />
            </a>
          </div>

          <div
            className="navbar-buttons navbar-header pull-left "
            role="navigation"
          >
            <ul className="nav ace-nav">
             <li className="client-wrapper dropdown-toggle">
      
      <UncontrolledDropdown>
        <DropdownToggle
         color="white"
        
        >
         <a data-toggle="dropdown" className="dropdown-toggle">
        <img src="" alt={val.drop_down_alt} title="MangoX" style={{color:"#9B9B9B", border:"none "}}  />
      </a>
        </DropdownToggle>

        <DropdownMenu aria-labelledby="dropdownMenuButton" style={{inset:12+"px"+"auto"+"auto"+0+"px" }}>
        
          <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
          <a
      href="/Technical/Subscription/Apply/7506d461-6ad2-4a07-9ff2-e86cf0442261"
      className="clearfix notajax"
    >
      <img
        src={image2}
      />
      <h5>MangoX</h5>
    </a>
          </DropdownItem>
          
          <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
          <li>
   <a
      href="/Technical/Subscription/Apply/cd81f9bf-09bb-4f5f-9e6b-b4aa97a4b465"
       className="clearfix notajax"
     >
    
       <h5>1234</h5>
     </a>
  </li>
          </DropdownItem>

          <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
          <li>
    <a
       href="/Technical/Subscription/Apply/3190d3cd-68e6-4205-be41-8c9ad8467941"
       className="clearfix notajax"
    >
     {/* <img src="images/logo.png"  /> */}
       <h5>abc</h5>
     </a>
   </li>
          </DropdownItem>
          <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
          <li>
    <a
      href="/Technical/Subscription/Apply/be4a949d-96fe-47cc-9aa0-d389e2424010"
      className="clearfix notajax"
    >
      {/* <img
        src="images/logo.png"
      /> */}
      <h5>MangoX-AR</h5>
    </a>
  </li>
          </DropdownItem>
          <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
          <li>
    <a href="/Technical/Subscription" className="clearfix">
      <span className="msg-body">التحكم بالمواقع</span>
    </a>
  </li>
          </DropdownItem>
         
        </DropdownMenu>
      </UncontrolledDropdown>
              </li>
              <li >
      
      <UncontrolledDropdown>
        <DropdownToggle
         color="white"
        >
         <a data-toggle="dropdown" className="dropdown-toggle" >
         <i className={val.user_circle}></i>
      </a>
        </DropdownToggle>
      
        <DropdownMenu aria-labelledby="dropdownMenuButton" style={{inset:12+"px"+"auto"+"auto"+0+"px" }}>
        
          
          <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
          <li>
          
          <a href="/Account/ChangePassword" className="account" >
        <i className="icon fa fa-key"></i>
           تغيير كلمة السر
         </a>
         
          </li>
          </DropdownItem>
      
          <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
          <li>
          <a href="/Account/ChangeAvatar" className="account">
        <i className="icon fa fa-key"></i> 
              تغيير الصورة
          </a>
      </li>
          </DropdownItem>
          <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
          <li>
          <a href="/Account/LogOff" className="notajax" className="account">
      <i className="icon fa fa-power-off"></i>
       تسجيل الخروج
    </a>
      </li>
          </DropdownItem>
          <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
          <li>
          <a
       href="/Account/ChangeLanguage?language=ar"
       className="clearfix notajax lang active"
       >
          العربية
      </a>
      </li>
          </DropdownItem>
          <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
          <li>
          <a
 href="/Account/ChangeLanguage?language=en"
 className="clearfix notajax lang"
 >
 English
 </a>
      </li>
          </DropdownItem>
         
        </DropdownMenu>
      </UncontrolledDropdown>
              </li>
              <li >
      
      <UncontrolledDropdown>
        <DropdownToggle
         color="white"
        
        >
         <a data-toggle="dropdown" className="dropdown-toggle">
         <i className={val.grid}></i>
      </a>
        </DropdownToggle>
      
        <DropdownMenu aria-labelledby="dropdownMenuButton" style={{inset:12+"px"+"auto"+"auto"+0+"px" }}>
        
          
          <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
          <li className=" active">
    <a href="/" className="notajax">
      <img src={image1} alt="Experience Manager" />
    </a>
    <a href="/Admin/AdminHome" className="notajax">
      <img src={image3} alt="Admin Panel" />
    </a>
  </li>
          </DropdownItem>
      
          <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
          <li className=" ">
    <a href="/Social/SocialHome" className="notajax">
      <img src={image4} alt="Social" />
    </a>
    <a href="/Community/CommunityHome" className="notajax">
      <img src={image5} alt="Community" />
    </a>
  </li>
          </DropdownItem>
          <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
          <li className=" ">
    <a href="/Assets/AssetsHome" className="notajax">
      <img src={image7} alt="Assets Manager" />
    </a>
    <a className="disabled ">
      <img src={image6} alt="Analytics" />
    </a>
  </li>
          </DropdownItem>
          <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
          <li className="disabled ">
    <a>
      <img src={image8} alt="Flix" />
    </a>
    <a className="disabled ">
      <img src={image9} alt="Audience Manager" />
    </a>
  </li>
          </DropdownItem>
          <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
          <li className="disabled ">
    <a>
      <img src={image10} alt="Campaign" />
    </a>
    <a className="disabled ">
      <img src={image11} alt="Target" />
    </a>
  </li>
          </DropdownItem>
         
        </DropdownMenu>
      </UncontrolledDropdown>
              </li>
            </ul>
          </div>
        </div>
      </div>
   ))}
   </>
  )
}

export default HorizantalNavbar
