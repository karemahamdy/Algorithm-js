// Recursion is a programming technique where a function calls itself repeatedly to solve a problem

// Program to countdown till 1

// recursive function
function counter(count) {

  // display count
  console.log(count);

  // condition for stopping
  if (count > 1) {

    // decrease count
    count = count - 1;

    // call counter with new value of count
    counter(count);
  } else {

    // terminate execution
    return;
  };
};

// access function
counter(5);