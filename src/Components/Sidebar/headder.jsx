import { Helmet } from "react-helmet-async";
import { ChevronsLeft, Search, Bell } from "lucide-react";
import PropTypes from "prop-types";
import { FaUser, FaCog, FaQuestionCircle, FaSignOutAlt } from "react-icons/fa";
import BellNotification from "../../Components/Navbar/BellNotification";
import profileImg from "../../assets/tata.svg";
import { useState, useRef, useEffect } from "react";
import { useTheme } from "../../Components/Context/ThemeContext";
import { useAuth } from "../../Components/Context/LoginContex";


export const Header = ({ collapsed, setCollapsed }) => {
  const { logoutAPI } = useAuth(); // get logout function
const [error, setError] = useState(null); // optional for error handling

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isBellDropdownOpen, setIsBellDropdownOpen] = useState(false);
   const { isDark} = useTheme();

  const dropdownRef = useRef(null);
  const bellRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
    setIsBellDropdownOpen(false);
  };

  const toggleBellDropdown = () => {
    setIsBellDropdownOpen((prev) => !prev);
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        bellRef.current &&
        !bellRef.current.contains(event.target)
      ) {
        setIsDropdownOpen(false);
        setIsBellDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

 const handleLogout = async () => {
  const success = await logoutAPI(setError);
  if (success) {
    alert("Logout successful!");
  } else {
    alert(error || "Failed to log out");
  }
};



  return (
    <>
      <Helmet>
        <title>Dashboard Header</title>
      </Helmet>

    <header className="relative z-10 flex h-[60px] items-center justify-between bg-white px-4 shadow-md transition-colors dark:bg-slate-900">
      <div className="flex items-center gap-x-3">
        <button className="btn-ghost size-10" onClick={() => setCollapsed(!collapsed)}>
          <ChevronsLeft className={collapsed ? "rotate-180" : ""} />
        </button>
        <div className="input">
          <Search size={20} className="text-slate-300" />
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search..."
            className="w-full bg-transparent text-slate-900 outline-0 placeholder:text-slate-300 dark:text-slate-50"
          />
        </div>
      </div>

      <div className="flex items-center gap-x-3">
        {/* Bell Icon */}
        <div ref={bellRef} className="relative">
          <button className="btn-ghost size-10" onClick={toggleBellDropdown}>
            <Bell size={20} />
          </button>
          {isBellDropdownOpen && (
            <div className="absolute right-0  z-50">
              <BellNotification />
            </div>
          )}
        </div>

        {/* Profile */}
        <div ref={dropdownRef} className="relative">
          <button className="size-10 overflow-hidden rounded-full" onClick={toggleDropdown}>
            <img src={profileImg} alt="profile image" className="size-full object-cover" />
          </button>

         
            {isDropdownOpen && (
              <div
                className={`absolute right-0 top w-64 ${
                  isDark ? "bg-slate-800 text-white" : "bg-[#d8d6dd] text-[#1c1b1e]"
                } rounded-xl shadow-lg z-50 overflow-hidden`}
              >
                <div
                  className={`flex items-center gap-3 px-4 py-3 border-b ${
                    isDark ? "border-gray-600" : "border-gray-400"
                  }`}
                >
                  <img
                    src="https://randomuser.me/api/portraits/men/1.jpg"
                    alt="User"
                    className="h-10 w-10 rounded-full"
                  />
                  <div>
                    <p className="font-semibold">John Doe</p>
                    <p className={`text-sm ${isDark ? "text-gray-300" : "text-gray-400"}`}>Admin</p>
                  </div>
                </div>

                <div className="py-2 px-2 space-y-1">
                  <button
                    className={`flex items-center w-full px-3 py-2 rounded-md transition-colors ${
                      isDark ? "hover:bg-slate-700" : "hover:bg-[#eeeaea]"
                    }`}
                  >
                    <FaUser className="mr-2" /> My Profile
                  </button>
                  <button
                    className={`flex items-center w-full px-3 py-2 rounded-md transition-colors ${
                      isDark ? "hover:bg-slate-700" : "hover:bg-[#eeeaea]"
                    }`}
                  >
                    <FaCog className="mr-2" /> Settings
                  </button>
                  <button
                    className={`flex items-center w-full px-3 py-2 rounded-md transition-colors ${
                      isDark ? "hover:bg-slate-700" : "hover:bg-[#eeeaea]"
                    }`}
                  >
                    <FaQuestionCircle className="mr-2" /> FAQs
                  </button>
                </div>

                <div
                  className={`px-2 pt-2 mb-2 border-t ${
                    isDark ? "border-gray-600" : "border-gray-400"
                  }`}
                >
                  <button
                   onClick={handleLogout}
                    className={`mb-1 flex items-center w-full px-3 py-2 text-red-500 rounded-md transition-colors ${
                      isDark ? "hover:bg-slate-700" : "hover:bg-[#eeeaea]"
                    }`}
                  >
                    <FaSignOutAlt className="mr-2" /> Sign out
                  </button>
                </div>
              </div>
            )}
        </div>
      </div>
    </header>

    </>
  );
};

Header.propTypes = {
  collapsed: PropTypes.bool,
  setCollapsed: PropTypes.func,
};

