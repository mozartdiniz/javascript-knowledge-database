const fibonacciWithFor = n => {
  const arr = [0, 1];

  for (let i = 2; i < n + 1; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }

  return arr.join(", ");
};

const fibonacciWithRecursion = n =>
  n < 2 ? n : fibonacciWithRecursion(n - 1) + fibonacciWithRecursion(n - 2);

console.log(fibonacciWithFor(20));
console.log(fibonacciWithRecursion(20));
