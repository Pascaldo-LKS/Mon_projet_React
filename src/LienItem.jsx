function LienItem({ favori, onSupprimer }) {
  return (
    <li style={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      padding: '10px', 
      borderBottom: '1px solid #eee' 
    }}>
      {/* On utilise target="_blank" pour ouvrir dans un nouvel onglet */}
      <a href={favori.url} target="_blank" rel="noreferrer">
        {favori.nom}
      </a>
      
      <button onClick={onSupprimer} style={{ color: 'red', cursor: 'pointer' }}>
        Supprimer
      </button>
    </li>
  );
}

export default LienItem;