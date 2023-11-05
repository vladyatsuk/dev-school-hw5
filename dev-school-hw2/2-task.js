function findEvenIndex(arr) {
  let left = 0;
  let right = arr.reduce((acc, el) => acc + el, -arr[0]);
  for (let i = 0; i < arr.length; i++) {
    if (left === right) return i;
    left += arr[i];
    right -= arr[i + 1];
  }
  return -1;
}