import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../public/css/Login.css";
import { login } from "../../store/action/authAction";


const Login = () => {
  const [payload, setPayload] = useState({
    userName: "",
    password: "",
  });
 
  const handleSubmit = async () => {
    try {
      const check = "vo day roi"
      console.log("🚀 ~ handleSubmit ~ check:", check)
      login(payload);
      
     
    } catch (error) {
      console.error("Lỗi:", error);
      
    }
  };
  const navigate = useNavigate();
  const ValueCheck = 0;
  const Role = 0;
  useEffect(() => {
    const serverUrl = process.env.REACT_APP_SERVER_URL;
    console.log("🚀 ~ Login ~ serverUrl:", serverUrl);
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
            <input type="text" value={payload.userName} className="ipt"></input>
          </div>
          <div className="txtPassword">
            <label>Password</label>
            <input type="text" value={payload.password} className="ipt"></input>
          </div>
          <div className="btn">
            <button className="btn_buttonlogin" onClick={handleSubmit}>Login</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
