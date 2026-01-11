import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
// Certifica-te de ter o Bootstrap Icons no index.html

function DonationsPage() {
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    // 🔒 LÓGICA FIRESTORE (MANTIDA)
    /*
    import { db } from "../../firebase";
    import { collection, onSnapshot } from "firebase/firestore";

    const unsubscribe = onSnapshot(collection(db, "donations"), (snapshot) => {
      const items = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setDonations(items);
    });

    return () => unsubscribe();
    */

    // ⚠️ DADOS DE TESTE (Adicionei mais um para visualização)
    setDonations([
      { id: 1, nome: "João Silva", item: "Enlatados" },
      { id: 2, nome: "Anónimo", item: "Arroz" },
      { id: 3, nome: "Maria Costa", item: "Roupa de Criança" } 
    ]);
  }, []);

  // --- CÁLCULOS SIMPLES ---
  const totalDonations = donations.length;
  const anonymousCount = donations.filter(d => d.nome === "Anónimo").length;

  return (
    // Fundo cinza claro e altura total
    <div className="d-flex flex-column  py-5">
      
      {/* Container transparente (sem fundo branco) */}
      <div className="container" style={{ maxWidth: "900px" }}>
        
        {/* CABEÇALHO */}
        <div className="text-center mb-5">
          <h1 className="fw-bold text-success display-6">Doações Recebidas</h1>
          <p className="text-muted">Registo de entradas e beneméritos</p>
        </div>

        {/* --- CARDS DE ESTATÍSTICAS --- */}
        <div className="row g-3 mb-4">
          
          {/* Card 1: Total Doações */}
          <div className="col-md-6">
            <div className="card border-0 shadow-sm h-100 rounded-4">
              <div className="card-body d-flex align-items-center justify-content-between p-3">
                <div>
                  <span className="text-muted small fw-bold">Total Recebido</span>
                  <h3 className="fw-bold text-danger mb-0">{totalDonations}</h3>
                </div>
                <div className="bg-danger bg-opacity-10 p-2 rounded-circle text-danger">
                  <i className="bi bi-heart-fill fs-5"></i> 
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Doadores Anónimos */}
          <div className="col-md-6">
            <div className="card border-0 shadow-sm h-100 rounded-4">
              <div className="card-body d-flex align-items-center justify-content-between p-3">
                <div>
                  <span className="text-muted small fw-bold">Doadores Anónimos</span>
                  <h3 className="fw-bold text-secondary mb-0">{anonymousCount}</h3>
                </div>
                <div className="bg-secondary bg-opacity-10 p-2 rounded-circle text-secondary">
                  <i className="bi bi-incognito fs-5"></i>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* --- LISTA/TABELA PRINCIPAL --- */}
        <div className="card border-0 shadow-sm rounded-4 overflow-hidden">
          
          <div className="card-header bg-success text-white py-3 px-4 d-flex align-items-center">
            <i className="bi bi-gift-fill me-2"></i>
            <h6 className="mb-0 fw-bold">Lista de Doações</h6>
          </div>

          <div className="card-body p-0">
            <div className="table-responsive">
              <table className="table table-hover align-middle mb-0">
                <thead className="bg-light text-secondary small text-uppercase">
                  <tr>
                    <th className="py-3 ps-4 border-0">Doador</th>
                    <th className="py-3 border-0">Item Doado</th>
                    <th className="py-3 border-0 text-end pe-4">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {donations.map((d) => (
                    <tr key={d.id} className="border-bottom border-light">
                      <td className="ps-4 py-3">
                        <div className="d-flex align-items-center">
                          {/* Avatar simples gerado com ícone */}
                          <div className={`rounded-circle d-flex align-items-center justify-content-center me-3 ${d.nome === 'Anónimo' ? 'bg-secondary bg-opacity-10 text-secondary' : 'bg-primary bg-opacity-10 text-primary'}`} style={{width: '40px', height: '40px'}}>
                             <i className={`bi ${d.nome === 'Anónimo' ? 'bi-person-fill-lock' : 'bi-person-fill'}`}></i>
                          </div>
                          <div>
                            <span className="fw-bold text-dark d-block">{d.nome}</span>
                            {d.nome === "Anónimo" && <small className="text-muted" style={{fontSize: '0.75rem'}}>Identidade preservada</small>}
                          </div>
                        </div>
                      </td>
                      <td>
                        <span className="fw-semibold text-secondary">
                          {d.item}
                        </span>
                      </td>
                      <td className="text-end pe-4">
                        <span className="badge bg-success bg-opacity-10 text-success border border-success border-opacity-25 rounded-pill px-3">
                          Recebido
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="card-footer bg-white border-0 py-3 px-4">
             <small className="text-muted">
               <i className="bi bi-info-circle me-1"></i> 
               Agradecemos a todos os contribuidores.
             </small>
          </div>

        </div>

      </div>
    </div>
  );
}

export default DonationsPage;