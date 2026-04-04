function Asistente(datos) {
  return (
    <div style={{ border: '1px solid black', margin: '10px', padding: '10px' }}>
      <h2>{datos.nombre} {datos.emoji}</h2>
      <p>Tarea: {datos.tarea}</p>
    </div>
  );
}
