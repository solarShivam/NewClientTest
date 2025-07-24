import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const CreateTest = () => {
   const location = useLocation();
  const mode = location?.state?.mode || "create";
  const testId = location?.state?.testId || null;
  const [assignToggle, setAssignToggle] = useState(false);
  const [isAssignToggleLoading, setIsAssignToggleLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(mode === "edit");
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState("");
  const [totalMarks, setTotalMarks] = useState("");
  const [passingMarks, setPassingMarks] = useState("");
  const [testType, setTestType] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [version, setVersion] = useState("");
  const [domain, setDomain] = useState("");
  const [tags, setTags] = useState("");


 // Fetch test data if in edit mode
  useEffect(() => {
    const fetchTestData = async () => {
      if (mode === "edit" && testId) {
        try {
          const response = await axios.get(
            `${import.meta.env.VITE_SERVER_ADDRESS}/admin/show-test`,
            {
              params: { testId },
            }
          );

          const data = response?.data?.data;

          if (data) {
            setTitle(data.title || "");
            setDescription(data.description || "");
            setDuration(data.duration || "");
            setTotalMarks(data.totalMarks || "");
            setPassingMarks(data.passingMarks || "");
            setTestType(data.type || "");
            setDifficulty(data.difficulty || "");
            setVersion(data.version || "");
            setDomain(data.domain?.map((d) => d.name).join(",") || "");
            setTags(data.tags?.map((t) => t.name).join(",") || "");

             setAssignToggle(data.isAttemptable);
          }
        } catch (error) {
          console.error("Failed to fetch test data", error);
          alert("Failed to load test data");
        } finally {
          setIsLoading(false);
        }
      }
    };

    fetchTestData();
  }, [mode, testId]);


  const handleSubmit = async (e) => {
  e.preventDefault();

  if (Number(passingMarks) >= Number(totalMarks)) {
    alert("Passing marks must be less than total marks.");
    return;
  }

  const testData = {
    testId, // Include testId for update
    title,
    description,
    duration,
    totalMarks,
    passingMarks,
    type: testType,
    difficulty,
    version,
    domain: domain.split(",").map((d) => d.trim()),
    tags: tags.split(",").map((t) => t.trim()),
  };

  try {
    let response;

    if (mode === "edit") {
      // 🛠 Update API call
      response = await axios.put(
        `${import.meta.env.VITE_SERVER_ADDRESS}/admin/update-test`,
        testData,
        { headers: { "Content-Type": "application/json" } }
      );
    } else {
      // 🆕 Create API call
      response = await axios.post(
        `${import.meta.env.VITE_SERVER_ADDRESS}/admin/create-test`,
        testData,
        { headers: { "Content-Type": "application/json" } }
      );
    }

    if (response?.status === 200 || response?.status === 201) {
      alert(mode === "edit" ? "Test Updated Successfully!" : "Test Created Successfully!");
      localStorage.setItem("testId", response?.data?.data?.id || testId);

      // Reset form fields only on create
      if (mode !== "edit") {
        setTitle("");
        setDescription("");
        setDuration("");
        setTotalMarks("");
        setPassingMarks("");
        setTestType("");
        setDifficulty("");
        setVersion("");
        setDomain("");
        setTags("");
      }
    } else {
      alert("Failed to save test");
    }
  } catch (error) {
    console.error("Error:", error);
    alert("Something went wrong saving the test!");
  }
};

const handleDeleteCreateTestClick = async () => {
      try {
        const response = await axios.delete(
          `${import.meta.env.VITE_SERVER_ADDRESS}/admin/delete-test?testId=${testId}`
        );

        if (response.status === 200) {
          alert("Test Deleted Successfully!");
          navigate(-1); // Redirect to the dashboard or another page
        } else {
          alert("Failed to delete test");
        }
      } catch (error) {
        console.error("Error deleting test:", error);
        alert("Something went wrong!");
      }
    };
const handleToggleAssign = async () => {
    if (isAssignToggleLoading || !testId) return;

    // Confirm only if test is currently assignable
    if (assignToggle) {
      const confirmed = window.confirm(
        "This test is currently assignable. Are you sure you want to toggle it?"
      );
      if (!confirmed) return;
    }

    setIsAssignToggleLoading(true);

    try {
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER_ADDRESS}/admin/toggle-testAssignability`,
        {
          params: { testId },
        }
      );

      if (response?.data?.success) {
        const newAttemptable = response.data.data?.isAttemptable;
        setAssignToggle(newAttemptable);
        alert(response.data.message || "Assignability toggled successfully!");
      } else {
        alert(response.data.message || "Failed to toggle assignability.");
      }
    } catch (error) {
      console.error("Toggle Assignability failed:", error);
      alert("Something went wrong while toggling assignability.");
    } finally {
      setIsAssignToggleLoading(false);
    }
  };



  return (
    <div className="max-w-4xl mx-auto bg-white dark:bg-slate-900 shadow-md rounded-lg p-6 md:p-10 space-y-6 drop-shadow-[2px_2px_2px_rgba(0,0,0,0.6)]">
      <div className="flex justify-between items-center mb-6">
  {/* Go Back Button */}
  <button
    type="button"
    onClick={() => navigate(-1)} // Go back to previous page
    className="text-sm text-blue-600 font-semibold hover:underline"
  >
    ← Go Back
  </button>

  {/* Title */}
  <h1 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-white text-center flex-1">
    {mode === "edit" ? "Update Test" : "Create Test"}
  </h1>

  {/* Toggle Button - Only visible in 'edit' mode */}
 {mode === "edit" ? (
          <label className="flex items-center cursor-pointer">
            <div className="relative">
              <input
                type="checkbox"
                className="sr-only"
                checked={assignToggle}
                onChange={handleToggleAssign}
                disabled={isAssignToggleLoading}
              />
              <div
                className={`w-11 h-6 rounded-full shadow-inner transition duration-300 ${
                  assignToggle ? "bg-blue-600" : "bg-gray-600"
                } ${isAssignToggleLoading ? "opacity-50 cursor-not-allowed" : ""}`}
              ></div>
              <div
                className={`dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition ${
                  assignToggle ? "translate-x-5" : ""
                }`}
              ></div>
            </div>
            <span className="ml-2 text-sm text-gray-700">
              {isAssignToggleLoading ? "Toggling..." : "Toggle Assign"}
            </span>
          </label>
        ) : (
          <div className="w-[150px]" />
        )}

</div>


      

      <form onSubmit={handleSubmit} className="grid gap-6">
        {/* Title */}
        <div className="flex flex-col">
          <label className="text-sm font-semibold text-slate-700 dark:text-slate-200 mb-1">Title</label>
          <input
            type="text"
            className="px-4 py-2 border border-gray-300 dark:border-slate-700 rounded-md bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
            placeholder="Enter test title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        {/* Description */}
        <div className="flex flex-col">
          <label className="text-sm font-semibold text-slate-700 dark:text-slate-200 mb-1">Description</label>
          <input
            type="text"
            className="px-4 py-2 border border-gray-300 dark:border-slate-700 rounded-md bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
            placeholder="Enter test description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        {/* Row for Duration & test type  */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label className="text-sm font-semibold text-slate-700 dark:text-slate-200 mb-1">Duration (minutes)</label>
            <input
              type="number"
              min="0"
              className="px-4 py-2 border border-gray-300 dark:border-slate-700 rounded-md bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
              placeholder="Enter duration"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-semibold text-slate-700 dark:text-slate-200 mb-1">Test Type</label>
            <input
              type="text"
              className="px-4 py-2 border border-gray-300 dark:border-slate-700 rounded-md bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
              placeholder="Enter test type..."
              value={testType}
              onChange={(e) => setTestType(e.target.value)}
              required
            />
          </div>
        </div>

        {/* Row for Total & Passing Marks */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label className="text-sm font-semibold text-slate-700 dark:text-slate-200 mb-1">Total Marks</label>
            <input
              type="number"
              min="0"
              className="px-4 py-2 border border-gray-300 dark:border-slate-700 rounded-md bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
              placeholder="Enter total marks"
              value={totalMarks}
              onChange={(e) => setTotalMarks(e.target.value)}
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-semibold text-slate-700 dark:text-slate-200 mb-1">Passing Marks</label>
            <input
              type="number"
              min="0"
              className="px-4 py-2 border border-gray-300 dark:border-slate-700 rounded-md bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
              placeholder="Enter passing marks"
              value={passingMarks}
              onChange={(e) => setPassingMarks(e.target.value)}
              required
            />
          </div>
        </div>

        {/* Additional Fields */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label className="text-sm font-semibold text-slate-700 dark:text-slate-200 mb-1">Difficulty</label>
            <input
              type="text"
              className="px-4 py-2 border border-gray-300 dark:border-slate-700 rounded-md bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
              placeholder="e.g., Easy, Medium, Hard"
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value)}
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-semibold text-slate-700 dark:text-slate-200 mb-1">Version</label>
            <input
              type="text"
              className="px-4 py-2 border border-gray-300 dark:border-slate-700 rounded-md bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
              placeholder="Enter version number"
              value={version}
              onChange={(e) => setVersion(e.target.value)}
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label className="text-sm font-semibold text-slate-700 dark:text-slate-200 mb-1">Domain</label>
            <input
              type="text"
              className="px-4 py-2 border border-gray-300 dark:border-slate-700 rounded-md bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
              placeholder="Comma-separated e.g., Personality,Dummy,Test"
              value={domain}
              onChange={(e) => setDomain(e.target.value)}
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-semibold text-slate-700 dark:text-slate-200 mb-1">Tags</label>
            <input
              type="text"
              className="px-4 py-2 border border-gray-300 dark:border-slate-700 rounded-md bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
              placeholder="Comma-separated e.g., General,testing,tryout"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
            />
          </div>
        </div>

        {/* Submit */}
        {/* <div className="flex justify-center pt-4">
          <button
            type="submit"
            className="px-6 py-2 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 transition"
          >
           {mode === "edit" ? "Update Test" : "Save Test"}
          </button>
        </div> */}

        {mode === "edit" ? (
          <div className="flex justify-between pt-4 items-center">
            {/* Delete Button - Left */}
            <button
              type="button"
              onClick={handleDeleteCreateTestClick}
              className="px-4 py-2 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600 transition"
            >
              Delete Test
            </button>

            {/* Update Button - Center */}
            <button
              type="submit"
              className="px-6 py-2 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 transition"
            >
              Update Test
            </button>

            {/* Edit Questions Button - Right */}
            <button
              type="button"
              onClick={() =>
                    navigate("/admin/showallQuesadmin", { state: { id: testId } })
                  }
              className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition"
            >
              Edit Questions
            </button>
          </div>






        ) : (
          <div className="flex justify-center pt-4">
            <button
              type="submit"
              className="px-6 py-2 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 transition"
            >
              Save Test
            </button>
          </div>
        )}

      </form>
    </div>
  );
};

export default CreateTest;
