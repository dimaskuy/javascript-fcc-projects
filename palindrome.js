function palindrome(str) {
  str = str.toLowerCase();

  let regex = /[A-Za-z0-9]+/gi;
  let target = str.match(regex).join("");

  return target === target.split("").reverse().join("");
}

palindrome("_eye");
palindrome("not a palindrome");
