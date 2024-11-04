import axios from "../axios";

export const getdata = (record_values,keysreachs) => new Promise(async (resolve,reject) => {
  try {
       const response = await axios({
          url: "/api/Patient/getListPatient",
          method: "get",
          headers: {
               "Content-Type": "application/json" // Đảm bảo đúng Content-Type là JSON
          },
          params: {
               record_value: record_values, // Chuyển đổi JSON thành chuỗi
               keysreach: keysreachs
          }
       })
       resolve(response)
  }catch (error){
       reject(error);
  }
}) 