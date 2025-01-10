import Link from "next/link";
import CarRentalCard from "./CarRentalCard";

function PopularCars() {
  return (
    <div className="px-8 py-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-16px font-semibold text-[#90A3BF]">Popular Car</h2>

        <Link href={"/category"}>
          <button className="text-16px font-medium text-[#3563E9] hover:underline">
            View All
          </button>
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
        <CarRentalCard
          name="Koenigsegg"
          type="Sport"
          image1="/01.png"
          image2="/Spesification1.png"
          price="$99.00"
          cutPrice=""
        />

        <CarRentalCard
          name="Nissan GT - R"
          type="Sport"
          image1="/02.png"
          image2="/Spesification2.png"
          price="$80.00"
          cutPrice="$100.00"
        />

        <CarRentalCard
          name="Rolls - Royce"
          type="Sedan"
          image1="/03.png"
          image2="/Spesification3.png"
          price="$96.00"
          cutPrice=""
        />

        <CarRentalCard
          name="Nissan GT - R"
          type="Sport"
          image1="/04.png"
          image2="/Spesification2.png"
          price="$80.00"
          cutPrice="$100.00"
        />
      </div>
    </div>
  );
}

export default PopularCars;
