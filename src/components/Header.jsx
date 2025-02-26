import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <div className="flex items-center">
            <Link to="/browse" className="text-2xl font-bold text-gray-900 font-['Sora']">
              <span className="text-blue-500">Food</span>Delivery
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex space-x-8 font-['Spline_Sans']">
            <Link to="/browse" className="text-gray-600 hover:text-gray-900 transition-colors">
              Home
            </Link>
            <Link to="/restaurants" className="text-gray-600 hover:text-gray-900 transition-colors">
              Restaurants
            </Link>
            <Link to="/orders" className="text-gray-600 hover:text-gray-900 transition-colors relative">
              Orders
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-4 bg-blue-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </Link>
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