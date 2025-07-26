import React, { useState } from "react";
import { Award, Calendar, Download, Eye, Share2 } from "lucide-react";
import { useTheme } from '../Components/Context/ThemeContext';

const CertificateList = ({ earnedCertificates, setShowCertificates }) => {
  const { isDark } = useTheme();
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

 const handleDownload = (certificate) => {
    const link = document.createElement("a");
    link.href = certificate.downloadUrl;
    link.download = `${certificate.title}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleView = (certificate) => {
    setSelectedCertificate(certificate);
    setIsModalOpen(true);
  };

  const handleShare = (certificate) => {
    const shareText = `Check out my certificate: ${certificate.title} by ${certificate.issuer}`;
    const shareUrl = certificate.viewUrl || certificate.downloadUrl;

    if (navigator.share && shareUrl) {
      navigator.share({
        title: certificate.title,
        text: shareText,
        url: shareUrl,
      }).catch((err) => console.error("Share failed:", err));
    } else {
      navigator.clipboard.writeText(shareUrl || "").then(() => {
        alert("Certificate link copied to clipboard.");
      });
    }
  };

  return (
    <div className={`min-h-screen ${isDark ? "bg-test-black" : "bg-gradient-to-b from-white to-[#fefae0]"}`}>
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className={`text-3xl font-bold ${isDark ? "text-white" : "text-black"} mb-2`}>My Certificates</h1>
            <p className={`${isDark ? "text-gray-300" : "text-gray-600"}`}>Manage and view your earned certificates</p>
          </div>
          <button
            onClick={() => setShowCertificates(false)}
            className={`inline-flex items-center rounded-md border ${isDark ? "border-[#FFD7004D] text-[#FFD700] hover:bg-[#FFD700] hover:text-black" : "border-gray-400 text-black  hover:bg-yellow-300 hover:text-black"} bg-transparent px-4 py-2 text-sm font-medium transition-colors`}
          >
            ← Back to Overview
          </button>
        </div>

        {/* Certificate Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {earnedCertificates.map((certificate) => (
            <div
              key={certificate.id}
              className={`border rounded-lg shadow-sm transition-colors ${isDark ? "border-[#FFD70033] hover:border-[#FFD70066] bg-[#1a1a1a]" : "border-gray-500 hover:border-yellow-700 bg-white"}`}
            >
              <div className="flex flex-col space-y-1.5 p-6 pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center border ${isDark ? "border-[#FFD70033] bg-[#FFD7001A]" : "border-gray-200 bg-yellow-600"}`}>
                      <Award className="w-6 h-6"  style={{ color: "#FFD700" }} />
                    </div>
                    <div>
                      <h3 className={`${isDark ? "text-white" : "text-black"} text-lg font-semibold leading-none tracking-tight`}>
                        {certificate.title}
                      </h3>
                      <p className={`${isDark ? "text-gray-400" : "text-gray-600"} text-sm`}>by {certificate.issuer}</p>
                      <p className={`${isDark ? "text-gray-400" : "text-gray-600"} text-sm flex items-center mt-1`}>
                        <Calendar className="w-4 h-4 mr-1" />
                        {certificate.issueDate}
                      </p>
                    </div>
                  </div>
                  <div className="inline-flex items-center rounded-full border border-green-500 px-2.5 py-0.5 text-xs font-semibold text-green-500">
                    {certificate.status}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 space-y-4">
                <div className="flex items-center justify-between">
                  <span className={`${isDark ? "text-gray-300" : "text-gray-600"}`}>Score</span>
                  <span className={`font-bold text-lg ${isDark ? "text-yellow-500" : " "}`}>
                    {certificate.score}%
                  </span>
                </div>

                <div>
                  <p className={`${isDark ? "text-gray-300" : "text-gray-600"} text-sm mb-2`}>Skills Assessed:</p>
                  <div className="flex flex-wrap gap-2">
                    {certificate.skills.map((skill, index) => (
                      <div
                        key={index}
                        className={`inline-flex items-center rounded-full border ${isDark ? "border-gray-700 bg-[#1a1a1a80] text-gray-300" : "border-gray-400 bg-gray-100 text-gray-800"} px-2.5 py-0.5 text-xs font-semibold`}
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>

                <div className={`flex space-x-2 pt-4 border-t ${isDark ? "border-[#FFD70033]" : "border-gray-400"}`}>
                  <button
                    onClick={() => handleDownload(certificate)}
                    className="inline-flex items-center justify-center rounded-md bg-yellow-400 px-3 py-2 text-sm font-medium text-black hover:bg-yellow-300 flex-1"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </button>

                  <button
                    onClick={() => handleView(certificate)}
                    className={`inline-flex items-center justify-center rounded-md border ${isDark ? "border-[#FFD7004D] text-[#FFD700] hover:bg-[#FFD700] hover:text-black" : "border-gray-400 text-yellow-800 hover:bg-yellow-300 hover:text-black"} px-3 py-2 text-sm font-medium`}
                  >
                    <Eye className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => handleShare(certificate)}
                    className={`inline-flex items-center justify-center rounded-md border ${isDark ? "border-[#FFD7004D] text-[#FFD700] hover:bg-[#FFD700] hover:text-black" : "border-gray-400 text-yellow-800 hover:bg-yellow-300 hover:text-black"} px-3 py-2 text-sm font-medium`}
                  >
                    <Share2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for PDF view */}
      {isModalOpen && selectedCertificate && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-white w-11/12 h-[90vh] overflow-hidden rounded-lg shadow-lg p-6 relative flex flex-col md:flex-row">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-2 right-2 text-red-500 hover:text-red-700 text-2xl"
            >
              &times;
            </button>

            <div className="md:w-[40%] w-full pr-4 overflow-y-auto border-r border-gray-300 bg-gray-50 p-4">
              <h2 className="text-xl font-bold mb-4 text-center">
                Certificate Details
              </h2>
              <div className="space-y-2 text-sm">
                <p>
                  <strong>Title:</strong> {selectedCertificate.title}
                </p>
                <p>
                  <strong>Issuer:</strong> {selectedCertificate.issuer}
                </p>
                <p>
                  <strong>Issue Date:</strong> {selectedCertificate.issueDate}
                </p>
                <p>
                  <strong>Score:</strong> {selectedCertificate.score}%
                </p>
                <p>
                  <strong>Grade:</strong> {selectedCertificate.grade}
                </p>
                <p>
                  <strong>Skills:</strong>{" "}
                  {selectedCertificate.skills.join(", ")}
                </p>
                <p>
                  <strong>Status:</strong> {selectedCertificate.status}
                </p>
                <p>
                  <strong>Category:</strong> {selectedCertificate.category}
                </p>
              </div>
            </div>

            <div className="md:w-[60%] w-full pl-4 mt-4 md:mt-0">
              <h2 className="text-xl font-bold mb-4 text-center">Preview</h2>
              <iframe
                src={selectedCertificate.downloadUrl}
                title="Certificate PDF"
                className="w-full h-[70vh] border rounded"
              />
            </div>
          </div>
        </div>
      )}
      </div>
    </div>
  );
};

export default CertificateList;







// import React, { useState } from "react";
// import { Download, Eye, ShieldCheck } from "lucide-react";
// import { useTheme } from '../Components/Context/ThemeContext';


// const CertificateList = ({ earnedCertificates, setShowCertificates }) => {
//   const { isDark } = useTheme();
//   const [selectedCertificate, setSelectedCertificate] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const handleDownload = (certificate) => {
//     const link = document.createElement("a");
//     link.href = certificate.downloadUrl;
//     link.download = `${certificate.title}.pdf`;
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   const handleView = (certificate) => {
//     setSelectedCertificate(certificate);
//     setIsModalOpen(true);
//   };

//   return (
//     <div className="p-4 max-w-7xl mx-auto">
//       <h2 className="text-2xl font-bold mb-6 text-center">My Certificates</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {earnedCertificates.map((item) => (
//           <div
//             key={item.id}
//             className={`rounded-xl shadow-md p-5 border transition-transform transform hover:scale-105 ${
//               isDark
//                 ? "bg-[#1f1f1f] border-yellow-400"
//                 : "bg-white border-gray-200"
//             }`}
//           >
//             <div
//               className={`text-4xl font-bold mb-2 ${
//                 isDark ? "text-[#FFD700]" : "text-yellow-600"
//               }`}
//             >
//               {item.score}%
//             </div>
//             <div className="text-lg font-semibold mb-1">{item.title}</div>
//             <div className="text-sm text-gray-500 mb-2">{item.issueDate}</div>

//             <div className="flex flex-wrap gap-2 mb-3">
//               {item.skills.map((skill, index) => (
//                 <div
//                   key={index}
//                   className={`text-xs px-2 py-1 rounded-full ${
//                     isDark
//                       ? "bg-gray-700 text-gray-100 border border-yellow-500"
//                       : "bg-gray-100 text-gray-700 border border-gray-200"
//                   }`}
//                 >
//                   {skill}
//                 </div>
//               ))}
//             </div>

//             <div className="flex justify-between items-center mb-3">
//               <span
//                 className={`text-sm font-medium ${
//                   isDark ? "text-yellow-400" : "text-yellow-600"
//                 }`}
//               >
//                 Grade: {item.grade}
//               </span>
//               {item.status === "verified" && (
//                 <div className="flex items-center text-green-500 text-sm">
//                   <ShieldCheck className="w-4 h-4 mr-1" />
//                   Verified
//                 </div>
//               )}
//             </div>

//             <div className="flex justify-end gap-3 mt-2">
//               <button
//                 onClick={() => handleView(item)}
//                 className={`flex items-center px-3 py-1.5 text-sm rounded-lg font-medium transition ${
//                   isDark
//                     ? "bg-yellow-700 text-white hover:bg-yellow-600"
//                     : "bg-yellow-400 text-black hover:bg-yellow-300"
//                 }`}
//               >
//                 <Eye className="w-4 h-4 mr-1" />
//                 View
//               </button>
//               <button
//                 onClick={() => handleDownload(item)}
//                 className={`flex items-center px-3 py-1.5 text-sm rounded-lg font-medium transition ${
//                   isDark
//                     ? "bg-gray-800 text-white hover:bg-gray-700"
//                     : "bg-gray-200 text-black hover:bg-gray-300"
//                 }`}
//               >
//                 <Download className="w-4 h-4 mr-1" />
//                 Download
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Modal for PDF view */}
//       {isModalOpen && selectedCertificate && (
//         <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-60 flex items-center justify-center z-50">
//           <div className="bg-white w-11/12 h-[90vh] overflow-hidden rounded-lg shadow-lg p-6 relative flex flex-col md:flex-row">
//             <button
//               onClick={() => setIsModalOpen(false)}
//               className="absolute top-2 right-2 text-red-500 hover:text-red-700 text-2xl"
//             >
//               &times;
//             </button>

//             <div className="md:w-[40%] w-full pr-4 overflow-y-auto border-r border-gray-300 bg-gray-50 p-4">
//               <h2 className="text-xl font-bold mb-4 text-center">
//                 Certificate Details
//               </h2>
//               <div className="space-y-2 text-sm">
//                 <p>
//                   <strong>Title:</strong> {selectedCertificate.title}
//                 </p>
//                 <p>
//                   <strong>Issuer:</strong> {selectedCertificate.issuer}
//                 </p>
//                 <p>
//                   <strong>Issue Date:</strong> {selectedCertificate.issueDate}
//                 </p>
//                 <p>
//                   <strong>Score:</strong> {selectedCertificate.score}%
//                 </p>
//                 <p>
//                   <strong>Grade:</strong> {selectedCertificate.grade}
//                 </p>
//                 <p>
//                   <strong>Skills:</strong>{" "}
//                   {selectedCertificate.skills.join(", ")}
//                 </p>
//                 <p>
//                   <strong>Status:</strong> {selectedCertificate.status}
//                 </p>
//                 <p>
//                   <strong>Category:</strong> {selectedCertificate.category}
//                 </p>
//               </div>
//             </div>

//             <div className="md:w-[60%] w-full pl-4 mt-4 md:mt-0">
//               <h2 className="text-xl font-bold mb-4 text-center">Preview</h2>
//               <iframe
//                 src={selectedCertificate.downloadUrl}
//                 title="Certificate PDF"
//                 className="w-full h-[70vh] border rounded"
//               />
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CertificateList;

