import axios from "../axios";



export const getdataPrescription = (record_values,keysreachs) => new Promise(async (resolve,reject) => {
  try {
       const response = await axios({
          url: "/api/Prescription/getListPrescription",
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

export const getdataPrescriptionDetail = (record_values,keysreachs) => new Promise(async (resolve,reject) => {
     try {
          const response = await axios({
             url: "/api/Prescription/getPrescriptionDetail",
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
   
   export const ListPrescription = (keysreach) => new Promise(async (resolve,reject) => {
     try {
          const response = await axios({
             url: "/api/Prescription/GetListPrescriptionInPatient",
             method: "get",
             headers: {
                  "Content-Type": "application/json" // Đảm bảo đúng Content-Type là JSON
             },
             params: {
                  // Chuyển đổi JSON thành chuỗi
                  keysreach: keysreach,
             }
          })
          resolve(response)
     }catch (error){
          reject(error);
     }
   }) 