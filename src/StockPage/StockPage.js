import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
// Certifica-te de ter o Bootstrap e Bootstrap Icons importados

function StockPage() {
  const [stock, setStock] = useState([]);

  useEffect(() => {
    // 🔒 LÓGICA FIRESTORE (MANTIDA)
    /*
    import { db } from "../../firebase";
    import { collection, onSnapshot } from "firebase/firestore";
    const unsubscribe = onSnapshot(collection(db, "stock"), (snapshot) => {
      const items = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setStock(items);
    });
    return () => unsubscribe();
    */

    // ⚠️ DADOS DE TESTE
    setStock([
      { id: 1, nome: "Arroz", quantidade: 20, categoria: "Alimentar" },
      { id: 2, nome: "Shampoo", quantidade: 10, categoria: "Higiene" },
      { id: 3, nome: "Massa", quantidade: 35, categoria: "Alimentar" },
    ]);
  }, []);

  // --- CÁLCULOS ---
  const totalProdutos = stock.length;
  const totalUnidades = stock.reduce((acc, item) => acc + Number(item.quantidade), 0);
  const totalCategorias = [...new Set(stock.map(item => item.categoria))].length;

  const getCategoryColor = (cat) => {
    if (cat === "Alimentar") return "bg-success bg-opacity-25 text-success";
    if (cat === "Higiene") return "bg-warning bg-opacity-25 text-warning";
    return "bg-secondary bg-opacity-25 text-secondary";
  };

  return (
    // Fundo cinza claro na página toda (min-vh-100 garante que cobre a tela toda)
    <div className="py-5">
      
      {/* Container transparente: O conteúdo dita a altura, sem sobrar espaço branco */}
      <div className="container" style={{ maxWidth: "900px" }}>
        
        {/* --- CABEÇALHO (Agora fica sobre o fundo cinza, sem caixa branca) --- */}
        <div className="text-center mb-5">
          <h1 className="fw-bold text-success display-6">Stock da Loja Social</h1>
          <p className="text-muted">Gestão de inventário e produtos disponíveis</p>
        </div>

        {/* --- CARDS DE ESTATÍSTICAS --- */}
        <div className="row g-3 mb-4">
          <div className="col-md-4">
            <div className="card border-0 shadow-sm h-100 rounded-4">
              <div className="card-body d-flex align-items-center justify-content-between p-3">
                <div>
                  <span className="text-muted small fw-bold">Total Produtos</span>
                  <h3 className="fw-bold text-primary mb-0">{totalProdutos}</h3>
                </div>
                <div className="bg-primary bg-opacity-10 p-2 rounded-circle text-primary">
                  <i className="bi bi-cart-fill fs-5"></i> 
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card border-0 shadow-sm h-100 rounded-4">
              <div className="card-body d-flex align-items-center justify-content-between p-3">
                <div>
                  <span className="text-muted small fw-bold">Unidades</span>
                  <h3 className="fw-bold text-success mb-0">{totalUnidades}</h3>
                </div>
                <div className="bg-success bg-opacity-10 p-2 rounded-circle text-success">
                  <i className="bi bi-bag-fill fs-5"></i>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card border-0 shadow-sm h-100 rounded-4">
              <div className="card-body d-flex align-items-center justify-content-between p-3">
                <div>
                  <span className="text-muted small fw-bold">Categorias</span>
                  <h3 className="fw-bold text-warning mb-0">{totalCategorias}</h3>
                </div>
                <div className="bg-warning bg-opacity-10 p-2 rounded-circle text-warning">
                  <i className="bi bi-grid-fill fs-5"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- TABELA PRINCIPAL (Único bloco grande branco) --- */}
        <div className="card border-0 shadow-sm rounded-4 overflow-hidden">
          
          <div className="card-header bg-success text-white py-3 px-4 d-flex align-items-center">
            <i className="bi bi-box-seam me-2"></i>
            <h6 className="mb-0 fw-bold">Inventário Atual</h6>
          </div>

          <div className="card-body p-0">
            <div className="table-responsive">
              <table className="table table-hover align-middle mb-0">
                <thead className="bg-light text-secondary small text-uppercase">
                  <tr>
                    <th className="py-3 ps-4 border-0">Produto</th>
                    <th className="py-3 border-0">Quantidade</th>
                    <th className="py-3 border-0">Categoria</th>
                  </tr>
                </thead>
                <tbody>
                  {stock.map((item) => (
                    <tr key={item.id} className="border-bottom border-light">
                      <td className="ps-4 fw-bold text-dark py-3">
                        {item.nome}
                      </td>
                      <td>
                        <span className="badge bg-light text-dark border fw-normal rounded-pill px-3">
                          {item.quantidade}
                        </span>
                      </td>
                      <td>
                        <span className={`badge px-3 py-2 rounded-pill ${getCategoryColor(item.categoria)}`}>
                          {item.categoria}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Rodapé Pequeno */}
          <div className="card-footer bg-white border-0 py-3 px-4">
             <small className="text-muted">
               <i className="bi bi-info-circle me-1"></i> 
               Mostrando {stock.length} registos
             </small>
          </div>

        </div>

      </div>
    </div>
  );
}

export default StockPage;