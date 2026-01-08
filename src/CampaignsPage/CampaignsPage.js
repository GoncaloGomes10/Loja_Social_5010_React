import React, { useEffect, useState } from "react";
import styles from "./CampaignsPage.module.css";

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

    // ⚠️ TEMPORÁRIO
    setCampaigns([
      { id: 1, titulo: "Campanha de Inverno", descricao: "Recolha de agasalhos." },
      { id: 2, titulo: "Natal Solidário", descricao: "Recolha de alimentos." }
    ]);
  }, []);

  return (
    <div className={styles.container}>
      <h1>Campanhas</h1>

      <div className={styles.cards}>
        {campaigns.map((c) => (
          <div className={styles.card} key={c.id}>
            <h3>{c.titulo}</h3>
            <p>{c.descricao}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CampaignsPage;
