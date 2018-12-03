import BufferLoader from './bufferloader.js';

export default class Audio {

  constructor() {

    this.soundClips = [];

    window.AudioContext = window.AudioContext || window.webkitAudioContext;

    this.context = null;

    if (window.AudioContext) {
  		this.context = new window.AudioContext();
  	}

    var fixAudioContext = function (e) {

			if (this.context) {
				// Create empty buffer
				var buffer = this.context.createBuffer(1, 1, 22050);
				var source = this.context.createBufferSource();
				source.buffer = buffer;
				// Connect to output (speakers)
				source.connect(this.context.destination);
				// Play sound
				if (source.start) {
					source.start(0);
				} else if (source.play) {
					source.play(0);
				} else if (source.noteOn) {
					source.noteOn(0);
				}
			}

			//Remove events
      document.removeEventListener('click', fixAudioContext.bind(this));
      document.removeEventListener('touchstart', fixAudioContext.bind(this));
      document.removeEventListener('touchend', fixAudioContext.bind(this));
		};

    // iOS 6-8
		document.addEventListener('click', fixAudioContext.bind(this));
    document.addEventListener('touchstart', fixAudioContext.bind(this));
    document.addEventListener('touchend', fixAudioContext.bind(this));
  }

  loadManifest(manifest, callback) {

    if(!this.context) return;

    let count = 0;

    manifest.forEach(audio => {
      this.load(audio.url, audio.id, audio.autoplay, () => {
        count++;

        if(count >= manifest.length) {
          if(callback) {
            callback();
          }
        }

      });

    });
  }

  load(sound = null, id = '', play = false, callback) {

    if(!this.context) return;

    if(!sound) {
      throw new Error('missing path to load');
    }

    if(id.length < 1) {
      throw new Error('missing sound name');
    }

    if(this.soundClips[name]) {
      throw new Error('sound already exists');
    }
    const bufferLoader = new BufferLoader(
      this.context,
      [sound],
      (bufferList)=> {


        bufferList.forEach(buffer => {
          let audioSource = this.context.createBufferSource();
          audioSource.buffer = buffer;
          audioSource.connect(this.context.destination);



          if(play) {
            audioSource.start(0);
          }

          this.soundClips[id] = audioSource;

        });

        callback();

      }
    );

    bufferLoader.load();

  }

  play(name = '', loop = false, volume = false) {

    if(!this.context) return;

    if(name.length < 1) {
      throw new Error('missing sound name');
    }

    if(!this.soundClips[name]){
      console.log('no sounds with that name or not ready');
      return;
    }

    const newSource = this.context.createBufferSource();
    newSource.buffer = this.soundClips[name].buffer;
    newSource.loop = loop;

    if(volume) {
      let gainNode = this.context.createGain();
      gainNode.gain.value = volume;
      gainNode.connect(this.context.destination);
      newSource.connect(gainNode);
    } else {
      newSource.connect(this.context.destination);
    }

    if (newSource.start) {
      newSource.start(0);
    } else if (newSource.play) {
      newSource.play(0);
    } else if (newSource.noteOn) {
      newSource.noteOn(0);
    }
  }
}
