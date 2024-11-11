import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { Home, Public, Login, PageError,PublicPrescription } from "./containers/public";
import { Prescription, Invoiceinpaient, Invoiceoutpatient, Patient, PrescriptionDetail } from "./containers/private";
import { Route, Routes } from "react-router";
import path from "./ultis/path";
import actionTypes from "./store/actions";
import * as action from "./store/actions/ApiDataPatient"

function App() {

  return (
    <>
      <div className="">
        <Routes>
          <Route path={path.PUBLIC} element={<Public></Public>}>
            <Route path={path.HOME} element={<Home></Home>}></Route>
            <Route path={path.LOGIN} element={<Login></Login>}></Route>
            <Route path={path.ERROR} element={<PageError></PageError>}></Route>
            <Route path={path.patient} element={<Patient></Patient>}></Route>
            <Route path={path.invoiceinpaient} element={<Invoiceinpaient></Invoiceinpaient>}></Route>
            <Route path={path.PUBLICPRESCRIPTION} element={<PublicPrescription></PublicPrescription>}>
              <Route path={path.prescription} element={<Prescription></Prescription>}></Route>
              <Route path={path.PrescriptionDetail} element={<PrescriptionDetail></PrescriptionDetail>}></Route>
            </Route>
            
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
