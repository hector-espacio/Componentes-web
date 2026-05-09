 // componentes: /src/App.jsx

import {Asistente} from './Asistente';

function App(){

const asistentes = [
{ nombre: 'Juan Perez', tarea: 'Frontend Developer', emoji:''  },
{ nombre:  'Ana Gómez', tarea: 'Diseñadora UX/UI', emoji: '' },
{ nombre:  'Carlos Ruiz', tarea: 'Backend Developer', emoji: '' }
];

return(
<>
{
asistentes.map(function(elemento,indice){
 return( <Asistente key={indice} {...elemento} /> );})
}
<br />
{asistentes}
</>)
}
export default App;
----------------------------------------------
// componentes: /src/Asistente.jsx

export function Asistente({nombre, tarea, emoji}){

return(
<div>
<h3>{nombre}</h3>
<p>{tarea} {emoji}</p>
</div>
)

}