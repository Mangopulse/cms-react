import React from 'react'
import HorizantalNavbar from '../HorizantalNavbar'
import VerticalNavbar from '../VerticalNavbar'
import Tabs from "./Tabs"
import { Link } from 'react-router-dom'
const Edited = () => {
  return (
    <div className="no-skin rtl make-rtl">
    <div className="navbar fixed-top" id="navbar">
       <HorizantalNavbar />
    </div>
    <div b-fjwotxpclx="" className="main-container" id="main-container">
      <div className="sidebar" id="sidebar">
        <VerticalNavbar />
        <div className="sidebar-toggle sidebar-collapse" id="sidebar-collapse">
        
        </div>
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
                <a href="/"> الرئيسية </a>
              </li>
              <li>
                <a href="/Posts/author/Preview/58"> John Smith </a>
              </li>
              <li>
                <a href="/Posts?type=article"> Article </a>
              </li>
              <li>
                <a href="/Posts?type=article&amp;term=sports"> Sports </a>
              </li>
              <li className="active">Lebanon to the basketball world cup</li>
            </ul>
  
            <div
              id="page-data"
              data-url="https://as-mangopulse-admin.azurewebsites.net/Posts/article/Edit/1332"
              data-title="Sports - Lebanon to the basketball world cup"
            ></div>
          </div>
  
          <div className="page-content">
            <form
              action="/Posts/Save"
              className="form-horizontal"
              id="posteditform"
              method="post"
            >
              <div className="page-header">
                <div className="pull-left language-buttons">
                  <div className="btn-toolbar inline middle no-margin">
                    <div data-toggle="buttons" className="btn-group no-margin">
                      <label className="btn btn-sm btn-yellow active">
                        <span className="bigger-110">en</span>
                        <input type="radio" value="en" />
                      </label>
                      <label className="btn btn-sm btn-yellow">
                        <span className="bigger-110">ar</span>
                        <input type="radio" value="ar" />
                      </label>
                    </div>
                  </div>
                </div>
  
                <h1>Lebanon to the basketball world cup</h1>
                <div className="page-operations">
                  <Link
                  to="/Save"
                   type="submit" className="btn btn-new success">
                    <i className="ace-icon fa fa-save"></i> حفظ
                  </Link>
                  <a  className="btn btn-new purple"
                    ><i className="ace-icon fa fa-eye"></i> معاينة
                  </a>
                  <a
                    href="https://as-mangopulse-front.azurewebsites.net/Preview/1332"
                    className="btn btn-new pink"
                    target="_blank"
                  >
                    <i className="fa fa-external-link-alt"></i>
                    الموقع
                  </a>
                  <a
                    
                    className="btn btn-new grey"
                    ><i className="ace-icon fa fa-times"></i> رجوع
                  </a>
                  <div className="btn-group">
                    <button
                      data-toggle="dropdown"
                      className="btn btn-new dropdown-toggle"
                      aria-expanded="false"
                    >
                      <span className="ace-icon fa fa-caret-down icon-only"></span>
                    </button>
                    <ul className="dropdown-menu-left dropdown-menu">
                      <li>
                        <a
                         
                          className="btn btn-new warning"
                          ><i className="ace-icon fa fa-times"></i> إلغاء نشر
                        </a>
                      </li>
                      <li>
                        <a
                          href="/Posts/article/AdvancedEdit/1332"
                          className="btn btn-new info"
                          ><i className="ace-icon fa fa-user-edit"></i> تعديل متقدم
                        </a>
                      </li>
                      <li>
                        <a
                          href="/Manage/Designer/Build/1332"
                          className="btn btn-new pink"
                          ><i className="ace-icon fa fa-palette"></i> التصميم
                        </a>
                      </li>
                      <li>
                        <a
                          href="/Posts/article/Details/1332"
                          className="btn btn-new purple"
                          ><i className="ace-icon fa fa-info"></i> التفاصيل
                        </a>
                      </li>
                      <li>
                        <a
                          href="/Posts/article/History/1332"
                          className="btn btn-new info"
                          ><i className="ace-icon fa fa-history"></i> السجل
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <Tabs />
              <input
                name="__RequestVerificationToken"
                type="hidden"
                value="CfDJ8Gw4EJhP_tFBqoXBSpM7LZ2ANPlt_cGWMOg0MgRJqcpPGVeLJZTTYaxz8ZrUokaz2DrjTsc76umPM54Zmy0V7jUqQIvtB4OpkpfzRjS6r_d_AZVaITdxeyxbXiB2cbmtlY94mALSJxbDwcCiIxj9FT_t3elbpn4zCSw2C4RVYL8tbZrMPT68Xlz5LNOa-X-SJg"
              />
            </form>
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
    <div b-fjwotxpclx="" id="message-modal" className="modal fade" tabIndex="-1">
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
          <div id="cboxTopCenter" style={{float: "left"}}></div>
          <div id="cboxTopRight" style={{float: "left"}}></div>
        </div>
        <div style={{clear: "left"}}>
          <div id="cboxMiddleLeft" style={{float: "left"}}></div>
          <div id="cboxContent"style={{float: "left"}}>
            <div id="cboxTitle" style={{float: "left"}}></div>
            <div id="cboxCurrent" style={{float: "left"}}></div>
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
        overflowWrap: "break-word",
        overflow: "hidden",
        height: 0+"px",
        minHeight: 0+"px" ,
        fontFamily: "Frutiger",
        fontSize: 14+"px",
        fontWeight: "400",
        fontStyle: "normal",
        letterSpacing: 0+"px",
        textTransform: "none",
        wordSpacing: 0+"px",
        textIndent: 0+"px",
        lineHeight: 18+"px",
        width: 0+"px",
      }}
      className="autosizejs"
    ></textarea>
    <div
      className="tox tox-silver-sink tox-tinymce-aux"
      style={{position: "relative"}}
    ></div>
    <div
      className="tox tox-silver-sink tox-tinymce-aux"
      style={{position: "relative"}}
    ></div>
  </div>
  
  )
}

export default Edited
