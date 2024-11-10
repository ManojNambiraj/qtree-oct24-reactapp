import React, { useReducer } from "react";
import img1 from "./assets/images/img1.jpg";
import img3 from "./assets/images/img3.png";
import img4 from "./assets/images/img4.png";
import ProductCard from "./ProductCard";
import CartItem from "./CartItem";

function ShoppingCartUsingReducer() {
  const reducer = (state, action) => {
    switch (action.type) {
      case "Add-to-cart":
        return {
          ...state,
          cartItems: [...state.cartItems, action.product],
          total: state.total + action.product.price,
        };
      case "Remove-from-cart":
        return {
          ...state,
          cartItems: state.cartItems.filter(
            (citem) => citem.id != action.item.id
          ),
          total: state.total - action.item.price,
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, {
    products: [
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
    ],
    cartItems: [],
    total: 0,
  });

  const handleAddToCart = (product) => {
    dispatch({ type: "Add-to-cart", product });
  };

  const handleRemoveFromCart = (item) => {
    dispatch({ type: "Remove-from-cart", item });
  };

  return (
    <div className="container-fluid main">
      <div className="row">
        <div className="col-10 mt-1 left">
          <div className="row">
            {state.products.map((data) => {
              return (
                <ProductCard data={data} handleAddToCart={handleAddToCart} />
              );
            })}
          </div>
        </div>
        <div className="col-2 right">
          <ol class="list-group list-group-numbered">
            <h4>Count: {state.cartItems.length}</h4>
            {state.cartItems.map((item) => {
              return (
                <CartItem
                  item={item}
                  handleRemoveFromCart={handleRemoveFromCart}
                />
              );
            })}
            <h5>Total: {state.total}</h5>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCartUsingReducer;
