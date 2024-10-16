import React,{useEffect} from "react";
import {useNavigate} from "react-router-dom";

const HomePage = () => {
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
       <>
       <h1>hello main chinh ne</h1>
       </>
  );
}

export default HomePage;