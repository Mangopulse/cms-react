import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ButtonToggle } from "reactstrap";
import { menu, tools, constants } from "../dummydata";
import Published from "./AuthorsTakseem/Published";

const VerticalNavbar = () => {
  const [isExpanded, setExpendState] = useState(false);
  const [click, setClick] = useState(false);
  const closeMobileMenu = () => setClick(false);

 


  return (
    <>
  
      <div className="sidebar" id="sidebar">
        {menu.map((val) => (
          <ul className="nav nav-list">
            <li className="menuitem ">
              <Link to={val.link} onClick={closeMobileMenu}>
                <i style={{background:"transparent"}} className={constants.link + " " + val.icon}></i>
                {val.title}
              </Link>
            </li>
          </ul>
        ))}

        <div className="sidebar-toggle sidebar-collapse" id="sidebar-collapse">
          <i onClick={ButtonToggle}
            className="ace-icon fa fa-angle-double-right"
            data-icon1="ace-icon fa fa-angle-double-right"
            data-icon2="ace-icon fa fa-angle-double-left"
          ></i>
        </div>

        <div className="technical-shortcuts">
          {tools.map((val) => (
            <a className="notajax" href="/Home/Refresh" title="Refresh">
              <i className={constants.toolsLink + " " + val.icon}></i>
            </a>
          ))}
        </div>
      </div>

      {/* <div className="sidebar menu-min" id="sidebar">
        {menu.map((val) => (
          <ul className="nav nav-list">
            <li className="menuitem ">
              <Link to={val.link} onClick={closeMobileMenu}>
                <i className={constants.link + " " + val.icon}></i>
              </Link>
            </li>
          </ul>
        ))}

        <div className="sidebar-toggle sidebar-collapse" id="sidebar-collapse">
          <i
            className="ace-icon fa fa-angle-double-left"
            data-icon1="ace-icon fa fa-angle-double-left"
            data-icon2="ace-icon fa fa-angle-double-left"
          ></i>
        </div>

        <div className="technical-shortcuts">
          {tools.map((val) => (
            <a className="notajax"
            style={{display:"flex"}}
             href="/Home/Refresh" 
             title="Refresh">
              <i className={constants.toolsLink + " " + val.icon}></i>
            </a>
          ))}
        </div>
      </div> */}

    </>
  );
};

export default VerticalNavbar;
