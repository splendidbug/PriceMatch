import React from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import BlogCard from "../components/BlogCard";
import ProductCard from "../components/ProductCard";
import mainBanner1 from "../images/main-banner-1.jpg";
import catBanner from "../images/catbanner-01.jpg";
import catBanner2 from "../images/catbanner-02.jpg";
import catBanner3 from "../images/catbanner-03.jpg";
import catBanner4 from "../images/catbanner-04.jpg";
import targetLogo from "../images/target-logo-black-transparent.png";
import walmartLogo from "../images/walmart-logo-black-transparent.png";
import ralphsLogo from "../images/ralphs-logo-png-transparent.png";
import traderJoesLogo from "../images/trader-joes-logo-png-transparent.png";
import amazonLogo from "../images/amazon-logo-black-transparent.png";
import costcoLogo from "../images/costco-wholesale-logo-black-and-white.png";
import sea from "../images/categories/sea.jpg";
import frozen from "../images/categories/frozen.jpg";
import fruitsAndVegitables from "../images/categories/fruit.jpg";
import meat from "../images/categories/meat.jpg";
import dairy from "../images/categories/dairy.jpg";
import alcohol from "../images/categories/alcohol.jpg";
import beverages from "../images/categories/bev.jpg";
import kitchenAndDining from "../images/categories/kitchen.jpg";
import famous1 from "../images/famous-1.webp";
import famous2 from "../images/famous-2.webp";
import famous3 from "../images/famous-3.webp";
import famous4 from "../images/famous-4.webp";
import krogerLogo from "../images/companies/kroger-logo.png";
import brand2 from "../images/brand-02.png";
import brand3 from "../images/brand-03.png";
import brand4 from "../images/brand-04.png";
import brand5 from "../images/brand-05.png";
import brand6 from "../images/brand-06.png";
import brand7 from "../images/brand-07.png";
import brand8 from "../images/brand-08.png";
import axios from "axios";

async function fetchProductData() {
  try {
    const response = await axios.get("http://localhost:5001/api/products/");
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}
const featuredCollection = await fetchProductData();
// console.log(featuredCollection);

// const featuredCollection = [
//   {
//     imgSrc: "https://m.media-amazon.com/images/I/41fLSxsRzkL._SY90_.jpg",
//     imgSrc2: "https://m.media-amazon.com/images/I/41MZu3M2YSL._SY90_.jpg",
//     storeName: "Target1",
//     productName: "Prodname1",
//     price: 1030,
//     starValue: 3,
//     homePageCategory: "featuredCollection",
//   },
//   {
//     imgSrc: "https://m.media-amazon.com/images/I/41fLSxsRzkL._SY90_.jpg",
//     imgSrc2: "https://m.media-amazon.com/images/I/41MZu3M2YSL._SY90_.jpg",
//     storeName: "Target1",
//     productName: "Prodname1",
//     price: 1030,
//     starValue: 3,
//     homePageCategory: "featuredCollection",
//   },
//   {
//     imgSrc: "https://m.media-amazon.com/images/I/41fLSxsRzkL._SY90_.jpg",
//     imgSrc2: "https://m.media-amazon.com/images/I/41MZu3M2YSL._SY90_.jpg",
//     storeName: "Target1",
//     productName: "Prodname1",
//     price: 1030,
//     starValue: 3,
//     homePageCategory: "popularProducts",
//   },
//   {
//     imgSrc: "https://m.media-amazon.com/images/I/41fLSxsRzkL._SY90_.jpg",
//     imgSrc2: "https://m.media-amazon.com/images/I/41MZu3M2YSL._SY90_.jpg",
//     storeName: "Target1",
//     productName: "Prodname1",
//     price: 165156156,
//     starValue: 3,
//     homePageCategory: "popularProducts",
//   },
//   {
//     imgSrc: "https://m.media-amazon.com/images/I/41fLSxsRzkL._SY90_.jpg",
//     imgSrc2: "https://m.media-amazon.com/images/I/41MZu3M2YSL._SY90_.jpg",
//     storeName: "Target1",
//     productName: "Prodname1",
//     price: 1030,
//     starValue: 3,
//   }
// ];

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
                  src={mainBanner1}
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
                    src={catBanner}
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
                    src={catBanner2}
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
                    src={catBanner3}
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
                    src={catBanner4}
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
                    src={targetLogo}
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
                    src={walmartLogo}
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
                    src={ralphsLogo}
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
                    src={traderJoesLogo}
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
                    src={amazonLogo}
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
                    src={costcoLogo}
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
                  src={sea}
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
                  src={frozen}
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
                  src={fruitsAndVegitables}
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
                  src={meat}
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
                  src={dairy}
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
                  src={alcohol}
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
                  src={beverages}
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
                  src={kitchenAndDining}
                  className="img-fluid rounded-3"
                  alt="camera"
                  width="160"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Featured collections */}
      <section className="featured-wrapper py-5 home-wrapper-2">
        <div className="container-xxl ">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Featured Collection</h3>
            </div>
            <div className="d-flex featuredCollectionScroll">
              {featuredCollection.map((data) => {
                if (data.homePageCategory == "featuredCollection")
                  return <ProductCard productData={data} />;
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="famous-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Some stupid title</h3>
            </div>
            <div className="col-3">
              <div className="famous-card position-relative">
                <img src={famous1} className="img-fluid" />
                <div className="famous-content position-absolute">
                  <h5>Big Screen</h5>
                  <h6>smart watch series 7</h6>
                  <p>From $399 or finance</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="famous-card position-relative">
                <img src={famous2} className="img-fluid" />
                <div className="famous-content position-absolute">
                  <h5 className="text-dark">Big Screen</h5>
                  <h6 className="text-dark">smart watch series 7</h6>
                  <p className="text-dark">From $399 or finance</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="famous-card position-relative">
                <img src={famous3} className="img-fluid" />
                <div className="famous-content position-absolute">
                  <h5 className="text-dark">Big Screen</h5>
                  <h6 className="text-dark">smart watch series 7</h6>
                  <p className="text-dark">From $399 or finance</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="famous-card position-relative">
                <img src={famous4} className="img-fluid" />
                <div className="famous-content position-absolute">
                  <h5 className="text-dark">Big Screen</h5>
                  <h6 className="text-dark">smart watch series 7</h6>
                  <p className="text-dark">From $399 or finance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*popular products */}
      <section className="popular-wrapper py-5 home-wrapper-2">
        <div className="container-xxl ">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Popular Products</h3>
            </div>
            <div className="d-flex featuredCollectionScroll">
              {featuredCollection.map((data) => {
                if (data.homePageCategory == "popularProducts")
                  return <ProductCard productData={data} />;
              })}
            </div>
          </div>
        </div>
      </section>

      {/* <section className="popular-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Popular Products</h3>
            </div>
          </div>
          <div className="row">
            {featuredCollection.map((data) => {
              if (data.homePageCategory == "popularProducts")
                return <ProductCard productData={data} />;
            })}
          </div>
        </div>
      </section> */}

      {/*Moving banner with brand names */}
      <section className="marque-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="marquee-inner-wrapper card-wrapper-marquee">
                <Marquee className="d-flex">
                  <div className="mx-4 w-25">
                    <img src={krogerLogo} alt="brand" width="130" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src={brand2} alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src={brand3} alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src={brand4} alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src={brand5} alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src={brand6} alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src={brand7} alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src={brand8} alt="brand" />
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
