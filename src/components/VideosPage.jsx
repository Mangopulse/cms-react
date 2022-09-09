
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import HorizantalNavbar from './HorizantalNavbar';
import image1 from "../components/images/dxm.png";
import VerticalNavbar from './VerticalNavbar';
import { mininavbar, videoHeader, videos, videosIcons } from '../dummydata';




const VideosPage = () => {

  
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
              <li>
                <a href="/videospage"> Video </a>
              </li>
            </ul>

            <div
              id="page-data"
              data-url="https://as-mangopulse-admin.azurewebsites.net/Posts/Index?type=video"
              data-title="Video"
            ></div>
          </div>

          <div className="page-content">
          {videoHeader.map((val) => (
            <div className="page-header">
              <div className="quick-create">
                <a href="/Posts/Create?type=video" title=""
                  ><i className={val.video_icon}></i
                ></a>
              </div>
              <h1>{val.videos_title}</h1>
              {/* <div id="bulk-actions">
                <a
                  data-href="/Posts/MultiplePublish"
                  className="btn btn-new success"
                  ><i className="fa fa-check"></i>نشر</a
                >
                <a
                  data-href="/Posts/MultipleUnPublish"
                  className="btn btn-new warning"
                  ><i className="fa fa-times"></i>إلغاء نشر</a
                >
                <a data-href="/Posts/MultipleDelete" className="btn btn-new danger"
                  ><i className="fa fa-trash"></i>حذف</a
                >
              </div> */}
              {mininavbar.map((val) => (
              <div className="page-operations">
              <a
                href="/Publisher?type=author"
                className="btn btn-new link btn-publihser-author"
                ><i className={val.alnasher_icon}></i> {val.alnasher}
              </a>
              <a
                href="/Posts/Tabs?type=author"
                className="btn btn-new link btn-tabs-author"
                ><i className={val.takseem_icon}></i>{val.takseem}
              </a>
              <div
                data-toggle="buttons"
                className="btn-group btn-overlap view-switcher"
              >
                <label className="btn btn-new active" title="لائحة">
                  <input type="radio" value="list" checked="checked" />
                  <i className={val.list_icon}></i>
                </label>

                <label className="btn btn-new" title="عرض جدول">
                  <input type="radio" value="grid" />
                  <i className={val.grid_icon}></i>
                </label>
              </div>
            </div>
              ))}
            </div>
            ))}
            <div className="row">
              <div className="col-12">
                <div
                  className="data-table list"
                  data-size="20"
                  data-moreurl="/Posts?MainRequest=False&amp;type=video"
                >
                  <table className="table">
                  {videoHeader.map((val) => (
                    <thead>
                      <tr>
                        <th>
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="check-all"
                            /><label
                              className="custom-control-label"
                              for="check-all"
                            ></label>
                          </div>
                        </th>
                        <th>{val.table_row_title}</th>
                        <th className="cell-info-main">{val.table_row_category}</th>
                        <th className="hidden-480">{val.table_row_author}</th>

                        <th>{val.table_row_situation}</th>
                        <th></th>
                      </tr>
                    </thead>
                  ))}

                    <tbody>
                    {videos.map((val) => (
                      <tr className="clickable-row" data-modelid="1075">
                        <td>
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="check-row-0"
                            /><label
                              className="custom-control-label"
                              for="check-row-0"
                            ></label>
                          </div>
                        </td>
                        <td className="cell-main">
                          <a href="/Posts/video/Preview/1075">
                            <img
                              data-src="https://as-mangopulse-media.azurewebsites.net/store/archive/image/2022/8/23/2b641d96-d446-494a-aeff-35eb5b47e5bb.jpg"
                              src="https://as-mangopulse-media.azurewebsites.net/store/archive/image/2022/8/23/2b641d96-d446-494a-aeff-35eb5b47e5bb.jpg?preset=table-thumb"
                              className="placeholder"
                            />
                          </a>
                          <div className="cell-data">
                            <a
                              href="/Posts/video/Preview/1075"
                              className="cell-title"
                              >
                                {val.title}
                            </a>
                            <div className="text posts-users table-metas">
                              <div className="posts-mod entry">{val.date}</div>
                              <div className="posts-mod entry">
                              {val.last_update}
                              </div>

                              <span className="clearfix"></span>
                            </div>
                            <div className="text posts-media">
                            {videosIcons.map((val) => (
                              <a
                                href="https://as-mangopulse-front.azurewebsites.net/video/1075/testing"
                                className="notajax"
                                style={{margin:2+"px"}}
                                target="_blank">
                                <i className={val.icon}></i>
                                </a>
                            ))}
                            </div>
                          </div>
                        </td>
                        <td className="cell-info-main">{val.category}</td>
                        <td className="hidden-480 cell-info">
                          <a href="/Preview/author/Posts/59">{val.author}</a>
                        </td>

                        <td className="cell-status">
                          <span className="label label-success"
                            ><i className={val.button_icon}></i>
                            {val.button}</span>
                        </td>
                        <td className="cell-actions">
                          <div className="action-buttons">
                            <a
                              href="/Posts/video/Edit/1075"
                              className="btn btn-new info"
                              ><i className={val.edit_button_icon}></i> {val.edit_button}
                            </a>

                            <a
                              href="/Social/Publish/Share?postid=ff0b096f-22d8-11ed-a81d-000d3aa9c700"
                              className="btn btn-new pink"
                              ><i className={val.share_button}></i> {val.share_button}
                            </a>
                          </div>
                        </td>
                      </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="paging-wrapper">
                  <div className="p-block">
                    <input
                      type="number"
                      className="size-input"
                      max="100"
                      min="10"
                      step="10"
                      data-bind="value: size, event:{ change: changesize}"
                    />سطر في الصفحة
                  </div>
                  <div className="p-block"><span className="from-to"></span></div>
                  <div className="p-block">
                    <div className="input-group">
                      <span
                        className="input-group-addon"
                        data-bind="click: previous"
                        ><i className="fa fa-chevron-right"></i></span
                      ><input
                        type="text"
                        className="form-control page-input"
                        data-bind="value: fetchingPage, event:{ change: changepage}"
                      /><span className="input-group-addon" data-bind="click: next"
                        ><i className="fa fa-chevron-left"></i
                      ></span>
                    </div>
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
      style={{display: "none"}}
      aria-hidden="true"
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
    <div
      id="colorbox"
      className=""
      role="dialog"
      tabIndex="-1"
      style={{display: "none"}}
    >
      <div id="cboxWrapper">
        <div>
          <div id="cboxTopLeft" style={{float: "left"}}></div>
          <div id="cboxTopCenter" style={{float: "left"}}></div>
          <div id="cboxTopRight" style={{float: "left"}}></div>
        </div>
        <div style={{clear: "left"}}>
          <div id="cboxMiddleLeft"style={{float: "left"}}></div>
          <div id="cboxContent" style={{float: "left"}}>
            <div id="cboxTitle"style={{float: "left"}}></div>
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
        // inset: -999px auto auto 0px;
        border: 0+"px",
        padding: 0+"px",
        boxSizing: "content-box",
        overflowWrap: "break-word",
        overflow: "hidden",
        // transition: none 0s ease 0s;
        height: 0+"px",
        minHeight: 0 +"px",
      }}
    ></textarea>
    </div>
  )
}

export default VideosPage
