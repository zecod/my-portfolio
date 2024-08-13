const Notfound = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center flex-wrap gap-5">
      <h1 className="text-3xl font-semibold">404</h1>
      <div className="w-[1px] h-[40px] bg-gray-300"></div>
      <p>This page could not be found.</p>
    </div>
  );
};

export default Notfound;
