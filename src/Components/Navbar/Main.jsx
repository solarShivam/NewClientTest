
import React, { useState, useRef, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { BellIcon } from "lucide-react";
import { FaUser,FaCog, FaQuestionCircle,FaSignOutAlt,} from "react-icons/fa";
import BellNotification from "./BellNotification";
// import ThemeToggle from '../../Components/Theme/index'

const Navbar = ({toggleSidebar }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [isBellDropdownOpen, setIsBellDropdownOpen] = useState(false);

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


  return (
    <header className="fixed top-0 w-full flex items-center justify-between bg-gray-200 p-4 shadow-md z-10 transition-all duration-300">
      {/* Left Section */}
      <div className="flex items-center space-x-4">
        <button>
          {/* <ThemeToggle /> */}
          <FaBars size={28} />
        </button>
        {/* <button onClick={toggleSidebar} aria-label="Toggle sidebar">
          <FaBars size={24} />
        </button> */}
        <h1 className="text-lg font-semibold">Galoscore</h1>
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-4 relative" ref={dropdownRef}>
        {/* Bell Icon with Dropdown */}
        <div ref={bellRef} className="relative">
            <BellIcon
            className="h-6 w-6 text-gray-600 cursor-pointer"
            onClick={toggleBellDropdown}
            />
            {isBellDropdownOpen && <BellNotification />}
        </div>

        <div
          className="flex items-center cursor-pointer"
          onClick={toggleDropdown}
        >
          <img
            src="https://randomuser.me/api/portraits/men/1.jpg"
            alt="User"
            className="h-8 w-8 rounded-full"
          />
        </div>
        
        {/* profile dropdown section  */}
        {isDropdownOpen && (
        <div className="absolute right-0 top-7 mt-2 w-64 bg-[#d8d6dd] text-[#1c1b1e]  rounded-xl shadow-lg z-50 overflow-hidden">
            
            {/* User Info */}
            <div className="flex items-center gap-3 px-4 py-3 border-b border-gray-600">
            <img
                src="https://randomuser.me/api/portraits/men/1.jpg"
                alt="User"
                className="h-10 w-10 rounded-full"
            />
            <div>
                <p className="font-semibold">John Doe</p>
                <p className="text-sm text-gray-400">Admin</p>
            </div>
            </div>

            {/* Menu Items */}
            <div className="py-2 px-2 space-y-1">
            <button className="flex items-center w-full px-3 py-2 hover:bg-[#eeeaea] rounded-md transition-colors">
                <FaUser className="mr-2" /> My Profile
            </button>
            <button className="flex items-center w-full px-3 py-2 hover:bg-[#eeeaea] rounded-md transition-colors">
                <FaCog className="mr-2" /> Settings
            </button>
        
        
            <button className="flex items-center w-full px-3 py-2 hover:bg-[#eeeaea] rounded-md transition-colors">
                <FaQuestionCircle className="mr-2" /> FAQs
            </button>
            </div>

            {/* Sign Out */}
            <div className="px-2 pt-2 border-t border-gray-600 mb-2">
            <button className="mb-1 flex items-center w-full px-3 py-2 text-red-500 hover:bg-[#eeeaea] rounded-md transition-colors">
                <FaSignOutAlt className="mr-2" /> Sign out
            </button>
            </div>
        </div>
        )}

      </div>
    </header>
  );
};

export default Navbar;







