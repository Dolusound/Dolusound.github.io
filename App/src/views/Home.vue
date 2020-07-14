<template>
  <div class="home">
    <Hero class="hero" />
    <div class="info">
      <div class="product">
        <ProductImage />
        <CallToAction class="product__cta" />
      </div>
      <Specs class="specs" />
    </div>
  </div>
</template>
<script>
import Hero from '@/components/Hero'
import ProductImage from '@/components/ProductImage'
import Specs from '@/components/Specs'
import CallToAction from '@/components/CallToAction'

export default {
  name: 'Home',
  components: {
    CallToAction,
    Hero,
    ProductImage,
    Specs
  }
}
</script>
<style lang="scss" scoped>
.hero {
  height: 100vh;
  width: 100vw;
}

.info {
  padding: 100px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.product {
  position: relative;
  width: 100%;
  margin-bottom: 60px;
  text-align: center;

  &__cta {
    margin: auto;
    position: absolute;
    top: 40%;
    left: 0;
    bottom: 0;
    right: 0;
  }
}
</style>
