import React from 'react'

const ToolsPage = () => {
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
          <a href="/Manage/manageHome"
            ><img
              src="//admango.cdn.mangomolo.com/analytics/mangopulse/images/products/dxm.png"
              alt="Tools &amp; Setup"
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
                <li className=" ">
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
            <a className=" " href="/Manage/Resources/Index">
              <i className="menu-icon fas fa-language"></i>
              <span className="menu-text">Resources</span>
            </a>
          </li>
          <li className="menuitem">
            <a className="dropdown-toggle" href="#">
              <i className="menu-icon fas fa-puzzle-piece"></i>
              <span className="menu-text">Data Structure</span>
              <b className="arrow fa fa-angle-down"></b>
            </a>

            <ul className="submenu">
              <li className="menuitem">
                <a className="" href="/Manage/PostType/Index">
                  <i className="menu-icon fa fa-left"></i>
                  <span className="menu-text">Post Types</span>
                </a>
              </li>
              <li className="menuitem">
                <a className="" href="/Manage/Taxonomy/Index">
                  <i className="menu-icon fa fa-left"></i>
                  <span className="menu-text">Taxonomies</span>
                </a>
              </li>
              <li className="menuitem">
                <a className="" href="/Manage/Term/Index">
                  <i className="menu-icon fa fa-left"></i>
                  <span className="menu-text">Terms</span>
                </a>
              </li>
            </ul>
          </li>
          <li className="menuitem">
            <a className="dropdown-toggle" href="#">
              <i className="menu-icon fas fa-cubes"></i>
              <span className="menu-text">Site Builder</span>
              <b className="arrow fa fa-angle-down"></b>
            </a>

            <ul className="submenu">
              <li className="menuitem">
                <a className="" href="/Manage/Menu/Index">
                  <i className="menu-icon fa fa-left"></i>
                  <span className="menu-text">Menu</span>
                </a>
              </li>
              <li className="menuitem">
                <a className="" href="/Manage/Designer/Pages">
                  <i className="menu-icon fa fa-left"></i>
                  <span className="menu-text">Pages</span>
                </a>
              </li>
              <li className="menuitem">
                <a className="" href="/Manage/Designer/Templates">
                  <i className="menu-icon fa fa-left"></i>
                  <span className="menu-text">Templates</span>
                </a>
              </li>
              <li className="menuitem">
                <a className="" href="/Manage/Widgets/Index">
                  <i className="menu-icon fa fa-left"></i>
                  <span className="menu-text">Widgets</span>
                </a>
              </li>
            </ul>
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
          <a
            className="notajax"
            href="/Manage/ManageHome"
            title="Tools &amp; Setup"
          >
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
                <a href="/Manage/manageHome"> Tools &amp; Setup </a>
              </li>
              <li className="active">Tools &amp; Setup</li>
            </ul>

            <div
              id="page-data"
              data-url="https://as-mangopulse-admin.azurewebsites.net/Manage/ManageHome"
              data-title="Tools &amp; Setup"
            ></div>
          </div>

          <div className="welcome">
            <h3>أهلاً بكم Technical Support</h3>
          </div>
          <div className="page-content">
            <div className="row">
           
              <div
                className="col-lg-col-sm-12 col-12 dashboard"
                style={{marginBottom: 60+"px"}}
              >
                <div className="infobox-container col-sm-12">
                  <div className="infobox infobox-grey multi big">
                    <div className="infobox-icon" href="/Manage/Designer/Pages">
                      <i className="ace-icon fa fa-fa fa-file"></i>
                    </div>
                    <div className="infobox-title">
                      <a href="/Manage/Designer/Pages">الصفحات</a>
                    </div>
                    <div className="data">
                      <div className="infobox-data multi">
                        <a style={{display: "block"}} href="/Manage/Designer/Pages">
                          <span className="infobox-data-number">18</span>
                          <div className="infobox-content">المجموع</div>
                        </a>
                      </div>
                      <div className="infobox-data multi">
                        <a style={{display: "block"}} href="/Manage/Designer/Pages">
                          <span className="infobox-data-number">15</span>
                          <div className="infobox-content">منشور</div>
                        </a>
                      </div>
                    </div>

                    <span className="clearfix"></span>
                  </div>
                  <div className="infobox infobox-grey multi big">
                    <div className="infobox-icon" href="/Manage/Designer/Templates">
                      <i className="ace-icon fa fa-fa fa-palette"></i>
                    </div>
                    <div className="infobox-title">
                      <a href="/Manage/Designer/Templates">قوالب</a>
                    </div>
                    <div className="data">
                      <div className="infobox-data multi">
                        <a
                          style={{display: "block"}}
                          href="/Manage/Designer/Templates"
                        >
                          <span className="infobox-data-number">6</span>
                          <div className="infobox-content">المجموع</div>
                        </a>
                      </div>
                      <div className="infobox-data multi">
                        <a
                          style={{display: "block"}}
                          href="/Manage/Designer/Templates"
                        >
                          <span className="infobox-data-number">6</span>
                          <div className="infobox-content">منشور</div>
                        </a>
                      </div>
                    </div>

                    <span className="clearfix"></span>
                  </div>
                  <div className="infobox infobox-grey multi big">
                    <div className="infobox-icon" href="/Manage/Widgets">
                      <i className="ace-icon fa fa-fa fa-shapes"></i>
                    </div>
                    <div className="infobox-title">
                      <a href="/Manage/Widgets">مكونات</a>
                    </div>
                    <div className="data">
                      <div className="infobox-data multi">
                        <a style={{display: "block"}} href="/Manage/Widgets">
                          <span className="infobox-data-number">21</span>
                          <div className="infobox-content">المجموع</div>
                        </a>
                      </div>
                      <div className="infobox-data multi">
                        <a style={{display: "block"}} href="/Manage/Widgets">
                          <span className="infobox-data-number">101</span>
                          <div className="infobox-content">Unused</div>
                        </a>
                      </div>
                    </div>

                    <span className="clearfix"></span>
                  </div>
                  <span className="clearfix"></span>
                </div>
              </div>
              <span className="clearfix"></span>

              <div
                className="col-lg-col-sm-12 col-12 dashboard"
                style={{marginBottom: 60+"px"}}
              >
                <div className="infobox-container col-sm-12">
                  <div className="infobox infobox-grey">
                    <a className="infobox-icon" href="/Manage/PostType">
                      <i className="ace-icon fa fa-fa fa-cubes"></i>
                    </a>

                    <div className="infobox-data">
                      <span className="infobox-data-number">49</span>
                      <div className="infobox-content">أنواع المنشور</div>
                    </div>
                  </div>
                  <div className="infobox infobox-grey">
                    <a className="infobox-icon" href="/Manage/Term">
                      <i className="ace-icon fa fa-fa fa-list"></i>
                    </a>

                    <div className="infobox-data">
                      <span className="infobox-data-number">33</span>
                      <div className="infobox-content">مصطلحات</div>
                    </div>
                  </div>
                  <div className="infobox infobox-grey">
                    <a className="infobox-icon" href="/Manage/Taxonomy">
                      <i className="ace-icon fa fa-fa fa-palette"></i>
                    </a>

                    <div className="infobox-data">
                      <span className="infobox-data-number">23</span>
                      <div className="infobox-content">التصنيفات</div>
                    </div>
                  </div>
                  <span className="clearfix"></span>
                </div>
              </div>
              <span className="clearfix"></span>
            </div>
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
      <div b-fjwotxpclx="" id="busy-holder">
        <div b-fjwotxpclx="" id="busy">
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
    <div
      id="colorbox"
      className=""
      role="dialog"
      tabIndex="-1"
      style={{display: "none"}}
    >
      <div id="cboxWrapper">
        <div>
          <div id="cboxTopLeft" style={{float: "left"}}></div>
          <div id="cboxTopCenter" style={{float: "left"}}></div>
          <div id="cboxTopRight" style={{float: "left"}}></div>
        </div>
        <div style={{clear: "left"}}>
          <div id="cboxMiddleLeft" style={{float: "left"}}></div>
          <div id="cboxContent"style={{float: "left"}}>
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
          width: "9999px",
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

export default ToolsPage
