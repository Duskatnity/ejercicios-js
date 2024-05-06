(async () => {

  try {
    const fs = require('fs/promises')
    const file = await fs.readFile('../tratemiento-de-datos/property-transmissions.json', 'utf8');
    const data = JSON.parse(file);

    const sumValues = Object.entries(data).reduce((acc, [place, entries]) => {
      acc[place] = entries.reduce((accYear, entry) => {
        const year = entry.date.split("-")[0];
        const value = parseFloat(entry.value);
        accYear[year] = (accYear[year] || 0) + value;
        return accYear;
      }, {});
      return acc;
    }, {});

    console.log(sumValues);

    fs.writeFile('property-transmissions-by-year.json', JSON.stringify(sumValues, null, 2))

  } catch (error) {
    console.error('Error:', error);
  }

})()

// (async () => {

//   const fs = require('fs/promises')

//   try {
    
//     const file = await fs.readFile('../data/property-transmissions.json', 'utf-8')
//     const data = JSON.parse(file)
//     const towns = {}

//     Object.entries(data).forEach(([key, value]) => {
//       const years = value.reduce((acc, element) => {
//         const year = element.date.split('-')[0]
        
//         if (!acc[year]) {
//           acc[year] = parseFloat(element.value)
//         }else{
//           acc[year] += parseFloat(element.value)
//         }

//         return acc
//       }, {})

//       towns[key] = years
//     })
    
//     fs.writeFile('../data/property-transmissions-by-year.json', JSON.stringify(towns, null, 2))

//   } catch (error) {
//     console.log(error)
//   }
// })()