// import local classes
import Engine from './engine.js';
import Display from './display.js';
import Audio from './audio.js';
import Mouse from './mouse.js';
import Elf from './elf.js';
import Sprite from './sprite.js';
import AnimatedSprite from './animatedsprite.js';
import Effects, {StarBurst} from './effects.js';
import Titlescreen from './titlescreen.js';
import Endscreen from './endscreen.js';

// setup game class
export default class Game {

  constructor() {

    // construct engine
    this.engine = new Engine();
    this.engine.update = this.update.bind(this);

    // add display
    this.display = new Display(1280, 720);

    // add mouse
    this.mouse = new Mouse(this.display.canvas, this.display.scale);

    // add audio mananger
    this.audio = new Audio();
    this.audio.loadManifest([
      {
        url: './assets/sounds/main.mp3',
        id: 'main',
        autoplay: false
      },
      {
        url: './assets/sounds/punch.mp3',
        id: 'punch',
        autoplay: false
      },
      {
        url: './assets/sounds/death.wav',
        id: 'death',
        autoplay: false
      },
      {
        url: './assets/sounds/hit0.mp3',
        id: 'hit0',
        autoplay: false
      },
      {
        url: './assets/sounds/hit1.mp3',
        id: 'hit1',
        autoplay: false
      },
      {
        url: './assets/sounds/hit2.mp3',
        id: 'hit2',
        autoplay: false
      },
      {
        url: './assets/sounds/hit3.mp3',
        id: 'hit3',
        autoplay: false
      },
      {
        url: './assets/sounds/hit4.mp3',
        id: 'hit4',
        autoplay: false
      },
      {
        url: './assets/sounds/hit5.mp3',
        id: 'hit5',
        autoplay: false
      }
    ], () => {
      this.audio.play('main', true);
      this.engine.run();
    });

    this.paused = false;

    this.mode = 'easy';

    this.deadElves = 0;

    this.giftsMade = 0;

    this.timeLeft = 0;

    this.elvesGrid = [5, 3];

    this.elves = [];

    this.effects = new Effects();

    this.titlescreen = new Titlescreen();

    this.endscreen = new Endscreen();

    this.state = 'titlescreen';

    this.effectiveness = [0, 0, 0];

    this.createElves();

    this.background = new Sprite({
  		x: 0,
  		y: 0,
  		width: 940,
  		height: 720,
  		startX: 0,
  		startY: 0,
  		url: './assets/images/background_01.png',
    });

    this.ui = new Sprite({
  		x: 940,
  		y: 0,
  		width: 1280-940,
  		height: 720,
  		startX: 0,
  		startY: 0,
  		url: './assets/images/background_02.png',
    });


    this.beltSprites = [];

    for (var x = 0; x < 47; x++) {
      for (var y = 0; y < 3; y++) {
        this.beltSprites.push(new AnimatedSprite({
      		x: x * 20,
      		y: y * 100 + y * 115 + 181,
      		width: 20,
      		height: 46,
          url: './assets/images/conveierbelt.png',
          currentAnimation: { x:0, y:0, f:20, s:1 }
        }));
      }
    }

    this.gifts = [];

    for (var x = 0; x < 5; x++) {
      for (var y = 0; y < 3; y++) {
        this.gifts.push(new Sprite({
      		x: x * -210,
      		y: y * 100 + y * 115 + 151,
      		width: 80,
      		height: 80,
      		startX: 0,
      		startY: 0,
      		url: './assets/images/gift.png',
        }));
      }
    }

  }

  createElves() {

    this.elves = [];

    for (var x = 0; x < this.elvesGrid[0]; x++) {
      for (var y = 0; y < this.elvesGrid[1]; y++) {
        this.elves.push(new Elf(x * 100 + x * 80 + 50, y * 100 + y * 115 + 80, y));
      }
    }
  }

  reset() {

    let days = 365;

    if(this.mode === 'easy') {
      days = 365;
    } else if (this.mode === 'hard') {
      days = 300;
    } else if (this.mode === 'nightmare') {
      days = 250;
    }

    this.deadElves = 0;
    this.timeLeft = days * 60;
    this.giftsMade = 0;
    this.createElves();
    this.state = 'playing';
  }

  start(mode = 'easy') {
    this.mode = mode;
    this.reset();
  }

  update() {

    if(this.state === 'titlescreen') {
      this.titlescreen.update(this);
      this.titlescreen.render(this.display);
      this.mouse.draw(this.display.context);
      this.mouse.update(this.display.scale);

      return;
    } else if (this.state === 'endscreen') {
      this.endscreen.update(this);
      this.endscreen.render(this.display);
      this.mouse.draw(this.display.context);
      this.mouse.update(this.display.scale);
      return;
    }

    if(
      this.mouse.isClicked() &&
      this.mouse.isColliding(1077, 647, 93, 48)
    ) {
      this.state = 'titlescreen';
      this.mouse.update(this.display.scale);
      this.return;
    }


    this.render();

    if(this.paused) return;

    this.timeLeft--;

    if(this.timeLeft <= 0 || this.giftsMade >= 2000000000) {
      this.endscreen.evaluate(this);
      this.state = 'endscreen';
      return;
    }


    this.effectiveness = [0,0,0];

    this.elves.forEach((elf, index) => {

      this.effectiveness[elf.row] += elf.getCapasaty();

      this.giftsMade += elf.getCapasaty() * 100;
      elf.update();

      if(elf.dead) return;

      if(elf.isColliding(this.mouse)) {
        elf.hover();

        if(this.mouse.isClicked()) {

          elf.wip();

          this.effects.add(new StarBurst(this.mouse.x, this.mouse.y, 10, 20));

          this.audio.play('punch');
          this.audio.play(`hit${Math.floor(Math.random() * 6)}`);

          if(elf.dead) {

            this.deadElves++;

            this.audio.play('death');
          }
        }
      }
    });

    this.beltSprites.forEach((sprite, index) => {
      sprite.currentAnimation.s =  0.1 + (1 - this.effectiveness[index % 3] / 500);
    });

    this.gifts.forEach((gift, index) => {
      gift.pos.x += (this.effectiveness[index % 3] / 500) * (this.effectiveness[index % 3] / 500) * 6 + 0.1;

      if(gift.pos.x > 950) {
        gift.pos.x = -100;
      }
    });


    this.mouse.update(this.display.scale);

  }

  render() {


    this.display.background('#aaa');

    this.background.render(this.display.context);

    this.beltSprites.forEach(sprite => {
      sprite.render(this.display.context);
    });

    this.display.setColor('white');

    this.elves.forEach(elf => {
      elf.render(this.display);
    });

    this.gifts.forEach(gift => {
      gift.render(this.display.context);
    });

    this.ui.render(this.display.context);

    this.effects.render(this.display.context);

    this.display.setColor('black');
    this.display.setTextAlign('center');

    this.display.text(`${Math.round(this.timeLeft / 60)}`, 'bold 40px monospace', 1170, 160);
    this.display.text(`${Math.round(this.effectiveness[0]/5)}%`, 'bold 30px monospace', 1010, 140);
    this.display.text(`${Math.round(this.effectiveness[1]/5)}%`, 'bold 30px monospace', 1010, 355);
    this.display.text(`${Math.round(this.effectiveness[2]/5)}%`, 'bold 30px monospace', 1010, 570);

    this.display.setTextAlign('right');
    this.display.text(this.deadElves.toString(), 'bold 30px monospace', 1170, 570);
    this.display.text(`${Math.round(this.giftsMade / 1000000)}M`, 'bold 30px monospace', 1200, 376);
    this.display.text(`2000M`, 'bold 30px monospace', 1200, 424);


    this.mouse.draw(this.display.context);

  }

}
