import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    return (
      <div>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
            >
               <li
                            className="detailstab nav-item"
                            data-index="0"
                            data-title="details"
                          >
                            <Link
                              data-toggle="tab"
                              to="#detailstab"
                              className="notajax nav-link active"
                            >
                              <i
                                className="green ace-icon fa fa-info-circle bigger-110"
                              ></i
                              ><span style={{padding: 0 +3+"px"}}>التفاصيل</span>
                            </Link>
                          </li>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
                 <li
                            className="contenttab nav-item"
                            data-index="1"
                            data-title="content"
                          >
                            <Link
                              data-toggle="tab"
                              to="#contenttab"
                              className="notajax nav-link"
                            >
                              <i
                                className="pink ace-icon fa fa-i-cursor bigger-110"
                              ></i
                              ><span style={{padding: 0 +3+"px"}}>المحرر</span>
                            </Link>
                          </li>
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col sm="12" id="detailstab">
              <div className="row">
                <div className="col-12 post-form">
                  <div className="form-content">
                    <div className="en-form language-forms" style={{padding: 20+"px"}}>
                      <div className="tabbable">
                       
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
                                  value="Lebanon to the basketball world cup"
                                  readonly=""
                                  maxlength="256"
                                  data-addedto="10"
                                />
                                <div
                                  className="fieldlength"
                               
                                >
                                  35
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
                                <input
                                  id="PostDate"
                                  name="PostDate"
                                  value="2022-09-09 09:49"
                                  type="hidden"
                                />
                                <span className="ltr">2022-09-09 09:49</span>
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
                              value="/article/sports/1332/lebanon-to-the-basketball-world-cup"
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
                                >
                                  <div className="itemdiv memberdiv">
                                    <div className="inline pos-rel">
                                      <div
                                        className="user"
                                        data-bind="visible: (thumbUrl != null)"
                                      >
                                        <img
                                          data-bind="attr: { src: thumbUrl , title: title}"
                                          src="https://as-mangopulse-media.azurewebsites.net/store/archive/image/2022/7/1/4bd0ecc2-0c46-4648-b0f0-1f13249a33c9.jpg"
                                          title="John Smith"
                                        />
                                      </div>
                                      <div className="body">
                                        <div className="name">
                                          <div
                                            data-bind="html: title"
                                            style={{height: 25+"px", overflow: "hidden"}}
                                          >
                                            John Smith
                                          </div>
                                          <a
                                            data-bind="attr: {href: previewUrl}"
                                            className="notajax purple"
                                            target="_blank"
                                            href="/Posts/author/Preview/58"
                                          >
                                            <i
                                              className="ace-icon fa fa-eye bigger-120"
                                            ></i>
                                          </a>
                                          <a
                                            href="#"
                                            className="red"
                                            data-bind="click: $parent.removerelative"
                                          >
                                            <i
                                              className="ace-icon fa fa-trash bigger-120"
                                            ></i>
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <a
                                  className="btn btn-new purple"
                                  data-bind="visible: showAddRelations('ArticleAuthor')"
                                  data-loadtype="popup"
                                  href="/Posts/Browse?Types=author&amp;AllowedCount=1&amp;ParentHandler=window.back.pages.postmodule&amp;ReturnValue=ArticleAuthor%3AAuthor"
                                  style={{display: "none"}}
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
                                    <span className="tag"
                                      ><a
                                        className="notajax white"
                                        target="_blank"
                                        href="/Search/Filter?Tags=Sports"
                                        >Sports</a
                                      ><button type="button" className="close">
                                        ×
                                      </button></span
                                    ><input
                                      type="text"
                                      className="tagfield"
                                      value="Sports"
                                      data-taxonomy="eff682f4-ed5e-11ec-9860-30d16bee5962"
                                      id="Terms[0].Value"
                                      name="Terms[0].Value"
                                      data-auto-add="true"
                                      style={{
                                        display: "none",
                                        overflow: "hidden",
                                        overflowWrap: "break-word",
                                        resize: "none",
                                        height: 126+"px",
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
                                    checked=""
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
                                  value="480a93ce-d8e9-47bf-a7fa-07b52ca81a27"
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
                                <input type="hidden" name="Metas[0].Icon" />
                                <input
                                  type="hidden"
                                  name="Metas[0].Order"
                                  value="-2"
                                />
                              </div>
                            </div>
                            <div className="form-group meta-ShowInAR" >
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
                                    checked=""
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
                                  value="ee72fee1-60ee-4d86-8dd2-98fa39bf4e02"
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
                                <input type="hidden" name="Metas[1].Icon" />
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
                                  style={{display: "none"}}
                                >
                                  <a
                                    href="/Assets/Media/MediaUpload?ParentHandler=window.back.pages.postmodule&amp;NoCrop=False&amp;NoCaption=False&amp;Compress=True&amp;CropRatio=1&amp;Placement=cover&amp;Count=1&amp;PostId=a03a6b93-3024-11ed-a81c-000d3aa9c700&amp;PostTypeId=c8bcc2d9-ec89-11ec-985f-30d16bee5962&amp;type=image"
                                    className="btn btn-new purple"
                                    data-appendtoconainer="true"
                                    data-container="body"
                                    data-loadtype="popup"
                                    ><i className="ace-icon fa fa-file-image"></i>
                                    Upload Image
                                  </a>
                                  <div
                                    style={{padding: 10+"px"}}
                                  ></div>
                                </div>
                                <ul
                                  className="ace-thumbnails clearfix"
                                  data-bind="foreach: filteredMedias('cover')"
                                >
                                  <li>
                                    <a
                                      data-bind="attr: { href: mediaUrl + '?v=1', title: caption,'data-mediapreview':mediaType }"
                                      className="cboxElement"
                                      href="//as-mangopulse-media.azurewebsites.net/store/archive/image/2022/9/9/e56c4444-402e-40fc-9095-103d9073f275.jpg?v=1"
                                      title="المنتخب اللبناني يتأهل إلى كأس العالم لكرة السلة"
                                      data-mediapreview="10"
                                    >
                                      <img
                                        data-bind="attr: { src: thumbUrl }"
                                        className="img-responsive"
                                        style={{height: 100+"px", width: 170+"px"}}
                                        src="https://as-mangopulse-media.azurewebsites.net/store/archive/image/2022/9/9/e56c4444-402e-40fc-9095-103d9073f275.jpg"
                                      />
                                    </a>
                                    <div className="tools tools-top">
                                      <a
                                        data-bind="attr: {href: '/Assets/Media/Edit/' + id}"
                                        target="_blank"
                                        className="notajax"
                                        href="/Assets/Media/Edit/9418958b-3024-11ed-a81c-000d3aa9c808"
                                      >
                                        <i className="ace-icon fa fa-edit"></i>
                                      </a>
                                      <a
                                        data-bind="attr: {href: '/Assets/Media/CreateConfiguredCrops/' + id}"
                                        href="/Assets/Media/CreateConfiguredCrops/9418958b-3024-11ed-a81c-000d3aa9c808"
                                      >
                                        <i className="ace-icon fa fa-crop"></i>
                                      </a>
                                      <a
                                        data-bind="attr{href: '/Social/Publish/Share?mediaId=' + id}"
                                        target="_blank"
                                        href="/Social/Publish/Share?mediaId=9418958b-3024-11ed-a81c-000d3aa9c808"
                                      >
                                        <i className="ace-icon fa fa-share-alt"></i>
                                      </a>
  
                                      <a
                                        href="#"
                                        data-bind="click: $parent.removeMediaItem"
                                      >
                                        <i className="ace-icon fa fa-times"></i>
                                      </a>
                                      <a
                                        href="#"
                                        className="notajax"
                                        data-bind="visible:mediaType =='30',click: changeIsPublic"
                                        style={{display: "none"}}
                                      >
                                        <i
                                          data-bind="attr:{className: isPublic() == true ? 'fa fa-check-square-o orange' : 'fa fa-check-square-o'}"
                                          className="fa fa-check-square-o"
                                        ></i>
                                      </a>
                                    </div>
                                    <div>
                                      <span
                                        className="label label-info"
                                        data-bind="text: mediaTypeText"
                                        >Image</span
                                      >
                                    </div>
                                  </li>
                                </ul>
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
                                  style={{display: "none"}}
                                >
                                  <a
                                    href="/Assets/Media/MediaUpload?ParentHandler=window.back.pages.postmodule&amp;NoCrop=False&amp;NoCaption=False&amp;Compress=True&amp;CropRatio=2&amp;Placement=longCover&amp;Count=1&amp;PostId=a03a6b93-3024-11ed-a81c-000d3aa9c700&amp;PostTypeId=c8bcc2d9-ec89-11ec-985f-30d16bee5962&amp;type=image"
                                    className="btn btn-new purple"
                                    data-appendtoconainer="true"
                                    data-container="body"
                                    data-loadtype="popup"
                                    ><i className="ace-icon fa fa-file-image"></i>
                                    Upload Image
                                  </a>
                                  <div
                                    style={{padding: 10+"px"}}
                                  ></div>
                                </div>
                                <ul
                                  className="ace-thumbnails clearfix"
                                  data-bind="foreach: filteredMedias('longCover')"
                                >
                                  <li>
                                    <a
                                      data-bind="attr: { href: mediaUrl + '?v=1', title: caption,'data-mediapreview':mediaType }"
                                      className="cboxElement"
                                      href="//as-mangopulse-media.azurewebsites.net/store/archive/image/2022/9/9/9889890a-c107-40d9-9f8c-3c220a56469c.jpg?v=1"
                                      title="المنتخب اللبناني يتأهل إلى كأس العالم لكرة السلة"
                                      data-mediapreview="10"
                                    >
                                      <img
                                        data-bind="attr: { src: thumbUrl }"
                                        className="img-responsive"
                                        style={{height: 100+"px", width: 170+"px"}}
                                        src="https://as-mangopulse-media.azurewebsites.net/store/archive/image/2022/9/9/9889890a-c107-40d9-9f8c-3c220a56469c.jpg"
                                      />
                                    </a>
                                    <div className="tools tools-top">
                                      <a
                                        data-bind="attr: {href: '/Assets/Media/Edit/' + id}"
                                        target="_blank"
                                        className="notajax"
                                        href="/Assets/Media/Edit/e7d2a7bd-3024-11ed-a81c-000d3aa9c808"
                                      >
                                        <i className="ace-icon fa fa-edit"></i>
                                      </a>
                                      <a
                                        data-bind="attr: {href: '/Assets/Media/CreateConfiguredCrops/' + id}"
                                        href="/Assets/Media/CreateConfiguredCrops/e7d2a7bd-3024-11ed-a81c-000d3aa9c808"
                                      >
                                        <i className="ace-icon fa fa-crop"></i>
                                      </a>
                                      <a
                                        data-bind="attr{href: '/Social/Publish/Share?mediaId=' + id}"
                                        target="_blank"
                                        href="/Social/Publish/Share?mediaId=e7d2a7bd-3024-11ed-a81c-000d3aa9c808"
                                      >
                                        <i className="ace-icon fa fa-share-alt"></i>
                                      </a>
  
                                      <a
                                        href="#"
                                        data-bind="click: $parent.removeMediaItem"
                                      >
                                        <i className="ace-icon fa fa-times"></i>
                                      </a>
                                      <a
                                        href="#"
                                        className="notajax"
                                        data-bind="visible:mediaType =='30',click: changeIsPublic"
                                        style={{display: "none"}}
                                      >
                                        <i
                                          data-bind="attr:{className: isPublic() == true ? 'fa fa-check-square-o orange' : 'fa fa-check-square-o'}"
                                          className="fa fa-check-square-o"
                                        ></i>
                                      </a>
                                    </div>
                                    <div>
                                      <span
                                        className="label label-info"
                                        data-bind="text: mediaTypeText"
                                        >Image</span
                                      >
                                    </div>
                                  </li>
                                </ul>
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
                                data-doc-id="a03a6b93-3024-11ed-a81c-000d3aa9c700"
                                data-type="content"
                                aria-hidden="true"
                                style={{display: "none"}}
                              >
  &lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur laoreet, sapien a elementum dignissim, metus odio interdum lectus, quis interdum ipsum nibh quis ante. Duis rhoncus et quam ut tempus. Mauris consectetur quam sed sapien tincidunt, id egestas mauris sodales. Nam dignissim interdum molestie. Aenean id sodales velit. Fusce varius luctus pharetra. Aliquam et accumsan urna. Aliquam turpis metus, scelerisque sed mauris imperdiet, molestie cursus magna. Nullam in velit sed leo dignissim commodo scelerisque vitae risus. Suspendisse potenti. Ut eu nibh ut felis efficitur bibendum.&lt;/p&gt;
    &lt;p&gt;Duis iaculis dolor convallis urna venenatis, tempor ultrices velit scelerisque. Nulla et vulputate lacus. Curabitur elementum dui nibh, non consectetur orci ornare eu. Duis vehicula molestie auctor. Maecenas eget sapien sed ipsum pellentesque pharetra vel sed eros. Donec malesuada metus quis mi mollis rutrum. Maecenas et elementum libero. Sed aliquam iaculis magna ac mollis. Nunc vitae lorem sed tortor pretium ullamcorper eget sed ligula. Morbi in convallis sem. Suspendisse a mi eu nibh molestie mattis. Aenean mauris ipsum, varius quis nulla nec, semper mattis lacus. Sed nulla urna, varius at nibh vitae, accumsan placerat erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam volutpat turpis sit amet dolor porttitor, at semper quam ullamcorper. Aenean purus sapien, condimentum sed arcu id, tempor facilisis orci.&lt;/p&gt;
    &lt;p&gt;In nisl lectus, pulvinar sit amet eros commodo, posuere consectetur arcu. Pellentesque pellentesque mauris augue, nec fermentum erat tempor et. Suspendisse feugiat eros et nisi malesuada ornare. Vivamus interdum bibendum augue, vel commodo purus lacinia vitae. Aliquam erat volutpat. Nam ut ligula velit. Cras non purus nulla. Donec fermentum enim a fermentum posuere. Fusce efficitur erat quis nisi ornare, ac mattis nisl consectetur. In ut mi ac neque pellentesque commodo at nec tellus. Nullam sit amet ligula lacinia, lacinia lacus sit amet, porta ligula. Nunc vitae quam ac dui malesuada porta ut sed elit. Etiam nec ante nisi. Ut nec augue ultrices, rhoncus ligula at, luctus lectus. Donec ac metus nisi. Nam lobortis nulla tempor bibendum elementum.&lt;/p&gt;</textarea
                              >
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
                                            style={{userSelect:"none"}}
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
                                            aria-describedby="aria_4829180591791663238740452"
                                            style={{userSelect:"none"}}
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
                                              id="aria_4829180591791663238740452"
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
                                            aria-describedby="aria_7453899321811663238740454"
                                            style={{userSelect:"none"}}
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
                                              id="aria_7453899321811663238740454"
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
                                            aria-describedby="aria_5568137251831663238740461"
                                            style={{userSelect:"none"}}
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
                                              id="aria_5568137251831663238740461"
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
  
                          <div id="linkstab" className="tab-pane komain"></div>
                        </div>
                      </div>
                      <span className="clearfix"></span>
                    </div>
                    <div
                      className="ar-form language-forms"
                      style={{padding: 20+"px", display: "none"}}>
                      <h5>العربية</h5>
  
                      <div className="form-group title" style={{marginBottom: 15+"px"}}>
                        <label className="control-label col-sm-1">عنوان</label>
                        <div className="col-sm-11">
                          <input
                            className="col-12"
                            id="Glossary[0].Value"
                            name="Glossary[0].Value"
                            type="text"
                            value="المنتخب اللبناني يتأهل إلى كأس العالم لكرة السلة"
                          /><input
                            type="hidden"
                            name="Glossary[0].Field"
                            value="Title"
                          /><input
                            type="hidden"
                            name="Glossary[0].Id"
                            value="ef36db58-0261-4bad-8f5d-dd73e3cdf20f"
                          /><input
                            type="hidden"
                            name="Glossary[0].Language"
                            value="ar"
                          /><input
                            type="hidden"
                            name="Glossary[0].ResourceId"
                            value="a03a6b93-3024-11ed-a81c-000d3aa9c700"
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
                            value="a03a6b93-3024-11ed-a81c-000d3aa9c700"
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
                          >
  &lt;p&gt;وتفوّق منتخب الأرز في الربع الأول (27-17) والثاني (22-12) والثالث (22-13) والرابع (24-21) ليبلغ كأس العالم للمرة الرابعة في تاريخه إذ سبق وشارك لبنان في نسخات 2002 و2006 و2010.&lt;/p&gt;
    &lt;p&gt;وكان المنتخب اللبناني الذي يقدم مستويات كبيرة افتتح النافذة الرابعة بفوز مثير على الفلبين ونجمها العالمي كلاركسن (85-81) عبّد له الطريق إلى كأس العالم التي سيسجل حضوره فيها للمرة الأولى منذ 13 عاماً.&lt;/p&gt;</textarea
                          >
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
                                        aria-describedby="aria_6249506182691663238740515"
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
                                          id="aria_6249506182691663238740515"
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
                                        aria-describedby="aria_2159426282711663238740516"
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
                                          id="aria_2159426282711663238740516"
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
                                        aria-describedby="aria_3040464302731663238740517"
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
                                          id="aria_3040464302731663238740517"
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
                            value="d7d75783-8a8b-4247-a5dc-ded76386bdb6"
                          /><input
                            type="hidden"
                            name="Glossary[2].Language"
                            value="ar"
                          /><input
                            type="hidden"
                            name="Glossary[2].ResourceId"
                            value="a03a6b93-3024-11ed-a81c-000d3aa9c700"
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
                        value="a03a6b93-3024-11ed-a81c-000d3aa9c700"
                      />
                      <input
                        type="hidden"
                        name="PublicId"
                        id="PublicId"
                        value="1332"
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
                      <input type="hidden" name="Status" id="Status" value="20" />
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
  
                      <input
                        type="hidden"
                        name="Shortlink"
                        id="Shortlink"
                        value="LU"
                      />
                      <input
                        type="hidden"
                        name="TimeStamp"
                        id="TimeStamp"
                        value="637983139086830000"
                      />
  
                      <div data-bind="foreach: relatives">
                        <input
                          type="hidden"
                          data-bind="attr: { name: $parent.nameFor('Relatives', 'RelativeId', $index()) }, value: relativeId"
                          className="col-12"
                          name="Relatives[0].RelativeId"
                          value="19bed437-f07d-11ec-9860-30d16bee5962"
                        />
                        <input
                          type="hidden"
                          data-bind="attr: { name: $parent.nameFor('Relatives', 'PostId', $index()) }"
                          className="col-12"
                          value="a03a6b93-3024-11ed-a81c-000d3aa9c700"
                          name="Relatives[0].PostId"
                        />
                        <input
                          type="hidden"
                          data-bind="attr: { name: $parent.nameFor('Relatives', 'Relative.PostTypeId', $index())}, value: postTypeId"
                          className="col-12"
                          name="Relatives[0].Relative.PostTypeId"
                          value="35bc8940-ed6b-11ec-858c-5cbaef4b6f65"
                        />
                        <input
                          type="hidden"
                          data-bind="attr: { name: $parent.nameFor('Relatives', 'Relative.PublicId', $index()) }, value: relativePublicId"
                          className="col-12"
                          name="Relatives[0].Relative.PublicId"
                          value="58"
                        />
                        <input
                          type="hidden"
                          data-bind="attr: { name: $parent.nameFor('Relatives', 'Relative.Title', $index()) }, value: title"
                          className="col-12"
                          name="Relatives[0].Relative.Title"
                          value="John Smith"
                        />
                        <input
                          type="hidden"
                          data-bind="attr: { name: $parent.nameFor('Relatives', 'Relation', $index())}, value: relation"
                          className="col-12"
                          name="Relatives[0].Relation"
                          value="ArticleAuthor"
                        />
                        <input
                          type="hidden"
                          data-bind="attr: { name: $parent.nameFor('Relatives', 'RelationDisplay', $index())}, value: relationDisplay"
                          className="col-12"
                          name="Relatives[0].RelationDisplay"
                          value="Author"
                        />
                        <input
                          type="hidden"
                          data-bind="attr: { name: $parent.nameFor('Relatives', 'Id', $index())}, value: id"
                          className="col-12"
                          name="Relatives[0].Id"
                          value="1916bc85-b048-462c-98c8-125ef89bd534"
                        />
                      </div>
                      <div data-bind="foreach: medias">
                        <input
                          type="hidden"
                          data-bind="attr: { name: $parent.nameFor('Medias', 'Id', $index()) }, value: postMediaId"
                          className="col-6"
                          name="Medias[0].Id"
                          value="1b7b4886-847c-435b-a2b4-42876fefdccd"
                        />
                        <input
                          type="hidden"
                          data-bind="attr: { name: $parent.nameFor('Medias', 'MediaItemId', $index()) }, value: id"
                          className="col-6"
                          name="Medias[0].MediaItemId"
                          value="9418958b-3024-11ed-a81c-000d3aa9c808"
                        />
                        <input
                          type="hidden"
                          data-bind="attr: { name: $parent.nameFor('Medias', 'Placement', $index()) }, value: placement"
                          className="col-6"
                          name="Medias[0].Placement"
                          value="cover"
                        />
                        <input
                          type="hidden"
                          data-bind="attr: { name: $parent.nameFor('Medias', 'Order', $index()) }, value: $index()"
                          className="col-6"
                          name="Medias[0].Order"
                          value="0"
                        />
                        <input
                          type="hidden"
                          data-bind="attr: { name: $parent.nameFor('Medias', 'PostCaption', $index()) }, value: caption"
                          className="col-6"
                          name="Medias[0].PostCaption"
                          value="المنتخب اللبناني يتأهل إلى كأس العالم لكرة السلة"
                        />
                        <input
                          type="hidden"
                          data-bind="attr: { name: $parent.nameFor('Medias', 'MediaItem.IsPublic', $index()) }, value: isPublic"
                          className="col-6"
                          name="Medias[0].MediaItem.IsPublic"
                          value=""
                        />
                        <input
                          type="hidden"
                          data-bind="attr: { name: $parent.nameFor('Medias', 'MediaItem.Type', $index()) }, value: mediaType"
                          className="col-6"
                          name="Medias[0].MediaItem.Type"
                          value="10"
                        />
                        <input
                          type="hidden"
                          data-bind="attr: { name: $parent.nameFor('Medias', 'MediaItem.Path', $index()) }, value: mediaPath"
                          className="col-6"
                          name="Medias[0].MediaItem.Path"
                          value="store/archive/image/2022/9/9/e56c4444-402e-40fc-9095-103d9073f275.jpg"
                        />
                        <input
                          type="hidden"
                          data-bind="attr: { name: $parent.nameFor('Medias', 'MediaItem.Thumbnail', $index()) }, value: thumbUrl"
                          className="col-6"
                          name="Medias[0].MediaItem.Thumbnail"
                          value="https://as-mangopulse-media.azurewebsites.net/store/archive/image/2022/9/9/e56c4444-402e-40fc-9095-103d9073f275.jpg"
                        />
  
                        <input
                          type="hidden"
                          data-bind="attr: { name: $parent.nameFor('Medias', 'Id', $index()) }, value: postMediaId"
                          className="col-6"
                          name="Medias[1].Id"
                          value="f3a5f80b-0ddf-473a-81f3-a841d7c9e1e9"
                        />
                        <input
                          type="hidden"
                          data-bind="attr: { name: $parent.nameFor('Medias', 'MediaItemId', $index()) }, value: id"
                          className="col-6"
                          name="Medias[1].MediaItemId"
                          value="e7d2a7bd-3024-11ed-a81c-000d3aa9c808"
                        />
                        <input
                          type="hidden"
                          data-bind="attr: { name: $parent.nameFor('Medias', 'Placement', $index()) }, value: placement"
                          className="col-6"
                          name="Medias[1].Placement"
                          value="longCover"
                        />
                        <input
                          type="hidden"
                          data-bind="attr: { name: $parent.nameFor('Medias', 'Order', $index()) }, value: $index()"
                          className="col-6"
                          name="Medias[1].Order"
                          value="1"
                        />
                        <input
                          type="hidden"
                          data-bind="attr: { name: $parent.nameFor('Medias', 'PostCaption', $index()) }, value: caption"
                          className="col-6"
                          name="Medias[1].PostCaption"
                          value="المنتخب اللبناني يتأهل إلى كأس العالم لكرة السلة"
                        />
                        <input
                          type="hidden"
                          data-bind="attr: { name: $parent.nameFor('Medias', 'MediaItem.IsPublic', $index()) }, value: isPublic"
                          className="col-6"
                          name="Medias[1].MediaItem.IsPublic"
                          value=""
                        />
                        <input
                          type="hidden"
                          data-bind="attr: { name: $parent.nameFor('Medias', 'MediaItem.Type', $index()) }, value: mediaType"
                          className="col-6"
                          name="Medias[1].MediaItem.Type"
                          value="10"
                        />
                        <input
                          type="hidden"
                          data-bind="attr: { name: $parent.nameFor('Medias', 'MediaItem.Path', $index()) }, value: mediaPath"
                          className="col-6"
                          name="Medias[1].MediaItem.Path"
                          value="store/archive/image/2022/9/9/9889890a-c107-40d9-9f8c-3c220a56469c.jpg"
                        />
                        <input
                          type="hidden"
                          data-bind="attr: { name: $parent.nameFor('Medias', 'MediaItem.Thumbnail', $index()) }, value: thumbUrl"
                          className="col-6"
                          name="Medias[1].MediaItem.Thumbnail"
                          value="https://as-mangopulse-media.azurewebsites.net/store/archive/image/2022/9/9/9889890a-c107-40d9-9f8c-3c220a56469c.jpg"
                        />
                      </div>
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
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col sm="12" id="contenttab">
              المحرر
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>
    );
  }
}