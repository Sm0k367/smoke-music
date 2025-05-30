window.addEventListener('DOMContentLoaded', () => {
  const audio = new Audio('https://cdn.suno.ai/audio_MkgNyiWXTwXY9HIb.mp3');
  audio.volume = 0;
  audio.loop = true;

  // Fade in
  let vol = 0;
  const fade = setInterval(() => {
    if (vol < 0.5) {
      vol += 0.01;
      audio.volume = vol;
    } else {
      clearInterval(fade);
    }
  }, 200);

  audio.play();
});
