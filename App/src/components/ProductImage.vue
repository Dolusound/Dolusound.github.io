<template>
  <div class="product-image">
    <img :class="{ active: currentImage === 0 }" src="/images/profile.jpg" />
    <img :class="{ active: currentImage === 1 }" src="/images/front.jpg" />
  </div>
</template>
<script>
export default {
  name: 'ProductImage',
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
.product-image {
  position: relative;
  max-height: 600px;
  height: 100vw;
  width: 100%;

  img {
    position: absolute;
    max-width: 100%;
    max-height: 100%;
    transition: opacity 1s ease-in-out;
    opacity: 0;
    left: 50%;
    transform: translate(-50%, 0);
  }

  .active {
    opacity: 1;
  }
}
</style>
