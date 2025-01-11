"use client";

import SideBar from "../components/SideBar";
import Image from "next/image";
import Link from "next/link";
import CarRentalCard from "../components/CarRentalCard";

export default function page() {
  return (
    <div>
      <div className="w-full flex">
        <div className="first hidden sm:flex w-[25%]">
          <SideBar />
        </div>
        <div className="sec w-full sm:w-[75%] bg-[#f6f7f9] p-4 sm:p-6  flex flex-col gap-10 font-[family-name:var(--font-geist-sans)]">
          <section className=" w-full flex flex-col md:flex-row gap-5  items-center justify-around">
            <div className="first flex flex-col gap-4 w-full  lg:max-w-[470px]  lg:max-h-[508px]">
              <div>
                <Image src={"/View.png"} alt="" width={492} height={360} />
              </div>
              <div className=" flex items-center justify-between gap-2 lg:gap-2">
                <Image src={"/View 1.png"} alt="" width={148} height={124} />
                <Image src={"/View 2.png"} alt="" width={148} height={124} />
                <Image src={"/View 3.png"} alt="" width={148} height={124} />
              </div>
            </div>
            <div className="flex flex-col w-full  lg:max-w-[492px] h-auto lg:max-h-[508px] bg-white justify-between rounded-xl shadow-md">
              <Image
                src={"/Detail Car (1).png"}
                alt="Detail Car"
                width={492}
                height={508}
                className="w-full h-auto rounded-t-xl object-cover"
              />

              <div className="p-4 flex  items-center gap-4">
                <div className="flex items-center justify-between w-full">
                  <h1 className="font-bold text-lg sm:text-xl lg:text-2xl">
                    $80.00 /{" "}
                    <span className="text-gray-500 text-sm lg:text-base">
                      day $100.00
                    </span>
                  </h1>
                </div>
                <Link href={"/payment"}>
                  <button className="bg-[#3563e9] hover:bg-[#264ac6] transition-all p-3 sm:p-4 px-6 sm:px-10 text-nowrap  text-white rounded-md w-full max-w-[180px] text-center">
                    Rent Now
                  </button>
                </Link>
              </div>
            </div>
          </section>
          <section className=" w-full flex items-center justify-center">
            <Image
              src={"/Reviews.png"}
              alt=""
              width={1010}
              height={452}
              className=" hidden md:flex"
            />
            <Image
              src={"/Reviews (1).png"}
              alt=""
              width={492}
              height={384}
              className=" md:hidden"
            />
          </section>

          <div className="px-8 py-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-16px font-semibold text-[#90A3BF]">
                Recent Car
              </h2>

              <Link href={"/category"}>
                <button className="text-16px font-medium text-[#3563E9] hover:underline">
                  View All
                </button>
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
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
            </div>
          </div>

          <div className="px-8 py-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-16px font-semibold text-[#90A3BF]">
                Recommendation Car
              </h2>

              <Link href={"/category"}>
                <button className="text-16px font-medium text-[#3563E9] hover:underline">
                  View All
                </button>
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
