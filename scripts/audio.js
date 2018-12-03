import BufferLoader from './bufferloader.js';

export default class Audio {

  constructor() {

    this.soundClips = [];
    this.context = new AudioContext();

  }

  loadManifest(manifest, callback) {

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
    if(name.length < 1) {
      throw new Error('missing sound name');
    }

    if(!this.soundClips[name]){
      console.log('no sounds with that name or not ready');
      return
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

    newSource.start(0);
  }

}
