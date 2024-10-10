import React from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined,HistoryOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import Account from './AccountManager/Account';
import BarSreach from '../MenuUser/Sreach/BarSreach';
const { Header, Content, Footer, Sider } = Layout;
// Mảng các mục mà bạn muốn truyền vào
const menuItems = [
  { icon: UserOutlined, name: "Quản lý tài khoản", id: 1 },
  { icon: HistoryOutlined, name: "Quản lý truy cập", id: 2 },
  { icon: NotificationOutlined, name: "Cài đặt", id: 3 },
];

const items2 = menuItems.map((item, key) => {
  const { icon: IconComponent, name } = item; // Giải nén icon và tên
  return {
    key: `sub${key}`, // Khóa cho mục chính
    icon: React.createElement(IconComponent), // Tạo icon bằng React.createElement
    label: name, // Nhãn cho mục
  };
});

const MenuAdmin = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (

    <Layout style={
      {
        minHeight: "100vh"
      }
    }>
    
      <Content
        style={{
          padding: '0 48px',
        }}
      >
          
        <Layout
          style={{
            padding: '24px 0',
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
            minHeight: "90vh"
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
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{
                height: '100%',
              }}
              items={items2}
            />
          </Sider>
          <Content
            style={{
              padding: '0 24px',
              minHeight: 280,
            }}
          >
            <Account></Account>
          </Content>
        </Layout>
      </Content>
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        Dungct design ©{new Date().getFullYear()} Created by Nguyễn Xuân Tiến Dũng
      </Footer>
    </Layout>
  );
};
export default MenuAdmin;