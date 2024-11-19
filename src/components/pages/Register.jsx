import { Link } from 'react-router-dom';
function Register() {
  const handleRegister = (e) => {
    e.preventDefault();
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh]">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form className="card-body" onSubmit={handleRegister}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="your name"
              className="input input-bordered"
              required
            />
          </div>
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
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Register</button>
          </div>
          <p className="mt-2">
            Already have an account?{' '}
            <Link to="/login" className="text-[blue]">
              Login here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;
