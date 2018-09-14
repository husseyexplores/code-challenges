const caesar = (string, shift) => {
  return string.split('').map(char => charShift(char, shift)).join('');
};

const codeSet = code => code >= 97 ? 97 : 65;

const mod = (n, m) => ((n % m) + m) % m;

const charShift = (char, shift) => {
  let code = char.charCodeAt();

  if (char.match(/[A-Za-z]/g)) {
    code = mod((code + shift) - codeSet(code), 26) + codeSet(code);
  }

  return String.fromCharCode(code)
}

module.exports = caesar;