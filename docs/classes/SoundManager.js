class SoundManager {
  constructor() {
    this._currentMusic = null;
    this.tracks = {
      menu: bgMusic,
      level: levelMusic,
      combat: combatMusic,
      boss: bossMusic,
      boss_low: boss_lowMusic,
      victory: victoryMusic
    };
    this.fadeDuration = 2.0;
    this.lastSwitchTime = 0;

    // Initialize all tracks
    for (const key in this.tracks) {
      const track = this.tracks[key];
      track.amp(0);         // Set initial volume to 0
      track.playMode('sustain');
    }
  }

  get currentMusic() {
    return this._currentMusic;
  }

  set currentMusic(music) {
    this._currentMusic = music;
  }

  setMusic(state) {
    if (isCombatMusicLocked && this.currentMusic === this.tracks['combat']) return;
  
    const newMusic = this.tracks[state];
    if (!newMusic || (newMusic === this._currentMusic && newMusic.isPlaying())) return;
  
    const now = millis();
    if (now - this.lastSwitchTime < 500) return;
    this.lastSwitchTime = now;
  
    // Fade out the current music
    if (this._currentMusic && this._currentMusic !== newMusic) {
      this._currentMusic.amp(0, this.fadeDuration);
      const toStop = this._currentMusic;
      setTimeout(() => {
        toStop.stop();
      }, this.fadeDuration * 1000);
    }
  
    // Fade in the new music
    newMusic.amp(0);
    if (!newMusic.isPlaying()) {
      newMusic.play();
    }
    newMusic.amp(1, this.fadeDuration);
  
    // Finally, update currentMusic
    this._currentMusic = newMusic;
  }
  

  setVolume(volume) {
    if (this._currentMusic) {
      this._currentMusic.amp(volume, 0.1); // Smoothly adjust volume
    }
  }
}

    