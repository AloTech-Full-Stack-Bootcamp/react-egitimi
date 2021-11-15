// Object References
// variables set to Primitive Values contain actual values,
// and variables set to Object References just contain references (or memory addresses).

let score1 = 10;
let score2 = score1;
score2 = 20;
console.log(score1, score2); // returns 10 20

let score1 = {
  value: 10,
  updateTime: "10:00:03",
};
let score2 = score1;
score1.value = 20;
console.log(score1, score2);
// returns {value: 20, updateTime: '10:00:03'} {value: 20, updateTime: '10:00:03'}
