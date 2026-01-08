import React, { useEffect, useState } from "react";
import styles from "./DonationsPage.module.css";

function DonationsPage() {
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    // 🔒 FIRESTORE AINDA NÃO INSTALADO → CÓDIGO COMENTADO
    /*
    import { db } from "../../firebase";
    import { collection, onSnapshot } from "firebase/firestore";

    const unsubscribe = onSnapshot(collection(db, "donations"), (snapshot) => {
      const items = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setDonations(items);
    });

    return () => unsubscribe();
    */

    // ⚠️ TEMPORÁRIO
    setDonations([
      { id: 1, nome: "João Silva", item: "Enlatados" },
      { id: 2, nome: "Anónimo", item: "Arroz" }
    ]);
  }, []);

  return (
    <div className={styles.container}>
      <h1>Doações Recebidas</h1>

      <ul className={styles.list}>
        {donations.map((d) => (
          <li key={d.id}>
            <strong>{d.nome}</strong> → {d.item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DonationsPage;
