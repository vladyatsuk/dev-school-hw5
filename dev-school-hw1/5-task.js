function highAndLow(numbers) {
  let max = -Infinity;
  let min = Infinity;
  let curString = '';
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === ' ' || i === (numbers.length - 1)) {
      const isLastChar = (i === (numbers.length - 1));
      const n = parseInt(isLastChar ? curString + numbers[i] : curString);
      if (max < n) max = n;
      if (min > n) min = n;
      curString = '';
    } else curString += numbers[i];
  }
  return `${max} ${min}`;
}
