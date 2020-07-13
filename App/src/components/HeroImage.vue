<template>
  <div class="hero-image">
    <img :class="{ active: currentImage === 0 }" src="/images/profile.jpg" />
    <img :class="{ active: currentImage === 1 }" src="/images/front.jpg" />
  </div>
</template>
<script>
export default {
  name: 'HeroImage',
  data() {
    return {
      currentImage: null,
      interval: null
    }
  },
  mounted() {
    setTimeout(() => {
      this.currentImage = 0
    }, 10)
    this.interval = setInterval(() => {
      if (this.currentImage >= 1) return (this.currentImage = 0)
      this.currentImage++
    }, 6000)
  },
  beforeDestroy() {
    clearInterval(this.interval)
  }
}
</script>
<style lang="scss" scoped>
.hero-image {
  text-align: center;
  margin: 0 auto;
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    position: absolute;
    max-width: 100%;
    max-height: 100%;
    transition: opacity 1s ease-in-out;
    opacity: 0;
    left: 0;
  }

  .active {
    opacity: 1;
  }
}
</style>
