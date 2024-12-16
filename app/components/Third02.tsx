import PickupSection from "./PickupSection";
import DropoffSection from "./DropoffSection";

function Third02() {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between px-2 py-5 sm:mr-44 mr-96">

      <div className="flex-shrink-0 w-1/3">
        <PickupSection />
      </div>

      <div className="flex items-center justify-center ml-44 ">
        <img src="/Switch.png" alt="switch icon" className="w-40 h-20" />
      </div>

      <div className="flex-shrink-0 w-1/3">
        <DropoffSection />
      </div>
    </div>
  );
}

export default Third02;
