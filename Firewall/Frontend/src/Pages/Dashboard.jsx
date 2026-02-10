import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/portfolio");
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
      <div className="bg-white p-8 sm:p-10 rounded-2xl shadow-2xl text-center w-full max-w-sm">

        <h1 className="text-xl sm:text-2xl font-extrabold text-gray-800 mb-6">
          Dashboard
        </h1>

        <button
          onClick={handleNavigate}
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-xl transition duration-200 shadow-md transform hover:scale-105 text-sm sm:text-base"
        >
          Click here for the Portfolio
        </button>

      </div>
    </div>
  );
};

export default Dashboard;

