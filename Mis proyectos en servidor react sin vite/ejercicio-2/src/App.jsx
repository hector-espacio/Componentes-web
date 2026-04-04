function App() {
  const asistentes = [
    { nombre: "Juan Pérez", tarea: "Frontend Developer", emoji: "👨‍💻" },
    { nombre: "Ana Gómez", tarea: "Diseñadora UX/UI", emoji: "🎨" },
    { nombre: "Carlos Ruiz", tarea: "Backend Developer", emoji: "🖥️" }
  ];

  return (
    <div>
      <h1>Lista de Asistentes</h1>
      { Asistente(asistentes[0]) }
      { Asistente(asistentes[1]) }
      { Asistente(asistentes[2]) }
    </div>
  );
}
