// Este es un subcomponente
function Saludo() {
  return (
    <div style={{ border: '2px solid blue', padding: '10px', marginTop: '10px' }}>
      <h2>Soy un subcomponente</h2>
      <p>Fui llamado por el componente App</p>
    </div>
  );
}

export default Saludo;
