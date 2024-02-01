import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "../Pages/Welcome";
import SignUp from "../Pages/SignUp";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import SignIn from "../Pages/SignIn";
import CtaskHeader from "../Components/CtaskHeader";
import CtaskDashboard from "../Pages/CtaskDashboard";

const Home = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <CtaskHeader />
        <Routes>
          <Route path="/chronohub" element={<Welcome />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/chronotask/your-work" element={<CtaskDashboard />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default Home;
