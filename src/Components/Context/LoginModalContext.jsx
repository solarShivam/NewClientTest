import React, { createContext, useContext, useState } from "react";

const LoginModalContext = createContext();

export const useLoginModal = () => useContext(LoginModalContext);

export const LoginModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => {
    // console.log("closeModal function called");
    setIsOpen(false);
};


  return (
    <LoginModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
    </LoginModalContext.Provider>
  );
};
