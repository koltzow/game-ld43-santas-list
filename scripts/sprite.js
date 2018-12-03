import Vector from './vector';

export default class Sprite {

	constructor({
		x = 0,
		y = 0,
		width = 0,
		height = 0,
		startX = 0,
		startY = 0,
		url = 'images/tilesheets/default.png',
	} = {}) {

		this.center = [];
		this.type = 'sprite';
		this.tilesheet = new Image();
		this.tilesheet.src = url;
		this.start = new Vector(startX, startY);
		this.pos = new Vector(x, y);
		this.size = new Vector(width, height);
		this.angle = 0;

	}

	setPosition(x, y) {
		this.pos.set(x, y);
	}

	setAngle(angle = 0) {
		this.angle = angle;
	}

	render(ctx) {

		if(this.angle === 0){

			ctx.drawImage(
				this.tilesheet,
				this.start.intX,
				this.start.intY,
				this.size.intX,
				this.size.intY,
				this.pos.intX,
				this.pos.intY,
				this.size.intX,
				this.size.intY
			);

			return;
		}

		ctx.translate(this.pos.intX + this.size.intX/2, this.pos.intY + this.size.intY/2);
		ctx.rotate(this.angle);

		ctx.drawImage(
			this.tilesheet,
			this.start.intX,
			this.start.intY,
			this.size.intX,
			this.size.intY,
			-this.size.intX/2,
			-this.size.intY/2,
			this.size.intX,
			this.size.intY
		);

		ctx.rotate(-this.angle);
		ctx.translate(-(this.pos.intX + this.size.intX/2), -(this.pos.intY + this.size.intY/2));

	}
}
