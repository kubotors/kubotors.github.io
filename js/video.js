var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('bgvideo', {
    videoId: 'vRmBCRkhUWQ',
    playerVars: { autoplay: 1, autohide: 1, modestbranding: 0, rel: 0, showinfo: 0, controls: 0, disablekb: 1, enablejsapi: 0, playlist: 'vRmBCRkhUWQ' },
    events: {
      onReady: function(e) {
        e.target.mute();
        e.target.setPlaybackQuality('hd1080');
      }
    }
  });
}
