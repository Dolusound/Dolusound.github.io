<template>
  <div class="footer">
    <div class="footer__section--left">
      <p>2020 &copy; DoluSound, Inc.</p>
      <a href="https://www.instagram.com/dolusound/" target="_blank">
        Follow on Instagram
      </a>
    </div>
    <div class="footer__section--center">
      <img src="/branding/logo.png" />
    </div>
    <div class="footer__section--right">
      <p>501 Boylston St, Boston, MA</p>
      <a href="https://angel.co/dolusound" target="_blank">
        Careers
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Footer'
}
</script>
<style lang="scss" scoped>
.footer {
  max-width: 1110px;
  display: grid;
  grid-template-columns: 1fr 50px 1fr;
  grid-template-areas: 'left center right';
  grid-gap: 20px;
  font-size: 15px;

  @media (max-width: $screen-lg) {
    grid-template-columns: 100%;
    grid-template-rows: auto 1fr 1fr;
    grid-template-areas: 'center' 'left' 'right';
  }

  img {
    width: 50px;

    @media (max-width: $screen-lg) {
      width: 100px;
    }
  }

  &__section {
    display: flex;
    justify-content: space-around;
    align-items: center;

    @media (max-width: $screen-lg) {
      justify-content: space-between;
    }

    &--left {
      @extend .footer__section;
      grid-area: left;
    }

    &--center {
      @extend .footer__section;
      grid-area: center;
      text-align: center;
      justify-content: center;
    }

    &--right {
      @extend .footer__section;
      grid-area: right;
    }
  }

  a {
    color: $color-white;
  }
}
</style>
