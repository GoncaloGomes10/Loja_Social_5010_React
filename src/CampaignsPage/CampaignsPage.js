import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { db } from "../firebase";
import { collection, onSnapshot } from "firebase/firestore";

function CampaignsPage() {
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const campaignsCollection = collection(db, "campanhas");

    const unsubscribe = onSnapshot(campaignsCollection, (snapshot) => {
      const camps = snapshot.docs.map((doc) => {
        const data = doc.data();
        return {
          id: doc.id,
          titulo: data.nome, 
          descricao: data.descricao,  
          dataInicio: data.dataInicio,
          dataFim: data.dataFim
        };
      });
      
      setCampaigns(camps);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="d-flex flex-column py-5">
      
      <div className="container" style={{ maxWidth: "900px" }}>
        
        {/* CABEÇALHO */}
        <div className="text-center mb-5">
          <h1 className="fw-bold text-success display-6">Campanhas Solidárias</h1>
          <p className="text-muted">Iniciativas ativas para ajudar a comunidade</p>
        </div>

        {/* --- ESTATÍSTICA RÁPIDA --- */}
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

        {/* --- GRID DE CAMPANHAS --- */}
        <div className="row g-4">
            {loading && (
                <div className="text-center py-5">
                    <div className="spinner-border text-success" role="status">
                        <span className="visually-hidden">A carregar...</span>
                    </div>
                </div>
            )}

            {!loading && campaigns.map((c) => (
                <div className="col-md-6" key={c.id}>
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

                            {/* Datas e Status */}
                            <div className="mt-3 pt-3 border-top border-light">
                                <div className="d-flex justify-content-between align-items-center">
                                    <small className="text-muted">
                                        <i className="bi bi-clock me-1"></i> 
                                        {c.dataInicio} até {c.dataFim}
                                    </small>
                                    
                                    <span className="badge bg-success bg-opacity-10 text-success px-3 py-2 rounded-pill">
                                        Ativa
                                    </span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            ))}
        </div>

        {/* Estado Vazio */}
        {!loading && campaigns.length === 0 && (
            <div className="text-center py-5">
                <p className="text-muted">Nenhuma campanha encontrada.</p>
            </div>
        )}

      </div>
    </div>
  );
}

export default CampaignsPage;