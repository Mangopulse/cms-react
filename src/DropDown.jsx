// import React from "react";
// import image1 from "./components/images/question.png"
// import { horizantalnavbar } from "./dummydata";
// // reactstrap components
// import {
//   DropdownToggle,
//   DropdownMenu,
//   DropdownItem,
//   UncontrolledDropdown,
// } from "reactstrap";

// function Example() {
//   return (
//     <>
//     {horizantalnavbar.map((val) => (
//     <li className="client-wrapper dropdown-toggle">
      
//       <UncontrolledDropdown>
//         <DropdownToggle
//           caret
//           color="white"
//           id="dropdownMenuButton"
//           type="button"
//         >
//        <i className={val.user_circle}></i>,
//         </DropdownToggle>
//           <ul className="dropdown-menu dropdown-menu-left">
//         <DropdownMenu aria-labelledby="dropdownMenuButton">
//           <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
//           <a href="/Account/ChangePassword" className="account">
//            <i className="icon fa fa-key"></i>
//             تغيير كلمة السر
//           </a>
//           </DropdownItem>
//           <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
//          <a href="/Account/ChangeAvatar" className="account">
//           <i className="icon fa fa-key"></i>
//            تغيير الصورة
//         </a>
//           </DropdownItem>
//           <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
//           <a href="/Account/LogOff" className="notajax" className="account">
//             <i className="icon fa fa-power-off"></i>
//              تسجيل الخروج
//           </a>
//           </DropdownItem>
//           <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
//            <a
//               href="/Account/ChangeLanguage?language=ar"
//               className="clearfix notajax lang active"
//               >
//                 العربية
//             </a>
//           </DropdownItem>
//           <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
//           <a
//       href="/Account/ChangeLanguage?language=en"
//       className="clearfix notajax lang"
//     >
//       English
//     </a>
//           </DropdownItem>
//         </DropdownMenu>
//         </ul>
//       </UncontrolledDropdown>
//       </li>
//     ))}
//     </>
//   );
// }

// export default Example;


// <li>
// <a
//   data-toggle="dropdown"
//   className="dropdown-toggle user-options"
//   href="#"
// >
// <i className={val.user_circle}></i>,
// </a>
// <ul className="dropdown-menu user-dropdown dropdown-menu-left">
//   <li className="account">
//     <a href="/Account/ChangePassword">
//       <i className="icon fa fa-key"></i>
//       تغيير كلمة السر
//     </a>
//   </li>
//   <li className="account">
//     <a href="/Account/ChangeAvatar">
//       <i className="icon fa fa-key"></i>
//       تغيير الصورة
//     </a>
//   </li>
//   <li className="account">
//     <a href="/Account/LogOff" className="notajax">
//       <i className="icon fa fa-power-off"></i>
//       تسجيل الخروج
//     </a>
//   </li>
//   <li className="divider clearfix"></li>
//   <li className="lang active">
//     <a
//       href="/Account/ChangeLanguage?language=ar"
//       className="clearfix notajax"
//     >
//       العربية
//     </a>
//   </li>
//   <li className="lang ">
//     <a
//       href="/Account/ChangeLanguage?language=en"
//       className="clearfix notajax"
//     >
//       English
//     </a>
//   </li>
// </ul>
// </li>