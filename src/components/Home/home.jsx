import React from "react";
import { ReactComponent as BannerImg } from "../../assets/img/banner-img.svg";
import Type from "./Type";
import Intro from "./intro";

function Home() {
  return (
    <React.Fragment>
      <div className="container">
        <div className="row align-items-center">
          <div className="home-banner col-md-7">
            <h1 className="heading">
              Hi There!
              <span className="wave" role="img" aria-labelledby="wave">
                👋🏻
              </span>
            </h1>
            <h1 className="heading">
              I'M <strong>VINIT KUMAR</strong>
            </h1>

            <Type />
          </div>

          <div className="col-md-5">
            <BannerImg className="programmer-img" />
          </div>
        </div>
      </div>
      <Intro />
    </React.Fragment>
  );
}

export default Home;
