import React from "react";
import { useHistory, Link } from "react-router-dom";
import LogoSantaRita from "../../assets/images/logo5.png";
import "./Header.css";

const Header = () => {
  const history = useHistory();

  /*   const handleNavigateToService = () => {
    history.push("/servicos");
  }; */

  const handleNavigate = (path) => {
    history.push(path);
  };
  return (
    <>
      <div className="header">
        <div className="container">
          <nav>
            <img src={LogoSantaRita} alt="Logo Santa Rita" className="logo" />
            <ul>
              <li>
                <a href="" onClick={() => handleNavigate("/")}>
                  Home
                </a>
              </li>
              <li>
                {/*  <Link to="/servicos">Serviços</Link> */}
                <a href="" onClick={() => handleNavigate("/servicos")}>
                  Serviços
                </a>
              </li>
              <li>
                <a href="" onClick={() => handleNavigate("/sobre")}>
                  Sobre
                </a>
              </li>
              <li>
                <a href="" onClick={() => handleNavigate("/contato")}>
                  Contato
                </a>
              </li>
            </ul>
            <button className="button">Acesse seu condomínio</button>
            <div className="social-icons">
              <i className="fab fa-facebook facebook-icon"></i>
              <i className="fab fa-instagram instagram-icon"></i>
              <i className="fab fa-whatsapp whatsapp-icon"></i>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
