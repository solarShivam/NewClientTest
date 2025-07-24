import React from "react";

export default function CollegeDetailsForm({
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
    <div className="animate-slide-in-right">
      <div className="bg-white shadow-lg rounded-lg p-6 space-y-6">
        <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-yellow-600 via-yellow-400 to-yellow-100 bg-clip-text text-transparent">
          Educational Details
        </h2>
        <p className="text-center text-xl text-gray-500">
          Tell us about your college and studies
        </p>


        <form onSubmit={handleSubmit} className="space-y-6">
          {/* College Name */}
          <div>
            <label className="block text-lg font-medium text-gray-700 mb-1">College Name</label>
            <input
              type="text"
              placeholder="Enter your college/university name"
              value={formData.collegeName}
              onChange={(e) => onChange("collegeName", e.target.value)}
              className={`w-full border rounded-lg px-3 py-4 focus:outline-none ${
                errors.collegeName ? "border-red-500" : "border-gray-500"
              }`}
            />
            {errors.collegeName && (
              <p className="text-sm text-red-500">{errors.collegeName}</p>
            )}
          </div>

          {/* College Address */}
          <div>
            <label className="block text-lg font-medium text-gray-700 mb-1">College Address</label>
            <textarea
              placeholder="Enter college address"
              rows="2"
              value={formData.collegeAddress}
              onChange={(e) => onChange("collegeAddress", e.target.value)}
              className={`w-full border rounded-lg px-3 py-3 focus:outline-none ${
                errors.collegeAddress ? "border-red-500" : "border-gray-500"
              }`}
            />
            {errors.collegeAddress && (
              <p className="text-sm text-red-500">{errors.collegeAddress}</p>
            )}
          </div>

          {/* Degree & Branch */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label className="block text-lg font-medium text-gray-700 mb-1">Degree</label>
              <input
                type="text"
                placeholder="e.g., Bachelor's, Master's"
                value={formData.degree}
                onChange={(e) => onChange("degree", e.target.value)}
                className={`w-full border rounded-lg px-3 py-4 focus:outline-none ${
                  errors.degree ? "border-red-500" : "border-gray-500"
                }`}
              />
              {errors.degree && (
                <p className="text-sm text-red-500">{errors.degree}</p>
              )}
            </div>

            <div>
              <label className="block text-lg font-medium text-gray-700 mb-1">Branch/Stream</label>
              <input
                type="text"
                placeholder="e.g., Computer Science"
                value={formData.branch}
                onChange={(e) => onChange("branch", e.target.value)}
                className={`w-full border rounded-lg px-3 py-4 focus:outline-none ${
                  errors.branch ? "border-red-500" : "border-gray-500"
                }`}
              />
              {errors.branch && (
                <p className="text-sm text-red-500">{errors.branch}</p>
              )}
            </div>
          </div>

          {/* Year & CGPA */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-lg font-medium text-gray-700 mb-1">Year/Semester</label>
              <input
                type="text"
                placeholder="e.g., 2nd Year, 4th Semester"
                value={formData.year}
                onChange={(e) => onChange("year", e.target.value)}
                className={`w-full border rounded-lg px-3 py-4 focus:outline-none ${
                  errors.year ? "border-red-500" : "border-gray-500"
                }`}
              />
              {errors.year && (
                <p className="text-sm text-red-500">{errors.year}</p>
              )}
            </div>

            <div>
              <label className="block text-lg font-medium text-gray-700 mb-1">CGPA/Percentage</label>
              <input
                type="text"
                placeholder="e.g., 8.5 CGPA or 85%"
                value={formData.cgpa}
                onChange={(e) => onChange("cgpa", e.target.value)}
                className={`w-full border rounded-lg px-3 py-4 focus:outline-none ${
                  errors.cgpa ? "border-red-500" : "border-gray-500"
                }`}
              />
              {errors.cgpa && (
                <p className="text-sm text-red-500">{errors.cgpa}</p>
              )}
            </div>
          </div>

          {/* Subjects */}
          <div>
            <label className="block text-lg font-medium text-gray-700 mb-1">Key Subjects</label>
            <textarea
              placeholder="List your main subjects"
              rows="3"
              value={formData.subjects}
              onChange={(e) => onChange("subjects", e.target.value)}
              className={`w-full border rounded-lg px-3 py-4 focus:outline-none ${
                errors.subjects ? "border-red-500" : "border-gray-500"
              }`}
            />
            {errors.subjects && (
              <p className="text-sm text-red-500">{errors.subjects}</p>
            )}
          </div>

          {/* Trade */}
          <div>
            <label className="block text-lg font-medium text-gray-700 mb-1">Trade/Specialization</label>
            <input
              type="text"
              placeholder="e.g., Software Development, Data Science"
              value={formData.trade}
              onChange={(e) => onChange("trade", e.target.value)}
              className={`w-full border rounded-lg px-3 py-4 focus:outline-none ${
                errors.trade ? "border-red-500" : "border-gray-500"
              }`}
            />
            {errors.trade && (
              <p className="text-sm text-red-500">{errors.trade}</p>
            )}
          </div>

          {/* Achievements */}
          <div>
            <label className="block text-lg font-medium text-gray-700 mb-1">Achievements</label>
            <textarea
              placeholder="List your achievements, projects, awards"
              rows="3"
              value={formData.achievements}
              onChange={(e) => onChange("achievements", e.target.value)}
              className="w-full border border-gray-500 rounded-lg px-3 py-4 focus:outline-none"
            />
          </div>

          <div className="flex justify-between">
            <button
              type="button"
              onClick={onPrevious}
              className="px-8 py-3 font-semibold bg-gray-600 text-white rounded-lg text-xl hover:bg-gray-700 transition"
            >
              Previous
            </button>
            <button
              type="submit"
              className="px-8 py-3 font-semibold bg-yellow-600 text-white rounded-lg text-xl hover:bg-yellow-700 transition"
            >
              Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}


