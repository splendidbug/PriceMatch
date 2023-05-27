import React from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import BlogCard from "../components/BlogCard";
import ProductCard from "../components/ProductCard";
const Home = () => {
  return (
    <>
      {/*Banners on top (big and 4 small ones) */}
      <section className="home-wrapper-1 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-banner position-relative">
                <img
                  src="images/main-banner-1.jpg"
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="main-banner-content position-absolute">
                  <h4>SUPERCHARGED FOR PROS.</h4>
                  <h5>iPad S13+ Pro.</h5>
                  <p>From $999.00 or $41.62/mo.</p>
                  <Link className="button">CHECK OUT</Link>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
                <div className="small-banner position-relative">
                  <img
                    src="images/catbanner-01.jpg"
                    className="img-fluid rounded-3"
                    alt="main banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>Best Sake</h4>
                    <h5>iPad S13+ Pro.</h5>
                    <p>
                      From $999.00 <br /> or $41.62/mo.
                    </p>
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img
                    src="images/catbanner-02.jpg"
                    className="img-fluid rounded-3"
                    alt="main banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>NEW ARRIVAL</h4>
                    <h5>But IPad Air</h5>
                    <p>
                      From $999.00 <br /> or $41.62/mo.
                    </p>
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img
                    src="images/catbanner-03.jpg"
                    className="img-fluid rounded-3"
                    alt="main banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>NEW ARRIVAL</h4>
                    <h5>But IPad Air</h5>
                    <p>
                      From $999.00 <br /> or $41.62/mo.
                    </p>
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img
                    src="images/catbanner-04.jpg"
                    className="img-fluid rounded-3"
                    alt="main banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>NEW ARRIVAL</h4>
                    <h5>But IPad Air</h5>
                    <p>
                      From $999.00 <br /> or $41.62/mo.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Grocery companies' strip */}
      <section className="home-wrapper-2 py-5 ps-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-11">
              <div className="servies d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center gap-15">
                  <img
                    src="images/target-logo-black-transparent.png"
                    alt="companies"
                    width="50"
                    height="50"
                  />
                  <div>
                    <h6></h6>
                    <p></p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img
                    src="images/walmart-logo-black-transparent.png"
                    alt="companies"
                    width="157.14"
                    height="35.71"
                  />
                  <div>
                    <h6></h6>
                    <p></p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img
                    src="images/ralphs-logo-png-transparent.png"
                    alt="companies"
                    width="105"
                    height="40"
                  />
                  <div>
                    <h6></h6>
                    <p></p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img
                    src="images/trader-joes-logo-png-transparent.png"
                    alt="companies"
                    width="165"
                    height="35"
                  />
                  <div>
                    <h6></h6>
                    <p></p>
                  </div>
                </div>
                <div>
                  <img
                    src="images/amazon-logo-black-transparent.png"
                    alt="companies"
                    width="113"
                    height="36"
                  />
                  <div>
                    <h6></h6>
                    <p></p>
                  </div>
                </div>
                <div>
                  <img
                    src="images/costco-wholesale-logo-black-and-white.png"
                    alt="companies"
                    width="100"
                    height="30"
                  />
                  <div>
                    <h6></h6>
                    <p></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Categories */}
      <section className="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="categories d-flex justify-content-between flex-wrap align-items-center">
              <div className="d-flex gap-30 align-items-center">
                <div>
                  <h6>Sea Food</h6>
                  {/* <p>10 Items</p> */}
                </div>
                <img
                  src="images/categories/sea.jpg"
                  className="img-fluid rounded-3"
                  alt="camera"
                  width="150"
                />
              </div>
              <div className="d-flex gap-30 align-items-center">
                <div>
                  <h6>Frozen</h6>
                  {/* <p>10 Items</p> */}
                </div>
                <img
                  src="images/categories/Frozen.jpg"
                  className="img-fluid rounded-3"
                  alt="camera"
                  width="170"
                />
              </div>
              <div className="d-flex gap-30 align-items-center">
                <div>
                  <h6>Fresh Fruits and Vegetables</h6>
                  {/* <p>10 Items</p> */}
                </div>
                <img
                  src="images/categories/fruit.jpg"
                  className="img-fluid rounded-3"
                  alt="camera"
                  width="155"
                />
              </div>
              <div className="d-flex gap-30 align-items-center">
                <div>
                  <h6>Meat</h6>
                  {/* <p>10 Items</p> */}
                </div>
                <img
                  src="images/categories/meat.jpg"
                  className="img-fluid rounded-3"
                  alt="camera"
                  width="160"
                />
              </div>
              <div className="d-flex gap-30 align-items-center">
                <div>
                  <h6>Dairy & eggs</h6>
                  {/* <p>10 Items</p> */}
                </div>
                <img
                  src="images/categories/dairy.jpg"
                  className="img-fluid rounded-3"
                  alt="camera"
                  width="160"
                />
              </div>
              <div className="d-flex gap-30 align-items-center">
                <div>
                  <h6>Beer, Wine & Liquor</h6>
                  {/* <p>10 Items</p> */}
                </div>
                <img
                  src="images/categories/alcohol.jpg"
                  className="img-fluid rounded-3"
                  alt="camera"
                  width="140"
                />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Beverages</h6>
                  {/* <p>10 Items</p> */}
                </div>
                <img
                  src="images/categories/bev.jpg"
                  className="img-fluid rounded-3"
                  alt="camera"
                  width="160"
                />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Kitchen & Dining</h6>
                  {/* <p>10 Items</p> */}
                </div>
                <img
                  src="images/categories/kitchen.jpg"
                  className="img-fluid rounded-3"
                  alt="camera"
                  width="160"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Moving banner with brand names */}
      <section className="marque-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="marquee-inner-wrapper card-wrapper-marquee">
                <Marquee className="d-flex">
                  <div className="mx-4 w-25">
                    <img
                      src="images/companies/kroger-logo.png"
                      alt="brand"
                      width="130"
                    />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-02.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-03.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-04.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-05.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-06.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-07.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-08.png" alt="brand" />
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="blog-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Featured Collections</h3>
            </div>

            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>
      <section className="blog-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our Latest Blogs</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <BlogCard />
            </div>
            <div className="col-3">
              <BlogCard />
            </div>
            <div className="col-3">
              <BlogCard />
            </div>
            <div className="col-3">
              <BlogCard />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
