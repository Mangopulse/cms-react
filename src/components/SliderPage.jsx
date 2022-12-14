
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import HorizantalNavbar from './HorizantalNavbar';
import { slider, sliderNavigation} from "../dummydata";
import VerticalNavbar from './VerticalNavbar';
import Sortable from './Sortable';


const SliderPage = () => {
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
    <div className="no-skin rtl make-rtl">
    <HorizantalNavbar />
    {" "}
      <div b-fjwotxpclx="" className="main-container" id="main-container">
        <VerticalNavbar />
        <div b-fjwotxpclx="" className="main-content">
          <div b-fjwotxpclx="" className="main-content-inner">
            <div className="breadcrumbs" id="breadcrumbs">
              <ul className="breadcrumb">
                <li>
               <Link 
              to="/"
              onClick={closeMobileMenu} >
              <i className="ace-icon fa fa-home home-icon"></i>
              الرئيسية
            </Link>
                </li>
                <li className="active">مكونات</li>
                <li className="active">Slider</li>
              </ul>

              <div
                id="page-data"
                data-url="https://as-mangopulse-admin.azurewebsites.net/Publisher/Widget?id=c207053b-f61f-11ec-8c71-f079596794cc"
                data-title="مكونات - Slider"
              ></div>
            </div>
            <form action="/Publisher/SaveWidget" id="widgetform" method="post">
              {" "}
              <div className="page-content">
              {sliderNavigation.map((val) =>(
                <div className="page-header">
                  <h1>{val.slider_title}</h1>
                  <div className="page-operations">
                    <Link 
                    to="/Save" 
                    className="btn btn-new success">
                     <i className={val.save_icon}></i>
                     {val.save}{" "}
                    </Link>
                    <Link
                      to="/Edit"
                      className="btn btn-new info"
                    >
                    <i className={val.edit_icon}></i>
                       {val.edit}{" "}
                    </Link>{" "}
                    <Link
                      to="/DeletePublish"
                      className="btn btn-new warning"
                    >
                     <i className={val.delete_nasher_icon}></i>
                      {val.delete_nasher}{" "}
                    </Link>{" "}
                  </div>
                </div>
              ))}
                <div className="row ">
                  <div className="col-12">
                    <div className="form-content">
                      <div className="widget-ids">
                        <a
                          className="btn btn-new purple"
                          data-loadtype="popup"
                          data-bind="visible: showBrowseButton()"
                          href="/Posts/Browse?AllowedCount=3&amp;parentHandler=window.back.pages.widgetmodule&amp;Types=article"
                          style={{ display: "none" }}
                        >
                          <i className="fa fa-search"></i>
                          إبحث
                        </a>
                        <div
                          data-bind="sortable: posts"
                          className="ui-sortable ko_container"
                        >
                           <Sortable />
                        </div>
                        <input
                          type="hidden"
                          name="Widget.DataSource.DataSourceType"
                          id="DataSourceType"
                          value="130"
                        />
                      </div>{" "}
                      <input
                        type="hidden"
                        name="WidgetId"
                        id="WidgetId"
                        value="c207053b-f61f-11ec-8c71-f079596794cc"
                      />
                      <input type="hidden" name="PostId" id="PostId" value="" />
                      <input
                        type="hidden"
                        name="WidgetCode"
                        id="WidgetCode"
                        value=""
                      />
                      <input type="hidden" name="Size" id="Size" value="3" />
                    </div>
                  </div>
                </div>
              </div>
              <input
                name="__RequestVerificationToken"
                type="hidden"
                value="CfDJ8EZk2NX_xnBCkG62YYnKRTErfOi_jdOBfBHV3LLc9FrHGX8oxhhXmEkbnqJRp28iWwM2uuIiGeKBOPP1haazODrtz53epg15PQRPq7ZojF8uYy9rWv6QF7pQBsUymovzbF7f65RORmmt-RTX8Wfmb6UJOUER7mWl0o-WU2eO5OPx9bA7zIMZ4VWSqH7AzwOkEg"
              />
            </form>

            <div className="hidden"></div>

            <input
              type="hidden"
              id="CurrentUserId"
              value="0b42217b-e575-49e3-8482-a37100cd76df"
            />
            <input type="hidden" id="CurrentUsername" value="techsupport" />
          </div>
          <span b-fjwotxpclx="" className="clearfix"></span>
        </div>
        <div
          b-fjwotxpclx=""
          className="hidden-content"
          style={{ display: "none" }}
        ></div>
        <div className="footer">
          <div className="footer-inner">
            <div className="footer-content">
              <span className="bigger-120">
                <span className="blue bold">© </span>
              </span>
            </div>
          </div>
        </div>
        <div b-fjwotxpclx="" id="busy-holder" style={{ display: "none" }}>
          <div
            b-fjwotxpclx=""
            id="busy"
            style={{ top: 260.5 + "px", left: 619 + "px" }}
          >
            <img
              b-fjwotxpclx=""
              src="//admango.cdn.mangomolo.com/analytics/mangopulse/images/loader.gif"
            />
          </div>
        </div>
      </div>
      <div
        b-fjwotxpclx=""
        id="message-modal"
        className="modal fade"
        tabIndex="-1"
      >
        <div b-fjwotxpclx="" className="modal-dialog">
          <div b-fjwotxpclx="" className="modal-content">
            <button
              b-fjwotxpclx=""
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span b-fjwotxpclx="" aria-hidden="true">
                ×
              </span>
            </button>
            <div b-fjwotxpclx="" className="modal-body"></div>
            <div b-fjwotxpclx="" className="modal-footer"></div>
          </div>
        </div>
      </div>
      <div
        b-fjwotxpclx=""
        id="default-modal"
        className="modal fade initialized"
        tabIndex="-1"
      >
        <div b-fjwotxpclx="" className="modal-dialog">
          <div b-fjwotxpclx="" className="modal-content">
            <button
              b-fjwotxpclx=""
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span b-fjwotxpclx="" aria-hidden="true">
                ×
              </span>
            </button>
            <div b-fjwotxpclx="" id="modal-wizard-container">
              <div b-fjwotxpclx="" className="modal-header">
                <h5 b-fjwotxpclx="" className="modal-title h4"></h5>
              </div>

              <div b-fjwotxpclx="" className="modal-body"></div>
            </div>
            <div b-fjwotxpclx="" className="modal-footer"></div>
          </div>
        </div>
      </div>
      <div
        b-fjwotxpclx=""
        id="over-modal"
        className="modal fade initialized"
        tabIndex="-1"
      >
        <div b-fjwotxpclx="" className="modal-dialog">
          <div b-fjwotxpclx="" className="modal-content">
            <button
              b-fjwotxpclx=""
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span b-fjwotxpclx="" aria-hidden="true">
                ×
              </span>
            </button>
            <div b-fjwotxpclx="" id="modal-wizard-container">
              <div b-fjwotxpclx="" className="modal-header">
                <h5 b-fjwotxpclx="" className="modal-title h4"></h5>
              </div>

              <div b-fjwotxpclx="" className="modal-body"></div>
            </div>
            <div b-fjwotxpclx="" className="modal-footer"></div>
          </div>
        </div>
      </div>
      <div id="cboxOverlay" style={{ display: "none" }}></div>
      <div
        id="colorbox"
        className=""
        role="dialog"
        tabIndex="-1"
        style={{ display: "none" }}
      >
        <div id="cboxWrapper">
          <div>
            <div id="cboxTopLeft" style={{ float: "left" }}></div>
            <div id="cboxTopCenter" style={{ float: "left" }}></div>
            <div id="cboxTopRight" style={{ float: "left" }}></div>
          </div>
          <div style={{ clear: "left" }}>
            <div id="cboxMiddleLeft" style={{ float: "left" }}></div>
            <div id="cboxContent" style={{ float: "left" }}>
              <div id="cboxTitle" style={{ float: "left" }}></div>
              <div id="cboxCurrent" style={{ float: "left" }}></div>
              <button type="button" id="cboxPrevious"></button>
              <button type="button" id="cboxNext"></button>
              <button id="cboxSlideshow"></button>
              <div id="cboxLoadingOverlay" style={{ float: "left" }}></div>
              <div id="cboxLoadingGraphic" style={{ float: "left" }}></div>
            </div>
            <div id="cboxMiddleRight" style={{ float: "left" }}></div>
          </div>
          <div style={{ clear: "left" }}>
            <div id="cboxBottomLeft" style={{ float: "left" }}></div>
            <div id="cboxBottomCenter" style={{ float: "left" }}></div>
            <div id="cboxBottomRight" style={{ float: "left" }}></div>
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            width: "9999px",
            visibility: "hidden",
            display: "none",
          }}
        ></div>
      </div>
      <textarea
        tabIndex="-1"
        style={{
          position: "absolute",
          /*inset: "-999px auto auto 0px",*/ border: 0 + "px",
          padding: 0 + "px",
          boxSizing: "content-box",
          overflowWrap: "break-word",
          overflow: "hidden",
          transition: "none 0s ease 0s",
          height: 0 + "px",
          minHeight: 0 + "px",
        }}
      ></textarea>
    </div>
  );
};

export default SliderPage;
