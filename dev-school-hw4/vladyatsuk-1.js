class VigenèreCipher {
  constructor(key, alphabet) {
    this.key = key;
    this.alphabet = alphabet;
  }

  encode(str) {
    return str
      .split('')
      .map((char, i) => {
        if (this.alphabet.includes(char)) {
          const newIndex =
            this.alphabet.indexOf(char) +
            this.alphabet.indexOf(this.key[i % this.key.length]);
          return this.alphabet[newIndex % this.alphabet.length];
        }
        return char;
      })
      .join('');
  }

  decode(str) {
    return str
      .split('')
      .map((char, i) => {
        if (this.alphabet.includes(char)) {
          const newIndex =
            this.alphabet.indexOf(char) -
            this.alphabet.indexOf(this.key[i % this.key.length]);
          return this.alphabet[
            (newIndex + this.alphabet.length) % this.alphabet.length
          ];
        }
        return char;
      })
      .join('');
  }
}
