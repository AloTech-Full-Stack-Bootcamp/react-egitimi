// Destructuring
const a = 1;
const foo = { a: 123, b: true };
const { a: aFromServer, b } = foo;
// a 2. satırda zaten tanımlı olduğundan foo altındaki a değerini
// aFromServer değişken adını veriyoruz.

console.log(a, b, aFromServer);
// returns 1, true, 123

//------------------------------------------------------------
// fonksiyonlardaki Destructuring kullanımı:
const cikarma = ({ sayi1, sayi2 }) => {
  return sayi1 - sayi2;
};
const sayilar = {
  sayi2: 3,
  sayi1: 5,
};
cikarma(sayilar);
// sonuc 2

//------------------------------------------------------------
// Destructuring ile farklı değişken adına atama - değişken
const item = { x_coord: 30, y_coord: 80, width: 12, height: 24 };
const { x_coord: x, y_coord: y, width, height } = item;
console.log(x, y, width, height); // returns 30 80 12 24

//------------------------------------------------------------
// Destructuring ile farklı değişken adına atama - fonksiyon

const logItem = ({ x_coord: x, y_coord: y, width, height }) => {
  console.log(x, y, width, height);
};
logItem(item); // returns 30 80 12 24

//------------------------------------------------------------
// Destructuring'da default değer atama

const logItem2 = ({ x_coord: x, y_coord: y, width = 12, height = 12 }) => {
  console.log(x, y, width, height);
};
logItem2(item); // returns 30 80 12 24

//------------------------------------------------------------
// Destructring yöntemi ile Obje içindeki obje keylerini değişkene atama

const logItem3 = ({
  x_coord: x,
  y_coord: y,
  dimensions: { width, height } = {},
}) => {
  console.log(x, y, width, height);
};
console.log(logItem3(item));

// Obje'de olmayan bir key'e erişmeye çalışıldığında dönen değer: undefined
const myObj = { a: 1, b: 2 };
console.log(myObj.c);
// Olmayan bir objenin key'ine ulaşılmaya çalışıldığında dönen hata:
console.log(y.c); // Eğer Chrome'da çalıştırılırsa, y isimli bir nesne tanımlanmadığı için hata döner.
