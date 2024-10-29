import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { Home, Public, Login } from "./containers/public";
import { Route, Routes } from "react-router";
import path from "./ultis/path";

function App() {
  const { test } = useSelector((state) => state.app);

  return (
    <>
      <div className="">
        <Routes>
          <Route path={path.PUBLIC} element={<Public></Public>}>
            <Route path={path.HOME} element={<Home></Home>}></Route>
            <Route path={path.LOGIN} element={<Login></Login>}></Route>
          </Route>
        </Routes>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <ToastContainer />
    </>
  );
}

export default App;
