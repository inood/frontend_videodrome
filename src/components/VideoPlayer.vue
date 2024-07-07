<template>
  <div class="video-container">
    <video ref="videoPlayer" class="plyr__video-embed" controls></video>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, onBeforeUnmount } from 'vue';
import Plyr from 'plyr';
import Hls from 'hls.js';
import 'plyr/dist/plyr.css';

export default defineComponent({
  name: 'VideoPlayer',
  props: {
    src: {
      type: String,
      required: true,
    },
    poster: {
      type: String,
      required: true,
    }
  },
  setup(props) {
    const videoPlayer = ref<HTMLVideoElement | null>(null);
    let player: Plyr | null = null;

    onMounted(() => {
      if (videoPlayer.value) {
        if (Hls.isSupported()) {
          const hls = new Hls();
          hls.loadSource(props.src);
          hls.attachMedia(videoPlayer.value);
          hls.on(Hls.Events.MANIFEST_PARSED, () => {
            player = new Plyr(videoPlayer.value, {
              captions: { active: true, update: true, language: 'en' },
              quality: {
                default: 576,
                options: hls.levels.map(level => level.height),
                forced: true,
                onChange: (newQuality) => {
                  hls.levels.forEach((level, index) => {
                    if (level.height === newQuality) {
                      hls.currentLevel = index;
                    }
                  });
                },
              },
            });
          });
        } else if (videoPlayer.value.canPlayType('application/vnd.apple.mpegurl')) {
          videoPlayer.value.src = props.src;
          player = new Plyr(videoPlayer.value, {
            captions: { active: true, update: true, language: 'en' },
          });
        }
      }
    });

    onBeforeUnmount(() => {
      if (player) {
        player.destroy();
      }
    });

    return {
      videoPlayer,
    };
  },
});
</script>

<style scoped>
.video-container {

  justify-content: center;
  align-items: center;
  margin: 20px;
  width: 60%; /* Set the desired width */
  height: 428px; /* Set the desired height */
  max-width: 100%; /* Ensure it is responsive */
}

.plyr__video-embed {
  width: 100%;
  height: auto;
}


</style>
