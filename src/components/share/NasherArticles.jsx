import React from 'react'
import { Link } from 'react-router-dom'
import HorizantalNavbar from '../HorizantalNavbar'
import VerticalNavbar from '../VerticalNavbar'
import Tabs from "./Tabs"
const NasherArticles = () => {
  return (
    <div className="no-skin rtl make-rtl">
  <div className="navbar fixed-top" id="navbar">
     <HorizantalNavbar />
  </div>
  <div b-fjwotxpclx="" className="main-container" id="main-container">
    <div className="sidebar" id="sidebar">
       <VerticalNavbar />
      <div className="sidebar-toggle sidebar-collapse" id="sidebar-collapse">
       
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
              <Link to="/"> الرئيسية </Link>
            </li>
            <li>
              <a href="/Social/SocialHome"> Social </a>
            </li>
          </ul>


          <div
            id="page-data"
            data-url="https://as-mangopulse-admin.azurewebsites.net/Social/Publish/Share?postid=345e8972-2798-11ed-8c88-f079596794cc"
            data-title=""
          ></div>
        </div>
        <div className="page-content">
          <form
            action="/Social/Publish/Send"
            area="Social"
            className="form-horizontal share-form"
            id="sharing-form"
            method="post"
          >
            <div className="page-header">
              <h1>1news1</h1>
              <div className="page-operations">
                <a href="/Posts/article/Preview/1231" className="btn btn-new grey"
                  ><i className="ace-icon fa fa-times"></i> رجوع
                </a>
                <button
                  type="submit"
                  onclick="return validateForm(this);"
                  className="btn btn-new pink share-btn"
                >
                  <i className="ace-icon fa fa-share"></i>إرسال
                </button>
              </div>
            </div>
            <Tabs />
            <input
              name="__RequestVerificationToken"
              type="hidden"
              value="CfDJ8Gw4EJhP_tFBqoXBSpM7LZ0dFBSoK-SO3Hb0khihne0SJoIvHOu8H5IO4BuA3TcPJlrPgwZ8ECpXwKZqYd9ZaEDOYKDHJXMNqHYNU-PeVOARmNOA4HL-fYtL3qmblKNiVW2230Ag1JM3woeB5lh8vnDt5RP_Etg57zA4rcaNO-KyAv90jSZlXKq1OXUfcWbbmg"
            />
          </form>
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
  <div className="xdsoft_datetimepicker xdsoft_noselect xdsoft_rtl xdsoft_">
    <div className="xdsoft_datepicker active">
      <div className="xdsoft_monthpicker">
        <button
          type="button"
          className="xdsoft_prev"
          style={{visibility: "visible"}}
        ></button
        ><button
          type="button"
          className="xdsoft_today_button"
          style={{visibility: "visible"}}
        ></button>
        <div className="xdsoft_label xdsoft_month">
          <span>September</span>
          <div className="xdsoft_select xdsoft_monthselect xdsoft_scroller_box">
            <div style={{marginTop: 0+"px"}}>
              <div className="xdsoft_option" data-value="0">January</div>
              <div className="xdsoft_option" data-value="1">February</div>
              <div className="xdsoft_option" data-value="2">March</div>
              <div className="xdsoft_option" data-value="3">April</div>
              <div className="xdsoft_option" data-value="4">May</div>
              <div className="xdsoft_option" data-value="5">June</div>
              <div className="xdsoft_option" data-value="6">July</div>
              <div className="xdsoft_option" data-value="7">August</div>
              <div className="xdsoft_option xdsoft_current" data-value="8">
                September
              </div>
              <div className="xdsoft_option" data-value="9">October</div>
              <div className="xdsoft_option" data-value="10">November</div>
              <div className="xdsoft_option" data-value="11">December</div>
            </div>
            <div className="xdsoft_scrollbar">
              <div
                className="xdsoft_scroller"
                style={{height: 10+"px", marginTop: 0+"px"}}
              ></div>
            </div>
          </div>
          <i></i>
        </div>
        <div className="xdsoft_label xdsoft_year">
          <span>2022</span>
          <div className="xdsoft_select xdsoft_yearselect xdsoft_scroller_box">
            <div style={{marginTop: 0+"px"}}>
              <div className="xdsoft_option" data-value="1950">1950</div>
              <div className="xdsoft_option" data-value="1951">1951</div>
              <div className="xdsoft_option" data-value="1952">1952</div>
              <div className="xdsoft_option" data-value="1953">1953</div>
              <div className="xdsoft_option" data-value="1954">1954</div>
              <div className="xdsoft_option" data-value="1955">1955</div>
              <div className="xdsoft_option" data-value="1956">1956</div>
              <div className="xdsoft_option" data-value="1957">1957</div>
              <div className="xdsoft_option" data-value="1958">1958</div>
              <div className="xdsoft_option" data-value="1959">1959</div>
              <div className="xdsoft_option" data-value="1960">1960</div>
              <div className="xdsoft_option" data-value="1961">1961</div>
              <div className="xdsoft_option" data-value="1962">1962</div>
              <div className="xdsoft_option" data-value="1963">1963</div>
              <div className="xdsoft_option" data-value="1964">1964</div>
              <div className="xdsoft_option" data-value="1965">1965</div>
              <div className="xdsoft_option" data-value="1966">1966</div>
              <div className="xdsoft_option" data-value="1967">1967</div>
              <div className="xdsoft_option" data-value="1968">1968</div>
              <div className="xdsoft_option" data-value="1969">1969</div>
              <div className="xdsoft_option" data-value="1970">1970</div>
              <div className="xdsoft_option" data-value="1971">1971</div>
              <div className="xdsoft_option" data-value="1972">1972</div>
              <div className="xdsoft_option" data-value="1973">1973</div>
              <div className="xdsoft_option" data-value="1974">1974</div>
              <div className="xdsoft_option" data-value="1975">1975</div>
              <div className="xdsoft_option" data-value="1976">1976</div>
              <div className="xdsoft_option" data-value="1977">1977</div>
              <div className="xdsoft_option" data-value="1978">1978</div>
              <div className="xdsoft_option" data-value="1979">1979</div>
              <div className="xdsoft_option" data-value="1980">1980</div>
              <div className="xdsoft_option" data-value="1981">1981</div>
              <div className="xdsoft_option" data-value="1982">1982</div>
              <div className="xdsoft_option" data-value="1983">1983</div>
              <div className="xdsoft_option" data-value="1984">1984</div>
              <div className="xdsoft_option" data-value="1985">1985</div>
              <div className="xdsoft_option" data-value="1986">1986</div>
              <div className="xdsoft_option" data-value="1987">1987</div>
              <div className="xdsoft_option" data-value="1988">1988</div>
              <div className="xdsoft_option" data-value="1989">1989</div>
              <div className="xdsoft_option" data-value="1990">1990</div>
              <div className="xdsoft_option" data-value="1991">1991</div>
              <div className="xdsoft_option" data-value="1992">1992</div>
              <div className="xdsoft_option" data-value="1993">1993</div>
              <div className="xdsoft_option" data-value="1994">1994</div>
              <div className="xdsoft_option" data-value="1995">1995</div>
              <div className="xdsoft_option" data-value="1996">1996</div>
              <div className="xdsoft_option" data-value="1997">1997</div>
              <div className="xdsoft_option" data-value="1998">1998</div>
              <div className="xdsoft_option" data-value="1999">1999</div>
              <div className="xdsoft_option" data-value="2000">2000</div>
              <div className="xdsoft_option" data-value="2001">2001</div>
              <div className="xdsoft_option" data-value="2002">2002</div>
              <div className="xdsoft_option" data-value="2003">2003</div>
              <div className="xdsoft_option" data-value="2004">2004</div>
              <div className="xdsoft_option" data-value="2005">2005</div>
              <div className="xdsoft_option" data-value="2006">2006</div>
              <div className="xdsoft_option" data-value="2007">2007</div>
              <div className="xdsoft_option" data-value="2008">2008</div>
              <div className="xdsoft_option" data-value="2009">2009</div>
              <div className="xdsoft_option" data-value="2010">2010</div>
              <div className="xdsoft_option" data-value="2011">2011</div>
              <div className="xdsoft_option" data-value="2012">2012</div>
              <div className="xdsoft_option" data-value="2013">2013</div>
              <div className="xdsoft_option" data-value="2014">2014</div>
              <div className="xdsoft_option" data-value="2015">2015</div>
              <div className="xdsoft_option" data-value="2016">2016</div>
              <div className="xdsoft_option" data-value="2017">2017</div>
              <div className="xdsoft_option" data-value="2018">2018</div>
              <div className="xdsoft_option" data-value="2019">2019</div>
              <div className="xdsoft_option" data-value="2020">2020</div>
              <div className="xdsoft_option" data-value="2021">2021</div>
              <div className="xdsoft_option xdsoft_current" data-value="2022">
                2022
              </div>
              <div className="xdsoft_option" data-value="2023">2023</div>
              <div className="xdsoft_option" data-value="2024">2024</div>
              <div className="xdsoft_option" data-value="2025">2025</div>
              <div className="xdsoft_option" data-value="2026">2026</div>
              <div className="xdsoft_option" data-value="2027">2027</div>
              <div className="xdsoft_option" data-value="2028">2028</div>
              <div className="xdsoft_option" data-value="2029">2029</div>
              <div className="xdsoft_option" data-value="2030">2030</div>
              <div className="xdsoft_option" data-value="2031">2031</div>
              <div className="xdsoft_option" data-value="2032">2032</div>
              <div className="xdsoft_option" data-value="2033">2033</div>
              <div className="xdsoft_option" data-value="2034">2034</div>
              <div className="xdsoft_option" data-value="2035">2035</div>
              <div className="xdsoft_option" data-value="2036">2036</div>
              <div className="xdsoft_option" data-value="2037">2037</div>
              <div className="xdsoft_option" data-value="2038">2038</div>
              <div className="xdsoft_option" data-value="2039">2039</div>
              <div className="xdsoft_option" data-value="2040">2040</div>
              <div className="xdsoft_option" data-value="2041">2041</div>
              <div className="xdsoft_option" data-value="2042">2042</div>
              <div className="xdsoft_option" data-value="2043">2043</div>
              <div className="xdsoft_option" data-value="2044">2044</div>
              <div className="xdsoft_option" data-value="2045">2045</div>
              <div className="xdsoft_option" data-value="2046">2046</div>
              <div className="xdsoft_option" data-value="2047">2047</div>
              <div className="xdsoft_option" data-value="2048">2048</div>
              <div className="xdsoft_option" data-value="2049">2049</div>
              <div className="xdsoft_option" data-value="2050">2050</div>
            </div>
            <div className="xdsoft_scrollbar">
              <div
                className="xdsoft_scroller"
                style={{height: 10+"px", marginTop: 0+"px"}}
              ></div>
            </div>
          </div>
          <i></i>
        </div>
        <button
          type="button"
          className="xdsoft_next"
          style={{visibility: "visible"}}
        ></button>
      </div>
      <div className="xdsoft_calendar">
        <table>
          <thead>
            <tr>
              <th>Sun</th>
              <th>Mon</th>
              <th>Tue</th>
              <th>Wed</th>
              <th>Thu</th>
              <th>Fri</th>
              <th>Sat</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td
                data-date="28"
                data-month="7"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week0 xdsoft_date xdsoft_disabled xdsoft_other_month xdsoft_weekend"
                title=""
              >
                <div>28</div>
              </td>
              <td
                data-date="29"
                data-month="7"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week1 xdsoft_date xdsoft_disabled xdsoft_other_month"
                title=""
              >
                <div>29</div>
              </td>
              <td
                data-date="30"
                data-month="7"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week2 xdsoft_date xdsoft_disabled xdsoft_other_month"
                title=""
              >
                <div>30</div>
              </td>
              <td
                data-date="31"
                data-month="7"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week3 xdsoft_date xdsoft_disabled xdsoft_other_month"
                title=""
              >
                <div>31</div>
              </td>
              <td
                data-date="1"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week4 xdsoft_date xdsoft_disabled"
                title=""
              >
                <div>1</div>
              </td>
              <td
                data-date="2"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week5 xdsoft_date xdsoft_disabled xdsoft_current xdsoft_today"
                title=""
              >
                <div>2</div>
              </td>
              <td
                data-date="3"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week6 xdsoft_date xdsoft_disabled xdsoft_weekend"
                title=""
              >
                <div>3</div>
              </td>
            </tr>
            <tr>
              <td
                data-date="4"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week0 xdsoft_date xdsoft_disabled xdsoft_weekend"
                title=""
              >
                <div>4</div>
              </td>
              <td
                data-date="5"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week1 xdsoft_date xdsoft_disabled"
                title=""
              >
                <div>5</div>
              </td>
              <td
                data-date="6"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week2 xdsoft_date xdsoft_disabled"
                title=""
              >
                <div>6</div>
              </td>
              <td
                data-date="7"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week3 xdsoft_date xdsoft_disabled"
                title=""
              >
                <div>7</div>
              </td>
              <td
                data-date="8"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week4 xdsoft_date xdsoft_disabled"
                title=""
              >
                <div>8</div>
              </td>
              <td
                data-date="9"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week5 xdsoft_date xdsoft_disabled"
                title=""
              >
                <div>9</div>
              </td>
              <td
                data-date="10"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week6 xdsoft_date xdsoft_disabled xdsoft_weekend"
                title=""
              >
                <div>10</div>
              </td>
            </tr>
            <tr>
              <td
                data-date="11"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week0 xdsoft_date xdsoft_disabled xdsoft_weekend"
                title=""
              >
                <div>11</div>
              </td>
              <td
                data-date="12"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week1 xdsoft_date xdsoft_disabled"
                title=""
              >
                <div>12</div>
              </td>
              <td
                data-date="13"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week2 xdsoft_date xdsoft_disabled"
                title=""
              >
                <div>13</div>
              </td>
              <td
                data-date="14"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week3 xdsoft_date xdsoft_disabled"
                title=""
              >
                <div>14</div>
              </td>
              <td
                data-date="15"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week4 xdsoft_date xdsoft_disabled"
                title=""
              >
                <div>15</div>
              </td>
              <td
                data-date="16"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week5 xdsoft_date xdsoft_disabled"
                title=""
              >
                <div>16</div>
              </td>
              <td
                data-date="17"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week6 xdsoft_date xdsoft_disabled xdsoft_weekend"
                title=""
              >
                <div>17</div>
              </td>
            </tr>
            <tr>
              <td
                data-date="18"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week0 xdsoft_date xdsoft_disabled xdsoft_weekend"
                title=""
              >
                <div>18</div>
              </td>
              <td
                data-date="19"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week1 xdsoft_date xdsoft_disabled"
                title=""
              >
                <div>19</div>
              </td>
              <td
                data-date="20"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week2 xdsoft_date xdsoft_disabled"
                title=""
              >
                <div>20</div>
              </td>
              <td
                data-date="21"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week3 xdsoft_date xdsoft_disabled"
                title=""
              >
                <div>21</div>
              </td>
              <td
                data-date="22"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week4 xdsoft_date xdsoft_disabled"
                title=""
              >
                <div>22</div>
              </td>
              <td
                data-date="23"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week5 xdsoft_date xdsoft_disabled"
                title=""
              >
                <div>23</div>
              </td>
              <td
                data-date="24"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week6 xdsoft_date xdsoft_disabled xdsoft_weekend"
                title=""
              >
                <div>24</div>
              </td>
            </tr>
            <tr>
              <td
                data-date="25"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week0 xdsoft_date xdsoft_disabled xdsoft_weekend"
                title=""
              >
                <div>25</div>
              </td>
              <td
                data-date="26"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week1 xdsoft_date xdsoft_disabled"
                title=""
              >
                <div>26</div>
              </td>
              <td
                data-date="27"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week2 xdsoft_date xdsoft_disabled"
                title=""
              >
                <div>27</div>
              </td>
              <td
                data-date="28"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week3 xdsoft_date xdsoft_disabled"
                title=""
              >
                <div>28</div>
              </td>
              <td
                data-date="29"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week4 xdsoft_date xdsoft_disabled"
                title=""
              >
                <div>29</div>
              </td>
              <td
                data-date="30"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week5 xdsoft_date xdsoft_disabled"
                title=""
              >
                <div>30</div>
              </td>
              <td
                data-date="1"
                data-month="9"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week6 xdsoft_date xdsoft_disabled xdsoft_other_month xdsoft_weekend"
                title=""
              >
                <div>1</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <button
        type="button"
        className="xdsoft_save_selected blue-gradient-button"
        style={{display: "none"}}
      >
        Save Selected
      </button>
    </div>
    <div className="xdsoft_timepicker active">
      <button type="button" className="xdsoft_prev"></button>
      <div className="xdsoft_time_box xdsoft_scroller_box">
        <div className="xdsoft_time_variant" style={{marginTop: 0+"px"}}>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="0"
            data-minute="0"
          >
            00:00
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="0"
            data-minute="15"
          >
            00:15
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="0"
            data-minute="30"
          >
            00:30
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="0"
            data-minute="45"
          >
            00:45
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="1"
            data-minute="0"
          >
            01:00
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="1"
            data-minute="15"
          >
            01:15
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="1"
            data-minute="30"
          >
            01:30
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="1"
            data-minute="45"
          >
            01:45
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="2"
            data-minute="0"
          >
            02:00
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="2"
            data-minute="15"
          >
            02:15
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="2"
            data-minute="30"
          >
            02:30
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="2"
            data-minute="45"
          >
            02:45
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="3"
            data-minute="0"
          >
            03:00
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="3"
            data-minute="15"
          >
            03:15
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="3"
            data-minute="30"
          >
            03:30
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="3"
            data-minute="45"
          >
            03:45
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="4"
            data-minute="0"
          >
            04:00
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="4"
            data-minute="15"
          >
            04:15
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="4"
            data-minute="30"
          >
            04:30
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="4"
            data-minute="45"
          >
            04:45
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="5"
            data-minute="0"
          >
            05:00
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="5"
            data-minute="15"
          >
            05:15
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="5"
            data-minute="30"
          >
            05:30
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="5"
            data-minute="45"
          >
            05:45
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="6"
            data-minute="0"
          >
            06:00
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="6"
            data-minute="15"
          >
            06:15
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="6"
            data-minute="30"
          >
            06:30
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="6"
            data-minute="45"
          >
            06:45
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="7"
            data-minute="0"
          >
            07:00
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="7"
            data-minute="15"
          >
            07:15
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="7"
            data-minute="30"
          >
            07:30
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="7"
            data-minute="45"
          >
            07:45
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="8"
            data-minute="0"
          >
            08:00
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="8"
            data-minute="15"
          >
            08:15
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="8"
            data-minute="30"
          >
            08:30
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="8"
            data-minute="45"
          >
            08:45
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="9"
            data-minute="0"
          >
            09:00
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="9"
            data-minute="15"
          >
            09:15
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="9"
            data-minute="30"
          >
            09:30
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="9"
            data-minute="45"
          >
            09:45
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="10"
            data-minute="0"
          >
            10:00
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="10"
            data-minute="15"
          >
            10:15
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="10"
            data-minute="30"
          >
            10:30
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="10"
            data-minute="45"
          >
            10:45
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="11"
            data-minute="0"
          >
            11:00
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="11"
            data-minute="15"
          >
            11:15
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="11"
            data-minute="30"
          >
            11:30
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="11"
            data-minute="45"
          >
            11:45
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="12"
            data-minute="0"
          >
            12:00
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="12"
            data-minute="15"
          >
            12:15
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="12"
            data-minute="30"
          >
            12:30
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="12"
            data-minute="45"
          >
            12:45
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="13"
            data-minute="0"
          >
            13:00
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="13"
            data-minute="15"
          >
            13:15
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="13"
            data-minute="30"
          >
            13:30
          </div>
          <div
            className="xdsoft_time xdsoft_disabled xdsoft_current"
            data-hour="13"
            data-minute="45"
          >
            13:45
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="14"
            data-minute="0"
          >
            14:00
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="14"
            data-minute="15"
          >
            14:15
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="14"
            data-minute="30"
          >
            14:30
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="14"
            data-minute="45"
          >
            14:45
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="15"
            data-minute="0"
          >
            15:00
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="15"
            data-minute="15"
          >
            15:15
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="15"
            data-minute="30"
          >
            15:30
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="15"
            data-minute="45"
          >
            15:45
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="16"
            data-minute="0"
          >
            16:00
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="16"
            data-minute="15"
          >
            16:15
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="16"
            data-minute="30"
          >
            16:30
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="16"
            data-minute="45"
          >
            16:45
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="17"
            data-minute="0"
          >
            17:00
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="17"
            data-minute="15"
          >
            17:15
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="17"
            data-minute="30"
          >
            17:30
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="17"
            data-minute="45"
          >
            17:45
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="18"
            data-minute="0"
          >
            18:00
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="18"
            data-minute="15"
          >
            18:15
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="18"
            data-minute="30"
          >
            18:30
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="18"
            data-minute="45"
          >
            18:45
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="19"
            data-minute="0"
          >
            19:00
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="19"
            data-minute="15"
          >
            19:15
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="19"
            data-minute="30"
          >
            19:30
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="19"
            data-minute="45"
          >
            19:45
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="20"
            data-minute="0"
          >
            20:00
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="20"
            data-minute="15"
          >
            20:15
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="20"
            data-minute="30"
          >
            20:30
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="20"
            data-minute="45"
          >
            20:45
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="21"
            data-minute="0"
          >
            21:00
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="21"
            data-minute="15"
          >
            21:15
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="21"
            data-minute="30"
          >
            21:30
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="21"
            data-minute="45"
          >
            21:45
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="22"
            data-minute="0"
          >
            22:00
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="22"
            data-minute="15"
          >
            22:15
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="22"
            data-minute="30"
          >
            22:30
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="22"
            data-minute="45"
          >
            22:45
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="23"
            data-minute="0"
          >
            23:00
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="23"
            data-minute="15"
          >
            23:15
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="23"
            data-minute="30"
          >
            23:30
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="23"
            data-minute="45"
          >
            23:45
          </div>
        </div>
        <div className="xdsoft_scrollbar">
          <div
            className="xdsoft_scroller"
            style={{height: 10+"px", marginTop: 0+"px"}}
          ></div>
        </div>
      </div>
      <button type="button" className="xdsoft_next"></button>
    </div>
  </div>
  <iframe
    scrolling="no"
    frameborder="0"
    allowtransparency="true"
    src="https://platform.twitter.com/widgets/widget_iframe.c4bdc17e77719578b594d5555bee90db.html?origin=https%3A%2F%2Fas-mangopulse-admin.azurewebsites.net"
    title="Twitter settings iframe"
    style={{display: "none"}}
  ></iframe
  ><iframe
    id="rufous-sandbox"
    scrolling="no"
    frameborder="0"
    allowtransparency="true"
    allowfullscreen="true"
    style={{
      position: "absolute",
      visibility: "hidden",
      display: "none",
      width: 0+"px",
      height: 0+"px",
      padding: 0+"px",
      border: "none",
    }}
    title="Twitter analytics iframe"
  ></iframe>
  <div
    className="tox tox-silver-sink tox-tinymce-aux"
    style={{position: "relative"}}
  ></div>
  <div
    className="tox tox-silver-sink tox-tinymce-aux"
    style={{position: "relative"}}
  ></div>
  <div className="xdsoft_datetimepicker xdsoft_noselect xdsoft_rtl xdsoft_">
    <div className="xdsoft_datepicker active">
      <div className="xdsoft_monthpicker">
        <button
          type="button"
          className="xdsoft_prev"
          style={{visibility: "visible"}}
        ></button
        ><button
          type="button"
          className="xdsoft_today_button"
          style={{visibility: "visible"}}
        ></button>
        <div className="xdsoft_label xdsoft_month">
          <span>September</span>
          <div className="xdsoft_select xdsoft_monthselect xdsoft_scroller_box">
            <div style={{marginTop: 0+"px"}}>
              <div className="xdsoft_option" data-value="0">January</div>
              <div className="xdsoft_option" data-value="1">February</div>
              <div className="xdsoft_option" data-value="2">March</div>
              <div className="xdsoft_option" data-value="3">April</div>
              <div className="xdsoft_option" data-value="4">May</div>
              <div className="xdsoft_option" data-value="5">June</div>
              <div className="xdsoft_option" data-value="6">July</div>
              <div className="xdsoft_option" data-value="7">August</div>
              <div className="xdsoft_option xdsoft_current" data-value="8">
                September
              </div>
              <div className="xdsoft_option" data-value="9">October</div>
              <div className="xdsoft_option" data-value="10">November</div>
              <div className="xdsoft_option" data-value="11">December</div>
            </div>
            <div className="xdsoft_scrollbar">
              <div
                className="xdsoft_scroller"
                style={{height: 10+"px", marginTop: 0+"px"}}
              ></div>
            </div>
          </div>
          <i></i>
        </div>
        <div className="xdsoft_label xdsoft_year">
          <span>2022</span>
          <div className="xdsoft_select xdsoft_yearselect xdsoft_scroller_box">
            <div style={{marginTop: 0+"px"}}>
              <div className="xdsoft_option" data-value="1950">1950</div>
              <div className="xdsoft_option" data-value="1951">1951</div>
              <div className="xdsoft_option" data-value="1952">1952</div>
              <div className="xdsoft_option" data-value="1953">1953</div>
              <div className="xdsoft_option" data-value="1954">1954</div>
              <div className="xdsoft_option" data-value="1955">1955</div>
              <div className="xdsoft_option" data-value="1956">1956</div>
              <div className="xdsoft_option" data-value="1957">1957</div>
              <div className="xdsoft_option" data-value="1958">1958</div>
              <div className="xdsoft_option" data-value="1959">1959</div>
              <div className="xdsoft_option" data-value="1960">1960</div>
              <div className="xdsoft_option" data-value="1961">1961</div>
              <div className="xdsoft_option" data-value="1962">1962</div>
              <div className="xdsoft_option" data-value="1963">1963</div>
              <div className="xdsoft_option" data-value="1964">1964</div>
              <div className="xdsoft_option" data-value="1965">1965</div>
              <div className="xdsoft_option" data-value="1966">1966</div>
              <div className="xdsoft_option" data-value="1967">1967</div>
              <div className="xdsoft_option" data-value="1968">1968</div>
              <div className="xdsoft_option" data-value="1969">1969</div>
              <div className="xdsoft_option" data-value="1970">1970</div>
              <div className="xdsoft_option" data-value="1971">1971</div>
              <div className="xdsoft_option" data-value="1972">1972</div>
              <div className="xdsoft_option" data-value="1973">1973</div>
              <div className="xdsoft_option" data-value="1974">1974</div>
              <div className="xdsoft_option" data-value="1975">1975</div>
              <div className="xdsoft_option" data-value="1976">1976</div>
              <div className="xdsoft_option" data-value="1977">1977</div>
              <div className="xdsoft_option" data-value="1978">1978</div>
              <div className="xdsoft_option" data-value="1979">1979</div>
              <div className="xdsoft_option" data-value="1980">1980</div>
              <div className="xdsoft_option" data-value="1981">1981</div>
              <div className="xdsoft_option" data-value="1982">1982</div>
              <div className="xdsoft_option" data-value="1983">1983</div>
              <div className="xdsoft_option" data-value="1984">1984</div>
              <div className="xdsoft_option" data-value="1985">1985</div>
              <div className="xdsoft_option" data-value="1986">1986</div>
              <div className="xdsoft_option" data-value="1987">1987</div>
              <div className="xdsoft_option" data-value="1988">1988</div>
              <div className="xdsoft_option" data-value="1989">1989</div>
              <div className="xdsoft_option" data-value="1990">1990</div>
              <div className="xdsoft_option" data-value="1991">1991</div>
              <div className="xdsoft_option" data-value="1992">1992</div>
              <div className="xdsoft_option" data-value="1993">1993</div>
              <div className="xdsoft_option" data-value="1994">1994</div>
              <div className="xdsoft_option" data-value="1995">1995</div>
              <div className="xdsoft_option" data-value="1996">1996</div>
              <div className="xdsoft_option" data-value="1997">1997</div>
              <div className="xdsoft_option" data-value="1998">1998</div>
              <div className="xdsoft_option" data-value="1999">1999</div>
              <div className="xdsoft_option" data-value="2000">2000</div>
              <div className="xdsoft_option" data-value="2001">2001</div>
              <div className="xdsoft_option" data-value="2002">2002</div>
              <div className="xdsoft_option" data-value="2003">2003</div>
              <div className="xdsoft_option" data-value="2004">2004</div>
              <div className="xdsoft_option" data-value="2005">2005</div>
              <div className="xdsoft_option" data-value="2006">2006</div>
              <div className="xdsoft_option" data-value="2007">2007</div>
              <div className="xdsoft_option" data-value="2008">2008</div>
              <div className="xdsoft_option" data-value="2009">2009</div>
              <div className="xdsoft_option" data-value="2010">2010</div>
              <div className="xdsoft_option" data-value="2011">2011</div>
              <div className="xdsoft_option" data-value="2012">2012</div>
              <div className="xdsoft_option" data-value="2013">2013</div>
              <div className="xdsoft_option" data-value="2014">2014</div>
              <div className="xdsoft_option" data-value="2015">2015</div>
              <div className="xdsoft_option" data-value="2016">2016</div>
              <div className="xdsoft_option" data-value="2017">2017</div>
              <div className="xdsoft_option" data-value="2018">2018</div>
              <div className="xdsoft_option" data-value="2019">2019</div>
              <div className="xdsoft_option" data-value="2020">2020</div>
              <div className="xdsoft_option" data-value="2021">2021</div>
              <div className="xdsoft_option xdsoft_current" data-value="2022">
                2022
              </div>
              <div className="xdsoft_option" data-value="2023">2023</div>
              <div className="xdsoft_option" data-value="2024">2024</div>
              <div className="xdsoft_option" data-value="2025">2025</div>
              <div className="xdsoft_option" data-value="2026">2026</div>
              <div className="xdsoft_option" data-value="2027">2027</div>
              <div className="xdsoft_option" data-value="2028">2028</div>
              <div className="xdsoft_option" data-value="2029">2029</div>
              <div className="xdsoft_option" data-value="2030">2030</div>
              <div className="xdsoft_option" data-value="2031">2031</div>
              <div className="xdsoft_option" data-value="2032">2032</div>
              <div className="xdsoft_option" data-value="2033">2033</div>
              <div className="xdsoft_option" data-value="2034">2034</div>
              <div className="xdsoft_option" data-value="2035">2035</div>
              <div className="xdsoft_option" data-value="2036">2036</div>
              <div className="xdsoft_option" data-value="2037">2037</div>
              <div className="xdsoft_option" data-value="2038">2038</div>
              <div className="xdsoft_option" data-value="2039">2039</div>
              <div className="xdsoft_option" data-value="2040">2040</div>
              <div className="xdsoft_option" data-value="2041">2041</div>
              <div className="xdsoft_option" data-value="2042">2042</div>
              <div className="xdsoft_option" data-value="2043">2043</div>
              <div className="xdsoft_option" data-value="2044">2044</div>
              <div className="xdsoft_option" data-value="2045">2045</div>
              <div className="xdsoft_option" data-value="2046">2046</div>
              <div className="xdsoft_option" data-value="2047">2047</div>
              <div className="xdsoft_option" data-value="2048">2048</div>
              <div className="xdsoft_option" data-value="2049">2049</div>
              <div className="xdsoft_option" data-value="2050">2050</div>
            </div>
            <div className="xdsoft_scrollbar">
              <div
                className="xdsoft_scroller"
                style={{height: 10+"px", marginTop: 0+"px"}}
              ></div>
            </div>
          </div>
          <i></i>
        </div>
        <button
          type="button"
          className="xdsoft_next"
          style={{visibility: "visible"}}
        ></button>
      </div>
      <div className="xdsoft_calendar">
        <table>
          <thead>
            <tr>
              <th>Sun</th>
              <th>Mon</th>
              <th>Tue</th>
              <th>Wed</th>
              <th>Thu</th>
              <th>Fri</th>
              <th>Sat</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td
                data-date="28"
                data-month="7"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week0 xdsoft_date xdsoft_disabled xdsoft_other_month xdsoft_weekend"
                title=""
              >
                <div>28</div>
              </td>
              <td
                data-date="29"
                data-month="7"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week1 xdsoft_date xdsoft_disabled xdsoft_other_month"
                title=""
              >
                <div>29</div>
              </td>
              <td
                data-date="30"
                data-month="7"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week2 xdsoft_date xdsoft_disabled xdsoft_other_month"
                title=""
              >
                <div>30</div>
              </td>
              <td
                data-date="31"
                data-month="7"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week3 xdsoft_date xdsoft_disabled xdsoft_other_month"
                title=""
              >
                <div>31</div>
              </td>
              <td
                data-date="1"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week4 xdsoft_date xdsoft_disabled"
                title=""
              >
                <div>1</div>
              </td>
              <td
                data-date="2"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week5 xdsoft_date xdsoft_disabled xdsoft_current xdsoft_today"
                title=""
              >
                <div>2</div>
              </td>
              <td
                data-date="3"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week6 xdsoft_date xdsoft_disabled xdsoft_weekend"
                title=""
              >
                <div>3</div>
              </td>
            </tr>
            <tr>
              <td
                data-date="4"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week0 xdsoft_date xdsoft_disabled xdsoft_weekend"
                title=""
              >
                <div>4</div>
              </td>
              <td
                data-date="5"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week1 xdsoft_date xdsoft_disabled"
                title=""
              >
                <div>5</div>
              </td>
              <td
                data-date="6"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week2 xdsoft_date xdsoft_disabled"
                title=""
              >
                <div>6</div>
              </td>
              <td
                data-date="7"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week3 xdsoft_date xdsoft_disabled"
                title=""
              >
                <div>7</div>
              </td>
              <td
                data-date="8"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week4 xdsoft_date xdsoft_disabled"
                title=""
              >
                <div>8</div>
              </td>
              <td
                data-date="9"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week5 xdsoft_date xdsoft_disabled"
                title=""
              >
                <div>9</div>
              </td>
              <td
                data-date="10"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week6 xdsoft_date xdsoft_disabled xdsoft_weekend"
                title=""
              >
                <div>10</div>
              </td>
            </tr>
            <tr>
              <td
                data-date="11"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week0 xdsoft_date xdsoft_disabled xdsoft_weekend"
                title=""
              >
                <div>11</div>
              </td>
              <td
                data-date="12"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week1 xdsoft_date xdsoft_disabled"
                title=""
              >
                <div>12</div>
              </td>
              <td
                data-date="13"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week2 xdsoft_date xdsoft_disabled"
                title=""
              >
                <div>13</div>
              </td>
              <td
                data-date="14"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week3 xdsoft_date xdsoft_disabled"
                title=""
              >
                <div>14</div>
              </td>
              <td
                data-date="15"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week4 xdsoft_date xdsoft_disabled"
                title=""
              >
                <div>15</div>
              </td>
              <td
                data-date="16"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week5 xdsoft_date xdsoft_disabled"
                title=""
              >
                <div>16</div>
              </td>
              <td
                data-date="17"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week6 xdsoft_date xdsoft_disabled xdsoft_weekend"
                title=""
              >
                <div>17</div>
              </td>
            </tr>
            <tr>
              <td
                data-date="18"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week0 xdsoft_date xdsoft_disabled xdsoft_weekend"
                title=""
              >
                <div>18</div>
              </td>
              <td
                data-date="19"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week1 xdsoft_date xdsoft_disabled"
                title=""
              >
                <div>19</div>
              </td>
              <td
                data-date="20"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week2 xdsoft_date xdsoft_disabled"
                title=""
              >
                <div>20</div>
              </td>
              <td
                data-date="21"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week3 xdsoft_date xdsoft_disabled"
                title=""
              >
                <div>21</div>
              </td>
              <td
                data-date="22"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week4 xdsoft_date xdsoft_disabled"
                title=""
              >
                <div>22</div>
              </td>
              <td
                data-date="23"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week5 xdsoft_date xdsoft_disabled"
                title=""
              >
                <div>23</div>
              </td>
              <td
                data-date="24"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week6 xdsoft_date xdsoft_disabled xdsoft_weekend"
                title=""
              >
                <div>24</div>
              </td>
            </tr>
            <tr>
              <td
                data-date="25"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week0 xdsoft_date xdsoft_disabled xdsoft_weekend"
                title=""
              >
                <div>25</div>
              </td>
              <td
                data-date="26"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week1 xdsoft_date xdsoft_disabled"
                title=""
              >
                <div>26</div>
              </td>
              <td
                data-date="27"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week2 xdsoft_date xdsoft_disabled"
                title=""
              >
                <div>27</div>
              </td>
              <td
                data-date="28"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week3 xdsoft_date xdsoft_disabled"
                title=""
              >
                <div>28</div>
              </td>
              <td
                data-date="29"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week4 xdsoft_date xdsoft_disabled"
                title=""
              >
                <div>29</div>
              </td>
              <td
                data-date="30"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week5 xdsoft_date xdsoft_disabled"
                title=""
              >
                <div>30</div>
              </td>
              <td
                data-date="1"
                data-month="9"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week6 xdsoft_date xdsoft_disabled xdsoft_other_month xdsoft_weekend"
                title=""
              >
                <div>1</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <button
        type="button"
        className="xdsoft_save_selected blue-gradient-button"
        style={{display: "none"}}
      >
        Save Selected
      </button>
    </div>
    <div className="xdsoft_timepicker active">
      <button type="button" className="xdsoft_prev"></button>
      <div className="xdsoft_time_box xdsoft_scroller_box">
        <div className="xdsoft_time_variant" style={{marginTop: 0+"px"}}>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="0"
            data-minute="0"
          >
            00:00
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="0"
            data-minute="15"
          >
            00:15
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="0"
            data-minute="30"
          >
            00:30
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="0"
            data-minute="45"
          >
            00:45
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="1"
            data-minute="0"
          >
            01:00
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="1"
            data-minute="15"
          >
            01:15
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="1"
            data-minute="30"
          >
            01:30
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="1"
            data-minute="45"
          >
            01:45
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="2"
            data-minute="0"
          >
            02:00
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="2"
            data-minute="15"
          >
            02:15
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="2"
            data-minute="30"
          >
            02:30
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="2"
            data-minute="45"
          >
            02:45
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="3"
            data-minute="0"
          >
            03:00
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="3"
            data-minute="15"
          >
            03:15
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="3"
            data-minute="30"
          >
            03:30
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="3"
            data-minute="45"
          >
            03:45
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="4"
            data-minute="0"
          >
            04:00
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="4"
            data-minute="15"
          >
            04:15
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="4"
            data-minute="30"
          >
            04:30
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="4"
            data-minute="45"
          >
            04:45
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="5"
            data-minute="0"
          >
            05:00
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="5"
            data-minute="15"
          >
            05:15
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="5"
            data-minute="30"
          >
            05:30
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="5"
            data-minute="45"
          >
            05:45
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="6"
            data-minute="0"
          >
            06:00
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="6"
            data-minute="15"
          >
            06:15
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="6"
            data-minute="30"
          >
            06:30
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="6"
            data-minute="45"
          >
            06:45
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="7"
            data-minute="0"
          >
            07:00
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="7"
            data-minute="15"
          >
            07:15
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="7"
            data-minute="30"
          >
            07:30
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="7"
            data-minute="45"
          >
            07:45
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="8"
            data-minute="0"
          >
            08:00
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="8"
            data-minute="15"
          >
            08:15
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="8"
            data-minute="30"
          >
            08:30
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="8"
            data-minute="45"
          >
            08:45
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="9"
            data-minute="0"
          >
            09:00
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="9"
            data-minute="15"
          >
            09:15
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="9"
            data-minute="30"
          >
            09:30
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="9"
            data-minute="45"
          >
            09:45
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="10"
            data-minute="0"
          >
            10:00
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="10"
            data-minute="15"
          >
            10:15
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="10"
            data-minute="30"
          >
            10:30
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="10"
            data-minute="45"
          >
            10:45
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="11"
            data-minute="0"
          >
            11:00
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="11"
            data-minute="15"
          >
            11:15
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="11"
            data-minute="30"
          >
            11:30
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="11"
            data-minute="45"
          >
            11:45
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="12"
            data-minute="0"
          >
            12:00
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="12"
            data-minute="15"
          >
            12:15
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="12"
            data-minute="30"
          >
            12:30
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="12"
            data-minute="45"
          >
            12:45
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="13"
            data-minute="0"
          >
            13:00
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="13"
            data-minute="15"
          >
            13:15
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="13"
            data-minute="30"
          >
            13:30
          </div>
          <div
            className="xdsoft_time xdsoft_disabled xdsoft_current"
            data-hour="13"
            data-minute="45"
          >
            13:45
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="14"
            data-minute="0"
          >
            14:00
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="14"
            data-minute="15"
          >
            14:15
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="14"
            data-minute="30"
          >
            14:30
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="14"
            data-minute="45"
          >
            14:45
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="15"
            data-minute="0"
          >
            15:00
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="15"
            data-minute="15"
          >
            15:15
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="15"
            data-minute="30"
          >
            15:30
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="15"
            data-minute="45"
          >
            15:45
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="16"
            data-minute="0"
          >
            16:00
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="16"
            data-minute="15"
          >
            16:15
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="16"
            data-minute="30"
          >
            16:30
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="16"
            data-minute="45"
          >
            16:45
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="17"
            data-minute="0"
          >
            17:00
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="17"
            data-minute="15"
          >
            17:15
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="17"
            data-minute="30"
          >
            17:30
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="17"
            data-minute="45"
          >
            17:45
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="18"
            data-minute="0"
          >
            18:00
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="18"
            data-minute="15"
          >
            18:15
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="18"
            data-minute="30"
          >
            18:30
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="18"
            data-minute="45"
          >
            18:45
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="19"
            data-minute="0"
          >
            19:00
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="19"
            data-minute="15"
          >
            19:15
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="19"
            data-minute="30"
          >
            19:30
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="19"
            data-minute="45"
          >
            19:45
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="20"
            data-minute="0"
          >
            20:00
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="20"
            data-minute="15"
          >
            20:15
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="20"
            data-minute="30"
          >
            20:30
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="20"
            data-minute="45"
          >
            20:45
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="21"
            data-minute="0"
          >
            21:00
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="21"
            data-minute="15"
          >
            21:15
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="21"
            data-minute="30"
          >
            21:30
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="21"
            data-minute="45"
          >
            21:45
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="22"
            data-minute="0"
          >
            22:00
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="22"
            data-minute="15"
          >
            22:15
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="22"
            data-minute="30"
          >
            22:30
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="22"
            data-minute="45"
          >
            22:45
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="23"
            data-minute="0"
          >
            23:00
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="23"
            data-minute="15"
          >
            23:15
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="23"
            data-minute="30"
          >
            23:30
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="23"
            data-minute="45"
          >
            23:45
          </div>
        </div>
        <div className="xdsoft_scrollbar">
          <div
            className="xdsoft_scroller"
            style={{height: 10+"px", marginTop: 0+"px"}}
          ></div>
        </div>
      </div>
      <button type="button" className="xdsoft_next"></button>
    </div>
  </div>
  <div className="xdsoft_datetimepicker xdsoft_noselect xdsoft_rtl xdsoft_">
    <div className="xdsoft_datepicker active">
      <div className="xdsoft_monthpicker">
        <button
          type="button"
          className="xdsoft_prev"
          style={{visibility: "visible"}}
        ></button
        ><button
          type="button"
          className="xdsoft_today_button"
          style={{visibility: "visible"}}
        ></button>
        <div className="xdsoft_label xdsoft_month">
          <span>September</span>
          <div className="xdsoft_select xdsoft_monthselect xdsoft_scroller_box">
            <div style={{marginTop: 0+"px"}}>
              <div className="xdsoft_option" data-value="0">January</div>
              <div className="xdsoft_option" data-value="1">February</div>
              <div className="xdsoft_option" data-value="2">March</div>
              <div className="xdsoft_option" data-value="3">April</div>
              <div className="xdsoft_option" data-value="4">May</div>
              <div className="xdsoft_option" data-value="5">June</div>
              <div className="xdsoft_option" data-value="6">July</div>
              <div className="xdsoft_option" data-value="7">August</div>
              <div className="xdsoft_option xdsoft_current" data-value="8">
                September
              </div>
              <div className="xdsoft_option" data-value="9">October</div>
              <div className="xdsoft_option" data-value="10">November</div>
              <div className="xdsoft_option" data-value="11">December</div>
            </div>
            <div className="xdsoft_scrollbar">
              <div
                className="xdsoft_scroller"
                style={{height: 10+"px", marginTop: 0+"px"}}
              ></div>
            </div>
          </div>
          <i></i>
        </div>
        <div className="xdsoft_label xdsoft_year">
          <span>2022</span>
          <div className="xdsoft_select xdsoft_yearselect xdsoft_scroller_box">
            <div style={{marginTop: 0+"px"}}>
              <div className="xdsoft_option" data-value="1950">1950</div>
              <div className="xdsoft_option" data-value="1951">1951</div>
              <div className="xdsoft_option" data-value="1952">1952</div>
              <div className="xdsoft_option" data-value="1953">1953</div>
              <div className="xdsoft_option" data-value="1954">1954</div>
              <div className="xdsoft_option" data-value="1955">1955</div>
              <div className="xdsoft_option" data-value="1956">1956</div>
              <div className="xdsoft_option" data-value="1957">1957</div>
              <div className="xdsoft_option" data-value="1958">1958</div>
              <div className="xdsoft_option" data-value="1959">1959</div>
              <div className="xdsoft_option" data-value="1960">1960</div>
              <div className="xdsoft_option" data-value="1961">1961</div>
              <div className="xdsoft_option" data-value="1962">1962</div>
              <div className="xdsoft_option" data-value="1963">1963</div>
              <div className="xdsoft_option" data-value="1964">1964</div>
              <div className="xdsoft_option" data-value="1965">1965</div>
              <div className="xdsoft_option" data-value="1966">1966</div>
              <div className="xdsoft_option" data-value="1967">1967</div>
              <div className="xdsoft_option" data-value="1968">1968</div>
              <div className="xdsoft_option" data-value="1969">1969</div>
              <div className="xdsoft_option" data-value="1970">1970</div>
              <div className="xdsoft_option" data-value="1971">1971</div>
              <div className="xdsoft_option" data-value="1972">1972</div>
              <div className="xdsoft_option" data-value="1973">1973</div>
              <div className="xdsoft_option" data-value="1974">1974</div>
              <div className="xdsoft_option" data-value="1975">1975</div>
              <div className="xdsoft_option" data-value="1976">1976</div>
              <div className="xdsoft_option" data-value="1977">1977</div>
              <div className="xdsoft_option" data-value="1978">1978</div>
              <div className="xdsoft_option" data-value="1979">1979</div>
              <div className="xdsoft_option" data-value="1980">1980</div>
              <div className="xdsoft_option" data-value="1981">1981</div>
              <div className="xdsoft_option" data-value="1982">1982</div>
              <div className="xdsoft_option" data-value="1983">1983</div>
              <div className="xdsoft_option" data-value="1984">1984</div>
              <div className="xdsoft_option" data-value="1985">1985</div>
              <div className="xdsoft_option" data-value="1986">1986</div>
              <div className="xdsoft_option" data-value="1987">1987</div>
              <div className="xdsoft_option" data-value="1988">1988</div>
              <div className="xdsoft_option" data-value="1989">1989</div>
              <div className="xdsoft_option" data-value="1990">1990</div>
              <div className="xdsoft_option" data-value="1991">1991</div>
              <div className="xdsoft_option" data-value="1992">1992</div>
              <div className="xdsoft_option" data-value="1993">1993</div>
              <div className="xdsoft_option" data-value="1994">1994</div>
              <div className="xdsoft_option" data-value="1995">1995</div>
              <div className="xdsoft_option" data-value="1996">1996</div>
              <div className="xdsoft_option" data-value="1997">1997</div>
              <div className="xdsoft_option" data-value="1998">1998</div>
              <div className="xdsoft_option" data-value="1999">1999</div>
              <div className="xdsoft_option" data-value="2000">2000</div>
              <div className="xdsoft_option" data-value="2001">2001</div>
              <div className="xdsoft_option" data-value="2002">2002</div>
              <div className="xdsoft_option" data-value="2003">2003</div>
              <div className="xdsoft_option" data-value="2004">2004</div>
              <div className="xdsoft_option" data-value="2005">2005</div>
              <div className="xdsoft_option" data-value="2006">2006</div>
              <div className="xdsoft_option" data-value="2007">2007</div>
              <div className="xdsoft_option" data-value="2008">2008</div>
              <div className="xdsoft_option" data-value="2009">2009</div>
              <div className="xdsoft_option" data-value="2010">2010</div>
              <div className="xdsoft_option" data-value="2011">2011</div>
              <div className="xdsoft_option" data-value="2012">2012</div>
              <div className="xdsoft_option" data-value="2013">2013</div>
              <div className="xdsoft_option" data-value="2014">2014</div>
              <div className="xdsoft_option" data-value="2015">2015</div>
              <div className="xdsoft_option" data-value="2016">2016</div>
              <div className="xdsoft_option" data-value="2017">2017</div>
              <div className="xdsoft_option" data-value="2018">2018</div>
              <div className="xdsoft_option" data-value="2019">2019</div>
              <div className="xdsoft_option" data-value="2020">2020</div>
              <div className="xdsoft_option" data-value="2021">2021</div>
              <div className="xdsoft_option xdsoft_current" data-value="2022">
                2022
              </div>
              <div className="xdsoft_option" data-value="2023">2023</div>
              <div className="xdsoft_option" data-value="2024">2024</div>
              <div className="xdsoft_option" data-value="2025">2025</div>
              <div className="xdsoft_option" data-value="2026">2026</div>
              <div className="xdsoft_option" data-value="2027">2027</div>
              <div className="xdsoft_option" data-value="2028">2028</div>
              <div className="xdsoft_option" data-value="2029">2029</div>
              <div className="xdsoft_option" data-value="2030">2030</div>
              <div className="xdsoft_option" data-value="2031">2031</div>
              <div className="xdsoft_option" data-value="2032">2032</div>
              <div className="xdsoft_option" data-value="2033">2033</div>
              <div className="xdsoft_option" data-value="2034">2034</div>
              <div className="xdsoft_option" data-value="2035">2035</div>
              <div className="xdsoft_option" data-value="2036">2036</div>
              <div className="xdsoft_option" data-value="2037">2037</div>
              <div className="xdsoft_option" data-value="2038">2038</div>
              <div className="xdsoft_option" data-value="2039">2039</div>
              <div className="xdsoft_option" data-value="2040">2040</div>
              <div className="xdsoft_option" data-value="2041">2041</div>
              <div className="xdsoft_option" data-value="2042">2042</div>
              <div className="xdsoft_option" data-value="2043">2043</div>
              <div className="xdsoft_option" data-value="2044">2044</div>
              <div className="xdsoft_option" data-value="2045">2045</div>
              <div className="xdsoft_option" data-value="2046">2046</div>
              <div className="xdsoft_option" data-value="2047">2047</div>
              <div className="xdsoft_option" data-value="2048">2048</div>
              <div className="xdsoft_option" data-value="2049">2049</div>
              <div className="xdsoft_option" data-value="2050">2050</div>
            </div>
            <div className="xdsoft_scrollbar">
              <div
                className="xdsoft_scroller"
                style={{height: 10+"px", marginTop: 0+"px"}}
              ></div>
            </div>
          </div>
          <i></i>
        </div>
        <button
          type="button"
          className="xdsoft_next"
          style={{visibility: "visible"}}
        ></button>
      </div>
      <div className="xdsoft_calendar">
        <table>
          <thead>
            <tr>
              <th>Sun</th>
              <th>Mon</th>
              <th>Tue</th>
              <th>Wed</th>
              <th>Thu</th>
              <th>Fri</th>
              <th>Sat</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td
                data-date="28"
                data-month="7"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week0 xdsoft_date xdsoft_disabled xdsoft_other_month xdsoft_weekend"
                title=""
              >
                <div>28</div>
              </td>
              <td
                data-date="29"
                data-month="7"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week1 xdsoft_date xdsoft_disabled xdsoft_other_month"
                title=""
              >
                <div>29</div>
              </td>
              <td
                data-date="30"
                data-month="7"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week2 xdsoft_date xdsoft_disabled xdsoft_other_month"
                title=""
              >
                <div>30</div>
              </td>
              <td
                data-date="31"
                data-month="7"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week3 xdsoft_date xdsoft_disabled xdsoft_other_month"
                title=""
              >
                <div>31</div>
              </td>
              <td
                data-date="1"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week4 xdsoft_date xdsoft_disabled"
                title=""
              >
                <div>1</div>
              </td>
              <td
                data-date="2"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week5 xdsoft_date xdsoft_disabled xdsoft_current xdsoft_today"
                title=""
              >
                <div>2</div>
              </td>
              <td
                data-date="3"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week6 xdsoft_date xdsoft_disabled xdsoft_weekend"
                title=""
              >
                <div>3</div>
              </td>
            </tr>
            <tr>
              <td
                data-date="4"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week0 xdsoft_date xdsoft_disabled xdsoft_weekend"
                title=""
              >
                <div>4</div>
              </td>
              <td
                data-date="5"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week1 xdsoft_date xdsoft_disabled"
                title=""
              >
                <div>5</div>
              </td>
              <td
                data-date="6"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week2 xdsoft_date xdsoft_disabled"
                title=""
              >
                <div>6</div>
              </td>
              <td
                data-date="7"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week3 xdsoft_date xdsoft_disabled"
                title=""
              >
                <div>7</div>
              </td>
              <td
                data-date="8"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week4 xdsoft_date xdsoft_disabled"
                title=""
              >
                <div>8</div>
              </td>
              <td
                data-date="9"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week5 xdsoft_date xdsoft_disabled"
                title=""
              >
                <div>9</div>
              </td>
              <td
                data-date="10"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week6 xdsoft_date xdsoft_disabled xdsoft_weekend"
                title=""
              >
                <div>10</div>
              </td>
            </tr>
            <tr>
              <td
                data-date="11"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week0 xdsoft_date xdsoft_disabled xdsoft_weekend"
                title=""
              >
                <div>11</div>
              </td>
              <td
                data-date="12"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week1 xdsoft_date xdsoft_disabled"
                title=""
              >
                <div>12</div>
              </td>
              <td
                data-date="13"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week2 xdsoft_date xdsoft_disabled"
                title=""
              >
                <div>13</div>
              </td>
              <td
                data-date="14"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week3 xdsoft_date xdsoft_disabled"
                title=""
              >
                <div>14</div>
              </td>
              <td
                data-date="15"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week4 xdsoft_date xdsoft_disabled"
                title=""
              >
                <div>15</div>
              </td>
              <td
                data-date="16"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week5 xdsoft_date xdsoft_disabled"
                title=""
              >
                <div>16</div>
              </td>
              <td
                data-date="17"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week6 xdsoft_date xdsoft_disabled xdsoft_weekend"
                title=""
              >
                <div>17</div>
              </td>
            </tr>
            <tr>
              <td
                data-date="18"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week0 xdsoft_date xdsoft_disabled xdsoft_weekend"
                title=""
              >
                <div>18</div>
              </td>
              <td
                data-date="19"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week1 xdsoft_date xdsoft_disabled"
                title=""
              >
                <div>19</div>
              </td>
              <td
                data-date="20"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week2 xdsoft_date xdsoft_disabled"
                title=""
              >
                <div>20</div>
              </td>
              <td
                data-date="21"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week3 xdsoft_date xdsoft_disabled"
                title=""
              >
                <div>21</div>
              </td>
              <td
                data-date="22"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week4 xdsoft_date xdsoft_disabled"
                title=""
              >
                <div>22</div>
              </td>
              <td
                data-date="23"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week5 xdsoft_date xdsoft_disabled"
                title=""
              >
                <div>23</div>
              </td>
              <td
                data-date="24"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week6 xdsoft_date xdsoft_disabled xdsoft_weekend"
                title=""
              >
                <div>24</div>
              </td>
            </tr>
            <tr>
              <td
                data-date="25"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week0 xdsoft_date xdsoft_disabled xdsoft_weekend"
                title=""
              >
                <div>25</div>
              </td>
              <td
                data-date="26"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week1 xdsoft_date xdsoft_disabled"
                title=""
              >
                <div>26</div>
              </td>
              <td
                data-date="27"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week2 xdsoft_date xdsoft_disabled"
                title=""
              >
                <div>27</div>
              </td>
              <td
                data-date="28"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week3 xdsoft_date xdsoft_disabled"
                title=""
              >
                <div>28</div>
              </td>
              <td
                data-date="29"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week4 xdsoft_date xdsoft_disabled"
                title=""
              >
                <div>29</div>
              </td>
              <td
                data-date="30"
                data-month="8"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week5 xdsoft_date xdsoft_disabled"
                title=""
              >
                <div>30</div>
              </td>
              <td
                data-date="1"
                data-month="9"
                data-year="2022"
                className="xdsoft_date xdsoft_day_of_week6 xdsoft_date xdsoft_disabled xdsoft_other_month xdsoft_weekend"
                title=""
              >
                <div>1</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <button
        type="button"
        className="xdsoft_save_selected blue-gradient-button"
        style={{display: "none"}}
      >
        Save Selected
      </button>
    </div>
    <div className="xdsoft_timepicker active">
      <button type="button" className="xdsoft_prev"></button>
      <div className="xdsoft_time_box xdsoft_scroller_box">
        <div className="xdsoft_time_variant" style={{marginTop: 0+"px"}}>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="0"
            data-minute="0"
          >
            00:00
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="0"
            data-minute="15"
          >
            00:15
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="0"
            data-minute="30"
          >
            00:30
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="0"
            data-minute="45"
          >
            00:45
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="1"
            data-minute="0"
          >
            01:00
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="1"
            data-minute="15"
          >
            01:15
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="1"
            data-minute="30"
          >
            01:30
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="1"
            data-minute="45"
          >
            01:45
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="2"
            data-minute="0"
          >
            02:00
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="2"
            data-minute="15"
          >
            02:15
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="2"
            data-minute="30"
          >
            02:30
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="2"
            data-minute="45"
          >
            02:45
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="3"
            data-minute="0"
          >
            03:00
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="3"
            data-minute="15"
          >
            03:15
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="3"
            data-minute="30"
          >
            03:30
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="3"
            data-minute="45"
          >
            03:45
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="4"
            data-minute="0"
          >
            04:00
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="4"
            data-minute="15"
          >
            04:15
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="4"
            data-minute="30"
          >
            04:30
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="4"
            data-minute="45"
          >
            04:45
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="5"
            data-minute="0"
          >
            05:00
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="5"
            data-minute="15"
          >
            05:15
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="5"
            data-minute="30"
          >
            05:30
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="5"
            data-minute="45"
          >
            05:45
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="6"
            data-minute="0"
          >
            06:00
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="6"
            data-minute="15"
          >
            06:15
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="6"
            data-minute="30"
          >
            06:30
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="6"
            data-minute="45"
          >
            06:45
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="7"
            data-minute="0"
          >
            07:00
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="7"
            data-minute="15"
          >
            07:15
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="7"
            data-minute="30"
          >
            07:30
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="7"
            data-minute="45"
          >
            07:45
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="8"
            data-minute="0"
          >
            08:00
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="8"
            data-minute="15"
          >
            08:15
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="8"
            data-minute="30"
          >
            08:30
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="8"
            data-minute="45"
          >
            08:45
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="9"
            data-minute="0"
          >
            09:00
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="9"
            data-minute="15"
          >
            09:15
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="9"
            data-minute="30"
          >
            09:30
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="9"
            data-minute="45"
          >
            09:45
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="10"
            data-minute="0"
          >
            10:00
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="10"
            data-minute="15"
          >
            10:15
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="10"
            data-minute="30"
          >
            10:30
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="10"
            data-minute="45"
          >
            10:45
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="11"
            data-minute="0"
          >
            11:00
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="11"
            data-minute="15"
          >
            11:15
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="11"
            data-minute="30"
          >
            11:30
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="11"
            data-minute="45"
          >
            11:45
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="12"
            data-minute="0"
          >
            12:00
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="12"
            data-minute="15"
          >
            12:15
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="12"
            data-minute="30"
          >
            12:30
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="12"
            data-minute="45"
          >
            12:45
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="13"
            data-minute="0"
          >
            13:00
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="13"
            data-minute="15"
          >
            13:15
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="13"
            data-minute="30"
          >
            13:30
          </div>
          <div
            className="xdsoft_time xdsoft_disabled xdsoft_current"
            data-hour="13"
            data-minute="45"
          >
            13:45
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="14"
            data-minute="0"
          >
            14:00
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="14"
            data-minute="15"
          >
            14:15
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="14"
            data-minute="30"
          >
            14:30
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="14"
            data-minute="45"
          >
            14:45
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="15"
            data-minute="0"
          >
            15:00
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="15"
            data-minute="15"
          >
            15:15
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="15"
            data-minute="30"
          >
            15:30
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="15"
            data-minute="45"
          >
            15:45
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="16"
            data-minute="0"
          >
            16:00
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="16"
            data-minute="15"
          >
            16:15
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="16"
            data-minute="30"
          >
            16:30
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="16"
            data-minute="45"
          >
            16:45
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="17"
            data-minute="0"
          >
            17:00
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="17"
            data-minute="15"
          >
            17:15
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="17"
            data-minute="30"
          >
            17:30
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="17"
            data-minute="45"
          >
            17:45
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="18"
            data-minute="0"
          >
            18:00
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="18"
            data-minute="15"
          >
            18:15
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="18"
            data-minute="30"
          >
            18:30
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="18"
            data-minute="45"
          >
            18:45
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="19"
            data-minute="0"
          >
            19:00
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="19"
            data-minute="15"
          >
            19:15
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="19"
            data-minute="30"
          >
            19:30
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="19"
            data-minute="45"
          >
            19:45
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="20"
            data-minute="0"
          >
            20:00
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="20"
            data-minute="15"
          >
            20:15
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="20"
            data-minute="30"
          >
            20:30
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="20"
            data-minute="45"
          >
            20:45
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="21"
            data-minute="0"
          >
            21:00
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="21"
            data-minute="15"
          >
            21:15
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="21"
            data-minute="30"
          >
            21:30
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="21"
            data-minute="45"
          >
            21:45
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="22"
            data-minute="0"
          >
            22:00
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="22"
            data-minute="15"
          >
            22:15
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="22"
            data-minute="30"
          >
            22:30
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="22"
            data-minute="45"
          >
            22:45
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="23"
            data-minute="0"
          >
            23:00
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="23"
            data-minute="15"
          >
            23:15
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="23"
            data-minute="30"
          >
            23:30
          </div>
          <div
            className="xdsoft_time xdsoft_disabled"
            data-hour="23"
            data-minute="45"
          >
            23:45
          </div>
        </div>
        <div className="xdsoft_scrollbar">
          <div
            className="xdsoft_scroller"
            style={{height: 10+"px", marginTop: 0+"px"}}
          ></div>
        </div>
      </div>
      <button type="button" className="xdsoft_next"></button>
    </div>
  </div>

    </div>
  )
}

export default NasherArticles
