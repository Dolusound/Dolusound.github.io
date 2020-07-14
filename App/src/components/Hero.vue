<template>
  <div class="hero">
    <div class="hero__background">
      <video
        class="hero__background__video  hero__background--desktop"
        autoplay
        muted
        loop
      >
        <source src="/videos/background.webm" type="video/webm" />
        <source src="/videos/background.mp4" type="video/mp4" />
      </video>
    </div>
    <div class="hero__background hero__background--mobile">
      <video class="hero__background__video" autoplay muted loop>
        <source src="/videos/background-mobile.webm" type="video/webm" />
        <source src="/videos/background-mobile.mp4" type="video/mp4" />
      </video>
    </div>
    <div class="hero__content">
      <Logo class="hero__content__logo" />
      <ValueProp class="hero__content__value-prop" />
      <ChevronDown />
    </div>
  </div>
</template>
<script>
import ValueProp from './ValueProp'
import ChevronDown from './ChevronDown'
import Logo from './Logo'

export default {
  name: 'Hero',
  components: { ChevronDown, ValueProp, Logo }
}
</script>
<style lang="scss" scoped>
.hero {
  position: relative;

  &__content {
    height: 100%;
    padding: 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    @media (max-width: $screen-md) {
      padding: 40px 20px;
      height: calc(100% - 100px);
    }

    &__logo {
      align-self: flex-start;

      @media (max-width: $screen-md) {
        align-self: center;
      }
    }

    &__value-prop {
      height: 50vw;
      max-height: 350px;
    }
  }

  &__background {
    background: url('/images/background.jpg') center center / cover no-repeat;
    z-index: -1;
    top: 0;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;

    &--mobile {
      @media (min-width: $screen-md+1) {
        display: none;
      }
    }

    &--desktop {
      @media (max-width: $screen-md) {
        display: none;
      }
    }

    &__video {
      min-width: 100%;
      min-height: 100%;
      width: auto;
      height: auto;
    }
  }
}
</style>
