function PopularCars() {
    return (
      <div className="px-8 py-6">

        <div className="flex items-center justify-between mb-6">
          <h2 className="text-16px font-semibold text-[#90A3BF]">Popular Car</h2>
          <button className="text-16px font-medium text-[#3563E9] hover:underline">
            View All
          </button>
        </div>
  
        <div className="grid grid-cols-4 gap-6">
          <img
            src="/Catalog 1.png"
            alt="Catalog 1"
            className="w-full h-auto rounded-lg shadow-md"
          />
          <img
            src="/Catalog 2.png"
            alt="Catalog 2"
            className="w-full h-auto rounded-lg shadow-md"
          />
          <img
            src="/Catalog 3.png"
            alt="Catalog 3"
            className="w-full h-auto rounded-lg shadow-md"
          />
          <img
            src="/Catalog 4.png"
            alt="Catalog 4"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
      </div>
    );
  }
  
  export default PopularCars;
  