import Vector from './vector';
import Sprite from './sprite';

export default class AnimatedSprite extends Sprite {

	constructor({
		x = 0,
		y = 0,
		width = 0,
		height = 0,
		startX = 0,
		startY = 0,
		url = 'assets/images/tilesheets/default.png',
		animations = {
			default: {x: 0, y: 0, f: 1, s: 1}
		},
		currentAnimation = {x: 0, y: 0, f: 1, s: 1},
	} = {}) {

		super({
			x: x,
			y: y,
			width: width,
			height: height,
			startX: startX,
			startY: startY,
			url: url,
		});

		this.type = 'animatedsprite';
		this.animations = animations;
		this.currentAnimation = currentAnimation;
		this.currentAnimationFrame = 0;

	}

	setAnimation(name) {

		return true;

	}

	render(ctx) {

		this.currentAnimationFrame += 1/this.currentAnimation.s;

		if(this.currentAnimationFrame >= this.currentAnimation.f){
			this.currentAnimationFrame = 0;
		}

		if(this.angle !== 0){

			ctx.translate(this.pos.intX + this.size.intX/2, this.pos.intY + this.size.intY/2);
			ctx.rotate(this.angle);
			ctx.drawImage(
				this.tilesheet,
				(this.currentAnimation.x+Math.floor(this.currentAnimationFrame))*this.size.x,
				this.currentAnimation.y*this.height,
				this.size.intX,
				this.size.intY,
				-this.size.intX/2,
				-this.size.intY/2,
				this.size.intX,
				this.size.intY
			);

			ctx.rotate(-this.angle);
			ctx.translate(-(this.pos.intX + this.size.intX/2), -(this.pos.intY + this.size.intY/2));

		} else {

			ctx.drawImage(
				this.tilesheet,
				(this.currentAnimation.x+Math.floor(this.currentAnimationFrame))*this.size.intX,
				this.currentAnimation.y*this.size.intY,
				this.size.intX,
				this.size.intY,
				this.pos.intX,
				this.pos.intY,
				this.size.intX,
				this.size.intY
			);

		}
	}
}
