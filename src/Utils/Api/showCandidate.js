import axios from "axios";
axios.defaults.withCredentials = true;

export const showCandidates = async (status, setCandidates) => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_SERVER_ADDRESS}/admin/show-registeredCandidate`, {
      params: { status },
    });

    console.log("my response of register candidate api ", response.data.data);

    if (response?.data?.success) {
      setCandidates(response.data.data);
    } else {
      console.error("Failed to fetch candidates");
    }
  } catch (error) {
    console.error("API error:", error);
  }
};

// 👇 New function to get candidate by ID
export const getCandidateById = async (id, setSelectedCandidate) => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_SERVER_ADDRESS}/admin/show-registeredCandidate`, {
        params: { id },
      });
      if (response?.data?.success) {
        setSelectedCandidate(response.data.data[0]); // assuming one result
      }
    } catch (error) {
      console.error("Failed to fetch candidate by ID", error);
    }
  };
