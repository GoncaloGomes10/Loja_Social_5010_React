import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
// Certifica-te de ter o Bootstrap Icons no index.html

function CampaignsPage() {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    // 🔒 FIRESTORE COMENTADO
    /*
    import { db } from "../../firebase";
    import { collection, onSnapshot, orderBy, query } from "firebase/firestore";

    const q = query(collection(db, "campaigns"), orderBy("data", "desc"));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const camps = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setCampaigns(camps);
    });

    return () => unsubscribe();
    */

    // ⚠️ DADOS DE TESTE
    setCampaigns([
      { id: 1, titulo: "Campanha de Inverno", descricao: "Estamos a recolher agasalhos, cobertores e aquecedores para as noites frias." },
      { id: 2, titulo: "Natal Solidário", descricao: "Recolha de alimentos não perecíveis e brinquedos para distribuir cabazes." }
    ]);
  }, []);

  return (
    // Fundo cinza claro e altura total
    <div className="d-flex flex-column py-5">
      
      {/* Container centralizado */}
      <div className="container" style={{ maxWidth: "900px" }}>
        
        {/* CABEÇALHO */}
        <div className="text-center mb-5">
          <h1 className="fw-bold text-success display-6">Campanhas Solidárias</h1>
          <p className="text-muted">Iniciativas ativas para ajudar a comunidade</p>
        </div>

        {/* --- ESTATÍSTICA RÁPIDA (Topo) --- */}
        <div className="row justify-content-center mb-5">
            <div className="col-md-4">
                <div className="card border-0 shadow-sm rounded-4 text-center">
                    <div className="card-body p-3">
                        <div className="d-inline-flex align-items-center justify-content-center bg-success bg-opacity-10 text-success rounded-circle mb-2" style={{width: '50px', height: '50px'}}>
                            <i className="bi bi-megaphone-fill fs-4"></i>
                        </div>
                        <h4 className="fw-bold text-dark mb-0">{campaigns.length}</h4>
                        <small className="text-muted text-uppercase fw-bold" style={{fontSize: '0.7rem'}}>Campanhas Ativas</small>
                    </div>
                </div>
            </div>
        </div>

        {/* --- GRID DE CAMPANHAS (Substitui a lista simples) --- */}
        <div className="row g-4">
            {campaigns.map((c) => (
                <div className="col-md-6" key={c.id}>
                    {/* Cartão individual para cada campanha */}
                    <div className="card h-100 border-0 shadow-sm rounded-4 hover-shadow transition">
                        <div className="card-body p-4 d-flex flex-column">
                            
                            {/* Ícone e Título */}
                            <div className="d-flex align-items-center mb-3">
                                <div className="bg-primary bg-opacity-10 text-primary p-3 rounded-3 me-3">
                                    <i className="bi bi-calendar-heart-fill fs-4"></i>
                                </div>
                                <h5 className="fw-bold text-dark mb-0">{c.titulo}</h5>
                            </div>
                            
                            {/* Descrição */}
                            <p className="text-muted flex-grow-1">
                                {c.descricao}
                            </p>

                            {/* Botão / Link (Decorativo) */}
                            <div className="mt-3 pt-3 border-top border-light d-flex justify-content-between align-items-center">
                                <span className="badge bg-success bg-opacity-10 text-success px-3 py-2 rounded-pill">
                                    A decorrer
                                </span>
                            </div>

                        </div>
                    </div>
                </div>
            ))}
        </div>

        {/* Estado Vazio (Caso não haja campanhas) */}
        {campaigns.length === 0 && (
            <div className="text-center py-5">
                <p className="text-muted">Nenhuma campanha ativa de momento.</p>
            </div>
        )}

      </div>
    </div>
  );
}

export default CampaignsPage;