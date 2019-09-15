palindrome = text =>
  text
    .split("")
    .reverse()
    .join("");

console.log(palindrome("racecar") === "racecar");
console.log(palindrome("anna") === "anna");
console.log(palindrome("table") === "table");
