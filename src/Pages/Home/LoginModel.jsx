import React from "react";
import { useLoginModal } from "../../Components/Context/LoginModalContext";
import CandidateLogin from "../Candidate/CandidateLogin";

export default function LoginModal() {
  const { isOpen, closeModal } = useLoginModal();
  if (!isOpen) return null;

  return (
    <div   
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50 mt-4"
      // onClick={closeModal} 
    >
      <div
        className="bg-white dark:bg-black rounded-lg shadow-lg max-w-md w-full relative"
        onClick={(e) => e.stopPropagation()} 
      >
        <button
          className=" cursor-pointer absolute top-2 right-2 text-gray-600 hover:text-black dark:hover:text-white z-50"

          onClick={(e) => {
            e.stopPropagation(); 
            closeModal();
          }}
        >
          ✕
        </button>
        <CandidateLogin />
      </div>
    </div>
  );    

  
}




