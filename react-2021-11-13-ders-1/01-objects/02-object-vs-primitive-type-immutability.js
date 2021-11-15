// Immutability

const letters1 = ["A", "B", "D"]; // Bu bir array değer olmasına rağmen tipi obje'dir. Array'ler obje'den türetilir.
// DENE: Chrome dev tools'da console.log( [] ) kodunu çalıştırıp, alt satırdaki ok işaretine baınca gelen Prototype key'ine tıklayıp
// obje'den inherit edildiğini görebiliriz.
// Bir x değişkeninin Array mi Obje mi olduğunu ayırt etmek için, Array.isArray(x) methodunu kullanabiliriz.
letters1[2] = "C";

const letters2 = "ABD";
letters2[2] = "C";
// Bir string'in karakterlerine index'lerine göre erişmek mümkün fakat değiştirmek mümkün değil.

console.log("letters1", letters1); // returns ['A', 'B', 'C']
console.log("letters2", letters2); // returns "ABD"

// Primitive değere sahip değişkenlerin değerlerini değiştiremiyoruz fakat yeniden atayabiliyoruz.
// Örneğin,
// let x = true şeklinde tanımlanmış x değişkenine ait, false değerini değiştirmenin tek yolu
// Değişkene tekrardan bir değer ataması yapmak:
// x = false gibi.

// fakat obje referansına sahip bir değişkenin değerini değiştirmek için iki yol da mümkün:
// let x = {isActive:true, isDisabled:false}
// x.isActive = false
// Burada x değişkenine yeniden atama yapılmıyor, sadece isActive key'i güncelleniyor.
// x'e yeniden atama yaparak değerini değiştirmek:
// x = {isActive:false,isDisabled:false}
