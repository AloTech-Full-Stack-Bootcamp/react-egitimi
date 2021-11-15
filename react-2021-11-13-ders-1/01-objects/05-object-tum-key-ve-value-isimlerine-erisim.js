// Object Key isimlerine erişme

const car = {
  //key: value
  brand: "Volvo",
  year: 2020,
  "1-to-100": 7.2,
};

const keys = Object.keys(car);
console.log(keys); // returns  ['brand', 'year', '1-to-100']

console.log("keys:");
keys.map((item) => {
  console.log(item);
});

const values = Object.values(car);
console.log(values); // returns ['Volvo', 2020, 7.2]

console.log("values map:");
values.map((item) => {
  console.log(item);
});

const entries = Object.entries(car);
console.log(entries); // returns
/* [
  [
      "brand",
      "Volvo"
  ],
  [
      "year",
      2020
  ],
  [
      "1-to-100",
      7.2
  ]
] */

console.log("entries map:");
values.map((item) => {
  console.log(item);
});
