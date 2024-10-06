import "./App.css";
import Login from "./Components/Login";
import { Route, Routes, useNavigate } from "react-router-dom";
import Menu from "./Components/Menu";
import { useEffect } from "react";
import { getCookie } from "./Components/Helper";

const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const authen = getCookie("authTokenS");
    if (authen) {
      navigate('/Menu'); // Nếu có authToken thì điều hướng đến /Menu
    } else {
      navigate('/'); // Nếu không có authToken thì điều hướng đến /Login
    }
  }, [navigate]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Menu" element={<Menu />} />
      </Routes>
    </>
  );
}

export default App;
