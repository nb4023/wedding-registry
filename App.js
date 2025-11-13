App.js
import React, { useState } from "react";

export default function Registry() {
  const [cashGoal, setCashGoal] = useState(2500);
  const [cashRaised, setCashRaised] = useState(0);

  const registryItems = [
    { name: "Pebble Ice Maker", price: 300 },
    { name: "Nespresso Coffee Machine", price: 200 },
    { name: "Mini Projector", price: 150 },
    { name: "SodaStream", price: 130 },
    { name: "High-Quality Pots & Pans (Non-Toxic, Stainless or Cast Iron)", price: 400 },
    { name: "4K Smart TV (55–65 inch, high-quality brand)", price: 700 },
  ];

  const progressPercent = ((cashRaised / cashGoal) * 100).toFixed(1);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-blue-50 text-gray-800 flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold mb-4">💍 Noah & Partner's Wedding Registry</h1>

      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-2xl mb-8">
        <h2 className="text-2xl font-semibold mb-2">Our Cash Fund</h2>
        <p className="mb-2">Goal: ${cashGoal.toLocaleString()}</p>
        <div className="w-full bg-gray-200 rounded-full h-4 mb-2">
          <div
            className="bg-pink-400 h-4 rounded-full transition-all duration-500"
            style={{ width: `${progressPercent}%` }}
          ></div>
        </div>
        <p>{progressPercent}% of goal reached</p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Gift Wishlist</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-2xl">
        {registryItems.map((item, index) => (
          <li
            key={index}
            className="bg-white shadow-md rounded-xl p-4 flex justify-between items-center"
          >
            <span>{item.name}</span>
            <span className="font-semibold">${item.price}</span>
          </li>
        ))}
      </ul>

      <p className="mt-8 text-gray-600 italic">
        Thank you for celebrating with us — your generosity means the world 💕
      </p>
    </div>
  );
}
