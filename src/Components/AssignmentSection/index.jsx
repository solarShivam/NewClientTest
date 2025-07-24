// import React, { useState } from 'react';
// import Recruitment from '../../assets/recuritement.png';
// import EmpAssessment from '../../assets/Assigncertificate.png';
// import Traning from '../../assets/Traning.png';
// import Certificate from '../../assets/certificateEmp.svg';
// import Exam from '../../assets/exams.png';
// import HomeWork from '../../assets/homework.png';
// import Quize from '../../assets/quiz.svg';
// import { useTheme } from "../../Components/Context/ThemeContext";

// const businessAssessments = [
//   {
//     title: 'Recruitment',
//     description: 'Identify real talents without the hassle of time-consuming CV screening.',
//     image: Recruitment,
//   },
  
//   {
//     title: 'Certificate Generator',   
//     description:
//       'Easily generate and distribute certificates after training, tests, or workshops.',
//       image: Certificate,
//   },
// ];

// const educationAssessments = [
//   {
//     title: 'Online Exams',
//     description:
//       'Conduct secure, proctored online exams with flexible time and scoring rules.',
//     image: Exam,
//   },
  
  
//   {
//     title: 'Live Quiz System',
//     description:
//       'Engage users with live quizzes for training, testing, or entertainment.',
//     image: Quize,
//   },
// ];

// export default function AssessmentSection() {
//   const { isDark} = useTheme();
//   const [activeTab, setActiveTab] = useState('business');

//   const assessments = activeTab === 'business' ? businessAssessments : educationAssessments;

//   return (
//     <section className="py-16 bg-white">
//       <div className="text-center mb-10 px-4">
//         <p className="text-gray-500 text-lg">Skills and knowledge testing made easy</p>
//         <h2 className="text-3xl font-bold text-gray-800 mt-2">
//           One assessment platform for all your needs
//         </h2>

//         {/* Tab Buttons */}
//         <div className="mt-6 inline-flex bg-gray-100 p-1 rounded-full ">
//           <button
//             onClick={() => setActiveTab('business')}
//             className={`px-6 py-2 rounded-full font-semibold transition ${
//               activeTab === 'business'
//                 ? ' bg-yellow-600 shadow text-white'
//                 : 'text-gray-600 '
//             }`}
//           >
//             Business
//           </button>
//           <button
//             onClick={() => setActiveTab('education')}
//             className={`px-6 py-2 rounded-full font-semibold transition ${
//               activeTab === 'education'
//                 ? 'bg-yellow-600 text-white shadow'
//                 : 'text-gray-600'
//             }`}
//           >
//             Education
//           </button>
//         </div>
//       </div>

//       {/* Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
//         {assessments.map(({ title, description, image }, index) => (
//           <div
//             key={index}
//             className="bg-[#e0e5ec] p-6 rounded-2xl shadow-inner hover:shadow-xl transition-all duration-300 text-left"
//           >
//             <img src={image} alt={title} className="w-16 h-16 mb-4" />
//             <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
//             <p className="text-gray-600 mb-4">{description}</p>
//             <a href="#" className="text-blue-600 font-medium hover:underline flex items-center gap-1">
//               Learn more →
//             </a>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
import React, { useState } from 'react';
import Recruitment from '../../assets/recuritement.png';
import Certificate from '../../assets/certificateEmp.svg';
import Exam from '../../assets/exams.png';
import Quize from '../../assets/quiz.svg';
import { Helmet } from 'react-helmet-async';
import { useTheme } from '../../Components/Context/ThemeContext';

const businessAssessments = [
  {
    title: 'Recruitment',
    description: 'Identify real talents without the hassle of time-consuming CV screening.',
    image: Recruitment,
  },
  {
    title: 'Certificate Generator',
    description: 'Easily generate and distribute certificates after training, tests, or workshops.',
    image: Certificate,
  },
];

const educationAssessments = [
  {
    title: 'Online Exams',
    description: 'Conduct secure, proctored online exams with flexible time and scoring rules.',
    image: Exam,
  },
  {
    title: 'Live Quiz System',
    description: 'Engage users with live quizzes for training, testing, or entertainment.',
    image: Quize,
  },
];

export default function AssessmentSection() {
  const { isDark } = useTheme();
  const [activeTab, setActiveTab] = useState('business');
  const assessments = activeTab === 'business' ? businessAssessments : educationAssessments;

  return (
    <section className={`${isDark ? 'bg-gray-900' : 'bg-white'} py-16 transition-colors duration-300`}>
      <Helmet>
        <title>Assessment Solutions | Versatile Test Platform</title>
        <meta
          name="description"
          content="Explore our recruitment and education assessment solutions. Switch between business and education-focused tools for your organization’s needs."
        />
      </Helmet>

      <div className="text-center mb-10 px-4">
        <p className={`${isDark ? 'text-gray-400' : 'text-gray-500'} text-lg`}>
          Skills and knowledge testing made easy
        </p>
        <h2 className={`${isDark ? 'text-white' : 'text-gray-800'} text-3xl font-bold mt-2`}>
          One assessment platform for all your needs
        </h2>

        {/* Tab Buttons */}
        <div className={`mt-6 inline-flex p-1 rounded-full drop-shadow-[2px_2px_2px_rgba(0,0,0,0.6)] ${isDark ? 'bg-gray-800' : 'bg-gray-100'}`}>
          {['business', 'education'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-full font-semibold transition  ${
                activeTab === tab
                  ? 'bg-yellow-600 text-white shadow'
                  : isDark
                  ? 'text-gray-300'
                  : 'text-gray-600'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Responsive Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto px-4 drop-shadow-[2px_2px_2px_rgba(0,0,0,0.6)]">
        {assessments.map(({ title, description, image }, index) => (
          <div
            key={index}
            className={`p-6 rounded-2xl transition-all duration-300 text-left hover:shadow-xl ${
              isDark ? 'bg-gray-800 text-white' : 'bg-[#e0e5ec] text-gray-800'
            }`}
          >
            <img src={image} alt={title} className="w-16 h-16 mb-4" />
            <h3 className={`text-xl font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-800'}`}>{title}</h3>
            <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} mb-4`}>{description}</p>
            <a
              href="#"
              className={`font-medium hover:underline flex items-center gap-1 ${
                isDark ? 'text-yellow-400' : 'text-blue-600'
              }`}
            >
              Learn more →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
