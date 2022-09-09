import React from 'react'
import VerticalNavbar from '../VerticalNavbar'
import AlnasherTableHeader from './AlnasherTableHeader'
import HorizantalNavbar from '../HorizantalNavbar'
const AlnasherBusiness = () => {
  return (
    <div className="no-skin rtl make-rtl">
    <HorizantalNavbar />
  <div b-fjwotxpclx="" className="main-container" id="main-container">
    <div className="sidebar" id="sidebar">
      <VerticalNavbar />
      <div className="sidebar-toggle sidebar-collapse" id="sidebar-collapse">
        <i
          className="ace-icon fa fa-angle-double-right"
          data-icon1="ace-icon fa fa-angle-double-right"
          data-icon2="ace-icon fa fa-angle-double-left"
        ></i>
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
            <li className="active">الناشر</li>
            <li>
              <a href="/Index/Posts?type=article&amp;term=business">
                Article
              </a>
            </li>
          </ul>

          <div
            id="page-data"
            data-url="https://as-mangopulse-admin.azurewebsites.net/Publisher?type=article&amp;term=business"
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
                  Article / Business
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
                value="business"
              />
              <input
                id="TermId"
                name="TermId"
                type="hidden"
                value="2f75326f-ed61-11ec-9860-30d16bee5962"
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
                              ></div>
                            </div>
                          </div>
                          <div className="col-4">
                            <div className="profile-feed">
                              <a
                                className="btn btn-new purple"
                                data-loadtype="popup"
                                href="/Posts/Browse?Type=article&amp;Term=business&amp;OrderBy=CreationDate%20DESC&amp;Status=20&amp;Page=1&amp;MainRequest=True&amp;SearchRequest=False&amp;AllowedCount=-1&amp;ParentHandler=window.back.publisher&amp;ThisYear=False&amp;SubscriptionId=00000000-0000-0000-0000-000000000000"
                              >
                                <i className="fa fa-search bigger-125"></i>
                                إبحث
                              </a>
                              <div
                                data-bind="sortable:{ data:otherposts,template: 'otherPostsTmpl'}"
                                className="widget-body ko_container ui-sortable"
                                style={{
                                  overflowy: "scroll",
                                  height: 400+"px",
                                  margintop: 10+"px",
                                }}
                              >
                                <div className="profile-activity clearfix">
                                  <div>
                                    <img
                                      className="pull-right"
                                      data-bind="attr: { src: Image.Url }"
                                      src="//https://as-mangopulse-media.azurewebsites.net/store/archive/image/2022/7/1/419aaac3-603f-42af-8207-4f59899825e9.jpg?preset=ace-thumbnail"
                                    />
                                    <a
                                      className="user notajax"
                                      data-bind="html: Title"
                                      >How to understand your employees and keep
                                      them happy</a
                                    >

                                    <div className="time">
                                      <i
                                        className="ace-icon fa fa-clock-o bigger-110"
                                      ></i>
                                      <span data-bind="html: Date"
                                        >2022-07-01 07:12:31</span
                                      >
                                      <span data-bind="html: Status"
                                        ><span className="label label-success"
                                          ><i
                                            className="ace-icon fa fa-check bigger-120"
                                          ></i>
                                          منشور</span
                                        ></span
                                      >
                                    </div>
                                  </div>

                                  <div className="tools action-buttons">
                                    <a
                                      className="notajax purple"
                                      target="_blank"
                                      data-bind="attr: {href: PreviewUrl}"
                                      href="/Posts/article/Preview/98"
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
                                      src="//https://as-mangopulse-media.azurewebsites.net/store/archive/image/2022/7/1/c25407db-c13c-4a99-8c1f-3df2e892a3ad.gif?preset=ace-thumbnail"
                                    />
                                    <a
                                      className="user notajax"
                                      data-bind="html: Title"
                                      >15 Habits that could be hurting your
                                      business relationships</a
                                    >

                                    <div className="time">
                                      <i
                                        className="ace-icon fa fa-clock-o bigger-110"
                                      ></i>
                                      <span data-bind="html: Date"
                                        >2022-07-01 07:11:00</span
                                      >
                                      <span data-bind="html: Status"
                                        ><span className="label label-success"
                                          ><i
                                            className="ace-icon fa fa-check bigger-120"
                                          ></i>
                                          منشور</span
                                        ></span
                                      >
                                    </div>
                                  </div>

                                  <div className="tools action-buttons">
                                    <a
                                      className="notajax purple"
                                      target="_blank"
                                      data-bind="attr: {href: PreviewUrl}"
                                      href="/Posts/article/Preview/97"
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
                                      src="//https://as-mangopulse-media.azurewebsites.net/store/archive/image/2022/7/1/ba37d5fe-1718-4965-bd1c-a825be8e5f30.jpg?preset=ace-thumbnail"
                                    />
                                    <a
                                      className="user notajax"
                                      data-bind="html: Title"
                                      >6 Stunning new co-working spaces around
                                      the globe</a
                                    >

                                    <div className="time">
                                      <i
                                        className="ace-icon fa fa-clock-o bigger-110"
                                      ></i>
                                      <span data-bind="html: Date"
                                        >2022-07-01 07:09:25</span
                                      >
                                      <span data-bind="html: Status"
                                        ><span className="label label-success"
                                          ><i
                                            className="ace-icon fa fa-check bigger-120"
                                          ></i>
                                          منشور</span
                                        ></span
                                      >
                                    </div>
                                  </div>

                                  <div className="tools action-buttons">
                                    <a
                                      className="notajax purple"
                                      target="_blank"
                                      data-bind="attr: {href: PreviewUrl}"
                                      href="/Posts/article/Preview/91"
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
                                      src="//https://as-mangopulse-media.azurewebsites.net/store/archive/image/2022/7/1/4560ec65-9dcf-4914-ae7d-c082e6b7c44d.jpg?preset=ace-thumbnail"
                                    />
                                    <a
                                      className="user notajax"
                                      data-bind="html: Title"
                                      >3 Ways to make your business presentation
                                      more relatable</a
                                    >

                                    <div className="time">
                                      <i
                                        className="ace-icon fa fa-clock-o bigger-110"
                                      ></i>
                                      <span data-bind="html: Date"
                                        >2022-07-01 07:09:19</span
                                      >
                                      <span data-bind="html: Status"
                                        ><span className="label label-success"
                                          ><i
                                            className="ace-icon fa fa-check bigger-120"
                                          ></i>
                                          منشور</span
                                        ></span
                                      >
                                    </div>
                                  </div>

                                  <div className="tools action-buttons">
                                    <a
                                      className="notajax purple"
                                      target="_blank"
                                      data-bind="attr: {href: PreviewUrl}"
                                      href="/Posts/article/Preview/92"
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
                                      src="//https://as-mangopulse-media.azurewebsites.net/store/archive/image/2022/7/1/df3b284c-ef2e-451b-b62d-f9b80832cf67.jpg?preset=ace-thumbnail"
                                    />
                                    <a
                                      className="user notajax"
                                      data-bind="html: Title"
                                      >This is how you dress for a job
                                      interview, and land an offer</a
                                    >

                                    <div className="time">
                                      <i
                                        className="ace-icon fa fa-clock-o bigger-110"
                                      ></i>
                                      <span data-bind="html: Date"
                                        >2022-07-01 07:09:14</span
                                      >
                                      <span data-bind="html: Status"
                                        ><span className="label label-success"
                                          ><i
                                            className="ace-icon fa fa-check bigger-120"
                                          ></i>
                                          منشور</span
                                        ></span
                                      >
                                    </div>
                                  </div>

                                  <div className="tools action-buttons">
                                    <a
                                      className="notajax purple"
                                      target="_blank"
                                      data-bind="attr: {href: PreviewUrl}"
                                      href="/Posts/article/Preview/93"
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
                                      src="//https://as-mangopulse-media.azurewebsites.net/store/archive/image/2022/7/1/79a94dba-4b40-4adc-b463-fb2245d30ca8.jpg?preset=ace-thumbnail"
                                    />
                                    <a
                                      className="user notajax"
                                      data-bind="html: Title"
                                      >Uber and Lyft are finally available in
                                      all of New York State</a
                                    >

                                    <div className="time">
                                      <i
                                        className="ace-icon fa fa-clock-o bigger-110"
                                      ></i>
                                      <span data-bind="html: Date"
                                        >2022-07-01 07:09:09</span
                                      >
                                      <span data-bind="html: Status"
                                        ><span className="label label-success"
                                          ><i
                                            className="ace-icon fa fa-check bigger-120"
                                          ></i>
                                          منشور</span
                                        ></span
                                      >
                                    </div>
                                  </div>

                                  <div className="tools action-buttons">
                                    <a
                                      className="notajax purple"
                                      target="_blank"
                                      data-bind="attr: {href: PreviewUrl}"
                                      href="/Posts/article/Preview/94"
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
                                      src="//https://as-mangopulse-media.azurewebsites.net/store/archive/image/2022/7/1/debf6f77-f1f8-4b1c-8668-550947455c27.jpg?preset=ace-thumbnail"
                                    />
                                    <a
                                      className="user notajax"
                                      data-bind="html: Title"
                                      >The 9 worst mistakes you can ever make at
                                      work</a
                                    >

                                    <div className="time">
                                      <i
                                        className="ace-icon fa fa-clock-o bigger-110"
                                      ></i>
                                      <span data-bind="html: Date"
                                        >2022-07-01 07:09:04</span
                                      >
                                      <span data-bind="html: Status"
                                        ><span className="label label-success"
                                          ><i
                                            className="ace-icon fa fa-check bigger-120"
                                          ></i>
                                          منشور</span
                                        ></span
                                      >
                                    </div>
                                  </div>

                                  <div className="tools action-buttons">
                                    <a
                                      className="notajax purple"
                                      target="_blank"
                                      data-bind="attr: {href: PreviewUrl}"
                                      href="/Posts/article/Preview/95"
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
                                      src="//https://as-mangopulse-media.azurewebsites.net/store/archive/image/2022/6/30/6e38adc4-d7b9-4a74-8bec-d21f419a2e17.jpg?preset=ace-thumbnail"
                                    />
                                    <a
                                      className="user notajax"
                                      data-bind="html: Title"
                                      >MSNBC finishes first in primetime basic
                                      cable for first time ever</a
                                    >

                                    <div className="time">
                                      <i
                                        className="ace-icon fa fa-clock-o bigger-110"
                                      ></i>
                                      <span data-bind="html: Date"
                                        >2022-06-30 14:09:00</span
                                      >
                                      <span data-bind="html: Status"
                                        ><span className="label label-success"
                                          ><i
                                            className="ace-icon fa fa-check bigger-120"
                                          ></i>
                                          منشور</span
                                        ></span
                                      >
                                    </div>
                                  </div>

                                  <div className="tools action-buttons">
                                    <a
                                      className="notajax purple"
                                      target="_blank"
                                      data-bind="attr: {href: PreviewUrl}"
                                      href="/Posts/article/Preview/90"
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
            value="CfDJ8Gw4EJhP_tFBqoXBSpM7LZ1YaoSgDZbDpdAfDCzlZcEAkbdjNsG4g6Yl0PPvD1xC129PNiXk9SXF1S6KsIbN-B8-oTrBsLU_9DmAH4DlhaPKw6HY_VOJJSn_EtXbsX9haGI-Ck7aIAtY7m1VWlZXztfHJxCrg14vUQof5izWVBu1z6DgmOWsFahm1wa5Dh8Yww"
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

export default AlnasherBusiness
