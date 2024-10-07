import React from "react";
import { UserOutlined, LockOutlined, HomeOutlined } from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import { removeCookie,sleep } from "./Helper";
import { useNavigate } from "react-router-dom";
import { notification } from "antd";
import { openNotification } from "./Notifacation";


const { Header, Content, Footer, Sider } = Layout;
const NavBar = () => {
  const [api,contextHolder] = notification.useNotification();
  const navtive = useNavigate();
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

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
    openNotification(api,"Đăng xuất thành công","Tạm biệt người dùng");
    await sleep(1000);
    removeCookie('authTokenS');
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
    { key: "1", icon: React.createElement(HomeOutlined), label: "Trang chủ" },
    { key: "2", icon: React.createElement(UserOutlined), label: "Thông tin User" },
    { key: "3", icon: React.createElement(LockOutlined), label: "Đăng xuất" },
  ];

  return (
   <>
    {contextHolder}
    <Layout>
      <Content
        style={{
          padding: "0 48px",
        }}
      >
        <Layout
          style={{
            padding: "24px 0",
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Sider
            style={{
              background: colorBgContainer,
            }}
            width={200}
          >
            <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              style={{
                height: "100%",
              }}
              items={items1.map(item => ({
                ...item,
                onClick: () => handleMenuClick(item.key), // Gọi hàm với key của item
              }))}
            />
          </Sider>
          <Content
            style={{
              padding: "0 24px",
              minHeight: 280,
            }}
          >
            <div></div>
          </Content>
        </Layout>
      </Content>
    </Layout>
    </>
  );
};

export default NavBar;
