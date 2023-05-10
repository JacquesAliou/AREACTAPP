import React from "react";
import { NavLink, Link } from "react-router-dom";
import {
  BsSearch,
  BsFillCartFill,
  BsFillPersonFill,
  BsFillArrowThroughHeartFill,
} from "react-icons/bs";
import { FcHeadset } from "react-icons/fc";
const Header = () => {
  return (
    <>
      <header className="header-top-strip py-1">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6 ">
              <p className="bandeau text-white mb-0">
                Livraison gratuite à partir de 100€
              </p>
            </div>
            <div className="col-6 ">
              <p className="text-end text-white mb-0">
                Nous contacter?
                <a className="text-white px-2" href="tel:+33 967 97 26 62">
                  +33 7 71 73 03 18
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>
      <header className="header-upper">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-2 ">
              <h2>
                <NavLink className="text-white">
                  <img className="logo" src="images/logo-1.jpg" alt="" />
                  Babel
                </NavLink>
              </h2>
            </div>

            <div className="col-2">
              {/* Start Nav Bar Bottom Dropdown*/}
              <div className="dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Toutes nos Catégories
                </button>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton1"
                >
                  <li>
                    <Link className="dropdown-item text-dark" to="#">
                      Informatique
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item text-dark" to="#">
                      Scolaire
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item text-dark" to="#">
                      Téléphone
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item text-dark" to="#">
                      Habits Hommes
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item text-dark" to="#">
                      Habits Femmes
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item text-dark" to="#">
                      Chaussures Hommes
                    </Link>
                  </li>
                  <li>
                    <NavLink className="dropdown-item text-dark" to="#">
                      Chaussures Femmes
                    </NavLink>
                  </li>
                </ul>
              </div>
              {/* End Nav Bar Bottom Dropdown*/}
            </div>

            <div className="col-4">
              <div className="input-group ">
                <input
                  type="text"
                  className="form-control py-1"
                  placeholder="Serach Product"
                  aria-label="Serach Product"
                  aria-describedby="basic-addon2"
                />
                <span
                  type="submit"
                  className="input-group-text"
                  id="basic-addon2"
                >
                  <BsSearch className="fs-6" />
                </span>
              </div>
            </div>
            <div className="col-4 ">
              <div className="header-upper-links d-flex align-items-center justify-content-between">
                <div>
                  <Link className="text-white">
                    <BsFillArrowThroughHeartFill size="22px" color="white" />
                    <p className="mb-0"> Liste Souhaits</p>
                  </Link>
                </div>
                <div>
                  <Link className="text-white">
                    <BsFillCartFill size="22px" color="white" />
                    <p className="mb-0">Panier</p>
                  </Link>
                </div>
                <div>
                  <Link className="text-white">
                    <BsFillPersonFill size="22px" />
                    <p className="mb-0">Compte</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
