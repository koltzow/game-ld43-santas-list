export default class GamePad {

	constructor() {

		this.supported = "getGamepads" in navigator;
		this.count = 0;
		this.controllers = [
			{
				connected: false,
				ready: false,
				player: null,
				character: 1,
				gamepad: null,
				buttons: [],
				sticks: [],
				stick: {},
				dir: {
					x: 0,
					y: 0
				}
			},
	    {
	    	connected: false,
	    	ready: false,
	    	player: null,
	    	gamepad: null,
	    	character: 1,
	    	buttons: [],
	    	sticks: [],
	    	stick: {},
	    	dir: {
	    		x: 0,
	    		y: 0
	    	}
	    },
	    {
	    	connected: false,
	    	ready: false,
	    	player: null,
	    	gamepad:null,
	    	character: 2,
	    	buttons: [],
	    	sticks: [],
	    	stick: {},
	    	dir: {
	    		x: 0,
	    		y: 0
	    	}
	    },
	    {
	    	connected: false,
	    	ready: false,
	    	player: null,
	    	gamepad: null,
	    	character: 3,
	    	buttons: [],
	    	sticks: [],
	    	stick: {},
	    	dir: {
	    		x: 0,
	    		y: 0
	    	}
	    }
		];

		var pads = navigator.getGamepads();

		for (var i = 0; i < this.controllers.length; i++) {

			var controller = this.controllers[i];
			var pad = pads[i];

			if(pad !== null) {

		    if(!controller.connected){
		    	console.log('GAMEPAD '+(i+1)+': connected');
		    	controller.connected = true;
		    	this.count++;
		    }
			}
		}
	}

	update() {

		var pads = navigator.getGamepads();

		for (var i = 0; i < this.controllers.length; i++) {

			var controller = this.controllers[i];
			var pad = pads[i];

			if(pad !== null) {

			    if(!controller.connected){
			    	console.log('GAMEPAD '+(i+1)+': connected');
			    	controller.connected = true;
			    	this.count++;
			    }

			    if(pad.buttons !== undefined){

				    for (var j = 0; j < pad.buttons.length; j++) {

				    	if(controller.buttons[j] !== undefined){

								if(pad.buttons[j].pressed){
									//console.log(j);
								}

				    		controller.buttons[j].click = !controller.buttons[j].pressed && pad.buttons[j].pressed;
				    		controller.buttons[j].pressed = pad.buttons[j].pressed;
				    		controller.buttons[j].value = pad.buttons[j].value;

				    	} else {

				    		controller.buttons[j] = {
				    			pressed: pad.buttons[j].pressed,
				    			value: pad.buttons[j].value,
				    			click: false
				    		};

				    		controller.stick = {
				    			left: false,
					    		right: false,
				    			down: false,
				    			up: false
				    		};

				    	}

				    }

			    }

			    if(pad.axes !== undefined && pad.axes.length > 1){

			    	if(!Math.round(controller.sticks[0]) && (Math.round(pad.axes[0]) !== 0 || Math.round(pad.axes[1]) !== 0)){

			    		controller.stick.left = Math.round(controller.sticks[0]) !== -1 && Math.round(pad.axes[0]) === -1;
			    		controller.stick.right = Math.round(controller.sticks[0]) !== 1 && Math.round(pad.axes[0]) === 1;
			    		controller.stick.up = Math.round(controller.sticks[1]) !== -1 && Math.round(pad.axes[1]) === -1;
			    		controller.stick.down = Math.round(controller.sticks[1]) !== 1 && Math.round(pad.axes[1]) === 1;

			    	}

			    	controller.sticks = pad.axes;
			    	controller.dir.x = Math.round(controller.sticks[0]);
			    	controller.dir.y = Math.round(controller.sticks[1]);

			    }

			    if(controller.buttons[9].click && !EXP.startscreen.active) {
			    	EXP.engine.pause();
			    }

			} else {

				if(controller.connected){

					console.log('GAMEPAD '+(i+1)+': Disconnected');

					this.count--;
					controller.connected = false;
					controller.buttons = [];
					controller.sticks = [];
					controller.dir = {x: 0, y: 0};
					controller.stick['left'] = false;
					controller.stick['right'] = false;
					controller.stick['down'] = false;
					controller.stick['up'] = false;
				}

			}

		}
	}
}
