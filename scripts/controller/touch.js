export default class Touch {

	constructor() {

		this.supported = 'ontouchstart' in window;
    this.enabled = false;
    this.radius = 10;
    this.threshold = 20;
    this.pos = {
    	start: null,
   		move: null
   	};
    this.dir = {
    	x: 0,
    	y: 0
    };
    this.joystick = null;
    this.boost = null;
    this.listeners = [];

		window.addEventListener("touchstart", this.start.bind(this), false);
		window.addEventListener("touchmove", this.move.bind(this), false);
		window.addEventListener("touchend", this.end.bind(this), false);

	}

	start(e) {

		//e.preventDefault();

		if(!this.enabled){
			this.enabled = true;
		}

		this.pos.start = {
			x: e.touches[0].clientX,
			y: e.touches[0].clientY
		};

	}

	move(e) {

		if(this.pos.start === null)return;

		this.pos.move = {
			x: e.touches[0].clientX,
			y: e.touches[0].clientY
		};

		this.dir.x = 0;
		this.dir.y = 0;

		var difX = this.pos.move.x - this.pos.start.x;
		var difY = this.pos.move.y - this.pos.start.y;

		if((difX < this.threshold && difX > -this.threshold) && (difY < this.threshold && difY > -this.threshold)) return;

		let angle = Math.atan2(-1, 0) - Math.atan2(difY, difX);
		angle = -angle * 360 / (2*Math.PI);
		angle = (angle < 0) ? angle + 360: angle;

		if(angle < 22.5 || angle >= 337.5){
			this.dir.y = -1;
		} else if (angle < 67.5 && angle >= 22.5) {
			this.dir.x = 1;
			this.dir.y = -1;
		} else if (angle < 112.5 && angle >= 67.5) {
			this.dir.x = 1;
		} else if (angle < 157.5 && angle >= 112.5) {
			this.dir.x = 1;
			this.dir.y = 1;
		} else if (angle < 202.5 && angle >= 157.5) {
			this.dir.y = 1;
		} else if (angle < 247.5 && angle >= 202.5) {
			this.dir.x = -1;
			this.dir.y = 1;
		} else if (angle < 292.5 && angle >= 247.5) {
			this.dir.x = -1;
		} else if (angle < 337.5 && angle >= 292.5) {
			this.dir.x = -1;
			this.dir.y = -1;
		}

	}

	end(e){

		if(this.pos.start !== null && this.pos.move === null){
			console.log('click');
		}

		this.pos.start = null;
		this.pos.move = null;

		this.dir = {
			x: 0,
			y: 0
		};

	}

	render(ctx) {

		if(this.pos.start !== null){
			ctx.beginPath();
			ctx.arc(this.pos.start.x, this.pos.start.y, 40, 0, 2 * Math.PI, false);
			ctx.lineWidth = 2;
			ctx.strokeStyle = 'white';
			ctx.stroke();
		}

		if(this.pos.move !== null){
			ctx.beginPath();
			ctx.arc(this.pos.move.x, this.pos.move.y, 20, 0, 2 * Math.PI, false);
			ctx.fillStyle = 'rgba(255,255,255,0.5)';
			ctx.fill();
		}

	}
}
