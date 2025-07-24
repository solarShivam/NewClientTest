import axios from "axios";
axios.defaults.withCredentials = true;
export const showAssignTest = async (setAssignTestData)=>{
    try {
        const response = await axios.get(`${import.meta.env.VITE_SERVER_ADDRESS}/admin/show-assignableTests`);
        setAssignTestData(response?.data?.data);
    } catch (error) {
        console.log("Enable to fetch Admin Assign  data", error)
    }

}