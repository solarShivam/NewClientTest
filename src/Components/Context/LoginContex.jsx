import { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { removeCookie, setCookie, getCookie } from '../../Utils/cookies';
axios.defaults.withCredentials = true;

// Create context
const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [empData, setEmpData] = useState(null);
  const navigate = useNavigate();

  // Restore auth state on load (if cookies exist)
  useEffect(() => {
    const storedEmpData = getCookie('empData');
    if (storedEmpData) {
      setEmpData(JSON.parse(storedEmpData));
    }
  }, []);
  
const role = empData?.role || null; 
  
  // Login API call
 const loginAPI = async (loginData, setError, setLoading) => {
  setLoading(true);
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_SERVER_ADDRESS}/admin/login`,
      loginData
    );

    const resData = response.data;
    console.log("my login response 12", resData);

    if (resData.success) {
      const data = resData.data;
      const token = resData.token || "dummy-token"; // use real token if your backend returns it

      setCookie('token', token, { expires: 0.5 }); // adjust as needed
      setCookie('empData', JSON.stringify(data));
      setCookie('startCnt', 0);
      setCookie('endCnt', 120);

      setEmpData(data);

      return { success: true };
    } else {
      return { success: false, errorMsg: resData.message || "Login failed." };
    }
  } catch (error) {
    const errorMsg = error.response?.data?.message || "Login failed. Please try again.";
    setError(errorMsg);
    return { success: false, errorMsg };
  } finally {
    setLoading(false);
  }
};



  // Logout API call
  const logoutAPI = async (setError) => {
    try {
      await axios.get(`${import.meta.env.VITE_SERVER_ADDRESS}/admin/logout`);

      // Clear cookies and state
      removeCookie('token');
      removeCookie('empData');
      removeCookie('startCnt');
      removeCookie('endCnt');

      setEmpData(null);
      navigate('/');

      return true;
    } catch (error) {
      console.error("Logout Error:", error);
      setError(error.response?.data?.message || "Logout failed. Please try again.");
      return false;
    }
  };


  return (
    <AuthContext.Provider value={{ loginAPI, logoutAPI,  empData, setEmpData, role }}>
      {children}
    </AuthContext.Provider>
  );
};
