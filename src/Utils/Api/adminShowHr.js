import axios from "axios";
axios.defaults.withCredentials = true;
export const adminShowHr = async (setHrName)=>{
    try {
        const response = await axios.get(`${import.meta.env.VITE_SERVER_ADDRESS}/admin/show-HR`);
        setHrName(response?.data?.data);
    } catch (error) {
        console.log("Enable to fetch Hr Name data", error)
    }
}