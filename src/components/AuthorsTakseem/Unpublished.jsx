// import React from 'react'

// const Unpublished = () => {
//   return (
//     <div>
//        <div class="no-skin rtl">
//   <div class="navbar fixed-top" id="navbar">
//     <div
//       class="navbar-container"
//       id="navbar-container"
//       style="text-align: center"
//     >
//       <span
//         id="headerloader"
//         class="headericon"
//         style="display: none; height: 33px; margin-top: 7px; width: 33px"
//       >
//         <i class="fa fa-spinner fa-spin bigger-250 white"></i>
//       </span>

//       <div class="navbar-header product-wrapper pull-right">
//         <a href="/"
//           ><img
//             src="//admango.cdn.mangomolo.com/analytics/mangopulse/images/products/dxm.png"
//             alt="Experience Manager"
//             class="product-logo"
//         /></a>
//       </div>

//       <style>
//         :root {
//           --hilight-color: #90298e;
//           --hilight-color2: #90298e;
//         }
//       </style>
//       <div class="navbar-buttons navbar-header pull-left" role="navigation">
//         <ul class="nav ace-nav">
//           <li>
//             <a data-toggle="dropdown" class="dropdown-toggle" href="#">
//               <i class="fa fa-th"></i>
//             </a>
//             <ul
//               class="dropdown-menu products-dropdown dropdown-menu-left dropdown-navbar"
//             >
//               <li class="active">
//                 <a href="/" class="notajax"
//                   ><img
//                     src="//admango.cdn.mangomolo.com/analytics/mangopulse/images/products/dxm.png"
//                     alt="Experience Manager"
//                 /></a>
//               </li>
//               <li class=" ">
//                 <a href="/Admin/AdminHome" class="notajax"
//                   ><img
//                     src="//admango.cdn.mangomolo.com/analytics/mangopulse/images/products/admin.png"
//                     alt="Admin Panel"
//                 /></a>
//               </li>
//               <li class=" ">
//                 <a href="/Social/SocialHome" class="notajax"
//                   ><img
//                     src="//admango.cdn.mangomolo.com/analytics/mangopulse/images/products/social.png"
//                     alt="Social"
//                 /></a>
//               </li>
//               <li class=" ">
//                 <a href="/Community/CommunityHome" class="notajax"
//                   ><img
//                     src="//admango.cdn.mangomolo.com/analytics/mangopulse/images/products/community.png"
//                     alt="Community"
//                 /></a>
//               </li>
//               <li class=" ">
//                 <a href="/Assets/AssetsHome" class="notajax"
//                   ><img
//                     src="//admango.cdn.mangomolo.com/analytics/mangopulse/images/products/assets.png"
//                     alt="Assets Manager"
//                 /></a>
//               </li>
//               <li class="disabled">
//                 <a
//                   ><img
//                     src="//admango.cdn.mangomolo.com/analytics/mangopulse/images/products/analytics.png"
//                     alt="Analytics"
//                 /></a>
//               </li>
//               <li class="disabled">
//                 <a
//                   ><img
//                     src="//admango.cdn.mangomolo.com/analytics/mangopulse/images/products/flix.png"
//                     alt="Flix"
//                 /></a>
//               </li>
//               <li class="disabled">
//                 <a
//                   ><img
//                     src="//admango.cdn.mangomolo.com/analytics/mangopulse/images/products/audience.png"
//                     alt="Audience Manager"
//                 /></a>
//               </li>
//               <li class="disabled">
//                 <a
//                   ><img
//                     src="//admango.cdn.mangomolo.com/analytics/mangopulse/images/products/campaign.png"
//                     alt="Campaign"
//                 /></a>
//               </li>
//               <li class="disabled">
//                 <a
//                   ><img
//                     src="//admango.cdn.mangomolo.com/analytics/mangopulse/images/products/target.png"
//                     alt="Target"
//                 /></a>
//               </li>
//             </ul>
//           </li>
//           <li>
//             <a
//               data-toggle="dropdown"
//               class="dropdown-toggle user-options"
//               href="#"
//             >
//               <i class="fa fa-user-circle"></i>
//             </a>
//             <ul class="dropdown-menu user-dropdown dropdown-menu-left">
//               <li class="account">
//                 <a href="/Account/ChangePassword">
//                   <i class="icon fa fa-key"></i>
//                   ?????????? ???????? ????????
//                 </a>
//               </li>
//               <li class="account">
//                 <a href="/Account/ChangeAvatar">
//                   <i class="icon fa fa-key"></i>
//                   ?????????? ????????????
//                 </a>
//               </li>
//               <li class="account">
//                 <a href="/Account/LogOff" class="notajax">
//                   <i class="icon fa fa-power-off"></i>
//                   ?????????? ????????????
//                 </a>
//               </li>
//               <li class="divider clearfix"></li>
//               <li class="lang">
//                 <a
//                   href="/Account/ChangeLanguage?language=en"
//                   class="clearfix notajax"
//                 >
//                   English
//                 </a>
//               </li>
//               <li class="lang active">
//                 <a
//                   href="/Account/ChangeLanguage?language=ar"
//                   class="clearfix notajax"
//                 >
//                   ??????????????
//                 </a>
//               </li>
//             </ul>
//           </li>
//           <li class="client-wrapper">
//             <a data-toggle="dropdown" class="dropdown-toggle">
//               <img src="" alt="MangoX" title="MangoX" />
//             </a>
//             <ul class="dropdown-menu dropdown-menu-left">
//               <li>
//                 <a
//                   href="/Technical/Subscription/Apply/7506d461-6ad2-4a07-9ff2-e86cf0442261"
//                   class="clearfix notajax"
//                 >
//                   <img
//                     src="http://admango.cdn.mangomolo.com/analytics/mangopulse/images/question.png"
//                     alt="MangoX"
//                     title="MangoX"
//                   />
//                   <h5>MangoX</h5>
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="/Technical/Subscription/Apply/cd81f9bf-09bb-4f5f-9e6b-b4aa97a4b465"
//                   class="clearfix notajax"
//                 >
//                   <img
//                     src="//media.test/uploads/logo.png"
//                     alt="1234"
//                     title="1234"
//                   />
//                   <h5>1234</h5>
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="/Technical/Subscription/Apply/3190d3cd-68e6-4205-be41-8c9ad8467941"
//                   class="clearfix notajax"
//                 >
//                   <img
//                     src="//media.abc/uploads/logo.png"
//                     alt="abc"
//                     title="abc"
//                   />
//                   <h5>abc</h5>
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="/Technical/Subscription/Apply/be4a949d-96fe-47cc-9aa0-d389e2424010"
//                   class="clearfix notajax"
//                 >
//                   <img
//                     src="//media.as-mangopulse-front-ar.azurewebsites.net/uploads/logo.png"
//                     alt="MangoX-AR"
//                     title="MangoX-AR"
//                   />
//                   <h5>MangoX-AR</h5>
//                 </a>
//               </li>

//               <li>
//                 <a href="/Technical/Subscription" class="clearfix">
//                   <span class="msg-body">???????????? ????????????????</span>
//                 </a>
//               </li>
//             </ul>
//           </li>
//         </ul>
//       </div>
//     </div>
//   </div>
//   <div b-fjwotxpclx="" class="main-container" id="main-container">
//     <div class="sidebar" id="sidebar">
//       <ul class="nav nav-list">
//         <li class="menuitem">
//           <a
//             class=" "
//             href="/Publisher/Widget?id=c207053b-f61f-11ec-8c71-f079596794cc"
//           >
//             <i class="menu-icon fas fa-images"></i>
//             <span class="menu-text">Slider</span>
//           </a>
//         </li>
//         <li class="menuitem">
//           <a class=" " href="/Posts/Index?type=article">
//             <i class="menu-icon fa fa-far fa-newspaper"></i>
//             <span class="menu-text">Articles</span>
//           </a>
//         </li>
//         <li class="menuitem">
//           <a class=" " href="/Posts/Index?type=video">
//             <i class="menu-icon fas fa-video"></i>
//             <span class="menu-text">Videos</span>
//           </a>
//         </li>
//         <li class="menuitem">
//           <a class=" " href="/Posts/Index?type=author">
//             <i class="menu-icon fas fa-user-edit"></i>
//             <span class="menu-text">Author</span>
//           </a>
//         </li>
//       </ul>
//       <div class="sidebar-toggle sidebar-collapse" id="sidebar-collapse">
//         <i
//           class="ace-icon fa fa-angle-double-right"
//           data-icon1="ace-icon fa fa-angle-double-right"
//           data-icon2="ace-icon fa fa-angle-double-left"
//         ></i>
//       </div>
//       <div class="technical-shortcuts">
//         <a class="notajax" href="/Home/Refresh" title="Refresh">
//           <i class="ace-icon fa fa-sync-alt"></i>
//         </a>
//         <a class="notajax" href="/Manage/ManageHome" title="Tools &amp; Setup">
//           <i class="ace-icon fa fa-tools"></i>
//         </a>
//         <a class="notajax" href="/Technical/Configs" title="Configs">
//           <i class="ace-icon fa fa-code"></i>
//         </a>
//       </div>
//     </div>
//     <div b-fjwotxpclx="" class="main-content">
//       <div b-fjwotxpclx="" class="main-content-inner">
//         <div class="breadcrumbs" id="breadcrumbs">
//           <ul class="breadcrumb">
//             <li>
//               <i class="ace-icon fa fa-home home-icon"> </i>
//               <a href="/"> ???????????????? </a>
//             </li>
//             <li>
//               <a href="/Posts?type=author"> Author </a>
//             </li>
//           </ul>

//           <div
//             id="page-data"
//             data-url="https://as-mangopulse-admin.azurewebsites.net/Posts/Tabs?type=author&amp;status=30"
//             data-title="Author"
//           ></div>
//         </div>
//         <div class="page-content">
//           <div class="page-header">
//             <div class="quick-create">
//               <a href="/Posts/Create?type=author" title=""
//                 ><i class="fa fa-plus"></i
//               ></a>
//             </div>
//             <h1>Author</h1>
//             <div class="page-operations">
//               <a href="/Posts/Tabs?type=author" class="btn btn-new info"
//                 ><i class="ace-icon fa fa-sync"></i> ??????????
//               </a>
//               <div class="pull-left">
//                 <a
//                   href="/Posts?type=author"
//                   class="btn btn-new pink btn-all-author"
//                   ><i class="ace-icon fa fa-list"></i> ????????
//                 </a>
//               </div>
//             </div>
//           </div>

//           <div class="body-card">
//             <div class="row">
//               <div class="col-12">
//                 <div class="tabbable">
//                   <ul class="nav nav-tabs" id="statustabs">
//                     <li class="nav-item">
//                       <a
//                         class="nav-link"
//                         href="/Posts/Tabs?type=author&amp;status=10"
//                       >
//                         <i class="blue ace-icon fa fa-bolt bigger-120"></i>
//                         New
//                       </a>
//                     </li>
//                     <li class="nav-item">
//                       <a
//                         class="nav-link"
//                         href="/Posts/Tabs?type=author&amp;status=20"
//                       >
//                         <i class="green ace-icon fa fa-check bigger-120"></i>
//                         Published
//                       </a>
//                     </li>
//                     <li class="nav-item">
//                       <a
//                         class="nav-link active"
//                         href="/Posts/Tabs?type=author&amp;status=30"
//                       >
//                         <i class="red ace-icon fa fa-times bigger-120"></i>
//                         Unpublished
//                       </a>
//                     </li>
//                     <li class="nav-item">
//                       <a
//                         class="nav-link"
//                         href="/Posts/Tabs?type=author&amp;status=-100"
//                       >
//                         <i class="red ace-icon fa fa-times bigger-120"></i>
//                         Deleted
//                       </a>
//                     </li>
//                     <li class="nav-item">
//                       <a
//                         class="nav-link"
//                         href="/Posts/Tabs?type=author&amp;status=-150"
//                       >
//                         <i class="ace-icon fa fa- bigger-120"></i>
//                         Expired
//                       </a>
//                     </li>
//                   </ul>

//                   <div class="tab-content">
//                     <div class="tab-pane fade in active show">
//                       <div
//                         class="data-table"
//                         data-size="20"
//                         data-moreurl="/Posts?MainRequest=False&amp;type=author&amp;Status=30"
//                       >
//                         <table class="table">
//                           <thead>
//                             <tr>
//                               <th>??????????</th>

//                               <th>????????????</th>
//                               <th></th>
//                             </tr>
//                           </thead>

//                           <tbody></tbody>
//                         </table>
//                       </div>
//                       <div class="paging-wrapper">
//                         <div class="p-block">
//                           <input
//                             type="number"
//                             class="size-input"
//                             max="100"
//                             min="10"
//                             step="10"
//                             data-bind="value: size, event:{ change: changesize}"
//                           />?????? ???? ????????????
//                         </div>
//                         <div class="p-block"><span class="from-to"></span></div>
//                         <div class="p-block">
//                           <div class="input-group">
//                             <span
//                               class="input-group-addon"
//                               data-bind="click: previous"
//                               ><i class="fa fa-chevron-right"></i></span
//                             ><input
//                               type="text"
//                               class="form-control page-input"
//                               data-bind="value: fetchingPage, event:{ change: changepage}"
//                             /><span
//                               class="input-group-addon"
//                               data-bind="click: next"
//                               ><i class="fa fa-chevron-left"></i
//                             ></span>
//                           </div>
//                         </div>
//                         <span class="clearfix"></span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <span class="clearfix"></span>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div class="hidden"></div>
//         <script>
//           $('button[type="submit"]').prop("disabled", false);
//           $('button[type="submit"]').removeAttr("disabled");

//           var Referrer =
//             "https://as-mangopulse-admin.azurewebsites.net/Posts/Tabs?type=author&amp;status=-100";
//           $(function () {
//             window.neweditormodule.setConfigs({
//               Editor: "tinymce",
//               ApiKey: "5rkmfsc5r0w74veek23qeo6968hgllnk0020ocef4nluee22",
//               EditorTheme: "silver",
//               BodyClass: "",
//               CustomCss: "",
//               CustomStyle: "",
//               Plugins:
//                 "advlist,advupload,autolink,charmap,code,directionality,fullscreen,help,hr,imagetools,insertdatetime,link,lists,media,paste,preview,searchreplace,table",
//               MenuBarItems: "",
//               Menu: {
//                 file: {
//                   title: "File",
//                   items: "newdocument restoredraft | preview | print+",
//                 },
//                 edit: {
//                   title: "Edit",
//                   items: "cut copy paste | selectall | searchreplace",
//                 },
//                 view: { title: "View", items: "code | preview" },
//                 insert: {
//                   title: "Insert",
//                   items:
//                     "advupload_image advupload_video media | link | hr |  anchor toc | insertdatetime",
//                 },
//                 format: {
//                   title: "Format",
//                   items:
//                     "bold italic underline strikethrough  | formats blockformats fontsizes align",
//                 },
//                 tools: {
//                   title: "Tools",
//                   items: "spellchecker spellcheckerlanguage | code wordcount",
//                 },
//                 table: {
//                   title: "Table",
//                   items: "inserttable tableprops deletetable row column cell",
//                 },
//                 help: { title: "Help", items: "help" },
//               },
//               ContextMenu:
//                 "undo redo | showcomments deleteallconversations | charmap emoticons nonbreaking | code paste preview | searchreplace fullscreen help",
//               InsertToolbar:
//                 "table | numlist bullist | advupload_image advupload_video media | charmap insertdatetime",
//               SelectionToolbar:
//                 "removeformat bold italic underline strikethrough | alignleft aligncenter alignright alignjustify | h3 h4 | blockquote quicklink",
//               Toolbar:
//                 "removeformat undo redo | fullscreen code preview help | searchreplace | bold italic underline strikethrough | alignleft aligncenter alignright alignjustify | h3 h4  | advupload_image advupload_video media | blockquote table | numlist bullist| charmap hr insertdatetime",
//               ImageToolsToolbar:
//                 "editimage | alignleft aligncenter alignright alignjustify",
//               FontFormats: "",
//               FontsSizes: "8pt 10pt 12pt 14pt 18pt 24pt 36pt",
//               BlockFormats: "",
//               PreviewStyles:
//                 "font-size,font-weight,text-decoration,text-transform",
//               StyleFormats: [],
//               AllowHtml: true,
//               PasteAsPlainText: true,
//               EnableComments: false,
//               EnableCollaboration: false,
//               CollaborationApiKey: "",
//             });
//             window.back.currentController = "Posts";
//             window.back.currentAction = "Tabs";
//             window.back.currentArea = "";
//             window.back.initialize();
//           });
//         </script>

//         <input
//           type="hidden"
//           id="CurrentUserId"
//           value="0b42217b-e575-49e3-8482-a37100cd76df"
//         />
//         <input type="hidden" id="CurrentUsername" value="techsupport" />
//       </div>
//       <span b-fjwotxpclx="" class="clearfix"></span>
//     </div>
//     <div b-fjwotxpclx="" class="hidden-content" style="display: none"></div>
//     <div class="footer">
//       <div class="footer-inner">
//         <div class="footer-content">
//           <span class="bigger-120">
//             <span class="blue bold">?? </span>
//           </span>
//         </div>
//       </div>
//     </div>
//     <div b-fjwotxpclx="" id="busy-holder" style="display: none">
//       <div b-fjwotxpclx="" id="busy" style="top: 260.5px; left: 619px">
//         <img
//           b-fjwotxpclx=""
//           src="//admango.cdn.mangomolo.com/analytics/mangopulse/images/loader.gif"
//         />
//       </div>
//     </div>
//   </div>
//   <div b-fjwotxpclx="" id="message-modal" class="modal fade" tabindex="-1">
//     <div b-fjwotxpclx="" class="modal-dialog">
//       <div b-fjwotxpclx="" class="modal-content">
//         <button
//           b-fjwotxpclx=""
//           type="button"
//           class="close"
//           data-dismiss="modal"
//           aria-label="Close"
//         >
//           <span b-fjwotxpclx="" aria-hidden="true">??</span>
//         </button>
//         <div b-fjwotxpclx="" class="modal-body"></div>
//         <div b-fjwotxpclx="" class="modal-footer"></div>
//       </div>
//     </div>
//   </div>
//   <div
//     b-fjwotxpclx=""
//     id="default-modal"
//     class="modal fade initialized"
//     tabindex="-1"
//   >
//     <div b-fjwotxpclx="" class="modal-dialog">
//       <div b-fjwotxpclx="" class="modal-content">
//         <button
//           b-fjwotxpclx=""
//           type="button"
//           class="close"
//           data-dismiss="modal"
//           aria-label="Close"
//         >
//           <span b-fjwotxpclx="" aria-hidden="true">??</span>
//         </button>
//         <div b-fjwotxpclx="" id="modal-wizard-container">
//           <div b-fjwotxpclx="" class="modal-header">
//             <h5 b-fjwotxpclx="" class="modal-title h4"></h5>
//           </div>

//           <div b-fjwotxpclx="" class="modal-body"></div>
//         </div>
//         <div b-fjwotxpclx="" class="modal-footer"></div>
//       </div>
//     </div>
//   </div>
//   <div
//     b-fjwotxpclx=""
//     id="over-modal"
//     class="modal fade initialized"
//     tabindex="-1"
//   >
//     <div b-fjwotxpclx="" class="modal-dialog">
//       <div b-fjwotxpclx="" class="modal-content">
//         <button
//           b-fjwotxpclx=""
//           type="button"
//           class="close"
//           data-dismiss="modal"
//           aria-label="Close"
//         >
//           <span b-fjwotxpclx="" aria-hidden="true">??</span>
//         </button>
//         <div b-fjwotxpclx="" id="modal-wizard-container">
//           <div b-fjwotxpclx="" class="modal-header">
//             <h5 b-fjwotxpclx="" class="modal-title h4"></h5>
//           </div>

//           <div b-fjwotxpclx="" class="modal-body"></div>
//         </div>
//         <div b-fjwotxpclx="" class="modal-footer"></div>
//       </div>
//     </div>
//   </div>

//   <div id="cboxOverlay" style="display: none"></div>
//   <div id="colorbox" class="" role="dialog" tabindex="-1" style="display: none">
//     <div id="cboxWrapper">
//       <div>
//         <div id="cboxTopLeft" style="float: left"></div>
//         <div id="cboxTopCenter" style="float: left"></div>
//         <div id="cboxTopRight" style="float: left"></div>
//       </div>
//       <div style="clear: left">
//         <div id="cboxMiddleLeft" style="float: left"></div>
//         <div id="cboxContent" style="float: left">
//           <div id="cboxTitle" style="float: left"></div>
//           <div id="cboxCurrent" style="float: left"></div>
//           <button type="button" id="cboxPrevious"></button
//           ><button type="button" id="cboxNext"></button
//           ><button id="cboxSlideshow"></button>
//           <div id="cboxLoadingOverlay" style="float: left"></div>
//           <div id="cboxLoadingGraphic" style="float: left"></div>
//         </div>
//         <div id="cboxMiddleRight" style="float: left"></div>
//       </div>
//       <div style="clear: left">
//         <div id="cboxBottomLeft" style="float: left"></div>
//         <div id="cboxBottomCenter" style="float: left"></div>
//         <div id="cboxBottomRight" style="float: left"></div>
//       </div>
//     </div>
//     <div
//       style="
//         position: absolute;
//         width: 9999px;
//         visibility: hidden;
//         display: none;
//       "
//     ></div>
//   </div>
//   <textarea
//     tabindex="-1"
//     style="
//       position: absolute;
//       inset: -999px auto auto 0px;
//       border: 0px;
//       padding: 0px;
//       box-sizing: content-box;
//       overflow-wrap: break-word;
//       overflow: hidden;
//       transition: none 0s ease 0s;
//       height: 0px !important;
//       min-height: 0px !important;
//     "
//   ></textarea>
//     </div>
//   )
// }

// export default Unpublished
