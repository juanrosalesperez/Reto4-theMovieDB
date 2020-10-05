import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-light bg-secondary mb-5">
        <div className="container">
          <div className="navbar-header">
            <Link
              style={styles.linkStyle}
              className="navbar-brand text-white text-lg brand-text"
              to="/movies"
            >
              Películas
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
const styles = {
  linkStyle: {
    fontWeight: "bold",
    fontSize: 40,
    marginRight: 50,
  },
};

export default Navbar;
