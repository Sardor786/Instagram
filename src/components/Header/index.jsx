import { useState } from "react";
import { Link } from "react-router-dom";
import "../css/header/header.css";
import nav from "./nav";

const Header = () => {
  const [likes, setLikes] = useState(false);

  return (
    <div className="header">
      <div className="container h-100">
        <div className="header-nav-wrapper h-100">
          <Link to="/" className="instagram-logo">
            <img
              className="h-100"
              src="./assets/images/Instagram_logo.png"
              width="103"
              height="29"
              alt="instagram icon"
            />
          </Link>
          <input
            className="mx-auto form-control w-auto px-1"
            style={{ height: "30px", textAlign: "center" }}
            type="text"
            placeholder="Search"
          />
          {nav.map((n) => (
            <div className="nav-icons">
              {n.link !== "/likes" ? (
                <Link to={n.link}>
                  {n.link === window.location.pathname
                    ? likes
                      ? n.icon_no_active
                      : n.icon_active
                    : n.icon_no_active}
                </Link>
              ) : (
                <button
                  onBlur={() => setLikes(false)}
                  style={{
                    padding: "0",
                    border: "none",
                    background: "none",
                    cursor: "pointer",
                  }}
                  onClick={() => setLikes(!likes)}
                >
                  {likes ? n.icon_active : n.icon_no_active}
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
