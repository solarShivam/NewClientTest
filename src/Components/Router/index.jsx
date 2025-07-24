


// import React, { Suspense, lazy } from "react";
// import { Routes, Route } from "react-router-dom";
// import Loader from "../../Components/Loader/index";

// const Home = lazy(() => import("../../Pages/Home/index"));
// const CandidateLogin = lazy(() => import("../../Pages/CandidateLogin/index"));
// const CandidateDashboard = lazy(() => import("../../Pages/CandidateDashboard/Main"));
// const AdminLogin = lazy(() => import('../../Pages/Admin/AdminLogin'));
// const AdminDashboard = lazy(() => import('../../Pages/Admin/AdminDashboard'));
// const AdminLayout = lazy(() => import('../../Components/Sidebar/layout'));
// const Layout2 = lazy(() => import('../../Components/Sidebar/layout'));
// const CreateTest = lazy(() => import('../../Pages/Admin/Test/CreateTest'));
// const TestPanel = lazy(() => import('../../Pages/Admin/Test/TestPanel'));
// const ShowAllQuesAdmin = lazy(() => import('../../Pages/Admin/Test/ShowAllQuestion'));
// const CreateQuestion = lazy(() => import("../../Pages/Admin/Test/CreateQuestion"));
// const UploadQuestion = lazy(() => import("../../Pages/Admin/Test/UploadQuestion"));
// const ShowInvaliDuploadQues = lazy(() => import('../../Pages/Admin/Test/ShowInvalidUploadQues'));
// const Report = lazy(() => import('../../Pages/Report/index'));
// const ExploreProgram = lazy(()=> import('../../Pages/Home/Explore'))

// const AppRouter = () => {
//   return (
//     <Suspense fallback={<Loader />}>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/features" element={<Home section="features" />} />
//         <Route path="/practice" element={<Home section="practice" />} />
//         <Route path="/certificates" element={<Home section="certificates" />} />
//           <Route path="/contact" element={<Home section="contact" />} />
//         <Route path="/about" element={<Home section="about" />} />
//         <Route path="/exploreprogram" element={<ExploreProgram />} />

//         <Route path="/candidatelogin" element={<CandidateLogin />} />
//         <Route path="/adminLogin" element={<AdminLogin />} />
//         <Route path="/admindashboard" element={<AdminLayout />} />

//         <Route path="/" element={<Layout2 />}>
//           <Route path="dashboard" element={<AdminDashboard />} />
//           <Route path="createtest" element={<CreateTest />} />
//           <Route path="testpanel" element={<TestPanel />} />
//           <Route path="showallQuesadmin" element={<ShowAllQuesAdmin />} />
//           <Route path="createquestion" element={<CreateQuestion />} />
//           <Route path="uploadquestion" element={<UploadQuestion />} />
//           <Route path="showinvaliduploadques" element={<ShowInvaliDuploadQues />} />
//           <Route path="report" element={<Report />} />
//           <Route path="candidatedashboard" element={<CandidateDashboard />} />
//         </Route>

//         <Route path="*" element={<div>Page Not Found</div>} />
//       </Routes>
//     </Suspense>
//   );
// };

// export default AppRouter;

import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Loader from "../../Components/Loader/index";
import PublicLayout from "../../Components/Global/PublicLayout";

const Home = lazy(() => import("../../Pages/Home/index"));
const CandidateLogin = lazy(() => import("../../Pages/CandidateLogin/index"));
const CandidateDashboard = lazy(() => import("../../Pages/CandidateDashboard/Main"));
const AdminLogin = lazy(() => import('../../Pages/Admin/AdminLogin'));
const AdminDashboard = lazy(() => import('../../Pages/Admin/AdminDashboard'));
// const AdminLayout = lazy(() => import('../../Components/Sidebar/layout'));
const Layout2 = lazy(() => import('../../Components/Sidebar/layout'));
const CreateTest = lazy(() => import('../../Pages/Admin/Test/CreateTest'));
const TestPanel = lazy(() => import('../../Pages/Admin/Test/TestPanel'));
const ShowAllQuesAdmin = lazy(() => import('../../Pages/Admin/Test/ShowAllQuestion'));
const CreateQuestion = lazy(() => import("../../Pages/Admin/Test/CreateQuestion"));
const UploadQuestion = lazy(() => import("../../Pages/Admin/Test/UploadQuestion"));
const ShowInvaliDuploadQues = lazy(() => import('../../Pages/Admin/Test/ShowInvalidUploadQues'));
const Report = lazy(() => import('../../Pages/Report/index'));
const ExploreProgram = lazy(()=> import('../../Pages/Home/Explore'));
import TestDetail from "../../Pages/Home/TestDetails";
import TestTaking from "../../Pages/Home/TestTaking "
import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";
import ProfilePreview from "../../Pages/ProfileSection/ProfilePreview";




const AppRouter = () => {

  
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        
        {/* Public routes wrapped with PublicLayout */}
        <Route path="/" element={<PublicRoute><PublicLayout /></PublicRoute>}>
          <Route index element={<Home />} />
          <Route path="features" element={<Home section="features" />} />
          <Route path="practice" element={<Home section="practice" />} />
          <Route path="certificates" element={<Home section="certificates" />} />
          <Route path="contact" element={<Home section="contact" />} />
          <Route path="about" element={<Home section="about" />} />
          <Route path="exploreprogram" element={<ExploreProgram />} />
          <Route path="candidatelogin" element={<CandidateLogin />} />
          <Route path="/practice/:testId" element={<TestDetail />} />
          <Route path="/practice/:testId/start" element={<TestTaking />} />
          <Route path="/profilepreview" element={<ProfilePreview/>} />
        </Route>

        {/* Admin & Dashboard Routes */}
        <Route path="/adminLogin" element={<PublicRoute><AdminLogin /></PublicRoute>} />
        {/* <Route path="/admindashboard" element={<AdminLayout />} /> */}

        <Route path="/admin" element={ <ProtectedRoute>
              <Layout2 />
            </ProtectedRoute>}>
             <Route index element={<AdminDashboard />} />
          {/* <Route path="dashboard" element={<AdminDashboard />} /> */}
          <Route path="createtest" element={<CreateTest />} />
          <Route path="testpanel" element={<TestPanel />} />
          <Route path="showallQuesadmin" element={<ShowAllQuesAdmin />} />
          <Route path="createquestion" element={<CreateQuestion />} />
          <Route path="uploadquestion" element={<UploadQuestion />} />
          <Route path="showinvaliduploadques" element={<ShowInvaliDuploadQues />} />
          <Route path="report" element={<Report />} />
          <Route path="candidatedashboard" element={<CandidateDashboard />} />
        </Route>

        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
    </Suspense>
  );
};

export default AppRouter;



