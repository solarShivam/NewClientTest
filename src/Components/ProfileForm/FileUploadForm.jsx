import React, { useEffect, useState } from "react";
import { IoCloudUploadOutline } from "react-icons/io5";

export default function FileUploadForm({
  formData,
  onChange,
  onNext,
  onPrevious,
  errors = {},
}) {
  const [photoPreview, setPhotoPreview] = useState(null);

  useEffect(() => {
    if (formData?.photo && typeof formData.photo !== "string") {
      const objectUrl = URL.createObjectURL(formData.photo);
      setPhotoPreview(objectUrl);

      return () => URL.revokeObjectURL(objectUrl);
    } else {
      setPhotoPreview(null);
    }
  }, [formData?.photo]);

  const handleFileChange = (field, e) => {
    const file = e.target.files?.[0] || null;
    onChange(field, file);
  };

  const removeFile = (field) => {
    onChange(field, null);
  };

  const getFileName = (file) => {
    if (!file) return "";
    return typeof file === "string" ? file : file.name;
  };

  return (
    <div className="animate-fade-in">
      <div className="bg-white shadow-lg rounded-lg p-6 space-y-6">
        <h2 className="text-3xl font-extrabold text-center bg-gradient-to-r from-yellow-600 via-yellow-400 to-yellow-200 bg-clip-text text-transparent flex justify-center items-center gap-2">
          <IoCloudUploadOutline className="text-yellow-500 text-4xl" />
          Upload Documents
        </h2>
        <p className="text-center text-gray-500">
          Add your profile photo and resume to complete your profile
        </p>

        {/* Profile Photo Upload */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Profile Photo (Optional)
          </label>
          <div className="relative border-2 border-dashed border-gray-500 rounded-lg p-10 text-center cursor-pointer  transition">
            {formData?.photo ? (
              <div className="flex flex-col items-center space-y-2">
                <img
                  src={photoPreview}
                  alt="Preview"
                  className="w-32 h-32 object-cover rounded-full border shadow"
                />
                <div className="text-sm">{getFileName(formData.photo)}</div>
                <button
                  type="button"
                  onClick={() => removeFile("photo")}
                  className="text-red-500 hover:text-red-700 text-sm"
                >
                  ✖ Remove Photo
                </button>
              </div>
            ) : (
              <div className="flex flex-col items-center space-y-2 text-gray-500">
                <IoCloudUploadOutline className="text-5xl text-yellow-500" />
                <p className="text-sm">Click here or drag your photo</p>
                <p className="text-xs text-gray-400">
                  PNG, JPG, JPEG up to 5MB
                </p>
              </div>
            )}
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleFileChange("photo", e)}
              className="absolute inset-0 opacity-0 cursor-pointer"
            />
          </div>
          {errors?.photo && (
            <p className="text-sm text-red-500 mt-1">{errors.photo}</p>
          )}
        </div>

        {/* Resume Upload */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Resume/CV (Optional)
          </label>
          <div className="relative border-2 border-dashed border-gray-500 rounded-lg p-10 text-center cursor-pointer  transition">
            {formData?.resume ? (
              <div className="flex items-center justify-between bg-gray-100 rounded p-3">
                <div className="flex items-center gap-2 text-sm">
                  📄 {getFileName(formData.resume)}
                </div>
                <button
                  type="button"
                  onClick={() => removeFile("resume")}
                  className="text-red-500 hover:text-red-700"
                >
                  ✖
                </button>
              </div>
            ) : (
              <div className="flex flex-col items-center space-y-2 text-gray-500">
                <IoCloudUploadOutline className="text-5xl text-yellow-500" />
                <p className="text-sm">Click here or drag your resume</p>
                <p className="text-xs text-gray-400">
                  PDF, DOC, DOCX up to 10MB
                </p>
              </div>
            )}
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={(e) => handleFileChange("resume", e)}
              className="absolute inset-0 opacity-0 cursor-pointer"
            />
          </div>
          {errors?.resume && (
            <p className="text-sm text-red-500 mt-1">{errors.resume}</p>
          )}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between gap-4 pt-4">
          <button
            type="button"
            onClick={onPrevious}
            className="px-8 py-3 font-semibold bg-gray-600 text-white rounded-lg text-xl hover:bg-gray-700 transition"
          >
            Previous
          </button>
          <button
            type="button"
            onClick={onNext}
            className="px-8 py-3 font-semibold bg-yellow-600 text-white rounded-lg text-xl hover:bg-yellow-700 transition"
          >
            Complete Profile
          </button>
        </div>
      </div>
    </div>
  );
}



