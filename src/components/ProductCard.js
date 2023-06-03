import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
import wish from "../images/wish.svg";
import watch from "../images/watch.jpg";
import watch1 from "../images/watch-1.jpg";
import cart from "../images/add-cart.svg";
import compare from "../images/prodcompare.svg";

const ProductCard = () => {
  return (
    <div className="col-3">
      <Link className="product-card position-relative" to="/product/id">
        <div className="wishlist-icon position-absolute">
          <button className="border-0 bg-transparent">
            <img src={wish} />
          </button>
        </div>
        <div className="product-image">
          <img
            src={watch}
            alt="product image"
            // max-width="200"
            // className="img-fluid"
          />
          <img src={watch1} alt="product image" className="img-fluid" />
        </div>
        <div className="product-details">
          <h6 className="brand">Target</h6>
          <h5 className="product-title">Product name</h5>
          <ReactStars
            count={5}
            size={24}
            value={4}
            edit={false}
            activeColor="#ffd700"
          />
          <p className="price">$100</p>
        </div>
        <div className="action-bar position-absolute">
          <div className="d-flex flex-column gap-15">
            <button className="border-0 bg-transparent">
              <img src={cart} alt="add to cart" />
            </button>
            <button className="border-0 bg-transparent">
              <img src={compare} alt="add to cart" />
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
