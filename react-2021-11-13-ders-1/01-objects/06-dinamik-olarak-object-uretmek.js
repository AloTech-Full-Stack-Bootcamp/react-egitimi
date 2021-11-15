// Dinamik Olarak Object Üretmek

function createCar(brand, customKey, customValue) {
  return {
    brand: brand,
    [customKey]: customKey, // ⚠️
    [customValue]: customValue, // ⚠️
  };
}

newCar = createCar("Volvo", "engine", "electric");
console.log(newCar); // returns {2020: '2020', brand: 'Volvo', customValue: 'red'}
console.log(newCar.engine); // returns electric
