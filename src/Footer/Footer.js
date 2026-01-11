import React from "react";
// Removemos o CSS Module
// import styles from "./Footer.module.css"; 

function Footer() {
  
  // Cor exata do IPCA
  const ipcaGreen = "#005220"; 

  // Dados dos Polos para gerar o HTML dinamicamente (mais limpo)
  const polos = [
    { nome: "Campus do IPCA | Barcelos", loc: "Vila Frescaínha S. Martinho", cp: "4750-810 Barcelos" },
    { nome: "Sede ETESPI | Polo de Braga", loc: "Av. Dr. Francisco Pires Gonçalves", cp: "4715-558 Braga" },
    { nome: "Polo de Famalicão", loc: "Avenida de Tibães, n.º1199", cp: "4770-568 V. N. Famalicão" },
    { nome: "Polo de Guimarães", loc: "Avepark - Zona Industrial da Gandra", cp: "4806-909 Caldas das Taipas" },
    { nome: "Polo de Esposende", loc: "Travessa da Carfer, n.º 49", cp: "4740-010 Esposende" },
    { nome: "Polo de Vila Verde", loc: "Rua do Conhecimento", cp: "4730-575 Soutelo" }
  ];

  return (
    <footer className="text-white pt-5 pb-3" style={{ backgroundColor: ipcaGreen }}>
      <div className="container-fluid px-4 px-lg-5">
        
        <div className="row align-items-center mb-4">
          
          {/* --- COLUNA DO LOGO (Esquerda) --- */}
          {/* Em mobile fica centrado e ocupa tudo, em PC ocupa 2 colunas */}
          <div className="col-12 col-xl-2 text-center text-xl-start mb-5 mb-xl-0">
            <img
              src="/images/ipca-logo.png" // Certifica-te que esta imagem é branca/transparente
              alt="IPCA"
              className="img-fluid"
              style={{ maxHeight: "70px" }} // Limita altura para não ficar gigante
            />
          </div>

          {/* --- COLUNA DOS POLOS (Direita) --- */}
          <div className="col-12 col-xl-10">
            <div className="row g-4">
              {polos.map((polo, index) => (
                // Responsividade: 
                // col-6 (telemóvel: 2 por linha)
                // col-md-4 (tablet: 3 por linha)
                // col-lg-2 (PC: 6 por linha - igual à imagem)
                <div key={index} className="col-6 col-md-4 col-lg-2 text-center d-flex flex-column align-items-center">
                  
                  {/* Ícone de Localização */}
                  <div className="mb-2 opacity-50">
                    {/* Se tiveres Bootstrap Icons instalado podes usar: <i className="bi bi-geo-alt fs-3"></i> */}
                    <img 
                      src="/images/polo-icon.png" 
                      alt="Ícone" 
                      style={{ height: "24px", filter: "invert(1)" }} // filter invert ajuda se o icone for preto
                    />
                  </div>
                  
                  {/* Título do Polo */}
                  <h6 className="fw-bold mb-1" style={{ fontSize: "0.85rem" }}>
                    {polo.nome}
                  </h6>
                  
                  {/* Morada */}
                  <div className="text-white-50" style={{ fontSize: "0.75rem", lineHeight: "1.2" }}>
                    <p className="mb-0">{polo.loc}</p>
                    <p className="mb-0">{polo.cp}</p>
                  </div>

                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Linha Divisória */}
        <hr className="border-secondary opacity-50 mt-4" />

        {/* --- RODAPÉ INFERIOR --- */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center small text-white-50">
          <div className="mb-2 mb-md-0">
            <span className="text-white fw-semibold">(+351) 253 802 503</span>
            <span className="mx-2">|</span>
            <span className="text-white fw-semibold">sas@ipca.pt</span>
          </div>
          <div>
            © {new Date().getFullYear()} SAS IPCA · Loja Social
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;