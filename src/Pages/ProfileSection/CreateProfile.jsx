import React, { useState } from "react";
import BasicDetailsForm from "../../Components/ProfileForm/BasicDetails";
import CollegeDetailsForm from "../../Components/ProfileForm/CollegeDetailsForm";
import ExperienceDetailsForm from "../../Components/ProfileForm/ExperienceDetailsForm";
import PersonalDetailsForm from "../../Components/ProfileForm/PersonalDetailsForm";
import FileUploadForm from "../../Components/ProfileForm/FileUploadForm";
import Stepper from "../../Components/ProfileForm/Stepper"; 
import { useNavigate } from "react-router-dom";

const initialFormData = {
  email: "", userType: "", firstName: "", middleName: "", lastName: "",
  age: "", village: "", city: "", state: "", country: "",
  companyName: "", companyDetails: "", jobTitle: "", workDuration: "",
  projectDetails: "", skills: "",
  collegeName: "", collegeAddress: "", degree: "", branch: "", year: "",
  cgpa: "", subjects: "", trade: "", achievements: "",
  phone: "", alternatePhone: "", emergencyContact: "", maritalStatus: "",
  languages: "", hobbies: "", socialProfiles: "", aboutYou: "",
  photo: null, resume: null,
};



export default function CreateProfile() {

  
  const navigate = useNavigate();
  
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [isCompleted, setIsCompleted] = useState(false);

  const steps = [
    { id: "basic", title: "Basic Details" },
    formData.userType === "student"
      ? { id: "college", title: "College Details" }
      : { id: "experience", title: "Experience Details" },
    { id: "personal", title: "Personal Details" },
    { id: "files", title: "File Upload" }
  ];

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (currentStep === 0) {
      if (!formData.email) newErrors.email = "Email is required";
      if (!formData.userType) newErrors.userType = "User type is required";
      if (!formData.firstName) newErrors.firstName = "First name is required";
      if (!formData.lastName) newErrors.lastName = "Last name is required";
      if (!formData.age) newErrors.age = "Age is required";
      if (!formData.city) newErrors.city = "City is required";
      if (!formData.state) newErrors.state = "State is required";
      if (!formData.country) newErrors.country = "Country is required";
    } else if (currentStep === 1) {
      if (formData.userType === "student") {
        if (!formData.collegeName) newErrors.collegeName = "College name is required";
      } else {
        if (!formData.companyName) newErrors.companyName = "Company name is required";
      }
    } else if (currentStep === 2) {
      if (!formData.phone) newErrors.phone = "Phone is required";
      if (!formData.aboutYou) newErrors.aboutYou = "About you is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validate()) {
      if (currentStep < steps.length - 1) {
        setCurrentStep(prev => prev + 1);
      } else {
        // setIsCompleted(true);
        navigate("/ProfilePreview", { state: formData });
      }
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) setCurrentStep(prev => prev - 1);
  };

  const handleRestart = () => {
    setFormData(initialFormData);
    setErrors({});
    setCurrentStep(0);
    setIsCompleted(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-100 p-4">
      <div className="w-full max-w-6xl bg-white shadow-lg rounded-lg p-6 space-y-4">
        <h2 className="text-5xl font-extrabold text-center bg-gradient-to-r from-yellow-700 via-yellow-400 to-yellow-100 bg-clip-text text-transparent">
          Create Your Profile
        </h2>



        {/* Stepper */}
        <Stepper
          steps={steps}
          currentStep={currentStep}
          completedSteps={[...Array(currentStep).keys()]}
        />

        {isCompleted ? (
          <div className="text-center space-y-4">
            <h3 className="text-lg font-semibold text-green-600">Profile Created Successfully 🎉</h3>
            <p>Thank you, {formData.firstName || "User"}. Your profile has been saved successfully.</p>
            <button
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              onClick={handleRestart}
            >
              Create Another Profile
            </button>
          </div>
        ) : (
          <div>
            {currentStep === 0 && (
              <BasicDetailsForm
                formData={formData}
                onChange={handleChange}
                onNext={handleNext}
                errors={errors}
              />
            )}
            {currentStep === 1 && (
              formData.userType === "student" ? (
                <CollegeDetailsForm
                  formData={formData}
                  onChange={handleChange}
                  onNext={handleNext}
                  onPrevious={handlePrevious}
                  errors={errors}
                />
              ) : (
                <ExperienceDetailsForm
                  formData={formData}
                  onChange={handleChange}
                  onNext={handleNext}
                  onPrevious={handlePrevious}
                  errors={errors}
                />
              )
            )}
            {currentStep === 2 && (
              <PersonalDetailsForm
                formData={formData}
                onChange={handleChange}
                onNext={handleNext}
                onPrevious={handlePrevious}
                errors={errors}
              />
            )}
            {currentStep === 3 && (
              <FileUploadForm
                formData={formData}
                onChange={handleChange}
                onNext={handleNext}
                onPrevious={handlePrevious}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
}



