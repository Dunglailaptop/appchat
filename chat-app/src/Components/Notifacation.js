// notificationService.js
import { notification } from "antd";



export const openNotification = (api,message, description) => {
  const key = `open${Date.now()}`;
  console.log("🚀 ~ openNotification ~ key:", key);
  api.open({
    message,
    description,
    key,
  });
};

// Xuất contextHolder để sử dụng trong component

