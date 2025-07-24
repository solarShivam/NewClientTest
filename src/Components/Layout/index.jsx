
import React from "react";
import { Outlet } from "react-router-dom";
import NavbarWithSidebar from "../Navbar/Main";
import { Helmet } from "react-helmet-async";

const MainLayout = () => {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50 text-gray-800">
      <Helmet>
        <title>Dashboard | YourAppName</title>
        <meta name="description" content="Your dashboard for managing data efficiently." />
      </Helmet>

      <header className="w-full">
        <NavbarWithSidebar />
      </header>

      <main
        className="flex-1 overflow-y-auto pt-20 px-4"
        role="main"
        aria-label="Main content"
      >
        <Outlet />
      </main>

      <footer className="p-4 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Your Company. All rights reserved.
      </footer>
    </div>
  );
};

export default MainLayout;






// import React, { useState } from "react";
// import { Outlet } from "react-router-dom";
// import Navbar from "../../Components/Navbar/index";
// import SlideDrawer from "../../Components/Sidebar/index";

// const MainLayout = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);
//   const closeSidebar = () => setIsSidebarOpen(false);

//   return (
//     <div className="flex min-h-screen flex-col bg-gray-50">
//       <Navbar toggleSidebar={toggleSidebar} />
//       <SlideDrawer isOpen={isSidebarOpen} onClose={closeSidebar} />

//       {/* Overlay for mobile when sidebar is open */}
//       {isSidebarOpen && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-40 z-20 md:hidden"
//           onClick={closeSidebar}
//         />
//       )}

//       <main className="pt-20 px-4 flex-1 overflow-y-auto">
//         <Outlet />
//       </main>
//     </div>
//   );
// };

// export default MainLayout;



