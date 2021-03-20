import { Link } from "react-router-dom";
import "../css/header/header.css";

const Header = () => {
  const nav = [
    {
      link: "/",
      icon_active: "./assets/icons/home-active.png",
      icon_no_active: "./assets/icons/home-no-active.png",
      alt: "home icon",
    },
    {
      link: "/explore",
      icon_active: "./assets/icons/compass-active.png",
      icon_no_active: "./assets/icons/compass-no-active.png",
      alt: "explore icon",
    },
    // {
    //   link: "/likes",
    //   icon_active: "./assets/icons/heart-active.png",
    //   icon_no_active: "./assets/icons/heart-no-active.png",
    //   alt: "like icon",
    // },
    {
      link: "/profile",
      icon_active: "./assets/icons/profile-active.png",
      icon_no_active: "./assets/icons/profile-no-active.png",
      alt: "profile icon",
    },
  ];

  return (
    <div className="header">
      <div className="container">
        <div className="d-flex align-items-center">
          <h2 className="instagram-logo">Instagram</h2>
          <input className="mx-auto" type="text" placeholder="search" />
          {nav.map((n) => (
            <div className="mx-2">
              <Link to={n.link}>
                <img
                  src={
                    n.link === window.location.pathname
                      ? n.icon_active
                      : n.icon_no_active
                  }
                  alt={n.alt}
                  width="25"
                  height="25"
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
