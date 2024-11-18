function Heading({ title, description }) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 text-center max-w-[650px] px-2 my-5">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="">{description}</p>
    </div>
  );
}

export default Heading;
