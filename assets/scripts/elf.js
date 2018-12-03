import AnimatedSprite from './animatedsprite.js';
import Sprite from './sprite.js';

export default class Elf {

  constructor(x = 0, y = 0, row = 0) {

    this.pos = {
      x: x,
      y: y,
    };
    this.size = {
      x: 100,
      y: 100,
    };

    this.row = row;

    this.energy = 10000;
    this.health = 10000;

    this.hoverSprite = new Sprite({
  		x: this.pos.x + 10,
  		y: this.pos.y,
  		width: 80,
  		height: 80,
  		startX: 0,
  		startY: 0,
  		url: './assets/images/hover.png',
    });

    this.deadClock = 0;

    this.spriteUrl = './assets/images/elf.png';

    // create sprite
    this.sprite = new AnimatedSprite({
      width: this.size.x,
      height: this.size.y,
      x: this.pos.x,
      y: this.pos.y,
      url: this.spriteUrl,
      animations: {
        100:  { x:0, y:0, f:3, s:10 },
        80:   { x:0, y:1, f:3, s:10 },
        60:   { x:0, y:2, f:3, s:10 },
        40:   { x:0, y:3, f:3, s:10 },
        20:   { x:0, y:4, f:3, s:10 },
        dead: { x:0, y:5, f:1, s:10 }
      }
    });

    this.sprite.currentAnimation = this.sprite.animations[100];

  }

  getCapasaty() {

    if(this.dead) return 0;

    return Math.max(0, Math.round(this.energy/100));
  }

  getHealth() {
    return Math.max(0, Math.round(this.health/100));
  }

  hover() {
    this.hovering = true;
  }

  wip() {
    this.energy = 10000;
    this.energy = Math.min(10000, this.energy);
    this.health -= 2000;
    this.health = Math.min(this.health, 10000);

    this.sprite.currentAnimation = this.sprite.animations[Math.floor(this.health/100)];

    if(this.health <= 0) {
      this.kill();
    }
  }

  update() {

    if(this.dead) {

      this.deathClock--;

      if(this.deathClock < 0) {
        this.revive();
      }

      return;
    };

    this.energy -= 2;
    this.energy = Math.max(this.energy, 0);
    //this.health++;
    //this.health = Math.min(this.health, 10000);

  }

  isColliding(mouse) {

    return (
      mouse.x > this.pos.x + 10 &&
      mouse.x < this.pos.x + 90 &&
      mouse.y > this.pos.y &&
      mouse.y < this.pos.y + 80
    );

  }

  kill() {
    this.dead = true;
    this.energy = 0;
    this.health = 0;
    this.deathClock = 300;
    this.sprite.currentAnimation = this.sprite.animations.dead;

  }

  revive() {
    this.dead = false;
    this.energy = 10000;
    this.health = 10000;
    this.sprite.currentAnimation = this.sprite.animations[100];
  }

  render(display) {

    this.sprite.render(display.context);

    if(this.dead) {
      display.setTextAlign('center');
      display.text(`Dead`, '20px monospace', this.pos.x + this.size.x / 2, this.pos.y - 5);
    } else {
      display.setTextAlign('left');
      display.text(`${this.getCapasaty()}%`, '20px monospace', this.pos.x, this.pos.y - 5);
      display.setTextAlign('right')
      display.text(`+${this.getHealth()}`, '20px monospace', this.pos.x + this.size.x, this.pos.y - 5);
    }

    if(this.hovering) {
      this.hoverSprite.render(display.context);
    }

    this.hovering = false;
  }

}
