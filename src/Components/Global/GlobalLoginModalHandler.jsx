
import { useEffect } from "react";
import { useLoginModal } from "../../Components/Context/LoginModalContext";

export default function GlobalLoginModalHandler() {
  const { openModal } = useLoginModal();

  useEffect(() => {
    const handleClick = (e) => {
      const target = e.target.closest("[data-login-modal]");
      if (target) {
        e.preventDefault();
        openModal();
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [openModal]);

  return null;
}
