import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  // Home, start-learning, tutorials,  about-us
  const user = true;
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
    <div className="z-30">
      <div className="navbar bg-base-100 border-b">
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
        <div className="navbar-end space-x-3">
          <Link to="/login" className="btn btn-primary">
            Login
          </Link>
          <Link to="/register" className="btn btn-outline btn-primary">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
