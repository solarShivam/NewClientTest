import React, { useState, useEffect } from "react";
import { CloudArrowUpIcon } from "@heroicons/react/24/solid"; 
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

const UploadQuestion = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const testId = location.state?.testId;
    const [file, setFile] = useState(null);
    const [modalMessage, setModalMessage] = useState(""); //  For popup message
    const [showModal, setShowModal] = useState(false); //  Modal visibility
    const [invalidQuestions, setInvalidQuestions] = useState([]); // Store invalid questions

  
    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
  
      if (!file) {
          alert("Please select a file before submitting.");
          return;
      }
  
      const finalTestId = testId  ;
      if (!finalTestId) {
          alert("Test ID is missing . Please create a test first.");
          return;
      }
  
      const formData = new FormData();
      formData.append("file", file);
      formData.append("testId", finalTestId); //  Attach test ID

      try {
          const response = await axios.post(`${import.meta.env.VITE_SERVER_ADDRESS}/admin/upload-quesFile`, formData, {
            headers: { "Content-Type": "multipart/form-data" },
          });
  
          if (response.data.success) {
              alert("File uploaded successfully!");
            
            setModalMessage(response.data.message); //  Set message for modal
            setShowModal(true); // Show modal after clicking OK
            setInvalidQuestions(response.data.data || []);
  
            setFile(null); 
            document.getElementById("fileInput").value = ""; // Clear file input
          }
          else
          {
            alert("File upload failed. Please try again.");
          }
      } catch (error) {
        alert(` ${error?.response?.data?.message}`);
      } 
  };
  

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleSeeQuestions = () => {
        setShowModal(false);
        navigate("/admin/showinvaliduploadques", { 
            state: { 
                id: testId, 
                invalidQuestions: invalidQuestions //Pass invalid questions 
            } 
        });
    };

    return (
        <div className=" flex flex-col justify-center items-center bg-gray-100 ">
            <div className="bg-white shadow-lg rounded-lg w-full max-w-4xl p-6">
                <h1 className="text-2xl font-bold bg-yellow-500 text-center mb-7 mt-4 py-2 rounded-md shadow-2xl drop-shadow-[2px_2px_3px_rgba(0,0,0,0.6)]" >
                   <span className="drop-shadow-[2px_2px_3px_rgba(0,0,0,0.6)]">Add Questions to Test </span>
                </h1>

                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Custom Upload Field */}
                    <div className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-gray-300 rounded-lg bg-gray-50 hover:bg-gray-100 transition">
                        <label className="flex flex-col items-center cursor-pointer">
                            <CloudArrowUpIcon className="w-12 h-12 text-blue-500" />
                            <span className="text-gray-700 font-medium mt-2">
                                {file ? file.name : "Click to Upload or Drag & Drop"}
                            </span>
                            <input id="fileInput"  type="file" onChange={handleFileChange} className="hidden" />
                        </label>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-red-500 text-white font-semibold py-2 rounded-md hover:bg-red-600 drop-shadow-[2px_2px_3px_rgba(0,0,0,0.6)]"
                    >
                      Submit
                    </button>

                </form>

            </div>

             {/*  Popup Modal */}
             {showModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                        <h2 className="text-xl font-bold text-gray-700 mb-4">Upload Status</h2>
                        <p className=" text-gray-600">{modalMessage}</p>
                        <div className="flex justify-between space-x-4 mt-4">
                            <button
                                onClick={handleCloseModal}
                                className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
                            >
                                OK
                            </button>

                            <button
                                onClick={handleSeeQuestions}
                                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                            >
                                See Invalid Questions
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default UploadQuestion;



