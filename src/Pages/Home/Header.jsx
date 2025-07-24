// import React, { useEffect, useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
// import { useTheme } from "../../Components/Context/ThemeContext";

// export default function Header({ handleLoginClick, handleAdminClick }) {
//   const location = useLocation();
//   const { isDark, toggleTheme } = useTheme();
//   const [isSticky, setIsSticky] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

  

//   const navLinks = [
//     { path: "/", label: "Home" },
//     { path: "/features", label: "Features" },
//     { path: "/practice", label: "Practice Test" },
//     { path: "/contact", label: "Contact" },
//     { path: "/certificates", label: "Certificate" },
//     { path: "/about", label: "About" },
//   ];

//   useEffect(() => {
//     const handleScroll = () => setIsSticky(window.scrollY > 100);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   useEffect(() => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//     setIsMenuOpen(false);
//   }, [location]);

//   useEffect(() => {
//     document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
//     return () => { document.body.style.overflow = "auto"; };
//   }, [isMenuOpen]);

//   const NavLinkItem = ({ path, label }) => (
//     <Link
//       to={path}
//       onClick={() => setIsMenuOpen(false)}
//       className={`relative inline-block px-1 py-0.5 transition-colors duration-300 ${
//         location.pathname === path ? "text-yellow-400" : ""
//       } hover:text-yellow-400`}
//     >
//       {label}
//       <span
//         className={`absolute left-0 -bottom-0.5 w-full h-0.5 bg-yellow-400 transform transition-transform duration-300 origin-left ${
//           location.pathname === path ? "scale-x-100" : "scale-x-0"
//         }`}
//       />
//     </Link>
//   );

//   return (
//     <>
//       <header className={`${isSticky ? "sticky top-0 z-50 shadow-sm" : ""} flex items-center justify-between px-4 py-4 md:px-6 md:py-6 bg-white dark:bg-black transition-all duration-300`}>
//         <div className="text-xl sm:text-2xl md:text-3xl font-bold text-yellow-400 tracking-tight">
//           GaloScore
//         </div>
//         <nav className="hidden lg:flex gap-6 font-medium">
//           {navLinks.map(link => <NavLinkItem key={link.path} {...link} />)}
//         </nav>
//         <div className="flex items-center gap-2 sm:gap-3">
//           <button onClick={toggleTheme} className="p-2 rounded-full border border-yellow-400 text-yellow-400 hover:bg-yellow-500 hover:text-black transition">
//             {isDark ? <MdOutlineDarkMode className="h-5 w-5" /> : <MdOutlineLightMode className="h-5 w-5" />}
//           </button>
//           <button data-login-modal onClick={handleLoginClick} className="text-sm sm:text-base border border-yellow-400 text-yellow-400 px-3 sm:px-4 py-2 rounded-lg hover:bg-yellow-500 hover:text-black transition">
//             Login
//           </button>
//           <button onClick={handleAdminClick} className="text-sm sm:text-base bg-yellow-500 text-black px-3 sm:px-4 py-2 rounded-lg hover:bg-yellow-400 transition">
//             Admin Login
//           </button>
//           <button onClick={() => setIsMenuOpen(true)} className="lg:hidden p-2 rounded border border-yellow-400 text-yellow-400 hover:bg-yellow-500 hover:text-black transition">
//             ☰
//           </button>
//         </div>
//       </header>

//       {isMenuOpen && (
//         <div
//           className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-end"
//           onClick={() => setIsMenuOpen(false)}
//         >
//           <div
//             className="bg-white dark:bg-black w-3/4 max-w-xs h-full p-6 flex flex-col gap-6"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <button onClick={() => setIsMenuOpen(false)} className="self-end text-2xl text-yellow-400">✕</button>
//             {navLinks.map(link => <NavLinkItem key={link.path} {...link} />)}
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import { useTheme } from "../../Components/Context/ThemeContext";

export default function Header({ handleLoginClick, handleAdminClick }) {
  const location = useLocation();
  const { isDark, toggleTheme } = useTheme();
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/features", label: "Features" },
    { path: "/practice", label: "Practice Test" },
    { path: "/contact", label: "Contact" },
    { path: "/certificates", label: "Certificate" },
    { path: "/about", label: "About" },
  ];

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsMenuOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
    return () => { document.body.style.overflow = "auto"; };
  }, [isMenuOpen]);

  const NavLinkItem = ({ path, label }) => (
    <Link
      to={path}
      onClick={() => setIsMenuOpen(false)}
      className={`relative inline-block px-1 py-0.5 transition-colors duration-300
        ${
          location.pathname === path
            ? "text-yellow-400"
            : isDark
              ? "text-white"
              : "text-black"
        }
        hover:text-yellow-400
      `}
    >
      {label}
      <span
        className={`absolute left-0 -bottom-0.5 w-full h-0.5 bg-yellow-400 transform transition-transform duration-300 origin-left ${
          location.pathname === path ? "scale-x-100" : "scale-x-0"
        }`}
      />
    </Link>
  );

  return (
    <>
      <header className={`${isSticky ? "sticky top-0 z-50 shadow-sm" : ""} flex items-center justify-between px-4 py-4 md:px-6 md:py-6
        ${isDark ? "bg-black" : "bg-white"} transition-all duration-300`}>
        <div className={`text-xl sm:text-2xl md:text-3xl font-bold tracking-tight
          ${isDark ? "text-yellow-400" : "text-yellow-500"}`}>
          GaloScore
        </div>

        <nav className="hidden lg:flex gap-6 font-medium">
          {navLinks.map(link => <NavLinkItem key={link.path} {...link} />)}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <button onClick={toggleTheme} className="p-2 rounded-full border border-yellow-400 text-yellow-400 hover:bg-yellow-500 hover:text-black transition">
            {isDark ? <MdOutlineDarkMode className="h-5 w-5" /> : <MdOutlineLightMode className="h-5 w-5" />}
          </button>
          <button
            data-login-modal
            onClick={handleLoginClick}
            className={`text-sm sm:text-base border border-yellow-400 px-3 sm:px-4 py-2 rounded-lg transition
              ${isDark ? "text-yellow-400 hover:bg-yellow-500 hover:text-black" : "text-yellow-400 hover:bg-yellow-500 hover:text-black"}`}
          >
            Login
          </button>
          <button
            onClick={handleAdminClick}
            className={`text-sm sm:text-base px-3 sm:px-4 py-2 rounded-lg transition
              ${isDark ? "bg-yellow-500 text-black hover:bg-yellow-400" : "bg-yellow-500 text-black hover:bg-yellow-400"}`}
          >
            Admin Login
          </button>
          <button onClick={() => setIsMenuOpen(true)} className="lg:hidden p-2 rounded border border-yellow-400 text-yellow-400 hover:bg-yellow-500 hover:text-black transition">
            ☰
          </button>
        </div>
      </header>

      {isMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-end"
          onClick={() => setIsMenuOpen(false)}
        >
          <div
            className={`w-3/4 max-w-xs h-full p-6 flex flex-col gap-6
              ${isDark ? "bg-black" : "bg-white"}`}
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={() => setIsMenuOpen(false)} className="self-end text-2xl text-yellow-400">✕</button>
            {navLinks.map(link => <NavLinkItem key={link.path} {...link} />)}
          </div>
        </div>
      )}
    </>
  );
}

