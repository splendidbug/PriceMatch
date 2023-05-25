import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
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
      <section className="home-wrapper-2 py-5 ps-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-11">
              <div className="servies d-flex align-items-center justify-content-between">
                <div>
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
                <div>
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
                <div>
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
                <div>
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
    </>
  );
};

export default Home;
