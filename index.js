//importar commonjs
//const sumar = require("./sumar");
const colors = require('colors');
//const estudiante = require("./estudiante");

const materias = require('./materias')

//recorrido del arreglo
materias.forEach((materia)=>{
    if(materia.instructor === 'Cristian'){
        console.log(`nombre:${materia.nombre}`)
    }
})

//map: metodo de arreglos es6
//crea un arreglo a partir de otro
const profesores = materias.map((materia)=>{
 return materia.instructor
})

console.log(profesores)

//find: localizar elementos(uno o varios) de un arreglo que cumplan cierta codicion
const php = materias.filter((materia)=>{
 return materia.instructor === "Cristian"
})
console.log(php)
/*desestructuracion objecto:
let { firts_name, last_name } = estudiante

console.log(`nombre: ${estudiante.firts_name }`.bgMagenta )
console.log(`nombre: ${estudiante.last_name }`.bgMagenta )*/