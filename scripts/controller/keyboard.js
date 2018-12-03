export default class Keyboard {

	constructor() {

		// log pressed and pressed keyes
		this.pressedKeys = {};
		this.clickedKeys = {};

		// set direction
    this.dir = {
			x: 0,
			y: 0,
		};

		//constants
		this.key = {
			SPACE 			: 'Space',
			ENTER			 	: 'Enter',
			ESC					: 'Escape',
			ARROW_LEFT  : 'ArrowLeft',
			ARROW_RIGHT : 'ArrowRight',
			ARROW_UP    : 'ArrowUp',
			ARROW_DOWN  : 'ArrowDown',
		};

		document.addEventListener("keydown", this.keydown.bind(this));
		document.addEventListener("keyup", this.keyup.bind(this));

	}

	clear() {

		// clear clicked key each update
		this.clickedKeys = {};

	}

	keydown(event) {

		// check to se if key is not already pressed
		if (
			!this.isPressed(event.which) ||
			!this.isPressed(event.keyCode) ||
			!this.isPressed(event.key) ||
			!this.isPressed(event.code)
		) {
			// save clicked key
			this.clickedKeys[event.which] = true;
			this.clickedKeys[event.keyCode] = true;
			this.clickedKeys[event.key] = true;
			this.clickedKeys[event.code] = true;
		}

		// save pressed key
		this.pressedKeys[event.which] = true;
		this.pressedKeys[event.keyCode] = true;
		this.pressedKeys[event.key] = true;
		this.pressedKeys[event.code] = true;

		this.dir.x = 0;
		this.dir.y = 0;

		if(this.isPressed('w') || this.isPressed('W') || this.isPressed('ArrowUp')){ this.dir.y -= 1; }
		if(this.isPressed('s') || this.isPressed('S') || this.isPressed('ArrowDown')){ this.dir.y += 1; }
		if(this.isPressed('a') || this.isPressed('A') || this.isPressed('ArrowLeft')){ this.dir.x -= 1; }
		if(this.isPressed('d') || this.isPressed('D') || this.isPressed('ArrowRight')){ this.dir.x += 1; }

	}

	keyup(event) {

		// forget pressed key
		this.pressedKeys[event.which] = false;
		this.pressedKeys[event.keyCode] = false;
		this.pressedKeys[event.key] = false;
		this.pressedKeys[event.code] = false;

		this.dir.x = 0;
		this.dir.y = 0;

		if(this.isPressed('w') || this.isPressed('W') || this.isPressed('ArrowUp')){ this.dir.y -= 1; }
		if(this.isPressed('s') || this.isPressed('S') || this.isPressed('ArrowDown')){ this.dir.y += 1; }
		if(this.isPressed('a') || this.isPressed('A') || this.isPressed('ArrowLeft')){ this.dir.x -= 1; }
		if(this.isPressed('d') || this.isPressed('D') || this.isPressed('ArrowRight')){ this.dir.x += 1; }

	}

	isPressed(key) {

		// check if key is pressed
		return this.pressedKeys[key];

	}

	isClicked(key) {

		// check if key is clicked
		return this.clickedKeys[key];

	}

	addKeyPressListener(keyCode, callback){

		document.addEventListener('keydown', function(e) {
			if (e.keyCode === keyCode || e.key === keyCode){
				callback(e);
			}
		});

	}
}
