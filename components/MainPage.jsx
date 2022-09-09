
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { mainpage } from "../dummydata";
import image1 from "../components/images/dxm.png"
import image2 from "../components/images/loader.gif"
import image3 from "../components/images/question.png"
import image4 from "../components/images/social.png"
import image5 from "../components/images/target.png"
import image6 from "../components/images/analytics.png"
import HorizantalNavbar from './HorizantalNavbar';
import VerticalNavbar from './VerticalNavbar';




const MainPage = () => {

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
     {mainpage.map((val) => (
    <div className="no-skin rtl make-rtl">
      <HorizantalNavbar />          
 <div  className="main-container" id="main-container">
      <VerticalNavbar />
                    <div  className="main-content">
                        <div  className="main-content-inner">


    <div className="breadcrumbs" id="breadcrumbs">
        <ul className="breadcrumb">
            <li>
                <i className="ace-icon fa fa-home home-icon">
                </i>
                <a href="/">
                    &#x627;&#x644;&#x631;&#x626;&#x64A;&#x633;&#x64A;&#x629;
                </a>
            </li>
        </ul>

        <div id="page-data" data-url="https://as-mangopulse-admin.azurewebsites.net/" data-title="">
        </div>
    </div>

    <div className="welcome">
        <h3>
           {val.welcome_message}
        </h3>

    </div>

    <div className="reload-btns">
        <a className="btn btn-new info" href="/Home/ClearAPICache">{val.mobile}</a>
        <a className="btn btn-new info" href="/Home/ClearWebsiteCache">{val.location}</a>
    </div>
    <div className="page-content">


        <div className="row">
            <div className="col-12">
            </div>
        </div>
    </div>






    <div className="hidden"></div>

    <input type="hidden" id="CurrentUserId" value="0b42217b-e575-49e3-8482-a37100cd76df" />
    <input type="hidden" id="CurrentUsername" value="techsupport" />


                        </div>
                        <span  className="clearfix"></span>
                    </div>
                    <div  className="hidden-content" style={{display:'none'}}></div>
    <div className="footer">
        <div className="footer-inner">
            <div className="footer-content">
                <span className="bigger-120">
                    <span className="blue bold">&copy; </span>
                </span>
            </div>
        </div>
    </div>
                    <div  id="busy-holder">
                        <div  id="busy">
                            <img  src="/images/loader.gif" />

                        </div>
                    </div>
                </div>
            <div  id="message-modal" className="modal fade" tabIndex='-1'>
                <div  className="modal-dialog">
                    <div  className="modal-content">
                        <button  type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span  aria-hidden="true">×</span>
                        </button>
                        <div  className="modal-body"></div>
                        <div  className="modal-footer"></div>
                    </div>
                </div>
            </div>
            <div  id="default-modal" className="modal fade" tabIndex='-1'>
                <div  className="modal-dialog">
                    <div  className="modal-content">
                        <button  type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span  aria-hidden="true">×</span>
                        </button>
                        <div  id="modal-wizard-container">
                            <div  className="modal-header">
                                <h5  className="modal-title h4"></h5>

                            </div>

                            <div  className="modal-body"></div>
                        </div>
                        <div  className="modal-footer"></div>
                    </div>
                </div>
            </div>
            <div  id="over-modal" className="modal fade" tabIndex='-1'>
                <div  className="modal-dialog">
                    <div  className="modal-content">
                        <button  type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span  aria-hidden="true">×</span>
                        </button>
                        <div  id="modal-wizard-container">
                            <div  className="modal-header">
                                <h5  className="modal-title h4"></h5>

                            </div>

                            <div  className="modal-body"></div>
                        </div>
                        <div  className="modal-footer"></div>
                    </div>
                </div>
            </div>
     </div>
     ))}
       </>
  )
}

export default MainPage
