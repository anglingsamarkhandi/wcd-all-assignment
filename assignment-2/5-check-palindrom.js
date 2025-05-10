function isPalindrome(str) {
  return str === str.split("").reverse().join("");
}

// contoh paenggunaan
let word = "elles";
console.log(`Palindrome: ${isPalindrome(word)}`);
