import React from 'react'
import image1 from "../components/images/dxm.png"
import image2 from "../components/images/loader.gif"
import image3 from "../components/images/question.png"
import image4 from "../components/images/social.png"
import image5 from "../components/images/target.png"
import image6 from "../components/images/analytics.png"
import "./css/bootstrap.min.css"
import  "./css/jquery.datetimepicker.css"
import "./css/bootstrap-tagsinput.css"
 import "./css/all.min.css"
import "./css/jquery.Jcrop.css"
import "./css/colorbox.css"
import "./css/main.css"
import "./css/select2.min.css"
import "./css/chosen.css"
import "./css/jquery.gritter.css"
import "./css/ace.css"
import "./css/daterangepicker-bs3.css"
import "./css/bootstrap-wizard.css"
import "./css/duallist.css"
import "./css/jquery-ui.custom.min.css"
import "./css/bootstrap-iconpicker.min.css"
import "./css/backoffice.css"
import "./css/ace-rtl.css"





const MainPage = () => {
  return (
    <div class="no-skin rtl">

    <div className="navbar fixed-top" id="navbar">
        <div className="navbar-container" id="navbar-container" style={{textAlign: 'center'}}>
            <span id="headerloader" className="headericon" style={{display: 'inline-block', height: '33px', marginTop: '7px', width: '33px;'}}>
                <i className=" fa fa-spinner fa-spin bigger-250 white"></i>
            </span>



    <div className="navbar-header product-wrapper pull-right">
        <a href="/"><img src={image1} alt="Experience Manager" className="product-logo"/></a>
    </div>


            <div className="navbar-buttons navbar-header pull-left"
         role="navigation">
        <ul className="nav ace-nav">
            <li>

    <a data-toggle="dropdown" className="dropdown-toggle" href="#">
        <i className="fa fa-th"></i>
    </a>
    <ul className="dropdown-menu products-dropdown dropdown-menu-left dropdown-navbar">
                <li className=" active">
                        <a href="/" className="notajax"><img src="./images/dxm.png" alt="Experience Manager" /></a>
                </li>
                <li className=" ">
                        <a href="/Admin/AdminHome" className="notajax"><img src="/images/admin.png" alt="Admin Panel" /></a>
                </li>
                <li className=" ">
                        <a href="/Social/SocialHome" className="notajax"><img src={image4} alt="Social" /></a>
                </li>
                <li className=" ">
                        <a href="/Community/CommunityHome" className="notajax"><img src="/images/community.png" alt="Community" /></a>
                </li>
                <li className=" ">
                        <a href="/Assets/AssetsHome" className="notajax"><img src="/images/assets.png" alt="Assets Manager" /></a>
                </li>
                <li className="disabled ">
                        <a><img src="/images/analytics.png" alt="Analytics" /></a>
                </li>
                <li className="disabled ">
                        <a><img src="/images/flix.png" alt="Flix" /></a>
                </li>
                <li className="disabled ">
                        <a><img src="/images/audience.png" alt="Audience Manager" /></a>
                </li>
                <li className="disabled ">
                        <a><img src="/images/campaign.png" alt="Campaign" /></a>
                </li>
                <li className="disabled ">
                        <a><img src="/images/target.png" alt="Target" /></a>
                </li>
    </ul>
            </li>
            <li>

    <a data-toggle="dropdown" className="dropdown-toggle user-options" href="#">
            <i className="fa fa-user-circle"></i>
    </a>
    <ul className="dropdown-menu user-dropdown dropdown-menu-left">
        <li className="account">
            <a href="/Account/ChangePassword">
                <i className="icon fa fa-key"></i>
                &#x62A;&#x63A;&#x64A;&#x64A;&#x631; &#x643;&#x644;&#x645;&#x629; &#x627;&#x644;&#x633;&#x631;
            </a>
        </li>
        <li className="account">
            <a href="/Account/ChangeAvatar">
                <i className="icon fa fa-key"></i>
                &#x62A;&#x63A;&#x64A;&#x64A;&#x631; &#x627;&#x644;&#x635;&#x648;&#x631;&#x629;
            </a>
        </li>
        <li className="account">
            <a href="/Account/LogOff" className="notajax">
                <i className="icon fa fa-power-off"></i>
                &#x62A;&#x633;&#x62C;&#x64A;&#x644; &#x627;&#x644;&#x62E;&#x631;&#x648;&#x62C;
            </a>
        </li>
        <li className="divider clearfix"></li>
                <li className="lang active">
                    <a href="/Account/ChangeLanguage?language=ar" className="clearfix notajax">
                        &#x627;&#x644;&#x639;&#x631;&#x628;&#x64A;&#x629;
                    </a>
                </li>
                <li className="lang ">
                    <a href="/Account/ChangeLanguage?language=en" className="clearfix notajax">
                        English
                    </a>
                </li>
    </ul>

            </li>
            <li className="client-wrapper">
                    <a data-toggle="dropdown" className="dropdown-toggle">
            <img src="" alt="MangoX" title="MangoX"/>
        </a>
        <ul className="dropdown-menu dropdown-menu-left">
                <li>
                    <a href="/Technical/Subscription/Apply/7506d461-6ad2-4a07-9ff2-e86cf0442261" className="clearfix notajax">
                        <img src="/images/question.png" alt="MangoX" title="MangoX"/>
                        <h5>MangoX</h5>
                    </a>
                </li>
                <li>
                    <a href="/Technical/Subscription/Apply/cd81f9bf-09bb-4f5f-9e6b-b4aa97a4b465" className="clearfix notajax">
                        <img src="/images/logo.png" alt="1234" title="1234"/>
                        <h5>1234</h5>
                    </a>
                </li>
                <li>
                    <a href="/Technical/Subscription/Apply/3190d3cd-68e6-4205-be41-8c9ad8467941" className="clearfix notajax">
                        <img src="/images/logo.png" alt="abc" title="abc"/>
                        <h5>abc</h5>
                    </a>
                </li>
                <li>
                    <a href="/Technical/Subscription/Apply/be4a949d-96fe-47cc-9aa0-d389e2424010" className="clearfix notajax">
                        <img src="/images/logo.png" alt="MangoX-AR" title="MangoX-AR"/>
                        <h5>MangoX-AR</h5>
                    </a>
                </li>

                <li>
                    <a href="/Technical/Subscription" className="clearfix">
                        <span className="msg-body">&#x627;&#x644;&#x62A;&#x62D;&#x643;&#x645; &#x628;&#x627;&#x644;&#x645;&#x648;&#x627;&#x642;&#x639;</span>
                    </a>
                </li>
        </ul>

            </li>

        </ul>
    </div>

        </div>
    </div>            <div  className="main-container" id="main-container">
    <div className="sidebar " id="sidebar">

        <ul className="nav nav-list">
            <li className="menuitem ">
                <a className=" " href="/Publisher/Widget?id=c207053b-f61f-11ec-8c71-f079596794cc">
                    <i className="menu-icon fas fa-images"></i>
                    <span className='menu-text'>Slider</span>
                </a>

            </li>
            <li className="menuitem ">
                <a className=" " href="/Posts/Index?type=article">
                    <i className="menu-icon fa fa-far fa-newspaper"></i>
                    <span className='menu-text'>Articles</span>
                </a>

            </li>
            <li className="menuitem ">
                <a className=" " href="/Posts/Index?type=video">
                    <i className="menu-icon fas fa-video"></i>
                    <span className='menu-text'>Videos</span>
                </a>

            </li>
            <li className="menuitem ">
                <a className=" " href="/Posts/Index?type=author">
                    <i className="menu-icon fas fa-user-edit "></i>
                    <span className='menu-text'>Author</span>
                </a>

            </li>
    </ul>
    <div className="sidebar-toggle sidebar-collapse" id="sidebar-collapse">
        <i className="ace-icon fa fa-angle-double-right" data-icon1="ace-icon fa fa-angle-double-right" data-icon2="ace-icon fa fa-angle-double-left"></i>
    </div>
        <div className="technical-shortcuts">
                <a className="notajax" href="/Home/Refresh" title="Refresh">
                    <i className="ace-icon fa fa-sync-alt"></i>
                </a>
                <a className="notajax" href="/Manage/ManageHome" title="Tools & Setup">
                    <i className="ace-icon fa fa-tools"></i>
                </a>
                <a className="notajax" href="/Technical/Configs" title="Configs">
                    <i className="ace-icon fa fa-code"></i>
                </a>

        </div>
    </div>
                    <div  className="main-content">
                        <div  className="main-content-inner">


    <div className="breadcrumbs" id="breadcrumbs">
        <ul className="breadcrumb">
            <li>
                <i className="ace-icon fa fa-home home-icon">
                </i>
                <a href="/">
                    &#x627;&#x644;&#x631;&#x626;&#x64A;&#x633;&#x64A;&#x629;
                </a>
            </li>
        </ul>

        <div id="page-data" data-url="https://as-mangopulse-admin.azurewebsites.net/" data-title="">
        </div>
    </div>

    <div className="welcome">
        <h3>
            &#x623;&#x647;&#x644;&#x627;&#x64B; &#x628;&#x643;&#x645;
            Technical Support
        </h3>

    </div>

    <div className="reload-btns">
        <a className="btn btn-new info" href="/Home/ClearAPICache">&#x62A;&#x62D;&#x62F;&#x64A;&#x62B; &#x62A;&#x637;&#x628;&#x64A;&#x642;&#x627;&#x62A; &#x627;&#x644;&#x645;&#x648;&#x628;&#x627;&#x64A;&#x644;</a>
        <a className="btn btn-new info" href="/Home/ClearWebsiteCache">&#x62A;&#x62D;&#x62F;&#x64A;&#x62B; &#x627;&#x644;&#x645;&#x648;&#x642;&#x639;</a>
    </div>
    <div className="page-content">


        <div className="row">
            <div className="col-12">
            </div>
        </div>
    </div>






    <div className="hidden"></div>

    <input type="hidden" id="CurrentUserId" value="0b42217b-e575-49e3-8482-a37100cd76df" />
    <input type="hidden" id="CurrentUsername" value="techsupport" />


                        </div>
                        <span  className="clearfix"></span>
                    </div>
                    <div  className="hidden-content" style={{display:'none'}}></div>
    <div className="footer">
        <div className="footer-inner">
            <div className="footer-content">
                <span className="bigger-120">
                    <span className="blue bold">&copy; </span>
                </span>
            </div>
        </div>
    </div>
                    <div  id="busy-holder">
                        <div  id="busy">
                            <img  src="/images/loader.gif" />

                        </div>
                    </div>
                </div>
            <div  id="message-modal" className="modal fade" tabIndex='-1'>
                <div  className="modal-dialog">
                    <div  className="modal-content">
                        <button  type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span  aria-hidden="true">×</span>
                        </button>
                        <div  className="modal-body"></div>
                        <div  className="modal-footer"></div>
                    </div>
                </div>
            </div>
            <div  id="default-modal" className="modal fade" tabIndex='-1'>
                <div  className="modal-dialog">
                    <div  className="modal-content">
                        <button  type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span  aria-hidden="true">×</span>
                        </button>
                        <div  id="modal-wizard-container">
                            <div  className="modal-header">
                                <h5  className="modal-title h4"></h5>

                            </div>

                            <div  className="modal-body"></div>
                        </div>
                        <div  className="modal-footer"></div>
                    </div>
                </div>
            </div>
            <div  id="over-modal" className="modal fade" tabIndex='-1'>
                <div  className="modal-dialog">
                    <div  className="modal-content">
                        <button  type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span  aria-hidden="true">×</span>
                        </button>
                        <div  id="modal-wizard-container">
                            <div  className="modal-header">
                                <h5  className="modal-title h4"></h5>

                            </div>

                            <div  className="modal-body"></div>
                        </div>
                        <div  className="modal-footer"></div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default MainPage
