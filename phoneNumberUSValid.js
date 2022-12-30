function telephoneCheck(str) {
  let regValid1 = /^(1\s?)?\d{3}([-\s]?)\d{3}\2\d{4}$/gi.test(str);
  let regValid2 = /^(1\s?)?\(\d{3}\)\s?\d{3}[-\s]?\d{4}$/gi.test(str);

  return regValid1 || regValid2;
}

telephoneCheck("555-555-5555");
telephoneCheck("1 555)555-5555");
