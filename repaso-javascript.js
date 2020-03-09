//repaso
// function declaration
function saludar() {}

// function expression

const cliente = function(nombreCliente) {
  console.log("MOstrando datos del cliente " + nombreCliente);
};

cliente("juan"); //en function expression si hay problema si se ejecutan las funciones despues

//objeto literal

const persona = {
  nombre: "Juan",
  profesion: "Desarrollo web",
  edad: 500
};

console.log(persona);

//objeto constructor

function Tarea(nombre, urgencia) {
  this.nombre = nombre;
  this.urgencia = urgencia;
}

const tarea1 = new Tarea("Aprender Javascript y React", "Urgente");
console.log(tarea1);

function mostrarInformacionTarea(tarea, prioridad) {
  return `La tarea ${tarea} tiene una prioridad de ${prioridad}`;
}

const mostrarInfo = mostrarInformacionTarea(tarea1.nombre, tarea1.urgencia);

const mostrarCliente = mostrarInformacionTarea(
  persona.nombre,
  persona.profesion
);
console.log(mostrarCliente);
