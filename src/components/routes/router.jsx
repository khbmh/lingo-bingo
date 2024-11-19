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
{
  /* <NavLink to="/home">Home</NavLink>
<NavLink to="/start-learning">Start Learning</NavLink>
<NavLink to="/tutorials">Tutorials</NavLink>
<NavLink to="/about-us">About Us</NavLink> */
}
const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <MainLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: '/',
          element: <Home />,
          // loader: teamLoader,
        },
        {
          path: 'login',
          element: <Login />,
          // loader: teamLoader,
        },
        {
          path: 'forgotPassword',
          element: <ForgotPass />,
          // loader: teamLoader,
        },
        {
          path: 'register',
          element: <Register />,
          // loader: teamLoader,
        },
        {
          path: 'about-us',
          element: <AboutUs />,
          // loader: teamLoader,
        },
        {
          path: 'tutorials',
          element: <Tutorials />,
          // loader: teamLoader,
        },
        {
          path: 'start-learning',
          element: <StartLearning />,
          // loader: teamLoader,
        },
        {
          path: 'profile',
          element: <Profile />,
          // loader: teamLoader,
        },
        {
          path: '/',
          element: <Home />,
          // loader: teamLoader,
        },
      ],
    },
  ],
  {
    future: {
      v7_startTransition: true,
    },
  },
);

export default router;
