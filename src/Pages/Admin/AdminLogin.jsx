// import React, { useEffect } from "react";
// import { useNavigate,useLocation } from "react-router-dom";
// import LogoImage from '../../assets/galoscore.jpg'
// import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
// import { MdLockOpen } from "react-icons/md";
// import { LuCircleUserRound } from "react-icons/lu";
// import { useState } from "react";
// import axios from "axios";
// import { FaSpinner } from "react-icons/fa";
// import { Helmet } from "react-helmet-async";
// import { useTheme } from "../../Components/Context/ThemeContext"; 

// axios.defaults.withCredentials = true;

// function Index() {

//   const { isDark} = useTheme();
//   const [isPasswordVisible, setIsPasswordVisible] = useState(false);
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);
//   const navigates =useNavigate();
//   const [formData, setFormData]=useState({
//     userId : "",
//     password : "",
//   })


//   const handleFormData = (e) => {
//     setFormData((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }));
//   };
  
//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//   };
  

//   return (
//   <>
//     <Helmet>
//       <title>GaloScore Admin Login</title>
//       <meta name="description" content="Login to access the GaloScore admin panel." />
//     </Helmet>

//     <div className={isDark ? "bg-gray-900 text-white" : "bg-white text-black"} style={{height: '100vh'}}>
//       {/* Top Section */}
//       <div className={`h-[25%] relative ${isDark ? "bg-gray-800" : "bg-white"}`}>
//         {/* Logo */}
//         <div className="absolute top-8 left-8">
//           <img
//             src={LogoImage}
//             alt="U-Man Logo"
//             className="h-20 w-auto object-contain"
//           />
//         </div>
//       </div>

//       {/* Middle Section */}
//       <div className="h-[50%] flex flex-col md:flex-row" style={{ backgroundColor: "#FDC700" }}>
//         {/* Left Side */}
//         <div className="md:w-1/2 w-full flex flex-col justify-center items-center p-6"
//           style={{ backgroundColor: "#FDC700" }}>
//           <h2
//             className={`text-3xl font-semibold mt-16 drop-shadow-[2px_2px_2px_rgba(0,0,0,0.6)] ${
//               isDark ? "text-white" : "text-black"
//             }`}
//           >
//             Welcome To{" "}
//             <span
//               className={`italic font-bold drop-shadow-[2px_2px_2px_rgba(0,0,0,0.6)] ${
//                 isDark ? "text-white" : "text-black"
//               }`}
//             >
//               Galo score
//             </span>
//           </h2>
//           <p
//             className={`mt-2 text-lg italic drop-shadow-[2px_2px_2px_rgba(0,0,0,0.6)] ${
//               isDark ? "text-white" : "text-black"
//             }`}
//           >
//             TEST PORTAL
//           </p>
//           <p
//             className={`mt-20 text-lg font-semibold drop-shadow-[2px_2px_2px_rgba(0,0,0,0.6)] ${
//               isDark ? "text-white" : "text-black"
//             }`}
//           >
//             Login to access the admin panel
//           </p>
//         </div>

//         {/* Right Side (Form) */}
//         <div className="md:w-1/2 w-full flex justify-center items-center p-6 relative">
//           <div
//             className={`rounded-lg p-8 w-full max-w-md min-h-[500px] relative
//               ${isDark 
//                 ? "bg-gray-800 text-white shadow-[0_0_20px_4px_#ff7e00] border border-[#ff7e00]" 
//                 : "bg-white text-black shadow-[0px_4px_5px_5px_#393E46]"
//               }`}
//               style={{  borderRadius: "1rem", }}
//           >
//             {/* Rotated Register Text - Half inside, Half outside */}
//             <h2 className="absolute right-[-74px] top-1/2 -translate-y-1/2 text-yellow-500 font-bold text-5xl rotate-90 z-10">
//               Login
//               {/* White Top Half Overlay */}
//               <span
//                 className="absolute inset-0 text-white"
//                 style={{
//                   clipPath: "polygon(0% 0%, 100% 0%, 100% 65%, 0% 65%)",
//                 }}
//               >
//                 Login
//               </span>
//             </h2>

//             <form className="space-y-4" onSubmit={handleSubmit}>
//               <div className="mt-20">
//                 <label className={`font-semibold ${isDark ? "text-gray-300" : "text-gray-700"}`}>
//                   User Name
//                 </label>
//                 <div
//                   className={`relative flex items-center rounded-lg border-2 ${
//                     isDark
//                       ? "border-gray-600 bg-gray-700"
//                       : "border-gray-300 bg-white"
//                   }`}
//                 >
//                   <LuCircleUserRound
//                     className={`absolute left-3 text-xl ${
//                       isDark ? "text-gray-300" : "text-gray-500"
//                     }`}
//                   />
//                   <input
//                     type="text"
//                     name="userId"
//                     value={formData?.userId}
//                     onChange={handleFormData}
//                     placeholder="User id..."
//                     className={`w-full py-2 pl-10 pr-4 border-none focus:outline-none ${
//                       isDark ? "bg-gray-700 text-white" : "bg-white text-black"
//                     }`}
//                   />
//                 </div>
//               </div>
//               <div>
//                 <label className={`font-semibold ${isDark ? "text-gray-300" : "text-gray-700"}`}>
//                   Password
//                 </label>
//                 <div
//                   className={`relative flex items-center rounded-lg border-2 ${
//                     isDark
//                       ? "border-gray-600 bg-gray-700"
//                       : "border-gray-300 bg-white"
//                   }`}
//                 >
//                   <MdLockOpen
//                     className={`absolute left-3 text-xl ${
//                       isDark ? "text-gray-300" : "text-gray-500"
//                     }`}
//                   />
//                   <input
//                     type={isPasswordVisible ? "text" : "password"}
//                     name="password"
//                     value={formData?.password}
//                     onChange={handleFormData}
//                     placeholder="Password..."
//                     className={`w-full py-2 pl-10 pr-4 border-none focus:outline-none ${
//                       isDark ? "bg-gray-700 text-white" : "bg-white text-black"
//                     }`}
//                   />
//                   <div
//                     onClick={() => setIsPasswordVisible(!isPasswordVisible)}
//                     className={`absolute right-3 text-xl cursor-pointer ${
//                       isDark ? "text-gray-300" : "text-gray-500"
//                     }`}
//                   >
//                     {isPasswordVisible ? <FaRegEye /> : <FaRegEyeSlash />}
//                   </div>
//                 </div>
//               </div>

//               <button
//                 type="submit"
//                 className="w-full flex items-center justify-center py-2 rounded-lg font-semibold hover:bg-yellow-600 drop-shadow-[2px_2px_2px_rgba(0,0,0,0.6)]"
//                 style={{ backgroundColor: "#FDC700", color: "black" }}
//               >
//                 {loading ? (
//                   <FaSpinner className="animate-spin text-xl" />
//                 ) : (
//                   "Login"
//                 )}
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Section */}
//       <div className={`h-[25%] ${isDark ? "bg-gray-800" : "bg-white"}`}></div>
//     </div>
//   </>
// );

// }

// export default Index;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LogoImage from '../../assets/galoscore.jpg';
import { FaRegEyeSlash, FaRegEye, FaSpinner } from "react-icons/fa";
import { MdLockOpen } from "react-icons/md";
import { LuCircleUserRound } from "react-icons/lu";
import axios from "axios";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { useTheme } from "../../Components/Context/ThemeContext";
import { useAuth } from "../../Components/Context/LoginContex";

axios.defaults.withCredentials = true;

function Index() {
    const { loginAPI } = useAuth();
  const { isDark } = useTheme();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = async (data) => {
  setError("");
  setLoading(true);
  const result = await loginAPI(data, setError, setLoading);

  if (result.success) {
    alert("Admin Login Successfully")
    navigate("/admin");
  } else {
    alert(result.errorMsg);
  }
};



  return (
    <>
      <Helmet>
        <title>GaloScore Admin Login</title>
        <meta name="description" content="Login to access the GaloScore admin panel." />
      </Helmet>

      <div className={isDark ? "bg-gray-900 text-white" : "bg-white text-black"} style={{ height: '100vh' }}>
        {/* Top */}
        <div className={`h-[25%] relative ${isDark ? "bg-gray-800" : "bg-white"}`}>
          <div className="absolute top-8 left-8">
            <img src={LogoImage} alt="Logo" className="h-20 w-auto object-contain" />
          </div>
        </div>

        {/* Middle */}
        <div className="h-[50%] flex flex-col md:flex-row" style={{ backgroundColor: "#FDC700" }}>
          {/* Left */}
          <div className="md:w-1/2 w-full flex flex-col justify-center items-center p-6">
            <h2 className={`text-3xl font-semibold mt-16 drop-shadow-[2px_2px_2px_rgba(0,0,0,0.6)] ${isDark ? "text-white" : "text-black"}`}>
              Welcome To <span className="italic font-bold">Galo score</span>
            </h2>
            <p className="mt-2 text-lg italic drop-shadow-[2px_2px_2px_rgba(0,0,0,0.6)]">TEST PORTAL</p>
            <p className="mt-20 text-lg font-semibold drop-shadow-[2px_2px_2px_rgba(0,0,0,0.6)]">Login to access the admin panel</p>
          </div>

          {/* Right */}
          <div className="md:w-1/2 w-full flex justify-center items-center p-6 relative">
            <div className={`rounded-lg p-8 w-full max-w-md min-h-[500px] relative ${isDark ? "bg-gray-800 text-white shadow-[0_0_20px_4px_#ff7e00] border border-[#ff7e00]" : "bg-white text-black shadow-[0px_4px_5px_5px_#393E46]"}`}>
              <h2 className="absolute right-[-74px] top-1/2 -translate-y-1/2 text-yellow-500 font-bold text-5xl rotate-90 z-10">
                Login
                <span className="absolute inset-0 text-white" style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 65%, 0% 65%)" }}>
                  Login
                </span>
              </h2>

              <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                <div className="mt-20">
                  <label className={`font-semibold ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                    User Name
                  </label>
                  <div className={`relative flex items-center rounded-lg border-2 ${isDark ? "border-gray-600 bg-gray-700" : "border-gray-300 bg-white"}`}>
                    <LuCircleUserRound className={`absolute left-3 text-xl ${isDark ? "text-gray-300" : "text-gray-500"}`} />
                    <input
                        type="text"
                        placeholder="User ID"
                        {...register("userId", {
                            required: "User ID is required",
                            minLength: {
                            value: 4,
                            message: "User ID must be at least 4 characters",
                            }
                        })}

                        className={`w-full py-2 pl-10 pr-4 border-none focus:outline-none ${
                       isDark ? "bg-gray-700 text-white" : "bg-white text-black"
                     }`}
                    />
                    {errors.userId && <p className="text-red-500">{errors.userId.message}</p>}

                  </div>
                  {errors.userId && <p className="text-red-500 text-sm mt-1">{errors.userId.message}</p>}
                </div>

                <div>
                  <label className={`font-semibold ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                    Password
                  </label>
                  <div className={`relative flex items-center rounded-lg border-2 ${isDark ? "border-gray-600 bg-gray-700" : "border-gray-300 bg-white"}`}>
                    <MdLockOpen className={`absolute left-3 text-xl ${isDark ? "text-gray-300" : "text-gray-500"}`} />
                    <input
                        type={isPasswordVisible ? "text" : "password"}
                        placeholder="Password"
                        {...register("password", {
                            required: "Password is required",
                            minLength: {
                            value: 6,
                            message: "Password must be at least 6 characters",
                            },
                            pattern: {
                            value: /^(?=.*\d).{6,}$/,
                            message: "Password must contain at least one number",
                            }
                        })}
                        className={`w-full py-2 pl-10 pr-4 border-none focus:outline-none ${
                       isDark ? "bg-gray-700 text-white" : "bg-white text-black"
                     }`}
                    />
                    {errors.password && <p className="text-red-500">{errors.password.message}</p>}

                    <div
                      onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                      className={`absolute right-3 text-xl cursor-pointer ${isDark ? "text-gray-300" : "text-gray-500"}`}
                    >
                      {isPasswordVisible ? <FaRegEye /> : <FaRegEyeSlash />}
                    </div>
                  </div>
                  {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
                </div>

                {error && <p className="text-red-600 text-sm">{error}</p>}

                <button
                  type="submit"
                  className="w-full flex items-center justify-center py-2 rounded-lg font-semibold hover:bg-yellow-600 drop-shadow-[2px_2px_2px_rgba(0,0,0,0.6)]"
                  style={{ backgroundColor: "#FDC700", color: "black" }}
                >
                  {loading ? <FaSpinner className="animate-spin text-xl" /> : "Login"}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className={`h-[25%] ${isDark ? "bg-gray-800" : "bg-white"}`}></div>
      </div>
    </>
  );
}

export default Index;




