/* setTimeout(() => {
  console.log("merhaba");
}, 500);
 */
/* const sonraCalistir = () => {
  console.log("merhaba");
};
setTimeout(sonraCalistir, 5000);
 */

/* setInterval(() => {
  console.log("her saniye bir merhaba!");
}, 1000);
 */
// bir methodu çalıştıran başka bir method yazalım:

function runFunction(callback, latency) {
  console.log("runFunction çağırıldı");
  setTimeout(callback, latency);
}
/* 
const logMessage = () => console.log("merhaba");
 */
function logMessage2() {
  console.log("merhaba");
}
runFunction(logMessage2, 2000);
