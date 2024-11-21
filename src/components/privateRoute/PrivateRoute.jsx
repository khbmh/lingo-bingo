import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AllContext } from '../context/AllContext';

const PrivateRoute = ({ children }) => {
  const { user, userLoading } = useContext(AllContext);
  const location = useLocation();
  if (userLoading) {
    return (
      <div className="h-[30vh] w-full flex items-center justify-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }
  if (!user) {
    return <Navigate to="/login" state={location.pathname} replace />;
  }

  return children;
};

export default PrivateRoute;
