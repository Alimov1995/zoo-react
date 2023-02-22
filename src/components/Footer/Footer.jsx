import "./Footer.scss";

import footerLogo from "../Images/Logo-nav.png";
import menuLogo from "../Images/menu.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__element">
          <img src={footerLogo} alt="" width="108" height="84" />
          <ul className="footer__list">
            <li className="footer__item">about</li>
            <li className="footer__item">Map</li>
            <li className="footer__item">Zoos</li>
            <li className="footer__item">contact us</li>
            <li className="footer__item">design</li>
          </ul>
          <div className="footer__caption">
            <h5 className="footer__title">Design by Lemeshko Kateryna</h5>
            <h5 className="footer__title">©RSSchool and ©Yem Digital 2021</h5>
          </div>
          <div className="footer__menu">
            <img src={menuLogo} alt="" />
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
