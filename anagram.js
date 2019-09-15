const anagram = (stringOne, stringTwo) => {
  const firstArray = stringOne
    .toLowerCase()
    .split("")
    .sort();
  const secondArray = stringTwo
    .toLowerCase()
    .split("")
    .sort();

  for (let index = 0; index < firstArray.length; index++) {
    if (firstArray[index] !== secondArray[index]) {
      return false;
    }

    return true;
  }
};

console.log(anagram("finder", "Friend"));
console.log(anagram("hello", "bye"));
