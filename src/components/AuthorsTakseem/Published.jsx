import React from 'react'
import { Link } from 'react-router-dom'
import Tabs from "./Tabs"
import HorizantalNavbar from '../HorizantalNavbar'
import VerticalNavbar from '../VerticalNavbar'
const Published = () => {
  return (
    <div className="no-skin rtl make-rtl">
     <div className="navbar fixed-top" id="navbar">
      <HorizantalNavbar />
  </div>
  <div b-fjwotxpclx="" className="main-container" id="main-container">
    <div className="sidebar" id="sidebar">
      <VerticalNavbar />
     
      <div className="technical-shortcuts">
        <a className="notajax" href="/Home/Refresh" title="Refresh">
          <i className="ace-icon fa fa-sync-alt"></i>
        </a>
        <a className="notajax" href="/Manage/ManageHome" title="Tools &amp; Setup">
          <i className="ace-icon fa fa-tools"></i>
        </a>
        <a className="notajax" href="/Technical/Configs" title="Configs">
          <i className="ace-icon fa fa-code"></i>
        </a>
      </div>
    </div>
    <div b-fjwotxpclx="" className="main-content">
      <div b-fjwotxpclx="" className="main-content-inner">
        <div className="breadcrumbs" id="breadcrumbs">
          <ul className="breadcrumb">
            <li>
              <i className="ace-icon fa fa-home home-icon"> </i>
              <Link to="/"> الرئيسية </Link>
            </li>
            <li>
              <a href="/Posts?type=author"> Author </a>
            </li>
          </ul>

          <div
            id="page-data"
            data-url="https://as-mangopulse-admin.azurewebsites.net/Posts/Tabs?type=author"
            data-title="Author"
          ></div>
        </div>
        <div className="page-content">
          <div className="page-header">
            <div className="quick-create">
              <a href="/Posts/Create?type=author" title=""
                ><i className="fa fa-plus"></i
              ></a>
            </div>
            <h1>Author</h1>
            <div className="page-operations">
              <Link 
              to="/Update" 
              className="btn btn-new info"
              >
              <i className="ace-icon fa fa-sync"></i> تحديث
              </Link>
              <div className="pull-left">
                <Link
                  to="/AuthorsPage"
                  className="btn btn-new pink btn-all-author"
                  ><i className="ace-icon fa fa-list"></i> الكل
                </Link>
              </div>
            </div>
          </div>

          <div className="body-card">
            <div className="row">
              <div className="col-12">
                <div className="tabbable">
                 <Tabs />
                </div>
                <span className="clearfix"></span>
              </div>
            </div>
          </div>
        </div>

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
    <div b-fjwotxpclx="" className="hidden-content" style={{display: "none"}}></div>
    <div className="footer">
      <div className="footer-inner">
        <div className="footer-content">
          <span className="bigger-120">
            <span className="blue bold">© </span>
          </span>
        </div>
      </div>
    </div>
    <div b-fjwotxpclx="" id="busy-holder" style={{display: "none"}}>
      <div b-fjwotxpclx="" id="busy" style={{top: 260.5+"px", left: 610.5+"px"}}>
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
    aria-hidden="true"
    style={{display: "none"}}
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
          <span b-fjwotxpclx="" aria-hidden="true">×</span>
        </button>
        <div b-fjwotxpclx="" className="modal-body">
          <div className="under-construction">
            <h3>
              An Error Has Occured
              <p></p>
            </h3>
          </div>
        </div>
        <div b-fjwotxpclx="" className="modal-footer">
          <button type="button" className="btn-new info" data-dismiss="modal">
            OK
          </button>
        </div>
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
          <span b-fjwotxpclx="" aria-hidden="true">×</span>
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
          <span b-fjwotxpclx="" aria-hidden="true">×</span>
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

  <div id="cboxOverlay" style={{display: "none"}}></div>
  <div id="colorbox" className="" role="dialog" tabIndex="-1" style={{display: "none"}}>
    <div id="cboxWrapper">
      <div>
        <div id="cboxTopLeft" style={{float: "left"}}></div>
        <div id="cboxTopCenter"  style={{float: "left"}}></div>
        <div id="cboxTopRight"  style={{float: "left"}}></div>
      </div>
      <div style={{clear: "left"}}>
        <div id="cboxMiddleLeft"   style={{float: "left"}}></div>
        <div id="cboxContent"  style={{float: "left"}}>
          <div id="cboxTitle"  style={{float: "left"}}></div>
          <div id="cboxCurrent"  style={{float: "left"}}></div>
          <button type="button" id="cboxPrevious"></button
          ><button type="button" id="cboxNext"></button
          ><button id="cboxSlideshow"></button>
          <div id="cboxLoadingOverlay" style={{float: "left"}}></div>
          <div id="cboxLoadingGraphic" style={{float: "left"}}></div>
        </div>
        <div id="cboxMiddleRight" style={{float: "left"}}></div>
      </div>
      <div style={{clear: "left"}}>
        <div id="cboxBottomLeft" style={{float: "left"}}></div>
        <div id="cboxBottomCenter" style={{float: "left"}}></div>
        <div id="cboxBottomRight" style={{float: "left"}}></div>
      </div>
    </div>
    <div
      style={{
        position: "absolute",
        width: 9999+"px",
        visibility: "hidden",
        display: "none",
      }}
    ></div>
  </div>
  <textarea
    tabIndex="-1"
    style={{
      position: "absolute",
      border: 0+"px",
      padding: 0+"px",
      boxSizing: "content-box",
      overflowWrap:" break-word",
      overflow: "hidden",
      height: 0+"px",
      minHeight: 0+"px",
    }}
  ></textarea>
  </div>
  )
}

export default Published
