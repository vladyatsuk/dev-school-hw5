function findClosestSquareRoot(n) {
  let closest = 1;
  while (closest * closest <= n) {
    closest++;
  }
  return (closest - 1);
}

function isPrime(n) {
  if (n <= 1) return false;
  const closestSquareRoot = findClosestSquareRoot(n);
  for (let i = 2; i <= closestSquareRoot; i++) {
    if (n % i === 0) return false;
  }
  return true;
}


for (let i = -5; i <= 100; i++) {
  console.log(`${i} is prime:`, isPrime(i));
}

