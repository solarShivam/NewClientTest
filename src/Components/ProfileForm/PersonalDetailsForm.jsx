import React from "react";

export default function PersonalDetailsForm({
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
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-6xl mx-auto space-y-6">
        <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-yellow-600 via-yellow-400 to-yellow-200 bg-clip-text text-transparent">
          Personal Details
        </h2>
        <p className="text-center text-lg  ">
          Share more about yourself to complete your profile
        </p>


        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4"> Contact Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block  font-medium mb-2">Phone Number</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => onChange("phone", e.target.value)}
                  placeholder="Enter your phone number"
                  className={`w-full border rounded-lg px-3 py-4 focus:outline-none ${
                    errors.phone ? "border-red-500" : "border-gray-500"
                  }`}
                />
                {errors.phone && (
                  <p className="text-sm text-red-500 mt-1">{errors.phone}</p>
                )}
              </div>
              <div>
                <label className="block  font-medium mb-1">
                  Alternate Phone
                </label>
                <input
                  type="tel"
                  value={formData.alternatePhone}
                  onChange={(e) => onChange("alternatePhone", e.target.value)}
                  placeholder="Alternate phone number"
                  className="w-full border border-gray-500 rounded-lg px-3 py-4 focus:outline-none"
                />
              </div>
            </div>
            <div className="mt-4">
              <label className="block  font-medium mb-1">
                Emergency Contact
              </label>
              <input
                value={formData.emergencyContact}
                onChange={(e) => onChange("emergencyContact", e.target.value)}
                placeholder="Emergency contact number with name"
                className={`w-full border rounded-lg px-3 py-4 focus:outline-none ${
                  errors.emergencyContact ? "border-red-500" : "border-gray-500"
                }`}
              />
              {errors.emergencyContact && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.emergencyContact}
                </p>
              )}
            </div>
          </div>

          {/* Marital Status */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Personal Information</h3>
            <label className="block  font-medium mb-1">Marital Status</label>
            <select
              value={formData.maritalStatus}
              onChange={(e) => onChange("maritalStatus", e.target.value)}
              className="w-full border border-gray-500 rounded-lg px-3 py-4 focus:outline-none"
            >
              <option value="">Select marital status</option>
              <option value="single">Single</option>
              <option value="married">Married</option>
              <option value="prefer-not-to-say">Prefer not to say</option>
            </select>
          </div>

          {/* Languages & Interests */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Languages & Interests</h3>
            <div className="mb-4">
              <label className="block  font-medium mb-1">Languages Known</label>
              <input
                value={formData.languages}
                onChange={(e) => onChange("languages", e.target.value)}
                placeholder="e.g., English, Hindi"
                className={`w-full border rounded-lg px-3 py-4 focus:outline-none ${
                  errors.languages ? "border-red-500" : "border-gray-500 "
                }`}
              />
              {errors.languages && (
                <p className="text-sm text-red-500 mt-1">{errors.languages}</p>
              )}
            </div>
            <div>
              <label className="block  font-medium mb-1">
                Hobbies & Interests
              </label>
              <textarea
                rows={3}
                value={formData.hobbies}
                onChange={(e) => onChange("hobbies", e.target.value)}
                placeholder="Tell us about your hobbies and interests"
                className="w-full border border-gray-500 rounded-lg px-3 py-3 focus:outline-none"
              />
            </div>
          </div>

          {/* Social Profiles & About */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Social & About You</h3>
            <div className="mb-4">
              <label className="block  font-medium mb-1">
                Social Media Profiles
              </label>
              <textarea
                rows={2}
                value={formData.socialProfiles}
                onChange={(e) => onChange("socialProfiles", e.target.value)}
                placeholder="LinkedIn, GitHub, or others"
                className="w-full border border-gray-500 rounded-lg px-3 py-3 focus:outline-none"
              />
            </div>
            <div>
              <label className="block  font-medium mb-1">About You</label>
              <textarea
                rows={4}
                value={formData.aboutYou}
                onChange={(e) => onChange("aboutYou", e.target.value)}
                placeholder="Write a short bio about yourself"
                className={`w-full border rounded-lg px-3 py-3 focus:outline-none ${
                  errors.aboutYou ? "border-red-500" : "border-gray-500"
                }`}
              />
              {errors.aboutYou && (
                <p className="text-sm text-red-500 mt-1">{errors.aboutYou}</p>
              )}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-between gap-4 pt-4">
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
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}




