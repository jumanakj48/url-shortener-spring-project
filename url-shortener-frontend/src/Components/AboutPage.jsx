import React from "react";
import {
  FaLink,
  FaShareAlt,
  FaEdit,
  FaChartLine,
  FaShieldAlt,
  FaRocket,
} from "react-icons/fa";

const AboutPage = () => {
  return (
    <div className="lg:px-16 sm:px-10 px-6 min-h-[calc(100vh-64px)] pt-10 bg-gradient-to-br from-blue-50 to-white text-slate-800">
      <div className="bg-white shadow-xl rounded-3xl p-8 sm:p-12">
        {/* Hero Section */}
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 text-center text-blue-700">
          Empowering Smarter Sharing
        </h1>
        <p className="text-gray-600 text-base sm:text-lg mb-10 text-center max-w-3xl mx-auto">
          At Linklytics, we make sharing smarter, faster, and more insightful.
          Whether you're managing a campaign or simplifying everyday communication,
          our platform gives you the power to create, secure, and analyze your links effortlessly.
        </p>

        {/* Features Section */}
        <div className="grid sm:grid-cols-2 gap-10 mb-14">
          <FeatureCard
            icon={<FaLink className="text-blue-500 text-4xl" />}
            title="Create Instantly"
            description="Generate short, clean URLs with custom aliases in seconds. No fuss. Just fast, reliable shortening tailored for modern users."
          />
          <FeatureCard
            icon={<FaShareAlt className="text-green-500 text-4xl" />}
            title="Track Engagement"
            description="Understand how your links perform through real-time insights on clicks, traffic sources, and device types."
          />
          <FeatureCard
            icon={<FaShieldAlt className="text-indigo-500 text-4xl" />}
            title="Built-In Trust"
            description="All links are secured with advanced encryption, protecting users from malicious redirection or data interception."
          />
          <FeatureCard
            icon={<FaRocket className="text-pink-500 text-4xl" />}
            title="Optimized for Speed"
            description="Experience lightning-fast redirects with our globally distributed network, ensuring a seamless click-to-content journey."
          />
        </div>

        {/* Why Linklytics */}
        <div className="mb-14">
          <h2 className="text-3xl font-bold mb-4 text-slate-800 text-center">What Sets Us Apart</h2>
          <ul className="list-disc list-inside text-gray-700 max-w-2xl mx-auto space-y-2 text-base">
            <li>Branded and personalized links for stronger identity</li>
            <li>Role-based collaboration for marketing teams</li>
            <li>Built-in QR code generation for every link</li>
            <li>Developer-friendly APIs and Zapier integrations</li>
            <li>Ad-free experience with transparent pricing</li>
          </ul>
        </div>
       
      </div>
    </div>
  );
};

// Reusable FeatureCard component
const FeatureCard = ({ icon, title, description }) => (
  <div className="flex items-start space-x-4">
    <div className="mt-1">{icon}</div>
    <div>
      <h3 className="text-xl font-semibold text-slate-800 mb-1">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

export default AboutPage;
