function largestRadialSum(arr, d) {
  const numberOfGroups = arr.length / d;
  const combinedarr = new Array(numberOfGroups).fill(0);
  let maxHonor = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    const currGroup = i % numberOfGroups;
    combinedarr[currGroup] += arr[i];
  }
  for (const honor of combinedarr) {
    if (honor > maxHonor) maxHonor = honor;
  }
  return maxHonor;
}