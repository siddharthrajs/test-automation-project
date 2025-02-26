import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-gray-900 font-['Sora']">
              <span className="text-blue-500">Food</span>Delivery
            </h1>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex space-x-8 font-['Spline_Sans']">
            <a href="/" className="text-gray-600 hover:text-gray-900 transition-colors">Home</a>
            <a href="/restaurants" className="text-gray-600 hover:text-gray-900 transition-colors">Restaurants</a>
            <a href="/orders" className="text-gray-600 hover:text-gray-900 transition-colors">Orders</a>
          </nav>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-4 font-['Spline_Sans']">
            <button className="text-gray-600 hover:text-gray-900 transition-colors font-semibold">
              Sign In
            </button>
            <button className="bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-600 transition-colors font-semibold">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
