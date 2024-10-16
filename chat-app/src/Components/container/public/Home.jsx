import React from "react";
import { Outlet } from "react-router";
import Header from "./Header";
import "./Home.css"

const Home = () => {
  
  return (
    <>
      <div className="container">
        <Header></Header>
        <div className="container_body">
          <Outlet></Outlet>
        </div>
      </div>
    </>
  );
};

export default Home;
