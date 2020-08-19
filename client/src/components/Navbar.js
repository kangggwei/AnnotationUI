import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";

const NavBar = () => {
  return (
    <div>
      <Navbar className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Home
          </Link>
        </div>
      </Navbar>
    </div>
  );
};

export default NavBar;
