import axios from "axios";
import axiosConfig from "../../axiosConfig";

export const apiLogin = (payload) =>
  new Promise(async (resolve, reject) => {
      try {
          const response = await axiosConfig({
              method: "post",
              url: "/api/Authentication/Login",
              data: payload,
          });
          localStorage.setItem("token", response.data.security.accessToken);
          // localStorage.setItem('refreshToken', response.data.security.refreshToken)
          console.log(response);
          resolve(response);
      } catch (error) {
          reject(error);
      }
  });
