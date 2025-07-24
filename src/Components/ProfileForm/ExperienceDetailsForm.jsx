import React from "react";

export default function ExperienceDetailsForm({
  formData,
  onChange,
  onNext,
  onPrevious,
  errors
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onNext();
  };

  return (
    <div className="animate-fade-in">
      <div className="bg-white shadow-lg rounded-lg p-6 space-y-6">
        
        <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-yellow-600 via-yellow-400 to-yellow-200 bg-clip-text text-transparent">
          Professional Experience
          </h2>
        <p className="text-center text-gray-700">Tell us about your work experience</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Company Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company Information</h3>

            <div className="space-y-4">
              <div>
                <label className="block  font-medium text-gray-700 mb-1">Company Name</label>
                <input
                  type="text"
                  placeholder="Enter company name"
                  value={formData.companyName}
                  onChange={(e) => onChange("companyName", e.target.value)}
                  className={`w-full border rounded-lg px-3 py-3 focus:outline-none ${
                    errors.companyName ? "border-red-500" : "border-gray-500"
                  }`}
                />
                {errors.companyName && <p className="text-sm text-red-500">{errors.companyName}</p>}
              </div>

              <div>
                <label className="block font-medium text-gray-700 mb-1">Company Details</label>
                <textarea
                  placeholder="Describe the company, its industry, size, etc."
                  value={formData.companyDetails}
                  onChange={(e) => onChange("companyDetails", e.target.value)}
                  rows="3"
                  className={`w-full border rounded-lg px-3 py-3 focus:outline-none   ${
                    errors.companyDetails ? "border-red-500" : "border-gray-500"
                  }`}
                />
                {errors.companyDetails && <p className="text-sm text-red-500">{errors.companyDetails}</p>}
              </div>
            </div>
          </div>

          {/* Job Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Job Information</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block font-medium text-gray-700 mb-1">Job Title</label>
                <input
                  type="text"
                  placeholder="Your job title/position"
                  value={formData.jobTitle}
                  onChange={(e) => onChange("jobTitle", e.target.value)}
                  className={`w-full border rounded-lg px-3 py-3 focus:outline-none  ${
                    errors.jobTitle ? "border-red-500" : "border-gray-500"
                  }`}
                />
                {errors.jobTitle && <p className="text-sm text-red-500">{errors.jobTitle}</p>}
              </div>

              <div>
                <label className="block  font-medium text-gray-700 mb-1">Work Duration</label>
                <input
                  type="text"
                  placeholder="e.g., 2 years 3 months"
                  value={formData.workDuration}
                  onChange={(e) => onChange("workDuration", e.target.value)}
                  className={`w-full border rounded-lg px-3 py-3 focus:outline-none  ${
                    errors.workDuration ? "border-red-500" : "border-gray-500"
                  }`}
                />
                {errors.workDuration && <p className="text-sm text-red-500">{errors.workDuration}</p>}
              </div>
            </div>
          </div>

          {/* Project & Skills */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Projects & Skills</h3>

            <div className="space-y-4">
              <div>
                <label className="block  font-medium text-gray-700 mb-1">About Projects</label>
                <textarea
                  placeholder="Describe your key projects, achievements, and responsibilities"
                  value={formData.projectDetails}
                  onChange={(e) => onChange("projectDetails", e.target.value)}
                  rows="4"
                  className={`w-full border rounded-lg px-3 py-3 focus:outline-none  ${
                    errors.projectDetails ? "border-red-500" : "border-gray-500"
                  }`}
                />
                {errors.projectDetails && <p className="text-sm text-red-500">{errors.projectDetails}</p>}
              </div>

              <div>
                <label className="block  font-medium text-gray-700 mb-1">Technical Skills</label>
                <textarea
                  placeholder="List your technical skills, programming languages, tools, etc."
                  value={formData.skills}
                  onChange={(e) => onChange("skills", e.target.value)}
                  rows="3"
                  className={`w-full border rounded-lg px-3 py-3 focus:outline-none  ${
                    errors.skills ? "border-red-500" : "border-gray-500"
                  }`}
                />
                {errors.skills && <p className="text-sm text-red-500">{errors.skills}</p>}
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between pt-4">
            <button
              type="button"
              onClick={onPrevious}
              className="px-6 py-2 text-lg  bg-gray-600 rounded hover:bg-gray-700 text-white"
            >
              Previous
            </button>
            <button
              type="submit"
              className="px-6 py-2 text-lg bg-yellow-600 text-white rounded hover:bg-yellow-700"
            >
              Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}



