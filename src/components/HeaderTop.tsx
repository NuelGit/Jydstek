import React from "react";

const HeaderTop: React.FC = () => {
  return (
    <React.Fragment>
      <div className="header-top dark-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="contact-info">
                <i className="las la-envelope"></i> info@jydstek.com.ng |
                <i className="las la-map-marker"></i> Lekki Phase II, Lagos Island Nigeria
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 text-end">
              <div className="site-info">
                Turning big ideas into great products!
                <div className="social-area">
                  <a href="">
                    <i className="lab la-facebook-f"></i>
                  </a>
                  <a href="">
                    <i className="lab la-instagram"></i>
                  </a>
                  <a href="https://twitter.com/nuel_eby">
                    <i className="lab la-twitter"></i>X
                  </a>
                  <a href="">
                    <i className="la la-skype"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HeaderTop;
