import React from "react";
interface props {
  showOffcanvas: boolean;
  setShowOffcanvas: React.Dispatch<React.SetStateAction<boolean>>;
}

const OffCanvas: React.FC<props> = ({ setShowOffcanvas, showOffcanvas }) => {
  return (
    <React.Fragment>
      <div className={`extra-info ${showOffcanvas ? "active" : ""}`}>
        <div className="close-icon menu-close">
          <button onClick={() => setShowOffcanvas((p) => !p)}>
            <i className="las la-window-close"></i>
          </button>
        </div>
        <div className="logo-side mb-30">
          <a href="index.html" className="site-logo-2">
            <img src="/assets/img/logo-white.png" alt="" />
          </a>
        </div>
        <div className="side-info">
          <div className="contact-list mb-40">
            <h4>About Us</h4>
            <p>
            JYDSTEK CONCEPT NIG LTD is a company incorporated under the COMPANIES AND ALLIED MATTERS ACT 2020 as a private company limited by shares on the 2nd day of August 2021. 
            We have our offices situated in two(2) major cities in Nigeria, Abuja and Lagos. 
            The Abuja office is located in 2, Major Gen Edi Street, Nigerian Army Housing Estate, Kurudu,  Abuja, 
            while the Lagos office is situated at Lekki Paradise One Estate, Chevron Alternative Route, Lekki, Lagos State. 
            </p>
            <div className="mt-30 mb-30">
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=info@jydstek.com.ng&su=Subject%20Here&body=Message%20Body%20Here" className="main-btn">
                Get In Touch
              </a>
            </div>
          </div>
          <div className="contact-list mb-40">
            <h4>Contact Information</h4>
            <p>
              <i className="las la-rocket"></i>
              <span>
              2, Major Gen Edi Street, Nigerian Army Housing Estate, Kurudu,  Abuja.
              Lekki Paradise One Estate, Chevron Alternative Route, Lekki, Lagos State.
              </span>
            </p>
            <p>
              <i className="las la-phone"></i> <span>+234-8166599126</span>
            </p>
            <p>
              <i className="las la-envelope-open"></i>
              <span>info@jydstek.com.ng</span>
            </p>
          </div>
        </div>
      </div>

      <div className={`offcanvas-overly ${showOffcanvas ? "active" : ""}`} onClick={() => setShowOffcanvas((p) => !p)}></div>
    </React.Fragment>
  );
};

export default OffCanvas;
