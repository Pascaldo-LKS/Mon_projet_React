import { useState, useEffect } from 'react'
import LienInput from './LienInput'
import LienItem from './LienItem'

function App() {
  const [liste, setListe] = useState(() => {
    const sauvegarde = localStorage.getItem("mes-favoris");
    return sauvegarde ? JSON.parse(sauvegarde) : [];
  });

  useEffect(() => {
    localStorage.setItem("mes-favoris", JSON.stringify(liste));
  }, [liste]);

  const ajouterFavori = (nouveauFavori) => {
    setListe([...liste, nouveauFavori]);
  };

  const supprimerFavori = (indexASupprimer) => {
    setListe(liste.filter((_, index) => index !== indexASupprimer));
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      <h1>Mes Favoris Web</h1>
      <LienInput onAjouter={ajouterFavori} />
      <ul style={{ padding: 0 }}>
        {liste.map((item, index) => (
          <LienItem 
            key={index} 
            favori={item} 
            onSupprimer={() => supprimerFavori(index)} 
          />
        ))}
      </ul>
    </div>
  );
}

export default App;