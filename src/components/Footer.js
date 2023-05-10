import React from "react";
import { NavLink, Link } from "react-router-dom";
import {
  BsFacebook,
  BsTwitter,
  BsWhatsapp,
  BsInstagram,
  BsPinterest,
  BsYoutube,
} from "react-icons/bs";
const Footer = () => {
  return (
    <>
      {/* -- Footer -- */}
      <footer className="text-center text-white">
        {/* -- Grid container -- */}
        <div className="container p-4">
          {/* -- Section: Social media -- */}
          <section className="mb-2">
            <NavLink
              className="btn btn-outline-light btn-floating m-1"
              to="#!"
              role="button"
            >
              <BsFacebook />
            </NavLink>
            <Link
              className="btn btn-outline-light btn-floating m-1"
              to="#!"
              role="button"
            >
              <BsTwitter />
            </Link>
            <Link
              className="btn btn-outline-light btn-floating m-1"
              to="#!"
              role="button"
            >
              <BsInstagram />
            </Link>
            <Link
              className="btn btn-outline-light btn-floating m-1"
              to="#!"
              role="button"
            >
              <BsWhatsapp />
            </Link>
            <Link
              className="btn btn-outline-light btn-floating m-1"
              to="#!"
              role="button"
            >
              <BsPinterest />
            </Link>
            <Link
              className="btn btn-outline-light btn-floating m-1"
              to="#!"
              role="button"
            >
              <BsYoutube />
            </Link>
          </section>

          {/* -- Section: Form -- */}
          <section className="">
            <form action="">
              {/* --Grid row-- */}
              <div className="row d-flex justify-content-center">
                {/* --Grid column-- */}
                <div className="col-auto">
                  <p className="pt-2">
                    <strong>Recevoir la newsletter ?</strong>
                  </p>
                </div>
                {/* --Grid column-- */}

                {/* --Grid column-- */}
                <div className="col-md-5 col-12">
                  {/* -- Email input -- */}
                  <div className="form-outline form-white mb-4">
                    <input
                      type="email"
                      id="form5Example21"
                      placeholder="Je renseigne mon mail, ici"
                      className="form-control"
                    />
                    <label className="form-label" for="form5Example21">
                      Email address
                    </label>
                  </div>
                </div>
                {/* --Grid column-- */}

                {/* --Grid column-- */}
                <div className="col-auto">
                  {/* -- Submit button -- */}
                  <button type="submit" className="btn btn-outline-light mb-4">
                    Valider
                  </button>
                </div>
                {/* --Grid column-- */}
              </div>
              {/* --Grid row-- */}
            </form>
          </section>

          {/* -- Section: Form -- */}

          {/* -- Section: Links -- */}
          <section className="">
            {/* --Grid row-- */}
            <div className="row">
              {/* --Grid column-- */}
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h6 className="text-uppercase">Mieux nous connaître</h6>

                <ul className="list-unstyled mb-0">
                  <li>
                    <Link to="#!" className="text-white">
                      A propos de Baben
                    </Link>
                  </li>
                  <li>
                    <Link to="#!" className="text-white">
                      Carière
                    </Link>
                  </li>
                  <li>
                    <Link to="#!" className="text-white">
                      Durabilité
                    </Link>
                  </li>
                  <li>
                    <Link to="#!" className="text-white">
                      Vendre avec Baben
                    </Link>
                  </li>
                </ul>
              </div>
              {/* --Grid column-- */}

              {/* --Grid column-- */}
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h6 className="text-uppercase">Nos Moyens de paiement</h6>

                <ul className="list-unstyled mb-0">
                  <li>
                    <Link href="#!" className="text-white">
                      Cartes de paiement
                    </Link>
                  </li>
                  <li>
                    <Link href="#!" className="text-white">
                      Paiement en plusieurs fois
                    </Link>
                  </li>
                  <li>
                    <Link href="#!" className="text-white">
                      Cartes cadeaux
                    </Link>
                  </li>
                  <li>
                    <Link href="#!" className="text-white">
                      Paiement avec Bitcoin
                    </Link>
                  </li>
                </ul>
              </div>
              {/* --Grid column-- */}

              {/* --Grid column-- */}
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h6 className="text-uppercase">Nos magasins</h6>

                <ul className="list-unstyled mb-0">
                  <li>
                    <Link href="#!" className="text-white">
                      Nord
                    </Link>
                  </li>
                  <li>
                    <Link href="#!" className="text-white">
                      Ouest
                    </Link>
                  </li>
                  <li>
                    <Link href="#!" className="text-white">
                      Sud-Est
                    </Link>
                  </li>
                  <li>
                    <Link href="#!" className="text-white">
                      A l'international
                    </Link>
                  </li>
                </ul>
              </div>
              {/* --Grid column-- */}

              {/* --Grid column-- */}
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h6 className="text-uppercase">Besoind'aide ?</h6>

                <ul className="list-unstyled mb-0">
                  <li>
                    <a href="#!" className="text-white">
                      Accessibilité
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Service Client
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Tarifs et options de livraison
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Retours et remplacements
                    </a>
                  </li>
                </ul>
              </div>
              {/* --Grid column-- */}
            </div>
            {/* --Grid row-- */}
          </section>
          {/* -- Section: Links -- */}
        </div>
        {/* -- Grid container -- */}
        <hr />
        {/* -- Copyright -- */}
        <div className="text-center p-3">
          &copy; Copyright - {new Date().getFullYear()}:
          <a
            className="text-white mx-2"
            href="https://outaholagnangbiyass.com/"
          >
            outaholagnangbiyass.com
          </a>
        </div>
        {/* -- Copyright -- */}
      </footer>
      {/* -- Footer -- */}
    </>
  );
};

export default Footer;
