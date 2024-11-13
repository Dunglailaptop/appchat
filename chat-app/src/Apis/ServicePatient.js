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

export const getDetailPatient = (patient_id) => new Promise(async (resolve,reject) => {
     try {
          const response = await axios({
             url: "/api/Patient/GetListDetail",
             method: "get",
             headers: {
                  "Content-Type": "application/json" // Đảm bảo đúng Content-Type là JSON
             },
             params: {
                patient_id: patient_id, // Chuyển đổi JSON thành chuỗi 
             }
          })
          resolve(response)
     }catch (error){
          reject(error);
     }
}) 