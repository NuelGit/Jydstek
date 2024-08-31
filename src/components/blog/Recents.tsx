import React from "react";

const Recents: React.FC = () => {
  return (
    <React.Fragment>
      <div className="recent-post">
        <h5>Recent Works</h5>
        <img src="/assets/img/blog/recent-post-bg.jpg" alt="" />
        <div className="single-recent-post">
          <h6>Innovation & Technology!</h6>
          <p className="blog-date">
            <i className="las la-calendar"></i>April 10, 2024
          </p>
        </div>
        <img src="/assets/img/blog/recent-post-bg-2.jpg" alt="" />
        <div className="single-recent-post">
          <h6>Design & Aesthetics</h6>
          <p className="blog-date">
            <i className="las la-calendar"></i>February 24, 2024
          </p>
        </div>
        <img src="/assets/img/blog/recent-post-bg-3.jpg" alt="" />
        <div className="single-recent-post">
          <h6>Safety & Reliability</h6>
          <p className="blog-date">
            <i className="las la-calendar"></i>September 18, 2023
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Recents;
