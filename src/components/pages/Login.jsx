import { Link } from 'react-router-dom';
function Login() {
  const handleLogin = (e) => {
    e.preventDefault();
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh]">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form className="card-body" onSubmit={handleLogin}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <Link
                to="/forgotPassword"
                className="label-text-alt link link-hover"
              >
                Forgot password?
              </Link>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
          <p className="mt-2">
            Don't have an account?{' '}
            <Link to="/register" className="text-[blue]">
              Register here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
