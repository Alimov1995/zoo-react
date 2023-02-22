import "./Header.scss";

import navLogo from "../Images/Logo-nav.png";
import searchLogo from "../Images/nav-search.png";
import signLogo from "../Images/sign-logo.png";
import menuLogo from "../Images/menu.png";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__nav nav">
          <img src={navLogo} alt="nav-logo" width="108" height="84" />
          <ul className="nav__list">
            <li className="nav__item"></li>
            <li className="nav__item">ABOUT</li>
            <li className="nav__item">MAP</li>
            <li className="nav__item nav__item--active">Zoos</li>
            <li className="nav__item nav__item--active">contact US</li>
            <li className="nav__item nav__item--active">design</li>
          </ul>

          <div className="header__right">
            <img
              src={searchLogo}
              alt="search"
              width="32"
              height="32"
            />
            <img src={signLogo} alt="sign" width="56" height="56" />
          </div>
          <div className="header__menu">
            <img src={menuLogo}  alt="" />
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header