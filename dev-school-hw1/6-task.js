function descendingOrder(n) {
  const digits = n.toString().split('');
  let sorted = false;
  while (!sorted) {
    sorted = true;
    for (let i = 0; i < digits.length - 1; i++) {
      if (digits[i] < digits[i+1]) {
        sorted = false;
        temp = digits[i];
        digits[i] = digits[i + 1];
        digits[i + 1] = temp;
      }
    }
  }
  return +digits.join('');
}
