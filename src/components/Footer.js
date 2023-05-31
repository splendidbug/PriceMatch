import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h6 className="text-white mb-4">About Us</h6>
              <div className="footer-link d-flex flex-column">
                <Link className="text-white py-2 mb-1">How it started</Link>
                <Link className="text-white py-2 mb-1">Developer Info</Link>
                <Link className="text-white py-2 mb-1">Advertise With Us</Link>
                <Link className="text-white py-2 mb-1">Press Releases</Link>
                <Link className="text-white py-2 mb-1">Jobs</Link>
                <Link className="text-white py-2 mb-1">Investor Relations</Link>
              </div>
            </div>
            <div className="col-3">
              <h6 className="text-white mb-4">Our Data Comes From</h6>
              <div className="footer-link d-flex flex-column">
                <Link className="text-white py-2 mb-1">Target</Link>
                <Link className="text-white py-2 mb-1">Ralphs</Link>
                <Link className="text-white py-2 mb-1">Trader Joe's</Link>
                <Link className="text-white py-2 mb-1">Walmart</Link>
                <Link className="text-white py-2 mb-1">Amazon</Link>
                <Link className="text-white py-2 mb-1">Costco</Link>
              </div>
            </div>
            <div className="col-3">
              <h6 className="text-white mb-4">Account</h6>
              <div className="footer-link d-flex flex-column">
                <Link className="text-white py-2 mb-1">My Account</Link>
                <Link className="text-white py-2 mb-1">Wishlists</Link>
                <Link className="text-white py-2 mb-1">Search</Link>
                <Link className="text-white py-2 mb-1">FAQ</Link>
              </div>
            </div>
            <div className="col-2">
              <h6 className="text-white mb-4">Social</h6>
              <div className="footer-link d-flex flex-column">
                <Link className="text-white py-2 mb-1">Facebook</Link>
                <Link className="text-white py-2 mb-1">Twitter</Link>
                <Link className="text-white py-2 mb-1">Instagram</Link>
                <Link className="text-white py-2 mb-1">Youtube</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row align-items-center ">
            <div className="col-6">
              <div className="footer-top-data d-flex gap-15 align-items-center ">
                <img
                  src="../images/newsletter.png"
                  alt="newsletter"
                  className="ms-5"
                />
                <h6 className="mb-0 text-white">Sign Up for Daily Offers</h6>
              </div>
            </div>
            <div className="col-5">
              <div className="input-group  ms-5">
                <input
                  type="text"
                  className="form-control py-1"
                  placeholder="Your Email Address"
                  aria-label="Your Email Address"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-2" id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">
                &copy; {new Date().getFullYear()}; Powered by Shreyas
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
