import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from '../pages/ErrorPage';
import Home from '../pages/Home';
import MainLayout from '../Layout/MainLayout';
import Profile from '../pages/Profile';
import StartLearning from '../pages/StartLearning';
import Tutorials from '../pages/Tutorials';
import AboutUs from '../pages/AboutUs';
import Register from '../pages/Register';
import Login from '../pages/Login';
import ForgotPass from '../pages/ForgotPass';
import SingleLesson from '../pages/SingleLesson';
import PrivateRoute from '../privateRoute/PrivateRoute';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'forgotPassword',
        element: <ForgotPass />,
      },
      {
        path: 'register',
        element: <Register />,
      },
      {
        path: 'about-us',
        element: <AboutUs />,
      },
      {
        path: 'tutorials',
        element: (
          <PrivateRoute>
            <Tutorials />,
          </PrivateRoute>
        ),
      },
      {
        path: 'start-learning',
        element: <StartLearning />,
      },
      {
        path: `lessons/:url`,
        element: (
          <PrivateRoute>
            <SingleLesson />
          </PrivateRoute>
        ),
      },
      {
        path: 'profile',
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: '/',
        element: <Home />,
      },
    ],
  },
]);

export default Router;
