import Saludo from './components/Saludo'; // 1. Importamos el subcomponente

function App() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Ejercicio 2: Modularización</h1>
      
      {/* 2. Usamos el subcomponente como si fuera una etiqueta HTML */}
      <Saludo />
      <Saludo /> 
      
    </div>
  );
}

export default App;
