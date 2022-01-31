const myPromise = new Promise((resolve, reject) => {
  if (true) {
    resolve("proses 2")
  } else {
    reject("cancel")
  }
})

//========= proses berjalan =============================

console.log("proses 1");

myPromise
.then(result => {
  console.log(result);
})
.catch(err => {
  console.log(err);
})

console.log("proses 3");