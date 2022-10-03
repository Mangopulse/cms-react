import React from 'react'
import HorizantalNavbar from './HorizantalNavbar';
import VerticalNavbar from './VerticalNavbar';
const VideoLinks = () => {
  return (
    
    <div  className="no-skin rtl make-rtl">
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
              <a
                href="/Posts?Type=author&amp;OrderBy=CreationDate%20DESC&amp;Page=1&amp;MainRequest=True&amp;SearchRequest=False&amp;ThisYear=False&amp;SubscriptionId=00000000-0000-0000-0000-000000000000"
              >
                Author
              </a>
            </li>
            <li className="active">Video</li>
          </ul>

          <div className="nav-search">
            <form
              className="form-search"
              id="nav-search-form"
              action="/Posts/Search"
              method="GET"
              data-params="type=author&amp;term=&amp;OrderBy=p.CreationDate DESC"
              data-searchurl="https://search-dev.mangopulse.net/"
              data-index="ar"
              data-itemaction="/Posts/author/Preview"
              data-type="author"
            >
              <span className="input-icon">
                <span
                  className="twitter-typeahead"
                  style={{position: "relative", display: "inline-block", marginLeft:50+"px",textAlign:"right", alignItems:"right"}}
                  ><input
                    className="tt-hint"
                    type="text"
                    autocomplete="off"
                    spellcheck="off"
                    disabled=""
                    style={{
                      position: "absolute",
                      top: 0+"px",
                      left: 0+"px",
                      borderColor: "transparent",
                      boxShadow: "none",
                      display: "none",
                    }}/><input
                    type="text"
                    name="Query"
                    placeholder="بحث ..."
                    className="nav-search-input tt-query"
                    id="nav-search-input"
                    autocomplete="off"
                    spellcheck="false"
                    dir="auto" /><span
                    style={{
                      position: "absolute",
                      left: -9999+"px",
                      visibility: "hidden",
                      display: "none",
                      whiteSpace: "nowrap",
                      fontSize: 16+"px",
                      fontStyle: "normal",
                      fontVariant: "normal",
                      fontWeight: 400,
                      wordSpacing: 0+"px",
                      letterSpacing: 0+"px",
                      textIndent: 0+"px",
                      textRendering: "auto",
                      textTransform: "none",
                    }}
                  ></span
                  ><span
                    className="tt-dropdown-menu"
                    style={{
                      position: "absolute",
                      top: 100+"%",
                      left: 0+"px",
                      zIndex: 100,
                      display: "none",
                    }}
                  ></span
                ></span>
                <i className="ace-icon fa fa-search nav-search-icon"></i>
              </span>
              <a href="/Search/Filter" className="nav-search-settings"
                ><i className="ace-icon fa fa-cogs"></i
              ></a>
              <input type="hidden" name="MainRequest" value="true" />
            </form>
          </div>

          <div
            id="page-data"
            data-url="https://as-mangopulse-admin.azurewebsites.net/Posts/author/Preview/59"
            data-title="Author - Video"
          ></div>
        </div>
        <div className="page-content">
          <div className="page-header">
            <div className="personal-share">
              <input type="checkbox" className="checkbox" id="share" />
              <label for="share" className="entypo-export quick-create"
                ><i className="fa fa-share-alt" aria-hidden="true"></i
              ></label>
              <div className="social-networks-wrapper">
                <ul className="networks-list">
                  <li className="entypo-facebook">
                    <a
                      href="https://www.facebook.com/sharer/sharer.php?u="
                      target="_blank"
                      ><i className="fab fa-facebook-f" aria-hidden="true"></i
                    ></a>
                  </li>
                  <li className="entypo-twitter">
                    <a
                      href="https://twitter.com/intent/tweet?text=Video&amp;url="
                      target="_blank"
                      ><i className="fab fa-twitter" aria-hidden="true"></i
                    ></a>
                  </li>
                </ul>
              </div>
            </div>
            <h1>Video</h1>

            <div className="page-operations">
              <a href="/Posts/author/Edit/59" className="btn btn-new info"
                ><i className="ace-icon fa fa-edit"></i> تعديل
              </a>

              <a
                href="/Social/Publish/Share?postid=470fdf05-f07d-11ec-9860-30d16bee5962"
                className="btn btn-new pink"
                ><i className="ace-icon fa fa-share-alt"></i> نشر
              </a>

              <a href="/Posts/author/Withdraw/59" className="btn btn-new warning"
                ><i className="ace-icon fa fa-times"></i> إلغاء نشر
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
                      href="/Posts/author/Delete/59"
                      className="btn btn-new danger"
                      data-dontchangeurl="true"
                      data-confirmmessage="Are You Sure Delete"
                      data-href="/Posts/author/Delete/59"
                      ><i className="ace-icon fa fa-trash"></i> حذف
                    </a>
                  </li>
                  <li>
                    <a href="/Posts/author/Details/59" className="btn btn-new pink"
                      ><i className="ace-icon fa fa-info"></i> التفاصيل
                    </a>
                  </li>

                  <li>
                    <a href="/Posts/author/History/59" className="btn btn-new info"
                      ><i className="ace-icon fa fa-history"></i> السجل
                    </a>
                  </li>

                  <li>
                    <a href="/Posts/author/Share/59" className="btn btn-new success"
                      ><i className="ace-icon fa fa-bell"></i> Send To Social
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="post-preview-metas">
            <div className="line meta-entries">
              <span className="entry"
                ><b>تاريخ الإضافة:</b> 20 يونيو 09:42 (techsupport)</span
              >
              <span className="entry"
                ><b>آخر تعديل:</b> 1 يوليو 06:40 (techsupport)</span
              >
              <span className="entry"> <b>مشاهدات:</b> 0 </span>
              <span className="entry"> <b>نشر :</b> 0 </span>
            </div>
            <div className="line">
              <span className="label label-success"
                ><i className="ace-icon fa fa-check bigger-120"></i> منشور</span
              >
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <div className="post-preview">
                <div id="post-preview-options">
                  <a href="javascript:void(0)" className="switch-view" id="mobile"
                    ><i className="fa fa-mobile-alt"></i
                  ></a>
                  <span className="separator"></span>
                  <a href="javascript:void(0)" className="switch-view" id="tablet"
                    ><i className="fa fa-tablet-alt"></i
                  ></a>
                  <span className="separator"></span>
                  <a href="javascript:void(0)" className="switch-view" id="desktop"
                    ><i className="fa fa-desktop"></i
                  ></a>
                  <span className="separator"></span>
                  <a href="" target="_blank" className="notajax"
                    ><i className="fa fa-globe"></i
                  ></a>
                </div>
                <div className="mt-45"></div>
                <div id="post-preview-content">
                  <section>
                    <article>
                      <h1>Video</h1>
                      <ul className="meta-entries"></ul>
                      <span className="clearfix"></span>
                      <p className="post-summary">
                        Lectus urna duis convallis convallis tellus id interdum
                        velit. Mattis nunc sed blandit libero volutpat sed cras.
                        Dui sapien eget mi proin sed libero enim sed faucibus.
                        At tempor commodo ullamcorper a lacus. In hac habitasse
                        platea dictumst quisque. Sed odi
                      </p>
                    </article>
                  </section>
                </div>
                <div className="col-12"></div>
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
      <div b-fjwotxpclx="" id="busy" style={{top: 260.5+"px", left: 610+"px"}}>
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
      overflowWrap: "break-word",
      overflow: "hidden",
      height: 0+"px",
      minHeight: 0+"px" ,
    }}
  ></textarea>


    </div>
  )
}

export default VideoLinks
