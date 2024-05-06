(async () => {
  try {
    const fs = require('fs/promises');
    const file = await fs.readFile('population.json', 'utf8');
    const data = JSON.parse(file);

    const tipos = {
      "Nascuts a Illes Balears": "balear",
      "Nascuts en una altra CA": "province",
      "Nascuts a l'estranger": "foreign"
    };

    const transformedData = {};

    Object.entries(data).forEach(([poblacion, valores]) => {
      const [, pueblo] = poblacion.split(' ');
      const poblacionTransformed = pueblo.toLowerCase().replace(/\d+/g, '').replace(/ /g, '-');
      transformedData[poblacionTransformed] = {};

      Object.entries(valores).forEach(([origen, datos]) => {
        const simplificar = tipos[origen];
        transformedData[poblacionTransformed][simplificar] = datos;
      });
    });

    console.log(JSON.stringify(transformedData, null, 2));
  } catch (error) {
    console.error('Error:', error);
  }
})();
