function Footer() {
    return (
      <footer className="bg-white px-16 py-12 border-t border-gray-200">
        <div className="max-w-7xl mx-auto flex justify-between items-start">
         
          <div className="pr-16 w-1/3">
            <h2 className="text-[#3563E9] text-[32px] font-bold mb-4">MORENT</h2>
            <p className="text-sm text-gray-500 leading-relaxed">
              Our vision is to provide convenience and help 
              increase your sales business.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-x-10">
           
            <div>
              <h3 className="text-[#1A202C] text-[20px] font-semibold mb-4">About</h3>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>How it works</li>
                <li>Featured</li>
                <li>Partnership</li>
                <li>Business Relation</li>
              </ul>
            </div>
  
            <div>
              <h3 className="text-[#1A202C] text-[20px] font-semibold mb-4">Community</h3>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>Events</li>
                <li>Blog</li>
                <li>Podcast</li>
                <li>Invite a friend</li>
              </ul>
            </div>
  
            <div>
              <h3 className="text-[#1A202C] text-[20px] font-semibold mb-4">Socials</h3>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>Discord</li>
                <li>Instagram</li>
                <li>Twitter</li>
                <li>Facebook</li>
              </ul>
            </div>
          </div>
        </div>
  
        <div className="mt-12 border-t border-gray-200 pt-6 flex justify-between items-center text-[16px] text-[#1A202C] font-semibold">
          <p>©2022 MORENT. All rights reserved</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-gray-800">
              Privacy & Policy
            </a>
            <a href="#" className="hover:text-gray-800">
              Terms & Condition
            </a>
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;
  