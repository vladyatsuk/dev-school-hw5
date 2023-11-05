function getRootProperty(obj, value) {
  for (const prop in obj) {
    if (Array.isArray(obj[prop]) && obj[prop].includes(value)) {
      return prop;
    } else if (typeof obj[prop] === 'object') {
      const result = getRootProperty(obj[prop], value);
      if (result !== null) {
        return prop;
      }
    }
  }
  return null;
}
