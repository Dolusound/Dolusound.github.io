<template>
  <div class="chevron-down">
    <img src="/images/chevron-down.png" @click="scrollDown" />
  </div>
</template>
<script>
export default {
  name: 'ChevronDown',
  methods: {
    scrollDown() {
      window.scroll({
        top: window.innerHeight + 20,
        left: 0,
        behavior: 'smooth'
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.chevron-down {
  animation: pulse 2s 1.5s ease-out infinite;
  text-align: center;

  img {
    animation: fade-slide-up 1s 0.5s ease-out forwards;
    opacity: 0;
    width: 60px;
    cursor: pointer;
  }
}

/* Animations */

@keyframes fade-slide-down {
  0% {
    opacity: 0;
    transform: translateY(-4rem);
  }
  100% {
    opacity: 1;
    transform: none;
  }
}

@keyframes fade-slide-up {
  0% {
    opacity: 0;
    transform: translateY(4rem);
  }
  100% {
    opacity: 1;
    transform: none;
  }
}

@keyframes pulse {
  0% {
    opacity: 1;
    transform: none;
  }
  50% {
    opacity: 0.5;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: none;
  }
}
</style>
