import React, { useState } from "react";
import ferrariLogo from "./assets/ahh horse.png"; // Add your Ferrari logo here
import ferrariImage from "./assets/ahh car.png"; // Add your Ferrari image here

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative flex min-h-screen items-center bg-black text-white">
      {/* Background Image */}
      <img
        src={ferrariImage}
        alt="Ferrari F40 LM"
        className="absolute inset-0 w-full h-full object-cover opacity-70"
      />

      {/* Content Overlay */}
      <div
        className={`relative z-10 px-8 py-12 bg-black bg-opacity-65 rounded-lg max-w-lg ml-12 lg:ml-24 sm:px-4 sm:py-8 transition-all duration-300 ${
          isMenuOpen ? "mt-80" : "mt-0"
        }`} // Increased margin-top
      >
        {/* Ferrari Logo */}
        <div className="flex items-center mb-4">
          <img src={ferrariLogo} alt="Ferrari Logo" className="w-12 h-12 mr-4" />
          <p className="text-xs uppercase tracking-widest text-gray-400">Rated #1 in Italy</p>
        </div>

        {/* Main Title */}
        <h1 className="text-4xl font-bold text-red-600 uppercase mb-4 sm:text-3xl">Ferrari F40 LM</h1>

        {/* Description */}
        <p className="mb-6 text-gray-200 sm:text-sm">
          The Ferrari F40 LM is a rare and iconic racing machine, engineered for
          unmatched performance on the track. This beast of a car is capable of
          delivering breathtaking speeds, whether you’re taking on the twists and
          turns of Monaco or unleashing its full power on an open road.
        </p>

        <button className="bg-transparent border-2 border-red-600 hover:bg-red-600 hover:text-white text-red-600 font-semibold px-12 py-3 rounded transition duration-300 ease-in-out sm:px-8 sm:py-2">
          Order the Car
        </button>

        {/* Reviews Section */}
        <div className="flex items-center mt-6 sm:mt-4">
          <div className="flex -space-x-2">
            <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="User 1" className="w-8 h-8 rounded-full border-2 border-white" />
            <img src="https://randomuser.me/api/portraits/men/2.jpg" alt="User 2" className="w-8 h-8 rounded-full border-2 border-white" />
            <img src="https://randomuser.me/api/portraits/men/3.jpg" alt="User 3" className="w-8 h-8 rounded-full border-2 border-white" />
            <img src="https://randomuser.me/api/portraits/women/4.jpg" alt="User 4" className="w-8 h-8 rounded-full border-2 border-white" />
          </div>
          <p className="ml-4 text-sm text-gray-200 sm:text-xs">
            <span className="text-yellow-400">★★★★★</span> 5.0 from 20k+ reviews
          </p>
        </div>
      </div>

      <br />

      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full px-10 py-4 bg-opacity-0 text-white flex justify-end space-x-8 text-lg uppercase sm:px-6 sm:py-2 sm:text-base">
        {/* Menu Button (visible on small screens) */}
        <button
          className="sm:hidden flex items-center justify-center p-2 border-2 border-white rounded-lg"
          onClick={toggleMenu}
        >
          <span className="text-white">☰</span> {/* Hamburger icon */}
        </button>

        {/* Navigation Links (visible on large screens and when menu is open on small screens) */}
        <div
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } sm:flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 items-center`} // Added flex-row for larger screens
        >
          <a href="#videos" className="hover:text-red-600 transition">Videos</a>
          <a href="#home" className="hover:text-red-600 transition">Home</a>
          <a href="#gallery" className="hover:text-red-600 transition">Gallery</a>
          <a href="#performance" className="hover:text-red-600 transition">Performance</a>
          <a href="#materials" className="hover:text-red-600 transition">Materials</a>
          <a href="#about" className="hover:text-red-600 transition">About Us</a>
          <a
            href="#buy"
            className="text-red-600 font-semibold border border-red-600 px-4 py-1 rounded hover:bg-red-600 hover:text-white transition sm:px-3 sm:py-1"
          >
            Buy Car
          </a>
        </div>
      </nav>
    </div>
  );
}

export default App;
