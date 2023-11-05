function landPerimeter(arr) {
  let perimeter = 0;
  const height = arr.length;
  const width = arr[0].length;
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      if (arr[i][j] === 'X') {
        if ((i === 0 || arr[i - 1][j] === 'O')) perimeter++;
        if ((j === 0 || arr[i][j - 1] === 'O')) perimeter++;
        if ((i === height - 1 || arr[i + 1][j] === 'O')) perimeter++;
        if ((j === width - 1 || arr[i][j + 1] === 'O')) perimeter++;
      }
    }
  }
  return `Total land perimeter: ${perimeter}`;
}
