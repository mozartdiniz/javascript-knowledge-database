fizzBuzz = n => {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("fizzbuzz");
    } else if (i % 3 === 0) {
      console.log("buzz");
    } else if (i % 5 === 0) {
      console.log("fizz");
    } else {
      console.log(i);
    }
  }
};

fizBuzzTwo = n =>
  Array.apply(null, Array(n)).map((i, index) => {
    const v = index + 1;

    if (v % 3 === 0 && v % 5 === 0) {
      return "fizzbuzz";
    } else if (v % 3 === 0) {
      return "buzz";
    } else if (v % 5 === 0) {
      return "fizz";
    } else {
      return v;
    }
  });

fizzBuzz(20);
console.log(fizzBuzz(20));
