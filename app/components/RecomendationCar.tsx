import Link from "next/link";
import CarRentalCard from "./CarRentalCard";

function RecomendationCar() {
  return (
    <div className="px-8 py-8 bg-white relative">
      <h2 className="text-[16px] font-semibold text-[#90A3BF] mb-6">
        Recommendation Car
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-4 gap-x-6 gap-y-8 mb-12">
        <CarRentalCard
          name="All New Rush"
          type="SUV"
          image1="/05.png"
          image2="/Spesification4.png"
          price="$72.00"
          cutPrice="$80.00"
        />

        <CarRentalCard
          name="CR  - V"
          type="SUV"
          image1="/06.png"
          image2="/Spesification5.png"
          price="$80.00"
          cutPrice=" "
        />

        <CarRentalCard
          name="All New Terios"
          type="SUV"
          image1="/07.png"
          image2="/Spesification6.png"
          price="$74.00"
          cutPrice=" "
        />

        <CarRentalCard
          name="CR  - V"
          type="SUV"
          image1="/08.png"
          image2="/Spesification7.png"
          price="$80.00"
          cutPrice=" "
        />

        <CarRentalCard
          name="MG ZX Exclusice"
          type="Hatchback"
          image1="/09.png"
          image2="/Spesification8.png"
          price="$76.00"
          cutPrice="$80.00"
        />

        <CarRentalCard
          name="New MG ZS"
          type="SUV"
          image1="/10.png"
          image2="/Spesification5.png"
          price="$80.00"
          cutPrice=" "
        />

        <CarRentalCard
          name="MG ZX Excite"
          type="Hatchback"
          image1="/11.png"
          image2="/Spesification9.png"
          price="$74.00"
          cutPrice=" "
        />

        <CarRentalCard
          name="New MG ZS"
          type="SUV"
          image1="/12.png"
          image2="/Spesification7.png"
          price="$80.00"
          cutPrice=" "
        />
      </div>

      <div className="flex justify-center py-2 sm:py-28">
        <Link href={"/category"}>
          <button className="px-6 py-3 font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600">
            Show more cars
          </button>
        </Link>

        <p className="absolute right-8 text-[#90A3BF] text-14px font-medium">
          120 Car
        </p>
      </div>
    </div>
  );
}

export default RecomendationCar;
