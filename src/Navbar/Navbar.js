import React from "react";
import { Link } from "react-router-dom";
// Removemos o import do CSS Modules, pois vamos usar classes Bootstrap
// import styles from "./Navbar.module.css"; 

function Navbar() {
  const openLojaSocialOficial = () => {
    window.open("https://sas.ipca.pt/loja-social/", "_blank", "noreferrer");
  };

  // Cor exata do verde IPCA (baseada nas imagens anteriores)
  const ipcaGreen = "#005220"; 

  return (
    <nav className="navbar navbar-expand-lg navbar-dark px-3 shadow-sm" style={{ backgroundColor: ipcaGreen }}>
      <div className="container-fluid">
        
        {/* --- LOGO E TÍTULO (Lado Esquerdo) --- */}
        <Link to="/" className="navbar-brand d-flex align-items-center">
          <img
            src="/images/sas-logo.png"
            alt="Loja Social SAS IPCA"
            height="40" // Ajusta a altura conforme necessário
            className="d-inline-block align-text-top me-2"
          />
          <span className="fw-bold">Loja Social SAS IPCA</span>
        </Link>

        {/* --- BOTÃO HAMBÚRGUER (Para telemóvel) --- */}
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* --- LINKS DE NAVEGAÇÃO (Lado Direito) --- */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
            
            <li className="nav-item">
              <Link to="/stock" className="nav-link text-white">
                Stock
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/doacoes" className="nav-link text-white">
                Doações
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/campanhas" className="nav-link text-white">
                Campanhas
              </Link>
            </li>

            {/* O botão original transformado visualmente em link */}
            <li className="nav-item">
              <button 
                onClick={openLojaSocialOficial} 
                className="nav-link btn btn-link text-white text-decoration-underline border-0 bg-transparent"
                style={{ cursor: "pointer" }}
              >
                Loja Social oficial
              </button>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;