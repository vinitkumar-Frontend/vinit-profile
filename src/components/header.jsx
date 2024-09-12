import React from "react";
import "../App.scss";
import Nav from "./nav";
import "bootstrap/dist/css/bootstrap.min.css";

function Header() {
  return (
    <React.Fragment>
      <header className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <Nav></Nav>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
}

export default Header;
