

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const TestDashboard = () => {
  const navigate = useNavigate();
  const [tests, setTests] = useState([]);

  useEffect(() => {
    const fetchTests = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_SERVER_ADDRESS}/admin/show-test`);
        if (response?.data?.success) {
          setTests(response?.data?.data);
        }
      } catch (error) {
        console.error("Error fetching tests:", error);
        alert("Error fetching tests");
      }
    };

    fetchTests();
  }, []);

  const handleCreateClicked = () => {
    navigate("/admin/createtest");
  };

  const handleTestClick = (test) => {
    navigate("/admin/createtest", { state: { mode: "edit", testId: test.id } });
  };

  return (
    <div className="w-full max-w-7xl mx-auto space-y-6">
      {/* Test Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 drop-shadow-[2px_2px_2px_rgba(0,0,0,0.6)]">
        {/* Create New Test */}
        <div
          onClick={handleCreateClicked}
          className="border-2 border-yellow-500 flex flex-col justify-center items-center h-32 rounded-lg cursor-pointer hover:bg-yellow-100 transition duration-200"
        >
          <span className="text-6xl font-bold text-black">+</span>
          <span className="text-black font-semibold text-center">Create New</span>
        </div>

        {/* Saved Tests */}
        {tests?.map((test) => (
          <div
            key={test.id}
            onClick={() => handleTestClick(test)}
            className="bg-yellow-400 hover:bg-yellow-300 transition duration-200 flex flex-col justify-center items-center h-32 rounded-lg shadow-md p-4 cursor-pointer drop-shadow-[2px_2px_2px_rgba(0,0,0,0.6)]"
          >
            <span className="text-black font-semibold text-lg text-center drop-shadow-[2px_2px_2px_rgba(0,0,0,0.6)]">{test?.title}</span>
            <span className="text-black text-sm">Total Marks: {test?.totalMarks}</span>
            <span className="text-black text-sm">Duration: {test?.duration} mins</span>
          </div>
        ))}
      </div>

      {/* Description Section */}
      <div className="bg-white dark:bg-slate-900 p-4 rounded-lg shadow-md space-y-4">
        <div>
          <p className="font-semibold text-lg text-gray-900 dark:text-white">#Create New Test</p>
          <p className="text-gray-700 dark:text-gray-300">
            Create a new test, add description, set test parameters like total marks, passing marks & test duration.
          </p>
        </div>
        <div>
          <p className="font-semibold text-lg text-gray-900 dark:text-white">#Edit Saved Test</p>
          <p className="text-gray-700 dark:text-gray-300">
            Edit and update existing test. Add questions, bulk upload from .txt or .docx files, edit questions, and more.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestDashboard;
