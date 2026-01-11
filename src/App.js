import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

import StockPage from "./StockPage/StockPage";
import DonationsPage from "./DonationsPage/DonationsPage";
import CampaignsPage from "./CampaignsPage/CampaignsPage";
import HomePage from "./HomePage/HomePage";

import styles from "./App.module.css";

function App() {
  return (
    <Router>
      <div className={styles.app}>
        <Navbar />

        <main className={styles.main}>
          <Routes>
            {/* Redireciona automaticamente "/" para "/HomePage" */}

            <Route path="/" element={<Navigate to="/HomePage" replace />} />

            {/* Página principal */}
            <Route path="/HomePage" element={<HomePage />} />

            {/* Página de Stock */}
            <Route path="/stock" element={<StockPage />} />

            {/* Outras páginas */}
            <Route path="/doacoes" element={<DonationsPage />} />
            <Route path="/campanhas" element={<CampaignsPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
