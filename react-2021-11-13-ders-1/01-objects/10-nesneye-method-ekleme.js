var person = {
  name: "Rumeysa",
  surname: "Turgut",
  age: 23,
  city: "Istanbul",
  introduce: function () {
    console.log(`My name is ${this.name} ${this.surname}, I'm ${this.age} yo.`);
  },
};
// ⚠️ method tanımı Arrow function ile yapılırsa this'e erişilemez.

// yani;
//  () => {
//		return `My name is ${this.name} ${this.surname}, I'm ${this.age} yo.`;
//	},

//------------------------------------------------------------------------
// önceden oluşturulmuş nesneye method ekleme
person.getCity = function () {
  console.log(`I live in ${this.city}`);
};
person.getCity();

function Insan(isim, yas) {
  this.isim = isim;
  this.yas = yas;
}

const insan1 = new Insan("X", 20);
console.log(insan1.yas);
