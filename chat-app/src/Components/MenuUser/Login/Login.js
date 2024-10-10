import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { Button, notification, Space } from "antd";
import { saveCookie, sleep } from "../Helper/Helper";
import "./Login.css";
import { openNotification } from "../Notifaction/Notifacation";


function Login() {
  // Khai báo state để lưu thông tin người dùng và xử lý lỗi
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Dùng hook useNavigate để điều hướng

  // Sử dụng hook useNotification của Ant Design
  const [api,contextHolder] = notification.useNotification();
  // Xử lý sự kiện submit form
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5128/api/Authentication/Login",
        {
          username,
          password,
        }
      );
      const { success, data } = response.data;
      if (success) {
        const { accessToken, idRole, username } = data;
        saveCookie("authTokenS", idRole, username, accessToken, 30);
        openNotification(api,"Đăng nhập thành công", `Chào mừng ${username} tới nhóm chat kín`);
        await sleep(1000); 
        navigate("/Menu"); // Điều hướng sau khi đăng nhập thành công
      }
    } catch (err) {
      setError("Đăng nhập không thành công!");
      openNotification(api,"Đăng nhập thất bại", "Tên đăng nhập hay mật khẩu bị sai");
      console.error("Login Error:", err);
    }
  };

  return (
    <>
      {contextHolder} {/* Phải có contextHolder để hiển thị thông báo */}
      <div className="container">
        <div className="nav_bar">
          <h2 className="login">Login</h2>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <form onSubmit={handleSubmit}>
            <div className="lbl_username">
              <label>Username:</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="lbl_password">
              <label>Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="btn">
              <Button type="primary" htmlType="submit">
                Login
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
