// import { useState , useEffect} from "react";
// import { useForm } from "react-hook-form";
// import { useNavigate } from "react-router-dom";
// import { FaRegEyeSlash, FaRegEye, FaSpinner } from "react-icons/fa";
// import { MdLockOpen } from "react-icons/md";
// import { LuCircleUserRound } from "react-icons/lu";
// import imagelogo from '../../assets/galoscore.jpg'
// // import {GoogleLogin} from '@react-oauth/google'
// import { useGoogleLogin } from '@react-oauth/google';
// import { FcGoogle } from "react-icons/fc";
// import { Helmet } from "react-helmet-async";
// import { useTheme } from "../../Components/Context/ThemeContext"; 
// import { TfiEmail } from "react-icons/tfi";

// function Index() {
//   const [isPasswordVisible, setIsPasswordVisible] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [mode, setMode] = useState("login"); // login | signup
//   const navigate = useNavigate();
//   const { isDark} = useTheme();
 
//   const {
//     register,
//     handleSubmit,
//     watch,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = async (data) => {
//     setLoading(true);
//     try {
//       if (mode === "login") {
//         console.log("Logging in with:", data);
//         await new Promise((res) => setTimeout(res, 1500)); // simulate login
//         navigate("/dashboard");
//       } else {
//         console.log("Signing up with:", data);
//         await new Promise((res) => setTimeout(res, 1500)); // simulate sign-up
//         navigate("/dashboard");
//       }
//     } catch (error) {
//       alert("Something went wrong");
//     } finally {
//       setLoading(false);
//     }
//   };

// const login = useGoogleLogin({
//   onSuccess: async (tokenResponse) => {
//     try {
//       console.log("Google token:", tokenResponse);
//       navigate("/dashboard"); // ⬅️ Redirect
//     } catch (err) {
//       console.error("Login failed", err);
//       alert("Google login failed. Please try again.");
//     }
//   },
//   onError: errorResponse => {
//     console.error("Google login error", errorResponse);
//     alert("Google login failed. Please try again.");
//   }
// });

  
//   return (
//     <>

//     <Helmet>
//         <title>{mode === "login" ? "Candidate Login - Test Portal" : "Candidate Sign Up - Test Portal"}</title>
//         <meta
//           name="description"
//           content="Secure candidate login/signup page for the test portal."
//         />
//     </Helmet>

//       <div className={` w-full ${isDark ? "bg-gray-900 text-white" : "bg-white text-black"}`}>

//         <div className="  md:flex-row" style={{ backgroundColor: "#FDC700" }}>
   
          
//           <div className="w-full flex justify-center items-center p-6 relative">
//             <div className={`rounded-lg p-8 w-full max-w-md min-h-[500px] relative
//               ${isDark 
//                 ? "bg-gray-800 text-white shadow-[0_0_20px_4px_#ff7e00] border border-[#ff7e00]" 
//                 : "bg-white text-black shadow-[0px_4px_5px_5px_#393E46]"
//               }`}
//               style={{  borderRadius: "1rem", }}
//               >
//               {/* Rotated Text */}
//               {mode === "login" ? (
//               <h2 className="absolute right-[-74px] top-1/2 -translate-y-1/2 text-yellow-500 font-bold text-5xl rotate-90 z-10">
//                   Login
//                   <span
//                   className="absolute inset-0 text-white"
//                   style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 65%, 0% 65%)" }}
//                   >
//                   Login
//                   </span>
//               </h2>
//               ) : (
//               <h2 className="absolute right-[-95px] top-1/2 -translate-y-1/2 text-yellow-500 font-bold text-5xl rotate-90 z-10">
//                   Sign Up
//                   <span
//                   className="absolute inset-0 text-white"
//                   style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 65%, 0% 65%)" }}
//                   >
//                   Sign Up
//                   </span>
//               </h2>
//               )}

//               <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-10">
//                 {/* Username */}
//                 <div>
//                   <label className={`font-semibold ${isDark ? "text-gray-200" : "text-gray-700"}`}>User Name</label>
//                   <div className={`relative flex items-center rounded-lg border-2 ${isDark ? "border-gray-600 bg-gray-700" : "border-gray-300 bg-white"}`}>
//                     <LuCircleUserRound className="absolute left-3 text-gray-400 text-xl" />
//                     <input
//                       type="text"
//                       {...register("userId", { required: "User ID is required" })}
//                       placeholder="User ID..."
//                       className={`w-full py-2 pl-10 pr-4 border-none focus:outline-none ${isDark ? "bg-gray-700 text-white placeholder-gray-400" : "bg-white text-black placeholder-gray-500"}`}
//                     />
//                   </div>
//                   {errors.userId && <p className="text-red-500 text-sm mt-1">{errors.userId.message}</p>}
//                 </div>

//                 {/* Email (Sign Up only) */}
//                 {mode === "signup" && (
//                   <>
//                    <div>
//                     <label className={`font-semibold ${isDark ? "text-gray-200" : "text-gray-700"}`}>Email</label>
//                     <div className={`relative flex items-center rounded-lg border-2 ${isDark ? "border-gray-600 bg-gray-700" : "border-gray-300 bg-white"}`}>
//                       <TfiEmail className="absolute left-3 text-gray-500 text-xl" />
//                       <input
//                         type="email"
//                         {...register("email", { required: "Email is required" })}
//                         placeholder="Email..."
//                         className={`w-full py-2 pl-10 pr-4 border-none focus:outline-none ${isDark ? "bg-gray-700 text-white placeholder-gray-300" : "bg-white text-black placeholder-gray-500"}`}
//                       />
//                     </div>
//                     {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
//                   </div>

//                   </>
//                 )}

//                 {/* Password */}
//                 <div>
//                   <label className={`font-semibold ${isDark ? "text-gray-200" : "text-gray-700"}`}>Password</label>
//                   <div className={`relative flex items-center rounded-lg border-2 ${isDark ? "border-gray-600 bg-gray-700" : "border-gray-300 bg-white"}`}>
//                     <MdLockOpen className="absolute left-3 text-gray-400 text-xl" />
//                     <input
//                       type={isPasswordVisible ? "text" : "password"}
//                       {...register("password", { required: "Password is required" })}
//                       placeholder="Password..."
//                       className={`w-full py-2 pl-10 pr-4 border-none focus:outline-none ${isDark ? "bg-gray-700 text-white placeholder-gray-400" : "bg-white text-black placeholder-gray-500"}`}
//                     />
//                     <div
//                       onClick={() => setIsPasswordVisible(!isPasswordVisible)}
//                       className="absolute right-3 text-gray-500 text-xl cursor-pointer"
//                     >
//                       {isPasswordVisible ? <FaRegEye /> : <FaRegEyeSlash />}
//                     </div>
//                   </div>
//                   {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
//                 </div>

//                 {/* Confirm Password (Sign Up only) */}
//                 {mode === "signup" && (
//                   <div>
//                     <label className={`font-semibold ${isDark ? "text-gray-200" : "text-gray-700"}`}>Confirm Password</label>
//                     <input
//                       type="password"
//                       {...register("confirmPassword", {
//                         required: "Please confirm your password",
//                         validate: (value) => value === watch("password") || "Passwords do not match",
//                       })}
//                       placeholder="Confirm Password..."
//                       className={`w-full py-2 px-4 border-2 rounded-lg focus:outline-none ${isDark ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400" : "bg-white border-gray-300 text-black placeholder-gray-500"}`}
//                     />
//                     {errors.confirmPassword && (
//                       <p className="text-red-500 text-sm mt-1">{errors.confirmPassword.message}</p>
//                     )}
//                   </div>
//                 )}

//                 {/* Login or SignUp Button */}
//                 <button
//                   type="submit"
//                   disabled={loading}
//                   className={`w-full flex items-center justify-center py-2 rounded-lg font-semibold 
//                               drop-shadow-[2px_2px_2px_rgba(0,0,0,0.6)] 
//                               ${isDark ? "text-white bg-yellow-600 hover:bg-yellow-700" : "text-black bg-[#FDC700] hover:bg-yellow-500"}`}
//                 >
//                   {loading ? (
//                     <FaSpinner className="animate-spin text-xl" />
//                   ) : mode === "login" ? "Login" : "Sign Up"}
//                 </button>


//                 {/* Divider */}
//                 <div className="flex items-center my-4">
//                   <div className="flex-grow h-px bg-gray-300"></div>
//                   <span className="px-4 text-gray-500 text-sm font-medium">or</span>
//                   <div className="flex-grow h-px bg-gray-300"></div>
//                 </div>

//                 {/* Google Login */}
//                 <button
//                   type="button"
//                   onClick={login}
//                   className={`w-full mt-4 flex items-center justify-center gap-2 py-2 px-4 border rounded-lg transition-all duration-150 ${
//     isDark
//       ? "bg-gray-700 border-gray-600 text-white hover:bg-gray-600"
//       : "bg-white border-gray-300 text-black hover:bg-gray-100"
//   }`}
//                 >
//                   <FcGoogle className="text-xl" />
//                   <span className="text-sm font-medium">Continue with Google</span>
//                 </button>
//                 {/* <section>
//                   <GoogleLogin
//                     onSuccess={(credential)=>{
//                       console.log("Google login");
//                       console.log(credential)
//                     }}
//                     onError={(err)=>{
//                       console.log("Google Login Error");
//                       console.log(err);
//                     }}
//                   >

//                   </GoogleLogin>
//                 </section> */}

//                 {/* Toggle Link */}
//                 <p className="text-center text-sm mt-4">
//                   {mode === "login" ? (
//                     <>
//                       Don't have an account?{" "}
//                       <span className="text-red-500 cursor-pointer" onClick={() => setMode("signup")}>
//                         Sign Up
//                       </span>
//                     </>
//                   ) : (
//                     <>
//                       Already have an account?{" "}
//                       <span className="text-blue-500 cursor-pointer" onClick={() => setMode("login")}>
//                         Login
//                       </span>
//                     </>
//                   )}
//                 </p>
//               </form>
//             </div>
//           </div>
//         </div>

//         </div>
    
//     </>
  
//   );
// }

// export default Index;


import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { FaRegEyeSlash, FaRegEye, FaSpinner } from "react-icons/fa";
import { MdLockOpen } from "react-icons/md";
import { LuCircleUserRound } from "react-icons/lu";
import { useGoogleLogin } from "@react-oauth/google";
import { FcGoogle } from "react-icons/fc";
import { Helmet } from "react-helmet-async";
import { useTheme } from "../../Components/Context/ThemeContext";
import { TfiEmail } from "react-icons/tfi";

function Index() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [mode, setMode] = useState("login"); // login | signup 
  const navigate = useNavigate();
  const { isDark } = useTheme();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      if (mode === "login") {
        console.log("Logging in with:", data);
        await new Promise((res) => setTimeout(res, 1500));
        navigate("/dashboard");
      } else {
        console.log("Signing up with:", data);
        await new Promise((res) => setTimeout(res, 1500));
        navigate("/dashboard");
      }
    } catch (error) {
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        console.log("Google token:", tokenResponse);
        navigate("/dashboard");
      } catch (err) {
        console.error("Login failed", err);
        alert("Google login failed. Please try again.");
      }
    },
    onError: (errorResponse) => {
      console.error("Google login error", errorResponse);
      alert("Google login failed. Please try again.");
    },
  });

  return (
    <>
      <Helmet>
        <title>
          {mode === "login"
            ? "Candidate Login - Test Portal"
            : "Candidate Sign Up - Test Portal"}
        </title>
        <meta
          name="description"
          content="Secure candidate login/signup page for the test portal."
        />
      </Helmet>

      {/* CENTERED FORM CONTAINER */}
      <div
        className={`rounded-md flex items-center justify-center ${
          isDark ? "bg-gray-900 text-white" : "bg-white text-black"
        }`}
      >
        <div className="w-full flex justify-center items-center p-6 relative">
          <div
            className={`rounded-lg p-8 w-full max-w-md min-h-[400px] relative
              ${
                isDark
                  ? "bg-gray-800 text-white shadow-[0_0_20px_4px_#ff7e00] border border-[#ff7e00]"
                  : "bg-white text-black shadow-[0px_4px_5px_5px_#393E46]"
              }`}
            style={{ borderRadius: "1rem" }}
          >
            {/* Rotated Text */}
            {mode === "login" ? (
              <h2 className="absolute right-[-74px] top-1/2 -translate-y-1/2 text-yellow-500 font-bold text-5xl rotate-90 z-10">
                Login
                <span
                  className="absolute inset-0 text-white"
                  style={{
                    clipPath:
                      "polygon(0% 0%, 100% 0%, 100% 65%, 0% 65%)",
                  }}
                >
                  Login
                </span>
              </h2>
            ) : (
              <h2 className="absolute right-[-95px] top-1/2 -translate-y-1/2 text-yellow-500 font-bold text-5xl rotate-90 z-10">
                Sign Up
                <span
                  className="absolute inset-0 text-white"
                  style={{
                    clipPath:
                      "polygon(0% 0%, 100% 0%, 100% 65%, 0% 65%)",
                  }}
                >
                  Sign Up
                </span>
              </h2>
            )}

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-4 mt-4"
            >
              {/* User Name */}
              <div>
                <label
                  className={`font-semibold ${
                    isDark ? "text-gray-200" : "text-gray-700"
                  }`}
                >
                  User Name
                </label>
                <div
                  className={`relative flex items-center rounded-lg border-2 ${
                    isDark
                      ? "border-gray-600 bg-gray-700"
                      : "border-gray-300 bg-white"
                  }`}
                >
                  <LuCircleUserRound className="absolute left-3 text-gray-400 text-xl" />
                  <input
                    type="text"
                    {...register("userId", {
                      required: "User ID is required",
                    })}
                    placeholder="User ID..."
                    className={`w-full py-2 pl-10 pr-4 border-none focus:outline-none ${
                      isDark
                        ? "bg-gray-700 text-white placeholder-gray-400"
                        : "bg-white text-black placeholder-gray-500"
                    }`}
                  />
                </div>
                {errors.userId && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.userId.message}
                  </p>
                )}
              </div>

              {/* Email */}
              {mode === "signup" && (
                <div>
                  <label
                    className={`font-semibold ${
                      isDark ? "text-gray-200" : "text-gray-700"
                    }`}
                  >
                    Email
                  </label>
                  <div
                    className={`relative flex items-center rounded-lg border-2 ${
                      isDark
                        ? "border-gray-600 bg-gray-700"
                        : "border-gray-300 bg-white"
                    }`}
                  >
                    <TfiEmail className="absolute left-3 text-gray-500 text-xl" />
                    <input
                      type="email"
                      {...register("email", {
                        required: "Email is required",
                      })}
                      placeholder="Email..."
                      className={`w-full py-2 pl-10 pr-4 border-none focus:outline-none ${
                        isDark
                          ? "bg-gray-700 text-white placeholder-gray-300"
                          : "bg-white text-black placeholder-gray-500"
                      }`}
                    />
                  </div>
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              )}

              {/* Password */}
              <div>
                <label
                  className={`font-semibold ${
                    isDark ? "text-gray-200" : "text-gray-700"
                  }`}
                >
                  Password
                </label>
                <div
                  className={`relative flex items-center rounded-lg border-2 ${
                    isDark
                      ? "border-gray-600 bg-gray-700"
                      : "border-gray-300 bg-white"
                  }`}
                >
                  <MdLockOpen className="absolute left-3 text-gray-400 text-xl" />
                  <input
                    type={isPasswordVisible ? "text" : "password"}
                    {...register("password", {
                      required: "Password is required",
                    })}
                    placeholder="Password..."
                    className={`w-full py-2 pl-10 pr-4 border-none focus:outline-none ${
                      isDark
                        ? "bg-gray-700 text-white placeholder-gray-400"
                        : "bg-white text-black placeholder-gray-500"
                    }`}
                  />
                  <div
                    onClick={() =>
                      setIsPasswordVisible(!isPasswordVisible)
                    }
                    className="absolute right-3 text-gray-500 text-xl cursor-pointer"
                  >
                    {isPasswordVisible ? <FaRegEye /> : <FaRegEyeSlash />}
                  </div>
                </div>
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.password.message}
                  </p>
                )}
              </div>

              {/* Confirm Password */}
              {mode === "signup" && (
                <div>
                  <label
                    className={`font-semibold ${
                      isDark ? "text-gray-200" : "text-gray-700"
                    }`}
                  >
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    {...register("confirmPassword", {
                      required: "Please confirm your password",
                      validate: (value) =>
                        value === watch("password") ||
                        "Passwords do not match",
                    })}
                    placeholder="Confirm Password..."
                    className={`w-full py-2 px-4
                       border-2 rounded-lg focus:outline-none ${
                      isDark
                        ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                        : "bg-white border-gray-300 text-black placeholder-gray-500"
                    }`}
                  />
                  {errors.confirmPassword && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.confirmPassword.message}
                    </p>
                  )}
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className={`w-full flex items-center justify-center py-2 rounded-lg font-semibold 
                            drop-shadow-[2px_2px_2px_rgba(0,0,0,0.6)] 
                            ${
                              isDark
                                ? "text-white bg-yellow-600 hover:bg-yellow-700"
                                : "text-black bg-[#FDC700] hover:bg-yellow-500"
                            }`}
              >
                {loading ? (
                  <FaSpinner className="animate-spin text-xl" />
                ) : mode === "login" ? (
                  "Login"
                ) : (
                  "Sign Up"
                )}
              </button>

              {/* Divider */}
              <div className="flex items-center my-4">
                <div className="flex-grow h-px bg-gray-300"></div>
                <span className="px-4 text-gray-500 text-sm font-medium">
                  or
                </span>
                <div className="flex-grow h-px bg-gray-300"></div>
              </div>

              {/* Google Login */}
              <button
                type="button"
                onClick={login}
                className={`w-full mt-4 flex items-center justify-center gap-2 py-2 px-4 border rounded-lg transition-all duration-150 ${
                  isDark
                    ? "bg-gray-700 border-gray-600 text-white hover:bg-gray-600"
                    : "bg-white border-gray-300 text-black hover:bg-gray-100"
                }`}
              >
                <FcGoogle className="text-xl" />
                <span className="text-sm font-medium">
                  Continue with Google
                </span>
              </button>

              {/* Toggle */}
              <p className="text-center text-sm mt-4">
                {mode === "login" ? (
                  <>
                    Don't have an account?{" "}
                    <span
                      className="text-red-500 cursor-pointer"
                      onClick={() => setMode("signup")}
                    >
                      Sign Up
                    </span>
                  </>
                ) : (
                  <>
                    Already have an account?{" "}
                    <span
                      className="text-blue-500 cursor-pointer"
                      onClick={() => setMode("login")}
                    >
                      Login
                    </span>
                  </>
                )}
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;



