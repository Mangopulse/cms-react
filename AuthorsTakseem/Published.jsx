import React from 'react'
import HorizantalNavbar from '../HorizantalNavbar'
import VerticalNavbar from '../VerticalNavbar'
import TakseemHeader from './TakseemHeader'
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
              <a href="/"> الرئيسية </a>
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
              <a href="/Posts/Tabs?type=author" className="btn btn-new info"
                ><i className="ace-icon fa fa-sync"></i> تحديث
              </a>
              <div className="pull-left">
                <a
                  href="/Posts?type=author"
                  className="btn btn-new pink btn-all-author"
                  ><i className="ace-icon fa fa-list"></i> الكل
                </a>
              </div>
            </div>
          </div>

          <div className="body-card">
            <div className="row">
              <div className="col-12">
                <div className="tabbable">
                  <ul className="nav nav-tabs" id="statustabs">
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="/Posts/Tabs?type=author&amp;status=10"
                      >
                        <i className="blue ace-icon fa fa-bolt bigger-120"></i>
                        New
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        href="/Posts/Tabs?type=author&amp;status=20"
                      >
                        <i className="green ace-icon fa fa-check bigger-120"></i>
                        Published
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="/Posts/Tabs?type=author&amp;status=30"
                      >
                        <i className="red ace-icon fa fa-times bigger-120"></i>
                        Unpublished
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="/Posts/Tabs?type=author&amp;status=-100"
                      >
                        <i className="red ace-icon fa fa-times bigger-120"></i>
                        Deleted
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="/Posts/Tabs?type=author&amp;status=-150"
                      >
                        <i className="ace-icon fa fa- bigger-120"></i>
                        Expired
                      </a>
                    </li>
                  </ul>

                  <div className="tab-content">
                    <div className="tab-pane fade in active show">
                      <div
                        className="data-table"
                        data-size="20"
                        data-moreurl="/Posts?MainRequest=False&amp;type=author&amp;Status=20"
                      >
                        <table className="table">
                          <thead>
                            <tr>
                              <th>عنوان</th>

                              <th>الحالة</th>
                              <th></th>
                            </tr>
                          </thead>

                          <tbody>
                            <tr className="clickable-row" data-modelid="59">
                              <td className="cell-main">
                                <a href="/Posts/author/Preview/59">
                                  <img
                                    data-src="https://as-mangopulse-media.azurewebsites.net/store/archive/image/2022/7/1/7922cb26-d061-43e8-ac90-8258ab12d97b.jpg"
                                    src="https://as-mangopulse-media.azurewebsites.net/store/archive/image/2022/7/1/7922cb26-d061-43e8-ac90-8258ab12d97b.jpg?preset=table-thumb"
                                    className="placeholder"
                                  />
                                </a>
                                <div className="cell-data">
                                  <a
                                    href="/Posts/author/Preview/59"
                                    className="cell-title"
                                    >Clark Jones
                                  </a>
                                  <div className="text posts-users table-metas">
                                    <div className="posts-mod entry">
                                      آخر تعديل بواسطة techsupport في 1 July
                                      06:40
                                    </div>

                                    <span className="clearfix"></span>
                                  </div>
                                  <div className="text posts-media">
                                    <a
                                      href="/Posts/GenerateLinks/470fdf05-f07d-11ec-9860-30d16bee5962"
                                      ><i className="fa fa-anchor"></i
                                    ></a>
                                    <a
                                      href="/Assets/Edit/Media/a2661777-f908-11ec-a81d-000d3aa9ccac?type=image"
                                    >
                                      <i
                                        className="purple fa fa-file-image"
                                        title="cover (Image)"
                                      ></i>
                                    </a>
                                  </div>
                                </div>
                              </td>

                              <td className="cell-status">
                                <span className="label label-success"
                                  ><i
                                    className="ace-icon fa fa-check bigger-120"
                                  ></i>
                                  Published</span
                                >
                              </td>
                              <td className="cell-actions">
                                <div className="action-buttons">
                                  <a
                                    href="/Posts/author/Edit/59"
                                    className="btn btn-new info"
                                    ><i className="ace-icon fa fa-edit"></i> تعديل
                                  </a>

                                  <a
                                    href="/Social/Publish/Share?postid=470fdf05-f07d-11ec-9860-30d16bee5962"
                                    className="btn btn-new pink"
                                    ><i className="ace-icon fa fa-share-alt"></i>
                                    نشر
                                  </a>
                                </div>
                              </td>
                            </tr>
                            <tr className="clickable-row" data-modelid="58">
                              <td className="cell-main">
                                <a href="/Posts/author/Preview/58">
                                  <img
                                    data-src="https://as-mangopulse-media.azurewebsites.net/store/archive/image/2022/7/1/4bd0ecc2-0c46-4648-b0f0-1f13249a33c9.jpg"
                                    src="https://as-mangopulse-media.azurewebsites.net/store/archive/image/2022/7/1/4bd0ecc2-0c46-4648-b0f0-1f13249a33c9.jpg?preset=table-thumb"
                                    className="placeholder"
                                  />
                                </a>
                                <div className="cell-data">
                                  <a
                                    href="/Posts/author/Preview/58"
                                    className="cell-title"
                                    >John Smith
                                  </a>
                                  <div className="text posts-users table-metas">
                                    <div className="posts-mod entry">
                                      آخر تعديل بواسطة techsupport في 1 July
                                      06:40
                                    </div>

                                    <span className="clearfix"></span>
                                  </div>
                                  <div className="text posts-media">
                                    <a
                                      href="/Posts/GenerateLinks/19bed437-f07d-11ec-9860-30d16bee5962"
                                      ><i className="fa fa-anchor"></i
                                    ></a>
                                    <a
                                      href="/Assets/Edit/Media/bdc5ad31-f908-11ec-a81d-000d3aa9ccac?type=image"
                                    >
                                      <i
                                        className="purple fa fa-file-image"
                                        title="cover (Image)"
                                      ></i>
                                    </a>
                                  </div>
                                </div>
                              </td>

                              <td className="cell-status">
                                <span className="label label-success"
                                  ><i
                                    className="ace-icon fa fa-check bigger-120"
                                  ></i>
                                  Published</span
                                >
                              </td>
                              <td className="cell-actions">
                                <div className="action-buttons">
                                  <a
                                    href="/Posts/author/Edit/58"
                                    className="btn btn-new info"
                                    ><i className="ace-icon fa fa-edit"></i> تعديل
                                  </a>

                                  <a
                                    href="/Social/Publish/Share?postid=19bed437-f07d-11ec-9860-30d16bee5962"
                                    className="btn btn-new pink"
                                    ><i className="ace-icon fa fa-share-alt"></i>
                                    نشر
                                  </a>
                                </div>
                              </td>
                            </tr>
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
                            /><span
                              className="input-group-addon"
                              data-bind="click: next"
                              ><i className="fa fa-chevron-left"></i
                            ></span>
                          </div>
                        </div>
                        <span className="clearfix"></span>
                      </div>
                    </div>
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
