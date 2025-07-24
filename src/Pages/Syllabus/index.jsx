// import React, { useState } from 'react';

// const syllabusData = {
//   optional: {
//     General: ['Automata Fix', 'Fundamentals of Physics', 'Fundamentals of Chemistry', 'Basic Biology', 'Marketing'],
//     Engineering: ['Computer Networks', 'Operating Systems', 'Data Structures'],
//     Management: ['Business Communication', 'HR Concepts'],
//   },
//   compulsory: {
//     General: ['Quantitative Ability', 'Logical Reasoning', 'English Comprehension'],
//   },
// };

// export default function SyllabusTabs() {
//   const [activeTab, setActiveTab] = useState('optional');
//   const [activeFilter, setActiveFilter] = useState('General');
//   const [openPanel, setOpenPanel] = useState(null);

//   const panels = syllabusData[activeTab][activeFilter] || [];

//   return (
//     <div className="p-6 max-w-4xl mx-auto bg-white shadow rounded-lg">
//       {/* Header */}
//       <div className="text-xl font-semibold text-blue-600 border-b pb-2 mb-4">AMCAT Syllabus</div>

//       {/* Tabs */}
//       <div className="flex space-x-4 border-b border-gray-200 mb-4">
//         <button
//           onClick={() => setActiveTab('compulsory')}
//           className={`uppercase px-4 py-2 font-medium text-sm transition ${
//             activeTab === 'compulsory'
//               ? 'border-b-2 border-blue-500 text-blue-600'
//               : 'text-gray-500 hover:text-blue-500'
//           }`}
//         >
//           Compulsory
//         </button>
//         <button
//           onClick={() => setActiveTab('optional')}
//           className={`uppercase px-4 py-2 font-medium text-sm transition ${
//             activeTab === 'optional'
//               ? 'border-b-2 border-blue-500 text-blue-600'
//               : 'text-gray-500 hover:text-blue-500'
//           }`}
//         >
//           Optional
//         </button>
//       </div>

//       {/* Filter Buttons */}
//       <div className="flex flex-wrap gap-3 mb-6">
//         {Object.keys(syllabusData[activeTab]).map((filter) => (
//           <button
//             key={filter}
//             onClick={() => setActiveFilter(filter)}
//             className={`px-4 py-1.5 text-sm rounded-full font-medium border transition ${
//               activeFilter === filter
//                 ? 'bg-blue-600 text-white border-blue-600'
//                 : 'bg-gray-100 text-gray-700 hover:bg-blue-50 hover:border-blue-300'
//             }`}
//           >
//             {filter}
//           </button>
//         ))}
//       </div>

//       {/* Accordion Panels */}
//       <div className="space-y-3">
//         {panels.map((title, idx) => (
//           <div key={idx} className="border rounded-lg overflow-hidden shadow-sm">
//             <button
//               onClick={() => setOpenPanel(openPanel === idx ? null : idx)}
//               className="w-full flex justify-between items-center px-5 py-3 text-left bg-gray-50 hover:bg-gray-100"
//             >
//               <span className="font-medium text-gray-800">{title}</span>
//               <span className="text-gray-500">{openPanel === idx ? '▲' : '▼'}</span>
//             </button>
//             {openPanel === idx && (
//               <div className="px-5 py-3 bg-white text-gray-600 text-sm">
//                 <p>This section contains the detailed syllabus content for <strong>{title}</strong>.</p>
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


import React, { useState } from 'react';
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai';

const syllabusData = {
  optional: {
    General: ['Automata Fix', 'Fundamentals of Physics', 'Fundamentals of Chemistry', 'Basic Biology', 'Marketing'],
    Engineering: ['Computer Networks', 'Operating Systems', 'Data Structures'],
    Management: ['Business Communication', 'HR Concepts'],
  },
  compulsory: {
    General: ['Quantitative Ability', 'Logical Reasoning', 'English Comprehension'],
  },
};

export default function SyllabusTabs() {
  const [activeTab, setActiveTab] = useState('compulsory');
  const [activeFilter, setActiveFilter] = useState('General');
  const [openPanel, setOpenPanel] = useState(null);

  const panels = syllabusData[activeTab][activeFilter] || [];

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow rounded-lg">
      <div className="text-xl font-semibold text-blue-600 border-b pb-2 mb-4">GaloScore Syllabus</div>

      {/* Tabs */}
      <div className="flex space-x-4 border-b border-gray-200 mb-4">
        <button
          onClick={() => setActiveTab('compulsory')}
          className={`uppercase px-4 py-2 font-medium text-sm transition ${
            activeTab === 'compulsory'
              ? 'border-b-2 border-blue-500 text-blue-600'
              : 'text-gray-500 hover:text-blue-500'
          }`}
        >
          Compulsory
        </button>
        <button
          onClick={() => setActiveTab('optional')}
          className={`uppercase px-4 py-2 font-medium text-sm transition ${
            activeTab === 'optional'
              ? 'border-b-2 border-blue-500 text-blue-600'
              : 'text-gray-500 hover:text-blue-500'
          }`}
        >
          Optional
        </button>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-3 mb-6">
        {Object.keys(syllabusData[activeTab]).map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-4 py-1.5 text-sm rounded-full font-medium border transition ${
              activeFilter === filter
                ? 'bg-blue-600 text-white border-blue-600'
                : 'bg-gray-100 text-gray-700 hover:bg-blue-50 hover:border-blue-300'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Accordion */}
      <div className="space-y-3">
        {panels.map((title, idx) => (
          <div key={idx} className="border border-gray-400 rounded-lg overflow-hidden shadow-sm transition-all">
            <button
              onClick={() => setOpenPanel(openPanel === idx ? null : idx)}
              className="w-full flex justify-between items-center px-5 py-3 text-left bg-gray-50 hover:bg-gray-100"
            >
              <span className="font-medium text-gray-800">{title}</span>
              {openPanel === idx ? (
                <AiOutlineUp className="text-gray-500" />
              ) : (
                <AiOutlineDown className="text-gray-500" />
              )}
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openPanel === idx ? 'max-h-400 opacity-100 py-3 px-5' : 'max-h-0 opacity-0'
              }`}
            >
            {title === 'English Comprehension' ? (
                <div className="text-sm text-gray-700 space-y-2">
                    <p><strong>English</strong><br />
                    The module evaluates written English skills and is aimed at determining the candidate's ability to understand:<br />
                    (a) the written text<br />
                    (b) the spoken word<br />
                    (c) the ability to communicate effectively through written documents.
                    </p>
                    <p><strong>Befitting Job Functions/Profiles:</strong> This module will be relevant for almost all profiles such as Business Consulting, HR/Admin, ITES/BPO, Marketing, Engineering, Sales and Customer Management, IT, Hotel Management, Life Sciences, Content Development, etc.</p>
                    <p><strong>Number of Questions:</strong> 18</p>
                    <p><strong>Module Duration:</strong> 18 minutes</p>
                    <p><strong>Detailed Syllabus:</strong></p>
                    <ul className="list-disc list-inside">
                    <li><strong>Vocabulary</strong></li>
                    <ul className="list-circle list-inside ml-4">
                        <li>Synonyms</li>
                        <li>Antonyms</li>
                        <li>Contextual Vocabulary</li>
                    </ul>
                    <li><strong>Grammar</strong></li>
                    <ul className="list-circle list-inside ml-4">
                        <li>Error Identification</li>
                        <li>Sentence Improvement and Construction</li>
                    </ul>
                    <li><strong>Comprehension</strong></li>
                    <ul className="list-circle list-inside ml-4">
                        <li>Reading Comprehension</li>
                    </ul>
                    </ul>
                </div>
                ) : (
                <p className="text-sm text-gray-600">
                    This section contains the detailed syllabus content for <strong>{title}</strong>.
                </p>
            )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
