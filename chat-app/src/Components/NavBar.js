import React, { useState, useEffect } from "react";
import {
  UserOutlined,
  LockOutlined,
  HomeOutlined,
  CheckCircleTwoTone,
  LogoutOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme, Avatar, Space, Image, Tooltip } from "antd";
import { removeCookie, sleep } from "./Helper";
import { useNavigate } from "react-router-dom";
import { notification } from "antd";
import { openNotification } from "./Notifacation";
import "./NavBar.css";
import Item from "antd/es/list/Item";
import BarSreach from "./BarSreach";

const { Header, Content, Footer, Sider } = Layout;
const NavBar = () => {
  const [api, contextHolder] = notification.useNotification();
  const navtive = useNavigate();
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const items = ["Dungct", "HuyenPham", "Hiuthu2", "BaThien", "TrungT1"];

  const handleHomeClick = () => {
    console.log("Clicked Trang chủ");
    // Logic cho Trang chủ
  };

  const handleUserInfoClick = () => {
    console.log("Clicked Thông tin User");
    // Logic cho Thông tin User
  };

  const handleLogoutClick = async () => {
    console.log("Clicked Đăng xuất");
    openNotification(api, "Đăng xuất thành công", "Tạm biệt người dùng");
    await sleep(1000);
    removeCookie("authTokenS");
    navtive("/Login");
    // Logic cho Đăng xuất
  };

  const handleMenuClick = (key) => {
    console.log(`Clicked item with key: ${key}`);
    // Gọi hàm tương ứng dựa vào key
    if (key === "1") {
      handleHomeClick();
    } else if (key === "2") {
      handleUserInfoClick();
    } else if (key === "3") {
      handleLogoutClick();
    }
  };

  const items1 = [
    { key: "1", icon: React.createElement(UserOutlined), label: "Trang chủ" },
    {
      key: "2",
      icon: React.createElement(UserOutlined),
      label: "Thông tin User",
    },
    { key: "3", icon: React.createElement(LockOutlined), label: "Đăng xuất" },
  ];

  return (
    <>
      {contextHolder}
      <Layout
        style={{
          minHeight: "100vh",
          display: "-webkit-inline-box",
        }}
      >
        <div className="barMenu">
          <div>
            <Space direction="vertical" size={16}>
              <Space wrap size={16}>
                <Tooltip title="Thông tin tài khoản">
                  <Avatar
                    size={34}
                    icon={<UserOutlined />}
                    style={{ padding: "10px", margin: "30px 10px 10px 10px" }}
                  />
                </Tooltip>
              </Space>
            </Space>
          </div>
          <div className="BarLogout">
            <Space direction="vertical" size={16}>
              <Space wrap size={16}>
                <Tooltip title="Đăng xuất">
                  <Avatar
                    size={34}
                    icon={<LogoutOutlined />}
                    style={{
                      padding: "10px",
                      margin: "30px 10px 10px 10px",
                    }}
                    onClick={handleLogoutClick}
                  />
                </Tooltip>
              </Space>
            </Space>
          </div>
        </div>
        <Content
          style={{
            padding: "0 0px",
            minHeight: "100vh",
          }}
        >
          <Layout
            style={{
              padding: "24px 0",
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
              minHeight: "100vh",
              display: "contents",
            }}
          >
            <div className="reasch">
              <BarSreach></BarSreach>
            </div>
            <Sider
              style={{
                background: colorBgContainer,
                overflow: "auto",
                height: "100vh",
               borderRight: "2px solid whitesmoke"
              }}
              width={300}
            >
              {items.map((Item) => (
                <div className="itemuser">
                  <Avatar
                    size={{
                      xs: 24,
                      sm: 32,
                      md: 40,
                      lg: 64,
                      xl: 80,
                      xxl: 40,
                    }}
                    icon={
                      <Image
                        width={300}
                        src="https://cellphones.com.vn/sforum/wp-content/uploads/2024/03/hinh-nen-ngau-2.jpg"
                      />
                    }
                  />
                  <h3 className="title">{Item}</h3>
                  <div className="buttonstatus">
                    <CheckCircleTwoTone twoToneColor="#52c41a" />
                  </div>
                </div>
              ))}
            </Sider>

            <div></div>
          </Layout>
        </Content>
      </Layout>
    </>
  );
};

export default NavBar;
