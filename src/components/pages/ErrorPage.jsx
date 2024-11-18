import { Link } from 'react-router-dom';

function ErrorPage() {
  return (
    <div className="flex flex-col gap-16 items-center justify-around py-20 h-screen text-center">
      <div className='flex flex-col gap-2 items-center justify-center'>
        <img
          className="w-[80vw] max-w-[400px]"
          src="https://cdn3d.iconscout.com/3d/premium/thumb/404-error-11675546-9496341.png"
          alt="Page not found"
        />
        <h1 className="text-red-400 font-bold text-4xl">
          Page Not Found
        </h1>
      </div>
      <button className="btn btn-outline btn-success">
        <Link to="/">Back to Home</Link>
      </button>
    </div>
  );
}

export default ErrorPage;
