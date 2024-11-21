import { Link } from 'react-router-dom';
import 'animate.css';

function Hero() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-around w-[80vw] mx-auto h-[86vh] py-[5vh] mb-7">
      <img
        className="animate__animated animate__zoomIn"
        src="https://img.freepik.com/premium-vector/multilingual-world-2d-vector-isolated-illustration_151150-9916.jpg?semt=ais_hybrid"
        alt=""
      />
      <div className="flex flex-col gap-3 lg:w-[40%] max-w-[600px] text-center mx-auto lg:-mt-[7vh]">
        <h1 className="animate__animated animate__zoomIn text-3xl lg:text-5xl font-bold my-8">
          The free, fun, and effective way to{' '}
          <span className="text-[blue]">learn</span> a language!
        </h1>
        <Link to="/register" className="animate__animated animate__slideInUp btn btn-primary text-white w-full">
          GET STARTED
        </Link>
        <Link to="/login" className="animate__animated animate__slideInUp btn btn-primary btn-outline w-full">
          I ALREADY HAVE AN ACCOUNT
        </Link>
      </div>
    </div>
  );
}

export default Hero;
