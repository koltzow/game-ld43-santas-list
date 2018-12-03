/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/game.js */ \"./scripts/game.js\");\nconsole.log('start');\n\n\n\nwindow.game = new _scripts_game_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./scripts/animatedsprite.js":
/*!***********************************!*\
  !*** ./scripts/animatedsprite.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return AnimatedSprite; });\n/* harmony import */ var _vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vector */ \"./scripts/vector.js\");\n/* harmony import */ var _sprite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sprite */ \"./scripts/sprite.js\");\n\n\n\nclass AnimatedSprite extends _sprite__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {\n\n\tconstructor({\n\t\tx = 0,\n\t\ty = 0,\n\t\twidth = 0,\n\t\theight = 0,\n\t\tstartX = 0,\n\t\tstartY = 0,\n\t\turl = 'assets/images/tilesheets/default.png',\n\t\tanimations = {\n\t\t\tdefault: {x: 0, y: 0, f: 1, s: 1}\n\t\t},\n\t\tcurrentAnimation = {x: 0, y: 0, f: 1, s: 1},\n\t} = {}) {\n\n\t\tsuper({\n\t\t\tx: x,\n\t\t\ty: y,\n\t\t\twidth: width,\n\t\t\theight: height,\n\t\t\tstartX: startX,\n\t\t\tstartY: startY,\n\t\t\turl: url,\n\t\t});\n\n\t\tthis.type = 'animatedsprite';\n\t\tthis.animations = animations;\n\t\tthis.currentAnimation = currentAnimation;\n\t\tthis.currentAnimationFrame = 0;\n\n\t}\n\n\tsetAnimation(name) {\n\n\t\treturn true;\n\n\t}\n\n\trender(ctx) {\n\n\t\tthis.currentAnimationFrame += 1/this.currentAnimation.s;\n\n\t\tif(this.currentAnimationFrame >= this.currentAnimation.f){\n\t\t\tthis.currentAnimationFrame = 0;\n\t\t}\n\n\t\tif(this.angle !== 0){\n\n\t\t\tctx.translate(this.pos.intX + this.size.intX/2, this.pos.intY + this.size.intY/2);\n\t\t\tctx.rotate(this.angle);\n\t\t\tctx.drawImage(\n\t\t\t\tthis.tilesheet,\n\t\t\t\t(this.currentAnimation.x+Math.floor(this.currentAnimationFrame))*this.size.x,\n\t\t\t\tthis.currentAnimation.y*this.height,\n\t\t\t\tthis.size.intX,\n\t\t\t\tthis.size.intY,\n\t\t\t\t-this.size.intX/2,\n\t\t\t\t-this.size.intY/2,\n\t\t\t\tthis.size.intX,\n\t\t\t\tthis.size.intY\n\t\t\t);\n\n\t\t\tctx.rotate(-this.angle);\n\t\t\tctx.translate(-(this.pos.intX + this.size.intX/2), -(this.pos.intY + this.size.intY/2));\n\n\t\t} else {\n\n\t\t\tctx.drawImage(\n\t\t\t\tthis.tilesheet,\n\t\t\t\t(this.currentAnimation.x+Math.floor(this.currentAnimationFrame))*this.size.intX,\n\t\t\t\tthis.currentAnimation.y*this.size.intY,\n\t\t\t\tthis.size.intX,\n\t\t\t\tthis.size.intY,\n\t\t\t\tthis.pos.intX,\n\t\t\t\tthis.pos.intY,\n\t\t\t\tthis.size.intX,\n\t\t\t\tthis.size.intY\n\t\t\t);\n\n\t\t}\n\t}\n}\n\n\n//# sourceURL=webpack:///./scripts/animatedsprite.js?");

/***/ }),

/***/ "./scripts/audio.js":
/*!**************************!*\
  !*** ./scripts/audio.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Audio; });\n/* harmony import */ var _bufferloader_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bufferloader.js */ \"./scripts/bufferloader.js\");\n\n\nclass Audio {\n\n  constructor() {\n\n    this.soundClips = [];\n    this.context = new AudioContext();\n\n  }\n\n  loadManifest(manifest, callback) {\n\n    let count = 0;\n\n    manifest.forEach(audio => {\n      this.load(audio.url, audio.id, audio.autoplay, () => {\n        count++;\n\n        if(count >= manifest.length) {\n          if(callback) {\n            callback();\n          }\n        }\n\n      });\n\n    });\n  }\n\n  load(sound = null, id = '', play = false, callback) {\n    if(!sound) {\n      throw new Error('missing path to load');\n    }\n\n    if(id.length < 1) {\n      throw new Error('missing sound name');\n    }\n\n    if(this.soundClips[name]) {\n      throw new Error('sound already exists');\n    }\n\n    const bufferLoader = new _bufferloader_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\n      this.context,\n      [sound],\n      (bufferList)=> {\n\n        bufferList.forEach(buffer => {\n          let audioSource = this.context.createBufferSource();\n          audioSource.buffer = buffer;\n          audioSource.connect(this.context.destination);\n\n          if(play) {\n            audioSource.start(0);\n          }\n\n          this.soundClips[id] = audioSource;\n        });\n\n        callback();\n\n      }\n    );\n\n    bufferLoader.load();\n\n  }\n\n  play(name = '', loop = false, volume = false) {\n    if(name.length < 1) {\n      throw new Error('missing sound name');\n    }\n\n    if(!this.soundClips[name]){\n      console.log('no sounds with that name or not ready');\n      return\n    }\n\n    const newSource = this.context.createBufferSource();\n    newSource.buffer = this.soundClips[name].buffer;\n    newSource.loop = loop;\n\n    if(volume) {\n\n      let gainNode = this.context.createGain();\n      gainNode.gain.value = volume;\n      gainNode.connect(this.context.destination);\n      newSource.connect(gainNode);\n    } else {\n      newSource.connect(this.context.destination);\n    }\n\n    newSource.start(0);\n  }\n\n}\n\n\n//# sourceURL=webpack:///./scripts/audio.js?");

/***/ }),

/***/ "./scripts/bufferloader.js":
/*!*********************************!*\
  !*** ./scripts/bufferloader.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return BufferLoader; });\nclass BufferLoader {\n\n  constructor(context, urlList, callback) {\n\n    this.context = context;\n    this.urlList = urlList;\n    this.onload = callback;\n    this.bufferList = new Array();\n    this.loadCount = 0;\n\n  }\n\n  loadBuffer(url, index) {\n    // Load buffer asynchronously\n    var request = new XMLHttpRequest();\n    request.open(\"GET\", url, true);\n    request.responseType = \"arraybuffer\";\n\n    var loader = this;\n\n    request.onload = function() {\n      // Asynchronously decode the audio file data in request.response\n      loader.context.decodeAudioData(\n        request.response,\n        function(buffer) {\n          if (!buffer) {\n            alert('error decoding file data: ' + url);\n            return;\n          }\n          loader.bufferList[index] = buffer;\n          if (++loader.loadCount == loader.urlList.length)\n            loader.onload(loader.bufferList);\n        },\n        function(error) {\n          console.error('decodeAudioData error', error);\n        }\n      );\n    }\n\n    request.onerror = function() {\n      alert('BufferLoader: XHR error');\n    }\n\n    request.send();\n  }\n\n  load() {\n    for (var i = 0; i < this.urlList.length; ++i)\n    this.loadBuffer(this.urlList[i], i);\n  }\n\n\n}\n\n\n//# sourceURL=webpack:///./scripts/bufferloader.js?");

/***/ }),

/***/ "./scripts/controller/mouse.js":
/*!*************************************!*\
  !*** ./scripts/controller/mouse.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Mouse; });\nclass Mouse {\n\n\tconstructor(target = null, scale = 1) {\n\n\t\t// define position\n\t\tthis.x = 0;\n\t\tthis.y = 0;\n\n\t\t// define states\n\t\tthis.mousedown = false;\n\t\tthis.mouseup = false;\n\t\tthis.clicked = false;\n\n\t\t// set scale\n\t\tthis.scale = scale;\n\n\t\t// set mouse target\n\t\tthis.target = target;\n\n\t\t// add eventlisteners\n\t\tif(target) {\n\t\t\ttarget.addEventListener('mousemove', this.mousemove.bind(this));\n\t\t\ttarget.addEventListener('click', this.click.bind(this));\n\t\t}\n\n\t}\n\n\tclear() {\n\t\tthis.clicked = false;\n\t}\n\n\tsetScale(scale) {\n\t\tthis.scale = scale;\n\t}\n\n\tclick() {\n\t\tthis.clicked = true;\n\t}\n\n\tisClicked() {\n\t\treturn this.clicked;\n\t}\n\n\tmousemove(e) {\n\t\tthis.x = e.offsetX / this.scale;\n\t\tthis.y = e.offsetY / this.scale;\n\t}\n\n\tmousedown(e) {\n\t\tthis.mousedown = true;\n\t}\n\n\tmouseup(e) {\n\t\tthis.mousedown = false;\n\t\tthis.mouseup = true;\n\t}\n\n\tupdate(scale) {\n\t\tthis.clear();\n\t\tthis.scale = scale;\n\t}\n\n\tisColliding(targetX, targetY, targetW, targetH) {\n    return (\n      this.x > targetX &&\n      this.x < targetX + targetW &&\n      this.y > targetY &&\n      this.y < targetY + targetH\n    );\n  }\n\n\tdraw(context) {\n\n\t\tcontext.fillStyle = 'rgba(255,255,255,0.5)';\n\t\tcontext.beginPath();\n\t\tcontext.arc(this.x, this.y, 20, 0, Math.PI*2);\n\t\tcontext.fill();\n\n\t}\n\n}\n\n\n//# sourceURL=webpack:///./scripts/controller/mouse.js?");

/***/ }),

/***/ "./scripts/display.js":
/*!****************************!*\
  !*** ./scripts/display.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Display; });\nclass Display {\n\n  constructor(width = window.innerWidth, height = window.innerHeight) {\n\n    this.canvas = document.createElement('canvas');\n    this.width = width;\n    this.height = height;\n    this.canvas.width = this.width;\n    this.canvas.height = this.height;\n    \n    this.context = this.canvas.getContext('2d');\n\n    this.addDisplay();\n\n    this.scale = this.canvas.offsetWidth / this.width;\n\n    window.addEventListener('resize', this.resize.bind(this));\n\n  }\n\n  addDisplay() {\n\n    this.canvas.style.position = 'absolute';\n\n    document.body.appendChild(this.canvas);\n  }\n\n  clear() {\n    this.context.clearRect(0, 0, this.width, this.height);\n  }\n\n  background(color) {\n    this.context.fillStyle = color;\n    this.context.fillRect(0, 0, this.width, this.height);\n  }\n\n  translate(x, y) {\n    this.context.translate(x, y);\n  }\n\n  text( string, font, x, y) {\n    this.context.font = font || '30px Arial';\n    this.context.fillText(string || '', x, y);\n  }\n\n  setColor(color) {\n    this.context.fillStyle = color;\n  }\n\n  setTextAlign(align = this.context.textAlign) {\n    this.context.textAlign = align\n  }\n\n  circle(x = 0, y = 0, radius = 10) {\n    this.context.beginPath();\n    this.context.arc(x,y,radius,0,2*Math.PI);\n    this.context.fill();\n  }\n\n  rect(x = 0, y = 0, width = 0, height = 0) {\n    this.context.fillRect(x, y, width, height);\n  }\n\n  setSize( width, height ) {\n    this.width = width;\n    this.height = height;\n    this.canvas.width = this.width;\n    this.canvas.height = this.height;\n    this.canvas.style.width = this.width + 'px';\n    this.canvas.style.height = this.height + 'px';\n  }\n\n  resize() {\n    this.scale = this.canvas.offsetWidth / this.width;\n  }\n\n}\n\n\n//# sourceURL=webpack:///./scripts/display.js?");

/***/ }),

/***/ "./scripts/effects.js":
/*!****************************!*\
  !*** ./scripts/effects.js ***!
  \****************************/
/*! exports provided: StarBurst, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"StarBurst\", function() { return StarBurst; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Effects; });\n//starburst\nclass StarBurst {\n\n\n  constructor(x, y, l, limit) {\n\n  \tthis.x = x;\n  \tthis.y = y;\n  \tthis.limit = (limit)?limit:30;\n  \tthis.l = (l)?l:15;\n  \tthis.stars = [];\n  \tthis.s = 3;\n  \tthis.r = 2;\n  \tthis.c = ['#fff', '#ddd', '#aaa'];\n    this.remove = false;\n\n  \tfor (var i = 0; i < this.limit; i++) {\n\n  \t\tvar d = Math.random() * Math.PI + Math.PI;\n  \t\tvar s = Math.random() * this.s + this.s - 1;\n  \t\tvar l = Math.random() * this.l + this.l;\n\n  \t\tthis.stars[i] = {\n  \t\t\tx  : this.x,\n  \t\t\ty  : this.y,\n  \t\t\tvx : Math.cos(d) * s,\n  \t\t\tvy : Math.sin(d) * s,\n  \t\t\tl  : l,\n  \t\t\tr  : this.r,\n  \t\t\tc  : this.c[Math.floor(Math.random() * this.c.length)]\n  \t\t}\n\n  \t}\n  }\n\n\tupdate() {\n\n\t\tif(this.stars.length <= 0){\n\t\t\tthis.remove = true;\n\t\t} else {\n\n\t\t\tthis.stars.forEach((s, i) => {\n\n\t\t\t\ts.x += s.vx;\n\t\t    s.y += s.vy;\n\t\t    s.l--;\n\n\t\t    if(\n\t\t    \ts.l < 0 ||\n\t\t    \ts.x < -s.r*2 ||\n\t\t    \ts.y < -s.r*2\n\t\t    ){\n\t\t    \tthis.stars.splice(i, 1);\n\t\t    }\n\n\t\t\t});\n\n\t\t}\n\n\t}\n\n\trender (ctx) {\n\n\t\tthis.stars.forEach((s, i) => {\n\n\t\t\tctx.beginPath();\n\t\t\tctx.arc(s.x, s.y, s.r, 0, s.r * Math.PI, false);\n\t\t\tctx.fillStyle = s.c;\n\t\t\tctx.fill();\n\n\t\t});\n\n\t}\n\n}\n\nclass Effects {\n\n  constructor() {\n    this.list = [];\n  }\n\n  add(item) {\n    this.list.push(item);\n  }\n\n  render(ctx) {\n\n    this.list.forEach(effect => {\n\n      effect.update();\n\n      if(effect.remove) {\n        let index = this.list.indexOf(effect);\n    \t\tif (index > -1) {\n    \t\t    this.list.splice(index, 1);\n            return;\n    \t\t}\n      }\n\n      effect.render(ctx);\n\n    });\n\n  }\n\n}\n\n\n//# sourceURL=webpack:///./scripts/effects.js?");

/***/ }),

/***/ "./scripts/elf.js":
/*!************************!*\
  !*** ./scripts/elf.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Elf; });\n/* harmony import */ var _animatedsprite_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animatedsprite.js */ \"./scripts/animatedsprite.js\");\n/* harmony import */ var _sprite_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sprite.js */ \"./scripts/sprite.js\");\n\n\n\nclass Elf {\n\n  constructor(x = 0, y = 0, row = 0) {\n\n    this.pos = {\n      x: x,\n      y: y,\n    };\n    this.size = {\n      x: 100,\n      y: 100,\n    };\n\n    this.row = row;\n\n    this.energy = 10000;\n    this.health = 10000;\n\n    this.hoverSprite = new _sprite_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n  \t\tx: this.pos.x + 10,\n  \t\ty: this.pos.y,\n  \t\twidth: 80,\n  \t\theight: 80,\n  \t\tstartX: 0,\n  \t\tstartY: 0,\n  \t\turl: '../assets/images/hover.png',\n    });\n\n    this.deadClock = 0;\n\n    this.spriteUrl = '../assets/images/elf.png';\n\n    // create sprite\n    this.sprite = new _animatedsprite_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n      width: this.size.x,\n      height: this.size.y,\n      x: this.pos.x,\n      y: this.pos.y,\n      url: this.spriteUrl,\n      animations: {\n        100:  { x:0, y:0, f:3, s:10 },\n        80:   { x:0, y:1, f:3, s:10 },\n        60:   { x:0, y:2, f:3, s:10 },\n        40:   { x:0, y:3, f:3, s:10 },\n        20:   { x:0, y:4, f:3, s:10 },\n        dead: { x:0, y:5, f:1, s:10 }\n      }\n    });\n\n    this.sprite.currentAnimation = this.sprite.animations[100];\n\n  }\n\n  getCapasaty() {\n\n    if(this.dead) return 0;\n\n    return Math.max(0, Math.round(this.energy/100));\n  }\n\n  getHealth() {\n    return Math.max(0, Math.round(this.health/100));\n  }\n\n  hover() {\n    this.hovering = true;\n  }\n\n  wip() {\n    this.energy = 10000;\n    this.energy = Math.min(10000, this.energy);\n    this.health -= 2000;\n    this.health = Math.min(this.health, 10000);\n\n    this.sprite.currentAnimation = this.sprite.animations[Math.floor(this.health/100)];\n\n    if(this.health <= 0) {\n      this.kill();\n    }\n  }\n\n  update() {\n\n    if(this.dead) {\n\n      this.deathClock--;\n\n      if(this.deathClock < 0) {\n        this.revive();\n      }\n\n      return;\n    };\n\n    this.energy -= 2;\n    this.energy = Math.max(this.energy, 0);\n    //this.health++;\n    //this.health = Math.min(this.health, 10000);\n\n  }\n\n  isColliding(mouse) {\n\n    return (\n      mouse.x > this.pos.x + 10 &&\n      mouse.x < this.pos.x + 90 &&\n      mouse.y > this.pos.y &&\n      mouse.y < this.pos.y + 80\n    );\n\n  }\n\n  kill() {\n    this.dead = true;\n    this.energy = 0;\n    this.health = 0;\n    this.deathClock = 300;\n    this.sprite.currentAnimation = this.sprite.animations.dead;\n\n  }\n\n  revive() {\n    this.dead = false;\n    this.energy = 10000;\n    this.health = 10000;\n    this.sprite.currentAnimation = this.sprite.animations[100];\n  }\n\n  render(display) {\n\n    this.sprite.render(display.context);\n\n    if(this.dead) {\n      display.setTextAlign('center');\n      display.text(`Dead`, '20px monospace', this.pos.x + this.size.x / 2, this.pos.y - 5);\n    } else {\n      display.setTextAlign('left');\n      display.text(`${this.getCapasaty()}%`, '20px monospace', this.pos.x, this.pos.y - 5);\n      display.setTextAlign('right')\n      display.text(`+${this.getHealth()}`, '20px monospace', this.pos.x + this.size.x, this.pos.y - 5);\n    }\n\n    if(this.hovering) {\n      this.hoverSprite.render(display.context);\n    }\n\n    this.hovering = false;\n  }\n\n}\n\n\n//# sourceURL=webpack:///./scripts/elf.js?");

/***/ }),

/***/ "./scripts/endscreen.js":
/*!******************************!*\
  !*** ./scripts/endscreen.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Endscreen; });\n/* harmony import */ var _sprite_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sprite.js */ \"./scripts/sprite.js\");\n\n\nclass Endscreen {\n\n  constructor() {\n    this.failed = false;\n\n    this.gameover = new _sprite_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  \t\tx: 0,\n  \t\ty: 0,\n  \t\twidth: 1280,\n  \t\theight: 720,\n  \t\tstartX: 0,\n  \t\tstartY: 0,\n  \t\turl: '../assets/images/gameover.png',\n    });\n\n    this.win = new _sprite_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  \t\tx: 0,\n  \t\ty: 0,\n  \t\twidth: 1280,\n  \t\theight: 720,\n  \t\tstartX: 0,\n  \t\tstartY: 0,\n  \t\turl: '../assets/images/win.png',\n    });\n  }\n\n  evaluate(game) {\n\n    this.failed = false;\n\n    if(game.timeLeft <= 0) {\n      this.failed = true;\n    }\n\n  }\n\n  update(game) {\n\n    if(\n      game.mouse.isClicked() &&\n      game.mouse.isColliding(558, 510, 171, 48)\n    ) {\n      game.state = 'titlescreen';\n    }\n  }\n\n  render(display) {\n\n    display.background('#111');\n\n    display.setColor('white');\n\n    display.setTextAlign('center');\n\n    if(this.failed) {\n      this.gameover.render(display.context);\n      display.text(`${Math.round((2000000000 - game.giftsMade)/1000000)} million`, 'bold 40px monospace', display.width/2, display.height/2 + 30);\n    } else {\n      this.win.render(display.context);\n      display.text(`${Math.round(game.timeLeft / 60)} days left`, 'bold 40px monospace', display.width/2, display.height/2 + 30);\n    }\n\n    display.setColor('black');\n    display.setTextAlign('right');\n\n    display.text(`${game.deadElves}`, 'bold 40px monospace', 1080, 473);\n\n  }\n\n}\n\n\n//# sourceURL=webpack:///./scripts/endscreen.js?");

/***/ }),

/***/ "./scripts/engine.js":
/*!***************************!*\
  !*** ./scripts/engine.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Engine; });\nclass Engine {\n\n  constructor() {\n\n    this.paused = true;\n    this.now = new Date().getTime();\n    this.deltaTime = 0;\n\n  }\n\n  update() {}\n\n  loop() {\n\n    if(this.paused) return;\n\n    window.requestAnimationFrame(this.loop.bind(this));\n\n    let now = new Date().getTime();\n    this.deltaTime = now - this.now;\n\n    this.update();\n\n    this.now = now;\n\n  }\n\n  stop() {\n    this.paused = true;\n  }\n\n  run() {\n    this.paused = false;\n    this.loop();\n  }\n\n}\n\n\n//# sourceURL=webpack:///./scripts/engine.js?");

/***/ }),

/***/ "./scripts/game.js":
/*!*************************!*\
  !*** ./scripts/game.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Game; });\n/* harmony import */ var _engine_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./engine.js */ \"./scripts/engine.js\");\n/* harmony import */ var _display_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display.js */ \"./scripts/display.js\");\n/* harmony import */ var _audio_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./audio.js */ \"./scripts/audio.js\");\n/* harmony import */ var _controller_mouse_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./controller/mouse.js */ \"./scripts/controller/mouse.js\");\n/* harmony import */ var _elf_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./elf.js */ \"./scripts/elf.js\");\n/* harmony import */ var _sprite_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sprite.js */ \"./scripts/sprite.js\");\n/* harmony import */ var _animatedsprite_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./animatedsprite.js */ \"./scripts/animatedsprite.js\");\n/* harmony import */ var _effects_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./effects.js */ \"./scripts/effects.js\");\n/* harmony import */ var _titlescreen_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./titlescreen.js */ \"./scripts/titlescreen.js\");\n/* harmony import */ var _endscreen_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./endscreen.js */ \"./scripts/endscreen.js\");\n// import local classes\n\n\n\n\n\n\n\n\n\n\n\n// setup game class\nclass Game {\n\n  constructor() {\n\n    // construct engine\n    this.engine = new _engine_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    this.engine.update = this.update.bind(this);\n\n    // add display\n    this.display = new _display_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](1280, 720);\n\n    // add mouse\n    this.mouse = new _controller_mouse_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"](this.display.canvas, this.display.scale);\n\n    // add audio mananger\n    this.audio = new _audio_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\n    this.audio.loadManifest([\n      {\n        url: '/assets/sounds/main.mp3',\n        id: 'main',\n        autoplay: false\n      },\n      {\n        url: '/assets/sounds/punch.mp3',\n        id: 'punch',\n        autoplay: false\n      },\n      {\n        url: '/assets/sounds/death.wav',\n        id: 'death',\n        autoplay: false\n      },\n      {\n        url: '/assets/sounds/hit0.mp3',\n        id: 'hit0',\n        autoplay: false\n      },\n      {\n        url: '/assets/sounds/hit1.mp3',\n        id: 'hit1',\n        autoplay: false\n      },\n      {\n        url: '/assets/sounds/hit2.mp3',\n        id: 'hit2',\n        autoplay: false\n      },\n      {\n        url: '/assets/sounds/hit3.mp3',\n        id: 'hit3',\n        autoplay: false\n      },\n      {\n        url: '/assets/sounds/hit4.mp3',\n        id: 'hit4',\n        autoplay: false\n      },\n      {\n        url: '/assets/sounds/hit5.mp3',\n        id: 'hit5',\n        autoplay: false\n      }\n    ], () => {\n      this.audio.play('main', true);\n      this.engine.run();\n    });\n\n    this.paused = false;\n\n    this.mode = 'easy';\n\n    this.deadElves = 0;\n\n    this.giftsMade = 0;\n\n    this.timeLeft = 0;\n\n    this.elvesGrid = [5, 3];\n\n    this.elves = [];\n\n    this.effects = new _effects_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"]();\n\n    this.titlescreen = new _titlescreen_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"]();\n\n    this.endscreen = new _endscreen_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"]();\n\n    this.state = 'titlescreen';\n\n    this.effectiveness = [0, 0, 0];\n\n    this.createElves();\n\n    this.background = new _sprite_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"]({\n  \t\tx: 0,\n  \t\ty: 0,\n  \t\twidth: 940,\n  \t\theight: 720,\n  \t\tstartX: 0,\n  \t\tstartY: 0,\n  \t\turl: '/assets/images/background_01.png',\n    });\n\n    this.ui = new _sprite_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"]({\n  \t\tx: 940,\n  \t\ty: 0,\n  \t\twidth: 1280-940,\n  \t\theight: 720,\n  \t\tstartX: 0,\n  \t\tstartY: 0,\n  \t\turl: '/assets/images/background_02.png',\n    });\n\n\n    this.beltSprites = [];\n\n    for (var x = 0; x < 47; x++) {\n      for (var y = 0; y < 3; y++) {\n        this.beltSprites.push(new _animatedsprite_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"]({\n      \t\tx: x * 20,\n      \t\ty: y * 100 + y * 115 + 181,\n      \t\twidth: 20,\n      \t\theight: 46,\n          url: '/assets/images/conveierbelt.png',\n          currentAnimation: { x:0, y:0, f:20, s:1 }\n        }));\n      }\n    }\n\n    this.gifts = [];\n\n    for (var x = 0; x < 5; x++) {\n      for (var y = 0; y < 3; y++) {\n        this.gifts.push(new _sprite_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"]({\n      \t\tx: x * -210,\n      \t\ty: y * 100 + y * 115 + 151,\n      \t\twidth: 80,\n      \t\theight: 80,\n      \t\tstartX: 0,\n      \t\tstartY: 0,\n      \t\turl: '/assets/images/gift.png',\n        }));\n      }\n    }\n\n  }\n\n  createElves() {\n\n    this.elves = [];\n\n    for (var x = 0; x < this.elvesGrid[0]; x++) {\n      for (var y = 0; y < this.elvesGrid[1]; y++) {\n        this.elves.push(new _elf_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"](x * 100 + x * 80 + 50, y * 100 + y * 115 + 80, y));\n      }\n    }\n  }\n\n  reset() {\n\n    let days = 365;\n\n    if(this.mode === 'easy') {\n      days = 365;\n    } else if (this.mode === 'hard') {\n      days = 300;\n    } else if (this.mode === 'nightmare') {\n      days = 250;\n    }\n\n    this.deadElves = 0;\n    this.timeLeft = days * 60;\n    this.giftsMade = 0;\n    this.createElves();\n    this.state = 'playing';\n  }\n\n  start(mode = 'easy') {\n    this.mode = mode;\n    this.reset();\n  }\n\n  update() {\n\n    if(this.state === 'titlescreen') {\n      this.titlescreen.update(this);\n      this.titlescreen.render(this.display);\n      this.mouse.draw(this.display.context);\n      this.mouse.update(this.display.scale);\n\n      return;\n    } else if (this.state === 'endscreen') {\n      this.endscreen.update(this);\n      this.endscreen.render(this.display);\n      this.mouse.draw(this.display.context);\n      this.mouse.update(this.display.scale);\n      return;\n    }\n\n    if(\n      this.mouse.isClicked() &&\n      this.mouse.isColliding(1077, 647, 93, 48)\n    ) {\n      this.state = 'titlescreen';\n      this.mouse.update(this.display.scale);\n      this.return;\n    }\n\n\n    this.render();\n\n    if(this.paused) return;\n\n    this.timeLeft--;\n\n    if(this.timeLeft <= 0 || this.giftsMade >= 2000000000) {\n      this.endscreen.evaluate(this);\n      this.state = 'endscreen';\n      return;\n    }\n\n\n    this.effectiveness = [0,0,0];\n\n    this.elves.forEach((elf, index) => {\n\n      this.effectiveness[elf.row] += elf.getCapasaty();\n\n      this.giftsMade += elf.getCapasaty() * 100;\n      elf.update();\n\n      if(elf.dead) return;\n\n      if(elf.isColliding(this.mouse)) {\n        elf.hover();\n\n        if(this.mouse.isClicked()) {\n\n          elf.wip();\n\n          this.effects.add(new _effects_js__WEBPACK_IMPORTED_MODULE_7__[\"StarBurst\"](this.mouse.x, this.mouse.y, 10, 20));\n\n          this.audio.play('punch');\n          this.audio.play(`hit${Math.floor(Math.random() * 6)}`);\n\n          if(elf.dead) {\n\n            this.deadElves++;\n\n            this.audio.play('death');\n          }\n        }\n      }\n    });\n\n    this.beltSprites.forEach((sprite, index) => {\n      sprite.currentAnimation.s =  0.1 + (1 - this.effectiveness[index % 3] / 500);\n    });\n\n    this.gifts.forEach((gift, index) => {\n      gift.pos.x += (this.effectiveness[index % 3] / 500) * (this.effectiveness[index % 3] / 500) * 6 + 0.1;\n\n      if(gift.pos.x > 950) {\n        gift.pos.x = -100;\n      }\n    });\n\n\n    this.mouse.update(this.display.scale);\n\n  }\n\n  render() {\n\n\n    this.display.background('#aaa');\n\n    this.background.render(this.display.context);\n\n    this.beltSprites.forEach(sprite => {\n      sprite.render(this.display.context);\n    });\n\n    this.display.setColor('white');\n\n    this.elves.forEach(elf => {\n      elf.render(this.display);\n    });\n\n    this.gifts.forEach(gift => {\n      gift.render(this.display.context);\n    });\n\n    this.ui.render(this.display.context);\n\n    this.effects.render(this.display.context);\n\n    this.display.setColor('black');\n    this.display.setTextAlign('center');\n\n    this.display.text(`${Math.round(this.timeLeft / 60)}`, 'bold 40px monospace', 1170, 160);\n    this.display.text(`${Math.round(this.effectiveness[0]/5)}%`, 'bold 30px monospace', 1010, 140);\n    this.display.text(`${Math.round(this.effectiveness[1]/5)}%`, 'bold 30px monospace', 1010, 355);\n    this.display.text(`${Math.round(this.effectiveness[2]/5)}%`, 'bold 30px monospace', 1010, 570);\n\n    this.display.setTextAlign('right');\n    this.display.text(this.deadElves.toString(), 'bold 30px monospace', 1170, 570);\n    this.display.text(`${Math.round(this.giftsMade / 1000000)}M`, 'bold 30px monospace', 1200, 376);\n    this.display.text(`2000M`, 'bold 30px monospace', 1200, 424);\n\n\n    this.mouse.draw(this.display.context);\n\n  }\n\n}\n\n\n//# sourceURL=webpack:///./scripts/game.js?");

/***/ }),

/***/ "./scripts/sprite.js":
/*!***************************!*\
  !*** ./scripts/sprite.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Sprite; });\n/* harmony import */ var _vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vector */ \"./scripts/vector.js\");\n\n\nclass Sprite {\n\n\tconstructor({\n\t\tx = 0,\n\t\ty = 0,\n\t\twidth = 0,\n\t\theight = 0,\n\t\tstartX = 0,\n\t\tstartY = 0,\n\t\turl = 'images/tilesheets/default.png',\n\t} = {}) {\n\n\t\tthis.center = [];\n\t\tthis.type = 'sprite';\n\t\tthis.tilesheet = new Image();\n\t\tthis.tilesheet.src = url;\n\t\tthis.start = new _vector__WEBPACK_IMPORTED_MODULE_0__[\"default\"](startX, startY);\n\t\tthis.pos = new _vector__WEBPACK_IMPORTED_MODULE_0__[\"default\"](x, y);\n\t\tthis.size = new _vector__WEBPACK_IMPORTED_MODULE_0__[\"default\"](width, height);\n\t\tthis.angle = 0;\n\n\t}\n\n\tsetPosition(x, y) {\n\t\tthis.pos.set(x, y);\n\t}\n\n\tsetAngle(angle = 0) {\n\t\tthis.angle = angle;\n\t}\n\n\trender(ctx) {\n\n\t\tif(this.angle === 0){\n\n\t\t\tctx.drawImage(\n\t\t\t\tthis.tilesheet,\n\t\t\t\tthis.start.intX,\n\t\t\t\tthis.start.intY,\n\t\t\t\tthis.size.intX,\n\t\t\t\tthis.size.intY,\n\t\t\t\tthis.pos.intX,\n\t\t\t\tthis.pos.intY,\n\t\t\t\tthis.size.intX,\n\t\t\t\tthis.size.intY\n\t\t\t);\n\n\t\t\treturn;\n\t\t}\n\n\t\tctx.translate(this.pos.intX + this.size.intX/2, this.pos.intY + this.size.intY/2);\n\t\tctx.rotate(this.angle);\n\n\t\tctx.drawImage(\n\t\t\tthis.tilesheet,\n\t\t\tthis.start.intX,\n\t\t\tthis.start.intY,\n\t\t\tthis.size.intX,\n\t\t\tthis.size.intY,\n\t\t\t-this.size.intX/2,\n\t\t\t-this.size.intY/2,\n\t\t\tthis.size.intX,\n\t\t\tthis.size.intY\n\t\t);\n\n\t\tctx.rotate(-this.angle);\n\t\tctx.translate(-(this.pos.intX + this.size.intX/2), -(this.pos.intY + this.size.intY/2));\n\n\t}\n}\n\n\n//# sourceURL=webpack:///./scripts/sprite.js?");

/***/ }),

/***/ "./scripts/titlescreen.js":
/*!********************************!*\
  !*** ./scripts/titlescreen.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Titlescreen; });\n/* harmony import */ var _sprite_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sprite.js */ \"./scripts/sprite.js\");\n\n\nclass Titlescreen {\n\n  constructor() {\n    this.sprite = new _sprite_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  \t\tx: 0,\n  \t\ty: 0,\n  \t\twidth: 1280,\n  \t\theight: 720,\n  \t\tstartX: 0,\n  \t\tstartY: 0,\n  \t\turl: '../assets/images/titlescreen.png',\n    });\n  }\n\n  update(game) {\n\n    if(game.mouse.isClicked()){\n\n      if(game.mouse.isColliding(400, 510, 93, 48)) {\n        game.start('easy');\n      } else if (game.mouse.isColliding(597, 510, 93, 48)) {\n        game.start('hard');\n      } else if (game.mouse.isColliding(794, 510, 93, 48)) {\n        game.start('nightmare');\n      }\n\n    };\n\n  }\n\n  render(display) {\n    display.background('#111');\n\n    this.sprite.render(display.context);\n\n  }\n\n}\n\n\n//# sourceURL=webpack:///./scripts/titlescreen.js?");

/***/ }),

/***/ "./scripts/vector.js":
/*!***************************!*\
  !*** ./scripts/vector.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Vector; });\nclass Vector {\n\n\tconstructor(x, y) {\n\n\t\tif(typeof x != \"number\") {\n\t\t\tthrow new Error(\"Invalid x value.\");\n    }\n\n\t\tif(typeof y != \"number\") {\n\t\t\tthrow new Error(\"Invalid y value.\");\n    }\n\n\t\tthis.x = x;\n\t\tthis.y = y;\n\n\t\tthis.subtract.bind(this);\n\n\t}\n\n  get intX() {\n    return Math.round(this.x);\n  }\n\n  get intY() {\n    return Math.round(this.y);\n  }\n\n  set(x, y) {\n\n    this.x = x;\n    this.y = y;\n\n\t\treturn this;\n\n  }\n\n\tadd(vector) {\n\n\t\tthis.x += vector.x;\n\t\tthis.y += vector.y;\n\n\t\treturn this;\n\n\t}\n\n\tsubtract(vector) {\n\n\t\tthis.x -= vector.x;\n\t\tthis.y -= vector.y;\n\n\t\treturn this;\n\n\t}\n\n\tdivide(value) {\n\n\t\tif(typeof value != \"number\") {\n\t\t\tthrow new Error(\"Can't divide by non-number value.\");\n    }\n\n\t\tthis.x /= value;\n\t\tthis.y /= value;\n\n\t\treturn this;\n\n\t}\n\n\tmultiply(value) {\n\n\t\tif(value instanceof Vector) {\n\n\t\t\tthis.x *= value.x;\n\t\t\tthis.y *= value.y;\n\n\t\t} else if(typeof value == \"number\") {\n\n\t\t\tthis.x *= value;\n\t\t\tthis.y *= value;\n\n\t\t} else {\n\n\t\t\tthrow new Error(\"Can't multiply by non-number value.\");\n\n    }\n\n\t\treturn this;\n\n\t}\n\n\tdistanceTo(otherPoint) {\n\t\treturn otherPoint.clone().subtract(this);\n\t}\n\n\tmoveTowards(v, amount) {\n\n\t\tvar dir = new Vector(\n\t\t\tv.x - this.x,\n\t\t\tv.y - this.y\n\t\t).limitTo(amount);\n\t\tthis.x += dir.x;\n\t\tthis.y += dir.y;\n\n\t\treturn this;\n\n\t}\n\n\tlimitTo(value) {\n\n\t\tif(typeof value != \"number\") {\n\t\t\tthrow new Error(\"Can't limit to non-number value.\");\n    }\n\n\t\tthis.divide(this.length);\n\t\tthis.multiply(value);\n\n\t\treturn this;\n\n\t}\n\n\tdotProduct(v) {\n\t\treturn (this.x * v.x) + (this.y * v.y);\n\t}\n\n\tangleFrom(v) {\n\n\t\tlet angle = Math.atan2(v.y - this.y, v.x - this.x) - (Math.PI / 2);\n\t\tangle += Math.PI/2;\n\n\t\tif(angle < 0) {\n      angle += Math.PI * 2;\n    }\n\n\t\treturn angle;\n\n\t}\n\n\tclone() {\n\n\t\treturn new Vector(this.x, this.y);\n\n\t}\n\n\ttoString() {\n\n\t\treturn `(${this.x}, ${this.y})`;\n\n  }\n\n\tequalTo(vector) {\n\n\t\tif(this.x == vector.x && this.y == vector.y) {\n\n\t\t\treturn true;\n\n    }\n\n    return false;\n\n\t}\n\n\tget unitVector() {\n\n\t\tvar length = this.length;\n\n\t\treturn new Vector(\n      this.x / length,\n      this.y / length\n    );\n\n\t}\n\n\tget length() {\n\t\treturn Math.sqrt((this.x * this.x) + (this.y * this.y));\n\t}\n\n\tget minComponent() {\n\t\treturn Math.min(this.x, this.y);\n\t}\n\n\tget maxComponent() {\n\t\treturn Math.max(this.x, this.y);\n\t}\n\n}\n\nVector.fromBearing = function(angle, length) {\n\treturn new Vector(\n\t\tlength * Math.cos(angle),\n\t\tlength * Math.sin(angle)\n\t);\n}\n\nVector.zero = new Vector(0, 0);\nVector.one = new Vector(1, 1);\n\n\n//# sourceURL=webpack:///./scripts/vector.js?");

/***/ })

/******/ });