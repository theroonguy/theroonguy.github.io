(function() {
  // Collect all instances on the page
  const widgets = Array.from(document.querySelectorAll('.yt-music'));
  if (widgets.length === 0) return;

  // Load the YouTube IFrame API once
  function loadYouTubeAPI() {
    return new Promise((resolve) => {
      if (window.YT && window.YT.Player) return resolve();
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.head.appendChild(tag);
      window.onYouTubeIframeAPIReady = () => resolve();
    });
  }

  loadYouTubeAPI().then(() => {
    widgets.forEach((root) => {
      const videoId = root.getAttribute('data-video-id');
      const playerHost = root.querySelector('.yt-music__player');

      const playBtn = root.querySelector('.yt-music__play');
      const pauseBtn = root.querySelector('.yt-music__pause');
      const slider = root.querySelector('.yt-music__slider');
      const value = root.querySelector('.yt-music__value');

      let player;
      let pendingPlay = false;

      // Create player on first interaction (faster pages + avoids some autoplay-policy quirks)
      function ensurePlayer() {
        if (player) return;

        player = new YT.Player(playerHost, {
          width: '100%',
          height: '160',              // small "music bar" footprint; increase if you want the full UI
          videoId,
          playerVars: {
            rel: 0,
            playsinline: 1
          },
          events: {
            onReady: () => {
              // enable UI after player is ready
              slider.disabled = false;
              pauseBtn.disabled = false;

              // start at 50% by default (you can change the initial value in the HTML too)
              const v = Number(slider.value || 50);
              player.setVolume(v);
              value.textContent = `${v}%`;

              if (pendingPlay) {
                pendingPlay = false;
                player.playVideo();
              }
            }
          }
        });
      }

      playBtn.addEventListener('click', () => {
        ensurePlayer();
        pendingPlay = true;
        // After user gesture, safe to play and set volume.
        // If onReady hasn't fired yet, the onReady handler will still set volume to the slider value.
        if (player && player.playVideo) player.playVideo();
        if (player && player.setVolume) player.setVolume(Number(slider.value || 50));
      });

      pauseBtn.addEventListener('click', () => {
        if (player && player.pauseVideo) player.pauseVideo();
      });

      slider.addEventListener('input', () => {
        const v = Number(slider.value);
        value.textContent = `${v}%`;
        if (player && player.setVolume) player.setVolume(v);
      });
    });
  });
})();
