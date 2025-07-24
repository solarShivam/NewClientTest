
import { createContext, useContext, useState, useEffect } from 'react';

const TestContext = createContext();

export const useTest = () => useContext(TestContext);

export const TestProvider = ({ children }) => {
  // Initialize state from localStorage if available
  const [candidateId, setCandidateId] = useState(() => localStorage.getItem('candidateId'));
  const [testId, setTestId] = useState(() => localStorage.getItem('testId'));
  const [totalDuration, setTotalDuration] = useState(() => localStorage.getItem('totalDuration'));
  const [capturedImage, setCapturedImage] = useState(() => localStorage.getItem('capturedImage'));

  // Update localStorage whenever candidateId changes
  useEffect(() => {
    if (candidateId !== null) {
      localStorage.setItem('candidateId', candidateId);
    } else {
      localStorage.removeItem('candidateId');
    }
  }, [candidateId]);

  // Update localStorage whenever testId changes
  useEffect(() => {
    if (testId !== null) {
      localStorage.setItem('testId', testId);
    } else {
      localStorage.removeItem('testId');
    }
  }, [testId]);

  // Update localStorage whenever totalDuration changes
  useEffect(() => {
    if (totalDuration !== null) {
      localStorage.setItem('totalDuration', totalDuration);
    } else {
      localStorage.removeItem('totalDuration');
    }
  }, [totalDuration]);

  useEffect(() => {
  if (capturedImage !== null) {
    localStorage.setItem('capturedImage', capturedImage);
  } else {
    localStorage.removeItem('capturedImage');
  }
}, [capturedImage]);

  // Clear test data completely
  const clearTestData = () => {
    localStorage.removeItem('candidateId');
    localStorage.removeItem('testId');
    localStorage.removeItem('totalDuration');

    setCandidateId(null);
    setTestId(null);
    setTotalDuration(null);
  };

  return (
    <TestContext.Provider
      value={{
        candidateId,
        setCandidateId,
        testId,
        setTestId,
        totalDuration,
        setTotalDuration,
        capturedImage,
        setCapturedImage,
        clearTestData, // expose the function
      }}
    >
      {children}
    </TestContext.Provider>
  );
};