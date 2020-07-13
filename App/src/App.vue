<template>
  <div id="dolu-sound">
    <router-view />
    <Footer class="footer" />
  </div>
</template>
<script>
import Footer from '@/components/Footer'

export default {
  name: 'DoluSound',
  components: { Footer }
}
</script>
<style lang="scss" scoped>
#dolu-sound {
  width: 100vw;
  height: 100vh;

  .footer {
    margin: 0 auto;
    padding: 0 20px 20px;
  }
}
</style>
