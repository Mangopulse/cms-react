
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import HorizantalNavbar from './HorizantalNavbar';
import VerticalNavbar from './VerticalNavbar';
import {authorHeader, mininavbar, author, HomeNavbar} from '../dummydata';
import Published from './AuthorsTakseem/Published';
import JadwalArticles from './JadwalArticles';
const AuthorsPage = () => {

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
              {HomeNavbar.map((val)=>(
              <Link 
              to="/"
              onClick={closeMobileMenu} > 
              <i className={val.home_icon}> </i>
              {val.main} 
              </Link>
              ))}
            </li>
            <li>
              <Link
              to="/AuthorsPage"
              onClick={closeMobileMenu} >
              Author 
              </Link>
            </li>
          </ul>

          <div
            id="page-data"
            data-url="https://as-mangopulse-admin.azurewebsites.net/Posts/Index?type=author"
            data-title="Author"
          ></div>
        </div>

        <div className="page-content">
        {authorHeader.map((val) => (
          <div className="page-header">
            <div className="quick-create">
              <Link to="/Add" title="">
              <i className={val.author_icon}></i
                >
              </Link>
            </div>
            <h1>{val.author_title}</h1>
             <div id="bulk-actions">
              <a data-href="/Posts/MultiplePublish" className="btn btn-new success"
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
            </div> 
              {mininavbar.map((val) => (
            <div className="page-operations">
              <Link
                to="/AlnasherAuthors"
                className="btn btn-new link btn-publihser-author"
                
                ><i className={val.alnasher_icon}></i> {val.alnasher}
              </Link>
              <Link
                to="/Published"
                className="btn btn-new link btn-tabs-author"
                ><i className={val.takseem_icon}></i>{val.takseem}
              </Link>
              <div
                data-toggle="buttons"
                className="btn-group btn-overlap view-switcher"
              >
                <Link 
                className="btn btn-new active" 
                to="/AuthorsPage">
                  <input type="radio" value="list" checked="checked" />
                  <i 
                  
                  className={val.list_icon}></i>
                </Link>

                <label className="btn btn-new" title="عرض جدول">
                  <input type="radio" value="grid" />
                  <Link
                  to="/JadwalArticles">
                  <i className={val.grid_icon}></i>
                  </Link>
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
                data-moreurl="/Posts?MainRequest=False&amp;type=author"
              >
                <table className="table">
                  <thead>
                  {authorHeader.map((val) => (
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

                      <th>{val.table_row_situation}</th>
                      <th></th>
                    </tr>
                  ))}
                  </thead>

                  <tbody>
                  {author.map((val) => (
                    <tr className="clickable-row" data-modelid="59">
                      <td>
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="check-row-1"
                          /><label
                            className="custom-control-label"
                            for="check-row-1"
                          ></label>
                        </div>
                      </td>
                      <td className="cell-main">
                        <a href="/Posts/author/Preview/59">
                          <img
                            data-src="https://as-mangopulse-media.azurewebsites.net/store/archive/image/2022/7/1/7922cb26-d061-43e8-ac90-8258ab12d97b.jpg"
                            src={val.image}
                            className="placeholder"
                          />
                        </a>
                        <div className="cell-data">
                          <Link
                           to="/AuthorLinks" 
                           className="cell-title">
                          {val.title}
                          </Link>
                          <div className="text posts-users table-metas">
                            <div className="posts-mod entry">
                              {val.description}
                            </div>

                            <span className="clearfix"></span>
                          </div>
                          <div className="text posts-media">
                            <a
                              href="https://as-mangopulse-admin.azurewebsites.net/Assets/Edit/Media/a2661777-f908-11ec-a81d-000d3aa9ccac?type=image"
                              ><i className={val.icon_2}></i
                            ></a>
                            <a
                              href="http://localhost:3000/Assets/Edit/Media/a2661777-f908-11ec-a81d-000d3aa9ccac?type=image"
                            >
                              <i
                                className={val.icon_1}
                                title="cover (Image)"
                              ></i>
                            </a>
                          </div>
                        </div>
                      </td>

                      <td className="cell-status">
                        <span className="label label-success"
                          ><i className={val.button_icon}></i>
                          {val.button}
                          </span>
                      </td>
                      <td className="cell-actions">
                        <div className="action-buttons">
                          <Link
                            to="/Edited"
                            className="btn btn-new info"
                            ><i className={val.edit_button_icon}></i> 
                            {val.edit_button}
                          </Link>

                          <Link
                            to="/NasherArticles"
                            className="btn btn-new pink"
                            ><i className={val.share_button_icon}></i> 
                            {val.share_button}
                          </Link>
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
                    <span className="input-group-addon" data-bind="click: previous"
                      ><i className="fa fa-chevron-right"></i></span
                    ><input
                      type="text"
                      className="form-control page-input"
                      data-bind="value: fetchingPage, event:{ change: changepage}"
                    /><span className="input-group-addon" data-bind="click: next"
                      ><i className="fa fa-chevron-left"></i></span>
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
        display: "none"
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
      minHeight: 0+"px",
      fontSize: 14+"px",
      fontWeight: 400,
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

export default AuthorsPage
