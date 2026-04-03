// Este componente recibe las 'props' (las propiedades del objeto)
function Asistente({ nombre, tarea, emoji }) {
  return (
    <div style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
      <h3>{nombre} {emoji}</h3>
      <p>Rol: {tarea}</p>
    </div>
  );
}

export default Asistente;
