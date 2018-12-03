export default class Display {

  constructor(width = window.innerWidth, height = window.innerHeight) {

    this.canvas = document.createElement('canvas');
    this.width = width;
    this.height = height;
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    
    this.context = this.canvas.getContext('2d');

    this.addDisplay();

    this.scale = this.canvas.offsetWidth / this.width;

    window.addEventListener('resize', this.resize.bind(this));

  }

  addDisplay() {

    this.canvas.style.position = 'absolute';

    document.body.appendChild(this.canvas);
  }

  clear() {
    this.context.clearRect(0, 0, this.width, this.height);
  }

  background(color) {
    this.context.fillStyle = color;
    this.context.fillRect(0, 0, this.width, this.height);
  }

  translate(x, y) {
    this.context.translate(x, y);
  }

  text( string, font, x, y) {
    this.context.font = font || '30px Arial';
    this.context.fillText(string || '', x, y);
  }

  setColor(color) {
    this.context.fillStyle = color;
  }

  setTextAlign(align = this.context.textAlign) {
    this.context.textAlign = align
  }

  circle(x = 0, y = 0, radius = 10) {
    this.context.beginPath();
    this.context.arc(x,y,radius,0,2*Math.PI);
    this.context.fill();
  }

  rect(x = 0, y = 0, width = 0, height = 0) {
    this.context.fillRect(x, y, width, height);
  }

  setSize( width, height ) {
    this.width = width;
    this.height = height;
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    this.canvas.style.width = this.width + 'px';
    this.canvas.style.height = this.height + 'px';
  }

  resize() {
    this.scale = this.canvas.offsetWidth / this.width;
  }

}
