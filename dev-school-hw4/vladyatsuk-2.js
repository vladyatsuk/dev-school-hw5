class Vector {
  constructor(components) {
    this.components = components;
  }

  add(vector) {
    this.validateLength(vector);
    const result = this.components.map(
      (component, i) => component + vector.components[i]
    );
    return new Vector(result);
  }

  subtract(vector) {
    this.validateLength(vector);
    const result = this.components.map(
      (component, i) => component - vector.components[i]
    );
    return new Vector(result);
  }

  dot(vector) {
    this.validateLength(vector);
    return this.components.reduce(
      (acc, component, i) => acc + component * vector.components[i],
      0
    );
  }

  norm() {
    return Math.sqrt(
      this.components.reduce((acc, component) => acc + component * component, 0)
    );
  }

  toString() {
    return `(${this.components.join(',')})`;
  }

  equals(vector) {
    return this.components.every(
      (component, i) => component === vector.components[i]
    );
  }

  validateLength(vector) {
    if (this.components.length !== vector.components.length) {
      throw new Error('Vectors must be the same length');
    }
  }
}
