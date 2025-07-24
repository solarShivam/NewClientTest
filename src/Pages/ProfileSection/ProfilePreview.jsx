import React, { useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export default function ProfilePreview() {
  const location = useLocation();
  const navigate = useNavigate();
  const formData = location.state;

  const previewRef = useRef();

  const handleDownloadPDF = async () => {
    const element = previewRef.current;
    const canvas = await html2canvas(element, { scale: 2 });
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("profile_preview.pdf");
  };

  const handleCreateAnother = () => {
    navigate("/create-profile");
  };

  if (!formData) {
    // If accessed directly without data, redirect to create profile
    navigate("/create-profile");
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 p-6 flex items-center justify-center">
      <div ref={previewRef} className="max-w-2xl w-full bg-white rounded-lg shadow p-6 space-y-4">
        <h2 className="text-3xl font-bold text-center text-yellow-600">Your Profile Preview</h2>
        <p className="text-center text-gray-500">Review your submitted profile below</p>

        <div className="space-y-2 text-sm md:text-base">
          <p><strong>Name:</strong> {formData.firstName} {formData.lastName}</p>
          <p><strong>Email:</strong> {formData.email}</p>
          <p><strong>Phone:</strong> {formData.phone}</p>
          {formData.userType === "student" ? (
            <>
              <p><strong>College:</strong> {formData.collegeName}</p>
              <p><strong>Degree:</strong> {formData.degree}</p>
              <p><strong>Branch:</strong> {formData.branch}</p>
            </>
          ) : (
            <>
              <p><strong>Company:</strong> {formData.companyName}</p>
              <p><strong>Job Title:</strong> {formData.jobTitle}</p>
            </>
          )}
          <p><strong>About You:</strong> {formData.aboutYou}</p>
          <p><strong>Languages:</strong> {formData.languages}</p>
          <p><strong>Hobbies:</strong> {formData.hobbies}</p>
        </div>

        {formData.photo && (
          <div className="mt-4 flex justify-center">
            <img
              src={typeof formData.photo === "string" ? formData.photo : URL.createObjectURL(formData.photo)}
              alt="Profile"
              className="w-32 h-32 object-cover rounded-full"
            />
          </div>
        )}
      </div>

      <div className="flex flex-col md:flex-row justify-center mt-6 gap-4">
        <button
          onClick={handleCreateAnother}
          className="px-4 py-2 bg-yellow-600 text-white rounded hover:bg-yellow-700"
        >
          Create Another Profile
        </button>
        <button
          onClick={handleDownloadPDF}
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          Download as PDF
        </button>
      </div>
    </div>
  );
}
