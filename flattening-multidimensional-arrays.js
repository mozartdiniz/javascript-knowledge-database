const myArray = [
  0,
  0,
  0,
  0,
  [1, 2],
  [3, 4, 5],
  [6, 7, 8, 9],
  [[11, 22, 33, 44], [55, 66, 77, 88]],
  [[[111, 222, 333], [444, 555, 666]]]
];

const isArray = array => array.constructor === Array;

const withReducerAndRecursion = array =>
  array.reduce(
    (prev, curr) =>
      isArray(curr)
        ? prev.concat(withReducerAndRecursion(curr))
        : prev.concat(curr),
    []
  );

console.log(withReducerAndRecursion(myArray));
