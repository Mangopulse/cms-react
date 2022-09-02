import React from 'react'

const SliderEyeClick = () => {
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
          <li className="">
            <a
              data-toggle="dropdown"
              className="dropdown-toggle"
              href="#"
              aria-expanded="false"
            >
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
        <li className="menuitem active highlight">
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
              <a
                href="/Posts?Type=article&amp;OrderBy=CreationDate%20DESC&amp;Page=1&amp;MainRequest=True&amp;SearchRequest=False&amp;ThisYear=False&amp;SubscriptionId=00000000-0000-0000-0000-000000000000"
              >
                Article
              </a>
            </li>
            <li>
              <a href="/Posts/author/Preview/59"> Clark Jones </a>
            </li>
            <li>
              <a
                href="/Posts?Type=article&amp;Term=business&amp;OrderBy=CreationDate%20DESC&amp;Page=1&amp;MainRequest=True&amp;SearchRequest=False&amp;ThisYear=False&amp;SubscriptionId=00000000-0000-0000-0000-000000000000"
              >
                Business
              </a>
            </li>
            <li className="active">
              3 Ways to make your business presentation more relatable
            </li>
          </ul>

          <div
            id="page-data"
            data-url="https://as-mangopulse-admin.azurewebsites.net/Posts/article/Preview/92"
            data-title="Business - 3 Ways to make your business presentation more relatable"
          ></div>
        </div>
        <div className="page-content">
          <div className="page-header">
            <div className="personal-share">
              <input type="checkbox" className="checkbox" id="share" />
              <label for="share" className="entypo-export quick-create"
                ><i className="fa fa-share-alt" aria-hidden="true"></i
              ></label>
              <div className="social-networks-wrapper">
                <ul className="networks-list">
                  <li className="entypo-facebook">
                    <a
                      href="https://www.facebook.com/sharer/sharer.php?u=https://as-mangopulse-shortlinks.azurewebsites.net/1U"
                      target="_blank"
                      ><i className="fab fa-facebook-f" aria-hidden="true"></i
                    ></a>
                  </li>
                  <li className="entypo-twitter">
                    <a
                      href="https://twitter.com/intent/tweet?text=3 Ways to make your business presentation more relatable&amp;url=https://as-mangopulse-shortlinks.azurewebsites.net/1U"
                      target="_blank"
                      ><i className="fab fa-twitter" aria-hidden="true"></i
                    ></a>
                  </li>
                </ul>
              </div>
            </div>
            <h1>3 Ways to make your business presentation more relatable</h1>

            <div className="page-operations">
              <a href="/Posts/article/Edit/92" className="btn btn-new info"
                ><i className="ace-icon fa fa-edit"></i> تعديل
              </a>

              <a
                href="/Social/Publish/Share?postid=c9088b03-f90b-11ec-a81d-000d3aa9c700"
                className="btn btn-new pink"
                ><i className="ace-icon fa fa-share-alt"></i> نشر
              </a>

              <a href="/Posts/article/Withdraw/92" className="btn btn-new warning"
                ><i className="ace-icon fa fa-times"></i> إلغاء نشر
              </a>
              <div className="btn-group">
                <button
                  data-toggle="dropdown"
                  className="btn btn-new dropdown-toggle"
                  aria-expanded="false"
                >
                  <span className="ace-icon fa fa-caret-down icon-only"></span>
                </button>

                <ul className="dropdown-menu-left dropdown-menu">
                  <li>
                    <a
                      href="/Posts/article/Delete/92"
                      className="btn btn-new danger"
                      data-dontchangeurl="true"
                      data-confirmmessage="Are You Sure Delete"
                      data-href="/Posts/article/Delete/92"
                      ><i className="ace-icon fa fa-trash"></i> حذف
                    </a>
                  </li>
                  <li>
                    <a href="/Posts/article/Details/92" className="btn btn-new pink"
                      ><i className="ace-icon fa fa-info"></i> التفاصيل
                    </a>
                  </li>

                  <li>
                    <a href="/Posts/article/History/92" className="btn btn-new info"
                      ><i className="ace-icon fa fa-history"></i> السجل
                    </a>
                  </li>

                  <li>
                    <a
                      href="/Posts/article/Share/92"
                      className="btn btn-new success"
                      ><i className="ace-icon fa fa-bell"></i> Send To Social
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="post-preview-metas">
            <div className="line meta-entries">
              <span className="entry"
                ><b>تاريخ الإضافة:</b> 1 July 07:02 (techsupport)</span
              >
              <span className="entry"
                ><b>آخر تعديل:</b> 29 Aug 09:30 (techsupport)</span
              >
              <span className="entry"><b>منشور:</b> 1 July 07:09 </span>
              <span className="entry"><b>آخر زيارة:</b> 10 Aug 11:58 </span>
              <span className="entry"> <b>مشاهدات:</b> 0 </span>
              <span className="entry"> <b>نشر :</b> 0 </span>
            </div>
            <div className="line">
              <span className="label label-success"
                ><i className="ace-icon fa fa-check bigger-120"></i> Published</span
              >
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <div className="post-preview">
                <div id="post-preview-options">
                  <a href="javascript:void(0)" className="switch-view" id="mobile"
                    ><i className="fa fa-mobile-alt"></i
                  ></a>
                  <span className="separator"></span>
                  <a href="javascript:void(0)" className="switch-view" id="tablet"
                    ><i className="fa fa-tablet-alt"></i
                  ></a>
                  <span className="separator"></span>
                  <a href="javascript:void(0)" className="switch-view" id="desktop"
                    ><i className="fa fa-desktop"></i
                  ></a>
                  <span className="separator"></span>
                  <a
                    href="https://as-mangopulse-front.azurewebsites.net/article/business/92/3-ways-to-make-your-business-presentation-more-relatable"
                    target="_blank"
                    className="notajax"
                    ><i className="fa fa-globe"></i
                  ></a>

                  <a
                    href="https://as-mangopulse-front.azurewebsites.net/author/ArticleAuthor/3 Ways to make your business presentation more relatable"
                    target="_blank"
                    className="notajax"
                    title="Author 3 Ways to make your business presentation more relatable"
                    ><i className="fa fa-question-circle"></i
                  ></a>
                </div>
                <div className="mt-45"></div>
                <div id="post-preview-content">
                  <section>
                    <article>
                      <h1>
                        3 Ways to make your business presentation more relatable
                      </h1>
                      <ul className="meta-entries">
                        <li className="entry">7/1/2022 7:09:19 AM</li>
                        <li className="entry">
                          <a href="/Posts/author/Preview/59">Clark Jones</a>
                        </li>
                      </ul>
                      <span className="clearfix"></span>
                      <p className="post-summary">
                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                        aut odit aut fugit, sed quia consequuntur magni dolores.
                      </p>

                      <div className="post-content">
                        <p style={{textAlign: "left"}}>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat.
                        </p>
                        <p style={{textAlign: "left"}}>
                          Nemo enim ipsam voluptatem quia voluptas sit
                          aspernatur aut odit aut fugit, sed quia consequuntur
                          magni dolores eos qui ratione voluptatem sequi
                          nesciunt.
                        </p>
                        <p style={{textAlign: "left"}}>
                          Et harum quidem rerum facilis est et expedita
                          distinctio. Nam libero tempore, cum soluta nobis est
                          eligendi optio cumque nihil impedit quo minus id quod
                          maxime placeat facere possimus, omnis voluptas
                          assumenda est, omnis dolor repellendus.
                        </p>
                        <p style={{textAlign: "left"}}>
                          Nulla pariatur. Excepteur sint occaecat cupidatat non
                          proident, sunt in culpa qui officia deserunt mollit
                          anim id est laborum.
                        </p>
                        <p style={{textAlign: "left"}}>
                          Sed ut perspiciatis unde omnis iste natus error sit
                          voluptatem accusantium doloremque laudantium, totam
                          rem aperiam, eaque ipsa quae ab illo inventore
                          veritatis et quasi architecto beatae vitae dicta sunt
                          explicabo.
                        </p>
                        <p style={{textAlign: "left"}}>
                          “Duis aute irure dolor in reprehenderit in voluptate
                          velit esse cillum dolore eu fugiat”<br />Neque porro
                          quisquam est, qui dolorem ipsum quia dolor sit amet,
                          consectetur, adipisci velit, sed quia non numquam eius
                          modi tempora incidunt ut labore et dolore magnam
                          aliquam quaerat voluptatem. Ut enim ad minima veniam,
                          quis nostrum exercitationem ullam corporis suscipit
                          laboriosam, nisi ut aliquid ex ea commodi consequatur.
                        </p>
                        <p style={{textAlign: "left"}}>
                          &nbsp;<br />At vero eos et accusamus et iusto odio
                          dignissimos ducimus qui blanditiis praesentium
                          voluptatum deleniti atque corrupti quos dolores et
                          quas molestias excepturi sint occaecati cupiditate non
                          provident, similique sunt in culpa qui officia
                          deserunt mollitia animi, id est laborum et dolorum
                          fuga.
                        </p>
                      </div>
                    </article>
                  </section>
                </div>
                <div className="col-12"></div>
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
        <div id="cboxTopCenter"style={{float: "left"}}></div>
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
      height: 0+"px" ,
      minHeight: 0+"px" ,
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

export default SliderEyeClick
