export default function Asistente({ nombre, tarea }) {
    return (
        <div style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
            <h3>{nombre}</h3>
            <p>Tarea: {tarea}</p>
        </div>
    );
}
