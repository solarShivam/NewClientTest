
import Header from '../../Pages/Home/Header';
import Footer from '../../Pages/Home/Footer';
import { Outlet, useNavigate } from 'react-router-dom';

const PublicLayout = () => {
    
  const navigate=useNavigate();
  
    const handleLoginClick = () => {
    navigate("/candidatelogin");
  };

  const handleAdminClick = () => {
    navigate("/adminLogin");
  };
  return (
    <div className="min-h-screen flex flex-col">
     <Header handleLoginClick={handleLoginClick} handleAdminClick={handleAdminClick} />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default PublicLayout;
