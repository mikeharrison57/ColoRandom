class Color {
  constructor(hexCode) {
    this.hexCode = `#${hexCode}`;
    this.locked = false;
  }
}

module.export = Color;