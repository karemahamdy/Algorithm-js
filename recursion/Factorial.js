// Factorial

// recursive function
function factorial(num) {

  // base case
  // recurse only if num is greater than 0
  if (num > 1) {
    return num * factorial(num - 1);
  }
  else {
    return 1;
  };
};

let x = 3;

// store result of factorial() in variable
let y = factorial(x);

console.log(`The factorial of ${x} is ${y}`);