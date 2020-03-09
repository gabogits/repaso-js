//Prototypes

function Tarea(nombre, urgencia) {
  this.nombre = nombre;
  this.urgencia = urgencia;
}

Tarea.prototype.mostrarInformacionTarea = function() {
  // aqui podemos atar metodos como mostrarInformacionTarea a cierto tipo de objetos como lo es  Tarea
  return `La tarea ${this.nombre} tiene una prioridad de ${this.urgencia}`;
};

const tarea1 = new Tarea("Aprender Javascript y React", "Urgente");
console.log(tarea1);
console.log(tarea1.mostrarInformacionTarea());

const tarea2 = new Tarea("Aprender GraphQL", "Media");
console.log(tarea2);
console.log(tarea2.mostrarInformacionTarea());

//restructuring de objetos

const aprendiendoJS = {
  version: {
    nueva: "ES6",
    anterior: "ES5"
  },
  frameworks: ["React", "VueJS", "angularJS"]
};

console.log(aprendiendoJS);
//version anterior
//let version = aprendiendoJS.version.nueva;
//let framework = aprendiendoJS.frameworks[1];

//destructuring forma nueva

let { version, frameworks } = aprendiendoJS;
console.log(version);
console.log(frameworks);

//object literal Enhacement

const banda = "Metallica";
const genero = "Heavy Metal";
const canciones = ["master of puppets", "seek & drestroy", "Enter sandman"];

//forma anterior de uninir estas variables en un objeto

// const metallica = {
//   banda:banda,
//   genero:genero,
//   canciones: canciones
// }

//fomra antigua
const metallica = { banda, genero, canciones };

console.log(metallica);

//funciones en un objeto

const persona = {
  nombre: "Juan",
  trabajo: "Desarrollador web",
  edad: 50,
  musicaRock: true,
  mostrarInformacion() {
    //antes era  mostrarInformacion: function() {
    console.log(`${this.nombre} es ${this.trabajo} y su edad es ${this.edad}`);
  }
};

//para traerse las propiedades y no solo los valores

console.log(Object.keys(persona));

//concatenar arreglos

let lenguajes = ["Javascript", "PHP", "Python"];
let frameworks = ["ReactJS", "Laravel", "Django"];
//anterior
// let combinacion = lenguajes.concat(frameworks);

let combinacion = [...lenguajes, ...frameworks];

console.log(combinacion);

//crear una copia del arreglo lenguajes

let nuevoArreglo = [...lenguajes];
console.log(nuevoArreglo);

//otro uso del spread operator

function suma(a, b, c) {
  console.log(a + b + c);
}

const numeros = [1, 2, 3];
suma(numeros); //esto no funcionaria por que pasaria el arreglo como el primer parametro (a)  dejando b y c undefined

//con spread podria funcionar
suma(...numeros);

const personas = [
  { nombre: "Juan", edad: 23, aprendiendo: "Javascript" },
  { nombre: "Pablo", edad: 18, aprendiendo: "PHP" },
  { nombre: "Alejandra", edad: 21, aprendiendo: "AdobeXD" },
  { nombre: "Caren", edad: 30, aprendiendo: "Python" },
  { nombre: "Miguel", edad: 35, aprendiendo: "ReactJS" }
];

console.log(personas);

//mayores de  28 años
const mayores = personas.filter(persona => {
  return persona.edad > 28;
});

//que aprende alejandra
const alejandra = personas.find(persona => {
  return persona.nombre === "Alejandra";
});

console.log("Alejandra esta aprendiendo " + alejandra.aprendiendo);

//para conocer la edad todal de todo
let total = personas.reduce((edadTotal, persona) => {
  return edadTotal + persona.edad;
});

console.log(total);

//promises sencillas

const aplicarDescuento = new Promise((resolve, reject) => {
  setTimeout(() => {
    let descuento = true;
    if (descuento) {
      resolve("Descuento aplicado");
    } else {
      reject("No se pudo aplicar el descuento");
    }
  }, 3000);
});

aplicarDescuento
  .then(resultado => {
    console.log(resultado);
  })
  .catch(error => {
    console.log(error);
  });

//promises con ajax

const descargaUsuarios = cantidad =>
  new Promise((resolve, reject) => {
    const api = `https://randomuser.me/api/?results=${cantidad}&nat=us`;
    const xhr = new XMLHttpRequest();

    xhr.open("GET", api, true);

    xhr.onload = () => {
      if (xhr.status === 200) {
        resolve(JSON.parse(xhr.responseText).results);
      } else {
        reject(Error(xhr.statusText));
      }
    };

    xhr.onerror = error => reject(error);

    xhr.send();
  });

descargaUsuarios(20).then(
  miemros => imprimirHTML(miemros),
  error => console.error(new Error("Hubo un error" + error))
);

function imprimirHTML(usuarios) {
  let html = "";
  usuarios.forEach(usuarios => {
    html += `
      <li>
        NOmbre: ${usuario.name.first} ${usuario.name.last}
        País: ${usuario.nat},
        Imagen: <img src="${usuario.picture.medium}">
    
    `;
  });
  const contenedorApp = document.querySelector("#App");
  contenedorApp.innerHTML = html;
}
