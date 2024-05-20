// Crear una matriz de objetos que representen libros en la biblioteca
const biblioteca = [
  { titulo: 'Cien años de soledad', autor: 'Gabriel García Márquez', disponible: true },
  { titulo: '1984', autor: 'George Orwell', disponible: false },
  { titulo: 'Don Quijote de la Mancha', autor: 'Miguel de Cervantes', disponible: true },
  // Agrega más libros aquí
];

// Función para buscar un libro por título
function buscarLibroPorTitulo(titulo) {
  for (const libro of biblioteca) {
    if (libro.titulo.toLowerCase() === titulo.toLowerCase()) {
      return libro;
    }
  }
  return null; // Si no se encuentra el libro
}

// Función para prestar un libro
function prestarLibro() {
  const titulo = prompt('Ingresa el título del libro que deseas prestar:');
  const libro = buscarLibroPorTitulo(titulo);
  if (libro) {
    if (libro.disponible) {
      libro.disponible = false;
      console.log(`El libro "${libro.titulo}" ha sido prestado.`);
    } else {
      console.log(`El libro "${libro.titulo}" no está disponible en este momento.`);
    }
  } else {
    console.log(`No se encontró el libro con el título "${titulo}".`);
  }
}

// Simulación de préstamo
prestarLibro();