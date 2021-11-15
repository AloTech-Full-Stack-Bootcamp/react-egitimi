// Promises

/* const getComments = () => {
  return new Promise((resolve, reject) => {
    const sampleResponse = { id: 1, text: "This is my comment." };
    resolve(sampleResponse);
  });
};

getComments()
  .then((data) => console.log("comments loaded", data))
  .catch((e) => console.log(e));
 */
// Promise Örnek 2
// ---------------------------------------------------------------------------
const getComments = (number) => {
  return new Promise((resolve, reject) => {
    if (number == 1) {
      const sampleResponse = { id: 1, text: "This is my comment." };
      resolve(sampleResponse);
    } else {
      reject(new Error("not ok"));
    }
  });
};

getComments()
  .then((data) => console.log("comments loaded", data))
  .catch((e) => console.log(e));
