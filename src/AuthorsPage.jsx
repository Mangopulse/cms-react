
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
const AuthorsPage = () => {

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
              <Link 
              to="/"
              onClick={closeMobileMenu} > 
              <i className="ace-icon fa fa-home home-icon"> </i>
              الرئيسية 
              </Link>
            </li>
            <li>
              <Link
              to="/authorspage"
              onClick={closeMobileMenu} >
              Author 
              </Link>
            </li>
          </ul>

          <div
            id="page-data"
            data-url="https://as-mangopulse-admin.azurewebsites.net/Posts/Index?type=author"
            data-title="Author"
          ></div>
        </div>

        <div className="page-content">
          <div className="page-header">
            <div className="quick-create">
              <a href="/Posts/Create?type=author" title=""
                ><i className="fa fa-plus"></i
              ></a>
            </div>
            <h1>Author</h1>
            <div id="bulk-actions">
              <a data-href="/Posts/MultiplePublish" className="btn btn-new success"
                ><i className="fa fa-check"></i>نشر</a
              >
              <a
                data-href="/Posts/MultipleUnPublish"
                className="btn btn-new warning"
                ><i className="fa fa-times"></i>إلغاء نشر</a
              >
              <a data-href="/Posts/MultipleDelete" className="btn btn-new danger"
                ><i className="fa fa-trash"></i>حذف</a
              >
            </div>
            <div className="page-operations">
              <a
                href="/Publisher?type=author"
                className="btn btn-new link btn-publihser-author"
                ><i className="ace-icon fa fa-sliders-h"></i> الناشر
              </a>
              <a
                href="/Posts/Tabs?type=author"
                className="btn btn-new link btn-tabs-author"
                ><i className="ace-icon fa fa-sitemap"></i> تقسيم
              </a>
              <div
                data-toggle="buttons"
                className="btn-group btn-overlap view-switcher"
              >
                <label className="btn btn-new active" title="لائحة">
                  <input type="radio" value="list" checked="checked" />
                  <i className="icon-only ace-icon fa fa-list"></i>
                </label>

                <label className="btn btn-new" title="عرض جدول">
                  <input type="radio" value="grid" />
                  <i className="icon-only ace-icon fa fa-th-large"></i>
                </label>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <div
                className="data-table list"
                data-size="20"
                data-moreurl="/Posts?MainRequest=False&amp;type=author"
              >
                <table className="table">
                  <thead>
                    <tr>
                      <th>
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="check-all"
                          /><label
                            className="custom-control-label"
                            for="check-all"
                          ></label>
                        </div>
                      </th>
                      <th>عنوان</th>

                      <th>الحالة</th>
                      <th></th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr className="clickable-row" data-modelid="216">
                      <td>
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="check-row-0"
                          /><label
                            className="custom-control-label"
                            for="check-row-0"
                          ></label>
                        </div>
                      </td>
                      <td className="cell-main">
                        <a href="/Posts/author/Preview/216">
                          <img
                            data-src=""
                            src="/content/images/placeholder.gif"
                            className="placeholder"
                          />
                        </a>
                        <div className="cell-data">
                          <a href="/Posts/author/Preview/216" className="cell-title"
                            >Author
                          </a>
                          <div className="text posts-users table-metas">
                            <div className="posts-mod entry">
                              آخر تعديل بواسطة mangopulseTester في 21 July 13:37
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
                          ><i className="ace-icon fa fa-bolt bigger-120"></i>
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
                    <tr className="clickable-row" data-modelid="59">
                      <td>
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="check-row-1"
                          /><label
                            className="custom-control-label"
                            for="check-row-1"
                          ></label>
                        </div>
                      </td>
                      <td className="cell-main">
                        <a href="/Posts/author/Preview/59">
                          <img
                            data-src="https://as-mangopulse-media.azurewebsites.net/store/archive/image/2022/7/1/7922cb26-d061-43e8-ac90-8258ab12d97b.jpg"
                            src="https://as-mangopulse-media.azurewebsites.net/store/archive/image/2022/7/1/7922cb26-d061-43e8-ac90-8258ab12d97b.jpg?preset=table-thumb"
                            className="placeholder"
                          />
                        </a>
                        <div className="cell-data">
                          <a href="/Posts/author/Preview/59" className="cell-title"
                            >Clark Jones
                          </a>
                          <div className="text posts-users table-metas">
                            <div className="posts-mod entry">
                              آخر تعديل بواسطة techsupport في 1 July 06:40
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
                          ><i className="ace-icon fa fa-check bigger-120"></i>
                          Published</span
                        >
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
                            ><i className="ace-icon fa fa-share-alt"></i> نشر
                          </a>
                        </div>
                      </td>
                    </tr>
                    <tr className="clickable-row" data-modelid="58">
                      <td>
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="check-row-2"
                          /><label
                            className="custom-control-label"
                            for="check-row-2"
                          ></label>
                        </div>
                      </td>
                      <td className="cell-main">
                        <a href="/Posts/author/Preview/58">
                          <img
                            data-src="https://as-mangopulse-media.azurewebsites.net/store/archive/image/2022/7/1/4bd0ecc2-0c46-4648-b0f0-1f13249a33c9.jpg"
                            src="https://as-mangopulse-media.azurewebsites.net/store/archive/image/2022/7/1/4bd0ecc2-0c46-4648-b0f0-1f13249a33c9.jpg?preset=table-thumb"
                            className="placeholder"
                          />
                        </a>
                        <div className="cell-data">
                          <a href="/Posts/author/Preview/58" className="cell-title"
                            >John Smith
                          </a>
                          <div className="text posts-users table-metas">
                            <div className="posts-mod entry">
                              آخر تعديل بواسطة techsupport في 1 July 06:40
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
                          ><i className="ace-icon fa fa-check bigger-120"></i>
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
                            ><i className="ace-icon fa fa-share-alt"></i> نشر
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
                    <span className="input-group-addon" data-bind="click: previous"
                      ><i className="fa fa-chevron-right"></i></span
                    ><input
                      type="text"
                      className="form-control page-input"
                      data-bind="value: fetchingPage, event:{ change: changepage}"
                    /><span className="input-group-addon" data-bind="click: next"
                      ><i className="fa fa-chevron-left"></i
                    ></span>
                  </div>
                </div>
                <span className="clearfix"></span>
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
        display: "none"
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
  <div
    className="tox tox-silver-sink tox-tinymce-aux"
    style={{position: "relative"}}
  ></div>
  <div
    className="tox tox-silver-sink tox-tinymce-aux"
    style={{position: "relative"}}
  ></div>
  </div>
  )
}

export default AuthorsPage
