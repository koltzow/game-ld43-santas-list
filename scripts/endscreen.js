import Sprite from './sprite.js';

import ImageGameOver from '../assets/images/gameover.png';
import ImageWin from '../assets/images/win.png';

export default class Endscreen {

  constructor() {
    this.failed = false;

    this.gameover = new Sprite({
  		x: 0,
  		y: 0,
  		width: 1280,
  		height: 720,
  		startX: 0,
  		startY: 0,
  		url: ImageGameOver,
    });

    this.win = new Sprite({
  		x: 0,
  		y: 0,
  		width: 1280,
  		height: 720,
  		startX: 0,
  		startY: 0,
  		url: ImageWin,
    });
  }

  evaluate(game) {

    this.failed = false;

    if(game.timeLeft <= 0) {
      this.failed = true;
    }

  }

  update(game) {

    if(
      game.mouse.isClicked() &&
      game.mouse.isColliding(558, 510, 171, 48)
    ) {
      game.state = 'titlescreen';
    }
  }

  render(display) {

    display.background('#111');

    display.setColor('white');

    display.setTextAlign('center');

    if(this.failed) {
      this.gameover.render(display.context);
      display.text(`${Math.round((2000000000 - game.giftsMade)/1000000)} million`, 'bold 40px monospace', display.width/2, display.height/2 + 30);
    } else {
      this.win.render(display.context);
      display.text(`${Math.round(game.timeLeft / 60)} days left`, 'bold 40px monospace', display.width/2, display.height/2 + 30);
    }

    display.setColor('black');
    display.setTextAlign('right');

    display.text(`${game.deadElves}`, 'bold 40px monospace', 1080, 473);

  }

}
