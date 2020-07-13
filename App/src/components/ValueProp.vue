<template>
  <div class="value-prop title-3">
    <h1>Revolutionary Sound, Sleek Design.</h1>
    <h1>
      For <span class="accented" :key="text">{{ text }}</span
      >.
    </h1>
  </div>
</template>
<script>
export default {
  name: 'ValueProp',
  data() {
    return {
      customers: ['Artists', 'DJs', 'Music Lovers', 'Audiophiles', 'Musicians'],
      currentIndex: 0,
      interval: null
    }
  },
  computed: {
    text() {
      return this.customers[this.currentIndex]
    }
  },
  mounted() {
    this.interval = setInterval(() => {
      if (this.currentIndex >= this.customers.length - 1)
        return (this.currentIndex = 0)
      this.currentIndex++
    }, 1200)
  },
  beforeDestroy() {
    clearInterval(this.interval)
  }
}
</script>
<style lang="scss" scoped>
.value-prop {
  .accented {
    position: relative;
    &:after {
      z-index: -1;
      position: absolute;
      content: '';
      margin: 0 auto;
      left: 0;
      right: 0;
      width: 98%;
      background: $color-accent;
      height: 0.3em;
      bottom: 0.2em;
    }
  }
}
</style>
