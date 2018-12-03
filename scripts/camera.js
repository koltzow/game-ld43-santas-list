export default class Camera {

  constructor() {

    this.x = 0;
    this.y = 0;

    this._x = 0;
    this._y = 0;

    this.easing = 0.94;

    this.target = null;

  }

  setPosition(x, y) {
    this._x = x;
    this._y = y;
  }

  follow(target) {
    this.target = target;

    let targetPosition = this.target.center();

    this.setPosition(targetPosition.x, targetPosition.y);
  }

  update() {

    if(this.target) {
      let targetPosition = this.target.center();
      this.setPosition(targetPosition.x, targetPosition.y);
    }

    this.x += (this._x - this.x) * this.easing;
    this.y += (this._y - this.y) * this.easing;
  }

}
