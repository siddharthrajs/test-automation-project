import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

const Restaurants = () => {
  const allRestaurants = [
    { id: 1, name: "Pizza Palace", rating: 4.5, deliveryTime: "25-35 min", cuisine: "Italian" },
    { id: 2, name: "Burger Barn", rating: 4.3, deliveryTime: "20-30 min", cuisine: "American" },
    { id: 3, name: "Sushi Select", rating: 4.7, deliveryTime: "30-40 min", cuisine: "Japanese" },
    { id: 4, name: "Taco Temple", rating: 4.4, deliveryTime: "20-35 min", cuisine: "Mexican" },
    { id: 5, name: "Curry House", rating: 4.6, deliveryTime: "25-40 min", cuisine: "Indian" },
    { id: 6, name: "Wok & Roll", rating: 4.2, deliveryTime: "20-35 min", cuisine: "Chinese" },
    { id: 7, name: "Mediterranean Delight", rating: 4.8, deliveryTime: "30-45 min", cuisine: "Mediterranean" },
    { id: 8, name: "Thai Spice", rating: 4.5, deliveryTime: "25-40 min", cuisine: "Thai" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">All Restaurants</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {allRestaurants.map(restaurant => (
            <Link 
              key={restaurant.id}
              to={`/restaurant/${restaurant.id}`}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all hover:-translate-y-1 cursor-pointer"
            >
              <div className="bg-gray-200 w-full h-48 rounded-t-lg"></div>
              <div className="p-4">
                <h3 className="font-bold text-lg text-gray-900">{restaurant.name}</h3>
                <p className="text-sm text-gray-600 mt-1">{restaurant.cuisine}</p>
                <div className="flex justify-between mt-2 text-sm text-gray-600">
                  <span className="flex items-center">
                    <span className="text-yellow-400 mr-1">⭐</span> 
                    {restaurant.rating}
                  </span>
                  <span className="flex items-center">
                    <span className="text-gray-400 mr-1">🕒</span>
                    {restaurant.deliveryTime}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Restaurants; 