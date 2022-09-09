import React from "react"
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
    import "./css/Frutiger.css"
const Login = () => {
  return (
    <div className="login-layout">
      <div className="login-container">
    <div className="client-info">
      <h4></h4>
    </div>
    <div className="login-form">
      <h4>Please Enter Your Information</h4>
      <form action="/Account/logon?ReturnUrl=%2F" method="post">
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text"
              ><i className="ace-icon fa fa-user"></i
            ></span>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            name="Username"
          />
        </div>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text"
              ><i className="ace-icon fa fa-lock"></i
            ></span>
          </div>
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            name="Password"
          />
        </div>
        <div className="form-group">
          <div className="custom-control custom-switch">
            <input
              type="checkbox"
              className="custom-control-input"
              id="RememberMe"
              name="RememberMe"
              checked=""
              value="true"
            />
            <label className="custom-control-label" for="RememberMe">
            Remember Me
            </label>
          </div>
        </div>
        <div className="login-message"></div>
        <div className="submit-wrapper">
          <button type="submit" className="btn btn-hilighted">
            <i className="ace-icon fa fa-key"></i>
            <span>Login</span>
          </button>
        </div>
        <input
          data-val="true"
          data-val-required="The ReturnUrl field is required."
          id="ReturnUrl"
          name="ReturnUrl"
          type="hidden"
          value="/"
        /><input
          name="__RequestVerificationToken"
          type="hidden"
          value="CfDJ8Gw4EJhP_tFBqoXBSpM7LZ3jO87lr5yBia2BwYzlLFGWVPOkHaZXz3bv4_ZNEY0We6e9qlgDKVLOm9fohpQgkWtH1kP8Bgkn9f4sHxsSvKNW2qsJinwhidrAEtepVoeDIBcJu1Yi7bsM9vA8Zl_ofIY"
        />
      </form>
    </div>
    <div className="login-footer">
      <img
        src="//admango.cdn.mangomolo.com/analytics/mangopulse/images/logo/small.png"
      />
      Powered By Mangopulse
    </div>
  </div>
    </div>
  )
}

export default Login
