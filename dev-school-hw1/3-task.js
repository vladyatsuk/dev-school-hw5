function findNb(m) {
  let volume = 0;
  for (let i = 1; volume <= m; i++) {
    volume += i * i * i;
    if (volume === m) return i;
  }
  return -1;
}
