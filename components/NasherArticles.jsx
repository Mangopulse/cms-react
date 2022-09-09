import React from 'react'

const NasherArticles = () => {
  return (
    <div className="no-skin rtl make-rtl">
  <div className="navbar fixed-top" id="navbar">
    <div
      className="navbar-container"
      id="navbar-container"
      style={{textAlign: "center"}}
    >
      <span
        id="headerloader"
        className="headericon"
        style={{display: "none", height: 33+"px", marginTop: 7+"px", width: 33+"px"}}
      >
        <i className="fa fa-spinner fa-spin bigger-250 white"></i>
      </span>

      <div className="navbar-header product-wrapper pull-right">
        <a href="/"
          ><img
            src="//admango.cdn.mangomolo.com/analytics/mangopulse/images/products/dxm.png"
            alt="Experience Manager"
            className="product-logo"
        /></a>
      </div>
      <div className="navbar-buttons navbar-header pull-left" role="navigation">
        <ul className="nav ace-nav">
          <li>
            <a data-toggle="dropdown" className="dropdown-toggle" href="#">
              <i className="fa fa-th"></i>
            </a>
            <ul
              className="dropdown-menu products-dropdown dropdown-menu-left dropdown-navbar"
            >
              <li className="active">
                <a href="/" className="notajax"
                  ><img
                    src="//admango.cdn.mangomolo.com/analytics/mangopulse/images/products/dxm.png"
                    alt="Experience Manager"
                /></a>
              </li>
              <li className=" ">
                <a href="/Admin/AdminHome" className="notajax"
                  ><img
                    src="//admango.cdn.mangomolo.com/analytics/mangopulse/images/products/admin.png"
                    alt="Admin Panel"
                /></a>
              </li>
              <li className=" ">
                <a href="/Social/SocialHome" className="notajax"
                  ><img
                    src="//admango.cdn.mangomolo.com/analytics/mangopulse/images/products/social.png"
                    alt="Social"
                /></a>
              </li>
              <li className=" ">
                <a href="/Community/CommunityHome" className="notajax"
                  ><img
                    src="//admango.cdn.mangomolo.com/analytics/mangopulse/images/products/community.png"
                    alt="Community"
                /></a>
              </li>
              <li className=" ">
                <a href="/Assets/AssetsHome" className="notajax"
                  ><img
                    src="//admango.cdn.mangomolo.com/analytics/mangopulse/images/products/assets.png"
                    alt="Assets Manager"
                /></a>
              </li>
              <li className="disabled">
                <a
                  ><img
                    src="//admango.cdn.mangomolo.com/analytics/mangopulse/images/products/analytics.png"
                    alt="Analytics"
                /></a>
              </li>
              <li className="disabled">
                <a
                  ><img
                    src="//admango.cdn.mangomolo.com/analytics/mangopulse/images/products/flix.png"
                    alt="Flix"
                /></a>
              </li>
              <li className="disabled">
                <a
                  ><img
                    src="//admango.cdn.mangomolo.com/analytics/mangopulse/images/products/audience.png"
                    alt="Audience Manager"
                /></a>
              </li>
              <li className="disabled">
                <a
                  ><img
                    src="//admango.cdn.mangomolo.com/analytics/mangopulse/images/products/campaign.png"
                    alt="Campaign"
                /></a>
              </li>
              <li className="disabled">
                <a
                  ><img
                    src="//admango.cdn.mangomolo.com/analytics/mangopulse/images/products/target.png"
                    alt="Target"
                /></a>
              </li>
            </ul>
          </li>
          <li>
            <a
              data-toggle="dropdown"
              className="dropdown-toggle user-options"
              href="#"
            >
              <i className="fa fa-user-circle"></i>
            </a>
            <ul className="dropdown-menu user-dropdown dropdown-menu-left">
              <li className="account">
                <a href="/Account/ChangePassword">
                  <i className="icon fa fa-key"></i>
                  تغيير كلمة السر
                </a>
              </li>
              <li className="account">
                <a href="/Account/ChangeAvatar">
                  <i className="icon fa fa-key"></i>
                  تغيير الصورة
                </a>
              </li>
              <li className="account">
                <a href="/Account/LogOff" className="notajax">
                  <i className="icon fa fa-power-off"></i>
                  تسجيل الخروج
                </a>
              </li>
              <li className="divider clearfix"></li>
              <li className="lang active">
                <a
                  href="/Account/ChangeLanguage?language=ar"
                  className="clearfix notajax"
                >
                  العربية
                </a>
              </li>
              <li className="lang">
                <a
                  href="/Account/ChangeLanguage?language=en"
                  className="clearfix notajax"
                >
                  English
                </a>
              </li>
            </ul>
          </li>
          <li className="client-wrapper">
            <a data-toggle="dropdown" className="dropdown-toggle">
              <img src="" alt="MangoX" title="MangoX" />
            </a>
            <ul className="dropdown-menu dropdown-menu-left">
              <li>
                <a
                  href="/Technical/Subscription/Apply/7506d461-6ad2-4a07-9ff2-e86cf0442261"
                  className="clearfix notajax"
                >
                  <img
                    src="http://admango.cdn.mangomolo.com/analytics/mangopulse/images/question.png"
                    alt="MangoX"
                    title="MangoX"
                  />
                  <h5>MangoX</h5>
                </a>
              </li>
              <li>
                <a
                  href="/Technical/Subscription/Apply/cd81f9bf-09bb-4f5f-9e6b-b4aa97a4b465"
                  className="clearfix notajax"
                >
                  <img
                    src="//media.test/uploads/logo.png"
                    alt="1234"
                    title="1234"
                  />
                  <h5>1234</h5>
                </a>
              </li>
              <li>
                <a
                  href="/Technical/Subscription/Apply/3190d3cd-68e6-4205-be41-8c9ad8467941"
                  className="clearfix notajax"
                >
                  <img
                    src="//media.abc/uploads/logo.png"
                    alt="abc"
                    title="abc"
                  />
                  <h5>abc</h5>
                </a>
              </li>
              <li>
                <a
                  href="/Technical/Subscription/Apply/be4a949d-96fe-47cc-9aa0-d389e2424010"
                  className="clearfix notajax"
                >
                  <img
                    src="//media.as-mangopulse-front-ar.azurewebsites.net/uploads/logo.png"
                    alt="MangoX-AR"
                    title="MangoX-AR"
                  />
                  <h5>MangoX-AR</h5>
                </a>
              </li>

              <li>
                <a href="/Technical/Subscription" className="clearfix">
                  <span className="msg-body">التحكم بالمواقع</span>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div b-fjwotxpclx="" className="main-container" id="main-container">
    <div className="sidebar" id="sidebar">
      <ul className="nav nav-list">
        <li className="menuitem">
          <a
            className=" "
            href="/Publisher/Widget?id=c207053b-f61f-11ec-8c71-f079596794cc"
          >
            <i className="menu-icon fas fa-images"></i>
            <span className="menu-text">Slider</span>
          </a>
        </li>
        <li className="menuitem active highlight">
          <a className=" " href="/Posts/Index?type=article">
            <i className="menu-icon fa fa-far fa-newspaper"></i>
            <span className="menu-text">Articles</span>
          </a>
        </li>
        <li className="menuitem">
          <a className=" " href="/Posts/Index?type=video">
            <i className="menu-icon fas fa-video"></i>
            <span className="menu-text">Videos</span>
          </a>
        </li>
        <li className="menuitem">
          <a className=" " href="/Posts/Index?type=author">
            <i className="menu-icon fas fa-user-edit"></i>
            <span className="menu-text">Author</span>
          </a>
        </li>
      </ul>
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
            <li>
              <a href="/Social/SocialHome"> Social </a>
            </li>
          </ul>

          <div
            id="page-data"
            data-url="https://as-mangopulse-admin.azurewebsites.net/Social/Publish/Share?postid=345e8972-2798-11ed-8c88-f079596794cc"
            data-title=""
          ></div>
        </div>
        <div className="page-content">
          <form
            action="/Social/Publish/Send"
            area="Social"
            className="form-horizontal share-form"
            id="sharing-form"
            method="post"
          >
            <div className="page-header">
              <h1>1news1</h1>
              <div className="page-operations">
                <a href="/Posts/article/Preview/1231" className="btn btn-new grey"
                  ><i className="ace-icon fa fa-times"></i> رجوع
                </a>
                <button
                  type="submit"
                  onclick="return validateForm(this);"
                  className="btn btn-new pink share-btn"
                >
                  <i className="ace-icon fa fa-share"></i>إرسال
                </button>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="share-wrapper">
                  <div className="tabbable">
                    <ul className="nav nav-tabs social-tabs">
                      <li className="nav-item">
                        <a
                          data-toggle="tab"
                          href="#twitter-0-tab"
                          className="nav-link active"
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
                      <li className="nav-item">
                        <a
                          data-toggle="tab"
                          href="#push-1-tab"
                          className="nav-link"
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
                      <li className="nav-item">
                        <a
                          data-toggle="tab"
                          href="#social-history"
                          className="nav-link"
                        >
                          <div className="history-tab">
                            <i className="fas fa-history"></i>
                            السجل
                          </div>
                        </a>
                      </li>
                    </ul>
                    <div className="tab-content">
                      <div
                        id="twitter-0-tab"
                        className="social-networks tab-pane fade in active"
                        data-index="0"
                      >
                        <div className="row">
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
                        <span className="clearfix"> </span>
                        <div className="space-20"></div>
                      </div>
                      <div
                        id="push-1-tab"
                        className="social-networks tab-pane fade"
                        data-index="1"
                      >
                        <div className="row">
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
                                    borderRadius: 5+"px",
                                    border: 1+"px" ,
                                  }}
                                  readonly="readonly"
                                >
1news1</textarea
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
                                    borderRadius: 5+"px",
                                    border: 1+"px" ,
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
                                <div className="title">1news1</div>
                                <div className="content description-1"></div>
                              </div>
                              <div className="mobile-frame">
                                <img src="/Content/images/mobile.png" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <span className="clearfix"> </span>
                        <div className="space-20"></div>
                      </div>
                      <div id="social-history" className="tab-pane fade">
                        <div className="operation-history">
                          <i className="fas fa-external-link-alt"></i>
                          <a
                            href="/Technical/Operations?postid=345e8972-2798-11ed-8c88-f079596794cc"
                            target="_blank"
                            >العمليات</a
                          >
                        </div>
                        <div className="row history">
                          <span className="history-msg">لا يوجد سجل</span>
                        </div>
                        <span className="clearfix"></span>
                        <div className="space-20"></div>
                      </div>
                    </div>
                  </div>
                  <input
                    type="hidden"
                    name="PostId"
                    value="345e8972-2798-11ed-8c88-f079596794cc"
                  />
                  <input type="hidden" name="MediaId" />
                </div>
              </div>
            </div>
            <input
              name="__RequestVerificationToken"
              type="hidden"
              value="CfDJ8Gw4EJhP_tFBqoXBSpM7LZ0dFBSoK-SO3Hb0khihne0SJoIvHOu8H5IO4BuA3TcPJlrPgwZ8ECpXwKZqYd9ZaEDOYKDHJXMNqHYNU-PeVOARmNOA4HL-fYtL3qmblKNiVW2230Ag1JM3woeB5lh8vnDt5RP_Etg57zA4rcaNO-KyAv90jSZlXKq1OXUfcWbbmg"
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
  <div className="xdsoft_datetimepicker xdsoft_noselect xdsoft_rtl xdsoft_">
    <div className="xdsoft_datepicker active">
      <div className="xdsoft_monthpicker">
        <button
          type="button"
          className="xdsoft_prev"
          style={{visibility: "visible"}}
        ></button
        ><button
          type="button"
          className="xdsoft_today_button"
          style={{visibility: "visible"}}
        ></button>
        <div className="xdsoft_label xdsoft_month">
          <span>September</span>
          <div className="xdsoft_select xdsoft_monthselect xdsoft_scroller_box">
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
          <div className="xdsoft_select xdsoft_yearselect xdsoft_scroller_box">
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
                className="xdsoft_date xdsoft_day_of_week0 xdsoft_date xdsoft_disabled xdsoft_other_month xdsoft_weekend"
                title=""
              >
                <div>28</div>
              </td>
              <td
                data-date="29"
                data-month="7"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week1 xdsoft_date xdsoft_disabled xdsoft_other_month"
                title=""
              >
                <div>29</div>
              </td>
              <td
                data-date="30"
                data-month="7"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week2 xdsoft_date xdsoft_disabled xdsoft_other_month"
                title=""
              >
                <div>30</div>
              </td>
              <td
                data-date="31"
                data-month="7"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week3 xdsoft_date xdsoft_disabled xdsoft_other_month"
                title=""
              >
                <div>31</div>
              </td>
              <td
                data-date="1"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week4 xdsoft_date xdsoft_disabled"
                title=""
              >
                <div>1</div>
              </td>
              <td
                data-date="2"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week5 xdsoft_date xdsoft_disabled xdsoft_current xdsoft_today"
                title=""
              >
                <div>2</div>
              </td>
              <td
                data-date="3"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week6 xdsoft_date xdsoft_disabled xdsoft_weekend"
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
                className="xdsoft_date xdsoft_day_of_week0 xdsoft_date xdsoft_disabled xdsoft_weekend"
                title=""
              >
                <div>4</div>
              </td>
              <td
                data-date="5"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week1 xdsoft_date xdsoft_disabled"
                title=""
              >
                <div>5</div>
              </td>
              <td
                data-date="6"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week2 xdsoft_date xdsoft_disabled"
                title=""
              >
                <div>6</div>
              </td>
              <td
                data-date="7"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week3 xdsoft_date xdsoft_disabled"
                title=""
              >
                <div>7</div>
              </td>
              <td
                data-date="8"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week4 xdsoft_date xdsoft_disabled"
                title=""
              >
                <div>8</div>
              </td>
              <td
                data-date="9"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week5 xdsoft_date xdsoft_disabled"
                title=""
              >
                <div>9</div>
              </td>
              <td
                data-date="10"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week6 xdsoft_date xdsoft_disabled xdsoft_weekend"
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
                className="xdsoft_date xdsoft_day_of_week0 xdsoft_date xdsoft_disabled xdsoft_weekend"
                title=""
              >
                <div>11</div>
              </td>
              <td
                data-date="12"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week1 xdsoft_date xdsoft_disabled"
                title=""
              >
                <div>12</div>
              </td>
              <td
                data-date="13"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week2 xdsoft_date xdsoft_disabled"
                title=""
              >
                <div>13</div>
              </td>
              <td
                data-date="14"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week3 xdsoft_date xdsoft_disabled"
                title=""
              >
                <div>14</div>
              </td>
              <td
                data-date="15"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week4 xdsoft_date xdsoft_disabled"
                title=""
              >
                <div>15</div>
              </td>
              <td
                data-date="16"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week5 xdsoft_date xdsoft_disabled"
                title=""
              >
                <div>16</div>
              </td>
              <td
                data-date="17"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week6 xdsoft_date xdsoft_disabled xdsoft_weekend"
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
                className="xdsoft_date xdsoft_day_of_week0 xdsoft_date xdsoft_disabled xdsoft_weekend"
                title=""
              >
                <div>18</div>
              </td>
              <td
                data-date="19"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week1 xdsoft_date xdsoft_disabled"
                title=""
              >
                <div>19</div>
              </td>
              <td
                data-date="20"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week2 xdsoft_date xdsoft_disabled"
                title=""
              >
                <div>20</div>
              </td>
              <td
                data-date="21"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week3 xdsoft_date xdsoft_disabled"
                title=""
              >
                <div>21</div>
              </td>
              <td
                data-date="22"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week4 xdsoft_date xdsoft_disabled"
                title=""
              >
                <div>22</div>
              </td>
              <td
                data-date="23"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week5 xdsoft_date xdsoft_disabled"
                title=""
              >
                <div>23</div>
              </td>
              <td
                data-date="24"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week6 xdsoft_date xdsoft_disabled xdsoft_weekend"
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
                className="xdsoft_date xdsoft_day_of_week0 xdsoft_date xdsoft_disabled xdsoft_weekend"
                title=""
              >
                <div>25</div>
              </td>
              <td
                data-date="26"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week1 xdsoft_date xdsoft_disabled"
                title=""
              >
                <div>26</div>
              </td>
              <td
                data-date="27"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week2 xdsoft_date xdsoft_disabled"
                title=""
              >
                <div>27</div>
              </td>
              <td
                data-date="28"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week3 xdsoft_date xdsoft_disabled"
                title=""
              >
                <div>28</div>
              </td>
              <td
                data-date="29"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week4 xdsoft_date xdsoft_disabled"
                title=""
              >
                <div>29</div>
              </td>
              <td
                data-date="30"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week5 xdsoft_date xdsoft_disabled"
                title=""
              >
                <div>30</div>
              </td>
              <td
                data-date="1"
                data-month="9"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week6 xdsoft_date xdsoft_disabled xdsoft_other_month xdsoft_weekend"
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
        <div className="xdsoft_time_variant" style={{marginTop: 0+"px"}}>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="0"
            data-minute="0"
          >
            00:00
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="0"
            data-minute="15"
          >
            00:15
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="0"
            data-minute="30"
          >
            00:30
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="0"
            data-minute="45"
          >
            00:45
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="1"
            data-minute="0"
          >
            01:00
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="1"
            data-minute="15"
          >
            01:15
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="1"
            data-minute="30"
          >
            01:30
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="1"
            data-minute="45"
          >
            01:45
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="2"
            data-minute="0"
          >
            02:00
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="2"
            data-minute="15"
          >
            02:15
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="2"
            data-minute="30"
          >
            02:30
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="2"
            data-minute="45"
          >
            02:45
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="3"
            data-minute="0"
          >
            03:00
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="3"
            data-minute="15"
          >
            03:15
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="3"
            data-minute="30"
          >
            03:30
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="3"
            data-minute="45"
          >
            03:45
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="4"
            data-minute="0"
          >
            04:00
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="4"
            data-minute="15"
          >
            04:15
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="4"
            data-minute="30"
          >
            04:30
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="4"
            data-minute="45"
          >
            04:45
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="5"
            data-minute="0"
          >
            05:00
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="5"
            data-minute="15"
          >
            05:15
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="5"
            data-minute="30"
          >
            05:30
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="5"
            data-minute="45"
          >
            05:45
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="6"
            data-minute="0"
          >
            06:00
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="6"
            data-minute="15"
          >
            06:15
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="6"
            data-minute="30"
          >
            06:30
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="6"
            data-minute="45"
          >
            06:45
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="7"
            data-minute="0"
          >
            07:00
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="7"
            data-minute="15"
          >
            07:15
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="7"
            data-minute="30"
          >
            07:30
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="7"
            data-minute="45"
          >
            07:45
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="8"
            data-minute="0"
          >
            08:00
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="8"
            data-minute="15"
          >
            08:15
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="8"
            data-minute="30"
          >
            08:30
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="8"
            data-minute="45"
          >
            08:45
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="9"
            data-minute="0"
          >
            09:00
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="9"
            data-minute="15"
          >
            09:15
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="9"
            data-minute="30"
          >
            09:30
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="9"
            data-minute="45"
          >
            09:45
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="10"
            data-minute="0"
          >
            10:00
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="10"
            data-minute="15"
          >
            10:15
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="10"
            data-minute="30"
          >
            10:30
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="10"
            data-minute="45"
          >
            10:45
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="11"
            data-minute="0"
          >
            11:00
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="11"
            data-minute="15"
          >
            11:15
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="11"
            data-minute="30"
          >
            11:30
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="11"
            data-minute="45"
          >
            11:45
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="12"
            data-minute="0"
          >
            12:00
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="12"
            data-minute="15"
          >
            12:15
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="12"
            data-minute="30"
          >
            12:30
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="12"
            data-minute="45"
          >
            12:45
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="13"
            data-minute="0"
          >
            13:00
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="13"
            data-minute="15"
          >
            13:15
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="13"
            data-minute="30"
          >
            13:30
          </div>
          <div
            className="xdsoft_time xdsoft_disabled xdsoft_current"
            data-hour="13"
            data-minute="45"
          >
            13:45
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="14"
            data-minute="0"
          >
            14:00
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="14"
            data-minute="15"
          >
            14:15
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="14"
            data-minute="30"
          >
            14:30
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="14"
            data-minute="45"
          >
            14:45
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="15"
            data-minute="0"
          >
            15:00
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="15"
            data-minute="15"
          >
            15:15
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="15"
            data-minute="30"
          >
            15:30
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="15"
            data-minute="45"
          >
            15:45
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="16"
            data-minute="0"
          >
            16:00
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="16"
            data-minute="15"
          >
            16:15
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="16"
            data-minute="30"
          >
            16:30
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="16"
            data-minute="45"
          >
            16:45
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="17"
            data-minute="0"
          >
            17:00
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="17"
            data-minute="15"
          >
            17:15
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="17"
            data-minute="30"
          >
            17:30
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="17"
            data-minute="45"
          >
            17:45
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="18"
            data-minute="0"
          >
            18:00
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="18"
            data-minute="15"
          >
            18:15
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="18"
            data-minute="30"
          >
            18:30
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="18"
            data-minute="45"
          >
            18:45
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="19"
            data-minute="0"
          >
            19:00
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="19"
            data-minute="15"
          >
            19:15
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="19"
            data-minute="30"
          >
            19:30
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="19"
            data-minute="45"
          >
            19:45
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="20"
            data-minute="0"
          >
            20:00
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="20"
            data-minute="15"
          >
            20:15
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="20"
            data-minute="30"
          >
            20:30
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="20"
            data-minute="45"
          >
            20:45
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="21"
            data-minute="0"
          >
            21:00
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="21"
            data-minute="15"
          >
            21:15
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="21"
            data-minute="30"
          >
            21:30
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="21"
            data-minute="45"
          >
            21:45
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="22"
            data-minute="0"
          >
            22:00
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="22"
            data-minute="15"
          >
            22:15
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="22"
            data-minute="30"
          >
            22:30
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="22"
            data-minute="45"
          >
            22:45
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="23"
            data-minute="0"
          >
            23:00
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="23"
            data-minute="15"
          >
            23:15
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="23"
            data-minute="30"
          >
            23:30
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="23"
            data-minute="45"
          >
            23:45
          </div>
        </div>
        <div className="xdsoft_scrollbar">
          <div
            className="xdsoft_scroller"
            style={{height: 10+"px", marginTop: 0+"px"}}
          ></div>
        </div>
      </div>
      <button type="button" className="xdsoft_next"></button>
    </div>
  </div>
  <iframe
    scrolling="no"
    frameborder="0"
    allowtransparency="true"
    src="https://platform.twitter.com/widgets/widget_iframe.c4bdc17e77719578b594d5555bee90db.html?origin=https%3A%2F%2Fas-mangopulse-admin.azurewebsites.net"
    title="Twitter settings iframe"
    style={{display: "none"}}
  ></iframe
  ><iframe
    id="rufous-sandbox"
    scrolling="no"
    frameborder="0"
    allowtransparency="true"
    allowfullscreen="true"
    style={{
      position: "absolute",
      visibility: "hidden",
      display: "none",
      width: 0+"px",
      height: 0+"px",
      padding: 0+"px",
      border: "none",
    }}
    title="Twitter analytics iframe"
  ></iframe>
  <div
    className="tox tox-silver-sink tox-tinymce-aux"
    style={{position: "relative"}}
  ></div>
  <div
    className="tox tox-silver-sink tox-tinymce-aux"
    style={{position: "relative"}}
  ></div>
  <div className="xdsoft_datetimepicker xdsoft_noselect xdsoft_rtl xdsoft_">
    <div className="xdsoft_datepicker active">
      <div className="xdsoft_monthpicker">
        <button
          type="button"
          className="xdsoft_prev"
          style={{visibility: "visible"}}
        ></button
        ><button
          type="button"
          className="xdsoft_today_button"
          style={{visibility: "visible"}}
        ></button>
        <div className="xdsoft_label xdsoft_month">
          <span>September</span>
          <div className="xdsoft_select xdsoft_monthselect xdsoft_scroller_box">
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
          <div className="xdsoft_select xdsoft_yearselect xdsoft_scroller_box">
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
                className="xdsoft_date xdsoft_day_of_week0 xdsoft_date xdsoft_disabled xdsoft_other_month xdsoft_weekend"
                title=""
              >
                <div>28</div>
              </td>
              <td
                data-date="29"
                data-month="7"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week1 xdsoft_date xdsoft_disabled xdsoft_other_month"
                title=""
              >
                <div>29</div>
              </td>
              <td
                data-date="30"
                data-month="7"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week2 xdsoft_date xdsoft_disabled xdsoft_other_month"
                title=""
              >
                <div>30</div>
              </td>
              <td
                data-date="31"
                data-month="7"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week3 xdsoft_date xdsoft_disabled xdsoft_other_month"
                title=""
              >
                <div>31</div>
              </td>
              <td
                data-date="1"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week4 xdsoft_date xdsoft_disabled"
                title=""
              >
                <div>1</div>
              </td>
              <td
                data-date="2"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week5 xdsoft_date xdsoft_disabled xdsoft_current xdsoft_today"
                title=""
              >
                <div>2</div>
              </td>
              <td
                data-date="3"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week6 xdsoft_date xdsoft_disabled xdsoft_weekend"
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
                className="xdsoft_date xdsoft_day_of_week0 xdsoft_date xdsoft_disabled xdsoft_weekend"
                title=""
              >
                <div>4</div>
              </td>
              <td
                data-date="5"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week1 xdsoft_date xdsoft_disabled"
                title=""
              >
                <div>5</div>
              </td>
              <td
                data-date="6"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week2 xdsoft_date xdsoft_disabled"
                title=""
              >
                <div>6</div>
              </td>
              <td
                data-date="7"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week3 xdsoft_date xdsoft_disabled"
                title=""
              >
                <div>7</div>
              </td>
              <td
                data-date="8"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week4 xdsoft_date xdsoft_disabled"
                title=""
              >
                <div>8</div>
              </td>
              <td
                data-date="9"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week5 xdsoft_date xdsoft_disabled"
                title=""
              >
                <div>9</div>
              </td>
              <td
                data-date="10"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week6 xdsoft_date xdsoft_disabled xdsoft_weekend"
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
                className="xdsoft_date xdsoft_day_of_week0 xdsoft_date xdsoft_disabled xdsoft_weekend"
                title=""
              >
                <div>11</div>
              </td>
              <td
                data-date="12"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week1 xdsoft_date xdsoft_disabled"
                title=""
              >
                <div>12</div>
              </td>
              <td
                data-date="13"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week2 xdsoft_date xdsoft_disabled"
                title=""
              >
                <div>13</div>
              </td>
              <td
                data-date="14"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week3 xdsoft_date xdsoft_disabled"
                title=""
              >
                <div>14</div>
              </td>
              <td
                data-date="15"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week4 xdsoft_date xdsoft_disabled"
                title=""
              >
                <div>15</div>
              </td>
              <td
                data-date="16"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week5 xdsoft_date xdsoft_disabled"
                title=""
              >
                <div>16</div>
              </td>
              <td
                data-date="17"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week6 xdsoft_date xdsoft_disabled xdsoft_weekend"
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
                className="xdsoft_date xdsoft_day_of_week0 xdsoft_date xdsoft_disabled xdsoft_weekend"
                title=""
              >
                <div>18</div>
              </td>
              <td
                data-date="19"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week1 xdsoft_date xdsoft_disabled"
                title=""
              >
                <div>19</div>
              </td>
              <td
                data-date="20"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week2 xdsoft_date xdsoft_disabled"
                title=""
              >
                <div>20</div>
              </td>
              <td
                data-date="21"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week3 xdsoft_date xdsoft_disabled"
                title=""
              >
                <div>21</div>
              </td>
              <td
                data-date="22"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week4 xdsoft_date xdsoft_disabled"
                title=""
              >
                <div>22</div>
              </td>
              <td
                data-date="23"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week5 xdsoft_date xdsoft_disabled"
                title=""
              >
                <div>23</div>
              </td>
              <td
                data-date="24"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week6 xdsoft_date xdsoft_disabled xdsoft_weekend"
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
                className="xdsoft_date xdsoft_day_of_week0 xdsoft_date xdsoft_disabled xdsoft_weekend"
                title=""
              >
                <div>25</div>
              </td>
              <td
                data-date="26"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week1 xdsoft_date xdsoft_disabled"
                title=""
              >
                <div>26</div>
              </td>
              <td
                data-date="27"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week2 xdsoft_date xdsoft_disabled"
                title=""
              >
                <div>27</div>
              </td>
              <td
                data-date="28"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week3 xdsoft_date xdsoft_disabled"
                title=""
              >
                <div>28</div>
              </td>
              <td
                data-date="29"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week4 xdsoft_date xdsoft_disabled"
                title=""
              >
                <div>29</div>
              </td>
              <td
                data-date="30"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week5 xdsoft_date xdsoft_disabled"
                title=""
              >
                <div>30</div>
              </td>
              <td
                data-date="1"
                data-month="9"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week6 xdsoft_date xdsoft_disabled xdsoft_other_month xdsoft_weekend"
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
        <div className="xdsoft_time_variant" style={{marginTop: 0+"px"}}>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="0"
            data-minute="0"
          >
            00:00
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="0"
            data-minute="15"
          >
            00:15
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="0"
            data-minute="30"
          >
            00:30
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="0"
            data-minute="45"
          >
            00:45
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="1"
            data-minute="0"
          >
            01:00
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="1"
            data-minute="15"
          >
            01:15
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="1"
            data-minute="30"
          >
            01:30
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="1"
            data-minute="45"
          >
            01:45
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="2"
            data-minute="0"
          >
            02:00
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="2"
            data-minute="15"
          >
            02:15
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="2"
            data-minute="30"
          >
            02:30
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="2"
            data-minute="45"
          >
            02:45
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="3"
            data-minute="0"
          >
            03:00
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="3"
            data-minute="15"
          >
            03:15
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="3"
            data-minute="30"
          >
            03:30
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="3"
            data-minute="45"
          >
            03:45
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="4"
            data-minute="0"
          >
            04:00
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="4"
            data-minute="15"
          >
            04:15
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="4"
            data-minute="30"
          >
            04:30
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="4"
            data-minute="45"
          >
            04:45
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="5"
            data-minute="0"
          >
            05:00
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="5"
            data-minute="15"
          >
            05:15
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="5"
            data-minute="30"
          >
            05:30
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="5"
            data-minute="45"
          >
            05:45
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="6"
            data-minute="0"
          >
            06:00
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="6"
            data-minute="15"
          >
            06:15
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="6"
            data-minute="30"
          >
            06:30
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="6"
            data-minute="45"
          >
            06:45
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="7"
            data-minute="0"
          >
            07:00
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="7"
            data-minute="15"
          >
            07:15
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="7"
            data-minute="30"
          >
            07:30
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="7"
            data-minute="45"
          >
            07:45
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="8"
            data-minute="0"
          >
            08:00
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="8"
            data-minute="15"
          >
            08:15
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="8"
            data-minute="30"
          >
            08:30
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="8"
            data-minute="45"
          >
            08:45
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="9"
            data-minute="0"
          >
            09:00
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="9"
            data-minute="15"
          >
            09:15
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="9"
            data-minute="30"
          >
            09:30
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="9"
            data-minute="45"
          >
            09:45
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="10"
            data-minute="0"
          >
            10:00
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="10"
            data-minute="15"
          >
            10:15
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="10"
            data-minute="30"
          >
            10:30
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="10"
            data-minute="45"
          >
            10:45
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="11"
            data-minute="0"
          >
            11:00
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="11"
            data-minute="15"
          >
            11:15
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="11"
            data-minute="30"
          >
            11:30
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="11"
            data-minute="45"
          >
            11:45
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="12"
            data-minute="0"
          >
            12:00
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="12"
            data-minute="15"
          >
            12:15
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="12"
            data-minute="30"
          >
            12:30
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="12"
            data-minute="45"
          >
            12:45
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="13"
            data-minute="0"
          >
            13:00
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="13"
            data-minute="15"
          >
            13:15
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="13"
            data-minute="30"
          >
            13:30
          </div>
          <div
            className="xdsoft_time xdsoft_disabled xdsoft_current"
            data-hour="13"
            data-minute="45"
          >
            13:45
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="14"
            data-minute="0"
          >
            14:00
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="14"
            data-minute="15"
          >
            14:15
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="14"
            data-minute="30"
          >
            14:30
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="14"
            data-minute="45"
          >
            14:45
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="15"
            data-minute="0"
          >
            15:00
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="15"
            data-minute="15"
          >
            15:15
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="15"
            data-minute="30"
          >
            15:30
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="15"
            data-minute="45"
          >
            15:45
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="16"
            data-minute="0"
          >
            16:00
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="16"
            data-minute="15"
          >
            16:15
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="16"
            data-minute="30"
          >
            16:30
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="16"
            data-minute="45"
          >
            16:45
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="17"
            data-minute="0"
          >
            17:00
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="17"
            data-minute="15"
          >
            17:15
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="17"
            data-minute="30"
          >
            17:30
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="17"
            data-minute="45"
          >
            17:45
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="18"
            data-minute="0"
          >
            18:00
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="18"
            data-minute="15"
          >
            18:15
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="18"
            data-minute="30"
          >
            18:30
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="18"
            data-minute="45"
          >
            18:45
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="19"
            data-minute="0"
          >
            19:00
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="19"
            data-minute="15"
          >
            19:15
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="19"
            data-minute="30"
          >
            19:30
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="19"
            data-minute="45"
          >
            19:45
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="20"
            data-minute="0"
          >
            20:00
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="20"
            data-minute="15"
          >
            20:15
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="20"
            data-minute="30"
          >
            20:30
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="20"
            data-minute="45"
          >
            20:45
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="21"
            data-minute="0"
          >
            21:00
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="21"
            data-minute="15"
          >
            21:15
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="21"
            data-minute="30"
          >
            21:30
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="21"
            data-minute="45"
          >
            21:45
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="22"
            data-minute="0"
          >
            22:00
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="22"
            data-minute="15"
          >
            22:15
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="22"
            data-minute="30"
          >
            22:30
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="22"
            data-minute="45"
          >
            22:45
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="23"
            data-minute="0"
          >
            23:00
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="23"
            data-minute="15"
          >
            23:15
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="23"
            data-minute="30"
          >
            23:30
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="23"
            data-minute="45"
          >
            23:45
          </div>
        </div>
        <div className="xdsoft_scrollbar">
          <div
            className="xdsoft_scroller"
            style={{height: 10+"px", marginTop: 0+"px"}}
          ></div>
        </div>
      </div>
      <button type="button" className="xdsoft_next"></button>
    </div>
  </div>
  <div className="xdsoft_datetimepicker xdsoft_noselect xdsoft_rtl xdsoft_">
    <div className="xdsoft_datepicker active">
      <div className="xdsoft_monthpicker">
        <button
          type="button"
          className="xdsoft_prev"
          style={{visibility: "visible"}}
        ></button
        ><button
          type="button"
          className="xdsoft_today_button"
          style={{visibility: "visible"}}
        ></button>
        <div className="xdsoft_label xdsoft_month">
          <span>September</span>
          <div className="xdsoft_select xdsoft_monthselect xdsoft_scroller_box">
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
          <div className="xdsoft_select xdsoft_yearselect xdsoft_scroller_box">
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
                className="xdsoft_date xdsoft_day_of_week0 xdsoft_date xdsoft_disabled xdsoft_other_month xdsoft_weekend"
                title=""
              >
                <div>28</div>
              </td>
              <td
                data-date="29"
                data-month="7"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week1 xdsoft_date xdsoft_disabled xdsoft_other_month"
                title=""
              >
                <div>29</div>
              </td>
              <td
                data-date="30"
                data-month="7"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week2 xdsoft_date xdsoft_disabled xdsoft_other_month"
                title=""
              >
                <div>30</div>
              </td>
              <td
                data-date="31"
                data-month="7"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week3 xdsoft_date xdsoft_disabled xdsoft_other_month"
                title=""
              >
                <div>31</div>
              </td>
              <td
                data-date="1"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week4 xdsoft_date xdsoft_disabled"
                title=""
              >
                <div>1</div>
              </td>
              <td
                data-date="2"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week5 xdsoft_date xdsoft_disabled xdsoft_current xdsoft_today"
                title=""
              >
                <div>2</div>
              </td>
              <td
                data-date="3"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week6 xdsoft_date xdsoft_disabled xdsoft_weekend"
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
                className="xdsoft_date xdsoft_day_of_week0 xdsoft_date xdsoft_disabled xdsoft_weekend"
                title=""
              >
                <div>4</div>
              </td>
              <td
                data-date="5"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week1 xdsoft_date xdsoft_disabled"
                title=""
              >
                <div>5</div>
              </td>
              <td
                data-date="6"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week2 xdsoft_date xdsoft_disabled"
                title=""
              >
                <div>6</div>
              </td>
              <td
                data-date="7"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week3 xdsoft_date xdsoft_disabled"
                title=""
              >
                <div>7</div>
              </td>
              <td
                data-date="8"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week4 xdsoft_date xdsoft_disabled"
                title=""
              >
                <div>8</div>
              </td>
              <td
                data-date="9"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week5 xdsoft_date xdsoft_disabled"
                title=""
              >
                <div>9</div>
              </td>
              <td
                data-date="10"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week6 xdsoft_date xdsoft_disabled xdsoft_weekend"
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
                className="xdsoft_date xdsoft_day_of_week0 xdsoft_date xdsoft_disabled xdsoft_weekend"
                title=""
              >
                <div>11</div>
              </td>
              <td
                data-date="12"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week1 xdsoft_date xdsoft_disabled"
                title=""
              >
                <div>12</div>
              </td>
              <td
                data-date="13"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week2 xdsoft_date xdsoft_disabled"
                title=""
              >
                <div>13</div>
              </td>
              <td
                data-date="14"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week3 xdsoft_date xdsoft_disabled"
                title=""
              >
                <div>14</div>
              </td>
              <td
                data-date="15"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week4 xdsoft_date xdsoft_disabled"
                title=""
              >
                <div>15</div>
              </td>
              <td
                data-date="16"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week5 xdsoft_date xdsoft_disabled"
                title=""
              >
                <div>16</div>
              </td>
              <td
                data-date="17"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week6 xdsoft_date xdsoft_disabled xdsoft_weekend"
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
                className="xdsoft_date xdsoft_day_of_week0 xdsoft_date xdsoft_disabled xdsoft_weekend"
                title=""
              >
                <div>18</div>
              </td>
              <td
                data-date="19"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week1 xdsoft_date xdsoft_disabled"
                title=""
              >
                <div>19</div>
              </td>
              <td
                data-date="20"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week2 xdsoft_date xdsoft_disabled"
                title=""
              >
                <div>20</div>
              </td>
              <td
                data-date="21"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week3 xdsoft_date xdsoft_disabled"
                title=""
              >
                <div>21</div>
              </td>
              <td
                data-date="22"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week4 xdsoft_date xdsoft_disabled"
                title=""
              >
                <div>22</div>
              </td>
              <td
                data-date="23"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week5 xdsoft_date xdsoft_disabled"
                title=""
              >
                <div>23</div>
              </td>
              <td
                data-date="24"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week6 xdsoft_date xdsoft_disabled xdsoft_weekend"
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
                className="xdsoft_date xdsoft_day_of_week0 xdsoft_date xdsoft_disabled xdsoft_weekend"
                title=""
              >
                <div>25</div>
              </td>
              <td
                data-date="26"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week1 xdsoft_date xdsoft_disabled"
                title=""
              >
                <div>26</div>
              </td>
              <td
                data-date="27"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week2 xdsoft_date xdsoft_disabled"
                title=""
              >
                <div>27</div>
              </td>
              <td
                data-date="28"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week3 xdsoft_date xdsoft_disabled"
                title=""
              >
                <div>28</div>
              </td>
              <td
                data-date="29"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week4 xdsoft_date xdsoft_disabled"
                title=""
              >
                <div>29</div>
              </td>
              <td
                data-date="30"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week5 xdsoft_date xdsoft_disabled"
                title=""
              >
                <div>30</div>
              </td>
              <td
                data-date="1"
                data-month="9"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week6 xdsoft_date xdsoft_disabled xdsoft_other_month xdsoft_weekend"
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
        <div className="xdsoft_time_variant" style={{marginTop: 0+"px"}}>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="0"
            data-minute="0"
          >
            00:00
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="0"
            data-minute="15"
          >
            00:15
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="0"
            data-minute="30"
          >
            00:30
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="0"
            data-minute="45"
          >
            00:45
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="1"
            data-minute="0"
          >
            01:00
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="1"
            data-minute="15"
          >
            01:15
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="1"
            data-minute="30"
          >
            01:30
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="1"
            data-minute="45"
          >
            01:45
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="2"
            data-minute="0"
          >
            02:00
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="2"
            data-minute="15"
          >
            02:15
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="2"
            data-minute="30"
          >
            02:30
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="2"
            data-minute="45"
          >
            02:45
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="3"
            data-minute="0"
          >
            03:00
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="3"
            data-minute="15"
          >
            03:15
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="3"
            data-minute="30"
          >
            03:30
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="3"
            data-minute="45"
          >
            03:45
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="4"
            data-minute="0"
          >
            04:00
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="4"
            data-minute="15"
          >
            04:15
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="4"
            data-minute="30"
          >
            04:30
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="4"
            data-minute="45"
          >
            04:45
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="5"
            data-minute="0"
          >
            05:00
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="5"
            data-minute="15"
          >
            05:15
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="5"
            data-minute="30"
          >
            05:30
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="5"
            data-minute="45"
          >
            05:45
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="6"
            data-minute="0"
          >
            06:00
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="6"
            data-minute="15"
          >
            06:15
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="6"
            data-minute="30"
          >
            06:30
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="6"
            data-minute="45"
          >
            06:45
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="7"
            data-minute="0"
          >
            07:00
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="7"
            data-minute="15"
          >
            07:15
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="7"
            data-minute="30"
          >
            07:30
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="7"
            data-minute="45"
          >
            07:45
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="8"
            data-minute="0"
          >
            08:00
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="8"
            data-minute="15"
          >
            08:15
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="8"
            data-minute="30"
          >
            08:30
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="8"
            data-minute="45"
          >
            08:45
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="9"
            data-minute="0"
          >
            09:00
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="9"
            data-minute="15"
          >
            09:15
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="9"
            data-minute="30"
          >
            09:30
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="9"
            data-minute="45"
          >
            09:45
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="10"
            data-minute="0"
          >
            10:00
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="10"
            data-minute="15"
          >
            10:15
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="10"
            data-minute="30"
          >
            10:30
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="10"
            data-minute="45"
          >
            10:45
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="11"
            data-minute="0"
          >
            11:00
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="11"
            data-minute="15"
          >
            11:15
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="11"
            data-minute="30"
          >
            11:30
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="11"
            data-minute="45"
          >
            11:45
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="12"
            data-minute="0"
          >
            12:00
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="12"
            data-minute="15"
          >
            12:15
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="12"
            data-minute="30"
          >
            12:30
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="12"
            data-minute="45"
          >
            12:45
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="13"
            data-minute="0"
          >
            13:00
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="13"
            data-minute="15"
          >
            13:15
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="13"
            data-minute="30"
          >
            13:30
          </div>
          <div
            className="xdsoft_time xdsoft_disabled xdsoft_current"
            data-hour="13"
            data-minute="45"
          >
            13:45
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="14"
            data-minute="0"
          >
            14:00
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="14"
            data-minute="15"
          >
            14:15
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="14"
            data-minute="30"
          >
            14:30
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="14"
            data-minute="45"
          >
            14:45
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="15"
            data-minute="0"
          >
            15:00
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="15"
            data-minute="15"
          >
            15:15
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="15"
            data-minute="30"
          >
            15:30
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="15"
            data-minute="45"
          >
            15:45
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="16"
            data-minute="0"
          >
            16:00
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="16"
            data-minute="15"
          >
            16:15
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="16"
            data-minute="30"
          >
            16:30
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="16"
            data-minute="45"
          >
            16:45
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="17"
            data-minute="0"
          >
            17:00
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="17"
            data-minute="15"
          >
            17:15
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="17"
            data-minute="30"
          >
            17:30
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="17"
            data-minute="45"
          >
            17:45
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="18"
            data-minute="0"
          >
            18:00
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="18"
            data-minute="15"
          >
            18:15
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="18"
            data-minute="30"
          >
            18:30
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="18"
            data-minute="45"
          >
            18:45
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="19"
            data-minute="0"
          >
            19:00
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="19"
            data-minute="15"
          >
            19:15
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="19"
            data-minute="30"
          >
            19:30
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="19"
            data-minute="45"
          >
            19:45
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="20"
            data-minute="0"
          >
            20:00
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="20"
            data-minute="15"
          >
            20:15
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="20"
            data-minute="30"
          >
            20:30
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="20"
            data-minute="45"
          >
            20:45
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="21"
            data-minute="0"
          >
            21:00
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="21"
            data-minute="15"
          >
            21:15
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="21"
            data-minute="30"
          >
            21:30
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="21"
            data-minute="45"
          >
            21:45
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="22"
            data-minute="0"
          >
            22:00
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="22"
            data-minute="15"
          >
            22:15
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="22"
            data-minute="30"
          >
            22:30
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="22"
            data-minute="45"
          >
            22:45
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="23"
            data-minute="0"
          >
            23:00
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="23"
            data-minute="15"
          >
            23:15
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="23"
            data-minute="30"
          >
            23:30
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="23"
            data-minute="45"
          >
            23:45
          </div>
        </div>
        <div className="xdsoft_scrollbar">
          <div
            className="xdsoft_scroller"
            style={{height: 10+"px", marginTop: 0+"px"}}
          ></div>
        </div>
      </div>
      <button type="button" className="xdsoft_next"></button>
    </div>
  </div>

    </div>
  )
}

export default NasherArticles
