import React from "react";

function ProductCard(props) {
  return (
    <div className="card m-2" style={{ width: "18rem" }}>
      <img src={props.data.image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.data.productName}</h5>
        <h6 className="card-title">{props.data.price}</h6>
        <p className="card-text">{props.data.desc}</p>
        <p>{props.data.isStock === true ? "-inStock" : "-outOfStock"}</p>
        <button
          className="btn btn-primary"
          disabled={!props.data.isStock}
          onClick={() => {
            props.handleAddToCart(props.data)
          }}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
