// JavaScript Array Methods
// https://www.javatpoint.com/es6-array-methods
const users = [
  { id: 1, name: "User 1", age: 20, city: "Helsinki" },
  { id: 2, name: "User 2", age: 30, city: "Tokio" },
  { id: 3, name: "User 3", age: 40, city: "Berlin" },
  { id: 4, name: "User 4", age: 40, city: "Moscow" },
  { id: 5, name: "User 5", age: 50, city: "Moscow" },
];

/* array methodları:
    push
    forEach
    map
    filter
    find
    some
    every
    includes
*/

// push
//------------------------------------------------------------------

users.push({ id: 4, name: "User 4" });
console.log(users);

// forEach
//------------------------------------------------------------------
const logNames = (users) => {
  users.forEach((user) => {
    console.log(user.name);
  });
};

// map
//------------------------------------------------------------------
const userIds = users.map((user) => user.id);

// filter
//------------------------------------------------------------------
const filteredUsers = users.map(
  (user) => user.age === 40 && user.city === "Moscow"
  //bunu kısaltalım?
);

// find
//------------------------------------------------------------------
const result = users.find((user) => user.age === 40);

// some
//------------------------------------------------------------------
const result = users.some((user) => user.age === 60);

// every
//------------------------------------------------------------------
const result = users.every((user) => user.age === 40);

// includes
//------------------------------------------------------------------
const letters = ["A", "B", "C"];
const hasLetterA = letters.includes("A");
