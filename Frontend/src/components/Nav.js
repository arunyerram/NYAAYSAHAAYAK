// src/components/MyNav.js

import { Link } from "react-router-dom";

const Nav = () => {
  const isLoggedIn = Boolean(sessionStorage.getItem("user"));

  const handleLogout = () => {
    sessionStorage.removeItem("user");
    // redirect back to home
    window.location.href = "/";
  };

  return (
    <div>
      <header>
        <h1 className="pad">NYAAYSAHAAYAK</h1>
      </header>
      <nav className="navbar navbar-expand-sm" style={{ backgroundColor: "grey" }}>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav me-auto mt-2 mt-lg-0 ul list">
            <li className="nav-item col link">
              <Link
                className="nav-link col custom-navLink"
                to="/"
                aria-current="page"
              >
                Home <span className="visually-hidden">(current)</span>
              </Link>
            </li>
            <li className="nav-item link">
              <Link className="nav-link col" to="/about">
                About Us
              </Link>
            </li>
            <li className="nav-item link">
              <Link className="nav-link col" to="/services">
                Services
              </Link>
            </li>
            <li className="nav-item link">
              <Link className="nav-link col" to="/FAQ">
                FAQS
              </Link>
            </li>
            <li className="nav-item link">
              <Link
                className="nav-link col"
                to={isLoggedIn ? "/ChatBot" : "/login"}
              >
                LEGAL ASSISTANT
              </Link>
            </li>

            {isLoggedIn ? (
              <li className="nav-item link">
                <button
                  className="btn btn-link nav-link"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </li>
            ) : (
              <li className="nav-item link">
                <Link className="nav-link col" to="/login">
                  Login
                </Link>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
