










import SideBar from "../components/SideBar";
import Third02 from "../components/Third02";
import Cars from "../components/Cars";

function Category() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Sidebar */}
      <div className="w-full md:w-1/4 bg-gray-100 border-r border-gray-200">
        <SideBar />
      </div>

      {/* Main Content */}
      <div className="w-full md:w-3/4 p-4">
        {/* Top Search Bar */}
        <div className="mb-4">
          <Third02 />
        </div>

        {/* Cars Section */}
        <div className="">
          <Cars />
        </div>
      </div>
    </div>
  );
}

export default Category;





// import SideBar from "../components/SideBar"
// import Third from "../components/Third"
// import Cars from "../components/Cars"



// function Category(){
//     return(
//       <>
//       <SideBar/>
//       <Third/>
//       <Cars/>
      
//       </>
//     )
// }

// export default Category