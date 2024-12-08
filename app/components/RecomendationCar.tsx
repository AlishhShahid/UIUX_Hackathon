function RecomendationCar() {
    return (
      <div className="px-8 py-8 bg-white relative">
        
        <h2 className="text-[16px] font-semibold text-[#90A3BF] mb-6">Recommendation Car</h2>
  
        
  
        
        <div className="grid grid-cols-4 gap-x-6 gap-y-8 mb-12">
          <div>
            <img src="/1.png" alt="01" className="w-full h-auto rounded-lg shadow-sm" />
          </div>
          <div>
            <img src="/2.png" alt="02" className="w-full h-auto rounded-lg shadow-sm" />
          </div>
          <div>
            <img src="/3.png" alt="03" className="w-full h-auto rounded-lg shadow-sm" />
          </div>
          <div>
            <img src="/4.png" alt="04" className="w-full h-auto rounded-lg shadow-sm" />
          </div>
          <div>
            <img src="/5.png" alt="05" className="w-full h-auto rounded-lg shadow-sm" />
          </div>
          <div>
            <img src="/6.png" alt="06" className="w-full h-auto rounded-lg shadow-sm" />
          </div>
          <div>
            <img src="/7.png" alt="07" className="w-full h-auto rounded-lg shadow-sm" />
          </div>
          <div>
            <img src="/8.png" alt="08" className="w-full h-auto rounded-lg shadow-sm" />
          </div>
        </div>
  
        <div className="flex justify-center py-28">
          <button className="px-6 py-3 bg-[#3563E9] font-semibold text-white text-16px rounded shadow-md hover:bg-blue-600">
            Show more car
          </button>

          <p className="absolute right-8 text-[#90A3BF] text-14px font-medium">120 Car</p>
        </div>
      </div>
    );
  }
  
  export default RecomendationCar;
  
  
  
  


