function rot13(str) {
  str = str.toUpperCase();
  return str.replace(/[\w]/g, generate);

  function generate(text) {
    const code = text.charCodeAt();
    // kode huruf A = 65, kode Z = 90 (maks)
    const convertCode = code + 13 <= 90 ? code + 13 : ((code + 13) % 90) + 64;
    return String.fromCharCode(convertCode);
  }
}

rot13("SERR PBQR PNZC");
