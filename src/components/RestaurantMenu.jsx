import React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Header from './Header';
import { addToCart } from '../utils/cartSlice';

const RestaurantMenu = () => {
  const { restaurantId } = useParams();
  const dispatch = useDispatch();

  // This would typically come from an API
  const restaurantMenus = {
    1: {
      name: "Pizza Palace",
      items: [
        { id: 101, name: "Margherita Pizza", price: 12.99, description: "Fresh tomatoes, mozzarella, basil" },
        { id: 102, name: "Pepperoni Pizza", price: 14.99, description: "Classic pepperoni with cheese" },
        { id: 103, name: "Garlic Bread", price: 4.99, description: "Crispy bread with garlic butter" },
      ]
    },
    2: {
      name: "Burger Barn",
      items: [
        { id: 201, name: "Classic Burger", price: 8.99, description: "Beef patty with lettuce and tomato" },
        { id: 202, name: "Cheese Burger", price: 9.99, description: "Classic burger with cheddar cheese" },
        { id: 203, name: "French Fries", price: 3.99, description: "Crispy golden fries" },
      ]
    },
    // Add more restaurants as needed
  };

  const restaurant = restaurantMenus[restaurantId];

  const handleAddToCart = (item) => {
    dispatch(addToCart({
      ...item,
      restaurantName: restaurant.name
    }));
  };

  if (!restaurant) return <div>Restaurant not found</div>;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">{restaurant.name}</h1>
        <p className="text-gray-600 mb-8">Menu</p>

        <div className="grid gap-6">
          {restaurant.items.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-lg text-gray-900">{item.name}</h3>
                  <p className="text-gray-600 mt-1">{item.description}</p>
                  <p className="text-gray-900 font-bold mt-2">${item.price.toFixed(2)}</p>
                </div>
                <button
                  onClick={() => handleAddToCart(item)}
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu; 