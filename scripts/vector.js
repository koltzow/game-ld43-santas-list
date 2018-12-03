export default class Vector {

	constructor(x, y) {

		if(typeof x != "number") {
			throw new Error("Invalid x value.");
    }

		if(typeof y != "number") {
			throw new Error("Invalid y value.");
    }

		this.x = x;
		this.y = y;

		this.subtract.bind(this);

	}

  get intX() {
    return Math.round(this.x);
  }

  get intY() {
    return Math.round(this.y);
  }

  set(x, y) {

    this.x = x;
    this.y = y;

		return this;

  }

	add(vector) {

		this.x += vector.x;
		this.y += vector.y;

		return this;

	}

	subtract(vector) {

		this.x -= vector.x;
		this.y -= vector.y;

		return this;

	}

	divide(value) {

		if(typeof value != "number") {
			throw new Error("Can't divide by non-number value.");
    }

		this.x /= value;
		this.y /= value;

		return this;

	}

	multiply(value) {

		if(value instanceof Vector) {

			this.x *= value.x;
			this.y *= value.y;

		} else if(typeof value == "number") {

			this.x *= value;
			this.y *= value;

		} else {

			throw new Error("Can't multiply by non-number value.");

    }

		return this;

	}

	distanceTo(otherPoint) {
		return otherPoint.clone().subtract(this);
	}

	moveTowards(v, amount) {

		var dir = new Vector(
			v.x - this.x,
			v.y - this.y
		).limitTo(amount);
		this.x += dir.x;
		this.y += dir.y;

		return this;

	}

	limitTo(value) {

		if(typeof value != "number") {
			throw new Error("Can't limit to non-number value.");
    }

		this.divide(this.length);
		this.multiply(value);

		return this;

	}

	dotProduct(v) {
		return (this.x * v.x) + (this.y * v.y);
	}

	angleFrom(v) {

		let angle = Math.atan2(v.y - this.y, v.x - this.x) - (Math.PI / 2);
		angle += Math.PI/2;

		if(angle < 0) {
      angle += Math.PI * 2;
    }

		return angle;

	}

	clone() {

		return new Vector(this.x, this.y);

	}

	toString() {

		return `(${this.x}, ${this.y})`;

  }

	equalTo(vector) {

		if(this.x == vector.x && this.y == vector.y) {

			return true;

    }

    return false;

	}

	get unitVector() {

		var length = this.length;

		return new Vector(
      this.x / length,
      this.y / length
    );

	}

	get length() {
		return Math.sqrt((this.x * this.x) + (this.y * this.y));
	}

	get minComponent() {
		return Math.min(this.x, this.y);
	}

	get maxComponent() {
		return Math.max(this.x, this.y);
	}

}

Vector.fromBearing = function(angle, length) {
	return new Vector(
		length * Math.cos(angle),
		length * Math.sin(angle)
	);
}

Vector.zero = new Vector(0, 0);
Vector.one = new Vector(1, 1);
