import React from "react";
import "./css/sidebar1.css";

const categories = [
  "Drop Cut T-Shirts",
  "Full Sleeve Henley T-Shirts",
  "Full Sleeve T-Shirts",
  "Knit Shirts",
  "Shirts",
  "T-Shirts",
];

const sizes = ["XXS", "XS", "S", "M", "L", "XL", "XXL", "XXXL"];

const price = ["500", "1000", "2000", "3000", "4000", "5000"];

const Sidebar1 = () => {
  return (
    <div className="w-64 p-4 border-r h-screen overflow-y-auto mp">
      {/* Categories */}
      <div className="mb-6">
        <h2 className="font-bold text-gray-700 mb-2 uppercase">Categories</h2>
        <input
          type="text"
          placeholder="Search for Categories"
          className="w-full px-3 py-2 mb-3 border rounded text-sm"
        />
        <ul className="space-y-2">
          {categories.map((category, index) => (
            <li key={index} className="flex items-center space-x-2">
              <input
                type="checkbox"
                id={`cat-${index}`}
                className="accent-gray-600"
              />
              <label htmlFor={`cat-${index}`} className="text-sm text-gray-800">
                {category}
              </label>
            </li>
          ))}
        </ul>
      </div>

      <hr className="mb-4" />

      {/* Size */}
      <div>
        <h2 className="font-bold text-gray-700 mb-2 uppercase">Size</h2>
        <input
          type="text"
          placeholder="Search for Size"
          className="w-full px-3 py-2 mb-4 border rounded text-sm"
        />
        <div className="flex flex-wrap gap-2">
          {sizes.map((size, index) => (
            <button key={index} className="border px-3 py-1 rounded text-sm hover:bg-gray-100">
              {size}
            </button>
          ))}
        </div>
      </div>
      <hr></hr>

      {/* price */}
      <div>
        <h3 className="font-bold text-gray-700 mb-2 uppercase">Price</h3>
        <input type="text"
          placeholder="Search for Price"
          className="w-full px-3 py-2 mb-4 border rounded text-sm"></input>
          <div className="flex flex-wrap gap-2">
            {price.map((price, index) => (
              <button key={index} className="border px-3 py-1 rounded text-sm hover:bg-gray-100">
              {price}
            </button>
            ))}
          </div>
      </div>
    </div>
  );
};

export default Sidebar1;
