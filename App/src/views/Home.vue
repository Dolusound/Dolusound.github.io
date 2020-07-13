<template>
  <div class="home">
    <Logo class="logo" />
    <div class="hero">
      <HeroImage />
      <CallToAction class="hero__call-to-action" />
    </div>
    <ChevronDown />
    <div class="info">
      <ValueProp class="value-prop" />
      <Specs class="specs" />
    </div>
  </div>
</template>

<script>
import CallToAction from '@/components/CallToAction'
import ChevronDown from '@/components/ChevronDown'
import HeroImage from '@/components/HeroImage'
import Logo from '@/components/Logo'
import Specs from '@/components/Specs'
import ValueProp from '@/components/ValueProp'

export default {
  name: 'Home',
  components: {
    CallToAction,
    ChevronDown,
    HeroImage,
    Logo,
    Specs,
    ValueProp
  }
}
</script>
<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.logo {
  align-self: flex-start;
  margin: 40px 0 0 40px;

  @media (max-width: $screen-md) {
    align-self: center;
    margin: 20px auto;
  }
}

.hero {
  margin: 0 auto 200px;
  position: relative;
  height: 75vh;
  width: 60vw;
  max-height: 800px;
  max-width: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;

  @media (max-width: $screen-lg) {
    margin: 0 auto 100px;
  }

  @media (max-width: $screen-md) {
    width: 100%;
  }

  &__call-to-action {
    position: absolute;
  }
}

.info {
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
  margin-bottom: 50px;
}

.value-prop {
  @media (max-width: $screen-lg) {
    margin-bottom: 50px;
  }
}
</style>
