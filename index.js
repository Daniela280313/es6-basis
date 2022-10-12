//importar commonjs
//const sumar = require("./sumar");
const colors = require('colors');
//const estudiante = require("./estudiante");

const materias = require('./materias')



//crear una nueva materia y ponerla en el arreglo de materias
//push()
materias.push({
    nombre: "Python",
    instructor: "Diomedes Días",
    notas: [4.5, 4
    ], 
    tipo: "técnica"
})


//recorrido del arreglo
materias.forEach((materia)=>{
        console.log(`nombre:${materia.nombre}`)
        console.log('-----------')
    })

//eliminar materia: splice

/*materias.splice(0,)
materias.forEach((materia)=>{
    console.log(`nombre:${materia.nombre}`.byGreen)
    console.log('-----------')
})
console.log(materias)*/


//actualizar:
//1. encontrar el elemento actualizar: findIndex
let indice = materias.findIndex( (materia) => materia.instructor === "Cristian" )
console.log(indice)
materias[indice].instructor = "Fabiane";
materias[indice].notas = [4.5, 4.9]

materias.forEach((materia)=>{
    console.log(`instructor:${materia.instructor}`.bgBlack)
    console.log(`notas:${materia.notas}`.bgBlack)
    console.log('-----------')
})
console.log(indice)


//map: metodo de arreglos es6
//crea un arreglo a partir de otro
//const profesores = materias.map((materia)=>{
 //return materia.instructor
//})

//console.log(profesores)

//find: localizar elementos(uno o varios) de un arreglo que cumplan cierta codicion
//const php = materias.filter((materia)=>{
 //return materia.instructor === "Cristian"
//})
//console.log(php)

//crear nueva materia:


/*desestructuracion objecto:
let { firts_name, last_name } = estudiante

console.log(`nombre: ${estudiante.firts_name }`.bgMagenta )
console.log(`nombre: ${estudiante.last_name }`.bgMagenta )*/