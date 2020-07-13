<template>
  <div class="specs">
    <div class="spec" v-for="({ title, description }, i) in specs" :key="i">
      <p class="spec__title subheading-1">{{ title }}</p>
      <p class="body grey-text">{{ description }}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Specs',
  data() {
    return {
      specs: [
        {
          title: 'High Definition Audio',
          description: '16 - 22000 Hz frequency response. 50mm, 16ohm drivers.'
        },
        {
          title: 'Designed for Comfort',
          description:
            '~ 2.5 N contact pressure. HM5 Velor memory foam on-the-ear pads.'
        },
        {
          title: 'Built to Keep you Inspired',
          description: 'Active Noise Cancellation. 22 hour battery life.'
        },
        {
          title: 'Work with all your devices',
          description:
            'Apple W1 chip & Class 1 wireless Bluetooth® + removable 8.5mm cable.'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.specs {
  display: grid;
  grid-template-columns: 500px 500px;
  grid-template-rows: auto;
  row-gap: 50px;
  column-gap: 70px;

  @media (max-width: $screen-lg) {
    grid-template-columns: 1fr;
  }
}

.spec {
  margin: 0 auto;
  text-align: center;
  max-width: 500px;
}
</style>
