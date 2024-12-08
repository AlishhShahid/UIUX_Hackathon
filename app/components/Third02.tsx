import PickupSection from "./PickupSection";
import DropoffSection from "./DropoffSection";

function Third02() {
  return (
    <div className="flex items-center justify-between px-6 py-5 bg-white rounded-lg shadow-md w-full max-w-7xl mx-auto">

      <div className="flex-shrink-0 w-1/3">
        <PickupSection />
      </div>

      <div className="flex items-center justify-center ml-44 ">
        <img src="/Switch.png" alt="switch icon" className="" />
      </div>

      <div className="flex-shrink-0 w-1/3">
        <DropoffSection />
      </div>
    </div>
  );
}

export default Third02;




