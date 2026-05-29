
const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 mt-12">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
    
        <div>
          <h2 className="text-2xl font-bold text-white">
            Shoe<span className="text-blue-500">Verse</span>
          </h2>

          <p className="mt-3 text-sm leading-6">
            Premium footwear designed for comfort, performance, and everyday
            style.
          </p>
        </div>

      
        <div>
          <h3 className="text-white font-semibold mb-3">Shop</h3>

          <ul className="space-y-2 text-sm">
            <li className="hover:text-blue-400 cursor-pointer">
              Running Shoes
            </li>

            <li className="hover:text-blue-400 cursor-pointer">Sneakers</li>

            <li className="hover:text-blue-400 cursor-pointer">Sports Shoes</li>

            <li className="hover:text-blue-400 cursor-pointer">New Arrivals</li>
          </ul>
        </div>

       
        <div>
          <h3 className="text-white font-semibold mb-3">Contact</h3>

          <div className="space-y-2 text-sm">
            <p>support@shoeverse.com</p>
            <p>+91 9876543210</p>
          </div>
        </div>

      
        <div>
          <h3 className="text-white font-semibold mb-3">Follow Us</h3>

          <ul className="space-y-2 text-sm">
            <li className="hover:text-blue-400 cursor-pointer">Instagram</li>

            <li className="hover:text-blue-400 cursor-pointer">Facebook</li>

            <li className="hover:text-blue-400 cursor-pointer">LinkedIn</li>

            <li className="hover:text-blue-400 cursor-pointer">Twitter</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
          <p>© 2026 ShoeVerse. All rights reserved.</p>

          <div className="flex gap-5 mt-2 md:mt-0">
            <p className="hover:text-blue-400 cursor-pointer">Privacy Policy</p>

            <p className="hover:text-blue-400 cursor-pointer">
              Terms & Conditions
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
