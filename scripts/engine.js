export default class Engine {

  constructor() {

    this.paused = true;
    this.now = new Date().getTime();
    this.deltaTime = 0;

  }

  update() {}

  loop() {

    if(this.paused) return;

    window.requestAnimationFrame(this.loop.bind(this));

    let now = new Date().getTime();
    this.deltaTime = now - this.now;

    this.update();

    this.now = now;

  }

  stop() {
    this.paused = true;
  }

  run() {
    this.paused = false;
    this.loop();
  }

}
