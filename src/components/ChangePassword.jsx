import React from 'react'
import HorizantalNavbar from './HorizantalNavbar'
import VerticalNavbar from './VerticalNavbar'
import { HomeNavbar } from '../dummydata'
import { Link } from 'react-router-dom'
const ChangePassword = () => {
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
            {HomeNavbar.map((val) => (
                      <li>
                        <i className={val.home_icon}></i>
                        <Link to="/">{val.main}</Link>
                      </li>
                    ))}
              <li className="active">تغيير كلمة السر</li>
            </ul>
  
            <div
              id="page-data"
              data-url="https://as-mangopulse-admin.azurewebsites.net/Account/ChangePassword"
              data-title="تغيير كلمة السر"
            ></div>
          </div>
          <form
            action="/Account/UpdatePassword"
            className="form-horizontal"
            id="user-form"
            method="post"
          >
            <div className="page-content">
              <div className="page-header">
                <h1>تغيير كلمة السر</h1>
                <div className="page-operations">
                  <button type="submit" className="btn btn-new success">
                    <i className="ace-icon fa fa-save"></i> حفظ
                  </button>
                </div>
              </div>
  
              <div className="row">
                <div className="col-12">
                  <div className="form-content">
                    <div className="form-group">
                      <label className="control-label col-sm-2">إسم المستخدم</label>
                      <div className="col-sm-10">techsupport</div>
                    </div>
                    <div className="form-group">
                      <label className="control-label col-sm-2"
                        >كلمة السر الخاصة بك</label
                      >
                      <div className="col-sm-2">
                        <input
                          className="col-12"
                          id="OldPassword"
                          name="OldPassword"
                          type="password"
                        />
                      </div>
                    </div>
  
                    <div className="form-group">
                      <label className="control-label col-sm-2"
                        >كلمة السر الجديدة</label
                      >
                      <div className="col-sm-2">
                        <span>
                          <input
                            className="col-12"
                            data-val="true"
                            data-val-required="The NewPassword field is required."
                            id="NewPassword"
                            name="NewPassword"
                            type="password"
                          />
                        </span>
                      </div>
                      <div className="col-sm-2">
                        <div id="pswd_info" position="absolute" z-index="+1">
                          <ul>
                            <li id="check" data-regex="2Pwds_equal" className="valid">
                              PasswordsMatch
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="control-label col-sm-2"
                        >تأكيد كلمة السر</label
                      >
                      <div className="col-sm-2">
                        <input
                          className="col-12"
                          data-val="true"
                          data-val-equalto="The new password and confirmation password do not match."
                          data-val-equalto-other="*.NewPassword"
                          id="ConfirmNewPassword"
                          name="ConfirmNewPassword"
                          type="password"
                        />
                      </div>
                    </div>
  
                    <input
                      data-val="true"
                      data-val-required="The UserId field is required."
                      id="UserId"
                      name="UserId"
                      type="hidden"
                      value="0b42217b-e575-49e3-8482-a37100cd76df"
                    />
                    <input
                      id="UserName"
                      name="UserName"
                      type="hidden"
                      value="techsupport"
                    />
                  </div>
                </div>
              </div>
            </div>
            <input
              name="__RequestVerificationToken"
              type="hidden"
              value="CfDJ8Gw4EJhP_tFBqoXBSpM7LZ0ywOCt0hoPCbHV56vm_p_WLHBOF_RaicwLOZE2NB3WD7AwfRCDRoJPbxCvjwVls_iBPVyO3DuwW8okWZgWRLr2DSrzR649YUWeyasYe07oQBC0gZiOie8DnugF4YPWpjyvL5N5xLNdg22SXQxC6yvtrgFh5A51vBOrM3KyZgwZpw"
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
        <div b-fjwotxpclx="" id="busy" style={{top: 260.5+"px", left: 618.5+"px"}}>
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
        height: 0+"px" ,
        minHeight: 0+"px" ,
      }}
    ></textarea>
  </div>
  
  )
}

export default ChangePassword
