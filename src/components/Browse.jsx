import React from 'react'
import Header from './Header'

const Browse = () => {
  const popularRestaurants = [
    { id: 1, name: "Pizza Palace", rating: 4.5, deliveryTime: "25-35 min" },
    { id: 2, name: "Burger Barn", rating: 4.3, deliveryTime: "20-30 min" },
    { id: 3, name: "Sushi Select", rating: 4.7, deliveryTime: "30-40 min" },
    { id: 4, name: "Taco Temple", rating: 4.4, deliveryTime: "20-35 min" },
  ];

  const foodCategories = [
    { id: 1, name: "Pizza" },
    { id: 2, name: "Burgers" },
    { id: 3, name: "Sushi" },
    { id: 4, name: "Mexican" },
    { id: 5, name: "Indian" },
    { id: 6, name: "Chinese" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-sm mt-6 p-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Food delivery made easy</h1>
          <p className="text-xl text-gray-600 mb-6">Order from your favorite restaurants</p>
          <input 
            type="text" 
            placeholder="Enter your delivery address" 
            className="w-full max-w-xl px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
          />
        </div>

        {/* Food Categories */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Explore by Category</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {foodCategories.map(category => (
              <div 
                key={category.id} 
                className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer p-4"
              >
                <div className="bg-gray-200 w-full h-24 rounded-lg mb-3"></div>
                <p className="text-center font-medium text-gray-800">{category.name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Popular Restaurants */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Popular Restaurants</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularRestaurants.map(restaurant => (
              <div 
                key={restaurant.id} 
                className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all hover:-translate-y-1 cursor-pointer"
              >
                <div className="bg-gray-200 w-full h-48 rounded-t-lg"></div>
                <div className="p-4">
                  <h3 className="font-bold text-lg text-gray-900">{restaurant.name}</h3>
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
              </div>
            ))}
          </div>
        </section>

        {/* Special Offers */}
        <section className="my-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Special Offers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="bg-gray-200 w-full h-48"></div>
              <div className="p-4">
                <p className="font-medium text-lg text-gray-900">Free delivery on your first order!</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="bg-gray-200 w-full h-48"></div>
              <div className="p-4">
                <p className="font-medium text-lg text-gray-900">20% off on selected restaurants</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Browse
