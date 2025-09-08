import React from "react";

const Navbar = ({ cartCount, openModal }) => {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center sticky top-0 z-50 shadow-md">
      <h1 className="text-xl font-bold">🛒 Shopping Cart</h1>
      <button
        onClick={openModal}
        className="bg-white text-blue-600 px-4 py-2 rounded-md font-semibold hover:bg-gray-200"
      >
        Cart ({cartCount})
      </button>
    </nav>
  );
};

export default Navbar;