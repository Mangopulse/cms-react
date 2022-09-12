import React from 'react';
import VerticalNavbar from '../VerticalNavbar';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';

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
        <Nav tabs className='make-rtl'>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
            >
              <i className="blue ace-icon fa fa-bolt bigger-120"
              style={{margin:3+"px"}}></i>
              New
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
              <i
               className="ace-icon fa fa-check bigger-120"
              style={{margin:3+"px", color: "green"}}></i>
              Published
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '3' })}
              onClick={() => { this.toggle('3'); }}
            >
               <i className="red ace-icon fa fa-times bigger-120"
                style={{margin:3+"px"}}></i>
              Unpublished
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '4' })}
              onClick={() => { this.toggle('4'); }}
            >
               <i className="red ace-icon fa fa-times bigger-120"
                style={{margin:3+"px"}}></i>
              Deleted {""}
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '5' })}
              onClick={() => { this.toggle('5'); }}
            >
              Expired
            </NavLink>
          </NavItem>
     
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col sm="12">
              <div className="tab-content make-rtl">
                    <div className="tab-pane fade in active show">
                      <div
                        className="data-table"
                        data-size="20"
                        data-moreurl="/Posts?MainRequest=False&amp;type=author&amp;Status=10"
                      >
                        <table className="table">
                          <thead>
                            <tr>
                              <th>عنوان</th>

                              <th>الحالة</th>
                              <th></th>
                            </tr>
                          </thead>

                          <tbody >
                            <tr className="clickable-row" data-modelid="216">
                              <td className="cell-main">
                                <a href="/Posts/author/Preview/216">
                                  <img
                                    data-src=""
                                    src="../images/placeholder.gif"
                                    className="placeholder"
                                  />
                                </a>
                                <div className="cell-data">
                                  <a
                                    href="/Posts/author/Preview/216"
                                    className="cell-title"
                                    >Author
                                  </a>
                                  <div className="text posts-users table-metas">
                                    <div className="posts-mod entry">
                                      آخر تعديل بواسطة mangopulseTester في 21
                                      July 13:37
                                    </div>

                                    <span className="clearfix"></span>
                                  </div>
                                  <div className="text posts-media">
                                    <a
                                      href="https://as-mangopulse-front.azurewebsites.net/Preview/216"
                                      className="notajax"
                                      target="_blank"
                                      ><i className="fa fa-external-link-alt"></i
                                    ></a>
                                  </div>
                                </div>
                              </td>

                              <td className="cell-status">
                                <span className="label label-info"
                                  ><i
                                    className="ace-icon fa fa-bolt bigger-120"
                                  ></i>
                                  New</span
                                >
                              </td>
                              <td className="cell-actions">
                                <div className="action-buttons">
                                  <a
                                    href="/Posts/author/Edit/216"
                                    className="btn btn-new info"
                                    ><i className="ace-icon fa fa-edit"></i> تعديل
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
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col sm="12">
              <div className="tab-content make-rtl">
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
                                  
                                  Published</span >
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
              </Col>
         
            </Row>
          </TabPane>
          <TabPane tabId="3">
            <Row>
              <Col sm="12">
              <div class="tab-content make-rtl">
                    <div class="tab-pane fade in active show">
                      <div
                        class="data-table"
                        data-size="20"
                        data-moreurl="/Posts?MainRequest=False&amp;type=author&amp;Status=30"
                      >
                        <table class="table">
                          <thead>
                            <tr>
                              <th>عنوان</th>

                              <th>الحالة</th>
                              <th></th>
                            </tr>
                          </thead>

                          <tbody></tbody>
                        </table>
                      </div>
                      <div class="paging-wrapper">
                        <div class="p-block">
                          <input
                            type="number"
                            class="size-input"
                            max="100"
                            min="10"
                            step="10"
                            data-bind="value: size, event:{ change: changesize}"
                          />سطر في الصفحة
                        </div>
                        <div class="p-block"><span class="from-to"></span></div>
                        <div class="p-block">
                          <div class="input-group">
                            <span
                              class="input-group-addon"
                              data-bind="click: previous"
                              ><i class="fa fa-chevron-right"></i></span
                            ><input
                              type="text"
                              class="form-control page-input"
                              data-bind="value: fetchingPage, event:{ change: changepage}"
                            /><span
                              class="input-group-addon"
                              data-bind="click: next"
                              ><i class="fa fa-chevron-left"></i
                            ></span>
                          </div>
                        </div>
                        <span class="clearfix"></span>
                      </div>
                    </div>
                  </div>
              </Col>
         
            </Row>
          </TabPane>
          <TabPane tabId="4">
            <Row>
              <Col sm="12">
              <div className="tab-content make-rtl">
                      <div className="tab-pane fade in active show">
                        <div
                          className="data-table"
                          data-size="20"
                          data-moreurl="/Posts?MainRequest=False&amp;type=author&amp;Status=-100"
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
                              <tr className="clickable-row" data-modelid="615">
                                <td className="cell-main">
                                  <a href="/Posts/author/Preview/615">
                                    <img
                                      data-src="https://as-mangopulse-media.azurewebsites.net/store/archive/image/2022/7/29/b2c0f683-aadd-4a78-9e74-06d167cdf01c.png"
                                      src="https://as-mangopulse-media.azurewebsites.net/store/archive/image/2022/7/29/b2c0f683-aadd-4a78-9e74-06d167cdf01c.png?preset=table-thumb"
                                      className="placeholder"
                                    />
                                  </a>
                                  <div className="cell-data">
                                    <a
                                      href="/Posts/author/Preview/615"
                                      className="cell-title"
                                      >test
                                    </a>
                                    <div className="text posts-users table-metas">
                                      <div className="posts-mod entry">
                                        آخر تعديل بواسطة techsupport في 29 July
                                        07:49
                                      </div>
  
                                      <span className="clearfix"></span>
                                    </div>
                                    <div className="text posts-media">
                                      <a
                                        href="https://as-mangopulse-front.azurewebsites.net/Preview/615"
                                        className="notajax"
                                        target="_blank"
                                        ><i className="fa fa-external-link-alt"></i
                                      ></a>
                                      <a
                                        href="/Assets/Edit/Media/f95159fa-0f12-11ed-a81d-000d3aa9ccac?type=image"
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
                                  <span className="label label-danger"
                                    ><i
                                      className="ace-icon fa fa-times bigger-120"
                                    ></i>
                                    Deleted</span
                                  >
                                </td>
                                <td className="cell-actions">
                                  <div className="action-buttons">
                                    <a
                                      href="/Posts/author/Edit/615"
                                      className="btn btn-new info"
                                      ><i className="ace-icon fa fa-edit"></i> تعديل
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
              </Col>
         
            </Row>
          </TabPane>
          <TabPane tabId="5">
            <Row>
              <Col sm="12">
              <div class="tab-content make-rtl">
                      <div class="tab-pane fade in active show">
                        <div
                          class="data-table"
                          data-size="20"
                          data-moreurl="/Posts?MainRequest=False&amp;type=author&amp;Status=30"
                        >
                          <table class="table">
                            <thead>
                              <tr>
                                <th>عنوان</th>
  
                                <th>الحالة</th>
                                <th></th>
                              </tr>
                            </thead>
  
                            <tbody></tbody>
                          </table>
                        </div>
                        <div class="paging-wrapper">
                          <div class="p-block">
                            <input
                              type="number"
                              class="size-input"
                              max="100"
                              min="10"
                              step="10"
                              data-bind="value: size, event:{ change: changesize}"
                            />سطر في الصفحة
                          </div>
                          <div class="p-block"><span class="from-to"></span></div>
                          <div class="p-block">
                            <div class="input-group">
                              <span
                                class="input-group-addon"
                                data-bind="click: previous"
                                ><i class="fa fa-chevron-right"></i></span
                              ><input
                                type="text"
                                class="form-control page-input"
                                data-bind="value: fetchingPage, event:{ change: changepage}"
                              /><span
                                class="input-group-addon"
                                data-bind="click: next"
                                ><i class="fa fa-chevron-left"></i
                              ></span>
                            </div>
                          </div>
                          <span class="clearfix"></span>
                        </div>
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