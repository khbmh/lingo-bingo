import { Outlet } from 'react-router-dom';
import Navbar from '../common/Navbar';
import Footer from '../common/Footer';

function MainLayout() {
  return (
    <>
      <Navbar />
      <div className="min-h-[90vh]">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default MainLayout;
