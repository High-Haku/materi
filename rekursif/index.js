// recursive function
// function countDown(number) {
//   console.log(number);
//   if (number >= 0) {
//     countDown(number - 1);
//     console.log("dalam if", number);
//   }
// }

// countDown(10);

//looping function

// for (let i = 10; i > 0; i--) {
//   console.log(i);
// }

// resursive math pow

function mathPow(num, pangkat) {
  let result = 0;
  if (pangkat === 1) {
    return num;
  } else if (pangkat === 0) {
    return 1;
  } else {
    console.log("dalam else", num, pangkat);
    result = num * mathPow(num, pangkat - 1);
    console.log(result);
    return result;
  }
}

console.log(mathPow(2, 3));
