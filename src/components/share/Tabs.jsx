import React from 'react';
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
        <Nav tabs className="make-rtl">
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
            >
               <li className="nav-item">
                          <a
                            data-toggle="tab"
                            href="#twitter-0-tab"
                            className="nav-link"
                          >
                            <div className="social-channel grey-filter">
                              <div className="channel-image">
                                <img
                                  src="https://pbs.twimg.com/profile_images/1547185202245603329/bXxX6lY1_normal.png"
                                  title="Aya Zeinaldeen"
                                />
                              </div>
                              <div className="channel-socialIcon twitter-icon">
                                <i className="ace-icon fab fa-twitter light-blue"></i>
                              </div>
                              <small>t2</small>
                            </div>
                          </a>
                        </li>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
             <li className="nav-item">
                          <a
                            data-toggle="tab"
                            href="#push-1-tab"
                            className="nav-link active"
                          >
                            <div className="social-channel grey-filter">
                              <div className="channel-image">
                                <img src="" title="push channel" />
                              </div>
                              <div className="channel-socialIcon push-icon">
                                <i className="ace-icon fas fa-mobile-alt orange"></i>
                              </div>
                              <small>push channel</small>
                            </div>
                          </a>
                        </li>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
             <li className="nav-item">
                        <a
                          data-toggle="tab"
                          href="#social-history"
                          className="nav-link"
                        >
                          <div className="history-tab"
                         >
                            <i className="fas fa-history"></i>
                            السجل
                          </div>
                        </a>
                      </li>
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col sm="12">
              <div className="row make-rtl">
                            <div className="col-lg-6">
                              <div className="share-details post-form">
                                <div className="channel-details">
                                  <label className="channel active" title="تفعيل">
                                    <span className="custom-control custom-checkbox">
                                      <input
                                        type="checkbox"
                                        className="custom-control-input network"
                                        id="03e8fdba-0368-11ed-8c78-f079596794cc"
                                        name="Channels[]"
                                        value="03e8fdba-0368-11ed-8c78-f079596794cc"
                                      />
                                      <label
                                        className="custom-control-label"
                                        for="03e8fdba-0368-11ed-8c78-f079596794cc"
                                      ></label>
                                    </span>
                                    <span className="lbl bigger-120"></span>
                                    <span className="channel-displayName"
                                      ><span className="channel-info">t2</span></span
                                    >
                                  </label>

                                  <div className="channel-link">
                                    <a
                                      href="https://twitter.com/zeinaldeen_aya"
                                      target="_blank"
                                      ><i className="fa fa-globe"></i
                                    ></a>
                                  </div>
                                </div>
                                <div className="content-separator"></div>
                                <div className="social-content">
                                  <textarea
                                    name="Data[0].Text"
                                    id="text-0"
                                    className="col-12 social-text"
                                    rows="8"
                                    readonly="readonly"
                                  >
  1news1</textarea
                                  >
                                  <input
                                    type="hidden"
                                    name="Data[0].ChannelId"
                                    value="03e8fdba-0368-11ed-8c78-f079596794cc"
                                    disabled="disabled"
                                  />
                                  <div className="social-text-limit">
                                    <div>
                                      <i className="fab fa-twitter"></i
                                      ><span>280</span>
                                    </div>
                                  </div>
                                </div>

                                <div className="row gallery">
                                  <div className="dropdown upload-options">
                                    <button
                                      className="upload-button btn btn-secondary dropdown-toggle"
                                      type="button"
                                      id="dropdownMenuButton-0"
                                      data-toggle="dropdown"
                                      aria-haspopup="true"
                                      aria-expanded="false"
                                      disabled="disabled"
                                    >
                                      <span
                                        ><i
                                          className="fa fa-upload"
                                          aria-hidden="true"
                                        ></i
                                      ></span>
                                      رفع
                                    </button>
                                    <div
                                      className="dropdown-menu"
                                      aria-labelledby="dropdownMenuButton"
                                    >
                                      <a
                                        href="/Assets/Media/MediaUpload?type=10&amp;MediaItemIdField=%23MediaId-0&amp;Count=1&amp;MediaItemUrlImg=%23MediaPreview-0&amp;MediaItemUrlField=%23MediaUrl-0"
                                        className="btn btn-new purple"
                                        data-appendtoconainer="true"
                                        data-container="body"
                                        data-loadtype="popup"
                                        ><i className="ace-icon fa fa-file-image"></i>
                                        Upload Image
                                      </a>
                                      <a
                                        href="/Assets/Media/MediaUpload?type=30&amp;MediaItemIdField=%23MediaId-0&amp;Count=1&amp;MediaItemUrlImg=%23MediaPreview-0&amp;MediaItemUrlField=%23MediaUrl-0"
                                        className="btn btn-new yellow"
                                        data-appendtoconainer="true"
                                        data-container="body"
                                        data-loadtype="popup"
                                        ><i className="ace-icon fa fa-file-video"></i>
                                        Upload Video
                                      </a>
                                    </div>
                                  </div>
                                  <div className="upload-media right-position item">
                                    <div className="upload-section">
                                      <div className="uploaded-media">
                                        <a className="thumbnail">
                                          <label>
                                            <div className="media-item">
                                              <img id="MediaPreview-0" />
                                            </div>
                                            <span
                                              className="custom-control custom-checkbox mb-3"
                                            >
                                              <input
                                                type="checkbox"
                                                className="custom-control-input check-media"
                                                name="Data[0].MediaUrl"
                                                id="MediaUrl-0"
                                                disabled="disabled"
                                              />
                                              <label
                                                className="custom-control-label"
                                                for="MediaUrl-0"
                                              ></label>
                                            </span>
                                          </label>
                                        </a>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="right-position item">
                                    <a href="#" className="thumbnail">
                                      <div>
                                        <label>
                                          <div className="media-item">
                                            <img
                                              src="https://as-mangopulse-media.azurewebsites.net/store/archive/image/2022/8/29/d5778652-4437-401b-b194-1101940e2e01.jpg?height=80"
                                              alt="test"
                                              data-id="0f4bf8d2-2773-11ed-a81d-000d3aa9ccac"
                                            />

                                            <div>
                                              <i className="fas fa-image"></i>
                                            </div>
                                          </div>

                                          <span
                                            className="custom-control custom-checkbox mb-3"
                                          >
                                            <input
                                              type="checkbox"
                                              className="custom-control-input check-media"
                                              id="0f4bf8d2-2773-11ed-a81d-000d3aa9ccac-0"
                                              name="Data[0].MediaUrl"
                                              data-value="//as-mangopulse-media.azurewebsites.net/store/archive/image/2022/8/29/d5778652-4437-401b-b194-1101940e2e01.jpg"
                                              data-mediatype="10"
                                              disabled="disabled"
                                            />
                                            <label
                                              className="custom-control-label"
                                              for="0f4bf8d2-2773-11ed-a81d-000d3aa9ccac-0"
                                            ></label>
                                          </span>
                                        </label>
                                      </div>
                                    </a>
                                  </div>
                                  <div className="right-position item">
                                    <a href="#" className="thumbnail">
                                      <div>
                                        <label>
                                          <div className="media-item">
                                            <img
                                              src="https://as-mangopulse-media.azurewebsites.net/store/archive/image/2022/8/23/72b97d92-b44f-49c2-862e-78d741bdca23.jpg?height=80"
                                              alt="new"
                                              data-id="a2025d5c-22d5-11ed-a81d-000d3aa9ccac"
                                            />

                                            <div>
                                              <i className="fas fa-image"></i>
                                            </div>
                                          </div>

                                          <span
                                            className="custom-control custom-checkbox mb-3"
                                          >
                                            <input
                                              type="checkbox"
                                              className="custom-control-input check-media"
                                              id="a2025d5c-22d5-11ed-a81d-000d3aa9ccac-0"
                                              name="Data[0].MediaUrl"
                                              data-value="//as-mangopulse-media.azurewebsites.net/store/archive/image/2022/8/23/72b97d92-b44f-49c2-862e-78d741bdca23.jpg"
                                              data-mediatype="10"
                                              disabled="disabled"
                                            />
                                            <label
                                              className="custom-control-label"
                                              for="a2025d5c-22d5-11ed-a81d-000d3aa9ccac-0"
                                            ></label>
                                          </span>
                                        </label>
                                      </div>
                                    </a>
                                  </div>
                                </div>

                                <div className="input-group mb-3 url">
                                  <label className="post-url">
                                    <span className="custom-control custom-checkbox">
                                      <input
                                        type="checkbox"
                                        className="custom-control-input"
                                        id="link-0"
                                        value="https://as-mangopulse-shortlinks.azurewebsites.net/Jr"
                                        name="Data[0].Link"
                                        disabled="disabled"
                                      />
                                      <label
                                        className="custom-control-label"
                                        for="link-0"
                                      ></label>
                                    </span>
                                    <span className="lbl bigger-120"></span>
                                    <input
                                      type="text"
                                      className="form-control link"
                                      value="https://as-mangopulse-shortlinks.azurewebsites.net/Jr"
                                      aria-describedby="social-link"
                                      disabled="disabled"
                                    />
                                  </label>
                                  <span className="refetch">
                                    <i className="fas fa-sync"></i>
                                  </span>
                                </div>
                              </div>
                            </div>

                            <div className="col-lg-6 content-preview">
                              <div className="twitter-widget">
                                <div className="tweet-container">
                                  <div className="embedded-tweet">
                                    <div>
                                      <div>
                                        <div className="author-photo margin-sides">
                                          <a
                                            href="https://twitter.com/zeinaldeen_aya"
                                            className="author-avatar"
                                          >
                                            <img
                                              className="avatar"
                                              src="https://pbs.twimg.com/profile_images/1547185202245603329/bXxX6lY1_normal.png"
                                            />
                                          </a>
                                        </div>
                                        <div className="tweet-details margin-sides">
                                          <div>
                                            <a
                                              href="https://twitter.com/zeinaldeen_aya"
                                              className="account-link"
                                            >
                                              <div className="screenName-container">
                                                <span className="author-name">
                                                  <span
                                                    className="author-displayName"
                                                  >
                                                    Aya Zeinaldeen
                                                  </span>
                                                  <span className="author-screenName">
                                                    zeinaldeen_aya
                                                  </span>
                                                  <span className="dot">
                                                    <i className="fas fa-circle"></i>
                                                  </span>
                                                  <span> الآن </span>
                                                </span>
                                              </div>
                                            </a>
                                          </div>

                                          <div className="tweet-body content">
                                            <div className="tweet-separator"></div>
                                            <div className="post-text description-0">
                                              1news1
                                            </div>
                                            <div className="tweet-card">
                                              <article>
                                                <div className="media-card">
                                                  <div className="media-width">
                                                    <div className="media-container">
                                                      <a>
                                                        <img
                                                          className="post-img"
                                                          src=""
                                                        />
                                                        <div className="post-video">
                                                          <video controls="">
                                                            <source
                                                              src=""
                                                              type="video/mp4"
                                                            />
                                                          </video>
                                                        </div>
                                                      </a>
                                                      <div className="link-preview">
                                                        <div>
                                                          <a className="link-photo">
                                                            <img />
                                                          </a>
                                                        </div>
                                                        <div className="link-details">
                                                          <div>
                                                            <div
                                                              className="link-text"
                                                            >
                                                              <div
                                                                className="link-title"
                                                              ></div>
                                                              <div
                                                                className="link-description"
                                                              ></div>
                                                            </div>
                                                            <div
                                                              className="link-website"
                                                            ></div>
                                                          </div>
                                                          <a
                                                            className="link-shorturl"
                                                          ></a>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </article>
                                            </div>
                                          </div>
                                        </div>
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
              <Col sm="12">
              <div className="row make-rtl">
                            <div className="col-lg-6">
                              <div className="share-details post-form">
                                <div className="channel-details">
                                  <label className="channel active" title="تفعيل">
                                    <span className="custom-control custom-checkbox">
                                      <input
                                        type="checkbox"
                                        className="custom-control-input network"
                                        id="d486a262-069c-11ed-8c7a-f079596794cc"
                                        name="Channels[]"
                                        value="d486a262-069c-11ed-8c7a-f079596794cc"
                                      />
                                      <label
                                        className="custom-control-label"
                                        for="d486a262-069c-11ed-8c7a-f079596794cc"
                                      ></label>
                                    </span>
                                    <span className="lbl bigger-120"></span>
                                    <span className="channel-displayName"
                                      ><span className="channel-info"
                                        >push channel</span
                                      ></span
                                    >
                                  </label>
  
                                  <div className="channel-link">
                                    <a
                                      href="https://console.firebase.google.com/project/123"
                                      target="_blank"
                                      ><i className="fa fa-globe"></i
                                    ></a>
                                  </div>
                                </div>
                                <div className="content-separator"></div>
                                <div>
                                  <label for="push-title">عنوان</label>
                                  <textarea
                                    name="Data[1].Title"
                                    id="push-title"
                                    className="form-group col-12"
                                    rows="8"
                                    style={{
                                      padding: 10+"px",
                                      borderRadius: 5+"px" ,
                                      border: 1+"px" + "solid" +"black",
                                    }}
                                    readonly="readonly"
                                  >
  Video Test</textarea
                                  >
                                </div>
                                <div>
                                  <label for="push-summary">ملخص</label>
                                  <textarea
                                    name="Data[1].Text"
                                    id="text-1"
                                    className="form-group col-12"
                                    rows="8"
                                    style={{
                                      padding: 10+"px",
                                      borderRadius: 5+"px" ,
                                      border: 1+"px" +"solid" +"black",
                                    }}
                                    readonly="readonly"
                                  ></textarea>
                                </div>
                                <input
                                  type="hidden"
                                  name="Data[1].ChannelId"
                                  value="d486a262-069c-11ed-8c7a-f079596794cc"
                                  disabled="disabled"
                                />
                                <div>
                                  <span className="custom-control custom-checkbox">
                                    <input
                                      checked=""
                                      value="True"
                                      type="checkbox"
                                      className="custom-control-input"
                                      id="for-mobile-1"
                                      name="Data[1].ForMobile"
                                      disabled="disabled"
                                    />
                                    <label
                                      className="custom-control-label"
                                      for="for-mobile-1"
                                      >Send To Mobile</label
                                    >
                                  </span>
                                </div>
                                <div>
                                  <span className="custom-control custom-checkbox">
                                    <input
                                      checked=""
                                      value="True"
                                      type="checkbox"
                                      className="custom-control-input"
                                      id="for-web-1"
                                      name="Data[1].ForWeb"
                                      disabled="disabled"
                                    />
                                    <label
                                      className="custom-control-label"
                                      for="for-web-1"
                                      >Send To Web</label
                                    >
                                  </span>
                                </div>
  
                                <label for="push-topics">المواضيع</label>
                                <select
                                  name="Data[1].Topics"
                                  multiple=""
                                  className="multi"
                                  id="push-topics"
                                  disabled="disabled"
                                >
                                  <option value="entertainment">
                                    Entertainment
                                  </option>
                                  <option value="	politics">Politics</option>
                                </select>
  
                                <div className="input-group mb-3">
                                  <div className="input-group-prepend">
                                    <div className="input-group-text">
                                      <i className="fa fa-calendar bigger-110"></i>
                                    </div>
                                  </div>
                                  <input
                                    type="text"
                                    className="form-control date-picker"
                                    name="Data[1].ScheduleTime"
                                    autocomplete="off"
                                    placeholder="جدول"
                                    disabled="disabled"
                                  />
                                </div>
                              </div>
                            </div>
  
                            <div className="col-lg-6 content-preview">
                              <div className="mobile-push">
                                <div className="push-notification push-preview">
                                  <div className="details">
                                    <div className="app pull-left">
                                      <img className="pull-left mobileapp-icon" />
                                      <span className="social-name"
                                        >push channel</span
                                      >
                                    </div>
                                    <div className="date pull-right">الآن</div>
                                  </div>
                                  <div className="title">Video Test</div>
                                  <div className="content description-1"></div>
                                </div>
                                <div className="mobile-frame">
                                  <img src="image" />
                                </div>
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