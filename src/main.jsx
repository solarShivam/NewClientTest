import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, HashRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { ThemeProvider } from "./Components/Context/ThemeContext.jsx";
import { AuthProvider } from "./Components/Context/LoginContex.jsx";
import { LoginModalProvider } from "./Components/Context/LoginModalContext";
const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;
// const clientSecret = import.meta.env.VITE_GOOGLE_CLIENT_SECRET;

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HashRouter>
      <LoginModalProvider>
        <ThemeProvider>
          <GoogleOAuthProvider clientId={clientId}>
            {/* <BrowserRouter> */}
              <HelmetProvider>
                <AuthProvider>
                  <App />
                </AuthProvider>
              </HelmetProvider>
            {/* </BrowserRouter> */}
          </GoogleOAuthProvider>
        </ThemeProvider>
      </LoginModalProvider>
    </HashRouter>
  </StrictMode>
);
