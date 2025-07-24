import axios from "axios";
axios.defaults.withCredentials = true;
export const showRegisterCandidate = async (setRegisterCandidateData, status)=>{
    try {
        const response = await axios.get(`${import.meta.env.VITE_SERVER_ADDRESS}/admin/show-qualifications`);
        setQualificationData(response?.data?.data);
    } catch (error) {
        console.log("Enable to fetch Qualification data", error)
    }
}