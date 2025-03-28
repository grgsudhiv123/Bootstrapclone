
import React, { useState } from "react";

const BootstrapComponent = () => {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div className="p-5 md:p-10 border border-slate-300 rounded-md md:rounded-xl ">
      <ul className="flex gap-2 p-1 bg-blue-600 rounded-3xl shadow-sm ">
        <li className="flex-1">
          <button
            className={`w-full px-4 py-2 rounded-3xl  transition cursor-pointer ${
              activeTab === "home" ? "bg-white text-blue-600" : "text-white"
            }`}
            onClick={() => setActiveTab("home")}
          >
            Home
          </button>
        </li>
        <li className="flex-1">
          <button
            className={`w-full px-4 py-2 rounded-3xl transition cursor-pointer ${
              activeTab === "profile" ? "bg-white text-blue-600" : "text-white"
            }`}
            onClick={() => setActiveTab("profile")}
          >
            Profile
          </button>
        </li>
        <li className="flex-1">
          <button
            className={`w-full px-4 py-2 rounded-3xl transition cursor-pointer ${
              activeTab === "contact" ? "bg-white text-blue-600" : "text-white"
            }`}
            onClick={() => setActiveTab("contact")}
          >
            Contact
          </button>
        </li>
      </ul>
    </div>
  );
};

export default BootstrapComponent;
