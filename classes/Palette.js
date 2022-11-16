class Palette {
	constructor(colors) {
		this.colors = colors;
		this.id = Math.random();
	};

	radomizeColors(color) {
    return Math.floor(Math.random() * color.length);
	};

	replaceColors() {
    this.colors.forEach(color => {
      radomizeColors(color)
    });
	};

	lockColor(color) {
    color.locked = true;
  }
};

module.exports = Palette;