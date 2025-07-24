import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ShowInvalidQuestions = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { invalidQuestions = [] } = location.state || {}; // ✅ Default to an empty array

  return (
    <div className="w-full h-screen flex flex-col bg-gray-100">
      {/* Fixed Header */}
      <div className="sticky top-0 bg-gray-100 shadow-md p-4 z-10">
        <h1 className="text-2xl font-bold text-gray-500 text-center">Invalid Questions</h1>
      </div>

      {/* Scrollable Question List */}
      <div className="overflow-y-auto flex-grow p-4">
        {invalidQuestions.length === 0 ? (
          <p className="text-center text-gray-500">No invalid questions found.</p>
        ) : (
          invalidQuestions
            .filter((question) => question.StringExtract.trim() !== "") // ✅ Skip empty StringExtract
            .map((question, index) => {
              const { computedData, StringExtract } = question;
              const { problemStatement, options, correctOption } = computedData;
                // ✅ Remove excessive new lines while keeping required formatting
                const formattedStringExtract = StringExtract.replace(/\n\s*\n+/g, "\n").trim();
                return (
                <div key={index} className="bg-white shadow-md p-4 mb-4 rounded-lg">
                  {/* Question Heading */}
                  <h2
                    className="text-lg font-bold text-gray-700 whitespace-pre-line"
                    dangerouslySetInnerHTML={{ __html: formattedStringExtract.replace(/\n/g, "<br/>") }}
                  />

                  {/* Validation Checks */}
                  <ul className="mt-2 text-red-500 font-medium">
                    {problemStatement === null && <li>❌ Invalid Problem Statement</li>}
                    {!options || Object.keys(options).length === 0 ? <li>❌ Options are invalid</li> : null}
                    {correctOption === null && <li>❌ Invalid Correct Option</li>}
                  </ul>
                </div>
              );
            })
        )}
      </div>

      {/* Fixed Footer */}
      <div className="sticky bottom-0 bg-gray-100 shadow-md p-4 flex justify-between">
        <button
          className="bg-purple-500 text-white font-semibold px-6 py-2 rounded-md hover:bg-purple-600 transition"
          onClick={() => navigate(-1)}
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default ShowInvalidQuestions;
