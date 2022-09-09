import React, { useState, useEffect } from 'react';
import {Link} from "react-router-dom";
import { menu, tools, constants} from '../dummydata';

const VerticalNavbar = () => {

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

      <div className="sidebar " id="sidebar">
      {menu.map((val) => (
    <ul className="nav nav-list">
    <li className="menuitem ">
      <Link 
      to={val.link}
      onClick={closeMobileMenu} >
      <i className={constants.link + " " + val.icon}></i>
      {val.title}
    </Link>
    </li>
   
   
</ul>
      ))}
<div className="sidebar-toggle sidebar-collapse" id="sidebar-collapse">
<i className="ace-icon fa fa-angle-double-right" data-icon1="ace-icon fa fa-angle-double-right" data-icon2="ace-icon fa fa-angle-double-left"></i>
</div>

<div className="technical-shortcuts">
{tools.map((val) => (
        <a className="notajax" href="/Home/Refresh" title="Refresh">
        <i className= {constants.toolsLink + " "+ val.icon}></i>
        </a>
  ))}
</div>

</div>
       </>
  )
}

export default VerticalNavbar
