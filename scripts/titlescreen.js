import Sprite from './sprite.js';

export default class Titlescreen {

  constructor() {
    this.sprite = new Sprite({
  		x: 0,
  		y: 0,
  		width: 1280,
  		height: 720,
  		startX: 0,
  		startY: 0,
  		url: '../assets/images/titlescreen.png',
    });
  }

  update(game) {

    if(game.mouse.isClicked()){

      if(game.mouse.isColliding(400, 510, 93, 48)) {
        game.start('easy');
      } else if (game.mouse.isColliding(597, 510, 93, 48)) {
        game.start('hard');
      } else if (game.mouse.isColliding(794, 510, 93, 48)) {
        game.start('nightmare');
      }

    };

  }

  render(display) {
    display.background('#111');

    this.sprite.render(display.context);

  }

}
