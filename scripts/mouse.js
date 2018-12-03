export default class Mouse {

	constructor(target = null, scale = 1) {

		// define position
		this.x = 0;
		this.y = 0;

		// define states
		this.mousedown = false;
		this.mouseup = false;
		this.clicked = false;

		// set scale
		this.scale = scale;

		// set mouse target
		this.target = target;

		// add eventlisteners
		if(target) {
			target.addEventListener('mousemove', this.mousemove.bind(this));
			target.addEventListener('click', this.click.bind(this));
		}

	}

	clear() {
		this.clicked = false;
	}

	setScale(scale) {
		this.scale = scale;
	}

	click() {
		this.clicked = true;
	}

	isClicked() {
		return this.clicked;
	}

	mousemove(e) {
		this.x = e.offsetX / this.scale;
		this.y = e.offsetY / this.scale;
	}

	mousedown(e) {
		this.mousedown = true;
	}

	mouseup(e) {
		this.mousedown = false;
		this.mouseup = true;
	}

	update(scale) {
		this.clear();
		this.scale = scale;
	}

	isColliding(targetX, targetY, targetW, targetH) {
    return (
      this.x > targetX &&
      this.x < targetX + targetW &&
      this.y > targetY &&
      this.y < targetY + targetH
    );
  }

	draw(context) {

		context.fillStyle = 'rgba(255,255,255,0.5)';
		context.beginPath();
		context.arc(this.x, this.y, 20, 0, Math.PI*2);
		context.fill();

	}

}
