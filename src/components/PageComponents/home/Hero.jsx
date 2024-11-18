function Hero() {
  return (
    <div className="flex items-center justify-around w-[80vw] mx-auto h-[80vh]">
      <img
        className=""
        src="https://img.freepik.com/premium-vector/multilingual-world-2d-vector-isolated-illustration_151150-9916.jpg?semt=ais_hybrid"
        alt=""
      />
      <div className="flex flex-col gap-3 w-[40%] max-w-[600px] text-center mx-auto">
        <h1 className="text-3xl lg:text-5xl font-bold my-8">
          The free, fun, and effective way to learn a language!
        </h1>
        <button className="btn btn-primary">GET STARTED</button>
        <button className="btn btn-primary btn-outline">
          I ALREADY HAVE AN ACCOUNT
        </button>
      </div>
    </div>
  );
}

export default Hero;
