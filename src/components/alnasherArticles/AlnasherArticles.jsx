import React from 'react'
import AlnasherTabs from "./AlnasherTabs"
import { Link } from 'react-router-dom'
import HorizantalNavbar from '../HorizantalNavbar'
import VerticalNavbar from '../VerticalNavbar'
const AlnasherArticles = () => {
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
              <Link to="/">
                الرئيسية
            </Link>
            </li>
            <li className="active">الناشر</li>
            <li>
              <Link
               to="/ArticlesPage"> 
               Article 
               </Link>
            </li>
          </ul>

          <div
            id="page-data"
            data-url="https://as-mangopulse-admin.azurewebsites.net/Publisher?type=article"
            data-title="Article"
          ></div>
        </div>
        <form
          action="/Publisher/Save"
          className="form-horizontal"
          id="PublisherForm"
          method="post"
        >
          <div className="page-content">
            <div className="page-header">
              <h1>
                الناشر
                <small>
                  <i className="ace-icon fa fa-angle-double-left"></i>
                  Article
                </small>
              </h1>
              <div className="page-operations">
                <Link 
                to="/Save" 
                className="btn btn-new success">
                  <i className="ace-icon fa fa-save"></i> حفظ
                </Link>
              </div>
            </div>

            <div className="row">
              <input
                data-val="true"
                data-val-required="The Id field is required."
                id="PostType_Id"
                name="PostType.Id"
                type="hidden"
                value="c8bcc2d9-ec89-11ec-985f-30d16bee5962"
              />
              <input
                id="PostType_Code"
                name="PostType.Code"
                type="hidden"
                value="article"
              />
              <input
                id="PostType_Name"
                name="PostType.Name"
                type="hidden"
                value="Article"
              />
              <input id="Term_Code" name="Term.Code" type="hidden" value="" />
              <input id="TermId" name="TermId" type="hidden" value="" />
              <input
                data-val="true"
                data-val-required="The SubscriptionId field is required."
                id="PostType_SubscriptionId"
                name="PostType.SubscriptionId"
                type="hidden"
                value="7506d461-6ad2-4a07-9ff2-e86cf0442261"
              />
              <div className="col-12">
                <div className="preview-content">
                  <div className="tabbable">
                     <AlnasherTabs />
                  </div>
                </div>
              </div>

              
            </div>
          </div>
          <input
            name="__RequestVerificationToken"
            type="hidden"
            value="CfDJ8Gw4EJhP_tFBqoXBSpM7LZ16qT-1E7rUxTwa0wnmCDSLEkuct9uqr3_oMrO_7C6dOMawc8h1Jdoqseo8DlSJXxIhvzX-kOThJ0y7UU_4hlrV80wMaii4N1iCb7lUAv3md_R4XkFl1a1thqZy_AIQbaXejCE_awhu4BP1UIJPXCNLobAgrdtp3F73_gKXbJNBkw"
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
        <div id="cboxContent" style={{float: "left"}}>
          <div id="cboxTitle" style={{float: "left"}}></div>
          <div id="cboxCurrent" style={{float: "left"}}></div>
          <button type="button" id="cboxPrevious"></button
          ><button type="button" id="cboxNext"></button
          ><button id="cboxSlideshow"></button>
          <div id="cboxLoadingOverlay"style={{float: "left"}}></div>
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
    }}
  ></textarea>
    </div>
  )
}

export default AlnasherArticles
