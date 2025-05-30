import React from "react";
import Card from "./Card"; // Adjust the import path based on your folder structure
import { useNavigate } from "react-router-dom";
import { useStoreContext } from "../contextApi/ContextApi";
import { createContext, useContext, useState } from "react";

const LandingPage = () => {

    const navigate = useNavigate();
    const { token } = useStoreContext();
    console.log("TOKEN FROM LANDING PAGE : " + token);

  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col justify-between">
      
      {/* Hero Section */}
      <section className="text-center py-20 px-6 bg-gradient-to-br from-blue-100 to-white">
         <h1 className="text-4xl sm:text-5xl font-bold text-blue-700 mb-4">
          Shorten URLs. Track Every Click.
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8">
          Linkify helps you create short links and monitor real-time analytics for smarter sharing.
        </p>
        <a
          href="/login"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition"
        >
          Get Started
        </a>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 sm:px-12 lg:px-20 bg-white max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-2 gap-10">
          <Card
            title="Instant URL Shortening"
            desc="Quickly generate short, easy-to-share links from long URLs with zero hassle."
          />
          <Card
            title="Analytics Dashboard"
            desc="View click stats, traffic sources, and geo-data in real time to measure your link performance."
          />
          <Card
            title="Enhanced Security"
            desc="Rest assured with our robust security measures. All shortened URLs are protected with advanced encryption, ensuring your data remains safe and secure."
          />
          <Card
            title="Fast and Reliable"
            desc="Enjoy lightning-fast redirects and high uptime with our reliable infrastructure. Your shortened URLs will always be available and responsive, ensuring a seamless experience for your users."
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-sm text-gray-500 border-t">
        &copy; {new Date().getFullYear()} Linkify. All rights reserved.
      </footer>
    </div>
  );
};

export default LandingPage;
