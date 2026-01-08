import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
  const openLojaSocialOficial = () => {
    window.open("https://sas.ipca.pt/loja-social/", "_blank", "noreferrer");
  };

  return (
    <header className={styles.navbar}>
      <div className={styles.left}>
        <img
          src="/images/sas-logo.png"
          alt="Loja Social SAS IPCA"
          className={styles.logo}
        />
        <span className={styles.title}>Loja Social SAS IPCA</span>
      </div>

      <nav className={styles.links}>
        <Link to="/stock" className={styles.navButton}>
          Stock
        </Link>

        <Link to="/doacoes" className={styles.navButton}>
          Doações
        </Link>

        <Link to="/campanhas" className={styles.navButton}>
          Campanhas
        </Link>

        <button className={styles.navButton} onClick={openLojaSocialOficial}>
          Loja Social oficial
        </button>
      </nav>
    </header>
  );
}

export default Navbar;
