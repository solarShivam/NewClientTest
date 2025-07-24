import React, { useState, useEffect } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { XCircle } from "lucide-react";

const EditQuestions = () => {
  const [testData, setTestData] = useState(null);
  const location = useLocation(); // Get data from route state
  const navigate = useNavigate();

  // console.log("Saved test data:", location);

  const fetchTestData = async (id) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER_ADDRESS}/admin/show-test?testId=${id}`
      );

      if (response?.data?.success) {
        setTestData(response?.data?.data);
      } else {
        alert("Test not found!");
      }
    } catch (error) {
      console.error("Error fetching test data:", error);
      alert("Error fetching test data.");
    }
  };

  useEffect(() => {
    if (location.state?.id) {
      fetchTestData(location.state.id);
    }
  }, [location.state?.id]);

  // DELETE Question API
  const handleDelete = async (quesId) => {
    if (!window.confirm("Are you sure you want to delete this question?"))
      return;

    try {
      const response = await axios.delete(
        `${import.meta.env.VITE_SERVER_ADDRESS}/admin/delete-question`,
        { params: { quesId } } // Pass the question ID in the query params
      );

      if (response.data.success) {
        alert("Question deleted successfully!");

        // Remove the question from state
        setTestData((prevData) => ({
          ...prevData,
          questions: prevData.questions.filter((q) => q.id !== quesId),
        }));
      } else {
        alert("Failed to delete the question.");
      }
    } catch (error) {
      console.error("Error deleting question:", error);
      alert("Something went wrong while deleting!");
    }
  };

  const normalizeImageUrl = (url) => {
    if (!url) return url;

    if (url.startsWith("http://88.222.214.93:8003")) {
      return url.replace(
        "http://88.222.214.93:8003",
        "https://testportal.galosolar.com"
      );
    }

    return url;
  };

  useEffect(() => {
    console.log("my question show to admin ---------------", testData?.questions);
  }, [testData]);

  const handleGoBackClick = () => {
    navigate(-1);
  };

  const handleToggleActivation = async (quesId) => {
    try {
      const response = await axios.get(
        `${
          import.meta.env.VITE_SERVER_ADDRESS
        }/admin/toggle-questionActivation?quesId=${quesId}`
      );

      if (response?.data?.success) {
        // Toggle local isActive status
        alert("Question Toggle SuccessFully");
        setTestData((prevData) => ({
          ...prevData,
          questions: prevData.questions.map((q) =>
            q.id === quesId ? { ...q, isActive: !q.isActive } : q
          ),
        }));
      } else {
        alert("Failed to toggle question status.");
      }
    } catch (error) {
      console.error("Toggle error:", error);
      alert("Error toggling question activation.");
    }
  };

  //handle active and disactive Question
  const handleActive = (id) => {
    // console.log("id: ", id);
    if (id) {
      handleToggleActivation(id);
    }
  };
  return (
    <div className="w-full h-screen flex flex-col bg-gray-100">
      {/* Fixed Header */}
      <div className="sticky top-0 bg-gray-100 shadow-md px-2 py-3 z-10">
        <h1 className="text-2xl font-bold  text-center drop-shadow-[2px_2px_2px_rgba(0,0,0,0.6)]">
          Edit Questions{" "}
          <span className="text-sm drop-shadow-[2px_2px_2px_rgba(0,0,0,0.6)]">
            for {testData?.title || "Saved Test Name"}
          </span>
        </h1>
        <h2 className="text-lg font-semibold drop-shadow-[2px_2px_2px_rgba(0,0,0,0.6)]">
          Total Questions: {testData?.questions?.length || 0}
        </h2>
      </div>

      {/* Scrollable Question List */}
      <div className="flex-grow  space-y-4">
        {testData?.questions?.map((q, index) => (
          <div
            key={q?.id}
            className={`relative group p-4 rounded-lg shadow-md border flex flex-col md:flex-row justify-between ${
              !q.isActive
                ? "opacity-50 blur-sm hover:blur-none transition"
                : "bg-white"
            }`}
          >
            {/* Red X on hover for inactive questions */}
            {!q.isActive && (
              <div className="absolute inset-0 flex justify-center items-center z-10 bg-white/30 group-hover:bg-white/50">
                <XCircle
                  onClick={() => handleActive(q.id)}
                  className="text-red-600 w-12 h-12 opacity-0 group-hover:opacity-100 transition cursor-pointer"
                />
              </div>
            )}

            <div>
              {/* Problem Statement */}
              <p className="font-semibold whitespace-pre-line">
                Q.{index + 1} {q?.problemStatement?.replace(/\r\n/g, "\n")}
              </p>

              {/* Problem Image (if exists) */}
              {q?.problemImageUrl && (
                <img
                  // src={q?.problemImageUrl}
                  src={normalizeImageUrl(q?.problemImageUrl)}
                  alt="Problem"
                  className="mt-2 w-auto h-40 rounded-md"
                />
              )}

              {/* Options */}
              <ul className="list-none ml-4 mt-2">
                {Object?.entries(q?.options)?.map(([key, value]) => {
                  const isImage = value.match(/\.(jpeg|jpg|gif|png|webp)$/i); // Check if value is an image
                  return (
                    <li
                      key={key}
                      className="text-gray-600 flex items-center space-x-2"
                    >
                      <span className="font-semibold">{key}.</span>
                      {isImage ? (
                        <img
                          // src={value}
                          src={normalizeImageUrl(value)}
                          alt={`Option ${key}`}
                          className="w-auto h-40 rounded-md"
                        />
                      ) : (
                        <span>{value}</span>
                      )}
                    </li>
                  );
                })}
              </ul>

              {/* Correct Answer */}
              <p className="text-gray-700 mt-2 font-semibold">
                Correct Answer: {q?.correctOption?.toUpperCase()}
              </p>
            </div>

            {/* Edit, Delete & Toggle Buttons (in column) */}
            <div className="flex flex-col space-y-2 items-start mt-4 md:mt-0">
              <button
                onClick={() =>
                  navigate("/createquestion", {
                    state: { 
                      questionId: q.id ,
                      testIdForUp : q.testId,
                      mode: "Edit",
                    }
                  })
                } 
                className="p-2 text-blue-600 hover:text-blue-800 flex items-center space-x-1"
              >
                <FaEdit size={20} />
                <span>Edit</span>
              </button>

              <button
                onClick={() => handleDelete(q?.id)}
                className="p-2 text-red-600 hover:text-red-800 flex items-center space-x-1"
              >
                <FaTrash size={20} />
                <span>Delete</span>
              </button>

              <button
                onClick={() => handleToggleActivation(q?.id)}
                className="p-2 text-green-600 hover:text-green-800 flex items-center space-x-1"
              >
                <span
                  className={`w-4 h-4 rounded-full ${
                    q.isActive ? "bg-green-500" : "bg-gray-400"
                  }`}
                />
                <span>{q.isActive ? "Active" : "Inactive"}</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Fixed Footer */}
      <div className="sticky bottom-0 bg-gray-100 shadow-md px-2 py-3 flex justify-between">
        <button
          onClick={handleGoBackClick}
          className="bg-yellow-500  font-semibold px-6 py-2 rounded-md hover:bg-yellow-600 transition drop-shadow-[2px_2px_2px_rgba(0,0,0,0.6)]"
        >
          Go Back
        </button>

        <button
            onClick={() =>
              navigate("/admin/uploadquestion", { state: { testId: testData?.id } }) 
            }
          className="bg-yellow-500  font-semibold px-6 py-2 rounded-md hover:bg-yellow-600 transition drop-shadow-[2px_2px_2px_rgba(0,0,0,0.6)]"
        >
          Upload
        </button>

        <button
          onClick={
            () =>
              navigate("/admin/createquestion", {
                state: { 
                    testId: location.state?.id ,
                     type: testData.type,
                },
              }) //  Pass test ID
          }
          className="bg-yellow-500  font-semibold px-6 py-2 rounded-md hover:bg-yellow-600 transition drop-shadow-[2px_2px_2px_rgba(0,0,0,0.6)]"
        >
          Add Question
        </button>
      </div>
    </div>
  );
};

export default EditQuestions;
