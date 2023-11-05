function groupAnagrams(words) {
  const anagramGroupsMap = new Map();
  for (const word of words) {
    const sortedWord = word.split('').sort().join('');
    if (!anagramGroupsMap.has(sortedWord)) {
      anagramGroupsMap.set(sortedWord, [word]);
    } else {
      anagramGroupsMap.get(sortedWord).push(word);
    }
  }
  return [...anagramGroupsMap.values()];
}
