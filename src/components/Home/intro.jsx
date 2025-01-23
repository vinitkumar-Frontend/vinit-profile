import React from "react";
import { ReactComponent as AvtarImg } from "../../assets/img/avatar.svg";

function Intro() {
  return (
    <section className="intro-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <h1>
              LET ME <span class="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️
              <br />I am fluent in classics like
              <i>
                <b className="purple"> C++, Javascript and Go. </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Web Technologies and Products </b> and
                also in areas related to <b className="purple">Blockchain.</b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">Node.js</b> and
              <i>
                <b className="purple">
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js and Next.js</b>
              </i>
            </p>
          </div>
          <div className="col-md-5">
            <div className="avtar-img">
              <AvtarImg />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;
