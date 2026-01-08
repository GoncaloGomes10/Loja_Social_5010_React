import React from "react";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.topRow}>
        <div className={styles.brand}>
          <img
            src="/images/ipca-logo.png"
            alt="IPCA"
            className={styles.ipcaLogo}
          />
        </div>

        <div className={styles.polos}>
          <div className={styles.polo}>
            <img
              src="/images/polo-icon.png"
              alt="Campus do IPCA | Barcelos"
              className={styles.poloIcon}
            />
            <h4>Campus do IPCA | Barcelos</h4>
            <p>Vila Frescainha S. Martinho</p>
            <p>4750-810 Barcelos</p>
          </div>

          <div className={styles.polo}>
            <img
              src="/images/polo-icon.png"
              alt="Sede ETESPI | Polo de Braga"
              className={styles.poloIcon}
            />
            <h4>Sede ETESPI | Polo de Braga</h4>
            <p>Av. Dr. Francisco Pires Gonçalves</p>
            <p>4715-558 Braga</p>
          </div>

          <div className={styles.polo}>
            <img
              src="/images/polo-icon.png"
              alt="Polo de Famalicão"
              className={styles.poloIcon}
            />
            <h4>Polo de Famalicão</h4>
            <p>Avenida de Tibães, n.º1199</p>
            <p>4770-568 V. N. Famalicão</p>
          </div>

          <div className={styles.polo}>
            <img
              src="/images/polo-icon.png"
              alt="Polo de Guimarães"
              className={styles.poloIcon}
            />
            <h4>Polo de Guimarães</h4>
            <p>Avepark - Zona Industrial da Gandra</p>
            <p>4806-909 Caldas das Taipas</p>
          </div>

          <div className={styles.polo}>
            <img
              src="/images/polo-icon.png"
              alt="Polo de Esposende"
              className={styles.poloIcon}
            />
            <h4>Polo de Esposende</h4>
            <p>Travessa da Carfer, n.º 49</p>
            <p>4740-010 Esposende</p>
          </div>

          <div className={styles.polo}>
            <img
              src="/images/polo-icon.png"
              alt="Polo de Vila Verde"
              className={styles.poloIcon}
            />
            <h4>Polo de Vila Verde</h4>
            <p>Rua do Conhecimento</p>
            <p>4730-575 Soutelo</p>
          </div>
        </div>
      </div>

      <div className={styles.bottomRow}>
        <div className={styles.contact}>
          <span>(+351) 253 802 503</span>
          <span className={styles.sep}>|</span>
          <span>sas@ipca.pt</span>
        </div>
        <div className={styles.copy}>
          © {new Date().getFullYear()} SAS IPCA · Loja Social
        </div>
      </div>
    </footer>
  );
}

export default Footer;
