<template>
  <div id="body">
    <div>
      <svg width="100" height="100" viewBox="0 0 24 24">
        <path
            d="M21,9H15V22H13V16H11V22H9V9H3V7H21M12,2A2,2 0 0,1 14,4A2,2 0 0,1 12,6C10.89,6 10,5.1 10,4C10,2.89 10.89,2 12,2Z"/>
      </svg>
    </div>
  </div>
</template>
<style lang="scss">
svg {
  position: fixed;
  top: 50%;
  left: 50%;
  margin-top: -50px;
  margin-left: -50px;

  animation: rotate 1s linear infinite;
  animation-play-state: paused;
  animation-delay: calc(var(--scroll) * -1s);

  animation-iteration-count: 1;
  animation-fill-mode: both;
}

@keyframes rotate {
  to {
    transform: rotate(360deg);
  }
}

#body {
  min-height: 500vh;
}

</style>
<script>
import {defineComponent} from 'vue';

// Components

export default defineComponent({
  name: 'HomeView',

  components: {},
  mounted() {
    const DIV = document.getElementById("body")
    document.addEventListener('scroll', function () {
      console.log(DIV)
      DIV.style.setProperty(
          "--scroll",
          window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
      )

      // lastKnownScrollPosition = window.scrollY;
      //
      // if (!ticking) {
      //   window.requestAnimationFrame(function () {
      //     console.log("lastKnownScrollPosition", lastKnownScrollPosition);
      //     ticking = false;
      //   });
      //   ticking = true;
      // }
    });
  },
  data() {
    return {}
  },
});
</script>
