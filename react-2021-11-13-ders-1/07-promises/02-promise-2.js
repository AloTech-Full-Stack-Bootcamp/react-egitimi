// Promise Örnek 3
// ---------------------------------------------------------------------------
/* 
 import axios from "axios";
const getUsers = () => {
    return new Promise(async (resolve, reject) => {     // ⚠️ async eklemeyi unutma!
    const { data } = await axios("https://jsonplaceholder.typicode.com/users");
    resolve(data);
  });
};

getUsers()
  .then((data) => console.log("comments loaded", data))
  .catch((e) => console.log(e)); 
 */
// Promise Örnek 4
// ---------------------------------------------------------------------------

// import axios from "axios";
/* const getPost = (id) => {
  return new Promise(async (resolve, reject) => {
    const { data } = await axios(
      "https://jsonplaceholder.typicode.com/posts/" + id
    );
    resolve(data);
  });
};

getPost(1)
  .then((data) => console.log("post loaded:", data))
  .catch((e) => console.log(e)); */

// Promise Örnek 5
// örnek 3 ve 4 aynı kod içinde çalıştırıldığında sonuçlar sıralı olarak dönmez, bunu sıralı yapalım:
// ---------------------------------------------------------------------------

// yani şu iki çağrı:
getUsers()
  .then((data) => console.log("comments loaded", data))
  .catch((e) => console.log(e));

getPost(1)
  .then((data) => console.log("post loaded:", data))
  .catch((e) => console.log(e));

// şu şekilde:
async function test1() {
  await getUsers()
    .then((data) => console.log("comments loaded", data))
    .catch((e) => console.log(e));

  await getPost(1)
    .then((data) => console.log("post loaded:", data))
    .catch((e) => console.log(e));
}
test1();
//daha da sadeleştirelim:

(async () => {
  const users = await getUsers(true);
  const posts = await getPost(1);
  console.log(users);
  console.log(posts);
})();

//hata yakalayalım:
// --------------------------------------------------------------------

const getUsers = (isRejected) => {
  return new Promise(async (resolve, reject) => {
    if (isRejected) {
      reject("getUsers rejected!");
    } else {
      const { data } = await axios(
        "https://jsonplaceholder.typicode.com/users"
      );
      resolve(data);
    }
  });
};

(async () => {
  try {
    const users = await getUsers(true);
    const posts = await getPost(1);
    console.log(users);
    console.log(posts);
  } catch (e) {
    console.log(e);
  }
})();

//Promise.all ile sırasını önemsemeden birlikte çağırma

Promise.all([getUsers(), getPost(1)])
  .then(console.log)
  .catch(console.log);
