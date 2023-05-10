import React from "react";
import { Link } from "react-router-dom";
import { BsFillCartFill } from "react-icons/bs";
const Home = () => {
  return (
    <>
      <div className="main-body">
        <section className="home-wrapper-1 py-5">
          <div className="container-xxl">
            <div className="row">
              <div className="col-6">
                <div className="main-banner position-relative p-3">
                  <img
                    className="img-fluid rounded-3"
                    src="images/wireless-headphones-1.jpeg"
                    alt="girl with headphone"
                  />
                  <div className="main-banner-content position-absolute p-3">
                    <h5 className="text-dark">
                      Headphones-Bluetooth:Top Ventes
                    </h5>
                    <p className="text-dark">
                      <strong>Payer en plusieurs fois</strong>
                    </p>
                    <Link className="button">
                      <BsFillCartFill size="22px" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="d-flex flex-wrap justify-content-evenly align-items-center">
                  <div className="small-banner position-relative p-1">
                    <Link>
                      <img
                        className="small-banner-img"
                        src="images/headphone-1.jpg"
                        alt="girl with headphone"
                      />
                    </Link>
                  </div>
                  <div className="small-banner position-relative p-1">
                    <Link>
                      <img
                        className="small-banner-img"
                        src="images/Rhohs0.jpg"
                        alt="girl with headphone"
                      />
                    </Link>
                  </div>
                  <div className="small-banner position-relative p-1">
                    <Link>
                      <img
                        className="small-banner-img"
                        src="images/headphones-main-1.jpg"
                        alt="girl with headphone"
                      />
                    </Link>
                  </div>
                  <div className="small-banner position-relative p-1">
                    <Link>
                      <img
                        className="small-banner-img"
                        src="images/wireless-headphones.jpg"
                        alt="girl with headphone"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div class="container d-flex flex-wrap align-items-center">
          <div class="m-2 card">
            <img
              className="small-banner-img"
              src="images/headphones-main-1.jpg"
              alt="girl with headphone"
            />
          </div>
          <div class="m-2 card">
            <Link>
              <img
                className="small-banner-img"
                src="images/wireless-headphones.jpg"
                alt="girl with headphone"
              />
            </Link>
          </div>
          <div class="m-2 card">
            <h6>Ecouteurs</h6>
            <Link>
              <img
                className="small-banner-img"
                src="images/Rhohs0.jpg"
                alt="girl with headphone"
              />
            </Link>
          </div>
          <div class="m-2 card">
            <h6>Ecouteurs</h6>
            <Link>
              <img
                className="small-banner-img"
                src="images/headphone-1.jpg"
                alt="girl with headphone"
              />
            </Link>
          </div>
          <div class="m-2 card">
            <Link>
              <img
                className="small-banner-img"
                src="images/Mac.jpeg"
                alt="girl with headphone"
              />
            </Link>
          </div>
          <div class="m-2 card">
            <Link>
              <img
                className="small-banner-img"
                src="images/Mac-3.jpg"
                alt="girl with headphone"
              />
            </Link>
          </div>
          <div class="m-2 card">
            <Link>
              <img
                className="small-banner-img"
                src="images/Mac-2.jpg"
                alt="girl with headphone"
              />
            </Link>
          </div>
          <div class="m-2 card">
            <Link>
              <img
                className="small-banner-img"
                src="images/oral B-1.jpg"
                alt="girl with headphone"
              />
            </Link>
          </div>
          <div class="m-2 card">
            <Link>
              <img
                className="small-banner-img"
                src="images/msi-game.jpg"
                alt="girl with headphone"
              />
            </Link>
          </div>
          <div class="m-2 card">
            <Link>
              <img
                className="small-banner-img"
                src="images/music-headphones.jpg"
                alt="girl with headphone"
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
