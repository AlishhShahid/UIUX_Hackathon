"use client";
import React from "react";
import BillingInfo from "../components/BillingInfo";
import RentalInfo from "../components/RentalInfo";
import Payment from "../components/Payment";
import Confirmation from "../components/Confirmation";
import Image from "next/image";

const payment = () => {
  return (
    <div className="flex justify-center lg:justify-start mb-16  sm:p-6 flex-col lg:flex-row">
      <div className="w-full lg:w-7/12 mx-auto lg:mx-0 p-4">
        <div className="space-y-8">
          <BillingInfo />
          <RentalInfo />
          <Payment />
          <Confirmation />
        </div>
      </div>

      <div className="rental-summary mt-5 w-full lg:w-1/3 lg:ml-8 ">
        <Image
          src={"/Rental Summary.png"}
          alt="Rental Summary"
          width={492}
          height={568}
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};

export default payment;
