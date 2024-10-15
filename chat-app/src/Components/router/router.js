import React from "react";
import Login from "../container/public/Login";
import { Route, Routes } from "react-router-dom";
import { path } from "../utils/constant";
import Home from "../container/public/Home";
import HomePage from "../container/public/HomePage";
import About from "../container/public/About";
import Contact from "../container/public/Contact";

const RouterApp = () => {
  return (
    <>
      <Routes>
        <Route path={path.LOGIN} element={<Login />} />
        <Route path={path.HOME} element={<Home />}>
          <Route path="*" element={<HomePage />} />
          <Route path={path.ABOUT} element={<About />} />
          <Route path={path.CONTACT} element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
};

export default RouterApp;
