import React from 'react'
import {Link} from "react-router-dom"
const JadwalArticles = () => {
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
        <li className="menuitem">
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
              <a href="/Posts?type=article"> Article </a>
            </li>
          </ul>

          <div
            id="page-data"
            data-url="https://as-mangopulse-admin.azurewebsites.net/Posts?type=article"
            data-title="Article"
          ></div>
        </div>

        <div className="page-content">
          <div className="page-header">
            <div className="quick-create">
              <a href="/Posts/Create?type=article" title=""
                ><i className="fa fa-plus"></i
              ></a>
            </div>
            <h1>Article</h1>
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
            <Link 
    to="/AlnasherArticles" 
    className="btn btn-new link btn-publihser-article">
    <i className="ace-icon fa fa-sliders-h"></i>
     الناشر </Link> 
              <Link 
     to="/TakseemArticles" 
     className="btn btn-new link btn-tabs-article">
        <i className="ace-icon fa fa-sitemap"></i>
         تقسيم 
         </Link>
              <div
                data-toggle="buttons"
                className="btn-group btn-overlap view-switcher"
              >
                <label className="btn btn-new" title="لائحة">
                  <input type="radio" value="list" checked="checked" />
                  <i className="icon-only ace-icon fa fa-list"></i>
                </label>
                <Link
    to="/JadwalArticles" 
    className="btn btn-new" 
    title="عرض جدول">
        <input type="radio" value="grid" />
        <i className="icon-only ace-icon fa fa-th-large"></i>
    </Link>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <div
                className="data-table grid"
                data-size="20"
                data-moreurl="/Posts?MainRequest=False&amp;type=article"
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
                      <th className="cell-info-main">Category</th>
                      <th className="hidden-480">Author</th>

                      <th>الحالة</th>
                      <th></th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr className="clickable-row" data-modelid="1231">
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
                        <a href="/Posts/article/Preview/1231">
                          <img
                            data-src="https://as-mangopulse-media.azurewebsites.net/store/archive/image/2022/8/29/d5778652-4437-401b-b194-1101940e2e01.jpg"
                            src="https://as-mangopulse-media.azurewebsites.net/store/archive/image/2022/8/29/d5778652-4437-401b-b194-1101940e2e01.jpg?preset=table-thumb"
                            className="placeholder"
                          />
                        </a>
                        <div className="cell-data">
                          <a
                            href="/Posts/article/Preview/1231"
                            className="cell-title"
                            >1news1
                          </a>
                          <div className="text posts-users table-metas">
                            <div className="posts-mod entry">29 Aug 12:45</div>
                            <div className="posts-mod entry">
                              آخر تعديل بواسطة techsupport في 29 Aug 12:45
                            </div>

                            <span className="clearfix"></span>
                          </div>
                          <div className="text posts-media">
                            <a
                              href="https://as-mangopulse-front.azurewebsites.net/article/1231/news12"
                              className="notajax"
                              target="_blank"
                              ><i className="fa fa-external-link-alt"></i
                            ></a>
                            <a
                              href="/Assets/Edit/Media/0f4bf8d2-2773-11ed-a81d-000d3aa9ccac?type=image"
                            >
                              <i
                                className="purple fa fa-file-image"
                                title="cover (Image)"
                              ></i>
                            </a>
                            <a
                              href="/Assets/Edit/Media/a2025d5c-22d5-11ed-a81d-000d3aa9ccac?type=image"
                            >
                              <i
                                className="purple fa fa-file-image"
                                title="longCover (Image)"
                              ></i>
                            </a>
                          </div>
                        </div>
                      </td>
                      <td className="cell-info-main"></td>
                      <td className="hidden-480 cell-info"></td>

                      <td className="cell-status">
                        <span className="label label-success"
                          ><i className="ace-icon fa fa-check bigger-120"></i>
                          Published</span
                        >
                      </td>
                      <td className="cell-actions">
                        <div className="action-buttons">
                          <a
                            href="/Posts/article/Edit/1231"
                            className="btn btn-new info"
                            ><i className="ace-icon fa fa-edit"></i> تعديل
                          </a>

                          <a
                            href="/Social/Publish/Share?postid=345e8972-2798-11ed-8c88-f079596794cc"
                            className="btn btn-new pink"
                            ><i className="ace-icon fa fa-share-alt"></i> نشر
                          </a>
                        </div>
                      </td>
                    </tr>
                    <tr className="clickable-row" data-modelid="1217">
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
                        <a href="/Posts/article/Preview/1217">
                          <img
                            data-src="https://as-mangopulse-media.azurewebsites.net/store/archive/image/2022/8/29/d5778652-4437-401b-b194-1101940e2e01.jpg"
                            src="https://as-mangopulse-media.azurewebsites.net/store/archive/image/2022/8/29/d5778652-4437-401b-b194-1101940e2e01.jpg?preset=table-thumb"
                            className="placeholder"
                          />
                        </a>
                        <div className="cell-data">
                          <a
                            href="/Posts/article/Preview/1217"
                            className="cell-title"
                            >test
                          </a>
                          <div className="text posts-users table-metas">
                            <div className="posts-mod entry">
                              آخر تعديل بواسطة techsupport في 29 Aug 08:20
                            </div>

                            <span className="clearfix"></span>
                          </div>
                          <div className="text posts-media">
                            <a
                              href="https://as-mangopulse-front.azurewebsites.net/Preview/1217"
                              className="notajax"
                              target="_blank"
                              ><i className="fa fa-external-link-alt"></i
                            ></a>
                            <a
                              href="/Assets/Edit/Media/0f4bf8d2-2773-11ed-a81d-000d3aa9ccac?type=image"
                            >
                              <i
                                className="purple fa fa-file-image"
                                title="cover (Image)"
                              ></i>
                            </a>
                            <a
                              href="/Assets/Edit/Media/2059ba51-2773-11ed-a81d-000d3aa9ccac?type=image"
                            >
                              <i
                                className="purple fa fa-file-image"
                                title="longCover (Image)"
                              ></i>
                            </a>
                          </div>
                        </div>
                      </td>
                      <td className="cell-info-main"></td>
                      <td className="hidden-480 cell-info"></td>

                      <td className="cell-status">
                        <span className="label label-info"
                          ><i className="ace-icon fa fa-bolt bigger-120"></i>
                          New</span
                        >
                      </td>
                      <td className="cell-actions">
                        <div className="action-buttons">
                          <a
                            href="/Posts/article/Edit/1217"
                            className="btn btn-new info"
                            ><i className="ace-icon fa fa-edit"></i> تعديل
                          </a>
                        </div>
                      </td>
                    </tr>
                    <tr className="clickable-row" data-modelid="1055">
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
                        <a href="/Posts/article/Preview/1055">
                          <img
                            data-src="https://as-mangopulse-media.azurewebsites.net/store/archive/image/2022/8/8/1d229990-2ebf-4d4b-a8ee-dd350b39a812.png"
                            src="https://as-mangopulse-media.azurewebsites.net/store/archive/image/2022/8/8/1d229990-2ebf-4d4b-a8ee-dd350b39a812.png?preset=table-thumb"
                            className="placeholder"
                          />
                        </a>
                        <div className="cell-data">
                          <a
                            href="/Posts/article/Preview/1055"
                            className="cell-title"
                            >article 2
                          </a>
                          <div className="text posts-users table-metas">
                            <div className="posts-mod entry">8 Aug 12:11</div>
                            <div className="posts-mod entry">
                              آخر تعديل بواسطة techsupport في 29 Aug 09:59
                            </div>

                            <span className="clearfix"></span>
                          </div>
                          <div className="text posts-media">
                            <a
                              href="https://as-mangopulse-front.azurewebsites.net/article/1055/article-2"
                              className="notajax"
                              target="_blank"
                              ><i className="fa fa-external-link-alt"></i
                            ></a>
                            <a
                              href="/Assets/Edit/Media/2a902f28-1713-11ed-a81d-000d3aa9ccac?type=image"
                            >
                              <i
                                className="purple fa fa-file-image"
                                title="cover (Image)"
                              ></i>
                            </a>
                            <a
                              href="/Assets/Edit/Media/386e4522-1713-11ed-a81d-000d3aa9ccac?type=image"
                            >
                              <i
                                className="purple fa fa-file-image"
                                title="longCover (Image)"
                              ></i>
                            </a>
                          </div>
                        </div>
                      </td>
                      <td className="cell-info-main"></td>
                      <td className="hidden-480 cell-info"></td>

                      <td className="cell-status">
                        <span className="label label-success"
                          ><i className="ace-icon fa fa-check bigger-120"></i>
                          Published</span
                        >
                      </td>
                      <td className="cell-actions">
                        <div className="action-buttons">
                          <a
                            href="/Posts/article/Edit/1055"
                            className="btn btn-new info"
                            ><i className="ace-icon fa fa-edit"></i> تعديل
                          </a>

                          <a
                            href="/Social/Publish/Share?postid=39f22c4b-1713-11ed-8c81-f079596794cc"
                            className="btn btn-new pink"
                            ><i className="ace-icon fa fa-share-alt"></i> نشر
                          </a>
                        </div>
                      </td>
                    </tr>
                    <tr className="clickable-row" data-modelid="1054">
                      <td>
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="check-row-3"
                          /><label
                            className="custom-control-label"
                            for="check-row-3"
                          ></label>
                        </div>
                      </td>
                      <td className="cell-main">
                        <a href="/Posts/article/Preview/1054">
                          <img
                            data-src="https://as-mangopulse-media.azurewebsites.net/store/archive/image/2022/8/8/9c735e9d-2a6e-45b1-9d84-a689776cb2ad.png"
                            src="https://as-mangopulse-media.azurewebsites.net/store/archive/image/2022/8/8/9c735e9d-2a6e-45b1-9d84-a689776cb2ad.png?preset=table-thumb"
                            className="placeholder"
                          />
                        </a>
                        <div className="cell-data">
                          <a
                            href="/Posts/article/Preview/1054"
                            className="cell-title"
                            >test article
                          </a>
                          <div className="text posts-users table-metas">
                            <div className="posts-mod entry">8 Aug 11:54</div>
                            <div className="posts-mod entry">
                              آخر تعديل بواسطة techsupport في 8 Aug 12:14
                            </div>

                            <span className="clearfix"></span>
                          </div>
                          <div className="text posts-media">
                            <a
                              href="https://as-mangopulse-front.azurewebsites.net/article/1054/test-article"
                              className="notajax"
                              target="_blank"
                              ><i className="fa fa-external-link-alt"></i
                            ></a>
                            <a
                              href="/Assets/Edit/Media/b272cd0b-1710-11ed-a81d-000d3aa9ccac?type=image"
                            >
                              <i
                                className="purple fa fa-file-image"
                                title="cover (Image)"
                              ></i>
                            </a>
                            <a
                              href="/Assets/Edit/Media/bb5ee4c8-1710-11ed-a81d-000d3aa9ccac?type=image"
                            >
                              <i
                                className="purple fa fa-file-image"
                                title="longCover (Image)"
                              ></i>
                            </a>
                          </div>
                        </div>
                      </td>
                      <td className="cell-info-main"></td>
                      <td className="hidden-480 cell-info"></td>

                      <td className="cell-status">
                        <span className="label label-success"
                          ><i className="ace-icon fa fa-check bigger-120"></i>
                          Published</span
                        >
                      </td>
                      <td className="cell-actions">
                        <div className="action-buttons">
                          <a
                            href="/Posts/article/Edit/1054"
                            className="btn btn-new info"
                            ><i className="ace-icon fa fa-edit"></i> تعديل
                          </a>

                          <a
                            href="/Social/Publish/Share?postid=bc88994a-1710-11ed-8c81-f079596794cc"
                            className="btn btn-new pink"
                            ><i className="ace-icon fa fa-share-alt"></i> نشر
                          </a>
                        </div>
                      </td>
                    </tr>
                    <tr className="clickable-row" data-modelid="120">
                      <td>
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="check-row-4"
                          /><label
                            className="custom-control-label"
                            for="check-row-4"
                          ></label>
                        </div>
                      </td>
                      <td className="cell-main">
                        <a href="/Posts/article/Preview/120">
                          <img
                            data-src="https://as-mangopulse-media.azurewebsites.net/store/archive/image/2022/7/6/17196add-2584-44ae-b58c-180e9ec92f93.jpg"
                            src="https://as-mangopulse-media.azurewebsites.net/store/archive/image/2022/7/6/17196add-2584-44ae-b58c-180e9ec92f93.jpg?preset=table-thumb"
                            className="placeholder"
                          />
                        </a>
                        <div className="cell-data">
                          <a
                            href="/Posts/article/Preview/120"
                            className="cell-title"
                            >Startup adds beds and Wi-Fi to buses to turn them
                            into ‘moving hotels’
                          </a>
                          <div className="text posts-users table-metas">
                            <div className="posts-mod entry">6 July 12:01</div>
                            <div className="posts-mod entry">
                              آخر تعديل بواسطة techsupport في 8 Aug 11:43
                            </div>

                            <span className="clearfix"></span>
                          </div>
                          <div className="text posts-media">
                            <a
                              href="https://as-mangopulse-front.azurewebsites.net/article/tech/120/startup-adds-beds-and-wi-fi-to-buses-to-turn-them-into--movi"
                              className="notajax"
                              target="_blank"
                              ><i className="fa fa-external-link-alt"></i
                            ></a>
                            <a
                              href="/Assets/Edit/Media/51132dfe-fd23-11ec-a81d-000d3aa9ccac?type=image"
                            >
                              <i
                                className="purple fa fa-file-image"
                                title="cover (Image)"
                              ></i>
                            </a>
                            <a
                              href="/Assets/Edit/Media/e7dea7d1-fd23-11ec-a81d-000d3aa9ccac?type=image"
                            >
                              <i
                                className="purple fa fa-file-image"
                                title="longCover (Image)"
                              ></i>
                            </a>
                          </div>
                        </div>
                      </td>
                      <td className="cell-info-main">Tech</td>
                      <td className="hidden-480 cell-info">
                        <a href="/Preview/author/Posts/59">Clark Jones</a>
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
                            href="/Posts/article/Edit/120"
                            className="btn btn-new info"
                            ><i className="ace-icon fa fa-edit"></i> تعديل
                          </a>

                          <a
                            href="/Social/Publish/Share?postid=5a31667f-fd23-11ec-a81d-000d3aa9c700"
                            className="btn btn-new pink"
                            ><i className="ace-icon fa fa-share-alt"></i> نشر
                          </a>
                        </div>
                      </td>
                    </tr>
                    <tr className="clickable-row" data-modelid="119">
                      <td>
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="check-row-5"
                          /><label
                            className="custom-control-label"
                            for="check-row-5"
                          ></label>
                        </div>
                      </td>
                      <td className="cell-main">
                        <a href="/Posts/article/Preview/119">
                          <img
                            data-src="https://as-mangopulse-media.azurewebsites.net/store/archive/image/2022/7/6/55980599-cb00-4e74-b6d2-929e8add8e8a.jpg"
                            src="https://as-mangopulse-media.azurewebsites.net/store/archive/image/2022/7/6/55980599-cb00-4e74-b6d2-929e8add8e8a.jpg?preset=table-thumb"
                            className="placeholder"
                          />
                        </a>
                        <div className="cell-data">
                          <a
                            href="/Posts/article/Preview/119"
                            className="cell-title"
                            >5 Crowdfunded products that actually delivered on
                            the hyp
                          </a>
                          <div className="text posts-users table-metas">
                            <div className="posts-mod entry">6 July 12:01</div>
                            <div className="posts-mod entry">
                              آخر تعديل بواسطة techsupport في 28 July 07:23
                            </div>

                            <span className="clearfix"></span>
                          </div>
                          <div className="text posts-media">
                            <a
                              href="https://as-mangopulse-front.azurewebsites.net/article/tech/119/5-crowdfunded-products-that-actually-delivered-on-the-hyp"
                              className="notajax"
                              target="_blank"
                              ><i className="fa fa-external-link-alt"></i
                            ></a>
                            <a
                              href="/Assets/Edit/Media/224eedb6-fd23-11ec-a81d-000d3aa9ccac?type=image"
                            >
                              <i
                                className="purple fa fa-file-image"
                                title="cover (Image)"
                              ></i>
                            </a>
                            <a
                              href="/Assets/Edit/Media/2d9695c3-fd23-11ec-a81d-000d3aa9ccac?type=image"
                            >
                              <i
                                className="purple fa fa-file-image"
                                title="longCover (Image)"
                              ></i>
                            </a>
                          </div>
                        </div>
                      </td>
                      <td className="cell-info-main">Tech</td>
                      <td className="hidden-480 cell-info">
                        <a href="/Preview/author/Posts/59">Clark Jones</a>
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
                            href="/Posts/article/Edit/119"
                            className="btn btn-new info"
                            ><i className="ace-icon fa fa-edit"></i> تعديل
                          </a>

                          <a
                            href="/Social/Publish/Share?postid=2f497a73-fd23-11ec-a81d-000d3aa9c700"
                            className="btn btn-new pink"
                            ><i className="ace-icon fa fa-share-alt"></i> نشر
                          </a>
                        </div>
                      </td>
                    </tr>
                    <tr className="clickable-row" data-modelid="118">
                      <td>
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="check-row-6"
                          /><label
                            className="custom-control-label"
                            for="check-row-6"
                          ></label>
                        </div>
                      </td>
                      <td className="cell-main">
                        <a href="/Posts/article/Preview/118">
                          <img
                            data-src="https://as-mangopulse-media.azurewebsites.net/store/archive/image/2022/7/6/0ac51e7d-b33c-4e79-b58a-3c00999005db.jpg"
                            src="https://as-mangopulse-media.azurewebsites.net/store/archive/image/2022/7/6/0ac51e7d-b33c-4e79-b58a-3c00999005db.jpg?preset=table-thumb"
                            className="placeholder"
                          />
                        </a>
                        <div className="cell-data">
                          <a
                            href="/Posts/article/Preview/118"
                            className="cell-title"
                            >Microsoft Paint is finally dead, and the world Is a
                            better place
                          </a>
                          <div className="text posts-users table-metas">
                            <div className="posts-mod entry">6 July 12:01</div>
                            <div className="posts-mod entry">
                              آخر تعديل بواسطة techsupport في 10 Aug 17:04
                            </div>

                            <span className="clearfix"></span>
                          </div>
                          <div className="text posts-media">
                            <a
                              href="https://as-mangopulse-front.azurewebsites.net/article/tech/118/techmicrosoft-paint-is-finally-dead--and-the-world-is-a-bett"
                              className="notajax"
                              target="_blank"
                              ><i className="fa fa-external-link-alt"></i
                            ></a>
                            <a
                              href="/Assets/Edit/Media/01591591-fd23-11ec-a81d-000d3aa9ccac?type=image"
                            >
                              <i
                                className="purple fa fa-file-image"
                                title="cover (Image)"
                              ></i>
                            </a>
                            <a
                              href="/Assets/Edit/Media/07eeb631-fd23-11ec-a81d-000d3aa9ccac?type=image"
                            >
                              <i
                                className="purple fa fa-file-image"
                                title="longCover (Image)"
                              ></i>
                            </a>
                          </div>
                        </div>
                      </td>
                      <td className="cell-info-main">Tech</td>
                      <td className="hidden-480 cell-info">
                        <a href="/Preview/author/Posts/59">Clark Jones</a>
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
                            href="/Posts/article/Edit/118"
                            className="btn btn-new info"
                            ><i className="ace-icon fa fa-edit"></i> تعديل
                          </a>

                          <a
                            href="/Social/Publish/Share?postid=0919619c-fd23-11ec-a81d-000d3aa9c700"
                            className="btn btn-new pink"
                            ><i className="ace-icon fa fa-share-alt"></i> نشر
                          </a>
                        </div>
                      </td>
                    </tr>
                    <tr className="clickable-row" data-modelid="117">
                      <td>
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="check-row-7"
                          /><label
                            className="custom-control-label"
                            for="check-row-7"
                          ></label>
                        </div>
                      </td>
                      <td className="cell-main">
                        <a href="/Posts/article/Preview/117">
                          <img
                            data-src="https://as-mangopulse-media.azurewebsites.net/store/archive/image/2022/7/6/44b612ef-a74d-4809-961b-91e41c8e1a2a.jpg"
                            src="https://as-mangopulse-media.azurewebsites.net/store/archive/image/2022/7/6/44b612ef-a74d-4809-961b-91e41c8e1a2a.jpg?preset=table-thumb"
                            className="placeholder"
                          />
                        </a>
                        <div className="cell-data">
                          <a
                            href="/Posts/article/Preview/117"
                            className="cell-title"
                            >NASA seeks to build a quieter supersonic plane for
                            passenger flight
                          </a>
                          <div className="text posts-users table-metas">
                            <div className="posts-mod entry">6 July 12:01</div>
                            <div className="posts-mod entry">
                              آخر تعديل بواسطة techsupport في 6 July 12:01
                            </div>

                            <span className="clearfix"></span>
                          </div>
                          <div className="text posts-media">
                            <a
                              href="https://as-mangopulse-front.azurewebsites.net/article/tech/117/nasa-seeks-to-build-a-quieter-supersonic-plane-for-passenger"
                              className="notajax"
                              target="_blank"
                              ><i className="fa fa-external-link-alt"></i
                            ></a>
                            <a
                              href="/Assets/Edit/Media/e44a0bfb-fd22-11ec-a81d-000d3aa9ccac?type=image"
                            >
                              <i
                                className="purple fa fa-file-image"
                                title="cover (Image)"
                              ></i>
                            </a>
                            <a
                              href="/Assets/Edit/Media/eafeaab6-fd22-11ec-a81d-000d3aa9ccac?type=image"
                            >
                              <i
                                className="purple fa fa-file-image"
                                title="longCover (Image)"
                              ></i>
                            </a>
                          </div>
                        </div>
                      </td>
                      <td className="cell-info-main">Tech</td>
                      <td className="hidden-480 cell-info">
                        <a href="/Preview/author/Posts/59">Clark Jones</a>
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
                            href="/Posts/article/Edit/117"
                            className="btn btn-new info"
                            ><i className="ace-icon fa fa-edit"></i> تعديل
                          </a>

                          <a
                            href="/Social/Publish/Share?postid=ec3532c7-fd22-11ec-a81d-000d3aa9c700"
                            className="btn btn-new pink"
                            ><i className="ace-icon fa fa-share-alt"></i> نشر
                          </a>
                        </div>
                      </td>
                    </tr>
                    <tr className="clickable-row" data-modelid="116">
                      <td>
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="check-row-8"
                          /><label
                            className="custom-control-label"
                            for="check-row-8"
                          ></label>
                        </div>
                      </td>
                      <td className="cell-main">
                        <a href="/Posts/article/Preview/116">
                          <img
                            data-src="https://as-mangopulse-media.azurewebsites.net/store/archive/image/2022/7/6/c87a8407-aaaf-43c5-ab52-376bf2be8a9a.jpg"
                            src="https://as-mangopulse-media.azurewebsites.net/store/archive/image/2022/7/6/c87a8407-aaaf-43c5-ab52-376bf2be8a9a.jpg?preset=table-thumb"
                            className="placeholder"
                          />
                        </a>
                        <div className="cell-data">
                          <a
                            href="/Posts/article/Preview/116"
                            className="cell-title"
                            >Hulu hires Google marketing veteran Kelly Campbell
                            as CMO
                          </a>
                          <div className="text posts-users table-metas">
                            <div className="posts-mod entry">6 July 12:01</div>
                            <div className="posts-mod entry">
                              آخر تعديل بواسطة techsupport في 6 July 12:01
                            </div>

                            <span className="clearfix"></span>
                          </div>
                          <div className="text posts-media">
                            <a
                              href="https://as-mangopulse-front.azurewebsites.net/article/tech/116/hulu-hires-google-marketing-veteran-kelly-campbell-as-cmo"
                              className="notajax"
                              target="_blank"
                              ><i className="fa fa-external-link-alt"></i
                            ></a>
                            <a
                              href="/Assets/Edit/Media/bbdae21a-fd22-11ec-a81d-000d3aa9ccac?type=image"
                            >
                              <i
                                className="purple fa fa-file-image"
                                title="cover (Image)"
                              ></i>
                            </a>
                            <a
                              href="/Assets/Edit/Media/c40a9965-fd22-11ec-a81d-000d3aa9ccac?type=image"
                            >
                              <i
                                className="purple fa fa-file-image"
                                title="longCover (Image)"
                              ></i>
                            </a>
                          </div>
                        </div>
                      </td>
                      <td className="cell-info-main">Tech</td>
                      <td className="hidden-480 cell-info">
                        <a href="/Preview/author/Posts/59">Clark Jones</a>
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
                            href="/Posts/article/Edit/116"
                            className="btn btn-new info"
                            ><i className="ace-icon fa fa-edit"></i> تعديل
                          </a>

                          <a
                            href="/Social/Publish/Share?postid=ca617270-fd22-11ec-a81d-000d3aa9c700"
                            className="btn btn-new pink"
                            ><i className="ace-icon fa fa-share-alt"></i> نشر
                          </a>
                        </div>
                      </td>
                    </tr>
                    <tr className="clickable-row" data-modelid="115">
                      <td>
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="check-row-9"
                          /><label
                            className="custom-control-label"
                            for="check-row-9"
                          ></label>
                        </div>
                      </td>
                      <td className="cell-main">
                        <a href="/Posts/article/Preview/115">
                          <img
                            data-src="https://as-mangopulse-media.azurewebsites.net/store/archive/image/2022/7/6/f01bf8d8-9dbe-49b1-813f-8c82d15004d2.jpg"
                            src="https://as-mangopulse-media.azurewebsites.net/store/archive/image/2022/7/6/f01bf8d8-9dbe-49b1-813f-8c82d15004d2.jpg?preset=table-thumb"
                            className="placeholder"
                          />
                        </a>
                        <div className="cell-data">
                          <a
                            href="/Posts/article/Preview/115"
                            className="cell-title"
                            >Ford’s 2018 Mustang GT can do 0-to-60 mph in under
                            4 seconds
                          </a>
                          <div className="text posts-users table-metas">
                            <div className="posts-mod entry">6 July 12:01</div>
                            <div className="posts-mod entry">
                              آخر تعديل بواسطة techsupport في 6 July 12:06
                            </div>

                            <span className="clearfix"></span>
                          </div>
                          <div className="text posts-media">
                            <a
                              href="https://as-mangopulse-front.azurewebsites.net/article/tech/115/ford-s-2018-mustang-gt-can-do-0-to-60-mph-in-under-4-seconds"
                              className="notajax"
                              target="_blank"
                              ><i className="fa fa-external-link-alt"></i
                            ></a>
                            <a
                              href="/Assets/Edit/Media/9cf24bad-fd22-11ec-a81d-000d3aa9ccac?type=image"
                            >
                              <i
                                className="purple fa fa-file-image"
                                title="cover (Image)"
                              ></i>
                            </a>
                            <a
                              href="/Assets/Edit/Media/04f734ca-fd24-11ec-a81d-000d3aa9ccac?type=image"
                            >
                              <i
                                className="purple fa fa-file-image"
                                title="longCover (Image)"
                              ></i>
                            </a>
                          </div>
                        </div>
                      </td>
                      <td className="cell-info-main">Tech</td>
                      <td className="hidden-480 cell-info">
                        <a href="/Preview/author/Posts/59">Clark Jones</a>
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
                            href="/Posts/article/Edit/115"
                            className="btn btn-new info"
                            ><i className="ace-icon fa fa-edit"></i> تعديل
                          </a>

                          <a
                            href="/Social/Publish/Share?postid=a65aae53-fd22-11ec-a81d-000d3aa9c700"
                            className="btn btn-new pink"
                            ><i className="ace-icon fa fa-share-alt"></i> نشر
                          </a>
                        </div>
                      </td>
                    </tr>
                    <tr className="clickable-row" data-modelid="114">
                      <td>
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="check-row-10"
                          /><label
                            className="custom-control-label"
                            for="check-row-10"
                          ></label>
                        </div>
                      </td>
                      <td className="cell-main">
                        <a href="/Posts/article/Preview/114">
                          <img
                            data-src="https://as-mangopulse-media.azurewebsites.net/store/archive/image/2022/7/6/a8edcd90-db1c-440f-b049-77e95d612a74.jpg"
                            src="https://as-mangopulse-media.azurewebsites.net/store/archive/image/2022/7/6/a8edcd90-db1c-440f-b049-77e95d612a74.jpg?preset=table-thumb"
                            className="placeholder"
                          />
                        </a>
                        <div className="cell-data">
                          <a
                            href="/Posts/article/Preview/114"
                            className="cell-title"
                            >Lawmaker spends a day working as baggage handler,
                            barista
                          </a>
                          <div className="text posts-users table-metas">
                            <div className="posts-mod entry">6 July 11:49</div>
                            <div className="posts-mod entry">
                              آخر تعديل بواسطة techsupport في 8 July 08:22
                            </div>

                            <span className="clearfix"></span>
                          </div>
                          <div className="text posts-media">
                            <a
                              href="https://as-mangopulse-front.azurewebsites.net/article/politics/114/lawmaker-spends-a-day-working-as-baggage-handler--barista"
                              className="notajax"
                              target="_blank"
                              ><i className="fa fa-external-link-alt"></i
                            ></a>
                            <a
                              href="/Assets/Edit/Media/6d164659-fd21-11ec-a81d-000d3aa9ccac?type=image"
                            >
                              <i
                                className="purple fa fa-file-image"
                                title="cover (Image)"
                              ></i>
                            </a>
                            <a
                              href="/Assets/Edit/Media/79ac1df3-fd21-11ec-a81d-000d3aa9ccac?type=image"
                            >
                              <i
                                className="purple fa fa-file-image"
                                title="longCover (Image)"
                              ></i>
                            </a>
                          </div>
                        </div>
                      </td>
                      <td className="cell-info-main">Tech</td>
                      <td className="hidden-480 cell-info">
                        <a href="/Preview/author/Posts/59">Clark Jones</a>
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
                            href="/Posts/article/Edit/114"
                            className="btn btn-new info"
                            ><i className="ace-icon fa fa-edit"></i> تعديل
                          </a>

                          <a
                            href="/Social/Publish/Share?postid=7ef163a3-fd21-11ec-a81d-000d3aa9c700"
                            className="btn btn-new pink"
                            ><i className="ace-icon fa fa-share-alt"></i> نشر
                          </a>
                        </div>
                      </td>
                    </tr>
                    <tr className="clickable-row" data-modelid="113">
                      <td>
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="check-row-11"
                          /><label
                            className="custom-control-label"
                            for="check-row-11"
                          ></label>
                        </div>
                      </td>
                      <td className="cell-main">
                        <a href="/Posts/article/Preview/113">
                          <img
                            data-src="https://as-mangopulse-media.azurewebsites.net/store/archive/image/2022/7/6/e2599950-e5e4-424e-97f7-cff8a7d6e571.jpg"
                            src="https://as-mangopulse-media.azurewebsites.net/store/archive/image/2022/7/6/e2599950-e5e4-424e-97f7-cff8a7d6e571.jpg?preset=table-thumb"
                            className="placeholder"
                          />
                        </a>
                        <div className="cell-data">
                          <a
                            href="/Posts/article/Preview/113"
                            className="cell-title"
                            >Some California incumbents lagging in fundraising:
                            report
                          </a>
                          <div className="text posts-users table-metas">
                            <div className="posts-mod entry">6 July 11:49</div>
                            <div className="posts-mod entry">
                              آخر تعديل بواسطة techsupport في 8 July 08:22
                            </div>

                            <span className="clearfix"></span>
                          </div>
                          <div className="text posts-media">
                            <a
                              href="https://as-mangopulse-front.azurewebsites.net/article/politics/113/some-california-incumbents-lagging-in-fundraising--report"
                              className="notajax"
                              target="_blank"
                              ><i className="fa fa-external-link-alt"></i
                            ></a>
                            <a
                              href="/Assets/Edit/Media/4bdd77f6-fd21-11ec-a81d-000d3aa9ccac?type=image"
                            >
                              <i
                                className="purple fa fa-file-image"
                                title="cover (Image)"
                              ></i>
                            </a>
                            <a
                              href="/Assets/Edit/Media/53cf3534-fd21-11ec-a81d-000d3aa9ccac?type=image"
                            >
                              <i
                                className="purple fa fa-file-image"
                                title="longCover (Image)"
                              ></i>
                            </a>
                          </div>
                        </div>
                      </td>
                      <td className="cell-info-main">Tech</td>
                      <td className="hidden-480 cell-info">
                        <a href="/Preview/author/Posts/59">Clark Jones</a>
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
                            href="/Posts/article/Edit/113"
                            className="btn btn-new info"
                            ><i className="ace-icon fa fa-edit"></i> تعديل
                          </a>

                          <a
                            href="/Social/Publish/Share?postid=55b7eaf1-fd21-11ec-a81d-000d3aa9c700"
                            className="btn btn-new pink"
                            ><i className="ace-icon fa fa-share-alt"></i> نشر
                          </a>
                        </div>
                      </td>
                    </tr>
                    <tr className="clickable-row" data-modelid="112">
                      <td>
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="check-row-12"
                          /><label
                            className="custom-control-label"
                            for="check-row-12"
                          ></label>
                        </div>
                      </td>
                      <td className="cell-main">
                        <a href="/Posts/article/Preview/112">
                          <img
                            data-src="https://as-mangopulse-media.azurewebsites.net/store/archive/image/2022/7/6/c6a21bef-3a97-4da1-99c6-2aab5b372ca7.jpg"
                            src="https://as-mangopulse-media.azurewebsites.net/store/archive/image/2022/7/6/c6a21bef-3a97-4da1-99c6-2aab5b372ca7.jpg?preset=table-thumb"
                            className="placeholder"
                          />
                        </a>
                        <div className="cell-data">
                          <a
                            href="/Posts/article/Preview/112"
                            className="cell-title"
                            >Report: $15 minimum wage bill would benefit 20.7
                            million workers
                          </a>
                          <div className="text posts-users table-metas">
                            <div className="posts-mod entry">6 July 11:49</div>
                            <div className="posts-mod entry">
                              آخر تعديل بواسطة techsupport في 8 July 08:22
                            </div>

                            <span className="clearfix"></span>
                          </div>
                          <div className="text posts-media">
                            <a
                              href="https://as-mangopulse-front.azurewebsites.net/article/politics/112/report---15-minimum-wage-bill-would-benefit-20-7-million-wor"
                              className="notajax"
                              target="_blank"
                              ><i className="fa fa-external-link-alt"></i
                            ></a>
                            <a
                              href="/Assets/Edit/Media/2791719b-fd21-11ec-a81d-000d3aa9ccac?type=image"
                            >
                              <i
                                className="purple fa fa-file-image"
                                title="cover (Image)"
                              ></i>
                            </a>
                            <a
                              href="/Assets/Edit/Media/3061316d-fd21-11ec-a81d-000d3aa9ccac?type=image"
                            >
                              <i
                                className="purple fa fa-file-image"
                                title="longCover (Image)"
                              ></i>
                            </a>
                          </div>
                        </div>
                      </td>
                      <td className="cell-info-main">Tech</td>
                      <td className="hidden-480 cell-info">
                        <a href="/Preview/author/Posts/59">Clark Jones</a>
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
                            href="/Posts/article/Edit/112"
                            className="btn btn-new info"
                            ><i className="ace-icon fa fa-edit"></i> تعديل
                          </a>

                          <a
                            href="/Social/Publish/Share?postid=332d5bdd-fd21-11ec-a81d-000d3aa9c700"
                            className="btn btn-new pink"
                            ><i className="ace-icon fa fa-share-alt"></i> نشر
                          </a>
                        </div>
                      </td>
                    </tr>
                    <tr className="clickable-row" data-modelid="111">
                      <td>
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="check-row-13"
                          /><label
                            className="custom-control-label"
                            for="check-row-13"
                          ></label>
                        </div>
                      </td>
                      <td className="cell-main">
                        <a href="/Posts/article/Preview/111">
                          <img
                            data-src="https://as-mangopulse-media.azurewebsites.net/store/archive/image/2022/7/6/68c57126-829e-448f-bae9-51369f5d984a.jpg"
                            src="https://as-mangopulse-media.azurewebsites.net/store/archive/image/2022/7/6/68c57126-829e-448f-bae9-51369f5d984a.jpg?preset=table-thumb"
                            className="placeholder"
                          />
                        </a>
                        <div className="cell-data">
                          <a
                            href="/Posts/article/Preview/111"
                            className="cell-title"
                            >House panel to consider bill to revamp DHS cyber
                            team
                          </a>
                          <div className="text posts-users table-metas">
                            <div className="posts-mod entry">6 July 11:49</div>
                            <div className="posts-mod entry">
                              آخر تعديل بواسطة techsupport في 8 July 08:22
                            </div>

                            <span className="clearfix"></span>
                          </div>
                          <div className="text posts-media">
                            <a
                              href="https://as-mangopulse-front.azurewebsites.net/article/politics/111/house-panel-to-consider-bill-to-revamp-dhs-cyber-team"
                              className="notajax"
                              target="_blank"
                              ><i className="fa fa-external-link-alt"></i
                            ></a>
                            <a
                              href="/Assets/Edit/Media/f9f1eeb4-fd20-11ec-a81d-000d3aa9ccac?type=image"
                            >
                              <i
                                className="purple fa fa-file-image"
                                title="cover (Image)"
                              ></i>
                            </a>
                            <a
                              href="/Assets/Edit/Media/0bfd07f9-fd21-11ec-a81d-000d3aa9ccac?type=image"
                            >
                              <i
                                className="purple fa fa-file-image"
                                title="longCover (Image)"
                              ></i>
                            </a>
                          </div>
                        </div>
                      </td>
                      <td className="cell-info-main">Tech</td>
                      <td className="hidden-480 cell-info">
                        <a href="/Preview/author/Posts/59">Clark Jones</a>
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
                            href="/Posts/article/Edit/111"
                            className="btn btn-new info"
                            ><i className="ace-icon fa fa-edit"></i> تعديل
                          </a>

                          <a
                            href="/Social/Publish/Share?postid=120574e9-fd21-11ec-a81d-000d3aa9c700"
                            className="btn btn-new pink"
                            ><i className="ace-icon fa fa-share-alt"></i> نشر
                          </a>
                        </div>
                      </td>
                    </tr>
                    <tr className="clickable-row" data-modelid="110">
                      <td>
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="check-row-14"
                          /><label
                            className="custom-control-label"
                            for="check-row-14"
                          ></label>
                        </div>
                      </td>
                      <td className="cell-main">
                        <a href="/Posts/article/Preview/110">
                          <img
                            data-src="https://as-mangopulse-media.azurewebsites.net/store/archive/image/2022/7/6/af219b6b-4811-4a79-9b39-4f221c349bf1.jpg"
                            src="https://as-mangopulse-media.azurewebsites.net/store/archive/image/2022/7/6/af219b6b-4811-4a79-9b39-4f221c349bf1.jpg?preset=table-thumb"
                            className="placeholder"
                          />
                        </a>
                        <div className="cell-data">
                          <a
                            href="/Posts/article/Preview/110"
                            className="cell-title"
                            >Poll: Virginia governor’s race in dead heat
                          </a>
                          <div className="text posts-users table-metas">
                            <div className="posts-mod entry">6 July 11:49</div>
                            <div className="posts-mod entry">
                              آخر تعديل بواسطة techsupport في 8 July 08:22
                            </div>

                            <span className="clearfix"></span>
                          </div>
                          <div className="text posts-media">
                            <a
                              href="https://as-mangopulse-front.azurewebsites.net/article/politics/110/poll--virginia-governor-s-race-in-dead-heat"
                              className="notajax"
                              target="_blank"
                              ><i className="fa fa-external-link-alt"></i
                            ></a>
                            <a
                              href="/Assets/Edit/Media/c59930a7-fd20-11ec-a81d-000d3aa9ccac?type=image"
                            >
                              <i
                                className="purple fa fa-file-image"
                                title="cover (Image)"
                              ></i>
                            </a>
                            <a
                              href="/Assets/Edit/Media/ccdd8747-fd20-11ec-a81d-000d3aa9ccac?type=image"
                            >
                              <i
                                className="purple fa fa-file-image"
                                title="longCover (Image)"
                              ></i>
                            </a>
                          </div>
                        </div>
                      </td>
                      <td className="cell-info-main">Tech</td>
                      <td className="hidden-480 cell-info">
                        <a href="/Preview/author/Posts/59">Clark Jones</a>
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
                            href="/Posts/article/Edit/110"
                            className="btn btn-new info"
                            ><i className="ace-icon fa fa-edit"></i> تعديل
                          </a>

                          <a
                            href="/Social/Publish/Share?postid=da9b6eb6-fd20-11ec-a81d-000d3aa9c700"
                            className="btn btn-new pink"
                            ><i className="ace-icon fa fa-share-alt"></i> نشر
                          </a>
                        </div>
                      </td>
                    </tr>
                    <tr className="clickable-row" data-modelid="109">
                      <td>
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="check-row-15"
                          /><label
                            className="custom-control-label"
                            for="check-row-15"
                          ></label>
                        </div>
                      </td>
                      <td className="cell-main">
                        <a href="/Posts/article/Preview/109">
                          <img
                            data-src="https://as-mangopulse-media.azurewebsites.net/store/archive/image/2022/7/6/5d2b47f8-5571-488e-999b-556bb7021c1f.jpg"
                            src="https://as-mangopulse-media.azurewebsites.net/store/archive/image/2022/7/6/5d2b47f8-5571-488e-999b-556bb7021c1f.jpg?preset=table-thumb"
                            className="placeholder"
                          />
                        </a>
                        <div className="cell-data">
                          <a
                            href="/Posts/article/Preview/109"
                            className="cell-title"
                            >Ruth Bader Ginsburg optimistic ‘over the long haul’
                            for US
                          </a>
                          <div className="text posts-users table-metas">
                            <div className="posts-mod entry">6 July 11:49</div>
                            <div className="posts-mod entry">
                              آخر تعديل بواسطة techsupport في 8 July 08:22
                            </div>

                            <span className="clearfix"></span>
                          </div>
                          <div className="text posts-media">
                            <a
                              href="https://as-mangopulse-front.azurewebsites.net/article/politics/109/ruth-bader-ginsburg-optimistic--over-the-long-haul--for-us"
                              className="notajax"
                              target="_blank"
                              ><i className="fa fa-external-link-alt"></i
                            ></a>
                            <a
                              href="/Assets/Edit/Media/a9b480a1-fd20-11ec-a81d-000d3aa9ccac?type=image"
                            >
                              <i
                                className="purple fa fa-file-image"
                                title="cover (Image)"
                              ></i>
                            </a>
                            <a
                              href="/Assets/Edit/Media/b4ce9437-fd20-11ec-a81d-000d3aa9ccac?type=image"
                            >
                              <i
                                className="purple fa fa-file-image"
                                title="longCover (Image)"
                              ></i>
                            </a>
                          </div>
                        </div>
                      </td>
                      <td className="cell-info-main">Tech</td>
                      <td className="hidden-480 cell-info">
                        <a href="/Preview/author/Posts/59">Clark Jones</a>
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
                            href="/Posts/article/Edit/109"
                            className="btn btn-new info"
                            ><i className="ace-icon fa fa-edit"></i> تعديل
                          </a>

                          <a
                            href="/Social/Publish/Share?postid=b606443d-fd20-11ec-a81d-000d3aa9c700"
                            className="btn btn-new pink"
                            ><i className="ace-icon fa fa-share-alt"></i> نشر
                          </a>
                        </div>
                      </td>
                    </tr>
                    <tr className="clickable-row" data-modelid="108">
                      <td>
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="check-row-16"
                          /><label
                            className="custom-control-label"
                            for="check-row-16"
                          ></label>
                        </div>
                      </td>
                      <td className="cell-main">
                        <a href="/Posts/article/Preview/108">
                          <img
                            data-src="https://as-mangopulse-media.azurewebsites.net/store/archive/image/2022/7/6/36aacca4-633e-4779-b993-8b06d4b7155f.jpg"
                            src="https://as-mangopulse-media.azurewebsites.net/store/archive/image/2022/7/6/36aacca4-633e-4779-b993-8b06d4b7155f.jpg?preset=table-thumb"
                            className="placeholder"
                          />
                        </a>
                        <div className="cell-data">
                          <a
                            href="/Posts/article/Preview/108"
                            className="cell-title"
                            >Congress rolls out ‘Better Deal,’ new economic
                            agenda
                          </a>
                          <div className="text posts-users table-metas">
                            <div className="posts-mod entry">6 July 11:49</div>
                            <div className="posts-mod entry">
                              آخر تعديل بواسطة techsupport في 8 July 08:23
                            </div>

                            <span className="clearfix"></span>
                          </div>
                          <div className="text posts-media">
                            <a
                              href="https://as-mangopulse-front.azurewebsites.net/article/politics/108/congress-rolls-out--better-deal---new-economic-agenda"
                              className="notajax"
                              target="_blank"
                              ><i className="fa fa-external-link-alt"></i
                            ></a>
                            <a
                              href="/Assets/Edit/Media/8441f1b0-fd20-11ec-a81d-000d3aa9ccac?type=image"
                            >
                              <i
                                className="purple fa fa-file-image"
                                title="cover (Image)"
                              ></i>
                            </a>
                            <a
                              href="/Assets/Edit/Media/8ca61d2a-fd20-11ec-a81d-000d3aa9ccac?type=image"
                            >
                              <i
                                className="purple fa fa-file-image"
                                title="longCover (Image)"
                              ></i>
                            </a>
                          </div>
                        </div>
                      </td>
                      <td className="cell-info-main">Tech</td>
                      <td className="hidden-480 cell-info">
                        <a href="/Preview/author/Posts/59">Clark Jones</a>
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
                            href="/Posts/article/Edit/108"
                            className="btn btn-new info"
                            ><i className="ace-icon fa fa-edit"></i> تعديل
                          </a>

                          <a
                            href="/Social/Publish/Share?postid=8f38ae74-fd20-11ec-a81d-000d3aa9c700"
                            className="btn btn-new pink"
                            ><i className="ace-icon fa fa-share-alt"></i> نشر
                          </a>
                        </div>
                      </td>
                    </tr>
                    <tr className="clickable-row" data-modelid="107">
                      <td>
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="check-row-17"
                          /><label
                            className="custom-control-label"
                            for="check-row-17"
                          ></label>
                        </div>
                      </td>
                      <td className="cell-main">
                        <a href="/Posts/article/Preview/107">
                          <img
                            data-src="https://as-mangopulse-media.azurewebsites.net/store/archive/image/2022/7/6/91463131-09d6-4f78-8943-6c2ccecee72c.jpg"
                            src="https://as-mangopulse-media.azurewebsites.net/store/archive/image/2022/7/6/91463131-09d6-4f78-8943-6c2ccecee72c.jpg?preset=table-thumb"
                            className="placeholder"
                          />
                        </a>
                        <div className="cell-data">
                          <a
                            href="/Posts/article/Preview/107"
                            className="cell-title"
                            >Illinois’ financial crisis could bring the state to
                            a halt
                          </a>
                          <div className="text posts-users table-metas">
                            <div className="posts-mod entry">6 July 11:49</div>
                            <div className="posts-mod entry">
                              آخر تعديل بواسطة techsupport في 8 July 08:23
                            </div>

                            <span className="clearfix"></span>
                          </div>
                          <div className="text posts-media">
                            <a
                              href="https://as-mangopulse-front.azurewebsites.net/article/politics/107/illinois--financial-crisis-could-bring-the-state-to-a-halt"
                              className="notajax"
                              target="_blank"
                              ><i className="fa fa-external-link-alt"></i
                            ></a>
                            <a
                              href="/Assets/Edit/Media/626acd52-fd20-11ec-a81d-000d3aa9ccac?type=image"
                            >
                              <i
                                className="purple fa fa-file-image"
                                title="cover (Image)"
                              ></i>
                            </a>
                            <a
                              href="/Assets/Edit/Media/6b60a026-fd20-11ec-a81d-000d3aa9ccac?type=image"
                            >
                              <i
                                className="purple fa fa-file-image"
                                title="longCover (Image)"
                              ></i>
                            </a>
                          </div>
                        </div>
                      </td>
                      <td className="cell-info-main">Tech</td>
                      <td className="hidden-480 cell-info">
                        <a href="/Preview/author/Posts/59">Clark Jones</a>
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
                            href="/Posts/article/Edit/107"
                            className="btn btn-new info"
                            ><i className="ace-icon fa fa-edit"></i> تعديل
                          </a>

                          <a
                            href="/Social/Publish/Share?postid=6d92a2af-fd20-11ec-a81d-000d3aa9c700"
                            className="btn btn-new pink"
                            ><i className="ace-icon fa fa-share-alt"></i> نشر
                          </a>
                        </div>
                      </td>
                    </tr>
                    <tr className="clickable-row" data-modelid="106">
                      <td>
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="check-row-18"
                          /><label
                            className="custom-control-label"
                            for="check-row-18"
                          ></label>
                        </div>
                      </td>
                      <td className="cell-main">
                        <a href="/Posts/article/Preview/106">
                          <img
                            data-src="https://as-mangopulse-media.azurewebsites.net/store/archive/image/2022/7/6/2cb2d531-3809-49f5-babe-a22f75bf693a.jpg"
                            src="https://as-mangopulse-media.azurewebsites.net/store/archive/image/2022/7/6/2cb2d531-3809-49f5-babe-a22f75bf693a.jpg?preset=table-thumb"
                            className="placeholder"
                          />
                        </a>
                        <div className="cell-data">
                          <a
                            href="/Posts/article/Preview/106"
                            className="cell-title"
                            >Mayors agree, Congress should invest in affordable
                            housing
                          </a>
                          <div className="text posts-users table-metas">
                            <div className="posts-mod entry">6 July 11:49</div>
                            <div className="posts-mod entry">
                              آخر تعديل بواسطة techsupport في 8 July 08:23
                            </div>

                            <span className="clearfix"></span>
                          </div>
                          <div className="text posts-media">
                            <a
                              href="https://as-mangopulse-front.azurewebsites.net/article/politics/106/mayors-agree--congress-should-invest-in-affordable-housing"
                              className="notajax"
                              target="_blank"
                              ><i className="fa fa-external-link-alt"></i
                            ></a>
                            <a
                              href="/Assets/Edit/Media/1a4e716f-fd20-11ec-a81d-000d3aa9ccac?type=image"
                            >
                              <i
                                className="purple fa fa-file-image"
                                title="cover (Image)"
                              ></i>
                            </a>
                            <a
                              href="/Assets/Edit/Media/393c73d6-fd20-11ec-a81d-000d3aa9ccac?type=image"
                            >
                              <i
                                className="purple fa fa-file-image"
                                title="longCover (Image)"
                              ></i>
                            </a>
                          </div>
                        </div>
                      </td>
                      <td className="cell-info-main">Tech</td>
                      <td className="hidden-480 cell-info">
                        <a href="/Preview/author/Posts/59">Clark Jones</a>
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
                            href="/Posts/article/Edit/106"
                            className="btn btn-new info"
                            ><i className="ace-icon fa fa-edit"></i> تعديل
                          </a>

                          <a
                            href="/Social/Publish/Share?postid=459d7191-fd20-11ec-a81d-000d3aa9c700"
                            className="btn btn-new pink"
                            ><i className="ace-icon fa fa-share-alt"></i> نشر
                          </a>
                        </div>
                      </td>
                    </tr>
                    <tr className="clickable-row" data-modelid="105">
                      <td>
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="check-row-19"
                          /><label
                            className="custom-control-label"
                            for="check-row-19"
                          ></label>
                        </div>
                      </td>
                      <td className="cell-main">
                        <a href="/Posts/article/Preview/105">
                          <img
                            data-src="https://as-mangopulse-media.azurewebsites.net/store/archive/image/2022/7/6/55cffdc5-4380-4bee-b37f-f0503ad4ad7e.jpg"
                            src="https://as-mangopulse-media.azurewebsites.net/store/archive/image/2022/7/6/55cffdc5-4380-4bee-b37f-f0503ad4ad7e.jpg?preset=table-thumb"
                            className="placeholder"
                          />
                        </a>
                        <div className="cell-data">
                          <a
                            href="/Posts/article/Preview/105"
                            className="cell-title"
                            >Mod turns ‘Counter-Strike’ into a ‘Tekken’ clone
                            with fighting chickens
                          </a>
                          <div className="text posts-users table-metas">
                            <div className="posts-mod entry">6 July 11:30</div>
                            <div className="posts-mod entry">
                              آخر تعديل بواسطة techsupport في 8 July 08:23
                            </div>

                            <span className="clearfix"></span>
                          </div>
                          <div className="text posts-media">
                            <a
                              href="https://as-mangopulse-front.azurewebsites.net/article/entertainment/105/mod-turns--counter-strike--into-a--tekken--clone-with-fighti"
                              className="notajax"
                              target="_blank"
                              ><i className="fa fa-external-link-alt"></i
                            ></a>
                            <a
                              href="/Assets/Edit/Media/e9e85645-fd1e-11ec-a81d-000d3aa9ccac?type=image"
                            >
                              <i
                                className="purple fa fa-file-image"
                                title="cover (Image)"
                              ></i>
                            </a>
                            <a
                              href="/Assets/Edit/Media/f5b780e3-fd1e-11ec-a81d-000d3aa9ccac?type=image"
                            >
                              <i
                                className="purple fa fa-file-image"
                                title="longCover (Image)"
                              ></i>
                            </a>
                          </div>
                        </div>
                      </td>
                      <td className="cell-info-main">Tech</td>
                      <td className="hidden-480 cell-info">
                        <a href="/Preview/author/Posts/59">Clark Jones</a>
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
                            href="/Posts/article/Edit/105"
                            className="btn btn-new info"
                            ><i className="ace-icon fa fa-edit"></i> تعديل
                          </a>

                          <a
                            href="/Social/Publish/Share?postid=f6ff5927-fd1e-11ec-a81d-000d3aa9c700"
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
        <div id="cboxBottomLeft"style={{float: "left"}}></div>
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
      height: 0+"px" ,
      minHeight: 0+"px",
    }}
  ></textarea>

    </div>
  )
}

export default JadwalArticles
