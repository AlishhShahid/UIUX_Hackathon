import PickupSection from "./PickupSection";
import DropoffSection from "./DropoffSection";

function Third() {
  return (
    <div className="flex items-center justify-between px-8 py-6 bg-white rounded-lg shadow-md w-full">

      <div className="flex-shrink-0">
        <PickupSection />
      </div>

      <div className="mx-8">
        <img src="/Switch.png" alt="icon"/>
      </div>

      <div className="flex-shrink-0">
        <DropoffSection />
      </div>
    </div>
  );
}

export default Third;
