import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../public/css/Login.css";

const Login = () => {
  const navigate = useNavigate();
  const ValueCheck = 0;
  const Role = 0;
  useEffect(() => {
    if (ValueCheck == 0) {
      setTimeout(() => {
        if (Role == 0) {
          navigate("/Login");
        } else {
          navigate("/");
        }
      });
    }
  });
  return (
    <>
      <div className="containner_login">
        <form className="form_input">
          <h1 id="titleLogin">Login</h1>
          <div className="txtUsername">
            <label>Username</label>
            <input type="text" className="ipt"></input>
          </div>
          <div className="txtPassword">
            <label>Password</label>
            <input type="text" className="ipt"></input>
          </div>
          <div className="btn">
            <button className="btn_buttonlogin">Login</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
