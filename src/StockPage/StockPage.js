import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { db } from "../firebase";
// ADICIONADO: 'getDocs' para ler a subcoleção de uma só vez
import { collection, onSnapshot, getDocs } from "firebase/firestore";

function StockPage() {
  const [stock, setStock] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const produtosCollection = collection(db, "produtos");

    // Escuta a coleção de produtos em tempo real
    const unsubscribe = onSnapshot(produtosCollection, async (snapshot) => {
      
      // Criamos uma lista de Promessas, pois para cada produto vamos ter que ir buscar os lotes
      const promises = snapshot.docs.map(async (docProduto) => {
        const data = docProduto.data();
        
        // 1. Referência para a subcoleção "lotes" deste produto específico
        const lotesRef = collection(db, "produtos", docProduto.id, "lotes");
        
        // 2. Busca todos os documentos dentro de "lotes"
        const lotesSnapshot = await getDocs(lotesRef);
        
        // 3. Calcula a soma das quantidades dos lotes
        const somaLotes = lotesSnapshot.docs.reduce((acc, docLote) => {
          const dadosLote = docLote.data();
          return acc + (Number(dadosLote.quantidade) || 0);
        }, 0);

        return {
          id: docProduto.id,
          nome: data.nome,
          // AQUI ESTÁ A MUDANÇA: Usamos a soma calculada, não o campo do pai
          quantidade: somaLotes, 
          categoria: data.categoria || "Geral", 
          descricao: data.descricao
        };
      });

      // Aguarda que todos os cálculos de lotes terminem antes de mostrar na tela
      const itemsComSoma = await Promise.all(promises);
      
      setStock(itemsComSoma);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // --- CÁLCULOS (Mantidos iguais) ---
  const totalProdutos = stock.length;
  // Agora este reduce vai usar a quantidade correta vinda dos lotes
  const totalUnidades = stock.reduce((acc, item) => acc + Number(item.quantidade), 0);
  const totalCategorias = [...new Set(stock.map(item => item.categoria))].length;

  const getCategoryColor = (cat) => {
    if (cat === "Alimentar") return "bg-success bg-opacity-25 text-success";
    if (cat === "Higiene") return "bg-warning bg-opacity-25 text-warning";
    return "bg-secondary bg-opacity-25 text-secondary";
  };

  return (
    <div className="d-flex flex-column py-5">
      <div className="container" style={{ maxWidth: "900px" }}>
        
        {/* CABEÇALHO */}
        <div className="text-center mb-5">
          <h1 className="fw-bold text-success display-6">Stock da Loja Social</h1>
          <p className="text-muted">Gestão de inventário</p>
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
                  <span className="text-muted small fw-bold">Unidades Totais</span>
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

        {/* --- TABELA --- */}
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
                    <th className="py-3 border-0">Quantidade Total</th>
                    <th className="py-3 border-0">Categoria</th>
                  </tr>
                </thead>
                <tbody>
                  {loading && (
                    <tr><td colSpan="3" className="text-center py-4">A carregar produtos e calcular lotes...</td></tr>
                  )}
                  
                  {!loading && stock.length === 0 && (
                    <tr><td colSpan="3" className="text-center py-4 text-muted">Ainda não há produtos registados.</td></tr>
                  )}

                  {stock.map((item) => (
                    <tr key={item.id} className="border-bottom border-light">
                      <td className="ps-4 py-3">
                        <div className="fw-bold text-dark">{item.nome}</div>
                        <small className="text-muted">{item.descricao}</small>
                      </td>
                      <td>
                        {/* Exibe quantidade baseada na soma dos lotes */}
                        <span className={`badge border fw-normal rounded-pill px-3 ${item.quantidade > 0 ? 'bg-light text-dark' : 'bg-danger bg-opacity-10 text-danger'}`}>
                          {item.quantidade} un
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
        </div>

      </div>
    </div>
  );
}

export default StockPage;