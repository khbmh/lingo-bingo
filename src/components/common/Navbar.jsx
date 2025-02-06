import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AllContext } from '../context/AllContext';

function Navbar() {
  // Home, start-learning, tutorials,  about-us
  const { user, logOut, userLoading } = useContext(AllContext);
  const shortName = (name) => {
    return name.split(' ')[0];
  };
  const menu = (
    <ul className="flex z-40 flex-col lg:flex-row gap-3 lg:gap-6 xl:gap-10 font-semibold p-4 lg:p-0">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/start-learning">Start Learning</NavLink>
      <NavLink to="/tutorials">Tutorials</NavLink>
      <NavLink to="/about-us">About Us</NavLink>
      {user && <NavLink to="/profile">Profile</NavLink>}
    </ul>
  );

  return (
    <div className="h-[10vh] md:h-[7vmin] lg:h-[8vmin]">
      <div
        className={`navbar backdrop-blur-md border-b fixed w-full top-0 z-30`}
      >
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm z-[300] dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow"
            >
              {menu}
            </ul>
          </div>

          <Link to="/" className="text-xl font-black font-mono">
            Lingo Bingo
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{menu}</ul>
        </div>
        {!user ? (
          <div className={`${userLoading && 'invisible'} navbar-end space-x-3`}>
            <Link to="/login" className="btn btn-primary text-white">
              Login
            </Link>
            <Link to="/register" className="btn btn-outline btn-primary">
              Register
            </Link>
          </div>
        ) : (
          <div className={`${userLoading && 'invisible'} navbar-end space-x-3`}>
            <Link
              to="/profile"
              className="mx-2 text-[blue] font-semibold text-sm lg:text-xl"
            >
              👋 {shortName(user.displayName)}
            </Link>
            <p onClick={logOut} className="btn btn-outline btn-primary">
              LogOut
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
