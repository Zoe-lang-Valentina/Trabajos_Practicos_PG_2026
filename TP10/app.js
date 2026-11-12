//activiti 1(^///^)
let utiles = ["Lápiz", "Goma", "Regla", "Cuaderno", "Lapicera"];
console.log(utiles[0])
console.log(utiles[2])

let ultimo = utiles[utiles.length - 1];

console.log(utiles)

utiles.push("Mochila")
console.log(utiles)

utiles.unshift("Cartuchera")
console.log(utiles)

utiles.pop("")
console.log(utiles)

utiles.shift();
console.log(utiles)
//activiti 2 (╯°□°）╯︵ ┻━┻
let productos = ["Leche", "Pan", "Arroz", "Fideos", "Aceite"];

console.log(productos)

productos.push("Azucar")
productos.push("Yerba")
productos.push("Cafe")
console.log(productos)

productos.unshift("Sal")
productos.unshift("Galletitas")
console.log(productos)
console.log(productos.length);

productos.pop()
console.log(productos)
productos.pop()
console.log(productos)
productos.shift();
console.log(productos)
console.log(productos.length);

//activiti 3 (ˉ﹃ˉ)
let electro = ["Teclado","Mouse","Monitor","Auriculares","Webcam","Parlantes"];

console.log(electro.indexOf('Mouse'))
console.log(electro.indexOf('Monitor'))
console.log(electro.indexOf('Webcam'))
console.log(electro.indexOf('Impresora'))

console.log(electro.indexOf('Teclado'))
let posicion1 = electro.indexOf('Teclado')
 if (posicion == 7) {
      'Teclado esta en la lista'
 } else {
     'Teclado no esta en la lista'
 }

 console.log(electro.indexOf('Impresora'))
 let posicion1 = electro.indexOf('Impresora')
  if (posicion == 7) {
       'Impresora esta en la lista'
  } else {
      'Impresora no esta en la lista'
  }
  
electro.push('Impresora')
console.log(electro.indexOf('Impresora'))
console.log(electro)

//activiti 4 :p

let videojuegos = ["Minecraft","Pokémon Cristal","Super Mario","The Legend of Zelda","Sonic"];

console.log(videojuegos)
console.log(videojuegos.length);

videojuegos.push("Animal Crossing")
videojuegos.push("Pokemon Rojo")
console.log(videojuegos)

videojuegos.unshift('Tetris')
videojuegos.unshift('Pac-Man')
console.log(videojuegos)

console.log(videojuegos.indexOf('Pokémon Cristal'))
console.log(videojuegos.indexOf('Sonic'))
console.log(videojuegos.indexOf('FIFA'))

console.log(videojuegos[videojuegos.length - 1])
videojuegos.pop()

console.log(videojuegos[0])
videojuegos.shift() 

console.log(videojuegos)
console.log(videojuegos.length)

//activiti 5 (⌐■_■)
 
let estudiantes = ["Martina","Lucas","Sofía","Tomás","Valentina"];

console.log(estudiantes)
console.log(estudiantes.length)

estudiantes.push('Agustina')
estudiantes.push('Camila')
console.log(estudiantes)

estudiantes.unshift('Bruno')
console.log(estudiantes)
console.log(estudiantes.length);

console.log(estudiantes.indexOf('Sofía'))
console.log(estudiantes.indexOf('Camila'))
console.log(estudiantes.indexOf('Federico'))

console.log(estudiantes[0])
estudiantes.shift()

console.log(estudiantes[estudiantes.lenght - 1])
estudiantes.pop()

console.log(estudiantes)
console.log(estudiantes.length)

//activiti 6 (∪.∪ )...zzz

let tareas = ["Estudiar","Hacer la tarea","Ordenar la habitación","Comprar alimentos"];

console.log(tareas)
console.log(tareas.length)

tareas.push('Pasear al perro')
tareas.push('Preparar la cena')
console.log(tareas)

tareas.unshift('Entregar un trabajo')
console.log(tareas)

console.log(tareas.indexOf('Estudiar'))
console.log(tareas.indexOf('Preparar la cena'))
console.log(tareas.indexOf('Lavar el auto'))

console.log(tareas[tareas.length - 1])
tareas.pop()

console.log(tareas[0])
tareas.shift() 

tareas.push('Leer un libro')
tareas.unshift('Hacer ejercicio')

console.log(tareas)
console.log(tareas.length)

// activiti 7 (⊙_⊙;)

let peliculas = ["Toy Story","Shrek","Buscando a Nemo","Los Increíbles","Ratatouille"];

console.log(peliculas)
console.log(peliculas.length)

peliculas.push('Cars')
peliculas.push('Monster Inc')
console.log(peliculas)

peliculas.unshift('Intensamente')
peliculas.unshift('Coco')
console.log(peliculas)

console.log(peliculas.indexOf('Shrek'))
console.log(peliculas.indexOf('Coco'))
console.log(peliculas.indexOf('Frozen'))

console.log(peliculas.indexOf('Cars'))
let posicion = peliculas.indexOf('Cars')
 if (posicion == 7) {
      'Cars esta en la lista'
 } else {
     'Cars no esta en la lista'
 }

console.log(peliculas[peliculas.length - 1])
peliculas.pop()

console.log(peliculas[0])
peliculas.shift()

peliculas.push('Up')
console.log(peliculas.indexOf('Up'))

console.log(peliculas)
console.log(peliculas.length)

// Activiti 8! ~(>_<。)＼

let productosTienda = ["Celular","Notebook","Tablet","Teclado","Mouse"];

console.log(productosTienda)
console.log(productosTienda.length)

productosTienda.push('Monitor')
productosTienda.push('Impresora')
productosTienda.unshift('Camara Web')
productosTienda.unshift('Microfono')

console.log(productosTienda)
console.log(productosTienda.length)

console.log(productosTienda.indexOf('Notebook'))
console.log(productosTienda.indexOf('Microfono'))
console.log(productosTienda.indexOf('Parlantes'))

console.log(productosTienda[productosTienda.length - 1])
peliculas.pop()

console.log(productosTienda[0])
peliculas.shift()

console.log(productosTienda)

productosTienda.push('Parlantes')
productosTienda.unshift('Audiculares')

console.log(productosTienda.indexOf('Parlantes'))
console.log(productosTienda.indexOf('Audiculares'))
console.log(productosTienda.indexOf('Celular'))

console.log(productosTienda[productosTienda.length - 1])
peliculas.pop()

console.log(productosTienda[0])
peliculas.shift()

console.log(productosTienda)
console.log(productosTienda.length)