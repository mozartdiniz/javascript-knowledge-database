const findVowels = string => {
  const matched = string.match(/[aeiou]/gi);

  return matched ? matched.length : 0;
};

console.log(findVowels("something"));
console.log(findVowels("house"));
console.log(findVowels("super cool"));
