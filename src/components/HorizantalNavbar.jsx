import React, { useState, useEffect } from "react";
import image2 from "../components/images/question.png";
import { horizantalnavbar, HorizantalNavbarGridDropdown,HorizantalNavbarUserDropdown,questionImage, HorizantalNavbarMangopulseDropdown} from "../dummydata";
import { Link } from "react-router-dom";
import {
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
} from "reactstrap";

const HorizantalNavbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  // const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const handleClick=()=>{
    localStorage.clear();
    window.location.reload();
}
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

  window.addEventListener("resize", showButton);

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
                <DropdownToggle color="white"
                    
                    >
                      <a data-toggle="dropdown" className="dropdown-toggle">
                        <img
                          src={val.drop_down_logo}
                          title="MangoX"
                          style={{ color: "#9B9B9B", border: "none " }}
                        />
                      </a>
                    </DropdownToggle>

                    <DropdownMenu
                      aria-labelledby="dropdownMenuButton"
                      style={{ inset: 12 + "px" + "auto" + "auto" + 0 + "px" }}
                    >
                      {HorizantalNavbarMangopulseDropdown.map((val)=>(
                      <DropdownItem
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <a
                          href="/Technical/Subscription/Apply/7506d461-6ad2-4a07-9ff2-e86cf0442261"
                          className="clearfix notajax"
                        >
                        
                          
                           
                          <h5>{val.tab}</h5>
                        </a>
                      </DropdownItem>
                     ))}
                      
                    </DropdownMenu>
                  </UncontrolledDropdown>
                 
                </li>
                <li>
                  <UncontrolledDropdown>
                    <DropdownToggle color="white">
                      <a data-toggle="dropdown" className="dropdown-toggle">
                        <i className={val.user_circle}></i>
                      </a>
                    </DropdownToggle>

                    <DropdownMenu
                      aria-labelledby="dropdownMenuButton"
                      style={{ inset: 12 + "px" + "auto" + "auto" + 0 + "px" }}
                    >
                      {HorizantalNavbarUserDropdown.map((val)=>(
                       <DropdownItem
                       href="#pablo"
                       onClick={(e) => e.preventDefault()}
                     >
                       <Link
                         to={val.link}
                         className="clearfix notajax"
                       >
                         <h5
                         style={{fontWeight:"400"}}>
                          <i className={val.icon}></i>
                          <button
                          style={{
                            border:"none",
                            backgroundColor:"transparent",
                          }}
                          onClick={handleClick}>{val.tab}</button>

                          </h5>
                          
                       </Link>
                     </DropdownItem>
                       ))}
                   
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </li>
                <li>
                  <UncontrolledDropdown>
                    <DropdownToggle color="white">
                      <a data-toggle="dropdown" className="dropdown-toggle">
                        <i className={val.grid}></i>
                      </a>
                    </DropdownToggle>

                    <DropdownMenu
                      aria-labelledby="dropdownMenuButton"
                      style={{ inset: 12 + "px" + "auto" + "auto" + 0 + "px"}}
                    >
                     
                      {HorizantalNavbarGridDropdown.map((val)=>(
                      <DropdownItem 
                      
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <li className=" active"  >
                          <a href="/" className="notajax" >
                            <img  src={val.imageA} alt="Experience Manager" />
                         
                          </a>
                         
                         
                        </li>
                      </DropdownItem>
                      ))}
                     
                   
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default HorizantalNavbar;
