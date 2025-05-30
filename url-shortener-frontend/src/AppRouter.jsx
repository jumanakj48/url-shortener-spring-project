import ShortenUrlPage from "./Components/ShortenUrlPage";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./Components/LandingPage";
import AboutPage from "./Components/AboutPage";
import Navbar from "./Components/NavBar";
import RegisterPage from "./Components/RegisterPage";
import Login from "./Components/Login";
import { ToastBar, Toaster } from "react-hot-toast";
import DashboardLayout from "./Components/Dashboard/DashboardLayout";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "./Components/ErrorPage";

const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Toaster position="bottom-center" />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/s/:url" element={<ShortenUrlPage />} />

        <Route path="/register" element={<PrivateRoute publicPage={true}><RegisterPage /></PrivateRoute>} />
        <Route path="/login" element={<PrivateRoute publicPage={true}><Login /></PrivateRoute>} />

        <Route path="/dashboard" element={ <PrivateRoute publicPage = {false}> <DashboardLayout /></PrivateRoute>} />
        <Route path="/error" element={ <ErrorPage />} />
        <Route path="*" element={  <ErrorPage message="We can't seem to find the page you're looking for"/>}/>
      </Routes>
    </>
  );
};

export default AppRouter;

export const SubDomainRouter = () => {
  return (
    <Routes>
      <Route path="/:url" element={<ShortenUrlPage />} />
    </Routes>
  );
};
