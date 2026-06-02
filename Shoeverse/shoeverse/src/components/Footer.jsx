const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 mt-12">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      
        <div>
          <h2 className="text-2xl font-bold text-white">
            Cart<span className="text-blue-500">Verse</span>
          </h2>

          <p className="mt-3 text-sm leading-6">
            Discover quality products across multiple categories. Shop smart,
            shop easy, and enjoy a seamless online shopping experience.
          </p>
        </div>

      
        <div>
          <h3 className="text-white font-semibold mb-3">Categories</h3>

          <ul className="space-y-2 text-sm">
            <li className="hover:text-blue-400 cursor-pointer">Electronics</li>

            <li className="hover:text-blue-400 cursor-pointer">Fashion</li>

            <li className="hover:text-blue-400 cursor-pointer">
              Home & Living
            </li>

            <li className="hover:text-blue-400 cursor-pointer">New Arrivals</li>
          </ul>
        </div>

      
        <div>
          <h3 className="text-white font-semibold mb-3">Contact</h3>

          <div className="space-y-2 text-sm">
            <p>support@cartverse.com</p>
            <p>+91 9876543210</p>
            <p>Available 24/7</p>
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

     
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-gray-400">
          <p>© 2026 CartVerse. All rights reserved.</p>

          <div className="flex gap-5">
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
