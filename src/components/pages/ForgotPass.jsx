function ForgotPass() {
  const handleReset = (e) => {
    e.preventDefault();
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh]">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form className="card-body" onSubmit={handleReset}>
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

          <div className="form-control mt-6">
            <button className="btn btn-primary">Send Reset Link</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ForgotPass;
