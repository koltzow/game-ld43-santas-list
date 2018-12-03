import Keyboard from './keyboard';
import Touch from './touch';
import GamePad from './gamepad';
import Mouse from './mouse';

export default class Controller {

	constructor() {

		this.keyboard = new Keyboard();
		this.touch = new Touch();
		this.gamepad = new GamePad();
		this.mouse = new Mouse();

		this.count = 0;
		this.controllers = [];

		this.update();


	}

	update(context) {

		if(this.gamepad.supported && this.gamepad.count > 0){
			this.type = 'gamepad';
			this.gamepad.update();
			this.controllers = this.gamepad.controllers;
			this.count = this.gamepad.count;
		} else if (this.touch.supported && this.touch.enabled) {
			this.type = 'touch';
			this.controllers[0] = this.touch;
			this.count = 1;
			this.controllers[0].render(context);
		} else {
			this.type = 'keyboard';
			this.controllers[0] = this.keyboard;
			this.count = 1;
		}

	}
}
