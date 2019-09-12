const sum = (a, b) => a + b;
const sumAll = (list) => list.reduce(sum, 0);

console.log(sumAll([1,2,3]));
