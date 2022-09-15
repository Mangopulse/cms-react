import React from 'react';
import VerticalNavbar from '../VerticalNavbar';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import { alnasherTableHeader, ArticleSection, search, ArticleSearch, SportSearch,BusinessSearch ,EntertaimentSection,EntertaimentSearch, SportsSearch, TechSearch} from '../../dummydata';
import { buildTimeValue } from '@testing-library/user-event/dist/utils';
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
        {alnasherTableHeader.map((val) => (
        <Nav tabs className='make-rtl'>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
            >
               <i className={val.article_icon}
              style={{margin:3+"px"}}></i>
              {val.article}
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
                  <i className={val.list_icon}
                style={{margin:3+"px"}}></i>
              {val.sport}
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '3' })}
              onClick={() => { this.toggle('3'); }}
            >
              <i className={val.list_icon}
                style={{margin:3+"px"}}></i>
              {val.entertaiment}
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '4' })}
              onClick={() => { this.toggle('4'); }}
            >
               <i className={val.list_icon}
                style={{margin:3+"px"}}></i>
              {val.politics}
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '5' })}
              onClick={() => { this.toggle('5'); }}
            >
                <i className={val.list_icon}
                style={{margin:3+"px"}}></i>
             {val.fashion}
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '5' })}
              onClick={() => { this.toggle('6'); }}
            >
                <i className={val.list_icon}
                style={{margin:3+"px"}}></i>
              {val.sports}
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '5' })}
              onClick={() => { this.toggle('7'); }}
            >
                <i className={val.list_icon}
                style={{margin:3+"px"}}></i>
              {val.tech}
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '5' })}
              onClick={() => { this.toggle('8'); }}
            >
                <i className={val.list_icon}
                style={{margin:3+"px"}}></i>
              {val.business}
            </NavLink>          
          </NavItem>
     
        </Nav>
        ))}
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col sm="12">
           
              <div className="tab-content make-rtl">
                      <div className="tab-pane in active">
                        <div className="row">
                          <div className="col col-8">
                          {ArticleSection.map((val) => (
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
                                      >{val.description}</a>

                                    <div className="time">
                                      <i
                                        className="ace-icon fa fa-clock-o bigger-110"
                                      ></i>
                                      <span data-bind="html: Date"
                                        >{val.date}</span>
                                      <span data-bind="html: Status"
                                        ><span className="label label-success"
                                          ><i
                                            className={val.published_icon}
                                          ></i>
                                          {val.published}</span></span>
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
                               
                              </div>
                            </div>
                            ))}
                          </div>
                          <div className="col-4">
                            <div className="profile-feed">
                            {search.map((val) => (
                              <a
                                className="btn btn-new purple"
                                data-loadtype="popup"
                                href="/Posts/Browse?Type=article&amp;OrderBy=CreationDate%20DESC&amp;Status=20&amp;Page=1&amp;MainRequest=True&amp;SearchRequest=False&amp;AllowedCount=-1&amp;ParentHandler=window.back.publisher&amp;ThisYear=False&amp;SubscriptionId=00000000-0000-0000-0000-000000000000"
                              >
                                <i className={val.search_icon}></i>
                                {val.search}
                              </a>
                            ))}
                              <div
                                data-bind="sortable:{ data:otherposts,template: 'otherPostsTmpl'}"
                                className="widget-body ko_container ui-sortable"
                                style={{
                                  overflowY: "scroll",
                                  height: 400+"px",
                                  marginTop: 10+"px",
                                }}
                              >
                                  {ArticleSearch.map((val) => (
                                <div className="profile-activity clearfix">
                                  <div>
                                    <img
                                      className="pull-right"
                                      data-bind="attr: { src: Image.Url }"
                                      src="//https://as-mangopulse-media.azurewebsites.net/store/archive/image/2022/8/29/d5778652-4437-401b-b194-1101940e2e01.jpg?preset=ace-thumbnail"
                                    />
                                    <a
                                      className="user notajax"
                                      data-bind="html: Title"
                                      >{val.title}</a>

                                    <div className="time">
                                      <i
                                        className="ace-icon fa fa-clock-o bigger-110"
                                      ></i>
                                      <span data-bind="html: Date"
                                        >{val.date}</span>
                                      <span data-bind="html: Status"
                                        ><span className="label label-success"
                                          ><i
                                            className={val.published_icon}></i>
                                          {val.published}</span></span>
                                    </div>
                                  </div>

                                  <div className="tools action-buttons">
                                    <a
                                      className="notajax purple"
                                      target="_blank"
                                      data-bind="attr: {href: PreviewUrl}"
                                      href="/Posts/article/Preview/1231"
                                    >
                                      <i
                                        className="ace-icon fa fa-eye bigger-125"
                                      ></i>
                                    </a>
                                  </div>
                                </div>
                                ))}
                                
                              </div>
                            </div>
                          </div>
                        </div>

                        <span className="clearfix"></span>
                      </div>
                    </div>
                   
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col sm="12">
              <div className="tab-content make-rtl">
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
                              {search.map((val) => (
                              <a
                                className="btn btn-new purple"
                                data-loadtype="popup"
                                href="/Posts/Browse?Type=article&amp;OrderBy=CreationDate%20DESC&amp;Status=20&amp;Page=1&amp;MainRequest=True&amp;SearchRequest=False&amp;AllowedCount=-1&amp;ParentHandler=window.back.publisher&amp;ThisYear=False&amp;SubscriptionId=00000000-0000-0000-0000-000000000000"
                              >
                                <i className={val.search_icon}></i>
                                {val.search}
                              </a>
                            ))}
                                <div
                                  data-bind="sortable:{ data:otherposts,template: 'otherPostsTmpl'}"
                                  className="widget-body ko_container ui-sortable"
                                  style={{
                                    overflowY: "scroll",
                                    height: 400+"px",
                                    marginTop: 10+"px",
                                  }}
                                  
                                >
                                     {SportSearch.map((val) => (
                                  <div className="profile-activity clearfix">
                                    <div>
                                      <img
                                        className="pull-right"
                                        data-bind="attr: { src: Image.Url }"
                                        src="//https://as-mangopulse-media.azurewebsites.net/store/archive/image/2022/9/7/ebf2a05c-2c49-4fbc-959b-dcb8393a351e.jpg?preset=ace-thumbnail"
                                      />
                                      <a
                                        className="user notajax"
                                        data-bind="html: Title"
                                        >{val.title}</a>
  
                                      <div className="time">
                                        <i
                                          className="ace-icon fa fa-clock-o bigger-110"
                                        ></i>
                                        <span data-bind="html: Date"
                                          >{val.date}</span>
                                        <span data-bind="html: Status"
                                          ><span className="label label-success"
                                            ><i
                                              className={val.published_icon}
                                            ></i>
                                            {val.published}</span></span>
                                      </div>
                                    </div>
  
                                    <div className="tools action-buttons">
                                      <a
                                        className="notajax purple"
                                        target="_blank"
                                        data-bind="attr: {href: PreviewUrl}"
                                        href="/Posts/article/Preview/1320"
                                      >
                                        <i
                                          className="ace-icon fa fa-eye bigger-125"
                                        ></i>
                                      </a>
                                    </div>
                                  </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
  
                          <span className="clearfix"></span>
                        </div>
                      </div>
              </Col>
         
            </Row>
          </TabPane>
          <TabPane tabId="3">
            <Row>
              <Col sm="12">
              <div className="tab-content make-rtl">
                      <div className="tab-pane in active">
                        <div className="row">
                          <div className="col col-8">
                            <div className="profile-feed">
                              <div
                                data-bind="sortable: posts"
                                className="ko_container ui-sortable"
                                style={{paddingBottom: 100+"px"}}
                              >
                                {EntertaimentSection.map((val) => (
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
                                      >{val.description}</a>

                                    <div className="time">
                                      <i
                                        className="ace-icon fa fa-clock-o bigger-110"
                                      ></i>
                                      <span data-bind="html: Date"
                                        >{val.date}</span>
                                      <span data-bind="html: Status"
                                        ><span className="label label-success"
                                          ><i
                                            className={val.published_icon}
                                          ></i>
                                          {val.published}</span></span>
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
                                ))}
                              </div>
                            </div>
                          </div>
                          <div className="col-4">
                            <div className="profile-feed">
                            {search.map((val) => (
                              <a
                                className="btn btn-new purple"
                                data-loadtype="popup"
                                href="/Posts/Browse?Type=article&amp;OrderBy=CreationDate%20DESC&amp;Status=20&amp;Page=1&amp;MainRequest=True&amp;SearchRequest=False&amp;AllowedCount=-1&amp;ParentHandler=window.back.publisher&amp;ThisYear=False&amp;SubscriptionId=00000000-0000-0000-0000-000000000000"
                              >
                                <i className={val.search_icon}></i>
                                {val.search}
                              </a>
                            ))}
                              <div
                                data-bind="sortable:{ data:otherposts,template: 'otherPostsTmpl'}"
                                className="widget-body ko_container ui-sortable"
                                style={{
                                  overflowY: "scroll",
                                  height: 400+"px",
                                  marginTop: 10+"px",
                                }}
                              >
                                    {EntertaimentSearch.map((val) => (
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
                                      >{val.title}</a>
                                    <div className="time">
                                      <i
                                        className="ace-icon fa fa-clock-o bigger-110"
                                      ></i>
                                      <span data-bind="html: Date"
                                        >{val.date}</span>
                                      <span data-bind="html: Status"
                                        ><span className="label label-success"
                                          ><i
                                            className={val.published_icon}
                                          ></i>
                                         {val.published}</span></span>
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
                                ))}
                              
                              </div>
                            </div>
                          </div>
                        </div>

                        <span className="clearfix"></span>
                      </div>
                    </div>
              </Col>
         
            </Row>
          </TabPane>
          <TabPane tabId="4">
            <Row>
              <Col sm="12">
              <div className="tab-content make-rtl">
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
                              {search.map((val) => (
                              <a
                                className="btn btn-new purple"
                                data-loadtype="popup"
                                href="/Posts/Browse?Type=article&amp;OrderBy=CreationDate%20DESC&amp;Status=20&amp;Page=1&amp;MainRequest=True&amp;SearchRequest=False&amp;AllowedCount=-1&amp;ParentHandler=window.back.publisher&amp;ThisYear=False&amp;SubscriptionId=00000000-0000-0000-0000-000000000000"
                              >
                                <i className={val.search_icon}></i>
                                {val.search}
                              </a>
                            ))}
                                <div
                                  data-bind="sortable:{ data:otherposts,template: 'otherPostsTmpl'}"
                                  className="widget-body ko_container ui-sortable"
                                  style={{
                                    overflowY: "scroll",
                                    height: 400 + "px",
                                    marginTop: 10 +"px",
                                  }}
                                ></div>
                              </div>
                            </div>
                          </div>
  
                          <span className="clearfix"></span>
                        </div>
                      </div>
              </Col>
         
            </Row>
          </TabPane>
          <TabPane tabId="5">
            <Row>
              <Col sm="12">
              <div className="tab-content make-rtl">
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
                            {search.map((val) => (
                              <a
                                className="btn btn-new purple"
                                data-loadtype="popup"
                                href="/Posts/Browse?Type=article&amp;OrderBy=CreationDate%20DESC&amp;Status=20&amp;Page=1&amp;MainRequest=True&amp;SearchRequest=False&amp;AllowedCount=-1&amp;ParentHandler=window.back.publisher&amp;ThisYear=False&amp;SubscriptionId=00000000-0000-0000-0000-000000000000"
                              >
                                <i className={val.search_icon}></i>
                                {val.search}
                              </a>
                            ))}
                              <div
                                data-bind="sortable:{ data:otherposts,template: 'otherPostsTmpl'}"
                                className="widget-body ko_container ui-sortable"
                                style={{
                                  overflowY: "scroll",
                                  height: 400+"px",
                                  marginTop: 10+"px",
                                }}
                              ></div>
                            </div>
                          </div>
                        </div>

                        <span className="clearfix"></span>
                      </div>
                    </div>
              </Col>
         
            </Row>
          </TabPane>
          <TabPane tabId="6">
            <Row>
              <Col sm="12">
              <div className="tab-content make-rtl">
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
                              {search.map((val) => (
                              <a
                                className="btn btn-new purple"
                                data-loadtype="popup"
                                href="/Posts/Browse?Type=article&amp;OrderBy=CreationDate%20DESC&amp;Status=20&amp;Page=1&amp;MainRequest=True&amp;SearchRequest=False&amp;AllowedCount=-1&amp;ParentHandler=window.back.publisher&amp;ThisYear=False&amp;SubscriptionId=00000000-0000-0000-0000-000000000000"
                              >
                                <i className={val.search_icon}></i>
                                {val.search}
                              </a>
                            ))}
                                <div
                                  data-bind="sortable:{ data:otherposts,template: 'otherPostsTmpl'}"
                                  className="widget-body ko_container ui-sortable"
                                  style={{
                                    overflowY: "scroll",
                                    height: 400+"px",
                                    marginTop: 10+"px",
                                  }}
                                  
                                >
                                  {SportsSearch.map((val) => (
                                  <div className="profile-activity clearfix">
                                    <div>
                                      <img
                                        className="pull-right"
                                        data-bind="attr: { src: Image.Url }"
                                        src="//https://as-mangopulse-media.azurewebsites.net/store/archive/image/2022/9/7/ebf2a05c-2c49-4fbc-959b-dcb8393a351e.jpg?preset=ace-thumbnail"
                                      />
                                      <a
                                        className="user notajax"
                                        data-bind="html: Title"
                                        >{val.title}</a
                                      >
  
                                      <div className="time">
                                        <i
                                          className="ace-icon fa fa-clock-o bigger-110"
                                        ></i>
                                        <span data-bind="html: Date"
                                          >{val.date}</span
                                        >
                                        <span data-bind="html: Status"
                                          ><span className="label label-success"
                                            ><i
                                              className={val.published_icon}
                                            ></i>
                                            {val.published}</span
                                          ></span
                                        >
                                      </div>
                                    </div>
  
                                    <div className="tools action-buttons">
                                      <a
                                        className="notajax purple"
                                        target="_blank"
                                        data-bind="attr: {href: PreviewUrl}"
                                        href="/Posts/article/Preview/1320"
                                      >
                                        <i
                                          className="ace-icon fa fa-eye bigger-125"
                                        ></i>
                                      </a>
                                    </div>
                                  </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
  
                          <span className="clearfix"></span>
                        </div>
                      </div>
              </Col>
         
            </Row>
          </TabPane>
          <TabPane tabId="7">
            <Row>
              <Col sm="12">
              <div className="tab-content make-rtl">
                      <div className="tab-pane in active">
                        <div className="row">
                          <div className="col col-8">
                            <div className="profile-feed">
                              <div
                                data-bind="sortable: posts"
                                className="ko_container ui-sortable"
                                style={{paddingBottom: 100+"px"}}
                              >
                                {TechSearch.map((val)=>(
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
                                      >{val.title}</a
                                    >

                                    <div className="time">
                                      <i
                                        className="ace-icon fa fa-clock-o bigger-110"
                                      ></i>
                                      <span data-bind="html: Date"
                                        >{val.date}</span
                                      >
                                      <span data-bind="html: Status"
                                        ><span className="label label-success"
                                          ><i
                                            className={val.published_icon}
                                          ></i>
                                          {val.published}</span
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
                                ))}
                              </div>
                            </div>
                          </div>
                          <div className="col-4">
                            <div className="profile-feed">
                            {search.map((val) => (
                              <a
                                className="btn btn-new purple"
                                data-loadtype="popup"
                                href="/Posts/Browse?Type=article&amp;OrderBy=CreationDate%20DESC&amp;Status=20&amp;Page=1&amp;MainRequest=True&amp;SearchRequest=False&amp;AllowedCount=-1&amp;ParentHandler=window.back.publisher&amp;ThisYear=False&amp;SubscriptionId=00000000-0000-0000-0000-000000000000"
                              >
                                <i className={val.search_icon}></i>
                                {val.search}
                              </a>
                            ))}
                              <div
                                data-bind="sortable:{ data:otherposts,template: 'otherPostsTmpl'}"
                                className="widget-body ko_container ui-sortable"
                                style={{
                                  overflowY: "scroll",
                                  height: 400+"px",
                                  marginTop: 10+"px",
                                }}
                              >
                              </div>
                            </div>
                          </div>
                        </div>

                        <span className="clearfix"></span>
                      </div>
                    </div>
              </Col>
         
            </Row>
          </TabPane>
          <TabPane tabId="8">
            <Row>
              <Col sm="12">
              <div className="tab-content make-rtl">
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
                            {search.map((val) => (
                              <a
                                className="btn btn-new purple"
                                data-loadtype="popup"
                                href="/Posts/Browse?Type=article&amp;OrderBy=CreationDate%20DESC&amp;Status=20&amp;Page=1&amp;MainRequest=True&amp;SearchRequest=False&amp;AllowedCount=-1&amp;ParentHandler=window.back.publisher&amp;ThisYear=False&amp;SubscriptionId=00000000-0000-0000-0000-000000000000"
                              >
                                <i className={val.search_icon}></i>
                                {val.search}
                              </a>
                            ))}
                              <div
                                data-bind="sortable:{ data:otherposts,template: 'otherPostsTmpl'}"
                                className="widget-body ko_container ui-sortable"
                                style={{
                                  overflowy: "scroll",
                                  height: 400+"px",
                                  margintop: 10+"px",
                                }}
                              >
                                {BusinessSearch.map((val)=>(
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
                                      >{val.title}</a
                                    >

                                    <div className="time">
                                      <i
                                        className="ace-icon fa fa-clock-o bigger-110"
                                      ></i>
                                      <span data-bind="html: Date"
                                        >{val.date}</span
                                      >
                                      <span data-bind="html: Status"
                                        ><span className="label label-success"
                                          ><i
                                            className={val.published_icon}
                                          ></i>
                                          {val.published}</span
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
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>

                        <span className="clearfix"></span>
                      </div>
                    </div>                  
              </Col>
         
            </Row>
          </TabPane>
        </TabContent>
      </div>
    );
  }

  
}