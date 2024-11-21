import { Outlet } from 'react-router-dom';
import Navbar from '../common/Navbar';
import Footer from '../common/Footer';
import ScrollToTop from '../scrolling/ScrollToTop';

function MainLayout() {
  return (
    <>
      <Navbar />
      <div className="min-h-[90vh]">
        <ScrollToTop />
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default MainLayout;
