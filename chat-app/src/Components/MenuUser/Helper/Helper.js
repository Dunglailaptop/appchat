import Cookies from "js-cookie";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const saveCookie = (name, value1, value2, value3, minutes) => {
  const value = { val1: value1, val2: value2, val3: value3 }; // Đóng gói hai giá trị vào một đối tượng
  const expires = minutes / (24 * 60); // Chuyển phút thành ngày
  Cookies.set(name, JSON.stringify(value), { expires });
};

// Để lấy giá trị từ cookie
export const getCookie = (name) => {
  const cookie = Cookies.get(name);
  return cookie ? JSON.parse(cookie) : null;
};

// Hàm để xóa cookie
export const removeCookie = (name) => {
  Cookies.remove(name);
};

export { sleep };
