import React, { useEffect } from "react";
import $ from "jquery";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// ✅ Don't import your JS files directly here if they depend on the DOM or jQuery
// Instead, load them dynamically in useEffect (like below)

const App = () => {
  // ✅ Use only ONE useEffect for your scripts
  useEffect(() => {
    const scripts = [
      "/assets/js/owl-carousel.js",
      "/assets/js/animation.js",
      "/assets/js/imagesloaded.js",
      "/assets/js/popup.js",
      "/assets/js/custom.js",
    ];

    scripts.forEach((src) => {
      const script = document.createElement("script");
      script.src = src;
      script.async = false;
      document.body.appendChild(script);
    });

    // Optional: Cleanup to remove scripts when component unmounts
    return () => {
      scripts.forEach((src) => {
        const existing = [...document.querySelectorAll(`script[src="${src}"]`)];
        existing.forEach((el) => el.remove());
      });
    };
  }, []);

  return (
    <>
      {/* ***** Preloader Start ***** */}
      <div id="js-preloader" className="js-preloader">
        <div className="preloader-inner">
          <span className="dot"></span>
          <div className="dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
      {/* ***** Preloader End ***** */}

      {/* ***** Header Area Start ***** */}
      <header
        className="header-area header-sticky wow slideInDown"
        data-wow-duration="0.75s"
        data-wow-delay="0s"
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="main-nav">
                <a href="/" className="logo">
                  <img src="/assets/images/logo.png" alt="Chain App Dev" />
                </a>
                <ul className="nav">
                  <li><a href="#top" className="active">Home</a></li>
                  <li><a href="#services">Services</a></li>
                  <li><a href="#about">About</a></li>
                  <li><a href="#pricing">Pricing</a></li>
                  <li><a href="#newsletter">Newsletter</a></li>
                  <li>
                    <div className="gradient-button">
                      <a id="modal_trigger" href="#modal">
                        <i className="fa fa-sign-in-alt"></i> Sign In Now
                      </a>
                    </div>
                  </li>
                </ul>
                <a className="menu-trigger">
                  <span>Menu</span>
                </a>
              </nav>
            </div>
          </div>
        </div>
      </header>
      {/* ***** Header Area End ***** */}

      {/* ***** Example of other sections ***** */}
      <section
        id="top"
        className="main-banner wow fadeIn"
        data-wow-duration="1s"
        data-wow-delay="0.5s"
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div
                className="left-content show-up header-text wow fadeInLeft"
                data-wow-duration="1s"
                data-wow-delay="1s"
              >
                <h2>Get The Latest App From App Stores</h2>
                <p>
                  Chain App Dev is an app landing page HTML5 template based on
                  Bootstrap v5.1.3.
                </p>
                <div className="buttons d-flex gap-2 mt-3">
                  <a href="#contact" className="white-button">
                    Free Quote <i className="fab fa-apple"></i>
                  </a>
                  <a href="#contact" className="white-button">
                    Free Quote <i className="fab fa-google-play"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <img
                src="/assets/images/slider-dec.png"
                alt="App preview"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Continue converting the remaining sections (Services, About, Clients, Pricing, Footer)... */}
    </>
  );
};

export default App;
