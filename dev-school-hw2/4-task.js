function unpackSausages(truck) {
  let displayCounter = '';
  let validPacks = 0;

  for (const box of truck) {
    for (const pack of box) {
      if (pack.startsWith('[') && pack.endsWith(']') && pack.length === 6) {
        let buffer = '';
        const sausageType = pack[1];

        for (const sausage of pack.slice(1, 5)) {
          if (sausage === sausageType) {
            buffer += sausage + ' ';
          } else {
            buffer = '';
            break;
          }
        }

        if (buffer !== '') {
          if ((validPacks + 1) % 5 === 0) {
            validPacks++;
          } else {
            displayCounter += buffer;
            validPacks++;
          }
        }
      }
    }
  }
  return displayCounter.trim();
}
