import React from "react";
import { Link } from "react-router-dom"; 
import 'bootstrap/dist/css/bootstrap.min.css';
// Certifica-te de ter os ícones instalados (npm install bootstrap-icons)

function HomePage() {
  const ipcaGreen = "#004725"; // Verde IPCA

  return (
    // bg-light aplicado aqui define a cor de fundo de TUDO (o tal "bege" suave)
    <div className="d-flex flex-column min-vh-100 bg-light">
      
      {/* --- HERO SECTION (Topo) --- */}
      <header className="py-5 text-white shadow" style={{ backgroundColor: ipcaGreen }}>
        <div className="container px-4">
          <div className="row align-items-center flex-column-reverse flex-lg-row">
            
            {/* Texto Hero */}
            <div className="col-lg-6 mt-4 mt-lg-0 text-center text-lg-start">
              <h1 className="display-4 fw-bold mb-3">Loja Social SAS IPCA</h1>
              <p className="lead mb-4 text-white-50">
                Um espaço de acolhimento e solidariedade. Disponibilizamos bens alimentares 
                e de higiene a estudantes da nossa comunidade que necessitam de apoio.
              </p>
              <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-lg-start">
                <Link to="/stock" className="btn btn-light btn-lg px-4 gap-3 fw-bold text-success">
                  <i className="bi bi-box-seam me-2"></i>
                  Consultar Stock
                </Link>
                <Link to="/doacoes" className="btn btn-outline-light btn-lg px-4">
                  Quero Ajudar
                </Link>
              </div>
            </div>

            {/* Imagem Hero */}
            <div className="col-lg-6 text-center">
              <img 
                src="/images/ipca-campus.jpg" // Verifica se o caminho está correto
                alt="Comunidade IPCA" 
                className="img-fluid rounded-3 shadow-lg"
                style={{ maxHeight: '400px', width: '100%', objectFit: 'cover' }}
              />
            </div>

          </div>
        </div>
      </header>

      {/* --- FUNCIONALIDADES (Atalhos Rápidos) --- */}
      <section className="py-5">
        <div className="container px-4 my-4">
          <div className="row g-4 justify-content-center">
            
            {/* Card 1: Stock */}
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm rounded-4 hover-up">
                <div className="card-body p-4 text-center">
                  <div className="bg-success bg-opacity-10 text-success p-3 rounded-circle d-inline-block mb-3">
                    <i className="bi bi-basket3-fill fs-3"></i>
                  </div>
                  <h3 className="fs-4 fw-bold">Inventário Transparente</h3>
                  <p className="text-muted">
                    Consulta em tempo real os produtos disponíveis na nossa loja.
                  </p>
                  <Link to="/stock" className="btn btn-link text-success text-decoration-none fw-bold">
                    Ver produtos &rarr;
                  </Link>
                </div>
              </div>
            </div>

            {/* Card 2: Campanhas */}
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm rounded-4 hover-up">
                <div className="card-body p-4 text-center">
                  <div className="bg-warning bg-opacity-10 text-warning p-3 rounded-circle d-inline-block mb-3">
                    <i className="bi bi-megaphone-fill fs-3"></i>
                  </div>
                  <h3 className="fs-4 fw-bold">Campanhas Ativas</h3>
                  <p className="text-muted">
                    Participa nas nossas recolhas de bens e iniciativas sazonais.
                  </p>
                  <Link to="/campanhas" className="btn btn-link text-warning text-decoration-none fw-bold">
                    Ver campanhas &rarr;
                  </Link>
                </div>
              </div>
            </div>

            {/* Card 3: Doações */}
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm rounded-4 hover-up">
                <div className="card-body p-4 text-center">
                  <div className="bg-primary bg-opacity-10 text-primary p-3 rounded-circle d-inline-block mb-3">
                    <i className="bi bi-heart-fill fs-3"></i>
                  </div>
                  <h3 className="fs-4 fw-bold">Fazer Doação</h3>
                  <p className="text-muted">
                    Saiba como contribuir com bens alimentares e de higiene.
                  </p>
                  <Link to="/doacoes" className="btn btn-link text-primary text-decoration-none fw-bold">
                    Ver doação &rarr;
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- SOBRE / MISSÃO --- */}
      {/* Removi bg-white. Agora o fundo é transparente (herda o bg-light da página principal) */}
      <section className="py-5">
        <div className="container px-4">
          <div className="row align-items-center g-5"> {/* g-5 dá mais espaço entre colunas */}
            
            <div className="col-lg-6">
               <img 
                src="/images/recolha-bens.jpg" // Confirma o caminho da imagem
                alt="Recolha de Alimentos" 
                className="img-fluid rounded-4 shadow"
                style={{ width: "100%", height: "400px", objectFit: "cover" }}
              />
            </div>
            
            <div className="col-lg-6">
              <span className="text-uppercase text-success fw-bold small">Sobre o projeto</span>
              <h2 className="fw-bold display-6 mb-4">Ajudar quem constrói o futuro</h2>
              <p className="lead text-muted mb-4">
                A Loja Social dos SAS IPCA tem como missão combater as carências socioeconómicas 
                da nossa comunidade estudantil, garantindo o acesso a bens essenciais com dignidade.
              </p>
              <ul className="list-unstyled">
                <li className="mb-3 d-flex align-items-center text-secondary">
                  <i className="bi bi-check-circle-fill text-success fs-5 me-3"></i>
                  <span>Bens alimentares não perecíveis</span>
                </li>
                <li className="mb-3 d-flex align-items-center text-secondary">
                   <i className="bi bi-check-circle-fill text-success fs-5 me-3"></i>
                   <span>Produtos de higiene pessoal e habitacional</span>
                </li>
                <li className="mb-3 d-flex align-items-center text-secondary">
                   <i className="bi bi-check-circle-fill text-success fs-5 me-3"></i>
                   <span>Apoio confidencial e direto</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* --- CHAMADA PARA AÇÃO (Footer Call) --- */}
      <section className="py-5 text-center border-top">
        <div className="container">
          <h2 className="fw-bold mb-3">Tem dúvidas ou precisa de apoio?</h2>
          <p className="text-muted mb-4">Estamos disponíveis em todos os polos do IPCA para o ajudar.</p>
          <button 
            className="btn btn-success btn-lg px-5 rounded-pill shadow-sm"
            onClick={() => window.location.href = 'mailto:sas@ipca.pt'}
          >
            Contactar SAS
          </button>
        </div>
      </section>

    </div>
  );
}

export default HomePage;