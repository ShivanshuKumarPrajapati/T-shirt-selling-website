import React from "react";
import Imagehelper from "./helper/Imagehelper";

const Card = ({ product, addtoCart = true, removeFromCart = false }) => {

    const cartTitle = product ? product.name : 'Product Pic';
    const cartDescription = product ? product.description : 'Default desciption';
    const cartPrice = product ? product.price : 'Default';

  const showAddtoCart = () => {
    return (
      addtoCart && (
        <button
          onClick={() => {}}
          className="btn btn-block btn-outline-success mt-2 mb-2"
        >
          Add to Cart
        </button>
      )
    );
  };

    const showRemoveFromCart = () => {
        return (
          removeFromCart && (
            <button
              onClick={() => {}}
              className="btn btn-block btn-outline-danger mt-2 mb-2"
            >
              Remove from cart
            </button>
          )
        );
  };
  return (
    <div className="card text-white bg-dark border border-info ">
      <div className="card-header lead">{cartTitle}</div>
      <div className="card-body">
        <Imagehelper product={product} />
        <p className="lead bg-success font-weight-normal text-wrap">
          {cartDescription}
        </p>
        <p className="btn btn-success rounded  btn-sm px-4 mt-3 mb-2">$ {cartPrice}</p>
        <div className="row">
          <div className="col-12">{showAddtoCart()}</div>
          <div className="col-12">
           {showRemoveFromCart()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
