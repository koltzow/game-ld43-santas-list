//starburst
export class StarBurst {


  constructor(x, y, l, limit) {

  	this.x = x;
  	this.y = y;
  	this.limit = (limit)?limit:30;
  	this.l = (l)?l:15;
  	this.stars = [];
  	this.s = 3;
  	this.r = 2;
  	this.c = ['#fff', '#ddd', '#aaa'];
    this.remove = false;

  	for (var i = 0; i < this.limit; i++) {

  		var d = Math.random() * Math.PI + Math.PI;
  		var s = Math.random() * this.s + this.s - 1;
  		var l = Math.random() * this.l + this.l;

  		this.stars[i] = {
  			x  : this.x,
  			y  : this.y,
  			vx : Math.cos(d) * s,
  			vy : Math.sin(d) * s,
  			l  : l,
  			r  : this.r,
  			c  : this.c[Math.floor(Math.random() * this.c.length)]
  		}

  	}
  }

	update() {

		if(this.stars.length <= 0){
			this.remove = true;
		} else {

			this.stars.forEach((s, i) => {

				s.x += s.vx;
		    s.y += s.vy;
		    s.l--;

		    if(
		    	s.l < 0 ||
		    	s.x < -s.r*2 ||
		    	s.y < -s.r*2
		    ){
		    	this.stars.splice(i, 1);
		    }

			});

		}

	}

	render (ctx) {

		this.stars.forEach((s, i) => {

			ctx.beginPath();
			ctx.arc(s.x, s.y, s.r, 0, s.r * Math.PI, false);
			ctx.fillStyle = s.c;
			ctx.fill();

		});

	}

}

export default class Effects {

  constructor() {
    this.list = [];
  }

  add(item) {
    this.list.push(item);
  }

  render(ctx) {

    this.list.forEach(effect => {

      effect.update();

      if(effect.remove) {
        let index = this.list.indexOf(effect);
    		if (index > -1) {
    		    this.list.splice(index, 1);
            return;
    		}
      }

      effect.render(ctx);

    });

  }

}
