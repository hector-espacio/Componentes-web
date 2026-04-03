import Asistente from './Asistente';

function App() {
  // El vector (array) que contiene los objetos con los datos
  const asistentes = [
    { 
      nombre: "Juan Pérez", 
      tarea: "Frontend Developer", 
      emoji: "👨‍💻" 
    },
    { 
      nombre: "Ana Gómez", 
      tarea: "Diseñadora UX/UI", 
      emoji: "🎨" 
    },
    { 
      nombre: "Carlos Ruiz", 
      tarea: "Backend Developer", 
      emoji: "🖥️" 
    }
  ];

  return (
    <div>
      <h1>Lista de Asistentes</h1>

      {/* Ejecución de la función con el objeto de la posición 0 */}
      { Asistente(asistentes[0]) }

      {/* Ejecución de la función con el objeto de la posición 1 */}
      { Asistente(asistentes[1]) }

      {/* Ejecución de la función con el objeto de la posición 2 */}
      { Asistente(asistentes[2]) }
    </div>
  );
}

export default App;
