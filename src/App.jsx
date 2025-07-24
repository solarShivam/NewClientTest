
import { LoginModalProvider } from "./Components/Context/LoginModalContext";
import LoginModal from "./Pages/Home/LoginModel";
import GlobalLoginModalHandler from "./Components/Global/GlobalLoginModalHandler";
import Router from './Components/Router/index'
import CreateProfile from './Pages/ProfileSection/CreateProfile'
function App() {
  return (
    <LoginModalProvider>
      <GlobalLoginModalHandler />
      <LoginModal />
      <Router />
    </LoginModalProvider>

    // <CreateProfile />
  );
}

export default App;


