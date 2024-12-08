import { Search, Settings2 } from "lucide-react"; 

function Navbar() {
  return (
    <div className="flex items-center justify-between px-8 py-4 bg-white shadow-md">

      <div className="text-3xl font-bold text-[#3563E9] tracking-wide">MORENT</div>

      <div className="relative flex items-center w-[450px] ml-[-100px]">
     
        <Search className="absolute left-4 w-5 h-5 text-[#596780]" />

        <input
          type="text"
          placeholder="Search something here"
          className="w-full py-2 pl-10 pr-10 text-sm border text-[#596780] rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <Settings2 className="absolute right-4 w-5 h-5 text-[#596780] cursor-pointer hover:text-blue-500" />
      </div>


      <div className="flex items-center space-x-6">

        <img
          src="/Like.png"
          alt="Heart Icon"
          className="w-6 h-6 cursor-pointer"
        />

        <img
          src="/Notification.png"
          alt="Notification Icon"
          className="w-6 h-6 cursor-pointer"
        />

        <img
          src="/Settings.png"
          alt="Settings Icon"
          className="w-6 h-6 cursor-pointer"
        />

        <img
          src="/one.png"
          alt="Profile"
          className="w-8 h-8 rounded-full"
        />
      </div>
    </div>
  );
}

export default Navbar;