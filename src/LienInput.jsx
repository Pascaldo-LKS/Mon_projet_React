import { useState } from "react";

function LienInput({ onAjouter }) {
  const [nom, setNom] = useState("");
  const [url, setUrl] = useState("");

  const gererSoumission = () => {
    if (nom.trim() !== "" && url.trim() !== "") {
      // On envoie un OBJET au parent
      onAjouter({ nom: nom, url: url });
      setNom(""); // On vide les champs
      setUrl("");
    }
  };

  return (
    <div style={{ marginBottom: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <input 
        type="text" 
        value={nom} 
        onChange={(e) => setNom(e.target.value)} 
        placeholder="Nom du site (ex: Google)"
      />
      <input 
        type="text" 
        value={url} 
        onChange={(e) => setUrl(e.target.value)} 
        placeholder="URL (ex: https://...)"
      />
      <button onClick={gererSoumission}>Enregistrer le favori</button>
    </div>
  );
}

export default LienInput;