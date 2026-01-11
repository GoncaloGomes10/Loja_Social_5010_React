import React from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation(); 

  const openLojaSocialOficial = () => {
    window.open("https://sas.ipca.pt/loja-social/", "_blank", "noreferrer");
  };

  const ipcaGreen = "#005220";

  const isActive = (path) => {
    return location.pathname === path ? "bg-white bg-opacity-25 fw-bold" : "opacity-75 hover-opacity-100";
  };

  return (
    <nav 
      className="navbar navbar-expand-lg navbar-dark sticky-top shadow-lg" 
      style={{ backgroundColor: ipcaGreen, transition: "all 0.3s ease" }}
    >
      <div className="container"> 

        {/* --- LOGO --- */}
        <Link to="/" className="navbar-brand d-flex align-items-center py-2">
          
          {/* CORREÇÃO AQUI: Removi a div branca e ajustei a imagem */}
          <img
            src="/images/sas-logo.png" 
            alt="Logo SAS IPCA"
            // Altura de 45px é boa para navbar. Width auto mantém a proporção retangular correta.
            style={{ height: '45px', width: 'auto' }} 
            className="me-3"
          />

          <div className="d-flex flex-column text-white" style={{ lineHeight: '1.1' }}>
            <span className="fw-bold fs-5" style={{ letterSpacing: '0.5px' }}>Loja Social</span>
            <span className="small text-white-50" style={{ fontSize: '0.75rem' }}>SAS IPCA</span>
          </div>
        </Link>

        {/* --- LINKS --- */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center gap-2 mt-3 mt-lg-0">
            
            <li className="nav-item">
              <Link 
                to="/stock" 
                className={`nav-link text-white px-3 py-2 rounded-pill transition-all ${isActive("/stock")}`}
              >
                <i className="bi bi-box-seam me-2"></i>
                Stock
              </Link>
            </li>

            <li className="nav-item">
              <Link 
                to="/campanhas" 
                className={`nav-link text-white px-3 py-2 rounded-pill transition-all ${isActive("/campanhas")}`}
              >
                <i className="bi bi-megaphone me-2"></i>
                Campanhas
              </Link>
            </li>

            <li className="d-none d-lg-block text-white-50 mx-2">|</li>

            <li className="nav-item">
              <button
                onClick={openLojaSocialOficial}
                className="btn btn-outline-light rounded-pill px-4 btn-sm d-flex align-items-center gap-2 fw-semibold"
                style={{ borderWidth: "1.5px" }}
              >
                <span>Site Oficial</span>
                <i className="bi bi-box-arrow-up-right small"></i>
              </button>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;