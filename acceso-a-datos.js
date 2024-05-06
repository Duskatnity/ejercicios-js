(() => {

  const curso = {
    nombre: "Introducción a JavaScript",
    estudiantes: [
      { nombre: "Juan", nota: 4.7 },
      { nombre: "Ana", nota: 5.5 },
      { nombre: "Pedro", nota: 3.3 }
    ]
  };

  for (let estudiante of curso.estudiantes) {
    if (estudiante.nota >= 5) {
      console.log('¡Enhorabuena ' + estudiante.nombre + ', has aprobado!')
    } else {
      console.log('Lo siento ' + estudiante.nombre + ', has suspendido...')
    }
  }

})()