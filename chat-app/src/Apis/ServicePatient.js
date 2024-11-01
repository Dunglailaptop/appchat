import axios from "../axios";

export const getdata = () => new Promise(async (resolve,reject) => {
  try {
       const response = await axios({
          url: "/api/Account",
          method: "get"
       })
       resolve(response)
  }catch (error){
       reject(error);
  }
}) 