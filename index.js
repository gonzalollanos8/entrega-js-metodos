const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];
// Bienvenidos a la Pizzería de Nucba!🍕 

// Como nos gusta mezclar nuestras 2 pasiones que son las pizzas y la programación, decidimos que en la E2 del módulo de Javascript vamos a trabajar combinando ambas.

// 👉 En el archivo adjunto les dejamos la base para realizar los ejercicios. En ella ya tienen el index.html con el archivo de javascript vinculado, y en el mismo tendrán un array de pizzas.
// 👉 Cada "Pizza"  es un objeto que tendrá definido un id (1,2,3,etc), nombre, ingredientes(será un array de ingredientes) y su precio.

// Nota: Pueden modificar los valores(por ejemplo, los precios) para saber si sus soluciones funcionan correctamente

// ¿Que debén hacer?

// 🔥 Utilizando métodos de array e iterando sobre el array de pizzas, realizar las siguientes actividades, imprimiendo en consola:

// a)  Las pizzas que tengan un id impar.
// b) Responder: ¿Hay alguna pizza que valga menos de $600?
// c) El nombre de cada pizza con su respectivo precio.
// d) Todos los ingredientes de cada pizza (En cada iteración imprimir los ingredientes de la pizza que se esta recorriendo). Ayuda: van a tener que realizar dos recorridos, ya que cada pizza del array de pizzas tiene una propiedad "ingredientes" cuyo valor es un array con ingredientes.

// TODAS  las respuestas deben ser USER-FRIENDLY. 
// Si (como en el punto B), la respuesta es un booleano (true o false, hay o no hay), no imprimir el booleano , imprimir en consola una respuesta que toda persona pueda entender, sepa o no de programación (Es decir, no podemos imprimir un array o un objeto en consola, por ejemplo).

// Manejemos cada respuesta, pensando en que un usuario promedio va a leer eso. 

// Un ejemplo de lo que sería una repuesta "user-friendly": "La pizza X, tiene un valor de $XXXX”. 💸

// 📍 Al final del posteo vas a encontrar un link con el archivo base para utilizar. 

// | Forma de entrega:
// Los ejercicios deberán ser entregados por medio de esta plataforma.
// Deberán subir su trabajo a un repositorio de Github, deployarlo en Vercel, y entregar ambos links.
// No se aceptarán archivos sueltos, comprimidos ni subidos a drive.

// | Tiempos de entrega y resolución:
// Dispondrán exactamente de 1 SEMANA para realizar la entrega desde su habilitación.
// Una vez que hayan realizado la entrega y desde el equipo de mentoría verifiquen que hayan trabajado en lo solicitado, se les habilitará el video de resolución de la misma en el encabezado de la entrega, para que puedan contrastar con lo realizado por ustedes, revisar si pueden mejorar algunas cosas y, en caso de que hayan tenido dudas con la resolución, puedan usar el video como guía para poder corregir aquellos puntos que no hayan logrado resolver a la hora de realizar el trabajo.

// Cualquier consulta que tengan sobre la entrega podrán realizarla por el canal de Discord de la camada.


// a)  Las pizzas que tengan un id impar.

const pizzasImpares= (arrPizza) =>{
  arrPizza.forEach((pizza)=>{
  if(pizza.id % 2 !== 0){
  return console.log(`El ID de la pizza: ${pizza.nombre}, es impar: ${pizza.id}`);
  }
})
}

pizzasImpares(pizzas);
console.log('=========================================================================================================')



// b) Responder: ¿Hay alguna pizza que valga menos de $600?
const pizzaMenor = (arrPizza) =>{
  const menorPrecio = arrPizza.findIndex(pizza => pizza.precio < 600)
  return console.log(`La pizza ${arrPizza[menorPrecio].nombre} tiene un valor de ${arrPizza[menorPrecio].precio}, asi que es menor a $600`);
}

pizzaMenor(pizzas);
console.log('=========================================================================================================')

// c) El nombre de cada pizza con su respectivo precio.

// const nombrePizza = (arrPizza) =>{ 
//   let nombre = arrPizza[nombre].indexOf(1)
// }
// nombrePizza(pizzas)
console.log('=========================================================================================================')

// d) Todos los ingredientes de cada pizza (En cada iteración imprimir los ingredientes de la pizza que se esta recorriendo). Ayuda: van a tener que realizar dos recorridos, ya que cada pizza del array de pizzas tiene una propiedad "ingredientes" cuyo valor es un array con ingredientes.

const ingredientesPizza = (arrPizza) =>{

  arrPizza.forEach( pizza =>{
    console.log(`La pizza ${pizza.nombre}, lleva como ingredientes ${pizza.ingredientes.join(' - ')}`)
  })
}

ingredientesPizza(pizzas);