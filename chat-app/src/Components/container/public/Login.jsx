import React, { useEffect } from "react";
import {useNavigate} from "react-router-dom"

const Login = () => {
   
    const navigate = useNavigate();
    const ValueCheck = 0;
    const Role = 0;
    useEffect(() => {
        if (ValueCheck == 0) {
            setTimeout(() => {
               if(Role == 0){
                navigate("/Login");
               }else {
                navigate("/");
               }
            })
        }
    })
    return (
        <div>
          
              <h1>day la trang login</h1>
           

        </div>
    );
};

export default Login;
