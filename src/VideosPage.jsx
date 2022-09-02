
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import image1 from "../components/images/dxm.png";





const VideosPage = () => {

  
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
              src={image1}
              alt="Experience Manager"
              className="product-logo"
          /></a>
        </div>

      
        <div className="navbar-buttons navbar-header pull-left" role="navigation">
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
              <li>
                <a href="/Posts?type=video"> Video </a>
              </li>
            </ul>

            <div
              id="page-data"
              data-url="https://as-mangopulse-admin.azurewebsites.net/Posts/Index?type=video"
              data-title="Video"
            ></div>
          </div>

          <div className="page-content">
            <div className="page-header">
              <div className="quick-create">
                <a href="/Posts/Create?type=video" title=""
                  ><i className="fa fa-plus"></i
                ></a>
              </div>
              <h1>Video</h1>
              <div id="bulk-actions">
                <a
                  data-href="/Posts/MultiplePublish"
                  className="btn btn-new success"
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
                  href="/Publisher?type=video"
                  className="btn btn-new link btn-publihser-video"
                  ><i className="ace-icon fa fa-sliders-h"></i> الناشر
                </a>
                <a
                  href="/Posts/Tabs?type=video"
                  className="btn btn-new link btn-tabs-video"
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
                  data-moreurl="/Posts?MainRequest=False&amp;type=video"
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
                        <th className="cell-info-main">Video Category</th>
                        <th className="hidden-480">Author</th>

                        <th>الحالة</th>
                        <th></th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr className="clickable-row" data-modelid="1075">
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
                          <a href="/Posts/video/Preview/1075">
                            <img
                              data-src="https://as-mangopulse-media.azurewebsites.net/store/archive/image/2022/8/23/2b641d96-d446-494a-aeff-35eb5b47e5bb.jpg"
                              src="https://as-mangopulse-media.azurewebsites.net/store/archive/image/2022/8/23/2b641d96-d446-494a-aeff-35eb5b47e5bb.jpg?preset=table-thumb"
                              className="placeholder"
                            />
                          </a>
                          <div className="cell-data">
                            <a
                              href="/Posts/video/Preview/1075"
                              className="cell-title"
                              >testing
                            </a>
                            <div className="text posts-users table-metas">
                              <div className="posts-mod entry">23 Aug 11:46</div>
                              <div className="posts-mod entry">
                                آخر تعديل بواسطة techsupport في 23 Aug 11:55
                              </div>

                              <span className="clearfix"></span>
                            </div>
                            <div className="text posts-media">
                              <a
                                href="https://as-mangopulse-front.azurewebsites.net/video/1075/testing"
                                className="notajax"
                                target="_blank"
                                ><i className="fa fa-external-link-alt"></i
                              ></a>
                              <a
                                href="/Assets/Edit/Media/9397d6c1-22d5-11ed-a81d-000d3aa9ccac?type=video"
                              >
                                <i
                                  className="yellow fa fa-file-video"
                                  title="main (Video)"
                                ></i>
                              </a>
                              <a
                                href="/Assets/Edit/Media/9397d6be-22d5-11ed-a81d-000d3aa9ccac?type=image"
                              >
                                <i
                                  className="purple fa fa-file-image"
                                  title="cover (Image)"
                                ></i>
                              </a>
                              <a
                                href="/Assets/Edit/Media/9397d6be-22d5-11ed-a81d-000d3aa9ccac?type=image"
                              >
                                <i
                                  className="purple fa fa-file-image"
                                  title="long cover (Image)"
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
                              href="/Posts/video/Edit/1075"
                              className="btn btn-new info"
                              ><i className="ace-icon fa fa-edit"></i> تعديل
                            </a>

                            <a
                              href="/Social/Publish/Share?postid=ff0b096f-22d8-11ed-a81d-000d3aa9c700"
                              className="btn btn-new pink"
                              ><i className="ace-icon fa fa-share-alt"></i> نشر
                            </a>
                          </div>
                        </td>
                      </tr>
                      <tr className="clickable-row" data-modelid="1074">
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
                          <a href="/Posts/video/Preview/1074">
                            <img
                              data-src="https://as-mangopulse-media.azurewebsites.net/store/archive/image/2022/8/2/f3389c14-ab72-47d3-81c3-7646ce73079c.jpg"
                              src="https://as-mangopulse-media.azurewebsites.net/store/archive/image/2022/8/2/f3389c14-ab72-47d3-81c3-7646ce73079c.jpg?preset=table-thumb"
                              className="placeholder"
                            />
                          </a>
                          <div className="cell-data">
                            <a
                              href="/Posts/video/Preview/1074"
                              className="cell-title"
                              >Federer makes history with eighth Wimbledon, 19th
                              major
                            </a>
                            <div className="text posts-users table-metas">
                              <div className="posts-mod entry">23 Aug 11:42</div>
                              <div className="posts-mod entry">
                                آخر تعديل بواسطة techsupport في 23 Aug 11:42
                              </div>

                              <span className="clearfix"></span>
                            </div>
                            <div className="text posts-media">
                              <a
                                href="https://as-mangopulse-front.azurewebsites.net/video/sports/1074/federer-makes-history-with-eighth-wimbledon--19th-major"
                                className="notajax"
                                target="_blank"
                                ><i className="fa fa-external-link-alt"></i
                              ></a>
                              <a
                                href="/Assets/Edit/Media/79102d4f-f91b-11ec-a81d-000d3aa9ccac?type=video"
                              >
                                <i
                                  className="yellow fa fa-file-video"
                                  title="main (Video)"
                                ></i>
                              </a>
                              <a
                                href="/Assets/Edit/Media/dc1bbca5-1238-11ed-a81d-000d3aa9ccac?type=image"
                              >
                                <i
                                  className="purple fa fa-file-image"
                                  title="cover (Image)"
                                ></i>
                              </a>
                              <a
                                href="/Assets/Edit/Media/dc1bbca5-1238-11ed-a81d-000d3aa9ccac?type=image"
                              >
                                <i
                                  className="purple fa fa-file-image"
                                  title="long cover (Image)"
                                ></i>
                              </a>
                            </div>
                          </div>
                        </td>
                        <td className="cell-info-main">Sports</td>
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
                              href="/Posts/video/Edit/1074"
                              className="btn btn-new info"
                              ><i className="ace-icon fa fa-edit"></i> تعديل
                            </a>

                            <a
                              href="/Social/Publish/Share?postid=9a3acf03-22d8-11ed-a81d-000d3aa9c700"
                              className="btn btn-new pink"
                              ><i className="ace-icon fa fa-share-alt"></i> نشر
                            </a>
                          </div>
                        </td>
                      </tr>
                      <tr className="clickable-row" data-modelid="1073">
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
                          <a href="/Posts/video/Preview/1073">
                            <img
                              data-src="https://as-mangopulse-media.azurewebsites.net/store/archive/image/2022/8/23/08d66538-1e65-4eda-8ff1-af6dbfd3346e.jpg"
                              src="https://as-mangopulse-media.azurewebsites.net/store/archive/image/2022/8/23/08d66538-1e65-4eda-8ff1-af6dbfd3346e.jpg?preset=table-thumb"
                              className="placeholder"
                            />
                          </a>
                          <div className="cell-data">
                            <a
                              href="/Posts/video/Preview/1073"
                              className="cell-title"
                              >Mod turns ‘Counter-Strike’ into a ‘Tekken’ clone
                              with fighting chickens
                            </a>
                            <div className="text posts-users table-metas">
                              <div className="posts-mod entry">23 Aug 11:42</div>
                              <div className="posts-mod entry">
                                آخر تعديل بواسطة techsupport في 23 Aug 11:42
                              </div>

                              <span className="clearfix"></span>
                            </div>
                            <div className="text posts-media">
                              <a
                                href="https://as-mangopulse-front.azurewebsites.net/video/sports/1073/mod-turns--counter-strike--into-a--tekken--clone-with-fighti"
                                className="notajax"
                                target="_blank"
                                ><i className="fa fa-external-link-alt"></i
                              ></a>
                              <a
                                href="/Assets/Edit/Media/9397d6bd-22d5-11ed-a81d-000d3aa9ccac?type=video"
                              >
                                <i
                                  className="yellow fa fa-file-video"
                                  title="main (Video)"
                                ></i>
                              </a>
                              <a
                                href="/Assets/Edit/Media/44b04bcb-22d8-11ed-a81d-000d3aa9ccac?type=image"
                              >
                                <i
                                  className="purple fa fa-file-image"
                                  title="cover (Image)"
                                ></i>
                              </a>
                              <a
                                href="/Assets/Edit/Media/55a3c20b-22d8-11ed-a81d-000d3aa9ccac?type=image"
                              >
                                <i
                                  className="purple fa fa-file-image"
                                  title="long cover (Image)"
                                ></i>
                              </a>
                            </div>
                          </div>
                        </td>
                        <td className="cell-info-main">Sports</td>
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
                              href="/Posts/video/Edit/1073"
                              className="btn btn-new info"
                              ><i className="ace-icon fa fa-edit"></i> تعديل
                            </a>

                            <a
                              href="/Social/Publish/Share?postid=5effe92a-22d8-11ed-a81d-000d3aa9c700"
                              className="btn btn-new pink"
                              ><i className="ace-icon fa fa-share-alt"></i> نشر
                            </a>
                          </div>
                        </td>
                      </tr>
                      <tr className="clickable-row" data-modelid="1072">
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
                          <a href="/Posts/video/Preview/1072">
                            <img
                              data-src="https://as-mangopulse-media.azurewebsites.net/store/archive/image/2022/8/23/72b97d92-b44f-49c2-862e-78d741bdca23.jpg"
                              src="https://as-mangopulse-media.azurewebsites.net/store/archive/image/2022/8/23/72b97d92-b44f-49c2-862e-78d741bdca23.jpg?preset=table-thumb"
                              className="placeholder"
                            />
                          </a>
                          <div className="cell-data">
                            <a
                              href="/Posts/video/Preview/1072"
                              className="cell-title"
                              >new
                            </a>
                            <div className="text posts-users table-metas">
                              <div className="posts-mod entry">23 Aug 11:23</div>
                              <div className="posts-mod entry">
                                آخر تعديل بواسطة techsupport في 23 Aug 11:43
                              </div>

                              <span className="clearfix"></span>
                            </div>
                            <div className="text posts-media">
                              <a
                                href="https://as-mangopulse-front.azurewebsites.net/video/sports/1072/new"
                                className="notajax"
                                target="_blank"
                                ><i className="fa fa-external-link-alt"></i
                              ></a>
                              <a
                                href="/Assets/Edit/Media/9397d6bb-22d5-11ed-a81d-000d3aa9ccac?type=video"
                              >
                                <i
                                  className="yellow fa fa-file-video"
                                  title="main (Video)"
                                ></i>
                              </a>
                              <a
                                href="/Assets/Edit/Media/a2025d5c-22d5-11ed-a81d-000d3aa9ccac?type=image"
                              >
                                <i
                                  className="purple fa fa-file-image"
                                  title="cover (Image)"
                                ></i>
                              </a>
                              <a
                                href="/Assets/Edit/Media/bac0dfa4-22d5-11ed-a81d-000d3aa9ccac?type=image"
                              >
                                <i
                                  className="purple fa fa-file-image"
                                  title="long cover (Image)"
                                ></i>
                              </a>
                            </div>
                          </div>
                        </td>
                        <td className="cell-info-main">Sports</td>
                        <td className="hidden-480 cell-info">
                          <a href="/Preview/author/Posts/58">John Smith</a>
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
                              href="/Posts/video/Edit/1072"
                              className="btn btn-new info"
                              ><i className="ace-icon fa fa-edit"></i> تعديل
                            </a>

                            <a
                              href="/Social/Publish/Share?postid=bd293c2b-22d5-11ed-a81d-000d3aa9c700"
                              className="btn btn-new pink"
                              ><i className="ace-icon fa fa-share-alt"></i> نشر
                            </a>
                          </div>
                        </td>
                      </tr>
                      <tr className="clickable-row" data-modelid="617">
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
                          <a href="/Posts/video/Preview/617">
                            <img
                              data-src="https://as-mangopulse-media.azurewebsites.net/store/archive/image/2022/7/29/e8589aad-2129-45cc-9c42-c5b8450a9812.jpg"
                              src="https://as-mangopulse-media.azurewebsites.net/store/archive/image/2022/7/29/e8589aad-2129-45cc-9c42-c5b8450a9812.jpg?preset=table-thumb"
                              className="placeholder"
                            />
                          </a>
                          <div className="cell-data">
                            <a
                              href="/Posts/video/Preview/617"
                              className="cell-title"
                              >تجربة
                            </a>
                            <div className="text posts-users table-metas">
                              <div className="posts-mod entry">29 July 12:30</div>
                              <div className="posts-mod entry">
                                آخر تعديل بواسطة techsupport في 23 Aug 11:43
                              </div>

                              <span className="clearfix"></span>
                            </div>
                            <div className="text posts-media">
                              <a
                                href="https://as-mangopulse-front.azurewebsites.net/Preview/617"
                                className="notajax"
                                target="_blank"
                                ><i className="fa fa-external-link-alt"></i
                              ></a>
                              <a
                                href="/Assets/Edit/Media/fdf6bbb8-0f39-11ed-a81d-000d3aa9ccac?type=video"
                              >
                                <i
                                  className="yellow fa fa-file-video"
                                  title="main (Video)"
                                ></i>
                              </a>
                              <a
                                href="/Assets/Edit/Media/10b89f9c-0f3a-11ed-a81d-000d3aa9ccac?type=image"
                              >
                                <i
                                  className="purple fa fa-file-image"
                                  title="cover (Image)"
                                ></i>
                              </a>
                              <a
                                href="/Assets/Edit/Media/1a873059-0f3a-11ed-a81d-000d3aa9ccac?type=image"
                              >
                                <i
                                  className="purple fa fa-file-image"
                                  title="long cover (Image)"
                                ></i>
                              </a>
                            </div>
                          </div>
                        </td>
                        <td className="cell-info-main">Sports</td>
                        <td className="hidden-480 cell-info"></td>

                        <td className="cell-status">
                          <span className="label label-danger"
                            ><i className="ace-icon fa fa-times bigger-120"></i>
                            Unpublished</span
                          >
                        </td>
                        <td className="cell-actions">
                          <div className="action-buttons">
                            <a
                              href="/Posts/video/Edit/617"
                              className="btn btn-new info"
                              ><i className="ace-icon fa fa-edit"></i> تعديل
                            </a>
                          </div>
                        </td>
                      </tr>
                      <tr className="clickable-row" data-modelid="616">
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
                          <a href="/Posts/video/Preview/616">
                            <img
                              data-src="https://as-mangopulse-media.azurewebsites.net/store/archive/image/2022/7/29/9602ddba-b7bf-4e97-ae7e-92beb56e2edf.jpg"
                              src="https://as-mangopulse-media.azurewebsites.net/store/archive/image/2022/7/29/9602ddba-b7bf-4e97-ae7e-92beb56e2edf.jpg?preset=table-thumb"
                              className="placeholder"
                            />
                          </a>
                          <div className="cell-data">
                            <a
                              href="/Posts/video/Preview/616"
                              className="cell-title"
                              >تجربة
                            </a>
                            <div className="text posts-users table-metas">
                              <div className="posts-mod entry">29 July 12:22</div>
                              <div className="posts-mod entry">
                                آخر تعديل بواسطة techsupport في 23 Aug 11:43
                              </div>

                              <span className="clearfix"></span>
                            </div>
                            <div className="text posts-media">
                              <a
                                href="https://as-mangopulse-front.azurewebsites.net/Preview/616"
                                className="notajax"
                                target="_blank"
                                ><i className="fa fa-external-link-alt"></i
                              ></a>
                              <a
                                href="/Assets/Edit/Media/4684ae88-0e52-11ed-8591-5cbaef4b6f65?type=video"
                              >
                                <i
                                  className="yellow fa fa-file-video"
                                  title="main (Video)"
                                ></i>
                              </a>
                              <a
                                href="/Assets/Edit/Media/074d9196-0f39-11ed-a81d-000d3aa9ccac?type=image"
                              >
                                <i
                                  className="purple fa fa-file-image"
                                  title="cover (Image)"
                                ></i>
                              </a>
                              <a
                                href="/Assets/Edit/Media/12ccaf51-0f39-11ed-a81d-000d3aa9ccac?type=image"
                              >
                                <i
                                  className="purple fa fa-file-image"
                                  title="long cover (Image)"
                                ></i>
                              </a>
                            </div>
                          </div>
                        </td>
                        <td className="cell-info-main">Politics</td>
                        <td className="hidden-480 cell-info">
                          <a href="/Preview/author/Posts/58">John Smith</a>
                        </td>

                        <td className="cell-status">
                          <span className="label label-danger"
                            ><i className="ace-icon fa fa-times bigger-120"></i>
                            Unpublished</span
                          >
                        </td>
                        <td className="cell-actions">
                          <div className="action-buttons">
                            <a
                              href="/Posts/video/Edit/616"
                              className="btn btn-new info"
                              ><i className="ace-icon fa fa-edit"></i> تعديل
                            </a>
                          </div>
                        </td>
                      </tr>
                      <tr className="clickable-row" data-modelid="165">
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
                          <a href="/Posts/video/Preview/165">
                            <img
                              data-src="https://as-mangopulse-media.azurewebsites.net/store/archive/image/2022/7/21/90a889dc-d182-401f-a982-7d097407fc06.png"
                              src="https://as-mangopulse-media.azurewebsites.net/store/archive/image/2022/7/21/90a889dc-d182-401f-a982-7d097407fc06.png?preset=table-thumb"
                              className="placeholder"
                            />
                          </a>
                          <div className="cell-data">
                            <a
                              href="/Posts/video/Preview/165"
                              className="cell-title"
                              >test video
                            </a>
                            <div className="text posts-users table-metas">
                              <div className="posts-mod entry">21 July 11:15</div>
                              <div className="posts-mod entry">
                                آخر تعديل بواسطة techsupport في 23 Aug 11:43
                              </div>

                              <span className="clearfix"></span>
                            </div>
                            <div className="text posts-media">
                              <a
                                href="https://as-mangopulse-front.azurewebsites.net/Preview/165"
                                className="notajax"
                                target="_blank"
                                ><i className="fa fa-external-link-alt"></i
                              ></a>
                              <a
                                href="/Assets/Edit/Media/79718723-099c-11ed-a81d-000d3aa9ccac?type=video"
                              >
                                <i
                                  className="yellow fa fa-file-video"
                                  title="main (Video)"
                                ></i>
                              </a>
                              <a
                                href="/Assets/Edit/Media/fc950342-08e5-11ed-8591-5cbaef4b6f65?type=image"
                              >
                                <i
                                  className="purple fa fa-file-image"
                                  title="cover (Image)"
                                ></i>
                              </a>
                              <a
                                href="/Assets/Edit/Media/0f76fd65-08e6-11ed-8591-5cbaef4b6f65?type=image"
                              >
                                <i
                                  className="purple fa fa-file-image"
                                  title="long cover (Image)"
                                ></i>
                              </a>
                            </div>
                          </div>
                        </td>
                        <td className="cell-info-main">Entertainment</td>
                        <td className="hidden-480 cell-info"></td>

                        <td className="cell-status">
                          <span className="label label-danger"
                            ><i className="ace-icon fa fa-times bigger-120"></i>
                            Unpublished</span
                          >
                        </td>
                        <td className="cell-actions">
                          <div className="action-buttons">
                            <a
                              href="/Posts/video/Edit/165"
                              className="btn btn-new info"
                              ><i className="ace-icon fa fa-edit"></i> تعديل
                            </a>
                          </div>
                        </td>
                      </tr>
                      <tr className="clickable-row" data-modelid="69">
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
                          <a href="/Posts/video/Preview/69">
                            <img
                              data-src="https://as-mangopulse-media.azurewebsites.net/store/archive/image/2022/8/2/f3389c14-ab72-47d3-81c3-7646ce73079c.jpg"
                              src="https://as-mangopulse-media.azurewebsites.net/store/archive/image/2022/8/2/f3389c14-ab72-47d3-81c3-7646ce73079c.jpg?preset=table-thumb"
                              className="placeholder"
                            />
                          </a>
                          <div className="cell-data">
                            <a href="/Posts/video/Preview/69" className="cell-title"
                              >Federer makes history with eighth Wimbledon, 19th
                              major title
                            </a>
                            <div className="text posts-users table-metas">
                              <div className="posts-mod entry">1 July 08:58</div>
                              <div className="posts-mod entry">
                                آخر تعديل بواسطة techsupport في 23 Aug 11:43
                              </div>

                              <span className="clearfix"></span>
                            </div>
                            <div className="text posts-media">
                              <a
                                href="https://as-mangopulse-front.azurewebsites.net/Preview/69"
                                className="notajax"
                                target="_blank"
                                ><i className="fa fa-external-link-alt"></i
                              ></a>
                              <a
                                href="/Assets/Edit/Media/87c0ac55-f15d-11ec-a81b-000d3a924ace?type=video"
                              >
                                <i
                                  className="yellow fa fa-file-video"
                                  title="main (Video)"
                                ></i>
                              </a>
                              <a
                                href="/Assets/Edit/Media/dc1bbca5-1238-11ed-a81d-000d3aa9ccac?type=image"
                              >
                                <i
                                  className="purple fa fa-file-image"
                                  title="cover (Image)"
                                ></i>
                              </a>
                              <a
                                href="/Assets/Edit/Media/d6a21b8a-f91b-11ec-a81d-000d3aa9ccac?type=image"
                              >
                                <i
                                  className="purple fa fa-file-image"
                                  title="long cover (Image)"
                                ></i>
                              </a>
                            </div>
                          </div>
                        </td>
                        <td className="cell-info-main">Sports</td>
                        <td className="hidden-480 cell-info">
                          <a href="/Preview/author/Posts/59">Clark Jones</a>
                        </td>

                        <td className="cell-status">
                          <span className="label label-danger"
                            ><i className="ace-icon fa fa-times bigger-120"></i>
                            Unpublished</span
                          >
                        </td>
                        <td className="cell-actions">
                          <div className="action-buttons">
                            <a
                              href="/Posts/video/Edit/69"
                              className="btn btn-new info"
                              ><i className="ace-icon fa fa-edit"></i> تعديل
                            </a>
                          </div>
                        </td>
                      </tr>
                      <tr className="clickable-row" data-modelid="66">
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
                          <a href="/Posts/video/Preview/66">
                            <img
                              data-src="https://as-mangopulse-media.azurewebsites.net/store/archive/image/2022/7/1/4c37aa8f-fd19-4dc4-b105-6d3f57c5af63.jpg"
                              src="https://as-mangopulse-media.azurewebsites.net/store/archive/image/2022/7/1/4c37aa8f-fd19-4dc4-b105-6d3f57c5af63.jpg?preset=table-thumb"
                              className="placeholder"
                            />
                          </a>
                          <div className="cell-data">
                            <a href="/Posts/video/Preview/66" className="cell-title"
                              >Mod turns ‘Counter-Strike’ into a ‘Tekken’ clone
                              with fighting chickens
                            </a>
                            <div className="text posts-users table-metas">
                              <div className="posts-mod entry">
                                آخر تعديل بواسطة techsupport في 23 Aug 11:43
                              </div>

                              <span className="clearfix"></span>
                            </div>
                            <div className="text posts-media">
                              <a
                                href="https://as-mangopulse-front.azurewebsites.net/Preview/66"
                                className="notajax"
                                target="_blank"
                                ><i className="fa fa-external-link-alt"></i
                              ></a>
                              <a
                                href="/Assets/Edit/Media/a9a8ae91-f151-11ec-a81b-000d3a924ace?type=video"
                              >
                                <i
                                  className="yellow fa fa-file-video"
                                  title="main (Video)"
                                ></i>
                              </a>
                              <a
                                href="/Assets/Edit/Media/dbe10db2-f91c-11ec-a81d-000d3aa9ccac?type=image"
                              >
                                <i
                                  className="purple fa fa-file-image"
                                  title="cover (Image)"
                                ></i>
                              </a>
                              <a
                                href="/Assets/Edit/Media/e5402d41-f91c-11ec-a81d-000d3aa9ccac?type=image"
                              >
                                <i
                                  className="purple fa fa-file-image"
                                  title="long cover (Image)"
                                ></i>
                              </a>
                            </div>
                          </div>
                        </td>
                        <td className="cell-info-main">Business</td>
                        <td className="hidden-480 cell-info">
                          <a href="/Preview/author/Posts/58">John Smith</a>
                        </td>

                        <td className="cell-status">
                          <span className="label label-danger"
                            ><i className="ace-icon fa fa-times bigger-120"></i>
                            Unpublished</span
                          >
                        </td>
                        <td className="cell-actions">
                          <div className="action-buttons">
                            <a
                              href="/Posts/video/Edit/66"
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
    <div
      b-fjwotxpclx=""
      id="message-modal"
      className="modal fade"
      tabIndex="-1"
      style={{display: "none"}}
      aria-hidden="true"
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
          <div b-fjwotxpclx="" className="modal-body">
            <div className="under-construction">
              <h3>
                An Error Has Occured
                <p></p>
              </h3>
            </div>
          </div>
          <div b-fjwotxpclx="" className="modal-footer">
            <button type="button" className="btn-new info" data-dismiss="modal">
              OK
            </button>
          </div>
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
          <div id="cboxMiddleLeft"style={{float: "left"}}></div>
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
        height: 0+"px",
        minHeight: 0 +"px",
      }}
    ></textarea>
    </div>
  )
}

export default VideosPage
