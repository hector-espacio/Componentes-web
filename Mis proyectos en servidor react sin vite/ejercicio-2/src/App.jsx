import Asistente from './src/Asistente.jsx';

export default function App() {
    const asistentes = [
        { id: 1, nombre: "Juan Pérez", tarea: "Frontend" },
        { id: 2, nombre: "Ana Gómez", tarea: "Diseño" }
    ];

    return (
        <div>
            <h1>Lista de Asistentes</h1>
            {asistentes.map(a => (
                <Asistente key={a.id} nombre={a.nombre} tarea={a.tarea} />
            ))}
        </div>
    );
}
