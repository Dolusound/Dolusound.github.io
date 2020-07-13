<template>
  <div class="logo">
    <img src="/branding/logo-circle.png" />
    <h2 class="heading-3">DoluSound</h2>
  </div>
</template>
<script>
export default {
  name: 'Logo'
}
</script>
<style lang="scss" scoped>
.logo {
  display: inline-grid;
  grid-template-columns: auto auto;
  justify-content: center;
  align-items: center;
  grid-gap: 25px;

  img {
    width: 65px;
  }
}
</style>
