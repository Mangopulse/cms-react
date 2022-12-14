import React from 'react'
import HorizantalNavbar from '../HorizantalNavbar'
import VerticalNavbar from '../VerticalNavbar'
import AlnasherTableHeader from './AlnasherTableHeader'
const AlnasherTech = () => {
  return (
    <div>
      <div className="no-skin rtl make-rtl">
     <HorizantalNavbar />
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
            <li className="active">الناشر</li>
            <li>
              <a href="/Index/Posts?type=article&amp;term=tech"> Article </a>
            </li>
          </ul>

          <div
            id="page-data"
            data-url="https://as-mangopulse-admin.azurewebsites.net/Publisher?type=article&amp;term=tech"
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
                  Article / Tech
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
                value="tech"
              />
              <input
                id="TermId"
                name="TermId"
                type="hidden"
                value="2690aaef-ed61-11ec-9860-30d16bee5962"
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
                                      src="//https://as-mangopulse-media.azurewebsites.net/store/archive/image/2022/7/6/0ac51e7d-b33c-4e79-b58a-3c00999005db.jpg?preset=ace-thumbnail"
                                    />
                                    <a
                                      className="user notajax"
                                      data-bind="html: Title"
                                      >Microsoft Paint is finally dead, and the
                                      world Is a better place</a
                                    >

                                    <div className="time">
                                      <i
                                        className="ace-icon fa fa-clock-o bigger-110"
                                      ></i>
                                      <span data-bind="html: Date"
                                        >2022-07-06 12:01:00</span
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
                                      href="/Posts/article/Preview/118"
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
                                    value="0919619c-fd23-11ec-a81d-000d3aa9c700"
                                  />
                                  <input
                                    type="hidden"
                                    data-bind="attr: { name: $parent.nameForInput($index(), 'Order') , value: $parent.order($index()) }"
                                    name="Posts[0].Order"
                                    value="2"
                                  />
                                </div>
                                <div className="profile-activity clearfix">
                                  <div>
                                    <img
                                      className="pull-right"
                                      data-bind="attr: { src: Image.Url }"
                                      src="//https://as-mangopulse-media.azurewebsites.net/store/archive/image/2022/7/6/af219b6b-4811-4a79-9b39-4f221c349bf1.jpg?preset=ace-thumbnail"
                                    />
                                    <a
                                      className="user notajax"
                                      data-bind="html: Title"
                                      >Poll: Virginia governor’s race in dead
                                      heat</a
                                    >

                                    <div className="time">
                                      <i
                                        className="ace-icon fa fa-clock-o bigger-110"
                                      ></i>
                                      <span data-bind="html: Date"
                                        >2022-07-06 11:49:00</span
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
                                      href="/Posts/article/Preview/110"
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
                                    name="Posts[1].Id"
                                    value="da9b6eb6-fd20-11ec-a81d-000d3aa9c700"
                                  />
                                  <input
                                    type="hidden"
                                    data-bind="attr: { name: $parent.nameForInput($index(), 'Order') , value: $parent.order($index()) }"
                                    name="Posts[1].Order"
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
                                href="/Posts/Browse?Type=article&amp;Term=tech&amp;OrderBy=CreationDate%20DESC&amp;Status=20&amp;Page=1&amp;MainRequest=True&amp;SearchRequest=False&amp;AllowedCount=-1&amp;ParentHandler=window.back.publisher&amp;ThisYear=False&amp;SubscriptionId=00000000-0000-0000-0000-000000000000"
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
                                      src="//https://as-mangopulse-media.azurewebsites.net/store/archive/image/2022/7/6/c87a8407-aaaf-43c5-ab52-376bf2be8a9a.jpg?preset=ace-thumbnail"
                                    />
                                    <a
                                      className="user notajax"
                                      data-bind="html: Title"
                                      >Hulu hires Google marketing veteran Kelly
                                      Campbell as CMO</a
                                    >

                                    <div className="time">
                                      <i
                                        className="ace-icon fa fa-clock-o bigger-110"
                                      ></i>
                                      <span data-bind="html: Date"
                                        >2022-07-06 12:01:42</span
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
                                      href="/Posts/article/Preview/116"
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
                                      src="//https://as-mangopulse-media.azurewebsites.net/store/archive/image/2022/7/6/44b612ef-a74d-4809-961b-91e41c8e1a2a.jpg?preset=ace-thumbnail"
                                    />
                                    <a
                                      className="user notajax"
                                      data-bind="html: Title"
                                      >NASA seeks to build a quieter supersonic
                                      plane for passenger flight</a
                                    >

                                    <div className="time">
                                      <i
                                        className="ace-icon fa fa-clock-o bigger-110"
                                      ></i>
                                      <span data-bind="html: Date"
                                        >2022-07-06 12:01:41</span
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
                                      href="/Posts/article/Preview/117"
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
                                      src="//https://as-mangopulse-media.azurewebsites.net/store/archive/image/2022/7/6/55980599-cb00-4e74-b6d2-929e8add8e8a.jpg?preset=ace-thumbnail"
                                    />
                                    <a
                                      className="user notajax"
                                      data-bind="html: Title"
                                      >5 Crowdfunded products that actually
                                      delivered on the hyp</a
                                    >

                                    <div className="time">
                                      <i
                                        className="ace-icon fa fa-clock-o bigger-110"
                                      ></i>
                                      <span data-bind="html: Date"
                                        >2022-07-06 12:01:39</span
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
                                      href="/Posts/article/Preview/119"
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
                                      src="//https://as-mangopulse-media.azurewebsites.net/store/archive/image/2022/7/6/17196add-2584-44ae-b58c-180e9ec92f93.jpg?preset=ace-thumbnail"
                                    />
                                    <a
                                      className="user notajax"
                                      data-bind="html: Title"
                                      >Startup adds beds and Wi-Fi to buses to
                                      turn them into ‘moving hotels’</a
                                    >

                                    <div className="time">
                                      <i
                                        className="ace-icon fa fa-clock-o bigger-110"
                                      ></i>
                                      <span data-bind="html: Date"
                                        >2022-07-06 12:01:00</span
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
                                      href="/Posts/article/Preview/120"
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
                                      src="//https://as-mangopulse-media.azurewebsites.net/store/archive/image/2022/7/6/f01bf8d8-9dbe-49b1-813f-8c82d15004d2.jpg?preset=ace-thumbnail"
                                    />
                                    <a
                                      className="user notajax"
                                      data-bind="html: Title"
                                      >Ford’s 2018 Mustang GT can do 0-to-60 mph
                                      in under 4 seconds</a
                                    >

                                    <div className="time">
                                      <i
                                        className="ace-icon fa fa-clock-o bigger-110"
                                      ></i>
                                      <span data-bind="html: Date"
                                        >2022-07-06 12:01:00</span
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
                                      href="/Posts/article/Preview/115"
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
                                      src="//https://as-mangopulse-media.azurewebsites.net/store/archive/image/2022/7/6/e2599950-e5e4-424e-97f7-cff8a7d6e571.jpg?preset=ace-thumbnail"
                                    />
                                    <a
                                      className="user notajax"
                                      data-bind="html: Title"
                                      >Some California incumbents lagging in
                                      fundraising: report</a
                                    >

                                    <div className="time">
                                      <i
                                        className="ace-icon fa fa-clock-o bigger-110"
                                      ></i>
                                      <span data-bind="html: Date"
                                        >2022-07-06 11:49:00</span
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
                                      href="/Posts/article/Preview/113"
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
                                      src="//https://as-mangopulse-media.azurewebsites.net/store/archive/image/2022/7/6/68c57126-829e-448f-bae9-51369f5d984a.jpg?preset=ace-thumbnail"
                                    />
                                    <a
                                      className="user notajax"
                                      data-bind="html: Title"
                                      >House panel to consider bill to revamp
                                      DHS cyber team</a
                                    >

                                    <div className="time">
                                      <i
                                        className="ace-icon fa fa-clock-o bigger-110"
                                      ></i>
                                      <span data-bind="html: Date"
                                        >2022-07-06 11:49:00</span
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
                                      href="/Posts/article/Preview/111"
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
                                      src="//https://as-mangopulse-media.azurewebsites.net/store/archive/image/2022/7/6/c6a21bef-3a97-4da1-99c6-2aab5b372ca7.jpg?preset=ace-thumbnail"
                                    />
                                    <a
                                      className="user notajax"
                                      data-bind="html: Title"
                                      >Report: $15 minimum wage bill would
                                      benefit 20.7 million workers</a
                                    >

                                    <div className="time">
                                      <i
                                        className="ace-icon fa fa-clock-o bigger-110"
                                      ></i>
                                      <span data-bind="html: Date"
                                        >2022-07-06 11:49:00</span
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
                                      href="/Posts/article/Preview/112"
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
                                      src="//https://as-mangopulse-media.azurewebsites.net/store/archive/image/2022/7/6/a8edcd90-db1c-440f-b049-77e95d612a74.jpg?preset=ace-thumbnail"
                                    />
                                    <a
                                      className="user notajax"
                                      data-bind="html: Title"
                                      >Lawmaker spends a day working as baggage
                                      handler, barista</a
                                    >

                                    <div className="time">
                                      <i
                                        className="ace-icon fa fa-clock-o bigger-110"
                                      ></i>
                                      <span data-bind="html: Date"
                                        >2022-07-06 11:49:00</span
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
                                      href="/Posts/article/Preview/114"
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
                                      src="//https://as-mangopulse-media.azurewebsites.net/store/archive/image/2022/7/6/91463131-09d6-4f78-8943-6c2ccecee72c.jpg?preset=ace-thumbnail"
                                    />
                                    <a
                                      className="user notajax"
                                      data-bind="html: Title"
                                      >Illinois’ financial crisis could bring
                                      the state to a halt</a
                                    >

                                    <div className="time">
                                      <i
                                        className="ace-icon fa fa-clock-o bigger-110"
                                      ></i>
                                      <span data-bind="html: Date"
                                        >2022-07-06 11:49:00</span
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
                                      href="/Posts/article/Preview/107"
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
                                      src="//https://as-mangopulse-media.azurewebsites.net/store/archive/image/2022/7/6/2cb2d531-3809-49f5-babe-a22f75bf693a.jpg?preset=ace-thumbnail"
                                    />
                                    <a
                                      className="user notajax"
                                      data-bind="html: Title"
                                      >Mayors agree, Congress should invest in
                                      affordable housing</a
                                    >

                                    <div className="time">
                                      <i
                                        className="ace-icon fa fa-clock-o bigger-110"
                                      ></i>
                                      <span data-bind="html: Date"
                                        >2022-07-06 11:49:00</span
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
                                      href="/Posts/article/Preview/106"
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
                                      src="//https://as-mangopulse-media.azurewebsites.net/store/archive/image/2022/7/6/36aacca4-633e-4779-b993-8b06d4b7155f.jpg?preset=ace-thumbnail"
                                    />
                                    <a
                                      className="user notajax"
                                      data-bind="html: Title"
                                      >Congress rolls out ‘Better Deal,’ new
                                      economic agenda</a
                                    >

                                    <div className="time">
                                      <i
                                        className="ace-icon fa fa-clock-o bigger-110"
                                      ></i>
                                      <span data-bind="html: Date"
                                        >2022-07-06 11:49:00</span
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
                                      href="/Posts/article/Preview/108"
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
                                      src="//https://as-mangopulse-media.azurewebsites.net/store/archive/image/2022/7/6/5d2b47f8-5571-488e-999b-556bb7021c1f.jpg?preset=ace-thumbnail"
                                    />
                                    <a
                                      className="user notajax"
                                      data-bind="html: Title"
                                      >Ruth Bader Ginsburg optimistic ‘over the
                                      long haul’ for US</a
                                    >

                                    <div className="time">
                                      <i
                                        className="ace-icon fa fa-clock-o bigger-110"
                                      ></i>
                                      <span data-bind="html: Date"
                                        >2022-07-06 11:49:00</span
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
                                      href="/Posts/article/Preview/109"
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
                                      src="//https://as-mangopulse-media.azurewebsites.net/store/archive/image/2022/7/6/55cffdc5-4380-4bee-b37f-f0503ad4ad7e.jpg?preset=ace-thumbnail"
                                    />
                                    <a
                                      className="user notajax"
                                      data-bind="html: Title"
                                      >Mod turns ‘Counter-Strike’ into a
                                      ‘Tekken’ clone with fighting chickens</a
                                    >

                                    <div className="time">
                                      <i
                                        className="ace-icon fa fa-clock-o bigger-110"
                                      ></i>
                                      <span data-bind="html: Date"
                                        >2022-07-06 11:30:00</span
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
                                      href="/Posts/article/Preview/105"
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
                                      src="//https://as-mangopulse-media.azurewebsites.net/store/archive/image/2022/7/1/519cbd51-bad9-40b7-a2a3-36eade86b708.jpg?preset=ace-thumbnail"
                                    />
                                    <a
                                      className="user notajax"
                                      data-bind="html: Title"
                                      >Netflix was the top grossing app in Q2,
                                      with mobile revenue up 233%</a
                                    >

                                    <div className="time">
                                      <i
                                        className="ace-icon fa fa-clock-o bigger-110"
                                      ></i>
                                      <span data-bind="html: Date"
                                        >2022-07-01 07:15:08</span
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
                                      href="/Posts/article/Preview/99"
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
                                      src="//https://as-mangopulse-media.azurewebsites.net/store/archive/image/2022/7/1/1c77ef95-5271-4cfe-aa4a-f4c38ec7aafb.jpg?preset=ace-thumbnail"
                                    />
                                    <a
                                      className="user notajax"
                                      data-bind="html: Title"
                                      >Mobile Google CEO Promises 19
                                      Daydream-compatible phones</a
                                    >

                                    <div className="time">
                                      <i
                                        className="ace-icon fa fa-clock-o bigger-110"
                                      ></i>
                                      <span data-bind="html: Date"
                                        >2022-07-01 07:08:00</span
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
                                      href="/Posts/article/Preview/96"
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
                                      src="//https://as-mangopulse-media.azurewebsites.net/store/archive/image/2022/6/27/ac906f81-82dc-4997-8beb-9901421650a2.jpg?preset=ace-thumbnail"
                                    />
                                    <a
                                      className="user notajax"
                                      data-bind="html: Title"
                                      >‘Girls Trip’ already surpasses ‘Rough
                                      Night’ in opening weekend</a
                                    >

                                    <div className="time">
                                      <i
                                        className="ace-icon fa fa-clock-o bigger-110"
                                      ></i>
                                      <span data-bind="html: Date"
                                        >2022-06-27 08:14:00</span
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
                                      href="/Posts/article/Preview/76"
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
                                      src="//https://as-mangopulse-media.azurewebsites.net/store/archive/image/2022/6/27/37098dd1-f621-42e5-a5f7-7287bbecf035.jpg?preset=ace-thumbnail"
                                    />
                                    <a
                                      className="user notajax"
                                      data-bind="html: Title"
                                      >The final 6 ‘Game of Thrones’ episodes
                                      might feel like a full season.</a
                                    >

                                    <div className="time">
                                      <i
                                        className="ace-icon fa fa-clock-o bigger-110"
                                      ></i>
                                      <span data-bind="html: Date"
                                        >2022-06-27 08:05:00</span
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
                                      href="/Posts/article/Preview/75"
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

          
            </div>
          </div>
          <input
            name="__RequestVerificationToken"
            type="hidden"
            value="CfDJ8Gw4EJhP_tFBqoXBSpM7LZ37vHZRNpWXv6qJ0bVk2njGi4ctHsqIkV7Gv7Qdiyw6wIXBDCGgRpuoA56X1Sy6OSF8l-sNZ7PML9BQL37U8hdbEIU0YYjOlZ33kDZe7RFT2OaXUYQGAau4KjFL3OMc5qtu6ijNU-zYdwnMNXRgzoosXYTgSpAlszZ6-KLppR-w2A"
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
      minHeight: 0+"px",
    }}
  ></textarea>
</div>

    </div>
  )
}

export default AlnasherTech
