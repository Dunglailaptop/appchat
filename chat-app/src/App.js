import "./App.css";
import Login from "./Components/MenuUser/Login/Login";
import { Route, Routes, useNavigate } from "react-router-dom";
import Menu from "./Components/MenuUser/Menu";
import { useEffect } from "react";
import { getCookie } from "./Components/MenuUser/Helper/Helper";
import MenuAdmin from "./Components/MenuAdmin/MenuAdmin";

const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const authen = getCookie("authTokenS");
    if(authen != null) {
    console.log("🚀 ~ useEffect ~ authen:", authen.val1)
    }
    if (authen != null) {
      if(authen.val1 == "0") {
        navigate('/Menu'); // Nếu có authToken thì điều hướng đến /Menu
      }else {
        navigate('/MenuAdmin'); // Nếu có authToken thì điều hướng đến /Menu
      }
 
    } else {
      navigate('/'); // Nếu không có authToken thì điều hướng đến /Login
    }
  }, [navigate]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/MenuAdmin" element={<MenuAdmin></MenuAdmin>}/>
        <Route path="/Menu" element={<Menu />} />
      </Routes>
    </>
  );
}

export default App;
