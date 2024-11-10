import React, { useState } from "react";
import "./App.css";
import ProductCard from "./ProductCard";
import img1 from "./assets/images/img1.jpg";
import img3 from "./assets/images/img3.png";
import img4 from "./assets/images/img4.png";
import CartItem from "./CartItem";

function ShoppingCart() {
  const products = [
    {
      id: 1,
      productName: "Nokia",
      price: 25000,
      desc: "the card title and make up the bulk of the card's content",
      image: img1,
      isStock: true,
    },
    {
      id: 2,
      productName: "Sony",
      price: 75000,
      desc: "the card title and make up the bulk of the card's content",
      image: img4,
      isStock: false,
    },
    {
      id: 3,
      productName: "Samsung",
      price: 15000,
      desc: "the card title and make up the bulk of the card's content",
      image: img3,
      isStock: true,
    },
    {
      id: 4,
      productName: "Xiomi",
      price: 12000,
      desc: "the card title and make up the bulk of the card's content",
      image: img1,
      isStock: false,
    },
    {
      id: 5,
      productName: "Apple",
      price: 87000,
      desc: "the card title and make up the bulk of the card's content",
      image: img4,
      isStock: true,
    },
    {
      id: 6,
      productName: "Hifi",
      price: 12000,
      desc: "the card title and make up the bulk of the card's content",
      image: img3,
      isStock: true,
    },
  ];

  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

  const handleAddToCart = (product) => {
    setCartItems([...cartItems, product]);
    setTotal(total + product.price);
  };

  const handleRemoveFromCart = (item) => {
    const filteredItems = cartItems.filter((cItem) => cItem.id != item.id);

    setCartItems(filteredItems);
    setTotal(total - item.price);
  };

  return (
}

export default ShoppingCart;
