import axios from "axios";
axios.defaults.withCredentials = true;
export const showPositionCandidate = async (setShowPositionCandidate)=>{
    try {
        const response = await axios.get(`${import.meta.env.VITE_SERVER_ADDRESS}/candidate/show-positions`);
        setShowPositionCandidate(response?.data?.data);
    } catch (error) {
        console.log("Enable to fetch Position Candidate data", error)
    }
}