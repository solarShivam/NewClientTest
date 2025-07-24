import axios from "axios";
axios.defaults.withCredentials = true;
export const candidateShowHr = async (setHrName)=>{
    try {
        const response = await axios.get(`${import.meta.env.VITE_SERVER_ADDRESS}/candidate/show-HR`);
        setHrName(response?.data?.data);
    } catch (error) {
        console.log("Enable to fetch Hr Name data", error)
    }
}