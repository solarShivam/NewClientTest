import React, { useState , useEffect} from "react";
import { PhotoIcon, CloudArrowUpIcon } from "@heroicons/react/24/outline"; 
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const  CreateQuestion = () => {
  const navigate=useNavigate();

  const [question, setQuestion] = useState("");
  const [questionImage, setQuestionImage] = useState(null);
  const [questionImageBase64, setQuestionImageBase64] = useState(null);
  const [correctOption, setCorrectOption]=useState('');

  const storedTestId = localStorage.getItem("testId");
  const [testData, setTestData] = useState(null);

  const location = useLocation();
  const testId = location.state?.testId; // ✅ Get the passed test ID
  const type = location.state?.type;
  // const questionId = location.state?.questionId;
   const { questionId, testIdForUp, mode } = location.state || {};
  

   useEffect(() => {
  if (location.state?.mode === "Edit" && questionId && testIdForUp) {
    fetchQuestionData(questionId);
  }
}, [location.state]);


  const [options, setOptions] = useState([
    { text: "Option 1", image: null, base64: null },
    { text: "Option 2", image: null, base64: null },
    { text: "Option 3", image: null, base64: null },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [file, setFile] = useState(null);
  const [uploadFor, setUploadFor] = useState(null); // "question" or option index

  // Personality weights state
const [weights, setWeights] = useState([
  { option: "a", traits: [{ name: "trait1", weight: 5 }, { name: "trait2", weight: 1 }] },
]);

const addWeightOption = () => {
  setWeights([...weights, { option: "", traits: [{ name: "", weight: "" }] }]);
};

const removeWeightOption = (index) => {
  const updated = [...weights];
  updated.splice(index, 1);
  setWeights(updated);
};

const addTrait = (optionIndex) => {
  const updated = [...weights];
  updated[optionIndex].traits.push({ name: "", weight: "" });
  setWeights(updated);
};

const removeTrait = (optionIndex, traitIndex) => {
  const updated = [...weights];
  updated[optionIndex].traits.splice(traitIndex, 1);
  setWeights(updated);
};

const updateWeightField = (optionIndex, field, value) => {
  const updated = [...weights];
  updated[optionIndex][field] = value;
  setWeights(updated);
};

const updateTrait = (optionIndex, traitIndex, field, value) => {
  const updated = [...weights];
  updated[optionIndex].traits[traitIndex][field] = value;
  setWeights(updated);
};


  const addOption = () => setOptions([...options, { text: "", image: null, base64: null }]);

  const removeOption = (index) => setOptions(options.filter((_, i) => i !== index));

  const updateOption = (index, value) => {
    const newOptions = [...options];
    newOptions[index].text = value;
    setOptions(newOptions);
  };

  const convertToBase64 = (file, callback) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => callback(reader.result);
    reader.onerror = (error) => console.error("Error converting to base64:", error);
  };

  const handleFileChange = (event) => {
    const uploadedFile = event.target.files[0];
    if (!uploadedFile) return;

    const allowedTypes = ["image/png", "image/jpeg", "image/jpg"];
    if (!allowedTypes.includes(uploadedFile.type)) {
      alert("Only PNG, JPG, and JPEG files are allowed.");
      return;
    }

    // Update file state immediately so the filename shows in the modal
   setFile(uploadedFile);

    convertToBase64(uploadedFile, (base64String) => {
      if (uploadFor === "question") {
        setQuestionImage(URL.createObjectURL(uploadedFile));
        setQuestionImageBase64(base64String);
      } else if (uploadFor !== null) {
        const newOptions = [...options];
        newOptions[uploadFor].image = URL.createObjectURL(uploadedFile);
        newOptions[uploadFor].base64 = base64String;
        setOptions(newOptions);
      }
    });

    // **Reset modal state after upload**
    setTimeout(() => {
      setFile(null);  // Clear the file name
      setUploadFor(null); // Reset upload target
      setShowModal(false); // Close the modal
    }, 3000); // Delay to ensure UI updates properly
    
  };

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
    if (testIdForUp) {
      fetchTestData(testIdForUp);
    }

    
  }, [testIdForUp]);

  
    console.log("my test type when updating the question ",testData?.type );
  

  const fetchQuestionData = async (id) => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_SERVER_ADDRESS}/admin/show-question?quesId=${id}`
    );

    const data = response.data.data;
    const questionData =
      Array.isArray(data) ? data[0] : data.questions?.find((q) => q.id === id);

    if (!questionData) return;

    setQuestion(questionData.problemStatement);
    setCorrectOption(questionData.correctOption || "");

    // Map options (text/image)
    const optEntries = Object.entries(questionData.options || {});
    const mappedOptions = optEntries.map(([_, value]) => {
      const isImage = /^data:image\/|https?:\/\/.+\.(jpeg|jpg|png|webp|gif)$/i.test(
        value
      );
      return {
        text: isImage ? "" : value,
        image: isImage ? value : null,
        base64: isImage ? value : null,
      };
    });
    setOptions(mappedOptions);

    // Image if exists
    if (questionData.problemImageUrl)
      setQuestionImage(questionData.problemImageUrl);

    if (questionData.personalityWeight) {
      const formatted = questionData.personalityWeight.map((pw) => ({
        option: pw.option,
        traits: Object.entries(pw.weights).map(([name, weight]) => ({
          name,
          weight,
        })),
      }));
      setWeights(formatted);
    }
  } catch (error) {
    console.error("Error fetching question:", error);
    alert("Failed to load question for editing.");
  }
};

useEffect(() => {
  if (location.state?.mode === "Edit" && questionId && testIdForUp) {
    fetchQuestionData(questionId);
  }
}, [location.state]);



//   const handleSave = async () => {
//   if (!question) {
//     alert("Please enter a question.");
//     return;
//   }

//   const optionKeys = ["a", "b", "c", "d", "e"];
//   const formattedOptions = options.reduce((acc, option, index) => {
//     acc[optionKeys[index]] = option.base64 ? option.base64 : option.text.trim();
//     return acc;
//   }, {});

//   let payload = {
//     testId: testId || storedTestId,
//     problemStatement: question,
//     options: formattedOptions,
//     problemImage: questionImageBase64 || "",
//   };

//   if (type === "Technical") {
//     // ✅ TECHNICAL FORMAT
//     if (!correctOption.trim() || !formattedOptions[correctOption]) {
//       alert("Please select a valid correct option.");
//       return;
//     }

//     payload.correctOption = correctOption;
//     payload.personalityWeight = "no"; // as string

//   } else if (type === "Personality") {
//     // ✅ PERSONALITY FORMAT
//     const formattedWeights = weights.map((w) => {
//       const traitWeights = {};
//       w.traits.forEach((t) => {
//         const weightValue = parseInt(t.weight, 10);
//         if (!t.name || isNaN(weightValue) || weightValue < 0) {
//           alert("Invalid trait or weight. Weight must be a non-negative number.");
//           return;
//         }
//         traitWeights[t.name] = weightValue;
//       });
//       return { option: w.option, weights: traitWeights };
//     });

//     payload.personalityWeight = formattedWeights;
//     payload.correctOption = "no"; // as string
//   }

//   console.log("my payload when adding the question on test ", payload)
//   try {
//     const response = await axios.post(
//       `${import.meta.env.VITE_SERVER_ADDRESS}/admin/add-question`,
//       payload,
//       { headers: { "Content-Type": "application/json" } }
//     );

//     if (response.status === 200) {
//       alert("Question saved successfully!");
//       // Reset form
//       setQuestion("");
//       setQuestionImage(null);
//       setQuestionImageBase64(null);
//       setCorrectOption("");
//       setOptions([
//         { text: "Option 1", image: null, base64: null },
//         { text: "Option 2", image: null, base64: null },
//       ]);
//     } else {
//       alert("Failed to save question.");
//     }
//   } catch (error) {
//     console.error("Error saving question:", error);
//     alert("Error saving question.");
//   }
// };


const handleSave = async () => {
  const questionId = location.state?.questionId;
  const currentMode = mode?.toLowerCase(); // ensure lowercase comparison

  console.log("Mode:", currentMode);

  const optionKeys = ["a", "b", "c", "d", "e"];
  const formattedOptions = options.reduce((acc, option, index) => {
    acc[optionKeys[index]] = option.base64 ? option.base64 : option.text.trim();
    return acc;
  }, {});

  let payload = {
    problemStatement: question,
    options: formattedOptions,
  };

  if (!question) {
    alert("Please enter a question.");
    return;
  }

  if (testData?.type === "Technical" || type === "Technical") {
    if (!correctOption.trim() || !formattedOptions[correctOption]) {
      alert("Please select a valid correct option.");
      return;
    }
    payload.correctOption = correctOption;
    payload.personalityWeight = "no";
  } else if (testData?.type === "Personality" || type === "Personality") {
    const formattedWeights = weights.map((w) => {
      const traitWeights = {};
      for (const t of w.traits) {
        const weightValue = parseInt(t.weight, 10);
        if (!t.name || isNaN(weightValue) || weightValue < 0) {
          alert("Invalid trait or weight. Weight must be a non-negative number.");
          return;
        }
        traitWeights[t.name] = weightValue;
      }
      return { option: w.option, weights: traitWeights };
    });

    payload.correctOption ="a";
    payload.personalityWeight = formattedWeights;
  }

  // === Edit mode ===
  if (currentMode === "edit") {
    payload.quesId = questionId;
    payload.problemImage = questionImageBase64 || "";
      console.log("Edit Payload---------------------------:", payload);

    try {
      const response = await axios.put(
        `${import.meta.env.VITE_SERVER_ADDRESS}/admin/update-question`,
        payload,
        { headers: { "Content-Type": "application/json" } }
      );

      if (response.status === 200) {
        alert("Question updated successfully!");
      } else {
        alert("Failed to update question.");
      }
    } catch (error) {
      console.error("Error updating question:", error);
      alert("Error updating question.");
    }

  } else {
    // === Create mode ===
    payload.testId = testId || storedTestId;
    payload.problemImage = questionImageBase64 || "";

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_ADDRESS}/admin/add-question`,
        payload,
        { headers: { "Content-Type": "application/json" } }
      );

      if (response.status === 200) {
        alert("Question saved successfully!");
        setQuestion("");
        setQuestionImage(null);
        setQuestionImageBase64(null);
        setCorrectOption("");
        setOptions([
          { text: "Option 1", image: null, base64: null },
          { text: "Option 2", image: null, base64: null },
        ]);
      } else {
        alert("Failed to save question.");
      }
    } catch (error) {
      console.error("Error saving question:", error);
      alert("Error saving question.");
    }
  }
};


  const handleGoBackClick = ()=>{
    navigate(-1);
  }
  
  return (
    <div className="max-w-6xl mx-auto bg-white shadow-md rounded-lg p-4 drop-shadow-[2px_2px_2px_rgba(0,0,0,0.6)]">
      <h1 className="text-2xl font-bold  text-center mb-7 mt-4 py-2 rounded-md shadow-2xl drop-shadow-[2px_2px_2px_rgba(0,0,0,0.6)]" style={{ backgroundColor: "#FDC700" }}>
        <span className="drop-shadow-[2px_2px_2px_rgba(0,0,0,0.6)]"> {mode === "Edit" ? "Update Question For Test" : "Create Questions For Test"}</span>
      </h1>

      {/* Question Input Row */}
      <div className="flex flex-col space-y-3">
        <div className="flex items-center space-x-3">
          <textarea
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Enter your question..."
            className="flex-grow border-b border-gray-400 focus:border-yellow-500 p-2 focus:outline-none text-lg resize-none w-full"
            rows="2"
          />
          <button
            className="p-2 rounded-lg hover:bg-gray-200"
            onClick={() => {
              setUploadFor("question");
              setShowModal(true);
            }}
          >
            <PhotoIcon className="w-6 h-6 text-gray-600" />
          </button>

          <div className="flex items-center border border-gray-300 px-4 py-2 rounded-lg">
            <span className="text-gray-700 text-nowrap">Multiple choice</span>
          </div>
        </div>
        {questionImage && <img src={questionImage} alt="Question" className="w-15 h-15 rounded-lg mx-auto" />}
      </div>

      {/* Options List */}
      <div className="mt-4">
        {options.map((option, index) => (
          <div key={index} className="flex items-center space-x-2 mb-2">
            <input type="radio" disabled className="mr-2" />
            <textarea
              value={option.text}
              onChange={(e) => updateOption(index, e.target.value)}
              placeholder="Option"
              className="border-b border-gray-300 focus:border-purple-500 p-2 w-full focus:outline-none resize-none"
              rows="1"
            />
            <button
              className="p-2 rounded-lg hover:bg-gray-200"
              onClick={() => {
                setUploadFor(index);
                setShowModal(true);
              }}
            >
              <PhotoIcon className="w-5 h-5 text-gray-600" />
            </button>
            {option.image && <img src={option.image} alt="Option" className="w-10 h-10 rounded" />}
            <button onClick={() => removeOption(index)} className="text-gray-500 hover:text-red-500">
              ✖
            </button>
          </div>
        ))}

        {/* Add Option Section */}
        <div className="flex items-center mt-2">
          <button onClick={addOption} className="text-blue-600 hover:underline">
            Add option
          </button>
        </div>
      </div>
         
         {/* correct option  */}
        <div className="flex items-center mt-2 flex-col">
          <input 
            type="text"
            value={correctOption}
            onChange={(e) => setCorrectOption(e.target.value)}
            placeholder="Enter Correct Option"
            className="border-b border-gray-300 focus:border-yellow-500 w-full focus:outline-none resize-none"
          />
        </div>

      
        {/* Personality Weights Input */}
<div className="mt-4 w-full">
  <h3 className="text-lg font-semibold mb-2">Personality Weights</h3>

  {weights.map((w, i) => (
    <div key={i} className="border p-4 mb-3 rounded-md bg-gray-50 space-y-3">
      <div className="flex items-center gap-3">
        <label className="w-20">Option:</label>
        <input
          type="text"
          value={w.option}
          onChange={(e) => updateWeightField(i, "option", e.target.value)}
          className="border px-2 py-1 rounded w-20"
          maxLength={1}
        />
        <button
          onClick={() => removeWeightOption(i)}
          className="text-red-500 hover:underline ml-auto"
        >
          Remove Option
        </button>
      </div>

      {w.traits.map((t, j) => (
        <div key={j} className="flex items-center gap-3">
          <label className="w-20">Trait:</label>
          <input
            type="text"
            value={t.name}
            onChange={(e) => updateTrait(i, j, "name", e.target.value)}
            placeholder="trait1"
            className="border px-2 py-1 rounded w-32"
          />
          <label>Weight:</label>
          <input
            type="number"
              min="0"
            value={t.weight}
            onChange={(e) => updateTrait(i, j, "weight", e.target.value)}
            className="border px-2 py-1 rounded w-20"
          />
          <button
            onClick={() => removeTrait(i, j)}
            className="text-red-500 hover:underline"
          >
            ✖
          </button>
        </div>
      ))}

      <button
        onClick={() => addTrait(i)}
        className="text-blue-600 mt-2 hover:underline"
      >
        ➕ Add Trait
      </button>
    </div>
  ))}

  <button
    onClick={addWeightOption}
    className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
  >
    ➕ Add Option
  </button>
</div>


       {/* Bottom Actions */}
       <div className="flex justify-between items-center border-t mt-4 pt-3">

       <button  
        onClick={handleGoBackClick}
          className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600">
          Go Back
        </button>
         
       <button onClick={handleSave} className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">
          {mode === "Edit" ? "Update Question" : "Create Question"}
        </button>
       </div>
      
      {/* Image Upload Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-10 rounded-lg shadow-lg max-w-md w-full">
            <h2 className="text-lg font-medium mb-4">Insert Image</h2>
            <div className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-gray-300 rounded-lg bg-gray-50 hover:bg-gray-100 transition">
              <label className="flex flex-col items-center cursor-pointer">
                <CloudArrowUpIcon className="w-12 h-12 text-blue-500" />
                <span className="text-gray-700 font-medium mt-2">
                  {file ? file.name : "Click to Upload or Drag & Drop"}
                </span>
                <input type="file" onChange={handleFileChange} className="hidden" accept=".png, .jpg, .jpeg" />
              </label>
            </div>
            <button
              onClick={() => setShowModal(false)}
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default  CreateQuestion;







