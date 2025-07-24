import axios from "axios";
axios.defaults.withCredentials = true;
export const showPositionAdmin = async (setPositionData)=>{
    try {
        const response = await axios.get(`${import.meta.env.VITE_SERVER_ADDRESS}/admin/show-positions`);
        setPositionData(response?.data?.data);
    } catch (error) {
        console.log("Enable to fetch Admin Position data", error)
    }

}