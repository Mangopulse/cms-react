import React from 'react'

const AlnasherArticles = () => {
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
            <li className="active">الناشر</li>
            <li>
              <a href="/Index/Posts?type=article"> Article </a>
            </li>
          </ul>

          <div
            id="page-data"
            data-url="https://as-mangopulse-admin.azurewebsites.net/Publisher?type=article"
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
                  Article
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
              <input id="Term_Code" name="Term.Code" type="hidden" value="" />
              <input id="TermId" name="TermId" type="hidden" value="" />
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
                    <ul
                      className="inbox-tabs nav nav-tabs tab-size-bigger tab-space-1"
                    >
                      <li className="nav-item">
                        <a className="nav-link active" href="#">
                          <i className="red ace-icon fa fa-home bigger-130"></i>
                          <span className="bigger-110">Article</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="/Publisher?type=article&amp;term=sport"
                          className="nav-link"
                        >
                          <i className="ace-icon fa fa-bars bigger-130"></i>
                          <span className="bigger-110">sport</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="/Publisher?type=article&amp;term=entertainment"
                          className="nav-link"
                        >
                          <i className="ace-icon fa fa-bars bigger-130"></i>
                          <span className="bigger-110">Entertainment</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="/Publisher?type=article&amp;term=politics"
                          className="nav-link"
                        >
                          <i className="ace-icon fa fa-bars bigger-130"></i>
                          <span className="bigger-110">Politics</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="/Publisher?type=article&amp;term=fashion"
                          className="nav-link"
                        >
                          <i className="ace-icon fa fa-bars bigger-130"></i>
                          <span className="bigger-110">Fashion</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="/Publisher?type=article&amp;term=sports"
                          className="nav-link"
                        >
                          <i className="ace-icon fa fa-bars bigger-130"></i>
                          <span className="bigger-110">Sports</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="/Publisher?type=article&amp;term=tech"
                          className="nav-link"
                        >
                          <i className="ace-icon fa fa-bars bigger-130"></i>
                          <span className="bigger-110">Tech</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="/Publisher?type=article&amp;term=business"
                          className="nav-link"
                        >
                          <i className="ace-icon fa fa-bars bigger-130"></i>
                          <span className="bigger-110">Business</span>
                        </a>
                      </li>
                    </ul>

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
                                      href="/Posts/article/Preview/116"
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
                                    value="ca617270-fd22-11ec-a81d-000d3aa9c700"
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
                                href="/Posts/Browse?Type=article&amp;OrderBy=CreationDate%20DESC&amp;Status=20&amp;Page=1&amp;MainRequest=True&amp;SearchRequest=False&amp;AllowedCount=-1&amp;ParentHandler=window.back.publisher&amp;ThisYear=False&amp;SubscriptionId=00000000-0000-0000-0000-000000000000"
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
                                      src="//https://as-mangopulse-media.azurewebsites.net/store/archive/image/2022/8/29/d5778652-4437-401b-b194-1101940e2e01.jpg?preset=ace-thumbnail"
                                    />
                                    <a
                                      className="user notajax"
                                      data-bind="html: Title"
                                      >1news1</a
                                    >

                                    <div className="time">
                                      <i
                                        className="ace-icon fa fa-clock-o bigger-110"
                                      ></i>
                                      <span data-bind="html: Date"
                                        >2022-08-29 12:45:21</span
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
                                      href="/Posts/article/Preview/1231"
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
                                      src="//https://as-mangopulse-media.azurewebsites.net/store/archive/image/2022/8/8/1d229990-2ebf-4d4b-a8ee-dd350b39a812.png?preset=ace-thumbnail"
                                    />
                                    <a
                                      className="user notajax"
                                      data-bind="html: Title"
                                      >article 2</a
                                    >

                                    <div className="time">
                                      <i
                                        className="ace-icon fa fa-clock-o bigger-110"
                                      ></i>
                                      <span data-bind="html: Date"
                                        >2022-08-08 12:11:00</span
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
                                      href="/Posts/article/Preview/1055"
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
                                      src="//https://as-mangopulse-media.azurewebsites.net/store/archive/image/2022/8/8/9c735e9d-2a6e-45b1-9d84-a689776cb2ad.png?preset=ace-thumbnail"
                                    />
                                    <a
                                      className="user notajax"
                                      data-bind="html: Title"
                                      >test article</a
                                    >

                                    <div className="time">
                                      <i
                                        className="ace-icon fa fa-clock-o bigger-110"
                                      ></i>
                                      <span data-bind="html: Date"
                                        >2022-08-08 11:54:32</span
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
                                      href="/Posts/article/Preview/1054"
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
                                      href="/Posts/article/Preview/110"
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
                                      href="/Posts/article/Preview/93"
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
            value="CfDJ8Gw4EJhP_tFBqoXBSpM7LZ16qT-1E7rUxTwa0wnmCDSLEkuct9uqr3_oMrO_7C6dOMawc8h1Jdoqseo8DlSJXxIhvzX-kOThJ0y7UU_4hlrV80wMaii4N1iCb7lUAv3md_R4XkFl1a1thqZy_AIQbaXejCE_awhu4BP1UIJPXCNLobAgrdtp3F73_gKXbJNBkw"
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
          <div id="cboxLoadingOverlay"style={{float: "left"}}></div>
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

export default AlnasherArticles
