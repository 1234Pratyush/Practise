import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#071129] text-white mt-20">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-14">
        {/* About */}
        <div>
          <h2 className="text-4xl font-extrabold mb-6">
            Shoe<span className="text-blue-400">Verse</span>
          </h2>

          <p className="text-gray-300 leading-9 text-lg">
            Welcome to ShoeVerse, your one-stop destination for trendy and
            comfortable footwear. We are committed to offering premium quality
            shoes that blend fashion with comfort, helping you walk with
            confidence every step of the way.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Contact Us</h2>

          <div className="space-y-5 text-gray-300 text-lg">
            <p>
              Have a question or need assistance? Reach out to our customer
              support team anytime.
            </p>

            <p className="hover:text-blue-400 transition duration-300 cursor-pointer">
              support@shoeverse.com
            </p>

            <p className="hover:text-blue-400 transition duration-300 cursor-pointer">
              +91 9876543210
            </p>

            <p>Dehradun, Uttarakhand, India</p>
          </div>
        </div>

        {/* Social Links */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Follow Us</h2>

          <ul className="space-y-5 text-lg text-gray-300">
            <li className="hover:text-blue-400 transition duration-300 cursor-pointer">
              Facebook
            </li>

            <li className="hover:text-blue-400 transition duration-300 cursor-pointer">
              Instagram
            </li>

            <li className="hover:text-blue-400 transition duration-300 cursor-pointer">
              Twitter
            </li>

            <li className="hover:text-blue-400 transition duration-300 cursor-pointer">
              LinkedIn
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">
            © 2026 ShoeVerse. All rights reserved.
          </p>

          <div className="flex gap-6 text-sm text-gray-400">
            <p className="hover:text-blue-400 cursor-pointer transition duration-300">
              Terms of Service
            </p>

            <p className="hover:text-blue-400 cursor-pointer transition duration-300">
              Privacy Policy
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
