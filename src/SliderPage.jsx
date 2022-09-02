
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import image1 from "../components/images/dxm.png";
import image7 from "../components/images/4560ec65-9dcf-4914-ae7d-c082e6b7c44d.jpg?width=250"
import image8 from "../components/images/44b612ef-a74d-4809-961b-91e41c8e1a2a.jpg?width=250"
import image9 from "../components/images/1c77ef95-5271-4cfe-aa4a-f4c38ec7aafb.jpg?width=250"

const SliderPage = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);
  return (
    <div className="no-skin rtl make-rtl">
      <div className="navbar fixed-top" id="navbar">
        <div
          className="navbar-container"
          id="navbar-container"
          style={{ textAlign: "center" }}
        >
          <span
            id="headerloader"
            className="headericon"
            style={{
              display: " none",
              height: 33 + "px",
              marginTop: 7 + "px",
              width: 33 + "px",
            }}
          >
            <i className=" fa fa-spinner fa-spin bigger-250 white"></i>
          </span>

          <div className="navbar-header product-wrapper pull-right">
            <a href="/">
              <img
                src={image1}
                alt="Experience Manager"
                className="product-logo"
              />
            </a>
          </div>

          <div
            className="navbar-buttons navbar-header pull-left "
            role="navigation"
          >
            <ul className="nav ace-nav">
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
                        src="images/question.png"
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
                      <img src="images/logo.png" alt="1234" title="1234" />
                      <h5>1234</h5>
                    </a>
                  </li>
                  <li>
                    <a
                      href="/Technical/Subscription/Apply/3190d3cd-68e6-4205-be41-8c9ad8467941"
                      className="clearfix notajax"
                    >
                      <img src="images/logo.png" alt="abc" title="abc" />
                      <h5>abc</h5>
                    </a>
                  </li>
                  <li>
                    <a
                      href="/Technical/Subscription/Apply/be4a949d-96fe-47cc-9aa0-d389e2424010"
                      className="clearfix notajax"
                    >
                      <img
                        src="images/logo.png"
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
                  <li className="lang ">
                    <a
                      href="/Account/ChangeLanguage?language=en"
                      className="clearfix notajax"
                    >
                      English
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a data-toggle="dropdown" className="dropdown-toggle" href="#">
                  <i className="fa fa-th"></i>
                </a>
                <ul className="dropdown-menu products-dropdown dropdown-menu-left dropdown-navbar">
                  <li className=" active">
                    <a href="/" className="notajax">
                      <img src="images/dxm.png" alt="Experience Manager" />
                    </a>
                  </li>
                  <li className=" ">
                    <a href="/Admin/AdminHome" className="notajax">
                      <img src="images/admin.png" alt="Admin Panel" />
                    </a>
                  </li>
                  <li className=" ">
                    <a href="/Social/SocialHome" className="notajax">
                      <img src="images/social.png" alt="Social" />
                    </a>
                  </li>
                  <li className=" ">
                    <a href="/Community/CommunityHome" className="notajax">
                      <img src="images/community.png" alt="Community" />
                    </a>
                  </li>
                  <li className=" ">
                    <a href="/Assets/AssetsHome" className="notajax">
                      <img src="images/assets.png" alt="Assets Manager" />
                    </a>
                  </li>
                  <li className="disabled ">
                    <a>
                      <img src="images/analytics.png" alt="Analytics" />
                    </a>
                  </li>
                  <li className="disabled ">
                    <a>
                      <img src="images/flix.png" alt="Flix" />
                    </a>
                  </li>
                  <li className="disabled ">
                    <a>
                      <img src="images/audience.png" alt="Audience Manager" />
                    </a>
                  </li>
                  <li className="disabled ">
                    <a>
                      <img src="images/campaign.png" alt="Campaign" />
                    </a>
                  </li>
                  <li className="disabled ">
                    <a>
                      <img src="images/target.png" alt="Target" />
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>{" "}
      <div b-fjwotxpclx="" className="main-container" id="main-container">
        <div className="sidebar " id="sidebar">
          <ul className="nav nav-list rtl">
          <li className="menuitem ">
              <Link 
              to="/sliderpage"
              onClick={closeMobileMenu} >
              <i className="menu-icon fas fa-images"></i>
              Slider
            </Link>
            </li>
            <li className="menuitem ">
             <Link
             to="/articlespage"
             onClick={closeMobileMenu} >
             <i className="menu-icon fa fa-far fa-newspaper"></i>
           Articles
            </Link>
            </li>
            <li className="menuitem ">
                <Link 
                to="/videospage"
                onClick={closeMobileMenu}>
                <i className="menu-icon fas fa-video"></i>
                Videos
                </Link>
            </li>
            <li className="menuitem ">
                <Link 
                to="/authorspage"
                onClick={closeMobileMenu}>
                <i className="menu-icon fas fa-user-edit "></i>
                Author
                </Link>

            </li>
          </ul>
          <div
            className="sidebar-toggle sidebar-collapse"
            id="sidebar-collapse"
          >
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
               <Link 
              to="/"
              onClick={closeMobileMenu} >
              <i className="ace-icon fa fa-home home-icon"></i>
              الرئيسية
            </Link>
                </li>
                <li className="active">مكونات</li>
                <li className="active">Slider</li>
              </ul>

              <div
                id="page-data"
                data-url="https://as-mangopulse-admin.azurewebsites.net/Publisher/Widget?id=c207053b-f61f-11ec-8c71-f079596794cc"
                data-title="مكونات - Slider"
              ></div>
            </div>
            <form action="/Publisher/SaveWidget" id="widgetform" method="post">
              {" "}
              <div className="page-content">
                <div className="page-header">
                  <h1>Slider</h1>
                  <div className="page-operations">
                    <button type="submit" className="btn btn-new success">
                      <i className="ace-icon fa fa-save "></i> حفظ{" "}
                    </button>
                    <a
                      href="/Manage/Widgets/FullEdit/c207053b-f61f-11ec-8c71-f079596794cc"
                      className="btn btn-new info"
                    >
                      <i className="ace-icon fa fa-edit"></i> تعديل{" "}
                    </a>{" "}
                    <a
                      href="/Widgets/UnPublish/c207053b-f61f-11ec-8c71-f079596794cc"
                      className="btn btn-new warning"
                    >
                      <i className="ace-icon fa fa-times"></i> إلغاء نشر{" "}
                    </a>{" "}
                  </div>
                </div>

                <div className="row ">
                  <div className="col-12">
                    <div className="form-content">
                      <div className="widget-ids">
                        <a
                          className="btn btn-new purple"
                          data-loadtype="popup"
                          data-bind="visible: showBrowseButton()"
                          href="/Posts/Browse?AllowedCount=3&amp;parentHandler=window.back.pages.widgetmodule&amp;Types=article"
                          style={{ display: "none" }}
                        >
                          <i className="fa fa-search"></i>
                          إبحث
                        </a>
                        <div
                          data-bind="sortable: posts"
                          className="ui-sortable ko_container"
                        >
                          <div className="profile-activity clearfix">
                            <div className="make-rtl">
                              <img
                                className="pull-right"
                                style={{
                                  borderRadius: 0,
                                  width: 250 + "px",
                                  maxWidth: 250 + "px",
                                  height: "auto",
                                }}
                                data-bind="attr{src: CoverImage ? '//' + addParameter(CoverImage.MediaUrl, 'width', '250') : JS_CONFIG.ImageNotFound + '?width=250'}"
                                src={image7}
                              />
                              <div
                                className="boldclassName"
                                data-bind="text: Title"
                              >
                                3 Ways to make your business presentation more
                                relatable
                              </div>
                              <div data-bind="text: Summary">
                                Nemo enim ipsam voluptatem quia voluptas sit
                                aspernatur aut odit aut fugit, sed quia
                                consequuntur magni dolores.
                              </div>
                              <div
                                style={{ textAlign: "right", direction: "rtl" }}
                              >
                                <span>
                                  <b>تمت إضافتة:</b>{" "}
                                  <span data-bind="text: CreationDate">
                                    2022-07-01T07:02:36.37
                                  </span>{" "}
                                  -{" "}
                                  <span data-bind="text: getUserById(CreatedBy)">
                                    --
                                  </span>
                                </span>
                                <span>
                                  {" "}
                                  &nbsp;|&nbsp;<b>تعديل:</b>{" "}
                                  <span data-bind="text: LastModified">
                                    2022-08-29T09:30:42.71
                                  </span>{" "}
                                  -{" "}
                                  <span data-bind="text: getUserById(ModifiedBy)">
                                    --
                                  </span>
                                </span>

                                <span>
                                  {" "}
                                  &nbsp;|&nbsp;<b>التاريخ:</b>{" "}
                                  <span data-bind="text: PostDate">
                                    2022-07-01T07:09:19.51
                                  </span>
                                </span>
                              </div>
                              <span className="make-rtl">
                                <span data-bind="html: StatusLabel">
                                  <span className="label label-success">
                                    <i className="ace-icon fa fa-check bigger-120"></i>{" "}
                                    منشور
                                  </span>
                                </span>
                              </span>
                            </div>
                            <div className="tools action-buttons">
                              <Link
                                to="/slidereyeclick"
                                className="purple"
                               
                              >
                                <i className="ace-icon fa fa-eye bigger-125"></i>
                              </Link>
                              <a
                                href="#"
                                className="red"
                                data-bind="click:$parent.removeResult"
                              >
                                <i className="ace-icon fa fa-times bigger-125"></i>
                              </a>
                            </div>
                          </div>
                          <div className="profile-activity clearfix">
                            <div>
                              <img
                                className="pull-right"
                                style={{
                                  borderRadius: 0,
                                  width: 250 + "px",
                                  maxWidth: 250 + "px",
                                  height: "auto",
                                }}
                                data-bind="attr{src: CoverImage ? '//' + addParameter(CoverImage.MediaUrl, 'width', '250') : JS_CONFIG.ImageNotFound + '?width=250'}"
                                src={image8}
                              />
                              <div
                                className="boldclassName"
                                data-bind="text: Title"
                              >
                                NASA seeks to build a quieter supersonic plane
                                for passenger flight
                              </div>
                              <div data-bind="text: Summary">
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore.
                              </div>
                              <div
                                style={{ textAlign: "right", direction: "rtl" }}
                              >
                                <span>
                                  <b>تمت إضافتة:</b>{" "}
                                  <span data-bind="text: CreationDate">
                                    2022-07-06T11:58:18.453
                                  </span>{" "}
                                  -{" "}
                                  <span data-bind="text: getUserById(CreatedBy)">
                                    --
                                  </span>
                                </span>
                                <span>
                                  {" "}
                                  &nbsp;|&nbsp;<b>تعديل:</b>{" "}
                                  <span data-bind="text: LastModified">
                                    2022-07-06T12:01:42.46
                                  </span>{" "}
                                  -{" "}
                                  <span data-bind="text: getUserById(ModifiedBy)">
                                    --
                                  </span>
                                </span>

                                <span>
                                  {" "}
                                  &nbsp;|&nbsp;<b>التاريخ:</b>{" "}
                                  <span data-bind="text: PostDate">
                                    2022-07-06T12:01:41.89
                                  </span>
                                </span>
                              </div>
                              <span>
                                <span data-bind="html: StatusLabel">
                                  <span className="label label-success">
                                    <i className="ace-icon fa fa-check bigger-120"></i>{" "}
                                    منشور
                                  </span>
                                </span>
                              </span>
                            </div>
                            <div className="tools action-buttons">
                            <Link
                                to="/slidereyeclick"
                                className="purple"
                               
                              >
                                <i className="ace-icon fa fa-eye bigger-125"></i>
                              </Link>
                              <a
                                href="#"
                                className="red"
                                data-bind="click:$parent.removeResult"
                              >
                                <i className="ace-icon fa fa-times bigger-125"></i>
                              </a>
                            </div>
                          </div>
                          <div className="profile-activity clearfix">
                            <div>
                              <img
                                className="pull-right"
                                style={{
                                  borderRadius: 0,
                                  width: 250 + "px",
                                  maxWidth: 250 + "px",
                                  height: "auto",
                                }}
                                data-bind="attr{src: CoverImage ? '//' + addParameter(CoverImage.MediaUrl, 'width', '250') : JS_CONFIG.ImageNotFound + '?width=250'}"
                                src={image9}
                              />
                              <div
                                className="boldclassName"
                                data-bind="text: Title"
                              >
                                Mobile Google CEO Promises 19
                                Daydream-compatible phones
                              </div>
                              <div data-bind="text: Summary">
                                Neque porro quisquam est, qui dolorem ipsum quia
                                dolor sit amet, consectetur, adipisci velit, sed
                                quia non numquam eius.
                              </div>
                              <div
                                style={{ textAlign: "right", direction: "rtl" }}
                              >
                                <span>
                                  <b>تمت إضافتة:</b>{" "}
                                  <span data-bind="text: CreationDate">
                                    2022-07-01T07:07:27.13
                                  </span>{" "}
                                  -{" "}
                                  <span data-bind="text: getUserById(CreatedBy)">
                                    --
                                  </span>
                                </span>
                                <span>
                                  {" "}
                                  &nbsp;|&nbsp;<b>تعديل:</b>{" "}
                                  <span data-bind="text: LastModified">
                                    2022-07-20T10:19:09.56
                                  </span>{" "}
                                  -{" "}
                                  <span data-bind="text: getUserById(ModifiedBy)">
                                    --
                                  </span>
                                </span>

                                <span>
                                  {" "}
                                  &nbsp;|&nbsp;<b>التاريخ:</b>{" "}
                                  <span data-bind="text: PostDate">
                                    2022-07-01T07:08:00
                                  </span>
                                </span>
                              </div>
                              <span>
                                <span data-bind="html: StatusLabel">
                                  <span className="label label-success">
                                    <i className="ace-icon fa fa-check bigger-120"></i>{" "}
                                    منشور
                                  </span>
                                </span>
                              </span>
                            </div>
                            <div className="tools action-buttons">
                            <Link
                                to="/slidereyeclick"
                                className="purple"
                               
                              >
                                <i className="ace-icon fa fa-eye bigger-125"></i>
                              </Link>
                              <a
                                href="#"
                                className="red"
                                data-bind="click:$parent.removeResult"
                              >
                                <i className="ace-icon fa fa-times bigger-125"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                        <input
                          type="hidden"
                          name="Widget.DataSource.DataSourceType"
                          id="DataSourceType"
                          value="130"
                        />
                      </div>{" "}
                      <input
                        type="hidden"
                        name="WidgetId"
                        id="WidgetId"
                        value="c207053b-f61f-11ec-8c71-f079596794cc"
                      />
                      <input type="hidden" name="PostId" id="PostId" value="" />
                      <input
                        type="hidden"
                        name="WidgetCode"
                        id="WidgetCode"
                        value=""
                      />
                      <input type="hidden" name="Size" id="Size" value="3" />
                    </div>
                  </div>
                </div>
              </div>
              <input
                name="__RequestVerificationToken"
                type="hidden"
                value="CfDJ8EZk2NX_xnBCkG62YYnKRTErfOi_jdOBfBHV3LLc9FrHGX8oxhhXmEkbnqJRp28iWwM2uuIiGeKBOPP1haazODrtz53epg15PQRPq7ZojF8uYy9rWv6QF7pQBsUymovzbF7f65RORmmt-RTX8Wfmb6UJOUER7mWl0o-WU2eO5OPx9bA7zIMZ4VWSqH7AzwOkEg"
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
        <div
          b-fjwotxpclx=""
          className="hidden-content"
          style={{ display: "none" }}
        ></div>
        <div className="footer">
          <div className="footer-inner">
            <div className="footer-content">
              <span className="bigger-120">
                <span className="blue bold">© </span>
              </span>
            </div>
          </div>
        </div>
        <div b-fjwotxpclx="" id="busy-holder" style={{ display: "none" }}>
          <div
            b-fjwotxpclx=""
            id="busy"
            style={{ top: 260.5 + "px", left: 619 + "px" }}
          >
            <img
              b-fjwotxpclx=""
              src="//admango.cdn.mangomolo.com/analytics/mangopulse/images/loader.gif"
            />
          </div>
        </div>
      </div>
      <div
        b-fjwotxpclx=""
        id="message-modal"
        className="modal fade"
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
              <span b-fjwotxpclx="" aria-hidden="true">
                ×
              </span>
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
              <span b-fjwotxpclx="" aria-hidden="true">
                ×
              </span>
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
              <span b-fjwotxpclx="" aria-hidden="true">
                ×
              </span>
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
      <div id="cboxOverlay" style={{ display: "none" }}></div>
      <div
        id="colorbox"
        className=""
        role="dialog"
        tabIndex="-1"
        style={{ display: "none" }}
      >
        <div id="cboxWrapper">
          <div>
            <div id="cboxTopLeft" style={{ float: "left" }}></div>
            <div id="cboxTopCenter" style={{ float: "left" }}></div>
            <div id="cboxTopRight" style={{ float: "left" }}></div>
          </div>
          <div style={{ clear: "left" }}>
            <div id="cboxMiddleLeft" style={{ float: "left" }}></div>
            <div id="cboxContent" style={{ float: "left" }}>
              <div id="cboxTitle" style={{ float: "left" }}></div>
              <div id="cboxCurrent" style={{ float: "left" }}></div>
              <button type="button" id="cboxPrevious"></button>
              <button type="button" id="cboxNext"></button>
              <button id="cboxSlideshow"></button>
              <div id="cboxLoadingOverlay" style={{ float: "left" }}></div>
              <div id="cboxLoadingGraphic" style={{ float: "left" }}></div>
            </div>
            <div id="cboxMiddleRight" style={{ float: "left" }}></div>
          </div>
          <div style={{ clear: "left" }}>
            <div id="cboxBottomLeft" style={{ float: "left" }}></div>
            <div id="cboxBottomCenter" style={{ float: "left" }}></div>
            <div id="cboxBottomRight" style={{ float: "left" }}></div>
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
          /*inset: "-999px auto auto 0px",*/ border: 0 + "px",
          padding: 0 + "px",
          boxSizing: "content-box",
          overflowWrap: "break-word",
          overflow: "hidden",
          transition: "none 0s ease 0s",
          height: 0 + "px",
          minHeight: 0 + "px",
        }}
      ></textarea>
    </div>
  );
};

export default SliderPage;
