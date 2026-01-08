import React, { useEffect, useState } from "react";
import styles from "./StockPage.module.css";

function StockPage() {
  const [stock, setStock] = useState([]);

  useEffect(() => {
    // 🔒 FIRESTORE AINDA NÃO INSTALADO → CÓDIGO COMENTADO
    /*
    import { db } from "../../firebase";
    import { collection, onSnapshot } from "firebase/firestore";

    const unsubscribe = onSnapshot(collection(db, "stock"), (snapshot) => {
      const items = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setStock(items);
    });

    return () => unsubscribe();
    */

    // ⚠️ TEMPORÁRIO: dados fictícios só para testar a página
    setStock([
      { id: 1, nome: "Arroz", quantidade: 20, categoria: "Alimentar" },
      { id: 2, nome: "Shampoo", quantidade: 10, categoria: "Higiene" }
    ]);
  }, []);

  return (
    <div className={styles.container}>
      <h1>Stock da Loja Social</h1>

      <table className={styles.table}>
        <thead>
          <tr>
            <th>Produto</th>
            <th>Quantidade</th>
            <th>Categoria</th>
          </tr>
        </thead>

        <tbody>
          {stock.map((item) => (
            <tr key={item.id}>
              <td>{item.nome}</td>
              <td>{item.quantidade}</td>
              <td>{item.categoria}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StockPage;
