import React from "react";
import { NavLink, Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import cart_44_24 from "../images/cart-44-24.png";
import login from "../images/login.png";

export const Header = () => {
  return (
    <>
      <header className="header-top-strip py-2">
        <div className="container-xxl">
          <div className="row">
            <div className="">
              <p className="text-white mb-0 text-center">
                Compare prices and make the best buying decision
              </p>
            </div>
          </div>
        </div>
      </header>
      <header className="header-upper py-1">
        <div className="row align-items-center">
          <div className="col-3">
            <h4>
              <Link className="text-white ms-4  " to="/">
                Price Match
              </Link>
            </h4>
          </div>
          <div className="col-5">
            <div class="input-group  ms-5">
              <input
                type="text"
                class="form-control py-2"
                placeholder="Search product"
                aria-label="Search product"
                aria-describedby="basic-addon2"
              />
              <span className="input-group-text" id="basic-addon2">
                <BsSearch className="" />
              </span>
            </div>
          </div>
          <div className="col-4">
            <div className="header-upper-links d-flex align-items-center justify-content-end">
              <div>
                <Link
                  className="d-flex align-items-center gap-10 text-white me-5"
                  to="/cart"
                >
                  <img src={cart_44_24} />
                  <div className="d-flex flex-column">
                    <span className="badge bg-white text-dark">0</span>
                    <p className="mb-0">$20</p>
                  </div>
                </Link>
              </div>
              <div>
                <Link className="d-flex align-items-center gap-10 text-white me-4">
                  <img src={login} />
                  <p className="mb-0">My Account</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className="header-bottom py-3">
        <div className="container-xxxl ms-3">
          <div className="row">
            <div className="col-12">
              <div className="menu-bottom d-flex align-items-center gap-15">
                <div>
                  {/* This is for the dropdown on the left */}
                  <div class="dropdown">
                    <button
                      class="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-10 d-flex align-items-center"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <span className=" d-inline-block">Categories</span>
                    </button>
                    <ul
                      class="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <Link className="dropdown-item text-white" to="">
                          Sea Food
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item text-white" to="">
                          Frozen
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item text-white" to="">
                          Fresh Fruits and Vegetables
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item text-white" to="">
                          Meat
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item text-white" to="">
                          Dairy & eggs
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item text-white" to="">
                          Beer, Wine & Liquor
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="menu-links">
                  <div className="d-flex align-items-center gap-15">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/product">Our Store</NavLink>
                    <NavLink to="/blogs">Blogs</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
