const myPromise = new Promise((resolve, reject) => {
  if (true) {
    setTimeout(() => {
      resolve("proses 2")
    }, 2000)
  } else {
    reject("cancel cuuy")
  }
})

// syarat await
// 1. cuma utk promise
// 2. harus di dlm async function
async function asyncAwait () {
  try {
    const result = await myPromise
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

//========= proses berjalan =============================

console.log("proses 1");

asyncAwait()

console.log("proses 3");