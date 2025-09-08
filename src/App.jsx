import React, { useState } from "react";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import CartModal from "./components/CartModal";

function App() {
  const [cart, setCart] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addToCart = (product) => {
    const exists = cart.find((item) => item.id === product.id);
    if (exists) {
      alert("Item already added to the cart");
    } else {
      setCart([...cart, product]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* ✅ Navbar always visible */}
      <Navbar cartCount={cart.length} openModal={() => setIsModalOpen(true)} />

      {/* ✅ Product grid below Navbar */}
      <ProductList addToCart={addToCart} />

      {/* ✅ Cart Modal (opens from Navbar button) */}
      <CartModal
        isOpen={isModalOpen}
        closeModal={() => setIsModalOpen(false)}
        cart={cart}
        removeFromCart={removeFromCart}
      />
    </div>
  );
}

export default App;