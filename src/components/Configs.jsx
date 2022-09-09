import React from 'react'

const Configs = () => {
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
          <a href="/Technical/technicalHome"
            ><img
              src="//admango.cdn.mangomolo.com/analytics/mangopulse/images/products/dxm.png"
              alt="Programmers Area"
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
          <li className="menuitem open active highlight">
            <a className=" " href="/Technical/Configs/Index">
              <i className="menu-icon"></i>
              <span className="menu-text">Configs</span>
            </a>
          </li>
          <li className="menuitem">
            <a className=" " href="/Technical/Operations/Index">
              <i className="menu-icon"></i>
              <span className="menu-text">Operations</span>
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
                <a href="/Technical/technicalHome"> Programmers Area </a>
              </li>
              <li className="active">الإعدادات</li>
            </ul>

            <div
              id="page-data"
              data-url="https://as-mangopulse-admin.azurewebsites.net/Technical/Configs/Index"
              data-title="الإعدادات"
            ></div>
          </div>

          <div className="page-content">
            <div className="page-header">
              <div className="quick-create">
                <a href="/Technical/Configs/Create" title=""
                  ><i className="fa fa-plus"></i
                ></a>
              </div>
              <h1>الإعدادات</h1>
            </div>

            <div className="row">
              <div className="col-12">
                <div className="data-table">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>عنوان</th>
                        <th>className Name</th>
                        <th>القيمة</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <a href="/Technical/Configs/Edit?key=1800"
                            >Engage Configs</a
                          >
                        </td>
                        <td style={{direction: "ltr"}}>EngageConfig</td>
                        <td style={{direction: "ltr", maxWidth: 500+"px"}}>
  
                          <pre
                            className="jsonview"
                            style={{
                              direction: "ltr",
                              textAlign: "left",
                              maxHeight: 500+"px",
                              overflow: "scroll",
                              whiteSpace: "pre-wrap"
                            }}
                          >
</pre
                          >
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a href="/Technical/Configs/Edit?key=1300"
                            >Forms Configs</a
                          >
                        </td>
                        <td style={{direction: "ltr"}}>FormsConfigs</td>
                        <td style={{direction: "ltr", maxWidth: 500+"px"}}>
                          <pre
                            className="jsonview"
                            style={{
                              direction: "ltr",
                              textAlign: "left",
                              maxHeight: 500+"px",
                              overflow: "scroll",
                              whiteSpace: "pre-wrap"
                            }}
                          >
</pre
                          >
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a href="/Technical/Configs/Edit?key=570"
                            >Email Configs</a
                          >
                        </td>
                        <td style={{direction: "ltr"}}>EmailsConfigs</td>
                        <td style={{direction: "ltr", maxWidth: 500+"px"}}>
                          <pre
                            className="jsonview"
                            style={{
                              direction: "ltr",
                              textAlign: "left",
                              maxHeight: 500+"px",
                              overflow: "scroll",
                              whiteSpace: "pre-wrap"
                            }}
                          >
</pre
                          >
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a href="/Technical/Configs/Edit?key=700"
                            >Misc Configs</a
                          >
                        </td>
                        <td style={{direction: "ltr"}}>MiscConfigs</td>
                        <td style={{direction: "ltr", maxWidth: 500+"px"}}>
                          <pre
                            className="jsonview"
                            style={{
                              direction: "ltr",
                              textAlign: "left",
                              maxHeight: 500+"px",
                              overflow: "scroll",
                              whiteSpace: "pre-wrap"
                            }}
                          >
</pre
                          >
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a href="/Technical/Configs/Edit?key=2800"
                            >VodExternalApi</a
                          >
                        </td>
                        <td style={{direction: "ltr"}}>VodExternalApi</td>
                        <td style={{direction: "ltr", maxWidth: 500+"px"}}>
                          <pre
                            className="jsonview"
                            style={{
                              direction: "ltr",
                              textAlign: "left",
                              maxHeight: 500+"px",
                              overflow: "scroll",
                              whiteSpace: "pre-wrap"
                            }}
                          >
</pre
                          >
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a href="/Technical/Configs/Edit?key=610"
                            >Media Config</a
                          >
                        </td>
                      <td style={{direction: "ltr"}}>MediaConfig</td>
                        <td style={{direction: "ltr", maxWidth: 500+"px"}}>
                          <pre
                            className="jsonview"
                            style={{
                              direction: "ltr",
                              textAlign: "left",
                              maxHeight: 500+"px",
                              overflow: "scroll",
                              whiteSpace: "pre-wrap"
                            }}
                          >
</pre
                          >
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a href="/Technical/Configs/Edit?key=640"
                            >Automation Configs</a
                          >
                        </td>
                        <td style={{direction: "ltr"}}>AutomationConfigs</td>
                        <td style={{direction: "ltr", maxWidth: 500+"px"}}>
                          <pre
                            className="jsonview"
                            style={{
                              direction: "ltr",
                              textAlign: "left",
                              maxHeight: 500+"px",
                              overflow: "scroll",
                              whiteSpace: "pre-wrap"
                            }}
                          >
</pre
                          >
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a href="/Technical/Configs/Edit?key=630">ads</a>
                        </td>
                        <td style={{direction: "ltr"}}>AdvancedAdsConfig</td>
                        <td style={{direction: "ltr", maxWidth: 500+"px"}}>
                          <pre
                            className="jsonview"
                            style={{
                              direction: "ltr",
                              textAlign: "left",
                              maxHeight: 500+"px",
                              overflow: "scroll",
                              whiteSpace: "pre-wrap"
                            }}
                          >
</pre
                          >
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a href="/Technical/Configs/Edit?key=3200"
                            >Social Configs</a
                          >
                        </td>
                        <td style={{direction: "ltr"}}>SocialConfigs</td>
                        <td style={{direction: "ltr", maxWidth: 500+"px"}}>
                          <pre
                            className="jsonview"
                            style={{
                              direction: "ltr",
                              textAlign: "left",
                              maxHeight: 500+"px",
                              overflow: "scroll",
                              whiteSpace: "pre-wrap"
                            }}
                          >
</pre
                          >
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a href="/Technical/Configs/Edit?key=5000"
                            >ChoueiriConfigs</a
                          >
                        </td>
                        <td style={{direction: "ltr"}}>ChoueiriConfigs</td>
                        <td style={{direction: "ltr", maxWidth: 500+"px"}}>
                          <pre
                            className="jsonview"
                            style={{
                              direction: "ltr",
                              textAlign: "left",
                              maxHeight: 500+"px",
                              overflow: "scroll",
                              whiteSpace: "pre-wrap"
                            }}
                          >
</pre
                          >
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a href="/Technical/Configs/Edit?key=4444"
                            >Cosmos Client Configuration</a
                          >
                        </td>
                        <td style={{direction: "ltr"}}>AuditConfig</td>
                        <td style={{direction: "ltr", maxWidth: 500+"px"}}>
                          <pre
                            className="jsonview"
                            style={{
                              direction: "ltr",
                              textAlign: "left",
                              maxHeight: 500+"px",
                              overflow: "scroll",
                              whiteSpace: "pre-wrap"
                            }}
                          >
</pre
                          >
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a href="/Technical/Configs/Edit?key=520">Cdn</a>
                        </td>
                        <td style={{direction: "ltr"}}>CdnConfig</td>
                        <td style={{direction: "ltr", maxWidth: 500+"px"}}>
                          <pre
                            className="jsonview"
                            style={{
                              direction: "ltr",
                              textAlign: "left",
                              maxHeight: 500+"px",
                              overflow: "scroll",
                              whiteSpace: "pre-wrap"
                            }}
                          >
</pre
                          >
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a href="/Technical/Configs/Edit?key=2000"
                            >Captcha Config</a
                          >
                        </td>
                         <td style={{direction: "ltr"}}>RecaptchaConfig</td>
                        <td style={{direction: "ltr", maxWidth: 500+"px"}}>
                          <pre
                            className="jsonview"
                            style={{
                              direction: "ltr",
                              textAlign: "left",
                              maxHeight: 500+"px",
                              overflow: "scroll",
                              whiteSpace: "pre-wrap"
                            }}
                          >
</pre
                          >
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a href="/Technical/Configs/Edit?key=2500"
                            >Player Configs</a
                          >
                        </td>
                        <td style={{direction: "ltr"}}>PlayerConfig</td>
                        <td style={{direction: "ltr", maxWidth: 500+"px"}}>
                          <pre
                            className="jsonview"
                            style={{
                              direction: "ltr",
                              textAlign: "left",
                              maxHeight: 500+"px",
                              overflow: "scroll",
                              whiteSpace: "pre-wrap"
                            }}
                          >
</pre
                          >
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a href="/Technical/Configs/Edit?key=2700"
                            >Account Configs</a
                          >
                        </td>
                         <td style={{direction: "ltr"}}>AccountConfig</td>
                        <td style={{direction: "ltr", maxWidth: 500+"px"}}>
                          <pre
                            className="jsonview"
                            style={{
                              direction: "ltr",
                              textAlign: "left",
                              maxHeight: 500+"px",
                              overflow: "scroll",
                              whiteSpace: "pre-wrap"
                            }}
                          >
</pre
                          >
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a href="/Technical/Configs/Edit?key=3300"
                            >Frame Configs</a
                          >
                        </td>
                       <td style={{direction: "ltr"}}>MediaFrameConfigs</td>
                        <td style={{direction: "ltr", maxWidth: 500+"px"}}>
                          <pre
                            className="jsonview"
                            style={{
                              direction: "ltr",
                              textAlign: "left",
                              maxHeight: 500+"px",
                              overflow: "scroll",
                              whiteSpace: "pre-wrap"
                            }}
                          >
</pre
                          >
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a href="/Technical/Configs/Edit?key=540"
                            >Organization</a
                          >
                        </td>
                         <td style={{direction: "ltr"}}>OrganizationInfo</td>
                        <td style={{direction: "ltr", maxWidth: 500+"px"}}>
                          <pre
                            className="jsonview"
                            style={{
                              direction: "ltr",
                              textAlign: "left",
                              maxHeight: 500+"px",
                              overflow: "scroll",
                              whiteSpace: "pre-wrap"
                            }}
                          >
</pre
                          >
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a href="/Technical/Configs/Edit?key=580"
                            >Analytics Config</a
                          >
                        </td>
                        <td style={{direction: "ltr"}}>AnalyticsConfig</td>
                        <td style={{direction: "ltr", maxWidth: 500+"px"}}>
                          <pre
                            className="jsonview"
                            style={{
                              direction: "ltr",
                              textAlign: "left",
                              maxHeight: 500+"px",
                              overflow: "scroll",
                              whiteSpace: "pre-wrap"
                            }}
                          >
</pre
                          >
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a href="/Technical/Configs/Edit?key=1000"
                            >Password Policy</a
                          >
                        </td>
                       <td style={{direction: "ltr"}}>PasswordPolicyConfig</td>
                        <td style={{direction: "ltr", maxWidth: 500+"px"}}>
                          <pre
                            className="jsonview"
                            style={{
                              direction: "ltr",
                              textAlign: "left",
                              maxHeight: 500+"px",
                              overflow: "scroll",
                              whiteSpace: "pre-wrap"
                            }}
                          >
</pre
                          >
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a href="/Technical/Configs/Edit?key=2300"
                            >Upload Configs</a
                          >
                        </td>
                         <td style={{direction: "ltr"}}>UploadConfigs</td>
                        <td style={{direction: "ltr", maxWidth: 500+"px"}}>
                          <pre
                            className="jsonview"
                            style={{
                              direction: "ltr",
                              textAlign: "left",
                              maxHeight: 500+"px",
                              overflow: "scroll",
                              whiteSpace: "pre-wrap"
                            }}
                          >
</pre
                          >
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
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
          <div id="cboxTopCenter"style={{float: "left"}}></div>
          <div id="cboxTopRight" style={{float: "left"}}></div>
        </div>
        <div style={{clear: "left"}}>
          <div id="cboxMiddleLeft" style={{float: "left"}}></div>
          <div id="cboxContent" style={{float: "left"}}>
            <div id="cboxTitle"style={{float: "left"}}></div>
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
        // inset: -999px auto auto 0px;
        border: 0+"px",
        padding: 0+"px",
        boxSizing: "content-box",
        overflowWrap: "break-word",
        overflow: "hidden",
        // transition: none 0s ease 0s;
        height: 0+"px" ,
        minHeight: 0+"px",
      }}
    ></textarea>
    <div className="daterangepicker dropdown-menu opensleft">
      <div className="calendar first left">
        <div className="calendar-date">
          <table className="table-condensed">
            <thead>
              <tr>
                <th className="prev available">
                  <i
                    className="fa fa-arrow-left icon icon-arrow-left glyphicon glyphicon-arrow-left"
                  ></i>
                </th>
                <th colspan="5" className="month">Aug 2022</th>
                <th className="next available">
                  <i
                    className="fa fa-arrow-right icon icon-arrow-right glyphicon glyphicon-arrow-right"
                  ></i>
                </th>
              </tr>
              <tr>
                <th>Su</th>
                <th>Mo</th>
                <th>Tu</th>
                <th>We</th>
                <th>Th</th>
                <th>Fr</th>
                <th>Sa</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="available off" data-title="r0c0">31</td>
                <td className="available" data-title="r0c1">1</td>
                <td className="available" data-title="r0c2">2</td>
                <td className="available" data-title="r0c3">3</td>
                <td className="available" data-title="r0c4">4</td>
                <td className="available" data-title="r0c5">5</td>
                <td className="available" data-title="r0c6">6</td>
              </tr>
              <tr>
                <td className="available" data-title="r1c0">7</td>
                <td className="available" data-title="r1c1">8</td>
                <td className="available" data-title="r1c2">9</td>
                <td className="available" data-title="r1c3">10</td>
                <td className="available" data-title="r1c4">11</td>
                <td className="available" data-title="r1c5">12</td>
                <td className="available" data-title="r1c6">13</td>
              </tr>
              <tr>
                <td className="available" data-title="r2c0">14</td>
                <td className="available" data-title="r2c1">15</td>
                <td className="available" data-title="r2c2">16</td>
                <td className="available" data-title="r2c3">17</td>
                <td className="available" data-title="r2c4">18</td>
                <td className="available" data-title="r2c5">19</td>
                <td className="available" data-title="r2c6">20</td>
              </tr>
              <tr>
                <td className="available" data-title="r3c0">21</td>
                <td className="available" data-title="r3c1">22</td>
                <td className="available" data-title="r3c2">23</td>
                <td className="available" data-title="r3c3">24</td>
                <td className="available" data-title="r3c4">25</td>
                <td className="available" data-title="r3c5">26</td>
                <td className="available" data-title="r3c6">27</td>
              </tr>
              <tr>
                <td className="available" data-title="r4c0">28</td>
                <td className="available" data-title="r4c1">29</td>
                <td className="available" data-title="r4c2">30</td>
                <td
                  className="available active start-date end-date"
                  data-title="r4c3"
                >
                  31
                </td>
                <td className="available off" data-title="r4c4">1</td>
                <td className="available off" data-title="r4c5">2</td>
                <td className="available off" data-title="r4c6">3</td>
              </tr>
              <tr>
                <td className="available off" data-title="r5c0">4</td>
                <td className="available off" data-title="r5c1">5</td>
                <td className="available off" data-title="r5c2">6</td>
                <td className="available off" data-title="r5c3">7</td>
                <td className="available off" data-title="r5c4">8</td>
                <td className="available off" data-title="r5c5">9</td>
                <td className="available off" data-title="r5c6">10</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="calendar second right">
        <div className="calendar-date">
          <table className="table-condensed">
            <thead>
              <tr>
                <th></th>
                <th colspan="5" className="month">Aug 2022</th>
                <th className="next available">
                  <i
                    className="fa fa-arrow-right icon icon-arrow-right glyphicon glyphicon-arrow-right"
                  ></i>
                </th>
              </tr>
              <tr>
                <th>Su</th>
                <th>Mo</th>
                <th>Tu</th>
                <th>We</th>
                <th>Th</th>
                <th>Fr</th>
                <th>Sa</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="off disabled" data-title="r0c0">31</td>
                <td className="off disabled" data-title="r0c1">1</td>
                <td className="off disabled" data-title="r0c2">2</td>
                <td className="off disabled" data-title="r0c3">3</td>
                <td className="off disabled" data-title="r0c4">4</td>
                <td className="off disabled" data-title="r0c5">5</td>
                <td className="off disabled" data-title="r0c6">6</td>
              </tr>
              <tr>
                <td className="off disabled" data-title="r1c0">7</td>
                <td className="off disabled" data-title="r1c1">8</td>
                <td className="off disabled" data-title="r1c2">9</td>
                <td className="off disabled" data-title="r1c3">10</td>
                <td className="off disabled" data-title="r1c4">11</td>
                <td className="off disabled" data-title="r1c5">12</td>
                <td className="off disabled" data-title="r1c6">13</td>
              </tr>
              <tr>
                <td className="off disabled" data-title="r2c0">14</td>
                <td className="off disabled" data-title="r2c1">15</td>
                <td className="off disabled" data-title="r2c2">16</td>
                <td className="off disabled" data-title="r2c3">17</td>
                <td className="off disabled" data-title="r2c4">18</td>
                <td className="off disabled" data-title="r2c5">19</td>
                <td className="off disabled" data-title="r2c6">20</td>
              </tr>
              <tr>
                <td className="off disabled" data-title="r3c0">21</td>
                <td className="off disabled" data-title="r3c1">22</td>
                <td className="off disabled" data-title="r3c2">23</td>
                <td className="off disabled" data-title="r3c3">24</td>
                <td className="off disabled" data-title="r3c4">25</td>
                <td className="off disabled" data-title="r3c5">26</td>
                <td className="off disabled" data-title="r3c6">27</td>
              </tr>
              <tr>
                <td className="off disabled" data-title="r4c0">28</td>
                <td className="off disabled" data-title="r4c1">29</td>
                <td className="off disabled" data-title="r4c2">30</td>
                <td
                  className="available active start-date end-date"
                  data-title="r4c3"
                >
                  31
                </td>
                <td className="available off" data-title="r4c4">1</td>
                <td className="available off" data-title="r4c5">2</td>
                <td className="available off" data-title="r4c6">3</td>
              </tr>
              <tr>
                <td className="available off" data-title="r5c0">4</td>
                <td className="available off" data-title="r5c1">5</td>
                <td className="available off" data-title="r5c2">6</td>
                <td className="available off" data-title="r5c3">7</td>
                <td className="available off" data-title="r5c4">8</td>
                <td className="available off" data-title="r5c5">9</td>
                <td className="available off" data-title="r5c6">10</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="ranges">
        <ul>
          <li className="active">اليوم</li>
          <li>البارحة</li>
          <li>من سبعة أيام</li>
          <li>من ثلاثين يوماً</li>
          <li>هذا الشهر</li>
          <li>الشهر الماضي</li>
          <li>منذ سنة</li>
          <li>Custom Range</li>
        </ul>
        <div className="range_inputs">
          <div className="daterangepicker_start_input">
            <label for="daterangepicker_start">From</label
            ><input
              className="input-mini"
              type="text"
              name="daterangepicker_start"
              value=""
            />
          </div>
          <div className="daterangepicker_end_input">
            <label for="daterangepicker_end">To</label
            ><input
              className="input-mini"
              type="text"
              name="daterangepicker_end"
              value=""
            />
          </div>
          <button className="applyBtn btn btn-small btn-sm btn-new success">
            Apply</button
          >&nbsp;<button className="cancelBtn btn btn-small btn-sm btn-new default">
            Cancel
          </button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Configs
