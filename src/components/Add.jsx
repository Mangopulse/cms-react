import React from 'react'
import HorizantalNavbar from './HorizantalNavbar'
import VerticalNavbar from './VerticalNavbar'
import { HomeNavbar } from '../dummydata'
import { Link } from 'react-router-dom'
const Add = () => {
  return (
    <div className="no-skin rtl make-rtl">
  <div className="navbar fixed-top" id="navbar">
     <HorizantalNavbar/>
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
            {HomeNavbar.map((val)=>(
            <li>
              <i className={val.home_icon}> </i>
              <a href="/"> {val.main} </a>
            </li>
            ))}
            <li>
              <Link to="/ArticlesPage"> Article </Link>
            </li>
            <li className="active">جديد</li>
          </ul>

          <div
            id="page-data"
            data-url="https://as-mangopulse-admin.azurewebsites.net/Posts/Create?type=article"
            data-title="Article - جديد"
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

              <h1>Article</h1>
              <div className="page-operations">
                <button type="submit" className="btn btn-new success">
                  <i className="ace-icon fa fa-save"></i> حفظ
                </button>
                <a href="/Posts?type=article" className="btn btn-new grey"
                  ><i className="ace-icon fa fa-times"></i> رجوع
                </a>
              </div>
            </div>
            <div className="row">
              <div className="col-12 post-form">
                <div className="form-content">
                  <div className="en-form language-forms" style={{padding: 20+"px"}}>
                    <div className="tabbable">
                      <ul className="nav nav-tabs" id="postTabs">
                        <li
                          className="detailstab nav-item"
                          data-index="0"
                          data-title="details"
                        >
                          <a
                            data-toggle="tab"
                            href="#detailstab"
                            className="notajax nav-link active"
                          >
                            <i
                              className="green ace-icon fa fa-info-circle bigger-110"
                            ></i
                            ><span style={{padding: 0+"px"+ 3+"px"}}>التفاصيل</span>
                          </a>
                        </li>
                        <li
                          className="contenttab nav-item"
                          data-index="1"
                          data-title="content"
                        >
                          <a
                            data-toggle="tab"
                            href="#contenttab"
                            className="notajax nav-link"
                          >
                            <i
                              className="pink ace-icon fa fa-i-cursor bigger-110"
                            ></i
                            ><span style={{padding: 0+"px"+ 3+"px"}}>المحرر</span>
                          </a>
                        </li>
                        <li
                          className="widgetstab nav-item"
                          data-index="3"
                          data-title="widgets"
                          style={{display: "none"}}
                        >
                          <a
                            data-toggle="tab"
                            href="#widgetstab"
                            className="notajax nav-link"
                          >
                            <i className="black ace-icon fa fa-cubes bigger-110"></i
                            ><span style={{padding: 0+"px"+ 3+"px"}}>مكونات</span>
                          </a>
                        </li>
                      </ul>
                      <span className="clearfix"></span>
                      <div className="tab-content post-tab-content">
                        <div id="detailstab" className="tab-pane in active komain">
                          <div className="form-group title required">
                            <label className="control-label col-sm-1">عنوان</label>
                            <div className="col-sm-11">
                              <input
                                className="col-12 confirmtoedit limited"
                                id="Title"
                                name="Title"
                                type="text"
                                autocomplete="off"
                                autofocus=""
                                maxlength="256"
                                data-addedto="0"
                              />
                              <div
                                className="fieldlength"
                            //     style={{color: "rgb(238, 238, 238)"
                            // }}
                              >
                                0
                              </div>
                            </div>
                          </div>

                          <div className="form-group summary">
                            <label className="control-label col-sm-1">ملخص</label>
                            <div className="col-sm-11">
                              <textarea
                                id="Summary"
                                name="Summary"
                                className="col col-12"
                                maxlength="256"
                              ></textarea>
                            </div>
                          </div>

                          <div className="form-group postdate">
                            <label className="control-label col-sm-1"
                              >التاريخ</label
                            >
                            <div className="col-sm-11">
                              <div className="">
                                <div className="input-group">
                                  <input
                                    className="input-large date-picker col-12"
                                    id="PostDate"
                                    name="PostDate"
                                    value=""
                                    type="text"
                                    data-date-format="YYYY-MM-DD HH:mm"
                                    placeholder="YYYY-MM-DD HH:mm"
                                    autocomplete="off"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>

                          <input
                            className="col-12"
                            id="Style"
                            name="Style"
                            type="hidden"
                          />
                          <input
                            type="hidden"
                            name="PublicLink"
                            id="PublicLink"
                          />

                          <input type="hidden" name="Packages" id="Packages" />
                          <input
                            type="hidden"
                            name="FrontUser.Id"
                            id="FrontUser.Id"
                          />

                          <div className="form-group relation-ArticleAuthor">
                            <label className="control-label col-sm-1">Author</label>
                            <div className="col-sm-11 profile-users">
                              <div
                                data-bind="foreach: filteredRelatives('ArticleAuthor')"
                              ></div>
                              <a
                                className="btn btn-new purple"
                                data-bind="visible: showAddRelations('ArticleAuthor')"
                                data-loadtype="popup"
                                href="/Posts/Browse?Types=author&amp;AllowedCount=1&amp;ParentHandler=window.back.pages.postmodule&amp;ReturnValue=ArticleAuthor%3AAuthor"
                              >
                                <i className="fa fa-search"></i>
                                إبحث
                              </a>
                              <input
                                type="hidden"
                                name="Allowed-ArticleAuthor"
                                id="Allowed-ArticleAuthor"
                                value="1"
                              />
                            </div>
                          </div>

                          <div className="form-group terms-category">
                            <label className="control-label col-sm-1"
                              >Category</label
                            >
                            <div className="col-sm-11">
                              <input
                                type="hidden"
                                id="Terms[0].TaxonomyId"
                                name="Terms[0].TaxonomyId"
                                value="eff682f4-ed5e-11ec-9860-30d16bee5962"
                              />
                              <div className="tags">
                                <div className="tags">
                                  <input
                                    type="text"
                                    className="tagfield"
                                    value=""
                                    data-taxonomy="eff682f4-ed5e-11ec-9860-30d16bee5962"
                                    id="Terms[0].Value"
                                    name="Terms[0].Value"
                                    data-auto-add="true"
                                    style={{
                                      display: "none",
                                      overflow: "hidden",
                                      overflowWrap: "break-word",
                                      resize: "none",
                                      height: 18+"px",
                                    }}
                                  /><input type="text" placeholder="" />
                                </div>
                              </div>
                            </div>
                            <div className="col-2"></div>
                          </div>
                          <div className="form-group terms-tags">
                            <label className="control-label col-sm-1">Tags</label>
                            <div className="col-sm-11">
                              <input
                                type="hidden"
                                id="Terms[1].TaxonomyId"
                                name="Terms[1].TaxonomyId"
                                value="eff95874-1d62-11ed-a81d-000d3aa9c700"
                              />
                              <div className="tags">
                                <div className="tags">
                                  <input
                                    type="text"
                                    className="tagfield"
                                    value=""
                                    data-taxonomy="eff95874-1d62-11ed-a81d-000d3aa9c700"
                                    id="Terms[1].Value"
                                    name="Terms[1].Value"
                                    data-auto-add="false"
                                    style={{
                                        display: "none",
                                        overflow: "hidden",
                                        overflowWrap: "break-word",
                                        resize: "none",
                                        height: 18+"px",
                                      }}
                                  /><input type="text" placeholder="" />
                                </div>
                              </div>
                            </div>
                            <div className="col-2"></div>
                          </div>

                          <div className="form-group meta-ShowInEN" >
                            <label className="control-label col-sm-1"
                              >English</label
                            >
                            <div className="col-sm-11">
                              <div className="custom-control custom-switch">
                                <input
                                  type="checkbox"
                                  className="custom-control-input"
                                  id="Metas[0].Value"
                                  name="Metas[0].Value"
                                  value="true"
                                /><label
                                  className="custom-control-label"
                                  for="Metas[0].Value"
                                  >English</label
                                >
                              </div>
                              <input
                                type="hidden"
                                name="Metas[0].Id"
                                value=""
                              />
                              <input
                                type="hidden"
                                name="Metas[0].Key"
                                value="ShowInEN"
                              />
                              <input
                                type="hidden"
                                name="Metas[0].Title"
                                value="English"
                              />
                              <input
                                type="hidden"
                                name="Metas[0].Icon"
                                value=""
                              />
                              <input
                                type="hidden"
                                name="Metas[0].Order"
                                value="-2"
                              />
                            </div>
                          </div>
                          <div className="form-group meta-ShowInAR">
                            <label className="control-label col-sm-1"
                              >العربية</label
                            >
                            <div className="col-sm-11">
                              <div className="custom-control custom-switch">
                                <input
                                  type="checkbox"
                                  className="custom-control-input"
                                  id="Metas[1].Value"
                                  name="Metas[1].Value"
                                  value="true"
                                /><label
                                  className="custom-control-label"
                                  for="Metas[1].Value"
                                  >العربية</label
                                >
                              </div>
                              <input
                                type="hidden"
                                name="Metas[1].Id"
                                value=""
                              />
                              <input
                                type="hidden"
                                name="Metas[1].Key"
                                value="ShowInAR"
                              />
                              <input
                                type="hidden"
                                name="Metas[1].Title"
                                value="العربية"
                              />
                              <input
                                type="hidden"
                                name="Metas[1].Icon"
                                value=""
                              />
                              <input
                                type="hidden"
                                name="Metas[1].Order"
                                value="-1"
                              />
                            </div>
                          </div>

                          <div className="form-group fieldgroup-cover required">
                            <label className="control-label col-sm-1">Cover</label>
                            <div className="col-sm-11">
                              <div
                                data-bind="visible:showUploadButtons('cover')"
                              >
                                <a
                                  href="/Assets/Media/MediaUpload?ParentHandler=window.back.pages.postmodule&amp;NoCrop=False&amp;NoCaption=False&amp;Compress=True&amp;CropRatio=1&amp;Placement=cover&amp;Count=1&amp;PostId=00000000-0000-0000-0000-000000000000&amp;PostTypeId=c8bcc2d9-ec89-11ec-985f-30d16bee5962&amp;type=image"
                                  className="btn btn-new purple"
                                  data-appendtoconainer="true"
                                  data-container="body"
                                  data-loadtype="popup"
                                  ><i className="ace-icon fa fa-file-image"></i>
                                  Upload Image
                                </a>
                                <div
                                  style={{padding: 10+"px", color: "#c95b5b"}}
                                ></div>
                              </div>
                              <ul
                                className="ace-thumbnails clearfix"
                                data-bind="foreach: filteredMedias('cover')"
                              ></ul>
                            </div>
                          </div>
                          <input type="hidden" id="maxmedia-cover" value="1" />
                          <input type="hidden" id="maxsize-cover" />
                          <div className="form-group fieldgroup-longCover required">
                            <label className="control-label col-sm-1"
                              >Long Cover</label
                            >
                            <div className="col-sm-11">
                              <div
                                data-bind="visible:showUploadButtons('longCover')"
                              >
                                <a
                                  href="/Assets/Media/MediaUpload?ParentHandler=window.back.pages.postmodule&amp;NoCrop=False&amp;NoCaption=False&amp;Compress=True&amp;CropRatio=2&amp;Placement=longCover&amp;Count=1&amp;PostId=00000000-0000-0000-0000-000000000000&amp;PostTypeId=c8bcc2d9-ec89-11ec-985f-30d16bee5962&amp;type=image"
                                  className="btn btn-new purple"
                                  data-appendtoconainer="true"
                                  data-container="body"
                                  data-loadtype="popup"
                                  ><i className="ace-icon fa fa-file-image"></i>
                                  Upload Image
                                </a>
                                <div
                                style={{padding: 10+"px", color: "#c95b5b"}}
                                ></div>
                              </div>
                              <ul
                                className="ace-thumbnails clearfix"
                                data-bind="foreach: filteredMedias('longCover')"
                              ></ul>
                            </div>
                          </div>
                          <input
                            type="hidden"
                            id="maxmedia-longCover"
                            value="1"
                          />
                          <input type="hidden" id="maxsize-longCover" />
                          <input
                            type="hidden"
                            id="EditorPlacement"
                            value="editor"
                          />

                          <input
                            type="hidden"
                            name="TemplateId"
                            id="TemplateId"
                          />

                          <div
                            className="form-group hidden widgetswrapper"
                            style={{display: "none"}}
                          >
                            <label className="control-label col-sm-1">مكونات</label>
                            <div className="col-sm-11">
                              <textarea
                                id="Widgets"
                                name="Widgets"
                                className="col col-12 jsonview"
                                rows="15"
                                style={{
                                  direction: "ltr",
                                  textAlign: "left",
                                  maxHeight: 500+"px",
                                  overflow: "scroll",
                                }}
                              ></textarea>
                            </div>
                          </div>

                          <span className="clearfix"></span>
                        </div>
                        <div id="contenttab" className="tab-pane komain">
                          <div className="form-group editor">
                            <textarea
                              className="admin-new-editor initialized"
                              id="PostContent"
                              name="Content"
                              data-doc-id="00000000-0000-0000-0000-000000000000"
                              data-type="content"
                              aria-hidden="true"
                              style={{display: "none"}}
                            ></textarea>
                            <div
                              role="application"
                              className="tox tox-tinymce"
                              aria-disabled="false"
                              style={{visibility: "hidden", height: 500+"px"}}
                            >
                              <div className="tox-editor-container">
                                <div
                                  data-alloy-vertical-dir="toptobottom"
                                  className="tox-editor-header"
                                >
                                  <div
                                    role="group"
                                    className="tox-toolbar-overlord"
                                    aria-disabled="false"
                                  >
                                    <div
                                      role="group"
                                      className="tox-toolbar__primary"
                                    >
                                      <div
                                        title=""
                                        role="toolbar"
                                        data-alloy-tabstop="true"
                                        tabIndex="-1"
                                        className="tox-toolbar__group"
                                      >
                                        <button
                                          aria-label="Clear formatting"
                                          title="Clear formatting"
                                          type="button"
                                          tabIndex="-1"
                                          className="tox-tbtn"
                                          aria-disabled="false"
                                        >
                                          <span
                                            className="tox-icon tox-tbtn__icon-wrap"
                                            ><svg
                                              width="24"
                                              height="24"
                                              focusable="false"
                                            >
                                              <path
                                                d="M13.2 6a1 1 0 010 .2l-2.6 10a1 1 0 01-1 .8h-.2a.8.8 0 01-.8-1l2.6-10H8a1 1 0 110-2h9a1 1 0 010 2h-3.8zM5 18h7a1 1 0 010 2H5a1 1 0 010-2zm13 1.5L16.5 18 15 19.5a.7.7 0 01-1-1l1.5-1.5-1.5-1.5a.7.7 0 011-1l1.5 1.5 1.5-1.5a.7.7 0 011 1L17.5 17l1.5 1.5a.7.7 0 01-1 1z"
                                                fill-rule="evenodd"
                                              ></path></svg
                                          ></span></button
                                        ><button
                                          aria-label="Undo"
                                          title="Undo"
                                          type="button"
                                          tabIndex="-1"
                                          className="tox-tbtn tox-tbtn--disabled"
                                          aria-disabled="true"
                                        >
                                          <span
                                            className="tox-icon tox-tbtn__icon-wrap"
                                            ><svg
                                              width="24"
                                              height="24"
                                              focusable="false"
                                            >
                                              <path
                                                d="M6.4 8H12c3.7 0 6.2 2 6.8 5.1.6 2.7-.4 5.6-2.3 6.8a1 1 0 01-1-1.8c1.1-.6 1.8-2.7 1.4-4.6-.5-2.1-2.1-3.5-4.9-3.5H6.4l3.3 3.3a1 1 0 11-1.4 1.4l-5-5a1 1 0 010-1.4l5-5a1 1 0 011.4 1.4L6.4 8z"
                                                fill-rule="nonzero"
                                              ></path></svg
                                          ></span></button
                                        ><button
                                          aria-label="Redo"
                                          title="Redo"
                                          type="button"
                                          tabIndex="-1"
                                          className="tox-tbtn tox-tbtn--disabled"
                                          aria-disabled="true"
                                        >
                                          <span
                                            className="tox-icon tox-tbtn__icon-wrap"
                                            ><svg
                                              width="24"
                                              height="24"
                                              focusable="false"
                                            >
                                              <path
                                                d="M17.6 10H12c-2.8 0-4.4 1.4-4.9 3.5-.4 2 .3 4 1.4 4.6a1 1 0 11-1 1.8c-2-1.2-2.9-4.1-2.3-6.8.6-3 3-5.1 6.8-5.1h5.6l-3.3-3.3a1 1 0 111.4-1.4l5 5a1 1 0 010 1.4l-5 5a1 1 0 01-1.4-1.4l3.3-3.3z"
                                                fill-rule="nonzero"
                                              ></path></svg
                                          ></span>
                                        </button>
                                      </div>
                                      <div
                                        title=""
                                        role="toolbar"
                                        data-alloy-tabstop="true"
                                        tabIndex="-1"
                                        className="tox-toolbar__group"
                                      >
                                        <button
                                          aria-label="Fullscreen"
                                          title="Fullscreen"
                                          type="button"
                                          tabIndex="-1"
                                          className="tox-tbtn"
                                          aria-disabled="false"
                                          aria-pressed="false"
                                        >
                                          <span
                                            className="tox-icon tox-tbtn__icon-wrap"
                                            ><svg
                                              width="24"
                                              height="24"
                                              focusable="false"
                                            >
                                              <path
                                                d="M15.3 10l-1.2-1.3 2.9-3h-2.3a.9.9 0 110-1.7H19c.5 0 .9.4.9.9v4.4a.9.9 0 11-1.8 0V7l-2.9 3zm0 4l3 3v-2.3a.9.9 0 111.7 0V19c0 .5-.4.9-.9.9h-4.4a.9.9 0 110-1.8H17l-3-2.9 1.3-1.2zM10 15.4l-2.9 3h2.3a.9.9 0 110 1.7H5a.9.9 0 01-.9-.9v-4.4a.9.9 0 111.8 0V17l2.9-3 1.2 1.3zM8.7 10L5.7 7v2.3a.9.9 0 01-1.7 0V5c0-.5.4-.9.9-.9h4.4a.9.9 0 010 1.8H7l3 2.9-1.3 1.2z"
                                                fill-rule="nonzero"
                                              ></path></svg
                                          ></span></button
                                        ><button
                                          aria-label="Source code"
                                          title="Source code"
                                          type="button"
                                          tabIndex="-1"
                                          className="tox-tbtn"
                                          aria-disabled="false"
                                        >
                                          <span
                                            className="tox-icon tox-tbtn__icon-wrap"
                                            ><svg
                                              width="24"
                                              height="24"
                                              focusable="false"
                                            >
                                              <g fill-rule="nonzero">
                                                <path
                                                  d="M9.8 15.7c.3.3.3.8 0 1-.3.4-.9.4-1.2 0l-4.4-4.1a.8.8 0 010-1.2l4.4-4.2c.3-.3.9-.3 1.2 0 .3.3.3.8 0 1.1L6 12l3.8 3.7zM14.2 15.7c-.3.3-.3.8 0 1 .4.4.9.4 1.2 0l4.4-4.1c.3-.3.3-.9 0-1.2l-4.4-4.2a.8.8 0 00-1.2 0c-.3.3-.3.8 0 1.1L18 12l-3.8 3.7z"
                                                ></path>
                                              </g></svg
                                          ></span></button
                                        ><button
                                          aria-label="Preview"
                                          title="Preview"
                                          type="button"
                                          tabIndex="-1"
                                          className="tox-tbtn"
                                          aria-disabled="false"
                                        >
                                          <span
                                            className="tox-icon tox-tbtn__icon-wrap"
                                            ><svg
                                              width="24"
                                              height="24"
                                              focusable="false"
                                            >
                                              <path
                                                d="M3.5 12.5c.5.8 1.1 1.6 1.8 2.3 2 2 4.2 3.2 6.7 3.2s4.7-1.2 6.7-3.2a16.2 16.2 0 002.1-2.8 15.7 15.7 0 00-2.1-2.8c-2-2-4.2-3.2-6.7-3.2a9.3 9.3 0 00-6.7 3.2A16.2 16.2 0 003.2 12c0 .2.2.3.3.5zm-2.4-1l.7-1.2L4 7.8C6.2 5.4 8.9 4 12 4c3 0 5.8 1.4 8.1 3.8a18.2 18.2 0 012.8 3.7v1l-.7 1.2-2.1 2.5c-2.3 2.4-5 3.8-8.1 3.8-3 0-5.8-1.4-8.1-3.8a18.2 18.2 0 01-2.8-3.7 1 1 0 010-1zm12-3.3a2 2 0 102.7 2.6 4 4 0 11-2.6-2.6z"
                                                fill-rule="nonzero"
                                              ></path></svg
                                          ></span></button
                                        ><button
                                          aria-label="Help"
                                          title="Help"
                                          type="button"
                                          tabIndex="-1"
                                          className="tox-tbtn"
                                          aria-disabled="false"
                                        >
                                          <span
                                            className="tox-icon tox-tbtn__icon-wrap"
                                            ><svg
                                              width="24"
                                              height="24"
                                              focusable="false"
                                            >
                                              <g fill-rule="evenodd">
                                                <path
                                                  d="M12 5.5a6.5 6.5 0 00-6 9 6.3 6.3 0 001.4 2l1 1a6.3 6.3 0 003.6 1 6.5 6.5 0 006-9 6.3 6.3 0 00-1.4-2l-1-1a6.3 6.3 0 00-3.6-1zM12 4a7.8 7.8 0 015.7 2.3A8 8 0 1112 4z"
                                                ></path>
                                                <path
                                                  d="M9.6 9.7a.7.7 0 01-.7-.8c0-1.1 1.5-1.8 3.2-1.8 1.8 0 3.2.8 3.2 2.4 0 1.4-.4 2.1-1.5 2.8-.2 0-.3.1-.3.2a2 2 0 00-.8.8.8.8 0 01-1.4-.6c.3-.7.8-1 1.3-1.5l.4-.2c.7-.4.8-.6.8-1.5 0-.5-.6-.9-1.7-.9-.5 0-1 .1-1.4.3-.2 0-.3.1-.3.2v-.2c0 .4-.4.8-.8.8z"
                                                  fill-rule="nonzero"
                                                ></path>
                                                <circle
                                                  cx="12"
                                                  cy="16"
                                                  r="1"
                                                ></circle>
                                              </g></svg
                                          ></span>
                                        </button>
                                      </div>
                                      <div
                                        title=""
                                        role="toolbar"
                                        data-alloy-tabstop="true"
                                        tabIndex="-1"
                                        className="tox-toolbar__group"
                                      >
                                        <button
                                          aria-label="Find and replace"
                                          title="Find and replace"
                                          type="button"
                                          tabIndex="-1"
                                          className="tox-tbtn"
                                          aria-disabled="false"
                                        >
                                          <span
                                            className="tox-icon tox-tbtn__icon-wrap"
                                            ><svg
                                              width="24"
                                              height="24"
                                              focusable="false"
                                            >
                                              <path
                                                d="M16 17.3a8 8 0 111.4-1.4l4.3 4.4a1 1 0 01-1.4 1.4l-4.4-4.3zm-5-.3a6 6 0 100-12 6 6 0 000 12z"
                                                fill-rule="nonzero"
                                              ></path></svg
                                          ></span>
                                        </button>
                                      </div>
                                      <div
                                        title=""
                                        role="toolbar"
                                        data-alloy-tabstop="true"
                                        tabIndex="-1"
                                        className="tox-toolbar__group"
                                      >
                                        <button
                                          aria-label="Bold"
                                          title="Bold"
                                          type="button"
                                          tabIndex="-1"
                                          className="tox-tbtn"
                                          aria-disabled="false"
                                          aria-pressed="false"
                                        >
                                          <span
                                            className="tox-icon tox-tbtn__icon-wrap"
                                            ><svg
                                              width="24"
                                              height="24"
                                              focusable="false"
                                            >
                                              <path
                                                d="M7.8 19c-.3 0-.5 0-.6-.2l-.2-.5V5.7c0-.2 0-.4.2-.5l.6-.2h5c1.5 0 2.7.3 3.5 1 .7.6 1.1 1.4 1.1 2.5a3 3 0 01-.6 1.9c-.4.6-1 1-1.6 1.2.4.1.9.3 1.3.6s.8.7 1 1.2c.4.4.5 1 .5 1.6 0 1.3-.4 2.3-1.3 3-.8.7-2.1 1-3.8 1H7.8zm5-8.3c.6 0 1.2-.1 1.6-.5.4-.3.6-.7.6-1.3 0-1.1-.8-1.7-2.3-1.7H9.3v3.5h3.4zm.5 6c.7 0 1.3-.1 1.7-.4.4-.4.6-.9.6-1.5s-.2-1-.7-1.4c-.4-.3-1-.4-2-.4H9.4v3.8h4z"
                                                fill-rule="evenodd"
                                              ></path></svg
                                          ></span></button
                                        ><button
                                          aria-label="Italic"
                                          title="Italic"
                                          type="button"
                                          tabIndex="-1"
                                          className="tox-tbtn"
                                          aria-disabled="false"
                                          aria-pressed="false"
                                        >
                                          <span
                                            className="tox-icon tox-tbtn__icon-wrap"
                                            ><svg
                                              width="24"
                                              height="24"
                                              focusable="false"
                                            >
                                              <path
                                                d="M16.7 4.7l-.1.9h-.3c-.6 0-1 0-1.4.3-.3.3-.4.6-.5 1.1l-2.1 9.8v.6c0 .5.4.8 1.4.8h.2l-.2.8H8l.2-.8h.2c1.1 0 1.8-.5 2-1.5l2-9.8.1-.5c0-.6-.4-.8-1.4-.8h-.3l.2-.9h5.8z"
                                                fill-rule="evenodd"
                                              ></path></svg
                                          ></span></button
                                        ><button
                                          aria-label="Underline"
                                          title="Underline"
                                          type="button"
                                          tabIndex="-1"
                                          className="tox-tbtn"
                                          aria-disabled="false"
                                          aria-pressed="false"
                                        >
                                          <span
                                            className="tox-icon tox-tbtn__icon-wrap"
                                            ><svg
                                              width="24"
                                              height="24"
                                              focusable="false"
                                            >
                                              <path
                                                d="M16 5c.6 0 1 .4 1 1v5.5a4 4 0 01-.4 1.8l-1 1.4a5.3 5.3 0 01-5.5 1 5 5 0 01-1.6-1c-.5-.4-.8-.9-1.1-1.4a4 4 0 01-.4-1.8V6c0-.6.4-1 1-1s1 .4 1 1v5.5c0 .3 0 .6.2 1l.6.7a3.3 3.3 0 002.2.8 3.4 3.4 0 002.2-.8c.3-.2.4-.5.6-.8l.2-.9V6c0-.6.4-1 1-1zM8 17h8c.6 0 1 .4 1 1s-.4 1-1 1H8a1 1 0 010-2z"
                                                fill-rule="evenodd"
                                              ></path></svg
                                          ></span></button
                                        ><button
                                          aria-label="Strikethrough"
                                          title="Strikethrough"
                                          type="button"
                                          tabIndex="-1"
                                          className="tox-tbtn"
                                          aria-disabled="false"
                                          aria-pressed="false"
                                        >
                                          <span
                                            className="tox-icon tox-tbtn__icon-wrap"
                                            ><svg
                                              width="24"
                                              height="24"
                                              focusable="false"
                                            >
                                              <g fill-rule="evenodd">
                                                <path
                                                  d="M15.6 8.5c-.5-.7-1-1.1-1.3-1.3-.6-.4-1.3-.6-2-.6-2.7 0-2.8 1.7-2.8 2.1 0 1.6 1.8 2 3.2 2.3 4.4.9 4.6 2.8 4.6 3.9 0 1.4-.7 4.1-5 4.1A6.2 6.2 0 017 16.4l1.5-1.1c.4.6 1.6 2 3.7 2 1.6 0 2.5-.4 3-1.2.4-.8.3-2-.8-2.6-.7-.4-1.6-.7-2.9-1-1-.2-3.9-.8-3.9-3.6C7.6 6 10.3 5 12.4 5c2.9 0 4.2 1.6 4.7 2.4l-1.5 1.1z"
                                                ></path>
                                                <path
                                                  d="M5 11h14a1 1 0 010 2H5a1 1 0 010-2z"
                                                  fill-rule="nonzero"
                                                ></path>
                                              </g></svg
                                          ></span>
                                        </button>
                                      </div>
                                      <div
                                        title=""
                                        role="toolbar"
                                        data-alloy-tabstop="true"
                                        tabIndex="-1"
                                        className="tox-toolbar__group"
                                      >
                                        <button
                                          aria-label="Align left"
                                          title="Align left"
                                          type="button"
                                          tabIndex="-1"
                                          className="tox-tbtn"
                                          aria-disabled="false"
                                          aria-pressed="false"
                                        >
                                          <span
                                            className="tox-icon tox-tbtn__icon-wrap"
                                            ><svg
                                              width="24"
                                              height="24"
                                              focusable="false"
                                            >
                                              <path
                                                d="M5 5h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 110-2zm0 4h8c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 110-2zm0 8h8c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 010-2zm0-4h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 010-2z"
                                                fill-rule="evenodd"
                                              ></path></svg
                                          ></span></button
                                        ><button
                                          aria-label="Align center"
                                          title="Align center"
                                          type="button"
                                          tabIndex="-1"
                                          className="tox-tbtn"
                                          aria-disabled="false"
                                          aria-pressed="false"
                                        >
                                          <span
                                            className="tox-icon tox-tbtn__icon-wrap"
                                            ><svg
                                              width="24"
                                              height="24"
                                              focusable="false"
                                            >
                                              <path
                                                d="M5 5h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 110-2zm3 4h8c.6 0 1 .4 1 1s-.4 1-1 1H8a1 1 0 110-2zm0 8h8c.6 0 1 .4 1 1s-.4 1-1 1H8a1 1 0 010-2zm-3-4h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 010-2z"
                                                fill-rule="evenodd"
                                              ></path></svg
                                          ></span></button
                                        ><button
                                          aria-label="Align right"
                                          title="Align right"
                                          type="button"
                                          tabIndex="-1"
                                          className="tox-tbtn"
                                          aria-disabled="false"
                                          aria-pressed="false"
                                        >
                                          <span
                                            className="tox-icon tox-tbtn__icon-wrap"
                                            ><svg
                                              width="24"
                                              height="24"
                                              focusable="false"
                                            >
                                              <path
                                                d="M5 5h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 110-2zm6 4h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 010-2zm0 8h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 010-2zm-6-4h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 010-2z"
                                                fill-rule="evenodd"
                                              ></path></svg
                                          ></span></button
                                        ><button
                                          aria-label="Justify"
                                          title="Justify"
                                          type="button"
                                          tabIndex="-1"
                                          className="tox-tbtn"
                                          aria-disabled="false"
                                          aria-pressed="false"
                                        >
                                          <span
                                            className="tox-icon tox-tbtn__icon-wrap"
                                            ><svg
                                              width="24"
                                              height="24"
                                              focusable="false"
                                            >
                                              <path
                                                d="M5 5h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 110-2zm0 4h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 110-2zm0 4h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 010-2zm0 4h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 010-2z"
                                                fill-rule="evenodd"
                                              ></path></svg
                                          ></span>
                                        </button>
                                      </div>
                                      <div
                                        title=""
                                        role="toolbar"
                                        data-alloy-tabstop="true"
                                        tabIndex="-1"
                                        className="tox-toolbar__group"
                                      >
                                        <button
                                          aria-label="Heading 3"
                                          title="Heading 3"
                                          type="button"
                                          tabIndex="-1"
                                          className="tox-tbtn tox-tbtn--select"
                                          aria-disabled="false"
                                          aria-pressed="false"
                                        >
                                          <span className="tox-tbtn__select-label"
                                            >H3</span
                                          ></button
                                        ><button
                                          aria-label="Heading 4"
                                          title="Heading 4"
                                          type="button"
                                          tabIndex="-1"
                                          className="tox-tbtn tox-tbtn--select"
                                          aria-disabled="false"
                                          aria-pressed="false"
                                        >
                                          <span className="tox-tbtn__select-label"
                                            >H4</span
                                          >
                                        </button>
                                      </div>
                                      <div
                                        title=""
                                        role="toolbar"
                                        data-alloy-tabstop="true"
                                        tabIndex="-1"
                                        className="tox-toolbar__group"
                                      >
                                        <button
                                          aria-label="Upload Image"
                                          title="Upload Image"
                                          type="button"
                                          tabIndex="-1"
                                          className="tox-tbtn"
                                          aria-disabled="false"
                                        >
                                          <span
                                            className="tox-icon tox-tbtn__icon-wrap"
                                            ><svg
                                              width="24"
                                              height="24"
                                              focusable="false"
                                            >
                                              <path
                                                d="M5 15.7l3.3-3.2c.3-.3.7-.3 1 0L12 15l4.1-4c.3-.4.8-.4 1 0l2 1.9V5H5v10.7zM5 18V19h3l2.8-2.9-2-2L5 17.9zm14-3l-2.5-2.4-6.4 6.5H19v-4zM4 3h16c.6 0 1 .4 1 1v16c0 .6-.4 1-1 1H4a1 1 0 01-1-1V4c0-.6.4-1 1-1zm6 8a2 2 0 100-4 2 2 0 000 4z"
                                                fill-rule="nonzero"
                                              ></path></svg
                                          ></span></button
                                        ><button
                                          aria-label="Upload Video"
                                          title="Upload Video"
                                          type="button"
                                          tabIndex="-1"
                                          className="tox-tbtn"
                                          aria-disabled="false"
                                        >
                                          <span
                                            className="tox-icon tox-tbtn__icon-wrap"
                                            ><svg
                                              width="24"
                                              height="24"
                                              focusable="false"
                                            >
                                              <path
                                                fill-rule="nonzero"
                                                d="M5 15.7l2.3-2.2c.3-.3.7-.3 1 0L11 16l5.1-5c.3-.4.8-.4 1 0l2 1.9V8H5v7.7zM5 18V19h3l1.8-1.9-2-2L5 17.9zm14-3l-2.5-2.4-6.4 6.5H19v-4zM4 6h16c.6 0 1 .4 1 1v13c0 .6-.4 1-1 1H4a1 1 0 01-1-1V7c0-.6.4-1 1-1zm6 7a2 2 0 110-4 2 2 0 010 4zM4.5 4h15a.5.5 0 110 1h-15a.5.5 0 010-1zm2-2h11a.5.5 0 110 1h-11a.5.5 0 010-1z"
                                              ></path></svg
                                          ></span></button
                                        ><button
                                          aria-label="Insert/edit media"
                                          title="Insert/edit media"
                                          type="button"
                                          tabIndex="-1"
                                          className="tox-tbtn"
                                          aria-disabled="false"
                                          aria-pressed="false"
                                        >
                                          <span
                                            className="tox-icon tox-tbtn__icon-wrap"
                                            ><svg
                                              width="24"
                                              height="24"
                                              focusable="false"
                                            >
                                              <path
                                                d="M4 3h16c.6 0 1 .4 1 1v16c0 .6-.4 1-1 1H4a1 1 0 01-1-1V4c0-.6.4-1 1-1zm1 2v14h14V5H5zm4.8 2.6l5.6 4a.5.5 0 010 .8l-5.6 4A.5.5 0 019 16V8a.5.5 0 01.8-.4z"
                                                fill-rule="nonzero"
                                              ></path></svg
                                          ></span>
                                        </button>
                                      </div>
                                      <div
                                        title=""
                                        role="toolbar"
                                        data-alloy-tabstop="true"
                                        tabIndex="-1"
                                        className="tox-toolbar__group"
                                      >
                                        <button
                                          aria-label="Blockquote"
                                          title="Blockquote"
                                          type="button"
                                          tabIndex="-1"
                                          className="tox-tbtn"
                                          aria-disabled="false"
                                          aria-pressed="false"
                                        >
                                          <span
                                            className="tox-icon tox-tbtn__icon-wrap"
                                            ><svg
                                              width="24"
                                              height="24"
                                              focusable="false"
                                            >
                                              <path
                                                d="M7.5 17h.9c.4 0 .7-.2.9-.6L11 13V8c0-.6-.4-1-1-1H6a1 1 0 00-1 1v4c0 .6.4 1 1 1h2l-1.3 2.7a1 1 0 00.8 1.3zm8 0h.9c.4 0 .7-.2.9-.6L19 13V8c0-.6-.4-1-1-1h-4a1 1 0 00-1 1v4c0 .6.4 1 1 1h2l-1.3 2.7a1 1 0 00.8 1.3z"
                                                fill-rule="nonzero"
                                              ></path></svg
                                          ></span></button
                                        ><button
                                          title="Table"
                                          aria-label="Table"
                                          aria-haspopup="true"
                                          type="button"
                                          tabIndex="-1"
                                          data-alloy-tabstop="true"
                                          unselectable="on"
                                          className="tox-tbtn tox-tbtn--select"
                                          aria-expanded="false"
                                          style={{userSelect: "none"}}
                                        >
                                          <span
                                            className="tox-icon tox-tbtn__icon-wrap"
                                            ><svg
                                              width="24"
                                              height="24"
                                              focusable="false"
                                            >
                                              <path
                                                fill-rule="nonzero"
                                                d="M19 4a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V6c0-1.1.9-2 2-2h14zM5 14v4h6v-4H5zm14 0h-6v4h6v-4zm0-6h-6v4h6V8zM5 12h6V8H5v4z"
                                              ></path></svg
                                          ></span>
                                          <div className="tox-tbtn__select-chevron">
                                            <svg
                                              width="10"
                                              height="10"
                                              focusable="false"
                                            >
                                              <path
                                                d="M8.7 2.2c.3-.3.8-.3 1 0 .4.4.4.9 0 1.2L5.7 7.8c-.3.3-.9.3-1.2 0L.2 3.4a.8.8 0 010-1.2c.3-.3.8-.3 1.1 0L5 6l3.7-3.8z"
                                                fill-rule="nonzero"
                                              ></path>
                                            </svg>
                                          </div>
                                        </button>
                                      </div>
                                      <div
                                        title=""
                                        role="toolbar"
                                        data-alloy-tabstop="true"
                                        tabIndex="-1"
                                        className="tox-toolbar__group"
                                      >
                                        <div
                                          aria-pressed="false"
                                          aria-label="Numbered list"
                                          title="Numbered list"
                                          role="button"
                                          aria-haspopup="true"
                                          tabIndex="-1"
                                          unselectable="on"
                                          className="tox-split-button"
                                          aria-disabled="false"
                                          aria-expanded="false"
                                          aria-describedby="aria_1999450881791663229093750"
                                          style={{userSelect: "none"}}
                                        >
                                          <span
                                            role="presentation"
                                            className="tox-tbtn"
                                            aria-disabled="false"
                                            ><span
                                              className="tox-icon tox-tbtn__icon-wrap"
                                              ><svg
                                                width="24"
                                                height="24"
                                                focusable="false"
                                              >
                                                <path
                                                  d="M10 17h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 010-2zm0-6h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 010-2zm0-6h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 110-2zM6 4v3.5c0 .3-.2.5-.5.5a.5.5 0 01-.5-.5V5h-.5a.5.5 0 010-1H6zm-1 8.8l.2.2h1.3c.3 0 .5.2.5.5s-.2.5-.5.5H4.9a1 1 0 01-.9-1V13c0-.4.3-.8.6-1l1.2-.4.2-.3a.2.2 0 00-.2-.2H4.5a.5.5 0 01-.5-.5c0-.3.2-.5.5-.5h1.6c.5 0 .9.4.9 1v.1c0 .4-.3.8-.6 1l-1.2.4-.2.3zM7 17v2c0 .6-.4 1-1 1H4.5a.5.5 0 010-1h1.2c.2 0 .3-.1.3-.3 0-.2-.1-.3-.3-.3H4.4a.4.4 0 110-.8h1.3c.2 0 .3-.1.3-.3 0-.2-.1-.3-.3-.3H4.5a.5.5 0 110-1H6c.6 0 1 .4 1 1z"
                                                  fill-rule="evenodd"
                                                ></path></svg></span></span
                                          ><span
                                            role="presentation"
                                            className="tox-tbtn tox-split-button__chevron"
                                            aria-disabled="false"
                                            ><svg
                                              width="10"
                                              height="10"
                                              focusable="false"
                                            >
                                              <path
                                                d="M8.7 2.2c.3-.3.8-.3 1 0 .4.4.4.9 0 1.2L5.7 7.8c-.3.3-.9.3-1.2 0L.2 3.4a.8.8 0 010-1.2c.3-.3.8-.3 1.1 0L5 6l3.7-3.8z"
                                                fill-rule="nonzero"
                                              ></path></svg></span
                                          ><span
                                            aria-hidden="true"
                                            id="aria_1999450881791663229093750"
                                            style={{display: "none"}}
                                            >To open the popup, press
                                            Shift+Enter</span
                                          >
                                        </div>
                                        <div
                                          aria-pressed="false"
                                          aria-label="Bullet list"
                                          title="Bullet list"
                                          role="button"
                                          aria-haspopup="true"
                                          tabIndex="-1"
                                          unselectable="on"
                                          className="tox-split-button"
                                          aria-disabled="false"
                                          aria-expanded="false"
                                          aria-describedby="aria_7769046431811663229093751"
                                          style={{userSelect: "none"}}
                                        >
                                          <span
                                            role="presentation"
                                            className="tox-tbtn"
                                            aria-disabled="false"
                                            ><span
                                              className="tox-icon tox-tbtn__icon-wrap"
                                              ><svg
                                                width="24"
                                                height="24"
                                                focusable="false"
                                              >
                                                <path
                                                  d="M11 5h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 010-2zm0 6h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 010-2zm0 6h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 010-2zM4.5 6c0-.4.1-.8.4-1 .3-.4.7-.5 1.1-.5.4 0 .8.1 1 .4.4.3.5.7.5 1.1 0 .4-.1.8-.4 1-.3.4-.7.5-1.1.5-.4 0-.8-.1-1-.4-.4-.3-.5-.7-.5-1.1zm0 6c0-.4.1-.8.4-1 .3-.4.7-.5 1.1-.5.4 0 .8.1 1 .4.4.3.5.7.5 1.1 0 .4-.1.8-.4 1-.3.4-.7.5-1.1.5-.4 0-.8-.1-1-.4-.4-.3-.5-.7-.5-1.1zm0 6c0-.4.1-.8.4-1 .3-.4.7-.5 1.1-.5.4 0 .8.1 1 .4.4.3.5.7.5 1.1 0 .4-.1.8-.4 1-.3.4-.7.5-1.1.5-.4 0-.8-.1-1-.4-.4-.3-.5-.7-.5-1.1z"
                                                  fill-rule="evenodd"
                                                ></path></svg></span></span
                                          ><span
                                            role="presentation"
                                            className="tox-tbtn tox-split-button__chevron"
                                            aria-disabled="false"
                                            ><svg
                                              width="10"
                                              height="10"
                                              focusable="false"
                                            >
                                              <path
                                                d="M8.7 2.2c.3-.3.8-.3 1 0 .4.4.4.9 0 1.2L5.7 7.8c-.3.3-.9.3-1.2 0L.2 3.4a.8.8 0 010-1.2c.3-.3.8-.3 1.1 0L5 6l3.7-3.8z"
                                                fill-rule="nonzero"
                                              ></path></svg></span
                                          ><span
                                            aria-hidden="true"
                                            id="aria_7769046431811663229093751"
                                            style={{display: "none"}}
                                            >To open the popup, press
                                            Shift+Enter</span
                                          >
                                        </div>
                                      </div>
                                      <div
                                        title=""
                                        role="toolbar"
                                        data-alloy-tabstop="true"
                                        tabIndex="-1"
                                        className="tox-toolbar__group"
                                      >
                                        <button
                                          aria-label="Special character"
                                          title="Special character"
                                          type="button"
                                          tabIndex="-1"
                                          className="tox-tbtn"
                                          aria-disabled="false"
                                        >
                                          <span
                                            className="tox-icon tox-tbtn__icon-wrap"
                                            ><svg
                                              width="24"
                                              height="24"
                                              focusable="false"
                                            >
                                              <path
                                                d="M15 18h4l1-2v4h-6v-3.3l1.4-1a6 6 0 001.8-2.9 6.3 6.3 0 00-.1-4.1 5.8 5.8 0 00-3-3.2c-.6-.3-1.3-.5-2.1-.5a5.1 5.1 0 00-3.9 1.8 6.3 6.3 0 00-1.3 6 6.2 6.2 0 001.8 3l1.4.9V20H4v-4l1 2h4v-.5l-2-1L5.4 15A6.5 6.5 0 014 11c0-1 .2-1.9.6-2.7A7 7 0 016.3 6C7.1 5.4 8 5 9 4.5c1-.3 2-.5 3.1-.5a8.8 8.8 0 015.7 2 7 7 0 011.7 2.3 6 6 0 01.2 4.8c-.2.7-.6 1.3-1 1.9a7.6 7.6 0 01-3.6 2.5v.5z"
                                                fill-rule="evenodd"
                                              ></path></svg
                                          ></span></button
                                        ><button
                                          aria-label="Horizontal line"
                                          title="Horizontal line"
                                          type="button"
                                          tabIndex="-1"
                                          className="tox-tbtn"
                                          aria-disabled="false"
                                        >
                                          <span
                                            className="tox-icon tox-tbtn__icon-wrap"
                                            ><svg
                                              width="24"
                                              height="24"
                                              focusable="false"
                                            >
                                              <path
                                                d="M4 11h16v2H4z"
                                                fill-rule="evenodd"
                                              ></path></svg
                                          ></span>
                                        </button>
                                        <div
                                          aria-pressed="false"
                                          aria-label="Insert date/time"
                                          title="Insert date/time"
                                          role="button"
                                          aria-haspopup="true"
                                          tabIndex="-1"
                                          unselectable="on"
                                          className="tox-split-button"
                                          aria-disabled="false"
                                          aria-expanded="false"
                                          aria-describedby="aria_2062634491831663229093753"
                                          style={{userSelect: "none"}}
                                        >
                                          <span
                                            role="presentation"
                                            className="tox-tbtn"
                                            aria-disabled="false"
                                            ><span
                                              className="tox-icon tox-tbtn__icon-wrap"
                                              ><svg
                                                width="24"
                                                height="24"
                                                focusable="false"
                                              >
                                                <g fill-rule="nonzero">
                                                  <path
                                                    d="M12 19a7 7 0 100-14 7 7 0 000 14zm0 2a9 9 0 110-18 9 9 0 010 18z"
                                                  ></path>
                                                  <path
                                                    d="M16 12h-3V7c0-.6-.4-1-1-1a1 1 0 00-1 1v7h5c.6 0 1-.4 1-1s-.4-1-1-1z"
                                                  ></path>
                                                </g></svg></span></span
                                          ><span
                                            role="presentation"
                                            className="tox-tbtn tox-split-button__chevron"
                                            aria-disabled="false"
                                            ><svg
                                              width="10"
                                              height="10"
                                              focusable="false"
                                            >
                                              <path
                                                d="M8.7 2.2c.3-.3.8-.3 1 0 .4.4.4.9 0 1.2L5.7 7.8c-.3.3-.9.3-1.2 0L.2 3.4a.8.8 0 010-1.2c.3-.3.8-.3 1.1 0L5 6l3.7-3.8z"
                                                fill-rule="nonzero"
                                              ></path></svg></span
                                          ><span
                                            aria-hidden="true"
                                            id="aria_2062634491831663229093753"
                                            style={{display: "none"}}
                                            >To open the popup, press
                                            Shift+Enter</span
                                          >
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      role="group"
                                      className="tox-toolbar__overflow tox-toolbar__overflow--closed"
                                      style={{height: 0+"px"}}
                                    ></div>
                                  </div>
                                  <div className="tox-anchorbar"></div>
                                </div>
                                <div
                                  className="tox-sidebar-wrap"
                                  style={{height: 50+"px"}}
                                >
                                  <div className="tox-edit-area">
                                    <iframe
                                      id="PostContent_ifr"
                                      frameborder="0"
                                      allowtransparency="true"
                                      title="Rich Text Area"
                                      className="tox-edit-area__iframe"
                                      style={{height: 50+"px"}}
                                    ></iframe>
                                  </div>
                                  <div role="complementary" className="tox-sidebar">
                                    <div
                                      data-alloy-tabstop="true"
                                      tabIndex="-1"
                                      className="tox-sidebar__slider tox-sidebar--sliding-closed"
                                      style={{width: 0+"px"}}
                                    >
                                      <div
                                        className="tox-sidebar__pane-container"
                                      ></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                aria-hidden="true"
                                className="tox-throbber"
                                style={{display: "none"}}
                              ></div>
                            </div>
                          </div>

                      
                        </div>
                        <div id="widgetstab" className="tab-pane"></div>
                      </div>
                    </div>
                    <span className="clearfix"></span>
                  </div>
                  <div
                    className="ar-form language-forms"
                    style={{padding: 20+"px", display: "none"}}
                  >
                    <h5>العربية</h5>

                    <div className="form-group title" style={{marginBottom: 15+"px"}}>
                      <label className="control-label col-sm-1">عنوان</label>
                      <div className="col-sm-11">
                        <input
                          className="col-12"
                          id="Glossary[0].Value"
                          name="Glossary[0].Value"
                          type="text"
                          value=""
                        /><input
                          type="hidden"
                          name="Glossary[0].Field"
                          value="Title"
                        /><input
                          type="hidden"
                          name="Glossary[0].Id"
                          value=""
                        /><input
                          type="hidden"
                          name="Glossary[0].Language"
                          value="ar"
                        /><input
                          type="hidden"
                          name="Glossary[0].ResourceId"
                          value="00000000-0000-0000-0000-000000000000"
                        /><input
                          type="hidden"
                          name="Glossary[0].ResourceType"
                          value="60"
                        />
                      </div>
                    </div>

                    <div className="form-group summary">
                      <label className="control-label col-sm-1">ملخص</label>
                      <div className="col-sm-11">
                        <textarea
                          className="col-12"
                          id="Glossary[1].Value"
                          name="Glossary[1].Value"
                        ></textarea
                        ><input
                          type="hidden"
                          name="Glossary[1].Field"
                          value="Summary"
                        /><input
                          type="hidden"
                          name="Glossary[1].Id"
                          value=""
                        /><input
                          type="hidden"
                          name="Glossary[1].Language"
                          value="ar"
                        /><input
                          type="hidden"
                          name="Glossary[1].ResourceId"
                          value="00000000-0000-0000-0000-000000000000"
                        /><input
                          type="hidden"
                          name="Glossary[1].ResourceType"
                          value="60"
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="control-label col-sm-1">المحتوى</label>
                      <div className="col-sm-11">
                        <textarea
                          className="col-12 admin-new-editor initialized"
                          id="Glossary[2].Value"
                          name="Glossary[2].Value"
                          aria-hidden="true"
                          style={{display: "none"}}
                        ></textarea>
                        <div
                          role="application"
                          className="tox tox-tinymce"
                          aria-disabled="false"
                          style={{visibility: "hidden", height: 500+"px"}}
                        >
                          <div className="tox-editor-container">
                            <div
                              data-alloy-vertical-dir="toptobottom"
                              className="tox-editor-header"
                            >
                              <div
                                role="group"
                                className="tox-toolbar-overlord"
                                aria-disabled="false"
                              >
                                <div role="group" className="tox-toolbar__primary">
                                  <div
                                    title=""
                                    role="toolbar"
                                    data-alloy-tabstop="true"
                                    tabIndex="-1"
                                    className="tox-toolbar__group"
                                  >
                                    <button
                                      aria-label="Clear formatting"
                                      title="Clear formatting"
                                      type="button"
                                      tabIndex="-1"
                                      className="tox-tbtn"
                                      aria-disabled="false"
                                    >
                                      <span className="tox-icon tox-tbtn__icon-wrap"
                                        ><svg
                                          width="24"
                                          height="24"
                                          focusable="false"
                                        >
                                          <path
                                            d="M13.2 6a1 1 0 010 .2l-2.6 10a1 1 0 01-1 .8h-.2a.8.8 0 01-.8-1l2.6-10H8a1 1 0 110-2h9a1 1 0 010 2h-3.8zM5 18h7a1 1 0 010 2H5a1 1 0 010-2zm13 1.5L16.5 18 15 19.5a.7.7 0 01-1-1l1.5-1.5-1.5-1.5a.7.7 0 011-1l1.5 1.5 1.5-1.5a.7.7 0 011 1L17.5 17l1.5 1.5a.7.7 0 01-1 1z"
                                            fill-rule="evenodd"
                                          ></path></svg
                                      ></span></button
                                    ><button
                                      aria-label="Undo"
                                      title="Undo"
                                      type="button"
                                      tabIndex="-1"
                                      className="tox-tbtn tox-tbtn--disabled"
                                      aria-disabled="true"
                                    >
                                      <span className="tox-icon tox-tbtn__icon-wrap"
                                        ><svg
                                          width="24"
                                          height="24"
                                          focusable="false"
                                        >
                                          <path
                                            d="M6.4 8H12c3.7 0 6.2 2 6.8 5.1.6 2.7-.4 5.6-2.3 6.8a1 1 0 01-1-1.8c1.1-.6 1.8-2.7 1.4-4.6-.5-2.1-2.1-3.5-4.9-3.5H6.4l3.3 3.3a1 1 0 11-1.4 1.4l-5-5a1 1 0 010-1.4l5-5a1 1 0 011.4 1.4L6.4 8z"
                                            fill-rule="nonzero"
                                          ></path></svg
                                      ></span></button
                                    ><button
                                      aria-label="Redo"
                                      title="Redo"
                                      type="button"
                                      tabIndex="-1"
                                      className="tox-tbtn tox-tbtn--disabled"
                                      aria-disabled="true"
                                    >
                                      <span className="tox-icon tox-tbtn__icon-wrap"
                                        ><svg
                                          width="24"
                                          height="24"
                                          focusable="false"
                                        >
                                          <path
                                            d="M17.6 10H12c-2.8 0-4.4 1.4-4.9 3.5-.4 2 .3 4 1.4 4.6a1 1 0 11-1 1.8c-2-1.2-2.9-4.1-2.3-6.8.6-3 3-5.1 6.8-5.1h5.6l-3.3-3.3a1 1 0 111.4-1.4l5 5a1 1 0 010 1.4l-5 5a1 1 0 01-1.4-1.4l3.3-3.3z"
                                            fill-rule="nonzero"
                                          ></path></svg
                                      ></span>
                                    </button>
                                  </div>
                                  <div
                                    title=""
                                    role="toolbar"
                                    data-alloy-tabstop="true"
                                    tabIndex="-1"
                                    className="tox-toolbar__group"
                                  >
                                    <button
                                      aria-label="Fullscreen"
                                      title="Fullscreen"
                                      type="button"
                                      tabIndex="-1"
                                      className="tox-tbtn"
                                      aria-disabled="false"
                                      aria-pressed="false"
                                    >
                                      <span className="tox-icon tox-tbtn__icon-wrap"
                                        ><svg
                                          width="24"
                                          height="24"
                                          focusable="false"
                                        >
                                          <path
                                            d="M15.3 10l-1.2-1.3 2.9-3h-2.3a.9.9 0 110-1.7H19c.5 0 .9.4.9.9v4.4a.9.9 0 11-1.8 0V7l-2.9 3zm0 4l3 3v-2.3a.9.9 0 111.7 0V19c0 .5-.4.9-.9.9h-4.4a.9.9 0 110-1.8H17l-3-2.9 1.3-1.2zM10 15.4l-2.9 3h2.3a.9.9 0 110 1.7H5a.9.9 0 01-.9-.9v-4.4a.9.9 0 111.8 0V17l2.9-3 1.2 1.3zM8.7 10L5.7 7v2.3a.9.9 0 01-1.7 0V5c0-.5.4-.9.9-.9h4.4a.9.9 0 010 1.8H7l3 2.9-1.3 1.2z"
                                            fill-rule="nonzero"
                                          ></path></svg
                                      ></span></button
                                    ><button
                                      aria-label="Source code"
                                      title="Source code"
                                      type="button"
                                      tabIndex="-1"
                                      className="tox-tbtn"
                                      aria-disabled="false"
                                    >
                                      <span className="tox-icon tox-tbtn__icon-wrap"
                                        ><svg
                                          width="24"
                                          height="24"
                                          focusable="false"
                                        >
                                          <g fill-rule="nonzero">
                                            <path
                                              d="M9.8 15.7c.3.3.3.8 0 1-.3.4-.9.4-1.2 0l-4.4-4.1a.8.8 0 010-1.2l4.4-4.2c.3-.3.9-.3 1.2 0 .3.3.3.8 0 1.1L6 12l3.8 3.7zM14.2 15.7c-.3.3-.3.8 0 1 .4.4.9.4 1.2 0l4.4-4.1c.3-.3.3-.9 0-1.2l-4.4-4.2a.8.8 0 00-1.2 0c-.3.3-.3.8 0 1.1L18 12l-3.8 3.7z"
                                            ></path>
                                          </g></svg
                                      ></span></button
                                    ><button
                                      aria-label="Preview"
                                      title="Preview"
                                      type="button"
                                      tabIndex="-1"
                                      className="tox-tbtn"
                                      aria-disabled="false"
                                    >
                                      <span className="tox-icon tox-tbtn__icon-wrap"
                                        ><svg
                                          width="24"
                                          height="24"
                                          focusable="false"
                                        >
                                          <path
                                            d="M3.5 12.5c.5.8 1.1 1.6 1.8 2.3 2 2 4.2 3.2 6.7 3.2s4.7-1.2 6.7-3.2a16.2 16.2 0 002.1-2.8 15.7 15.7 0 00-2.1-2.8c-2-2-4.2-3.2-6.7-3.2a9.3 9.3 0 00-6.7 3.2A16.2 16.2 0 003.2 12c0 .2.2.3.3.5zm-2.4-1l.7-1.2L4 7.8C6.2 5.4 8.9 4 12 4c3 0 5.8 1.4 8.1 3.8a18.2 18.2 0 012.8 3.7v1l-.7 1.2-2.1 2.5c-2.3 2.4-5 3.8-8.1 3.8-3 0-5.8-1.4-8.1-3.8a18.2 18.2 0 01-2.8-3.7 1 1 0 010-1zm12-3.3a2 2 0 102.7 2.6 4 4 0 11-2.6-2.6z"
                                            fill-rule="nonzero"
                                          ></path></svg
                                      ></span></button
                                    ><button
                                      aria-label="Help"
                                      title="Help"
                                      type="button"
                                      tabIndex="-1"
                                      className="tox-tbtn"
                                      aria-disabled="false"
                                    >
                                      <span className="tox-icon tox-tbtn__icon-wrap"
                                        ><svg
                                          width="24"
                                          height="24"
                                          focusable="false"
                                        >
                                          <g fill-rule="evenodd">
                                            <path
                                              d="M12 5.5a6.5 6.5 0 00-6 9 6.3 6.3 0 001.4 2l1 1a6.3 6.3 0 003.6 1 6.5 6.5 0 006-9 6.3 6.3 0 00-1.4-2l-1-1a6.3 6.3 0 00-3.6-1zM12 4a7.8 7.8 0 015.7 2.3A8 8 0 1112 4z"
                                            ></path>
                                            <path
                                              d="M9.6 9.7a.7.7 0 01-.7-.8c0-1.1 1.5-1.8 3.2-1.8 1.8 0 3.2.8 3.2 2.4 0 1.4-.4 2.1-1.5 2.8-.2 0-.3.1-.3.2a2 2 0 00-.8.8.8.8 0 01-1.4-.6c.3-.7.8-1 1.3-1.5l.4-.2c.7-.4.8-.6.8-1.5 0-.5-.6-.9-1.7-.9-.5 0-1 .1-1.4.3-.2 0-.3.1-.3.2v-.2c0 .4-.4.8-.8.8z"
                                              fill-rule="nonzero"
                                            ></path>
                                            <circle
                                              cx="12"
                                              cy="16"
                                              r="1"
                                            ></circle>
                                          </g></svg
                                      ></span>
                                    </button>
                                  </div>
                                  <div
                                    title=""
                                    role="toolbar"
                                    data-alloy-tabstop="true"
                                    tabIndex="-1"
                                    className="tox-toolbar__group"
                                  >
                                    <button
                                      aria-label="Find and replace"
                                      title="Find and replace"
                                      type="button"
                                      tabIndex="-1"
                                      className="tox-tbtn"
                                      aria-disabled="false"
                                    >
                                      <span className="tox-icon tox-tbtn__icon-wrap"
                                        ><svg
                                          width="24"
                                          height="24"
                                          focusable="false"
                                        >
                                          <path
                                            d="M16 17.3a8 8 0 111.4-1.4l4.3 4.4a1 1 0 01-1.4 1.4l-4.4-4.3zm-5-.3a6 6 0 100-12 6 6 0 000 12z"
                                            fill-rule="nonzero"
                                          ></path></svg
                                      ></span>
                                    </button>
                                  </div>
                                  <div
                                    title=""
                                    role="toolbar"
                                    data-alloy-tabstop="true"
                                    tabIndex="-1"
                                    className="tox-toolbar__group"
                                  >
                                    <button
                                      aria-label="Bold"
                                      title="Bold"
                                      type="button"
                                      tabIndex="-1"
                                      className="tox-tbtn"
                                      aria-disabled="false"
                                      aria-pressed="false"
                                    >
                                      <span className="tox-icon tox-tbtn__icon-wrap"
                                        ><svg
                                          width="24"
                                          height="24"
                                          focusable="false"
                                        >
                                          <path
                                            d="M7.8 19c-.3 0-.5 0-.6-.2l-.2-.5V5.7c0-.2 0-.4.2-.5l.6-.2h5c1.5 0 2.7.3 3.5 1 .7.6 1.1 1.4 1.1 2.5a3 3 0 01-.6 1.9c-.4.6-1 1-1.6 1.2.4.1.9.3 1.3.6s.8.7 1 1.2c.4.4.5 1 .5 1.6 0 1.3-.4 2.3-1.3 3-.8.7-2.1 1-3.8 1H7.8zm5-8.3c.6 0 1.2-.1 1.6-.5.4-.3.6-.7.6-1.3 0-1.1-.8-1.7-2.3-1.7H9.3v3.5h3.4zm.5 6c.7 0 1.3-.1 1.7-.4.4-.4.6-.9.6-1.5s-.2-1-.7-1.4c-.4-.3-1-.4-2-.4H9.4v3.8h4z"
                                            fill-rule="evenodd"
                                          ></path></svg
                                      ></span></button
                                    ><button
                                      aria-label="Italic"
                                      title="Italic"
                                      type="button"
                                      tabIndex="-1"
                                      className="tox-tbtn"
                                      aria-disabled="false"
                                      aria-pressed="false"
                                    >
                                      <span className="tox-icon tox-tbtn__icon-wrap"
                                        ><svg
                                          width="24"
                                          height="24"
                                          focusable="false"
                                        >
                                          <path
                                            d="M16.7 4.7l-.1.9h-.3c-.6 0-1 0-1.4.3-.3.3-.4.6-.5 1.1l-2.1 9.8v.6c0 .5.4.8 1.4.8h.2l-.2.8H8l.2-.8h.2c1.1 0 1.8-.5 2-1.5l2-9.8.1-.5c0-.6-.4-.8-1.4-.8h-.3l.2-.9h5.8z"
                                            fill-rule="evenodd"
                                          ></path></svg
                                      ></span></button
                                    ><button
                                      aria-label="Underline"
                                      title="Underline"
                                      type="button"
                                      tabIndex="-1"
                                      className="tox-tbtn"
                                      aria-disabled="false"
                                      aria-pressed="false"
                                    >
                                      <span className="tox-icon tox-tbtn__icon-wrap"
                                        ><svg
                                          width="24"
                                          height="24"
                                          focusable="false"
                                        >
                                          <path
                                            d="M16 5c.6 0 1 .4 1 1v5.5a4 4 0 01-.4 1.8l-1 1.4a5.3 5.3 0 01-5.5 1 5 5 0 01-1.6-1c-.5-.4-.8-.9-1.1-1.4a4 4 0 01-.4-1.8V6c0-.6.4-1 1-1s1 .4 1 1v5.5c0 .3 0 .6.2 1l.6.7a3.3 3.3 0 002.2.8 3.4 3.4 0 002.2-.8c.3-.2.4-.5.6-.8l.2-.9V6c0-.6.4-1 1-1zM8 17h8c.6 0 1 .4 1 1s-.4 1-1 1H8a1 1 0 010-2z"
                                            fill-rule="evenodd"
                                          ></path></svg
                                      ></span></button
                                    ><button
                                      aria-label="Strikethrough"
                                      title="Strikethrough"
                                      type="button"
                                      tabIndex="-1"
                                      className="tox-tbtn"
                                      aria-disabled="false"
                                      aria-pressed="false"
                                    >
                                      <span className="tox-icon tox-tbtn__icon-wrap"
                                        ><svg
                                          width="24"
                                          height="24"
                                          focusable="false"
                                        >
                                          <g fill-rule="evenodd">
                                            <path
                                              d="M15.6 8.5c-.5-.7-1-1.1-1.3-1.3-.6-.4-1.3-.6-2-.6-2.7 0-2.8 1.7-2.8 2.1 0 1.6 1.8 2 3.2 2.3 4.4.9 4.6 2.8 4.6 3.9 0 1.4-.7 4.1-5 4.1A6.2 6.2 0 017 16.4l1.5-1.1c.4.6 1.6 2 3.7 2 1.6 0 2.5-.4 3-1.2.4-.8.3-2-.8-2.6-.7-.4-1.6-.7-2.9-1-1-.2-3.9-.8-3.9-3.6C7.6 6 10.3 5 12.4 5c2.9 0 4.2 1.6 4.7 2.4l-1.5 1.1z"
                                            ></path>
                                            <path
                                              d="M5 11h14a1 1 0 010 2H5a1 1 0 010-2z"
                                              fill-rule="nonzero"
                                            ></path>
                                          </g></svg
                                      ></span>
                                    </button>
                                  </div>
                                  <div
                                    title=""
                                    role="toolbar"
                                    data-alloy-tabstop="true"
                                    tabIndex="-1"
                                    className="tox-toolbar__group"
                                  >
                                    <button
                                      aria-label="Align left"
                                      title="Align left"
                                      type="button"
                                      tabIndex="-1"
                                      className="tox-tbtn"
                                      aria-disabled="false"
                                      aria-pressed="false"
                                    >
                                      <span className="tox-icon tox-tbtn__icon-wrap"
                                        ><svg
                                          width="24"
                                          height="24"
                                          focusable="false"
                                        >
                                          <path
                                            d="M5 5h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 110-2zm0 4h8c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 110-2zm0 8h8c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 010-2zm0-4h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 010-2z"
                                            fill-rule="evenodd"
                                          ></path></svg
                                      ></span></button
                                    ><button
                                      aria-label="Align center"
                                      title="Align center"
                                      type="button"
                                      tabIndex="-1"
                                      className="tox-tbtn"
                                      aria-disabled="false"
                                      aria-pressed="false"
                                    >
                                      <span className="tox-icon tox-tbtn__icon-wrap"
                                        ><svg
                                          width="24"
                                          height="24"
                                          focusable="false"
                                        >
                                          <path
                                            d="M5 5h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 110-2zm3 4h8c.6 0 1 .4 1 1s-.4 1-1 1H8a1 1 0 110-2zm0 8h8c.6 0 1 .4 1 1s-.4 1-1 1H8a1 1 0 010-2zm-3-4h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 010-2z"
                                            fill-rule="evenodd"
                                          ></path></svg
                                      ></span></button
                                    ><button
                                      aria-label="Align right"
                                      title="Align right"
                                      type="button"
                                      tabIndex="-1"
                                      className="tox-tbtn"
                                      aria-disabled="false"
                                      aria-pressed="false"
                                    >
                                      <span className="tox-icon tox-tbtn__icon-wrap"
                                        ><svg
                                          width="24"
                                          height="24"
                                          focusable="false"
                                        >
                                          <path
                                            d="M5 5h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 110-2zm6 4h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 010-2zm0 8h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 010-2zm-6-4h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 010-2z"
                                            fill-rule="evenodd"
                                          ></path></svg
                                      ></span></button
                                    ><button
                                      aria-label="Justify"
                                      title="Justify"
                                      type="button"
                                      tabIndex="-1"
                                      className="tox-tbtn"
                                      aria-disabled="false"
                                      aria-pressed="false"
                                    >
                                      <span className="tox-icon tox-tbtn__icon-wrap"
                                        ><svg
                                          width="24"
                                          height="24"
                                          focusable="false"
                                        >
                                          <path
                                            d="M5 5h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 110-2zm0 4h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 110-2zm0 4h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 010-2zm0 4h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 010-2z"
                                            fill-rule="evenodd"
                                          ></path></svg
                                      ></span>
                                    </button>
                                  </div>
                                  <div
                                    title=""
                                    role="toolbar"
                                    data-alloy-tabstop="true"
                                    tabIndex="-1"
                                    className="tox-toolbar__group"
                                  >
                                    <button
                                      aria-label="Heading 3"
                                      title="Heading 3"
                                      type="button"
                                      tabIndex="-1"
                                      className="tox-tbtn tox-tbtn--select"
                                      aria-disabled="false"
                                      aria-pressed="false"
                                    >
                                      <span className="tox-tbtn__select-label"
                                        >H3</span
                                      ></button
                                    ><button
                                      aria-label="Heading 4"
                                      title="Heading 4"
                                      type="button"
                                      tabIndex="-1"
                                      className="tox-tbtn tox-tbtn--select"
                                      aria-disabled="false"
                                      aria-pressed="false"
                                    >
                                      <span className="tox-tbtn__select-label"
                                        >H4</span
                                      >
                                    </button>
                                  </div>
                                  <div
                                    title=""
                                    role="toolbar"
                                    data-alloy-tabstop="true"
                                    tabIndex="-1"
                                    className="tox-toolbar__group"
                                  >
                                    <button
                                      aria-label="Upload Image"
                                      title="Upload Image"
                                      type="button"
                                      tabIndex="-1"
                                      className="tox-tbtn"
                                      aria-disabled="false"
                                    >
                                      <span className="tox-icon tox-tbtn__icon-wrap"
                                        ><svg
                                          width="24"
                                          height="24"
                                          focusable="false"
                                        >
                                          <path
                                            d="M5 15.7l3.3-3.2c.3-.3.7-.3 1 0L12 15l4.1-4c.3-.4.8-.4 1 0l2 1.9V5H5v10.7zM5 18V19h3l2.8-2.9-2-2L5 17.9zm14-3l-2.5-2.4-6.4 6.5H19v-4zM4 3h16c.6 0 1 .4 1 1v16c0 .6-.4 1-1 1H4a1 1 0 01-1-1V4c0-.6.4-1 1-1zm6 8a2 2 0 100-4 2 2 0 000 4z"
                                            fill-rule="nonzero"
                                          ></path></svg
                                      ></span></button
                                    ><button
                                      aria-label="Upload Video"
                                      title="Upload Video"
                                      type="button"
                                      tabIndex="-1"
                                      className="tox-tbtn"
                                      aria-disabled="false"
                                    >
                                      <span className="tox-icon tox-tbtn__icon-wrap"
                                        ><svg
                                          width="24"
                                          height="24"
                                          focusable="false"
                                        >
                                          <path
                                            fill-rule="nonzero"
                                            d="M5 15.7l2.3-2.2c.3-.3.7-.3 1 0L11 16l5.1-5c.3-.4.8-.4 1 0l2 1.9V8H5v7.7zM5 18V19h3l1.8-1.9-2-2L5 17.9zm14-3l-2.5-2.4-6.4 6.5H19v-4zM4 6h16c.6 0 1 .4 1 1v13c0 .6-.4 1-1 1H4a1 1 0 01-1-1V7c0-.6.4-1 1-1zm6 7a2 2 0 110-4 2 2 0 010 4zM4.5 4h15a.5.5 0 110 1h-15a.5.5 0 010-1zm2-2h11a.5.5 0 110 1h-11a.5.5 0 010-1z"
                                          ></path></svg
                                      ></span></button
                                    ><button
                                      aria-label="Insert/edit media"
                                      title="Insert/edit media"
                                      type="button"
                                      tabIndex="-1"
                                      className="tox-tbtn"
                                      aria-disabled="false"
                                      aria-pressed="false"
                                    >
                                      <span className="tox-icon tox-tbtn__icon-wrap"
                                        ><svg
                                          width="24"
                                          height="24"
                                          focusable="false"
                                        >
                                          <path
                                            d="M4 3h16c.6 0 1 .4 1 1v16c0 .6-.4 1-1 1H4a1 1 0 01-1-1V4c0-.6.4-1 1-1zm1 2v14h14V5H5zm4.8 2.6l5.6 4a.5.5 0 010 .8l-5.6 4A.5.5 0 019 16V8a.5.5 0 01.8-.4z"
                                            fill-rule="nonzero"
                                          ></path></svg
                                      ></span>
                                    </button>
                                  </div>
                                  <div
                                    title=""
                                    role="toolbar"
                                    data-alloy-tabstop="true"
                                    tabIndex="-1"
                                    className="tox-toolbar__group"
                                  >
                                    <button
                                      aria-label="Blockquote"
                                      title="Blockquote"
                                      type="button"
                                      tabIndex="-1"
                                      className="tox-tbtn"
                                      aria-disabled="false"
                                      aria-pressed="false"
                                    >
                                      <span className="tox-icon tox-tbtn__icon-wrap"
                                        ><svg
                                          width="24"
                                          height="24"
                                          focusable="false"
                                        >
                                          <path
                                            d="M7.5 17h.9c.4 0 .7-.2.9-.6L11 13V8c0-.6-.4-1-1-1H6a1 1 0 00-1 1v4c0 .6.4 1 1 1h2l-1.3 2.7a1 1 0 00.8 1.3zm8 0h.9c.4 0 .7-.2.9-.6L19 13V8c0-.6-.4-1-1-1h-4a1 1 0 00-1 1v4c0 .6.4 1 1 1h2l-1.3 2.7a1 1 0 00.8 1.3z"
                                            fill-rule="nonzero"
                                          ></path></svg
                                      ></span></button
                                    ><button
                                      title="Table"
                                      aria-label="Table"
                                      aria-haspopup="true"
                                      type="button"
                                      tabIndex="-1"
                                      data-alloy-tabstop="true"
                                      unselectable="on"
                                      className="tox-tbtn tox-tbtn--select"
                                      aria-expanded="false"
                                      style={{userSelect: "none"}}
                                    >
                                      <span className="tox-icon tox-tbtn__icon-wrap"
                                        ><svg
                                          width="24"
                                          height="24"
                                          focusable="false"
                                        >
                                          <path
                                            fill-rule="nonzero"
                                            d="M19 4a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V6c0-1.1.9-2 2-2h14zM5 14v4h6v-4H5zm14 0h-6v4h6v-4zm0-6h-6v4h6V8zM5 12h6V8H5v4z"
                                          ></path></svg
                                      ></span>
                                      <div className="tox-tbtn__select-chevron">
                                        <svg
                                          width="10"
                                          height="10"
                                          focusable="false"
                                        >
                                          <path
                                            d="M8.7 2.2c.3-.3.8-.3 1 0 .4.4.4.9 0 1.2L5.7 7.8c-.3.3-.9.3-1.2 0L.2 3.4a.8.8 0 010-1.2c.3-.3.8-.3 1.1 0L5 6l3.7-3.8z"
                                            fill-rule="nonzero"
                                          ></path>
                                        </svg>
                                      </div>
                                    </button>
                                  </div>
                                  <div
                                    title=""
                                    role="toolbar"
                                    data-alloy-tabstop="true"
                                    tabIndex="-1"
                                    className="tox-toolbar__group"
                                  >
                                    <div
                                      aria-pressed="false"
                                      aria-label="Numbered list"
                                      title="Numbered list"
                                      role="button"
                                      aria-haspopup="true"
                                      tabIndex="-1"
                                      unselectable="on"
                                      className="tox-split-button"
                                      aria-disabled="false"
                                      aria-expanded="false"
                                      aria-describedby="aria_6331942842691663229093821"
                                      style={{userSelect: "none"}}
                                    >
                                      <span
                                        role="presentation"
                                        className="tox-tbtn"
                                        aria-disabled="false"
                                        ><span
                                          className="tox-icon tox-tbtn__icon-wrap"
                                          ><svg
                                            width="24"
                                            height="24"
                                            focusable="false"
                                          >
                                            <path
                                              d="M10 17h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 010-2zm0-6h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 010-2zm0-6h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 110-2zM6 4v3.5c0 .3-.2.5-.5.5a.5.5 0 01-.5-.5V5h-.5a.5.5 0 010-1H6zm-1 8.8l.2.2h1.3c.3 0 .5.2.5.5s-.2.5-.5.5H4.9a1 1 0 01-.9-1V13c0-.4.3-.8.6-1l1.2-.4.2-.3a.2.2 0 00-.2-.2H4.5a.5.5 0 01-.5-.5c0-.3.2-.5.5-.5h1.6c.5 0 .9.4.9 1v.1c0 .4-.3.8-.6 1l-1.2.4-.2.3zM7 17v2c0 .6-.4 1-1 1H4.5a.5.5 0 010-1h1.2c.2 0 .3-.1.3-.3 0-.2-.1-.3-.3-.3H4.4a.4.4 0 110-.8h1.3c.2 0 .3-.1.3-.3 0-.2-.1-.3-.3-.3H4.5a.5.5 0 110-1H6c.6 0 1 .4 1 1z"
                                              fill-rule="evenodd"
                                            ></path></svg></span></span
                                      ><span
                                        role="presentation"
                                        className="tox-tbtn tox-split-button__chevron"
                                        aria-disabled="false"
                                        ><svg
                                          width="10"
                                          height="10"
                                          focusable="false"
                                        >
                                          <path
                                            d="M8.7 2.2c.3-.3.8-.3 1 0 .4.4.4.9 0 1.2L5.7 7.8c-.3.3-.9.3-1.2 0L.2 3.4a.8.8 0 010-1.2c.3-.3.8-.3 1.1 0L5 6l3.7-3.8z"
                                            fill-rule="nonzero"
                                          ></path></svg></span
                                      ><span
                                        aria-hidden="true"
                                        id="aria_6331942842691663229093821"
                                        style={{display: "none"}}
                                        >To open the popup, press
                                        Shift+Enter</span
                                      >
                                    </div>
                                    <div
                                      aria-pressed="false"
                                      aria-label="Bullet list"
                                      title="Bullet list"
                                      role="button"
                                      aria-haspopup="true"
                                      tabIndex="-1"
                                      unselectable="on"
                                      className="tox-split-button"
                                      aria-disabled="false"
                                      aria-expanded="false"
                                      aria-describedby="aria_9694523912711663229093821"
                                      style={{userSelect: "none"}}
                                    >
                                      <span
                                        role="presentation"
                                        className="tox-tbtn"
                                        aria-disabled="false"
                                        ><span
                                          className="tox-icon tox-tbtn__icon-wrap"
                                          ><svg
                                            width="24"
                                            height="24"
                                            focusable="false"
                                          >
                                            <path
                                              d="M11 5h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 010-2zm0 6h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 010-2zm0 6h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 010-2zM4.5 6c0-.4.1-.8.4-1 .3-.4.7-.5 1.1-.5.4 0 .8.1 1 .4.4.3.5.7.5 1.1 0 .4-.1.8-.4 1-.3.4-.7.5-1.1.5-.4 0-.8-.1-1-.4-.4-.3-.5-.7-.5-1.1zm0 6c0-.4.1-.8.4-1 .3-.4.7-.5 1.1-.5.4 0 .8.1 1 .4.4.3.5.7.5 1.1 0 .4-.1.8-.4 1-.3.4-.7.5-1.1.5-.4 0-.8-.1-1-.4-.4-.3-.5-.7-.5-1.1zm0 6c0-.4.1-.8.4-1 .3-.4.7-.5 1.1-.5.4 0 .8.1 1 .4.4.3.5.7.5 1.1 0 .4-.1.8-.4 1-.3.4-.7.5-1.1.5-.4 0-.8-.1-1-.4-.4-.3-.5-.7-.5-1.1z"
                                              fill-rule="evenodd"
                                            ></path></svg></span></span
                                      ><span
                                        role="presentation"
                                        className="tox-tbtn tox-split-button__chevron"
                                        aria-disabled="false"
                                        ><svg
                                          width="10"
                                          height="10"
                                          focusable="false"
                                        >
                                          <path
                                            d="M8.7 2.2c.3-.3.8-.3 1 0 .4.4.4.9 0 1.2L5.7 7.8c-.3.3-.9.3-1.2 0L.2 3.4a.8.8 0 010-1.2c.3-.3.8-.3 1.1 0L5 6l3.7-3.8z"
                                            fill-rule="nonzero"
                                          ></path></svg></span
                                      ><span
                                        aria-hidden="true"
                                        id="aria_9694523912711663229093821"
                                        style={{display: "none"}}
                                        >To open the popup, press
                                        Shift+Enter</span
                                      >
                                    </div>
                                  </div>
                                  <div
                                    title=""
                                    role="toolbar"
                                    data-alloy-tabstop="true"
                                    tabIndex="-1"
                                    className="tox-toolbar__group"
                                  >
                                    <button
                                      aria-label="Special character"
                                      title="Special character"
                                      type="button"
                                      tabIndex="-1"
                                      className="tox-tbtn"
                                      aria-disabled="false"
                                    >
                                      <span className="tox-icon tox-tbtn__icon-wrap"
                                        ><svg
                                          width="24"
                                          height="24"
                                          focusable="false"
                                        >
                                          <path
                                            d="M15 18h4l1-2v4h-6v-3.3l1.4-1a6 6 0 001.8-2.9 6.3 6.3 0 00-.1-4.1 5.8 5.8 0 00-3-3.2c-.6-.3-1.3-.5-2.1-.5a5.1 5.1 0 00-3.9 1.8 6.3 6.3 0 00-1.3 6 6.2 6.2 0 001.8 3l1.4.9V20H4v-4l1 2h4v-.5l-2-1L5.4 15A6.5 6.5 0 014 11c0-1 .2-1.9.6-2.7A7 7 0 016.3 6C7.1 5.4 8 5 9 4.5c1-.3 2-.5 3.1-.5a8.8 8.8 0 015.7 2 7 7 0 011.7 2.3 6 6 0 01.2 4.8c-.2.7-.6 1.3-1 1.9a7.6 7.6 0 01-3.6 2.5v.5z"
                                            fill-rule="evenodd"
                                          ></path></svg
                                      ></span></button
                                    ><button
                                      aria-label="Horizontal line"
                                      title="Horizontal line"
                                      type="button"
                                      tabIndex="-1"
                                      className="tox-tbtn"
                                      aria-disabled="false"
                                    >
                                      <span className="tox-icon tox-tbtn__icon-wrap"
                                        ><svg
                                          width="24"
                                          height="24"
                                          focusable="false"
                                        >
                                          <path
                                            d="M4 11h16v2H4z"
                                            fill-rule="evenodd"
                                          ></path></svg
                                      ></span>
                                    </button>
                                    <div
                                      aria-pressed="false"
                                      aria-label="Insert date/time"
                                      title="Insert date/time"
                                      role="button"
                                      aria-haspopup="true"
                                      tabIndex="-1"
                                      unselectable="on"
                                      className="tox-split-button"
                                      aria-disabled="false"
                                      aria-expanded="false"
                                      aria-describedby="aria_5799048892731663229093822"
                                         style={{userSelect: "none"}}
                                    >
                                      <span
                                        role="presentation"
                                        className="tox-tbtn"
                                        aria-disabled="false"
                                        ><span
                                          className="tox-icon tox-tbtn__icon-wrap"
                                          ><svg
                                            width="24"
                                            height="24"
                                            focusable="false"
                                          >
                                            <g fill-rule="nonzero">
                                              <path
                                                d="M12 19a7 7 0 100-14 7 7 0 000 14zm0 2a9 9 0 110-18 9 9 0 010 18z"
                                              ></path>
                                              <path
                                                d="M16 12h-3V7c0-.6-.4-1-1-1a1 1 0 00-1 1v7h5c.6 0 1-.4 1-1s-.4-1-1-1z"
                                              ></path>
                                            </g></svg></span></span
                                      ><span
                                        role="presentation"
                                        className="tox-tbtn tox-split-button__chevron"
                                        aria-disabled="false"
                                        ><svg
                                          width="10"
                                          height="10"
                                          focusable="false"
                                        >
                                          <path
                                            d="M8.7 2.2c.3-.3.8-.3 1 0 .4.4.4.9 0 1.2L5.7 7.8c-.3.3-.9.3-1.2 0L.2 3.4a.8.8 0 010-1.2c.3-.3.8-.3 1.1 0L5 6l3.7-3.8z"
                                            fill-rule="nonzero"
                                          ></path></svg></span
                                      ><span
                                        aria-hidden="true"
                                        id="aria_5799048892731663229093822"
                                        style={{display: "none"}}
                                        >To open the popup, press
                                        Shift+Enter</span
                                      >
                                    </div>
                                  </div>
                                </div>
                                <div
                                  role="group"
                                  className="tox-toolbar__overflow tox-toolbar__overflow--closed"
                                  style={{height: 0+"px"}}
                                ></div>
                              </div>
                              <div className="tox-anchorbar"></div>
                            </div>
                            <div className="tox-sidebar-wrap" style={{height: 50+"px"}}>
                              <div className="tox-edit-area">
                                <iframe
                                  id="Glossary[2].Value_ifr"
                                  frameborder="0"
                                  allowtransparency="true"
                                  title="Rich Text Area"
                                  className="tox-edit-area__iframe"
                                  style={{height: 50+"px"}}
                                ></iframe>
                              </div>
                              <div role="complementary" className="tox-sidebar">
                                <div
                                  data-alloy-tabstop="true"
                                  tabIndex="-1"
                                  className="tox-sidebar__slider tox-sidebar--sliding-closed"
                                  style={{width: 0+"px"}}
                                >
                                  <div
                                    className="tox-sidebar__pane-container"
                                  ></div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            aria-hidden="true"
                            className="tox-throbber"
                            style={{display: "none"}}
                          ></div>
                        </div>
                        <input
                          type="hidden"
                          name="Glossary[2].Field"
                          value="Content"
                        /><input
                          type="hidden"
                          name="Glossary[2].Id"
                          value=""
                        /><input
                          type="hidden"
                          name="Glossary[2].Language"
                          value="ar"
                        /><input
                          type="hidden"
                          name="Glossary[2].ResourceId"
                          value="00000000-0000-0000-0000-000000000000"
                        /><input
                          type="hidden"
                          name="Glossary[2].ResourceType"
                          value="60"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="komain">
                    <input
                      type="hidden"
                      name="Id"
                      id="Id"
                      value="00000000-0000-0000-0000-000000000000"
                    />
                    <input
                      type="hidden"
                      name="PublicId"
                      id="PublicId"
                      value="0"
                    />
                    <input
                      type="hidden"
                      name="PostTypeId"
                      id="PostTypeId"
                      value="c8bcc2d9-ec89-11ec-985f-30d16bee5962"
                    />
                    <input
                      type="hidden"
                      name="PostType.Code"
                      id="PostType.Code"
                      value="article"
                    />
                    <input
                      type="hidden"
                      name="Type"
                      id="Type"
                      value="article"
                    />
                    <input type="hidden" name="Status" id="Status" value="10" />
                    <input type="hidden" name="Order" id="Order" value="0" />
                    <input
                      type="hidden"
                      name="Platform"
                      id="Platform"
                      value="all"
                    />
                    <input
                      type="hidden"
                      name="SubscriptionId"
                      id="SubscriptionId"
                      value="7506d461-6ad2-4a07-9ff2-e86cf0442261"
                    />

                    <input type="hidden" name="Shortlink" id="Shortlink" />
                    <input
                      type="hidden"
                      name="TimeStamp"
                      id="TimeStamp"
                      value="0"
                    />

                    <div data-bind="foreach: relatives"></div>
                    <div data-bind="foreach: medias"></div>
                  </div>

                  <div
                    className="modal fade komain"
                    id="captionModal"
                    tabIndex="-1"
                    role="dialog"
                    aria-labelledby="captionModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog" role="document">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="exampleModalLabel">
                            Edit Caption
                          </h5>
                          <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">×</span>
                          </button>
                        </div>
                        <div className="modal-body">
                          <div className="row">
                            <div className="form-group col-12">
                              <label className="control-label col-sm-1"
                                >العنوان</label
                              >
                              <div className="col-sm-11">
                                <input
                                  className="col-12"
                                  id="CustomCaption"
                                  type="text"
                                  autocomplete="off"
                                  data-bind="value: customCaption"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-secondary"
                            data-dismiss="modal"
                          >
                            إغلاق
                          </button>
                          <button
                            type="button"
                            className="btn btn-primary"
                            data-dismiss="modal"
                            data-bind="click: updateMediaItemCaption"
                          >
                            Save Changes
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <input
              name="__RequestVerificationToken"
              type="hidden"
              value="CfDJ8Gw4EJhP_tFBqoXBSpM7LZ3x72urmL1A5aTd7t4TdIqCQHn4D-2bKU6l5EaupOIFptwp3ZH45f2hEzvWw3IFe8SwjWAumOlAs-xDsjqnc9cfUg3hz2aPPw66iZysYRrJ9MObo5UTpvTfAOWrAub6hsMPjAQo87kq73x8JqBSj1I15p-gwNI4fTOEJB-cIFpvhA"
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
        <div id="cboxTopCenter"style={{float: "left"}}></div>
        <div id="cboxTopRight" style={{float: "left"}}></div>
      </div>
      <div style={{float: "left"}}>
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
        minHeight: 0+"px",
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
    className="xdsoft_datetimepicker xdsoft_noselect xdsoft_rtl xdsoft_"
    style={{display: "none", position: "absolute", left: 115.672+"px", top: 476+"px"}}
  >
    <div className="xdsoft_datepicker active">
      <div className="xdsoft_monthpicker">
        <button
          type="button"
          className="xdsoft_prev"
          style={{visibility: "visible"}}
        ></button><button
          type="button"
          className="xdsoft_today_button"
          style={{visibility: "visible"}}
        ></button>
        <div className="xdsoft_label xdsoft_month">
          <span>September</span>
          <div
            className="xdsoft_select xdsoft_monthselect xdsoft_scroller_box"
            style={{display: "none"}}
          >
            <div style={{marginTop: 0+"px"}}>
              <div className="xdsoft_option" data-value="0">January</div>
              <div className="xdsoft_option" data-value="1">February</div>
              <div className="xdsoft_option" data-value="2">March</div>
              <div className="xdsoft_option" data-value="3">April</div>
              <div className="xdsoft_option" data-value="4">May</div>
              <div className="xdsoft_option" data-value="5">June</div>
              <div className="xdsoft_option" data-value="6">July</div>
              <div className="xdsoft_option" data-value="7">August</div>
              <div className="xdsoft_option xdsoft_current" data-value="8">
                September
              </div>
              <div className="xdsoft_option" data-value="9">October</div>
              <div className="xdsoft_option" data-value="10">November</div>
              <div className="xdsoft_option" data-value="11">December</div>
            </div>
            <div className="xdsoft_scrollbar">
              <div
                className="xdsoft_scroller"
                style={{height: 10+"px", marginTop: 0+"px"}}
              ></div>
            </div>
          </div>
          <i></i>
        </div>
        <div className="xdsoft_label xdsoft_year">
          <span>2022</span>
          <div
            className="xdsoft_select xdsoft_yearselect xdsoft_scroller_box"
            style={{display: "none"}}
          >
            <div style={{marginTop: 0+"px"}}>
              <div className="xdsoft_option" data-value="1950">1950</div>
              <div className="xdsoft_option" data-value="1951">1951</div>
              <div className="xdsoft_option" data-value="1952">1952</div>
              <div className="xdsoft_option" data-value="1953">1953</div>
              <div className="xdsoft_option" data-value="1954">1954</div>
              <div className="xdsoft_option" data-value="1955">1955</div>
              <div className="xdsoft_option" data-value="1956">1956</div>
              <div className="xdsoft_option" data-value="1957">1957</div>
              <div className="xdsoft_option" data-value="1958">1958</div>
              <div className="xdsoft_option" data-value="1959">1959</div>
              <div className="xdsoft_option" data-value="1960">1960</div>
              <div className="xdsoft_option" data-value="1961">1961</div>
              <div className="xdsoft_option" data-value="1962">1962</div>
              <div className="xdsoft_option" data-value="1963">1963</div>
              <div className="xdsoft_option" data-value="1964">1964</div>
              <div className="xdsoft_option" data-value="1965">1965</div>
              <div className="xdsoft_option" data-value="1966">1966</div>
              <div className="xdsoft_option" data-value="1967">1967</div>
              <div className="xdsoft_option" data-value="1968">1968</div>
              <div className="xdsoft_option" data-value="1969">1969</div>
              <div className="xdsoft_option" data-value="1970">1970</div>
              <div className="xdsoft_option" data-value="1971">1971</div>
              <div className="xdsoft_option" data-value="1972">1972</div>
              <div className="xdsoft_option" data-value="1973">1973</div>
              <div className="xdsoft_option" data-value="1974">1974</div>
              <div className="xdsoft_option" data-value="1975">1975</div>
              <div className="xdsoft_option" data-value="1976">1976</div>
              <div className="xdsoft_option" data-value="1977">1977</div>
              <div className="xdsoft_option" data-value="1978">1978</div>
              <div className="xdsoft_option" data-value="1979">1979</div>
              <div className="xdsoft_option" data-value="1980">1980</div>
              <div className="xdsoft_option" data-value="1981">1981</div>
              <div className="xdsoft_option" data-value="1982">1982</div>
              <div className="xdsoft_option" data-value="1983">1983</div>
              <div className="xdsoft_option" data-value="1984">1984</div>
              <div className="xdsoft_option" data-value="1985">1985</div>
              <div className="xdsoft_option" data-value="1986">1986</div>
              <div className="xdsoft_option" data-value="1987">1987</div>
              <div className="xdsoft_option" data-value="1988">1988</div>
              <div className="xdsoft_option" data-value="1989">1989</div>
              <div className="xdsoft_option" data-value="1990">1990</div>
              <div className="xdsoft_option" data-value="1991">1991</div>
              <div className="xdsoft_option" data-value="1992">1992</div>
              <div className="xdsoft_option" data-value="1993">1993</div>
              <div className="xdsoft_option" data-value="1994">1994</div>
              <div className="xdsoft_option" data-value="1995">1995</div>
              <div className="xdsoft_option" data-value="1996">1996</div>
              <div className="xdsoft_option" data-value="1997">1997</div>
              <div className="xdsoft_option" data-value="1998">1998</div>
              <div className="xdsoft_option" data-value="1999">1999</div>
              <div className="xdsoft_option" data-value="2000">2000</div>
              <div className="xdsoft_option" data-value="2001">2001</div>
              <div className="xdsoft_option" data-value="2002">2002</div>
              <div className="xdsoft_option" data-value="2003">2003</div>
              <div className="xdsoft_option" data-value="2004">2004</div>
              <div className="xdsoft_option" data-value="2005">2005</div>
              <div className="xdsoft_option" data-value="2006">2006</div>
              <div className="xdsoft_option" data-value="2007">2007</div>
              <div className="xdsoft_option" data-value="2008">2008</div>
              <div className="xdsoft_option" data-value="2009">2009</div>
              <div className="xdsoft_option" data-value="2010">2010</div>
              <div className="xdsoft_option" data-value="2011">2011</div>
              <div className="xdsoft_option" data-value="2012">2012</div>
              <div className="xdsoft_option" data-value="2013">2013</div>
              <div className="xdsoft_option" data-value="2014">2014</div>
              <div className="xdsoft_option" data-value="2015">2015</div>
              <div className="xdsoft_option" data-value="2016">2016</div>
              <div className="xdsoft_option" data-value="2017">2017</div>
              <div className="xdsoft_option" data-value="2018">2018</div>
              <div className="xdsoft_option" data-value="2019">2019</div>
              <div className="xdsoft_option" data-value="2020">2020</div>
              <div className="xdsoft_option" data-value="2021">2021</div>
              <div className="xdsoft_option xdsoft_current" data-value="2022">
                2022
              </div>
              <div className="xdsoft_option" data-value="2023">2023</div>
              <div className="xdsoft_option" data-value="2024">2024</div>
              <div className="xdsoft_option" data-value="2025">2025</div>
              <div className="xdsoft_option" data-value="2026">2026</div>
              <div className="xdsoft_option" data-value="2027">2027</div>
              <div className="xdsoft_option" data-value="2028">2028</div>
              <div className="xdsoft_option" data-value="2029">2029</div>
              <div className="xdsoft_option" data-value="2030">2030</div>
              <div className="xdsoft_option" data-value="2031">2031</div>
              <div className="xdsoft_option" data-value="2032">2032</div>
              <div className="xdsoft_option" data-value="2033">2033</div>
              <div className="xdsoft_option" data-value="2034">2034</div>
              <div className="xdsoft_option" data-value="2035">2035</div>
              <div className="xdsoft_option" data-value="2036">2036</div>
              <div className="xdsoft_option" data-value="2037">2037</div>
              <div className="xdsoft_option" data-value="2038">2038</div>
              <div className="xdsoft_option" data-value="2039">2039</div>
              <div className="xdsoft_option" data-value="2040">2040</div>
              <div className="xdsoft_option" data-value="2041">2041</div>
              <div className="xdsoft_option" data-value="2042">2042</div>
              <div className="xdsoft_option" data-value="2043">2043</div>
              <div className="xdsoft_option" data-value="2044">2044</div>
              <div className="xdsoft_option" data-value="2045">2045</div>
              <div className="xdsoft_option" data-value="2046">2046</div>
              <div className="xdsoft_option" data-value="2047">2047</div>
              <div className="xdsoft_option" data-value="2048">2048</div>
              <div className="xdsoft_option" data-value="2049">2049</div>
              <div className="xdsoft_option" data-value="2050">2050</div>
            </div>
            <div className="xdsoft_scrollbar">
              <div
                className="xdsoft_scroller"
                style={{height: 10+"px", marginTop: 0+"px"}}
              ></div>
            </div>
          </div>
          <i></i>
        </div>
        <button
          type="button"
          className="xdsoft_next"
          style={{visibility: "visible"}}
        ></button>
      </div>
      <div className="xdsoft_calendar">
        <table>
          <thead>
            <tr>
              <th>Sun</th>
              <th>Mon</th>
              <th>Tue</th>
              <th>Wed</th>
              <th>Thu</th>
              <th>Fri</th>
              <th>Sat</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td
                data-date="28"
                data-month="7"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week0 xdsoft_date xdsoft_other_month xdsoft_weekend"
                title=""
              >
                <div>28</div>
              </td>
              <td
                data-date="29"
                data-month="7"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week1 xdsoft_date xdsoft_other_month"
                title=""
              >
                <div>29</div>
              </td>
              <td
                data-date="30"
                data-month="7"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week2 xdsoft_date xdsoft_other_month"
                title=""
              >
                <div>30</div>
              </td>
              <td
                data-date="31"
                data-month="7"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week3 xdsoft_date xdsoft_other_month"
                title=""
              >
                <div>31</div>
              </td>
              <td
                data-date="1"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week4 xdsoft_date"
                title=""
              >
                <div>1</div>
              </td>
              <td
                data-date="2"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week5 xdsoft_date"
                title=""
              >
                <div>2</div>
              </td>
              <td
                data-date="3"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week6 xdsoft_date xdsoft_weekend"
                title=""
              >
                <div>3</div>
              </td>
            </tr>
            <tr>
              <td
                data-date="4"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week0 xdsoft_date xdsoft_weekend"
                title=""
              >
                <div>4</div>
              </td>
              <td
                data-date="5"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week1 xdsoft_date"
                title=""
              >
                <div>5</div>
              </td>
              <td
                data-date="6"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week2 xdsoft_date"
                title=""
              >
                <div>6</div>
              </td>
              <td
                data-date="7"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week3 xdsoft_date"
                title=""
              >
                <div>7</div>
              </td>
              <td
                data-date="8"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week4 xdsoft_date"
                title=""
              >
                <div>8</div>
              </td>
              <td
                data-date="9"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week5 xdsoft_date"
                title=""
              >
                <div>9</div>
              </td>
              <td
                data-date="10"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week6 xdsoft_date xdsoft_weekend"
                title=""
              >
                <div>10</div>
              </td>
            </tr>
            <tr>
              <td
                data-date="11"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week0 xdsoft_date xdsoft_weekend"
                title=""
              >
                <div>11</div>
              </td>
              <td
                data-date="12"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week1 xdsoft_date"
                title=""
              >
                <div>12</div>
              </td>
              <td
                data-date="13"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week2 xdsoft_date"
                title=""
              >
                <div>13</div>
              </td>
              <td
                data-date="14"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week3 xdsoft_date"
                title=""
              >
                <div>14</div>
              </td>
              <td
                data-date="15"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week4 xdsoft_date xdsoft_current xdsoft_today"
                title=""
              >
                <div>15</div>
              </td>
              <td
                data-date="16"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week5 xdsoft_date"
                title=""
              >
                <div>16</div>
              </td>
              <td
                data-date="17"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week6 xdsoft_date xdsoft_weekend"
                title=""
              >
                <div>17</div>
              </td>
            </tr>
            <tr>
              <td
                data-date="18"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week0 xdsoft_date xdsoft_weekend"
                title=""
              >
                <div>18</div>
              </td>
              <td
                data-date="19"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week1 xdsoft_date"
                title=""
              >
                <div>19</div>
              </td>
              <td
                data-date="20"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week2 xdsoft_date"
                title=""
              >
                <div>20</div>
              </td>
              <td
                data-date="21"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week3 xdsoft_date"
                title=""
              >
                <div>21</div>
              </td>
              <td
                data-date="22"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week4 xdsoft_date"
                title=""
              >
                <div>22</div>
              </td>
              <td
                data-date="23"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week5 xdsoft_date"
                title=""
              >
                <div>23</div>
              </td>
              <td
                data-date="24"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week6 xdsoft_date xdsoft_weekend"
                title=""
              >
                <div>24</div>
              </td>
            </tr>
            <tr>
              <td
                data-date="25"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week0 xdsoft_date xdsoft_weekend"
                title=""
              >
                <div>25</div>
              </td>
              <td
                data-date="26"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week1 xdsoft_date"
                title=""
              >
                <div>26</div>
              </td>
              <td
                data-date="27"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week2 xdsoft_date"
                title=""
              >
                <div>27</div>
              </td>
              <td
                data-date="28"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week3 xdsoft_date"
                title=""
              >
                <div>28</div>
              </td>
              <td
                data-date="29"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week4 xdsoft_date"
                title=""
              >
                <div>29</div>
              </td>
              <td
                data-date="30"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week5 xdsoft_date"
                title=""
              >
                <div>30</div>
              </td>
              <td
                data-date="1"
                data-month="9"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week6 xdsoft_date xdsoft_other_month xdsoft_weekend"
                title=""
              >
                <div>1</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <button
        type="button"
        className="xdsoft_save_selected blue-gradient-button"
        style={{display: "none"}}
      >
        Save Selected
      </button>
    </div>
    <div className="xdsoft_timepicker active">
      <button type="button" className="xdsoft_prev"></button>
      <div className="xdsoft_time_box xdsoft_scroller_box">
        <div className="xdsoft_time_variant" style={{marginTop: -1101+"px"}}>
          <div className="xdsoft_time" data-hour="0" data-minute="0">00:00</div>
          <div className="xdsoft_time" data-hour="0" data-minute="15">00:15</div>
          <div className="xdsoft_time" data-hour="0" data-minute="30">00:30</div>
          <div className="xdsoft_time" data-hour="0" data-minute="45">00:45</div>
          <div className="xdsoft_time" data-hour="1" data-minute="0">01:00</div>
          <div className="xdsoft_time" data-hour="1" data-minute="15">01:15</div>
          <div className="xdsoft_time" data-hour="1" data-minute="30">01:30</div>
          <div className="xdsoft_time" data-hour="1" data-minute="45">01:45</div>
          <div className="xdsoft_time" data-hour="2" data-minute="0">02:00</div>
          <div className="xdsoft_time" data-hour="2" data-minute="15">02:15</div>
          <div className="xdsoft_time" data-hour="2" data-minute="30">02:30</div>
          <div className="xdsoft_time" data-hour="2" data-minute="45">02:45</div>
          <div className="xdsoft_time" data-hour="3" data-minute="0">03:00</div>
          <div className="xdsoft_time" data-hour="3" data-minute="15">03:15</div>
          <div className="xdsoft_time" data-hour="3" data-minute="30">03:30</div>
          <div className="xdsoft_time" data-hour="3" data-minute="45">03:45</div>
          <div className="xdsoft_time" data-hour="4" data-minute="0">04:00</div>
          <div className="xdsoft_time" data-hour="4" data-minute="15">04:15</div>
          <div className="xdsoft_time" data-hour="4" data-minute="30">04:30</div>
          <div className="xdsoft_time" data-hour="4" data-minute="45">04:45</div>
          <div className="xdsoft_time" data-hour="5" data-minute="0">05:00</div>
          <div className="xdsoft_time" data-hour="5" data-minute="15">05:15</div>
          <div className="xdsoft_time" data-hour="5" data-minute="30">05:30</div>
          <div className="xdsoft_time" data-hour="5" data-minute="45">05:45</div>
          <div className="xdsoft_time" data-hour="6" data-minute="0">06:00</div>
          <div className="xdsoft_time" data-hour="6" data-minute="15">06:15</div>
          <div className="xdsoft_time" data-hour="6" data-minute="30">06:30</div>
          <div className="xdsoft_time" data-hour="6" data-minute="45">06:45</div>
          <div className="xdsoft_time" data-hour="7" data-minute="0">07:00</div>
          <div className="xdsoft_time" data-hour="7" data-minute="15">07:15</div>
          <div className="xdsoft_time" data-hour="7" data-minute="30">07:30</div>
          <div className="xdsoft_time" data-hour="7" data-minute="45">07:45</div>
          <div className="xdsoft_time" data-hour="8" data-minute="0">08:00</div>
          <div className="xdsoft_time" data-hour="8" data-minute="15">08:15</div>
          <div className="xdsoft_time" data-hour="8" data-minute="30">08:30</div>
          <div className="xdsoft_time" data-hour="8" data-minute="45">08:45</div>
          <div className="xdsoft_time" data-hour="9" data-minute="0">09:00</div>
          <div className="xdsoft_time" data-hour="9" data-minute="15">09:15</div>
          <div className="xdsoft_time" data-hour="9" data-minute="30">09:30</div>
          <div className="xdsoft_time" data-hour="9" data-minute="45">09:45</div>
          <div className="xdsoft_time" data-hour="10" data-minute="0">10:00</div>
          <div className="xdsoft_time" data-hour="10" data-minute="15">10:15</div>
          <div className="xdsoft_time" data-hour="10" data-minute="30">10:30</div>
          <div className="xdsoft_time" data-hour="10" data-minute="45">10:45</div>
          <div
            className="xdsoft_time xdsoft_current"
            data-hour="11"
            data-minute="0"
          >
            11:00
          </div>
          <div className="xdsoft_time" data-hour="11" data-minute="15">11:15</div>
          <div className="xdsoft_time" data-hour="11" data-minute="30">11:30</div>
          <div className="xdsoft_time" data-hour="11" data-minute="45">11:45</div>
          <div className="xdsoft_time" data-hour="12" data-minute="0">12:00</div>
          <div className="xdsoft_time" data-hour="12" data-minute="15">12:15</div>
          <div className="xdsoft_time" data-hour="12" data-minute="30">12:30</div>
          <div className="xdsoft_time" data-hour="12" data-minute="45">12:45</div>
          <div className="xdsoft_time" data-hour="13" data-minute="0">13:00</div>
          <div className="xdsoft_time" data-hour="13" data-minute="15">13:15</div>
          <div className="xdsoft_time" data-hour="13" data-minute="30">13:30</div>
          <div className="xdsoft_time" data-hour="13" data-minute="45">13:45</div>
          <div className="xdsoft_time" data-hour="14" data-minute="0">14:00</div>
          <div className="xdsoft_time" data-hour="14" data-minute="15">14:15</div>
          <div className="xdsoft_time" data-hour="14" data-minute="30">14:30</div>
          <div className="xdsoft_time" data-hour="14" data-minute="45">14:45</div>
          <div className="xdsoft_time" data-hour="15" data-minute="0">15:00</div>
          <div className="xdsoft_time" data-hour="15" data-minute="15">15:15</div>
          <div className="xdsoft_time" data-hour="15" data-minute="30">15:30</div>
          <div className="xdsoft_time" data-hour="15" data-minute="45">15:45</div>
          <div className="xdsoft_time" data-hour="16" data-minute="0">16:00</div>
          <div className="xdsoft_time" data-hour="16" data-minute="15">16:15</div>
          <div className="xdsoft_time" data-hour="16" data-minute="30">16:30</div>
          <div className="xdsoft_time" data-hour="16" data-minute="45">16:45</div>
          <div className="xdsoft_time" data-hour="17" data-minute="0">17:00</div>
          <div className="xdsoft_time" data-hour="17" data-minute="15">17:15</div>
          <div className="xdsoft_time" data-hour="17" data-minute="30">17:30</div>
          <div className="xdsoft_time" data-hour="17" data-minute="45">17:45</div>
          <div className="xdsoft_time" data-hour="18" data-minute="0">18:00</div>
          <div className="xdsoft_time" data-hour="18" data-minute="15">18:15</div>
          <div className="xdsoft_time" data-hour="18" data-minute="30">18:30</div>
          <div className="xdsoft_time" data-hour="18" data-minute="45">18:45</div>
          <div className="xdsoft_time" data-hour="19" data-minute="0">19:00</div>
          <div className="xdsoft_time" data-hour="19" data-minute="15">19:15</div>
          <div className="xdsoft_time" data-hour="19" data-minute="30">19:30</div>
          <div className="xdsoft_time" data-hour="19" data-minute="45">19:45</div>
          <div className="xdsoft_time" data-hour="20" data-minute="0">20:00</div>
          <div className="xdsoft_time" data-hour="20" data-minute="15">20:15</div>
          <div className="xdsoft_time" data-hour="20" data-minute="30">20:30</div>
          <div className="xdsoft_time" data-hour="20" data-minute="45">20:45</div>
          <div className="xdsoft_time" data-hour="21" data-minute="0">21:00</div>
          <div className="xdsoft_time" data-hour="21" data-minute="15">21:15</div>
          <div className="xdsoft_time" data-hour="21" data-minute="30">21:30</div>
          <div className="xdsoft_time" data-hour="21" data-minute="45">21:45</div>
          <div className="xdsoft_time" data-hour="22" data-minute="0">22:00</div>
          <div className="xdsoft_time" data-hour="22" data-minute="15">22:15</div>
          <div className="xdsoft_time" data-hour="22" data-minute="30">22:30</div>
          <div className="xdsoft_time" data-hour="22" data-minute="45">22:45</div>
          <div className="xdsoft_time" data-hour="23" data-minute="0">23:00</div>
          <div className="xdsoft_time" data-hour="23" data-minute="15">23:15</div>
          <div className="xdsoft_time" data-hour="23" data-minute="30">23:30</div>
          <div className="xdsoft_time" data-hour="23" data-minute="45">23:45</div>
        </div>
        <div className="xdsoft_scrollbar">
          <div
            className="xdsoft_scroller"
            style={{height: 10+"px", marginTop: 67.9871+"px"}}
          ></div>
        </div>
      </div>
      <button type="button" className="xdsoft_next"></button>
    </div>
  </div>
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

export default Add
