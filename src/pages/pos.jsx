import React, { useState } from "react";
import "./styles.css";

const products = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 20 },
  { id: 3, name: "Product 3", price: 30 },
  { id: 4, name: "Product 4", price: 40 },
  { id: 5, name: "Product 5", price: 50 },
];

export default function App() {
  const [cartItems, setCartItems] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [total, setTotal] = useState(0);

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const handleProductSelect = (product) => {
    setSelectedProduct(product);
  };

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const handleAddToCart = () => {
    const existingItem = cartItems.find(
      (item) => item.product.id === selectedProduct.id
    );

    if (existingItem) {
      existingItem.quantity += quantity;
      setCartItems([...cartItems]);
    } else {
      setCartItems([...cartItems, { product: selectedProduct, quantity }]);
    }

    setSelectedProduct(null);
    setQuantity(1);
  };

  const handleDeleteCartItem = (item) => {
    const newCartItems = cartItems.filter((i) => i !== item);
    setCartItems(newCartItems);
  };

  const handleConfirmOrder = () => {
    const orderTotal = cartItems.reduce(
      (acc, item) => acc + item.product.price * item.quantity,
      0
    );
    setTotal(orderTotal);
  };

  const handleCancelOrder = () => {
    setCartItems([]);
    setTotal(0);
  };
  const handleQuantityChangeInCart = (productId, newQuantity) => {
    const newCartItems = cartItems.map((item) => {
      if (item.product.id === productId) {
        return { ...item, quantity: newQuantity };
      } else {
        return item;
      }
    });
    setCartItems(newCartItems);
  };
  
  const handleCheckout = () => {
    alert("Order placed successfully!");
    setCartItems([]);
    setTotal(0);
  };
  

  return (
    <div className="pos-container">
      <div className="search-container">
        <h2>Product Search</h2>
        <input
          type="text"
          placeholder="Search Products"
          value={search}
          onChange={handleSearchChange}
        />
        <ul>
          {products
            .filter((product) =>
              product.name.toLowerCase().includes(search.toLowerCase())
            )
            .map((product) => (
              <li key={product.id} onClick={() => handleProductSelect(product)}>
                {product.name} - ${product.price}
              </li>
            ))}
        </ul>
        {selectedProduct && (
          <div>
            <h3>{selectedProduct.name}</h3>
            <p>Price: ${selectedProduct.price}</p>
            <input
              type="number"
              value={quantity}
              min={1}
              onChange={handleQuantityChange}
            />
            <button onClick={handleAddToCart}>Add to Cart</button>
          </div>
        )}
      </div>
      <div className="cart-container">
        <h2>Shopping Cart</h2>
        <table>
          <thead>
            <tr>
              <th>Item No</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.product.id}>
                <td>{item.product.id}</td>
                <td>{item.product.name}</td>
                <td>
                  <button
                    onClick={() =>
                      handleQuantityChangeInCart(
                        item.product.id,
                        item.quantity - 1
                      )
                    }
                  >
                    -
                  </button>
                  {item.quantity}
                  <button
                    onClick={() =>
                      handleQuantityChangeInCart(
                        item.product.id,
                        item.quantity + 1
                      )
                    }
                  >
                    +
                  </button>
                </td>
                <td>${item.product.price}</td>
                <td>
                  <button onClick={() => handleDeleteCartItem(item.product.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="cart-summary">
          <p>Total: ${total}</p>
          <button onClick={handleCancelOrder}>Cancel</button>
          <button onClick={handleCheckout}>Checkout</button>
        </div>
      </div>
    </div>
  );
}
