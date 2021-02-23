// 1. FIBONACCI PART
function fib(n) {
  n = +n;
  if (n == 1) {
    return 1;
  } else if (n == 2) {
    return 1;
  } else if (n > 2 && n <= 30) {
    return fib(n - 1) + fib(n - 2);
  } else if (n > 30) {
    return fibOptimized(n);
  } else {
    return undefined;
  }
}

function fibOptimized(n) {
  const x = (1 + Math.sqrt(5)) / 2;
  const y = (1 - Math.sqrt(5)) / 2;
  const res = (Math.pow(x, n) - Math.pow(y, n)) / Math.sqrt(5);
  return Math.floor(res);
}

// 2. SHIFT PART
function shift(arr = [], direction = "left", move = 1) {
  const arr_length = arr.length;
  move = move % arr_length;
  if (direction == "right") {
    move = arr_length - move;
  }
  const newArr = JSON.parse(JSON.stringify(arr));
  const movePart = newArr.splice(0, move);
  return newArr.concat(movePart);
}

// 3. SECOND MAX PART
function secondMax(arr = []) {
  if (!arr.length || arr.length == 0 || typeof arr != "object") {
    return "Error!";
  }
  const newArr = JSON.parse(JSON.stringify(arr));
  newArr.sort((a, b) => a - b);
  const uniqueArray = newArr.filter(function (currentValue, index, array) {
    return array.indexOf(currentValue) == index;
  });
  if (uniqueArray.length > 2) {
    return uniqueArray[uniqueArray.length - 2];
  } else if (uniqueArray.length <= 2) {
    return uniqueArray[0];
  }
}

// 4. FIZZ BUZZ PART
function fizzBuzz(n) {
  n = +n;
  const fizz = ["Fizz"];
  const buzz = ["Buzz"];
  return (fizz[n % 3] + buzz[n % 5]).replace(/undefined/g, "");
}

// console.log(fib(1))
// console.log(fib(3))
// console.log(fib(12))

// console.log(shift(['john', 'jane', 'sarah', 'alex'], 'left', 2));
// console.log(shift([1, 2, 3, 4 ,5], 'right', 3));

// console.log(secondMax([2, 3, 4, 5]));
// console.log(secondMax([9, 2, 21, 21]));
// console.log(secondMax([4, 4, 4, 4]));
// console.log(secondMax([4123]));
// console.log(secondMax([]));

// console.log(fizzBuzz(21))
// console.log(fizzBuzz(25))
// console.log(fizzBuzz(45))
// console.log(fizzBuzz([]))

