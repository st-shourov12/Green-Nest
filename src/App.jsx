import React from 'react';
import Header from './Components/Header/Header';
import { Outlet } from 'react-router';
import Footer from './Components/Footer/Footer';
import { ToastContainer } from "react-toastify";




const App = () => {
  
  return (
    <div>
      <Header></Header>
      <Outlet ></Outlet>
      <Footer></Footer>

      <ToastContainer position={'top-center'}></ToastContainer>
    </div>
  );
};

export default App;
