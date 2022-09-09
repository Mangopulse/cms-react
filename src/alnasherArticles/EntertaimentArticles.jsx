import React from 'react'
import HorizantalNavbar from '../HorizantalNavbar'
import VerticalNavbar from '../VerticalNavbar'
import AlnasherTableHeader from './AlnasherTableHeader'
const EntertaimentArticles = () => {
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
              <i className="ace-icon fa fa-home home-icon"> </i>
              <a href="/"> الرئيسية </a>
            </li>
            <li className="active">الناشر</li>
            <li>
              <a href="/Index/Posts?type=article&amp;term=entertainment">
                Article
              </a>
            </li>
          </ul>

          <div
            id="page-data"
            data-url="https://as-mangopulse-admin.azurewebsites.net/Publisher?type=article&amp;term=entertainment"
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
                  Article / Entertainment
                </small>
              </h1>
              <div className="page-operations">
                <button type="submit" className="btn btn-new success">
                  <i className="ace-icon fa fa-save"></i> حفظ
                </button>
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
              <input
                id="Term_Code"
                name="Term.Code"
                type="hidden"
                value="entertainment"
              />
              <input
                id="TermId"
                name="TermId"
                type="hidden"
                value="ef488fb6-ed60-11ec-9860-30d16bee5962"
              />
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
                     <AlnasherTableHeader />

                    <div className="tab-content">
                      <div className="tab-pane in active">
                        <div className="row">
                          <div className="col col-8">
                            <div className="profile-feed">
                              <div
                                data-bind="sortable: posts"
                                className="ko_container ui-sortable"
                                style={{paddingBottom: 100+"px"}}
                              >
                                <div className="profile-activity clearfix">
                                  <div>
                                    <img
                                      className="pull-right"
                                      data-bind="attr: { src: Image.Url }"
                                      src="//https://as-mangopulse-media.azurewebsites.net/store/archive/image/2022/6/27/d23ba107-36cf-4ce2-a98e-254b42a3a4ee.jpg?preset=ace-thumbnail"
                                    />
                                    <a
                                      className="user notajax"
                                      data-bind="html: Title"
                                      >New Season 8 Walking Dead trailer flashes
                                      forward in time</a
                                    >

                                    <div className="time">
                                      <i
                                        className="ace-icon fa fa-clock-o bigger-110"
                                      ></i>
                                      <span data-bind="html: Date"
                                        >2022-06-27 08:21:15</span
                                      >
                                      <span data-bind="html: Status"
                                        ><span className="label label-success"
                                          ><i
                                            className="ace-icon fa fa-check bigger-120"
                                          ></i>
                                          Published</span
                                        ></span
                                      >
                                    </div>
                                  </div>

                                  <div className="tools action-buttons">
                                    <a
                                      className="notajax purple"
                                      target="_blank"
                                      data-bind="attr: {href: PreviewUrl}"
                                      href="/Posts/article/Preview/77"
                                    >
                                      <i
                                        className="ace-icon fa fa-eye bigger-125"
                                      ></i>
                                    </a>
                                    <a
                                      className="red"
                                      data-bind="click:$parent.removePost"
                                    >
                                      <i
                                        className="ace-icon fa fa-trash bigger-125"
                                      ></i>
                                    </a>
                                  </div>
                                  <input
                                    type="hidden"
                                    data-bind="attr: { name: $parent.nameForInput($index(), 'Id') , value: Id }"
                                    name="Posts[0].Id"
                                    value="7539ade7-f5f1-11ec-9860-30d16bee5962"
                                  />
                                  <input
                                    type="hidden"
                                    data-bind="attr: { name: $parent.nameForInput($index(), 'Order') , value: $parent.order($index()) }"
                                    name="Posts[0].Order"
                                    value="1"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-4">
                            <div className="profile-feed">
                              <a
                                className="btn btn-new purple"
                                data-loadtype="popup"
                                href="/Posts/Browse?Type=article&amp;Term=entertainment&amp;OrderBy=CreationDate%20DESC&amp;Status=20&amp;Page=1&amp;MainRequest=True&amp;SearchRequest=False&amp;AllowedCount=-1&amp;ParentHandler=window.back.publisher&amp;ThisYear=False&amp;SubscriptionId=00000000-0000-0000-0000-000000000000"
                              >
                                <i className="fa fa-search bigger-125"></i>
                                إبحث
                              </a>
                              <div
                                data-bind="sortable:{ data:otherposts,template: 'otherPostsTmpl'}"
                                className="widget-body ko_container ui-sortable"
                                style={{
                                  overflowY: "scroll",
                                  height: 400+"px",
                                  marginTop: 10+"px",
                                }}
                              >
                                <div className="profile-activity clearfix">
                                  <div>
                                    <img
                                      className="pull-right"
                                      data-bind="attr: { src: Image.Url }"
                                      src="//https://as-mangopulse-media.azurewebsites.net/store/archive/image/2022/6/27/a6168525-5aed-4a95-bb3a-4acd15043479.jpg?preset=ace-thumbnail"
                                    />
                                    <a
                                      className="user notajax"
                                      data-bind="html: Title"
                                      >Disney’s live-action Aladdin finally
                                      finds its stars</a
                                    >

                                    <div className="time">
                                      <i
                                        className="ace-icon fa fa-clock-o bigger-110"
                                      ></i>
                                      <span data-bind="html: Date"
                                        >2022-06-27 08:21:13</span
                                      >
                                      <span data-bind="html: Status"
                                        ><span className="label label-success"
                                          ><i
                                            className="ace-icon fa fa-check bigger-120"
                                          ></i>
                                          Published</span
                                        ></span
                                      >
                                    </div>
                                  </div>

                                  <div className="tools action-buttons">
                                    <a
                                      className="notajax purple"
                                      target="_blank"
                                      data-bind="attr: {href: PreviewUrl}"
                                      href="/Posts/article/Preview/79"
                                    >
                                      <i
                                        className="ace-icon fa fa-eye bigger-125"
                                      ></i>
                                    </a>
                                  </div>
                                </div>
                                <div className="profile-activity clearfix">
                                  <div>
                                    <img
                                      className="pull-right"
                                      data-bind="attr: { src: Image.Url }"
                                      src="//https://as-mangopulse-media.azurewebsites.net/store/archive/image/2022/6/27/c9d71ff7-1683-437d-aa5a-475b5f90c507.jpg?preset=ace-thumbnail"
                                    />
                                    <a
                                      className="user notajax"
                                      data-bind="html: Title"
                                      >These ’90s fashion trends are making a
                                      comeback in 2017</a
                                    >

                                    <div className="time">
                                      <i
                                        className="ace-icon fa fa-clock-o bigger-110"
                                      ></i>
                                      <span data-bind="html: Date"
                                        >2022-06-27 08:21:11</span
                                      >
                                      <span data-bind="html: Status"
                                        ><span className="label label-success"
                                          ><i
                                            className="ace-icon fa fa-check bigger-120"
                                          ></i>
                                          Published</span
                                        ></span
                                      >
                                    </div>
                                  </div>

                                  <div className="tools action-buttons">
                                    <a
                                      className="notajax purple"
                                      target="_blank"
                                      data-bind="attr: {href: PreviewUrl}"
                                      href="/Posts/article/Preview/80"
                                    >
                                      <i
                                        className="ace-icon fa fa-eye bigger-125"
                                      ></i>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <span className="clearfix"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <script id="otherPostsTmpl" type="text/html">
                <div className="profile-activity clearfix">
                  <div>
                    <img
                      className="pull-right"
                      data-bind="attr: { src: Image.Url }"
                    />
                    <a className="user notajax" data-bind="html: Title"></a>

                    <div className="time">
                      <i className="ace-icon fa fa-clock-o bigger-110"></i>
                      <span data-bind="html: Date"></span>
                      <span data-bind="html: Status"></span>
                    </div>
                  </div>

                  <div className="tools action-buttons">
                    <a
                      className="notajax purple"
                      target="_blank"
                      data-bind="attr: {href: PreviewUrl}"
                    >
                      <i className="ace-icon fa fa-eye bigger-125"></i>
                    </a>
                  </div>
                </div>
              </script>
            </div>
          </div>
          <input
            name="__RequestVerificationToken"
            type="hidden"
            value="CfDJ8Gw4EJhP_tFBqoXBSpM7LZ09IMeuCt-nWDNEeIMKHlotK6ughN1vYvSbnnxFYr8_vePZ-DkcliKhA1C_bSz4bG-TESBbwTgEdo7Nq4MJkLw0_H7IH4Ikhyfsd34c21_GA_PtLp-aFQWEdfCghooAB_U9JuXt4NZ03flz-fWg8WE7h3F7h_YkvT9LYdLOMXXLFA"
          />
        </form>
        {/* <style>
          .ko_container {
              min-height: 200px;
          }

          .nav-tabs .nav-link {
              display: inline-block;
          }

          .publisher-arrow {
              padding: 5px 2px !important;
              float: left;
              margin- right: 0 !important;
              margin- left: 2px !important;
              border- right: none !important;
          }
        </style> */}

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
      // inset: -999px auto auto 0px;
      border: 0+"px",
      padding: 0+"px",
      boxSizing: "content-box",
      overflowWrap: "break-word",
      overflow: "hidden",
      // transition: none 0s ease 0s;
      height: 0+"px",
      minHeight: 0+"px" 
    }}
  ></textarea>
    </div>
  )
}

export default EntertaimentArticles
