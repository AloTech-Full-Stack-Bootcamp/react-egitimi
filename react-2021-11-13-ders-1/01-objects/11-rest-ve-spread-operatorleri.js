// Rest (...) operatoru - fonksiyon parametresinde

const sum = ({ number1, number2, ...args }) => {
  let sonuc = number1 + number2;
  for (let number in args) {
    sonuc += args[number];
  }
  return sonuc;
};
const numbers = {
  number1: 8,
  number2: 4,
  number3: 7,
  number4: 9,
  number5: 11,
};
console.log(sum(numbers));
// returns 39

// Rest (...) operatoru - Değişken tanımında
//----------------------------------------------------------------
const numbers = {
  number1: 8,
  number2: 4,
  number3: 7,
  number4: 9,
  number5: 11,
};
const { number1, number2, ...args } = numbers;

// Spread (...) operatoru
//----------------------------------------------------------------
const defaultSettings = {
  isVisible: true,
  colorMode: "dark",
};
const customSettings = {
  colorMode: "light",
};

const finalSettings = { ...defaultSettings, ...customSettings };
const finalSettings2 = { isVisible: false, ...customSettings };

console.log(finalSettings); //returns {isVisible: true, colorMode: 'light'}
console.log(finalSettings2); //returns {isVisible: false, colorMode: 'light'}
