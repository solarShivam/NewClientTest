import axios from "axios";
axios.defaults.withCredentials = true;
export const csq = async (setCandidateQualification)=>{
    try {
        const response = await axios.get(`${import.meta.env.VITE_SERVER_ADDRESS}/candidate/show-qualifications`);
        setCandidateQualification(response?.data?.data);
    } catch (error) {
        console.log("Enable to fetch Qualification Candidate data", error)
    }
}