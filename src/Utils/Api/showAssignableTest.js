import axios from "axios";
axios.defaults.withCredentials = true;

export const showAssignableTest = async (candidateId, setAssignableTestData) => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_SERVER_ADDRESS}/admin/show-assignedTest`, {
            params: { candidateId }  // ✅ Send candidateId as query param
        });
        setAssignableTestData(response?.data?.data);
    } catch (error) {
        console.log("Unable to fetch Show Assignable Test data", error);
    }
}
