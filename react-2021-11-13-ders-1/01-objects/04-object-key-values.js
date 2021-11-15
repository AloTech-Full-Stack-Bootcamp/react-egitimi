// Object Anahtar(Key) ve Değer(Value) Yapısının Kullanımı ve Metodları

const car = {
  //key: value
  brand: "Volvo",
  year: 2020,
  "1-to-100": 7.2,
};

console.log(car.brand); // ✔️ returns "Volvo"
//console.log(car.1-to-100)  // ❌
console.log(car["1-to-100"]); // ✔️ returns 7.2

// ------------------------------------------------------
// key ismi yerine bir değişken vererek değere ulaşma:

const propertyName = "brand"; // istenen değerin key'i
console.log(car[propertyName]); // returns "Volvo"

// ------------------------------------------------------
// Bir anahtarın değerini değiştirme

car.brand = "Audi";
car["1-to-100"] = "8.2";

// ------------------------------------------------------
// Nesneye yeni anahtar ekleme
car.color = "red";
