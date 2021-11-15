// JSON objeleri
// sampleData.json'ı inceleyelim
// https://www.json.org/json-en.html
// JSON dosyası comment içermez, keyler tırnak içinde yazılmalıdır (reserved kelimelerin sorun yaratacağı düşünüldüğünden)

const veri = require("./07-sampleData.json");
console.log("veri: ------------------------------");
console.log(veri);

const cars = [
  {
    brand: "Volvo",
    year: 2020,
    "1-to-100": 7.2,
  },
  {
    brand: "Audi",
    year: 2020,
    "1-to-100": 7.2,
  },
];

cars.forEach((car) => console.log(car.brand));

const arrCars = Object.values(cars);
console.log("arrCars: ------------------------------");
console.log(arrCars);

const arrCarKeys = Object.keys(cars);
console.log("arrCarKeys: ------------------------------");
console.log(arrCarKeys);

const arrCarKeyValues = Object.entries(cars);
console.log("arrCarKeyValues: ------------------------------");
console.log(arrCarKeyValues);

console.log("arrCars forEach: ------------------------------");
arrCars.forEach((car) => console.log(car.brand));
